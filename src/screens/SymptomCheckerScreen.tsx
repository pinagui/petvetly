import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, RotateCcw, ArrowRight, Stethoscope } from 'lucide-react';

interface Opt { label: string; value: string; next?: string; result?: string; }
interface Q { id: string; text: string; sub?: string; options: Opt[]; }
interface Result {
  title: string; description: string;
  urgency: 'low' | 'moderate' | 'high' | 'emergency';
  categoryId?: string; conditionId?: string; actions: string[];
}

/* ─── RESULTS ─────────────────────────────────────────────────────────── */
const RESULTS: Record<string, Result> = {
  /* PATAS / LAMBEDURA */
  'lambe-leve': { title: 'Lambedura — Estágio 1', urgency: 'low', categoryId: 'patas', conditionId: 'lambedura',
    description: 'Lambedura ocasional sem alteração visível. Gatilho ainda não criou ciclo — melhor momento para agir.',
    actions: ['Inspecione espaços entre os dedos com boa luz — procure vermelhidão, grama farpada ou areia', 'Banho de patas pós-passeio: bacia com água morna + 1 col. sopa de vinagre de maçã, 2 minutos', 'Observe por 7 dias: anote horário e contexto para identificar o gatilho (ambiental, alimentar ou comportamental)'] },
  'lambe-moderado': { title: 'Lambedura — Estágio 2', urgency: 'moderate', categoryId: 'patas', conditionId: 'lambedura',
    description: 'Pelo ferrugem/marrom confirma lambedura crônica. Porfirina da saliva oxidou o pelo. O ciclo está estabelecido.',
    actions: ['Acesse o Protocolo Patas Saudáveis completo neste app', 'Mapa de padrão (3 dias): anote horário, duração, contexto', 'Troque produto de limpeza do piso para sabão neutro — cloro/pinho irrita a pele'] },
  'lambe-grave': { title: 'Lambedura — Estágio 3/4', urgency: 'high', categoryId: 'patas', conditionId: 'lambedura',
    description: 'Inflamação ativa ou ferida. Ciclo de lambedura → irritação → mais lambedura. Infecção bacteriana/fúngica é risco real.',
    actions: ['Colar elizabetano durante os picos para quebrar o ciclo', 'Limpe 2x/dia com clorexidina 0,5% diluída — não use água oxigenada', 'Odor forte ou pus: infecção — veterinário em até 48h'] },

  /* VÔMITO */
  'vomito-normal': { title: 'Vômito Matinal — Estômago Vazio', urgency: 'low', categoryId: 'digestivo', conditionId: 'vomito',
    description: 'Bile amarela pela manhã em cão ativo, sem outros sintomas. Estômago vazio → bile irrita a mucosa. Não é doença.',
    actions: ['Petisco leve (1 biscoito) 30 min antes de dormir elimina em 90% dos casos', 'Divida a ração em 3 refeições menores em vez de 2', 'Se outros sintomas aparecerem, reavalie — pode haver gastrite de fundo'] },
  'vomito-atencao': { title: 'Vômito — Requer Manejo', urgency: 'moderate', categoryId: 'digestivo', conditionId: 'vomito',
    description: 'Frequência ou contexto indicam causa que não se resolve sozinha. Gastrite, intolerância ou comer rápido.',
    actions: ['Jejum de 4-6h (sem comida, água disponível em pequenas quantidades)', 'Após jejum: frango cozido sem sal + arroz (1:3), 4 refeições pequenas/dia', 'Retorno gradual à ração em 3 dias. Se vômito voltar com a ração: intolerância alimentar'] },
  'vomito-emergencia': { title: '🚨 EMERGÊNCIA — Veterinário Agora', urgency: 'emergency', categoryId: 'emergencias', conditionId: 'intoxicacao',
    description: 'Os sinais que você descreveu indicam risco imediato de vida. Torção gástrica, corpo estranho, intoxicação ou hemorragia.',
    actions: ['VETERINÁRIO DE EMERGÊNCIA AGORA — não aguarde piora', 'Não ofereça comida, água ou medicamento durante o deslocamento', 'Pesquise "vet emergência 24h" + sua cidade agora'] },

  /* DIARREIA */
  'diarreia-leve': { title: 'Diarreia Leve — Manejo em Casa', urgency: 'low', categoryId: 'digestivo', conditionId: 'diarreia',
    description: 'Diarreia pastosa sem sangue ou prostração. Comum após mudança de ração, estresse ou alimento diferente.',
    actions: ['Jejum de 6-8h, depois dieta branda (frango + arroz) por 2-3 dias', 'Água sempre disponível — risco de desidratação', 'Probiótico veterinário (Proviable, FortiFlora): acelera recuperação da microbiota'] },
  'diarreia-moderada': { title: 'Diarreia — Investigar Causa', urgency: 'moderate', categoryId: 'digestivo', conditionId: 'diarreia',
    description: 'Diarreia há mais de 2 dias ou com muco. Parasitas, disbiose ou doença intestinal subjacente.',
    actions: ['Coproparasitológico (fezes) no veterinário: giárdia e coccídios são subestimados', 'Manter hidratação: ofereça água frequentemente', 'Diarreia com muco amarelo/verde: veterinário em 24-48h'] },
  'diarreia-emergencia': { title: '🚨 Diarreia com Sangue — Emergência', urgency: 'emergency', categoryId: 'emergencias', conditionId: 'intoxicacao',
    description: 'Sangue nas fezes + qualquer sintoma sistêmico indica parvovirose, hemorragia intestinal ou intoxicação grave.',
    actions: ['VETERINÁRIO IMEDIATAMENTE — parvovirose em filhote não vacinado é fatal sem tratamento', 'Não oferecer nada pela boca', 'Leve amostra de fezes se possível'] },

  /* COCEIRA / ALERGIA */
  'coceira-leve': { title: 'Coceira — Nível 1', urgency: 'low', categoryId: 'pele', conditionId: 'alergia',
    description: 'Coceira ocasional sem lesão. Ambiental (ácaros, pólen) ou pulga esporádica. Controlável sem medicação.',
    actions: ['Ômega-3: 1mL por 5kg/dia na ração — reduz inflamação cutânea em 4-6 semanas', 'Antiparasitário mensal: 1 picada de pulga causa reação intensa em cão predisposto', 'Lave a cama com água quente 60°C semanalmente — ácaros são o gatilho mais subestimado'] },
  'coceira-moderada': { title: 'Coceira — Alergia Ativa', urgency: 'moderate', categoryId: 'pele', conditionId: 'alergia',
    description: 'Padrão e localização indicam processo alérgico estabelecido. Sem identificar o gatilho, o problema sempre volta.',
    actions: ['Diário de sintomas por 14 dias: onde coça, quando piora, o que comeu — ambiental vs. alimentar', 'Banho com shampoo de aveia coloidal 2x/semana: 10 min de contato antes de enxaguar, água FRIA', 'Pior no inverno (ácaros/casa fechada) vs. primavera (pólen): isso muda o tratamento'] },

  /* RESPIRATÓRIO */
  'tosse-leve': { title: 'Tosse — Traqueobronquite Kennel Cough', urgency: 'low', categoryId: 'respiratorio', conditionId: 'traqueobronquite',
    description: 'Tosse seca, em honk, após contato com outros cães. Kennel Cough — geralmente autolimitada em 10-14 dias.',
    actions: ['Isolamento de outros cães por 2 semanas (altamente contagioso)', 'Nébulização com soro fisiológico: alivia a tosse seca', 'Coleira peitoral em vez de coleira de pescoço — pressão na traqueia piora a tosse'] },
  'tosse-moderada': { title: 'Tosse — Investigar Causa', urgency: 'moderate', categoryId: 'respiratorio', conditionId: 'traqueobronquite',
    description: 'Tosse persistente, com muco ou após exercício. Pneumonia, colapso de traqueia ou doença cardíaca como causas.',
    actions: ['Veterinário: raio-X de tórax para diferenciar pulmonar vs. cardíaco', 'Tosse pós-exercício em cão sênior: possivelmente cardíaca (edema pulmonar)', 'Braquicéfalo (Buldogue, Pug): colapso de traqueia é muito comum — avalie cirurgia'] },
  'resp-emergencia': { title: '🚨 Dificuldade Respiratória — Emergência', urgency: 'emergency', categoryId: 'emergencias', conditionId: 'intoxicacao',
    description: 'Cão que não respira bem, gengivas azuladas ou colapso por falta de ar é emergência máxima.',
    actions: ['VETERINÁRIO DE EMERGÊNCIA AGORA', 'Gengivas azuis ou cinzas: oxigenação criticamente baixa', 'Não tente posicionar o pescoço ou abrir a boca — leve imediatamente'] },

  /* OLHOS */
  'olho-leve': { title: 'Irritação Ocular — Manejo Inicial', urgency: 'low', categoryId: 'olhos-ouvidos', conditionId: 'conjuntivite',
    description: 'Secreção ou vermelhidão ocular leve. Poeira, pelo ou irritante ambiental. Monitorar evolução.',
    actions: ['Limpe com SF 0,9% ou colírio de limpeza — nunca água da torneira', 'Observe 24-48h: piora rápida = veterinário', 'Não use colírio humano sem orientação veterinária'] },
  'olho-moderado': { title: 'Conjuntivite / Problema Ocular', urgency: 'moderate', categoryId: 'olhos-ouvidos', conditionId: 'conjuntivite',
    description: 'Olho vermelho com secreção, lacrimejamento excessivo ou coça muito. Infecção, alergia ou problema estrutural.',
    actions: ['Veterinário: diferenciação entre conjuntivite bacteriana, viral e alérgica muda o tratamento', 'Não forçar abertura do olho doloroso', 'Colírio antibiótico exige receita e diagnóstico correto'] },
  'olho-grave': { title: '🔶 Emergência Ocular — Alta Urgência', urgency: 'high', categoryId: 'oftalmologico', conditionId: 'glaucoma',
    description: 'Olho fechado com dor, nuvem branca/azul na córnea, ou olho aumentado. Pode ser úlcera de córnea ou glaucoma.',
    actions: ['Veterinário HOJE — úlcera de córnea perfura em horas se não tratada', 'Olho muito aumentado e duro: glaucoma — cegueira em 24-48h sem tratamento de emergência', 'Não colocar nada no olho sem orientação'] },

  /* OUVIDO */
  'ouvido-moderado': { title: 'Otite — Tratamento Necessário', urgency: 'moderate', categoryId: 'olhos-ouvidos', conditionId: 'otite',
    description: 'Balanço de cabeça, coçar a orelha e odor indicam otite. Bacteria, fungo ou ácaros — diagnóstico diferencia.',
    actions: ['Veterinário: otoscopia + citologia do canal (define se bacteriana, fúngica ou ácaro)', 'Limpeza de ouvido só com produto veterinário específico — nunca cotonete fundo', 'Raça predisposta (Cocker, Labrador): limpeza semanal de prevenção'] },

  /* ORTOPEDIA / LOCOMOÇÃO */
  'orto-leve': { title: 'Claudicação — Investigar', urgency: 'low', categoryId: 'articulacoes', conditionId: 'displasia-quadril',
    description: 'Manqueira leve ou relutância em subir escadas. Dor articular, entorse ou início de displasia.',
    actions: ['Observe por 24-48h em repouso: melhora espontânea = provável entorse leve', 'Não ofereça analgésico humano (ibuprofeno e paracetamol são tóxicos para cão)', 'Raça grande com manqueira recorrente: veterinário para raio-X de quadril'] },
  'orto-moderado': { title: 'Problema Ortopédico — Consulta Necessária', urgency: 'moderate', categoryId: 'articulacoes', conditionId: 'displasia-quadril',
    description: 'Claudicação persistente, dificuldade de se levantar ou perna de trás arrastada. Displasia, artrite ou lesão ligamentar.',
    actions: ['Veterinário: raio-X define desplasia, luxação de patela ou ruptura de LCA', 'Anti-inflamatório só com receita veterinária — dose e produto corretos', 'Fisioterapia e hidrotearia: frequentemente mais eficaz que só medicação'] },
  'orto-emergencia': { title: '🔶 Urgência Neurológica ou Ortopédica', urgency: 'high', categoryId: 'coluna', conditionId: 'hernia-discal',
    description: 'Paralisia súbita, arraste de membro, ou Dachshund que para de andar. Hérnia discal — janela cirúrgica de 24h.',
    actions: ['VETERINÁRIO IMEDIATAMENTE — paralisia piorada progressivamente', 'Transporte sem flexionar a coluna: prancha rígida ou caixa', 'Cirurgia nas primeiras 24h: 90% de recuperação vs. 40% após 48h'] },

  /* URINÁRIO */
  'urina-leve': { title: 'Micção Frequente — Investigar ITU', urgency: 'moderate', categoryId: 'renal', conditionId: 'irc',
    description: 'Urina muito frequente, em pequena quantidade, com esforço ou lambe a genitália. ITU é a causa mais comum.',
    actions: ['Veterinário: urinálise + urocultura (diagnóstico definitivo de ITU)', 'Não ofereça cranberry sem orientação — não substitui antibiótico', 'Aumento da hidratação: mais água facilita o tratamento'] },
  'urina-grave': { title: '🚨 Obstrução Urinária — Emergência', urgency: 'emergency', categoryId: 'bexiga', conditionId: 'itu-cistite',
    description: 'Cão macho que tenta urinar e não consegue, com abdome tenso. Obstrução urinária é fatal em 24-48h.',
    actions: ['VETERINÁRIO DE EMERGÊNCIA IMEDIATAMENTE', 'Obstrução em macho é diferente de fêmea — muito mais grave por diferença anatômica', 'Não palpe o abdome com força'] },
  'urina-sangue': { title: '🔶 Sangue na Urina — Alta Urgência', urgency: 'high', categoryId: 'bexiga', conditionId: 'itu-cistite',
    description: 'Hematúria (urina rosada/vermelha) indica ITU grave, cálculo urinário ou tumor de bexiga.',
    actions: ['Veterinário hoje: urinálise + ultrassom de bexiga', 'Cálculo urinário: dieta específica ou cirurgia dependendo do tipo', 'Sangue + dor ao urinar: emergência'] },

  /* APETITE / PESO */
  'apetite-moderado': { title: 'Inapetência — Investigar Causa', urgency: 'moderate', categoryId: 'digestivo', conditionId: 'vomito',
    description: 'Cão que não come por 24-48h. Pode ser estresse, dor, náusea ou doença sistêmica.',
    actions: ['Mais de 48h sem comer: veterinário — cão não deve ficar mais de 2 dias sem alimentação', 'Ofereça alimento mais palatável (frango cozido) para diferenciar enjoo de seletividade', 'Verifique: mudou a ração recentemente? Tem dor ao se abaixar para comer? (problema de coluna)'] },
  'apetite-grave': { title: '🔶 Inapetência + Outros Sintomas', urgency: 'high', categoryId: 'digestivo', conditionId: 'vomito',
    description: 'Não comer + letargia, vômito ou emagrecimento rápido indica doença sistêmica ativa.',
    actions: ['Veterinário HOJE: hemograma + bioquímica sanguínea', 'Não medique em casa — causa pode ser hepática, renal ou oncológica', 'Leve ao veterinário com informações: há quanto tempo, outros sintomas, medicamentos em uso'] },

  /* SEDE / DIABETES / CUSHING */
  'diabetes-atencao': { title: 'Sede e Urina Excessivas — Investigar', urgency: 'moderate', categoryId: 'endocrino', conditionId: 'diabetes',
    description: 'Polidipsia + poliúria (bebe e urina muito) aponta para diabetes, Cushing, insuficiência renal ou hepática.',
    actions: ['Veterinário: hemograma, glicemia, função renal + hepática', 'Diabetes canina: insulina + dieta específica — manejável', 'Cushing: cortisol plasmático ou teste de supressão com dexametasona'] },

  /* FEBRE / PROSTRAÇÃO */
  'febre-moderada': { title: 'Febre / Prostração — Investigar', urgency: 'moderate', categoryId: 'infectologico', conditionId: 'leptospirose',
    description: 'Cão abatido, sem fome, com temperatura acima de 39,5°C. Pode ser infecção bacteriana, viral ou exposição a toxina.',
    actions: ['Veterinário: hemograma + PCR para diferenciar infecção bacteriana de viral', 'Não ofereça dipirona humana sem orientação veterinária — dose e segurança diferem', 'Febre + vômito + histórico de poça d\'água: leptospirose — emergência'] },
  'febre-emergencia': { title: '🚨 Febre Alta + Outros Sintomas', urgency: 'emergency', categoryId: 'infectologico', conditionId: 'leptospirose',
    description: 'Febre alta + sangramento, icterícia, ou fraqueza severa indica leptospirose, parvovirose ou sepse.',
    actions: ['VETERINÁRIO DE EMERGÊNCIA IMEDIATAMENTE', 'Leptospirose: zoonose — se suspeita, lave as mãos ao manipular o cão', 'Leve histórico de vacinação'] },

  /* DENTAL */
  'dental-moderado': { title: 'Doença Periodontal — Necessita Avaliação', urgency: 'moderate', categoryId: 'dental', conditionId: 'doenca-periodontal',
    description: 'Mau hálito intenso, sangramento ou resistência ao toque na boca. 80% dos cães > 3 anos têm doença periodontal.',
    actions: ['Veterinário: avaliação oral + profilaxia dentária (limpeza sob anestesia)', 'Mau hálito extremo pode indicar dente morto ou abscesso: urgente', 'Escovação diária: única prevenção eficaz'] },

  /* NÓDULO / MASSA */
  'nodulo-atencao': { title: 'Nódulo / Massa — Avaliar', urgency: 'moderate', categoryId: 'oncologico', conditionId: 'mastocitoma',
    description: 'Nódulo subcutâneo ou massa visível. A maioria é benigna, mas diagnóstico precoce salva vidas.',
    actions: ['Veterinário: PAAF (punção por agulha fina) ou biópsia — único diagnóstico definitivo', 'Nódulo que cresce rápido, sangrante ou aderido: urgência relativa', 'Regra: todo nódulo novo em cão sênior merece avaliação'] },
  'nodulo-urgente': { title: '🔶 Massa de Crescimento Rápido', urgency: 'high', categoryId: 'oncologico', conditionId: 'mastocitoma',
    description: 'Massa de rápido crescimento, sangrante, ulcerada ou que muda de cor. Pode ser mastocitoma ou sarcoma.',
    actions: ['Veterinário HOJE: mastocitoma pode degranular com manipulação (não apertar)', 'Estadiamento oncológico: raio-X de tórax + ultrassom abdominal', 'Cirurgia precoce tem melhor prognóstico em tumores sólidos'] },

  /* COMPORTAMENTO */
  'ansiedade': { title: 'Ansiedade de Separação', urgency: 'moderate', categoryId: 'comportamento', conditionId: 'ansiedade-separacao',
    description: 'Padrão clássico vinculado à sua saída/chegada. Não é manha — é medo real. Protocolo de dessensibilização funciona.',
    actions: ['Pegue as chaves + vista casaco + abra a porta... e não saia. Repita 20x/dia. Quebra a associação em 2 semanas', 'Kong com pasta de amendoim congelado antes de sair: ocupa 30-45 min', 'Ignore 3-5 min ao chegar — cumprimento exuberante reforça a diferença presença/ausência'] },

  /* EMERGÊNCIA GERAL */
  'emergencia-geral': { title: '🚨 Situação de Emergência', urgency: 'emergency', categoryId: 'emergencias', conditionId: 'intoxicacao',
    description: 'O quadro descrito não tem manejo domiciliar eficaz e pode colocar a vida do seu cão em risco.',
    actions: ['VETERINÁRIO DE EMERGÊNCIA IMEDIATAMENTE', 'Não tente medicar em casa', 'Acesse o Protocolo de Emergências neste app enquanto se desloca'] },
};

