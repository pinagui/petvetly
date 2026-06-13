import type { Category } from './types';

export const catImunologico: Category = {
  id: 'imunologico', name: 'Imunológico', emoji: '🛡️', gradient: 'g-blue',
  description: 'Lupus, pênfigo, anemia hemolítica imuno-mediada e doenças auto-imunes',
  conditions: [
    {
      id: 'imha', name: 'Anemia Hemolítica Imuno-Mediada (IMHA)', emoji: '🩸', gradient: 'g-red',
      description: 'Sistema imune destrói glóbulos vermelhos — pode ser fatal sem tratamento rápido',
      prevalence: '~1 em 1.000 cães; Cocker Spaniel, Springer, Bichon predispostos',
      protocols: [{
        id: 'p1', title: 'Protocolo IMHA', subtitle: 'Imunossupressão com prednisona, transfusão e prevenção de trombose',
        stages: [
          { id: 's1', label: 'Moderada (Hct 15-25%)', urgency: 'high', description: 'Anemia significativa sem colapso imediato.', signs: ['Mucosas pálidas', 'Letargia progressiva', 'Taquicardia', 'Icterícia discreta', 'Hemoglobinúria (urina escura)'] },
          { id: 's2', label: 'Grave (Hct < 15%)', urgency: 'emergency', description: 'Anemia crítica com risco de colapso.', signs: ['Mucosas brancas', 'Colapso ou fraqueza intensa', 'Dispneia', 'Icterícia intensa', 'Esplenomegalia', 'Trombose'] },
        ],
        triggers: ['Idiopática — sem causa identificável (60-75%)', 'Babesiose, Ehrlichiose (secundária)', 'Vacinas recentes (controverso)', 'Neoplasia (paraneoplásica)', 'Drogas (sulfa, cefalosporinas)'],
        steps: [
          { title: 'Imunossupressão imediata', icon: '💊', duration: 'Urgente',
            description: 'Prednisona é o pilar do tratamento. Dexametasona IV se hospitalizado.',
            checklist: ['Prednisona 2mg/kg/dia — iniciar imediatamente', 'Dexametasona IV se hospitalizado e grave', 'Azatioprina ou micofenolato como poupador de esteroide', 'Ciclosporina em casos refratários', 'Clopidogrel ou aspirina: prevenir trombose (principal causa de morte)'] },
          { title: 'Transfusão e suporte', icon: '🏥', duration: 'Hospitalar',
            description: 'Transfusão de sangue total ou concentrado de hemácias se Hct < 15% ou sintomático.',
            checklist: ['Tipagem sanguínea e crossmatch', 'Transfusão se Hct < 15% ou sintomas graves', 'Fluidos IV com cuidado (risco de sobrecarga com anemia)', 'Oxigenoterapia suplementar', 'Heparina de baixo peso molecular se trombose'] },
        ],
        checklists: [
          { label: 'Monitoramento Diário', freq: 'daily', items: ['Mucosas: qual cor hoje?', 'Hematócrito (diário hospitalar, semanal em casa)?', 'Prednisona dada?', 'Clopidogrel dado?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico e Tratamento', tasks: ['Hemograma urgente', 'Teste de Coombs direto', 'Prednisona iniciada imediatamente'], note: 'Início imediato de imunossupressão' },
          { day: 2, label: 'Dia 2 — Hospitalar', tasks: ['Hematócrito de controle (muda em horas)', 'Transfusão se Hct crítico?', 'Clopidogrel para antitrombótico'], note: 'Trombose mata mais que a anemia' },
          { day: 3, label: 'Dia 3 — Resposta ao Tratamento', tasks: ['Hematócrito subindo?', 'Mucosas menos pálidas?', 'Icterícia diminuindo?'], note: 'Hematócrito deve parar de cair em 24-72h' },
          { day: 4, label: 'Dia 4 — Alta?', tasks: ['Hct > 20%?', 'Cão come e está estável?', 'Prednisona e clopidogrel para casa?'], note: 'Alta com Hct > 20% e estável' },
          { day: 5, label: 'Dia 5 — Em Casa', tasks: ['Prednisona dada conforme prescrito', 'Clopidogrel 18mg VO 1x/dia', 'Atividade limitada (risco de trombose)'], note: 'Exercício aumenta risco de trombose' },
          { day: 6, label: 'Dia 6 — Monitoramento', tasks: ['Mucosas corando?', 'Cão mais ativo?', 'Fezes escuras (melena)?'], note: 'Prednisona pode causar úlcera gástrica' },
          { day: 7, label: 'Dia 7 — Hemograma de Controle', tasks: ['Hematócrito de controle', 'Reticulócitos (regeneração)?', 'Plano de desmame da prednisona'], note: 'Desmame MUITO gradual (meses)' },
        ],
        vetAlert: ['Hematócrito caindo rapidamente', 'Cão colapsa ou tem dispneia', 'Perna inchada (trombose)'],
        prevention: ['Sem prevenção definitiva', 'Controle de carrapatos (babesiose/Ehrlichiose como gatilhos)', 'Vacinação com precaução em raças predispostas'],
        myths: [
          { myth: 'IMHA é incurável', truth: 'Com imunossupressão e antitrombótico, 60-80% entram em remissão. Recidiva é possível mas manejável.' },
        ],
        faq: [
          { q: 'Por quanto tempo usar a prednisona?', a: 'Mínimo 4-6 meses com desmame muito gradual. Desmame rápido causa recidiva. A cada 4 semanas, reduz 25% da dose se Hct estável.' },
        ],
      }],
    },
    {
      id: 'pemfigo', name: 'Pênfigo Foliáceo', emoji: '💧', gradient: 'g-amber',
      description: 'Doença autoimune bolhosa — a mais comum das dermatoses autoimunes em cães',
      prevalence: '~0,5% dos cães; Akita, Chow Chow, Dobermann predispostos',
      protocols: [{
        id: 'p1', title: 'Protocolo Pênfigo Foliáceo', subtitle: 'Diagnóstico por biópsia, imunossupressão e fotoproteção',
        stages: [
          { id: 's1', label: 'Localizado', urgency: 'moderate', description: 'Crostas e pústulas na face e coxins — estágio inicial.', signs: ['Crostas acastanhadas no focinho e pálpebras', 'Pústulas que rompem', 'Escamas nos coxins (frequente)', 'Coxins com fissuras e dor'] },
          { id: 's2', label: 'Generalizado', urgency: 'high', description: 'Lesões em todo o corpo com febre e prostração.', signs: ['Crostas difusas', 'Febre', 'Linfonodomegalia', 'Anorexia', 'Coceira generalizada'] },
        ],
        triggers: ['Idiopático — autoimune primário (mais comum)', 'Reação a medicamento (sulfa, cefalosporina)', 'UV solar (piora lesões em face)', 'Thimerosal em vacinas (controverso)'],
        steps: [
          { title: 'Biópsia de pele (obrigatória)', icon: '🔬', duration: 'Diagnóstico',
            description: 'Biópsia de pústula intacta ou crosta recente. Imunofluorescência confirma IgG intradérmico.',
            checklist: ['Biópsia de pústula intacta ou lesão recente', 'Histopatologia: acantólise intraepidérmica', 'Imunofluorescência direta', 'Citologia de pústula: células acantolíticas'] },
          { title: 'Imunossupressão', icon: '💊', duration: 'Meses a anos',
            description: 'Prednisona 2mg/kg/dia inicialmente. Desmame ao longo de meses.',
            checklist: ['Prednisona 2mg/kg/dia fase inicial', 'Azatioprina 2mg/kg/dia como poupador de esteroide', 'Ciclosporina 5mg/kg/dia se refratário', 'Fotoproteção: evitar exposição solar das 10h às 16h', 'Protetor solar canino nas lesões da face (creme de zinco)'] },
        ],
        checklists: [
          { label: 'Monitoramento de Lesões', freq: 'daily', items: ['Novas crostas apareceram?', 'Lesões antigas cicatrizando?', 'Prednisona dada?', 'Cão exposto ao sol? (evitar)'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Biópsia', tasks: ['Biópsia de pústula fresca', 'Citologia imediata', 'Inicie prednisona enquanto aguarda histopatologia'], note: 'Biópsia fresca é fundamental' },
          { day: 2, label: 'Dia 2 — Cuidados das Lesões', tasks: ['Limpeza suave das crostas com soro morno', 'Não remover crostas à força', 'Proteção solar na face'], note: 'Sol piora as lesões' },
          { day: 3, label: 'Dia 3 — Resposta Inicial', tasks: ['Novas pústulas aparecem?', 'Crostas diminuindo?', 'Febre resolvida?'], note: 'Resposta à prednisona em 3-7 dias' },
          { day: 4, label: 'Dia 4 — Azatioprina', tasks: ['Azatioprina iniciada como poupador', 'Hemograma em 2 semanas (monitorar toxicidade)', 'Continue prednisona dose plena'], note: 'Azatioprina age em 4-6 semanas' },
          { day: 5, label: 'Dia 5 — Fotoproteção', tasks: ['Passeios somente cedo ou tarde', 'Protetor solar canino na face', 'Sem exposição ao sol direto nas lesões'], note: 'UV solar ativa o pênfigo' },
          { day: 6, label: 'Dia 6 — Avaliação Intermédiate', tasks: ['Lesões estáveis ou melhorando?', 'Coxins doloridos?', 'Cão pode andar normalmente?'], note: 'Coxins comprometidos causam claudicação' },
          { day: 7, label: 'Dia 7 — Resultado da Biópsia', tasks: ['Histopatologia confirmou pênfigo?', 'Desmame de prednisona ainda não — espere remissão completa', 'Azatioprina em dia?'], note: 'Desmame mínimo 3-6 meses após remissão' },
        ],
        vetAlert: ['Febre > 39,8°C', 'Lesões se expandindo rapidamente', 'Coxins com ulceração que impede caminhar'],
        prevention: ['Evitar drogas associadas (sulfa, cefalosporinas) em raças predispostas', 'Fotoproteção como medida preventiva de flare'],
        myths: [
          { myth: 'Pênfigo é só coceira de pele — não é grave', truth: 'Pênfigo foliáceo generalizado com febre é doença sistêmica grave. Sem imunossupressão, pode levar a sepse secundária.' },
        ],
        faq: [
          { q: 'Cão com pênfigo pode ser vacinado?', a: 'Com cautela. Vacinação pode exacerbar a doença em animais predispostos. Discuta com o dermatologista veterinário — a maioria recomenda manter vacinas essenciais em doses mínimas.' },
        ],
      }],
    },
    {
      id: 'lupus-eritematoso', name: 'Lúpus Eritematoso', emoji: '🦋', gradient: 'g-purple',
      description: 'Lúpus eritematoso discóide e sistêmico — doença autoimune multissistêmica',
      prevalence: 'Raro (<0,5%) — Collie, Shetland, Husky Siberiano, Dobermann predispostos',
      protocols: [{
        id: 'p1', title: 'Protocolo Lúpus Canino', subtitle: 'Diagnóstico por ANA, biópsia e imunossupressão',
        stages: [
          { id: 's1', label: 'Discóide (LED)', urgency: 'moderate', description: 'Apenas lesões cutâneas na face — forma mais branda.', signs: ['Depigmentação do focinho (focinho deixa de ser preto)', 'Erosões e úlceras na ponte nasal', 'Descamação facial', 'Pioram ao sol'] },
          { id: 's2', label: 'Sistêmico (LES)', urgency: 'high', description: 'Múltiplos órgãos afetados — poliartropoliartrite, rim, sangue.', signs: ['Poliartrite (múltiplas articulações inchadas)', 'IMHA concomitante', 'Glomerulonefrite', 'Febre recorrente', 'Lesões cutâneas', 'ANA positivo'] },
        ],
        triggers: ['Predisposição genética racial', 'Exposição solar UV (agrava LED)', 'Idiopático (maioria)'],
        steps: [
          { title: 'Diagnóstico laboratorial', icon: '🔬', duration: 'Diagnóstico',
            description: 'ANA (anticorpo antinuclear) é o marcador sorológico mais sensível para LES.',
            checklist: ['ANA (anticorpo antinuclear) — triagem LES', 'Hemograma: IMHA, trombocitopenia', 'Urinálise e proteína urinária (glomerulonefrite)', 'Biópsia de pele: dermatite de interface lupóide', 'Anticorpos anti-DNA nativo se LES'] },
          { title: 'Imunossupressão e fotoproteção', icon: '💊', duration: 'Permanente',
            description: 'LED: doxiciclina + vitamina E. LES: prednisona + poupador de esteroide.',
            checklist: ['LED: doxiciclina 5mg/kg 2x/dia + vitamina E 400UI/dia', 'LES: prednisona 2mg/kg/dia', 'Azatioprina 2mg/kg/dia como poupador', 'Protetor solar SPF 30+ no focinho (reaplique 2x/dia)', 'Evitar sol das 10h às 16h — obrigatório', 'Evitar sulfa e outras drogas desencadeadoras'] },
        ],
        checklists: [
          { label: 'LED — Cuidados Diários', freq: 'daily', items: ['Protetor solar no focinho aplicado?', 'Exposição solar evitada?', 'Doxiciclina dada?', 'Vitamina E dada?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['ANA e hemograma', 'Urinálise', 'Biópsia se lesão ativa'], note: 'Distinguir LED de LES é crucial para o prognóstico' },
          { day: 2, label: 'Dia 2 — Fotoproteção', tasks: ['Protetor solar específico para cão aplicado', 'Passeios apenas cedo ou tarde', 'Evitar superfícies reflexivas (areia, água)'], note: 'UV é o principal gatilho de flare' },
          { day: 3, label: 'Dia 3 — Tratamento', tasks: ['LED: doxiciclina + vit E iniciados', 'LES: prednisona iniciada', 'Documentar lesões com foto'], note: 'LED: resposta em 4-8 semanas' },
          { day: 4, label: 'Dia 4 — Monitoramento Renal', tasks: ['Proteína na urina (glomerulonefrite)?', 'Se positivo: cuidado renal adicional', 'LES sistêmico: múltiplos sistemas'], note: 'Rim é o órgão mais ameaçado no LES' },
          { day: 5, label: 'Dia 5 — Bem-Estar', tasks: ['Lesões faciais melhorando?', 'Cão come normalmente?', 'Articulações inchadas?'], note: 'Qualidade de vida é o objetivo' },
          { day: 6, label: 'Dia 6 — Revisão de Medicação', tasks: ['Doxiciclina tolerada?', 'Efeitos colaterais da prednisona?', 'Hemograma se em azatioprina > 2 semanas'], note: 'Azatioprina pode causar hepatotoxicidade' },
          { day: 7, label: 'Dia 7 — Avaliação', tasks: ['Lesões estáveis ou melhorando?', 'ANA de controle em 4 semanas', 'Fotoproteção sendo mantida?'], note: 'LED tende a responder bem; LES é mais desafiador' },
        ],
        vetAlert: ['LES com falência renal', 'IMHA grave associada', 'Poliartrite incapacitante'],
        prevention: ['Fotoproteção rigorosa em raças predispostas', 'Evitar drogas desencadeadoras em animais de risco'],
        myths: [
          { myth: 'Focinho branco em cão preto é só genética', truth: 'Depigmentação progressiva do focinho em adulto pode ser LED (lúpus discóide) ou vitiligo. Biopsia define.' },
        ],
        faq: [
          { q: 'Protetor solar em cachorro é seguro?', a: 'Protetores solares formulados para pets são seguros. Protetores humanos com oxibenzona ou zinco podem ser tóxicos se o cão lamber. Use marcas veterinárias específicas.' },
        ],
      }],
    },
  ],
};