/* ─── QUESTIONS ───────────────────────────────────────────────────────── */
const QS: Q[] = [
  /* Tela inicial */
  { id: 'q1', text: 'O que está acontecendo com seu cão?', sub: 'Escolha o que melhor descreve a situação principal',
    options: [
      { label: '🐾 Patas / pele (lambe, coça, ferida)', value: 'pele', next: 'q_pele_inicio' },
      { label: '🤢 Vômito ou diarreia', value: 'digestivo', next: 'q_digestivo_inicio' },
      { label: '😤 Respiração, tosse ou engasgo', value: 'resp', next: 'q_resp1' },
      { label: '👁️ Olho ou ouvido com problema', value: 'olho_ouvido', next: 'q_olho_ouvido' },
      { label: '🦴 Mancando ou não consegue se mover', value: 'orto', next: 'q_orto1' },
      { label: '💧 Problema urinário (xixi)', value: 'urina', next: 'q_urina1' },
      { label: '🍽️ Não está comendo / emagrecendo', value: 'apetite', next: 'q_apetite1' },
      { label: '😰 Comportamento preocupante', value: 'comp', next: 'q_comp1' },
      { label: '🌡️ Febre / prostração / abatimento', value: 'febre', next: 'q_febre1' },
      { label: '🚨 Emergência — parece grave agora', value: 'emerg', next: 'q_emerg1' },
    ]
  },

  /* PELE / PATAS */
  { id: 'q_pele_inicio', text: 'Qual é o problema principal na pele ou patas?', options: [
    { label: '🐾 Lambe as patas excessivamente', value: 'lambe', next: 'q_patas1' },
    { label: '😣 Coça o corpo, orelha ou rosto', value: 'coceira', next: 'q_coceira1' },
    { label: '🔴 Ferida, corte ou nódulo na pele', value: 'ferida', next: 'q_ferida1' },
    { label: '🦱 Pelo caindo muito (alopecia)', value: 'pelo', result: 'coceira-moderada' },
  ]},
  { id: 'q_patas1', text: 'Há quanto tempo ele lambe as patas?', sub: 'Tempo é o indicador mais importante',
    options: [
      { label: 'Começou essa semana', value: 'novo', next: 'q_patas2' },
      { label: 'Há 2 a 4 semanas', value: 'medio', next: 'q_patas2' },
      { label: 'Meses — é um hábito', value: 'longo', next: 'q_patas2' },
      { label: 'Anos, mas piorou recentemente', value: 'piora', next: 'q_patas2' },
    ]},
  { id: 'q_patas2', text: 'Como está a aparência da pata?', options: [
    { label: 'Normal — pelo claro, pele rosa', value: 'normal', result: 'lambe-leve' },
    { label: 'Pelo amarelado ou cor ferrugem', value: 'ferrugem', result: 'lambe-moderado' },
    { label: 'Pelo bem escuro (marrom/preto)', value: 'escuro', result: 'lambe-moderado' },
    { label: 'Vermelha, úmida, inchada ou com ferida', value: 'grave', result: 'lambe-grave' },
  ]},
  { id: 'q_coceira1', text: 'Onde ele se coça principalmente?', options: [
    { label: 'Patas (lambe e/ou coça)', value: 'patas', next: 'q_coceira2' },
    { label: 'Orelhas (balance cabeça, coça com pata)', value: 'orelhas', result: 'ouvido-moderado' },
    { label: 'Virilha, barriga ou axilas', value: 'barriga', next: 'q_coceira2' },
    { label: 'Por todo o corpo intensamente', value: 'geral', next: 'q_coceira2' },
  ]},
  { id: 'q_coceira2', text: 'A coceira piora em alguma época?', sub: 'Diferencia alergia ambiental de alimentar', options: [
    { label: 'Sim, pior na primavera/verão', value: 'sazonal', result: 'coceira-moderada' },
    { label: 'Sim, piora no inverno (casa fechada)', value: 'inverno', result: 'coceira-moderada' },
    { label: 'Constante o ano todo', value: 'constante', result: 'coceira-moderada' },
    { label: 'Começou há poucos dias, sem padrão', value: 'novo', result: 'coceira-leve' },
  ]},
  { id: 'q_ferida1', text: 'Como é a ferida ou lesão?', options: [
    { label: 'Corte ou arranhão recente superficial', value: 'corte', result: 'lambe-leve' },
    { label: 'Nódulo ou caroço sob a pele', value: 'nodulo', next: 'q_nodulo1' },
    { label: 'Ferida aberta, sangrante ou infectada', value: 'aberta', result: 'lambe-grave' },
    { label: 'Massa que cresce rápido ou sangra', value: 'massa', result: 'nodulo-urgente' },
  ]},
  { id: 'q_nodulo1', text: 'Como é o nódulo?', options: [
    { label: 'Pequeno, mole, está há meses sem crescer', value: 'benig', result: 'nodulo-atencao' },
    { label: 'Cresceu rápido nos últimos 30 dias', value: 'rapido', result: 'nodulo-urgente' },
    { label: 'Duro, aderido à pele, ou ulcerado', value: 'maligno', result: 'nodulo-urgente' },
    { label: 'Cão lambe ou morde o local constante', value: 'irrita', result: 'nodulo-atencao' },
  ]},

  /* DIGESTIVO */
  { id: 'q_digestivo_inicio', text: 'Qual problema digestivo está vendo?', options: [
    { label: '🤢 Vomitando', value: 'vomito', next: 'q_vomito1' },
    { label: '💩 Diarreia', value: 'diarreia', next: 'q_diarreia1' },
    { label: '🤢💩 Vômito E diarreia juntos', value: 'ambos', next: 'q_vomito1' },
    { label: '🫁 Barriga distendida sem vomitar', value: 'distensao', result: 'vomito-emergencia' },
  ]},
  { id: 'q_vomito1', text: 'O vômito tem sangue?', sub: 'Mais importante — responda com cuidado', options: [
    { label: 'Não, nenhum sinal de sangue', value: 'nao', next: 'q_vomito2' },
    { label: 'Sim — sangue vermelho vivo', value: 'sim_vivo', result: 'vomito-emergencia' },
    { label: 'Sim — cor de borra de café ou escuro', value: 'sim_escuro', result: 'vomito-emergencia' },
  ]},
  { id: 'q_vomito2', text: 'Está tentando vomitar sem conseguir?', sub: 'Esforço sem expulsão pode indicar torção gástrica', options: [
    { label: 'Não, vômito sai normalmente', value: 'nao', next: 'q_vomito3' },
    { label: 'Sim — faz força e não sai nada', value: 'sim', result: 'vomito-emergencia' },
  ]},
  { id: 'q_vomito3', text: 'Quando acontece principalmente?', options: [
    { label: 'Pela manhã, antes da primeira refeição (bile amarela)', value: 'manha', result: 'vomito-normal' },
    { label: 'Logo após comer, comida quase inteira', value: 'posrefeicao', result: 'vomito-atencao' },
    { label: 'Aleatório, sem relação com refeição', value: 'aleatorio', result: 'vomito-atencao' },
    { label: 'Muitas vezes — mais de 4x hoje', value: 'muitas', result: 'vomito-emergencia' },
  ]},
  { id: 'q_diarreia1', text: 'Como são as fezes?', options: [
    { label: 'Pastosas, mas sem sangue nem muco', value: 'pastosa', next: 'q_diarreia2' },
    { label: 'Aquosas com muco (amarelo/verde)', value: 'muco', result: 'diarreia-moderada' },
    { label: 'Com sangue vivo ou escuro', value: 'sangue', result: 'diarreia-emergencia' },
    { label: 'Cão está muito prostrado além da diarreia', value: 'prostrado', result: 'diarreia-emergencia' },
  ]},
  { id: 'q_diarreia2', text: 'Há quanto tempo tem diarreia?', options: [
    { label: 'Hoje — começou há poucas horas', value: 'hoje', result: 'diarreia-leve' },
    { label: '1 a 2 dias', value: '2dias', result: 'diarreia-leve' },
    { label: 'Mais de 3 dias sem melhora', value: '3dias', result: 'diarreia-moderada' },
    { label: 'Crônica — há semanas ou meses', value: 'cronica', result: 'diarreia-moderada' },
  ]},

  /* RESPIRATÓRIO */
  { id: 'q_resp1', text: 'O que você está observando?', options: [
    { label: 'Tosse seca (honk, como se algo estivesse na garganta)', value: 'tosse_seca', next: 'q_resp2' },
    { label: 'Tosse com catarro ou muco', value: 'tosse_umida', next: 'q_resp2' },
    { label: 'Respiração rápida, com esforço ou barulho', value: 'esforco', next: 'q_resp3' },
    { label: 'Engasgado ou sufocando agora', value: 'engasgo', result: 'resp-emergencia' },
  ]},
  { id: 'q_resp2', text: 'Há quanto tempo tosse?', options: [
    { label: 'Começou hoje ou ontem', value: 'recente', next: 'q_resp_contato' },
    { label: 'Há 3-7 dias', value: 'dias', result: 'tosse-leve' },
    { label: 'Mais de 1 semana sem melhora', value: 'semana', result: 'tosse-moderada' },
    { label: 'Piora com exercício (especialmente em sênior)', value: 'exercicio', result: 'tosse-moderada' },
  ]},
  { id: 'q_resp_contato', text: 'Teve contato com outros cães recentemente?', sub: 'Determina se é Kennel Cough (tosse dos canis)', options: [
    { label: 'Sim — petshop, hotel, parque ou canil', value: 'sim', result: 'tosse-leve' },
    { label: 'Não, ficou isolado', value: 'nao', result: 'tosse-moderada' },
  ]},
  { id: 'q_resp3', text: 'Como estão as gengivas?', sub: 'Cor das gengivas é sinal vital respiratório', options: [
    { label: 'Róseas — cor normal', value: 'normal', result: 'tosse-moderada' },
    { label: 'Azuladas, cinzas ou esbranquiçadas', value: 'azul', result: 'resp-emergencia' },
    { label: 'Cão é Buldogue, Pug ou similar (focinho achatado)', value: 'braqui', result: 'tosse-moderada' },
  ]},

  /* OLHO / OUVIDO */
  { id: 'q_olho_ouvido', text: 'Onde está o problema?', options: [
    { label: '👁️ Olho — vermelho, secreção, lacrimeja', value: 'olho', next: 'q_olho1' },
    { label: '👂 Ouvido — coça, chacoalha a cabeça, mau cheiro', value: 'ouvido', result: 'ouvido-moderado' },
    { label: '👁️ Olho fechado com dor aparente', value: 'olho_dor', result: 'olho-grave' },
    { label: '👁️ Olho aumentado, duro ou com nuvem', value: 'olho_aumentado', result: 'olho-grave' },
  ]},
  { id: 'q_olho1', text: 'Há quanto tempo e qual a intensidade?', options: [
    { label: 'Hoje — secreção leve, olho não parece doloroso', value: 'leve', result: 'olho-leve' },
    { label: 'Mais de 2 dias ou secreção amarela/verde', value: 'moderado', result: 'olho-moderado' },
    { label: 'Olho vermelho intenso com coça e dor', value: 'grave', result: 'olho-grave' },
    { label: 'Raça braquicéfala (olho saltado)', value: 'braqui', result: 'olho-grave' },
  ]},

  /* ORTOPEDIA */
  { id: 'q_orto1', text: 'O que você está vendo na mobilidade?', options: [
    { label: 'Mancando de uma perna (apoia mas evita peso)', value: 'manqueira', next: 'q_orto2' },
    { label: 'Não consegue apoiar a perna — suspensa no ar', value: 'sem_apoio', next: 'q_orto3' },
    { label: 'Membros traseiros fraquejando ou arrastando', value: 'traseiro', result: 'orto-emergencia' },
    { label: 'Dificuldade de se levantar / subir escadas', value: 'levantar', result: 'orto-moderado' },
  ]},
  { id: 'q_orto2', text: 'Há quanto tempo manca?', options: [
    { label: 'Começou hoje após atividade intensa', value: 'hoje', result: 'orto-leve' },
    { label: 'Há 2-3 dias sem melhora com repouso', value: '3dias', result: 'orto-moderado' },
    { label: 'Manqueira recorrente — já voltou outras vezes', value: 'recorrente', result: 'orto-moderado' },
    { label: 'Raça pequena com luxação de patela', value: 'patela', result: 'orto-moderado' },
  ]},
  { id: 'q_orto3', text: 'A perna tem aparência normal?', options: [
    { label: 'Sim, aparência normal mas não apoia', value: 'normal', result: 'orto-moderado' },
    { label: 'Osso visível, sangramento ou deformidade', value: 'fratura', result: 'emergencia-geral' },
    { label: 'Inchaço grande na articulação', value: 'inchaco', result: 'orto-moderado' },
  ]},

  /* URINÁRIO */
  { id: 'q_urina1', text: 'Qual é o problema com o xixi?', options: [
    { label: 'Urina mais vezes que o normal, pouco de cada vez', value: 'freq', result: 'urina-leve' },
    { label: 'Sangue na urina (rosada ou vermelha)', value: 'sangue', result: 'urina-sangue' },
    { label: 'Tenta urinar e não sai (especialmente macho)', value: 'obstr', next: 'q_urina_obstr' },
    { label: 'Bebe e urina muito mais que o normal', value: 'pd_pu', result: 'diabetes-atencao' },
  ]},
  { id: 'q_urina_obstr', text: 'Faz quanto tempo que tenta sem conseguir?', options: [
    { label: 'Poucas horas hoje — primeiro episódio', value: 'inicio', result: 'urina-grave' },
    { label: 'Mais de 6 horas sem conseguir urinar', value: 'muito', result: 'emergencia-geral' },
  ]},

  /* APETITE */
  { id: 'q_apetite1', text: 'Há quanto tempo não está comendo?', options: [
    { label: 'Só hoje — pulou uma refeição', value: 'hoje', result: 'apetite-moderado' },
    { label: '1 a 2 dias sem apetite', value: '2dias', result: 'apetite-moderado' },
    { label: 'Mais de 3 dias ou emagrecendo visivelmente', value: '3dias', result: 'apetite-grave' },
    { label: 'Come mas emagreceu muito sem causa aparente', value: 'emagreceu', result: 'apetite-grave' },
  ]},

  /* COMPORTAMENTO */
  { id: 'q_comp1', text: 'Que tipo de comportamento está vendo?', options: [
    { label: 'Destruição, latido ou urina quando fica sozinho', value: 'separacao', result: 'ansiedade' },
    { label: 'Medo intenso de fogos, trovão, barulhos', value: 'medo', result: 'ansiedade' },
    { label: 'Agressividade repentina que nunca teve', value: 'agressivo', next: 'q_agressivo1' },
    { label: 'Muito quieto, letárgico, prostrado', value: 'letargia', next: 'q_letargia1' },
  ]},
  { id: 'q_agressivo1', text: 'A agressividade surgiu de repente em cão antes dócil?', sub: 'Agressividade repentina é sinal clínico, não comportamental', options: [
    { label: 'Sim — era dócil e mudou de repente', value: 'sim', result: 'emergencia-geral' },
    { label: 'Não — sempre teve esse comportamento', value: 'nao', result: 'ansiedade' },
  ]},
  { id: 'q_letargia1', text: 'Há quanto tempo está prostrado?', options: [
    { label: 'Só hoje — pode ter sido atividade intensa', value: 'hoje', result: 'apetite-moderado' },
    { label: 'Desde ontem ou 2 dias', value: '2dias', result: 'vomito-atencao' },
    { label: 'Mais de 3 dias sem melhora', value: '3dias', result: 'apetite-grave' },
  ]},

  /* FEBRE */
  { id: 'q_febre1', text: 'Além do abatimento, há outros sinais?', options: [
    { label: 'Apenas quieto e sem fome, mas alerta', value: 'leve', result: 'febre-moderada' },
    { label: 'Vômito ou diarreia junto', value: 'vomito', result: 'febre-moderada' },
    { label: 'Gengivas ou olhos amarelados (icterícia)', value: 'ictericia', result: 'febre-emergencia' },
    { label: 'Sangramento, convulsão ou colapso', value: 'grave', result: 'emergencia-geral' },
  ]},

  /* EMERGÊNCIA */
  { id: 'q_emerg1', text: 'O que você está vendo?', options: [
    { label: 'Engasgado, sufocando ou não respira bem', value: 'engasgo', result: 'resp-emergencia' },
    { label: 'Convulsão ou tremores incontroláveis', value: 'conv', result: 'emergencia-geral' },
    { label: 'Barriga muito distendida, tentando vomitar sem conseguir', value: 'torcao', result: 'vomito-emergencia' },
    { label: 'Ingeriu tóxico (chocolate, uva, xilitol, veneno de rato)', value: 'toxico', result: 'vomito-emergencia' },
    { label: 'Picada de cobra, abelha ou animal', value: 'picada', result: 'emergencia-geral' },
    { label: 'Trauma (atropelamento, queda, briga)', value: 'trauma', result: 'emergencia-geral' },
  ]},
];

/* ─── URGENCY VISUAL ──────────────────────────────────────────────────── */
const UV: { [k: string]: { bg: string; border: string; text: string; icon: string; label: string } } = {
  low:       { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', icon: '✅', label: 'Acompanhe em casa' },
  moderate:  { bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-700',   icon: '⚠️', label: 'Requer atenção' },
  high:      { bg: 'bg-orange-50',  border: 'border-orange-200',  text: 'text-orange-700',  icon: '🔶', label: 'Alta urgência' },
  emergency: { bg: 'bg-red-50',     border: 'border-red-200',     text: 'text-red-700',     icon: '🚨', label: 'EMERGÊNCIA' },
};

/* ─── COMPONENT ───────────────────────────────────────────────────────── */
export default function SymptomCheckerScreen() {
  const navigate = useNavigate();
  const [curId, setCurId] = useState('q1');
  const [history, setHistory] = useState<string[]>([]);
  const [result, setResult] = useState<Result | null>(null);

  const q = QS.find(x => x.id === curId);

  const pick = (opt: Opt) => {
    if (opt.result) {
      setResult(RESULTS[opt.result] ?? RESULTS['emergencia-geral']);
    } else if (opt.next) {
      setHistory(h => [...h, curId]);
      setCurId(opt.next!);
    }
  };

  const back = () => {
    if (result) { setResult(null); }
    else if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory(h => h.slice(0, -1));
      setCurId(prev);
    }
  };

  const reset = () => { setCurId('q1'); setHistory([]); setResult(null); };

  const uv = result ? UV[result.urgency] : null;
  const canBack = history.length > 0 || !!result;

  return (
    <div className="flex flex-col min-h-full" style={{ background: 'var(--page)' }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-4 sticky top-0 z-20"
           style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-1">
            <button onClick={back} className="flex items-center gap-1 text-sm font-medium press"
              style={{ color: canBack ? 'var(--accent)' : 'var(--text4)', pointerEvents: canBack ? 'auto' : 'none' }}>
              <ChevronLeft size={18} />Voltar
            </button>
            <button onClick={reset} className="flex items-center gap-1.5 text-sm press" style={{ color: 'var(--text3)' }}>
              <RotateCcw size={13} />Reiniciar
            </button>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <div className="w-10 h-10 g-teal rounded-2xl flex items-center justify-center shadow-md shrink-0">
              <Stethoscope size={18} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold" style={{ color: 'var(--text1)' }}>Triagem de Sintomas</h1>
              <p className="text-xs" style={{ color: 'var(--text3)' }}>Orientação para + de 30 sintomas caninos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress */}
      {!result && (
        <div className="px-5 pb-3 flex items-center gap-1.5 max-w-2xl mx-auto w-full"
             style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
          {history.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
          ))}
          <div className="w-2.5 h-2.5 rounded-full g-teal border-2 border-teal-300" />
        </div>
      )}

      <div className="flex-1 overflow-y-auto no-scroll px-4 pt-4 pb-8">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div key={curId}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.18 }}
                className="space-y-4">
                <div className="card rounded-2xl p-5">
                  <p className="font-bold text-lg leading-snug" style={{ color: 'var(--text1)' }}>{q?.text}</p>
                  {q?.sub && <p className="text-sm mt-1.5" style={{ color: 'var(--text3)' }}>{q.sub}</p>}
                </div>
                <div className="space-y-2">
                  {q?.options.map((opt, i) => (
                    <motion.button key={opt.value}
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => pick(opt)}
                      className="w-full card rounded-2xl px-4 py-4 flex items-center justify-between text-left press">
                      <span className="font-medium text-sm leading-snug" style={{ color: 'var(--text1)' }}>{opt.label}</span>
                      <ArrowRight size={15} className="shrink-0 ml-2" style={{ color: 'var(--text4)' }} />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="result"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                className="space-y-4">

                {/* Result card */}
                <div className={`rounded-3xl p-5 border ${uv!.bg} ${uv!.border}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{uv!.icon}</span>
                    <span className={`font-bold text-sm ${uv!.text}`}>{uv!.label}</span>
                  </div>
                  <h2 className={`font-bold text-xl mb-2 ${uv!.text}`}>{result.title}</h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text2)' }}>{result.description}</p>
                </div>

                {/* Actions */}
                <div>
                  <p className="text-xs font-semibold mb-2 px-1" style={{ color: 'var(--text3)' }}>O QUE FAZER AGORA</p>
                  <div className="space-y-2">
                    {result.actions.map((action, i) => (
                      <div key={i} className="card rounded-2xl px-4 py-3.5 flex items-start gap-3">
                        <div className="w-6 h-6 g-teal rounded-full flex items-center justify-center shrink-0 shadow-sm">
                          <span className="text-white text-xs font-bold">{i + 1}</span>
                        </div>
                        <p className="text-sm leading-snug" style={{ color: 'var(--text2)' }}>{action}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {result.conditionId && result.categoryId && (
                  <button
                    onClick={() => navigate(`/condition/${result.categoryId}/${result.conditionId}`)}
                    className="w-full g-teal text-white font-semibold py-4 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-600/25 press">
                    Ver protocolo completo <ArrowRight size={16} />
                  </button>
                )}

                <button onClick={reset}
                  className="w-full font-medium py-4 rounded-2xl text-sm press"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text3)' }}>
                  Nova triagem
                </button>

                <p className="text-xs text-center leading-relaxed" style={{ color: 'var(--text4)' }}>
                  Esta triagem é orientativa. Sempre consulte um veterinário para diagnóstico definitivo.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
