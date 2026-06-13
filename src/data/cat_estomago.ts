import type { Category } from './types';
export const catEstomago: Category = {
  id: 'estomago', name: 'Estômago e GDV', emoji: '🫃', gradient: 'g-red',
  description: 'Torção gástrica (GDV), gastrite, úlcera e problemas estomacais',
  conditions: [
    {
      id: 'gdv-torcao', name: 'Torção Gástrica (GDV)', emoji: '🚨', gradient: 'g-red',
      description: 'GDV é a emergência cirúrgica mais letal em cães — mata em horas sem cirurgia',
      prevalence: 'Grandes raças de tórax profundo: São Bernardo, Rottweiler, Labrador, Pastor Alemão — mortalidade 15-30% mesmo com cirurgia',
      protocols: [{
        id: 'p1', title: 'Protocolo GDV', subtitle: 'Reconhecimento, estabilização e cirurgia de emergência',
        stages: [
          { id: 's1', label: 'Dilatação Gástrica', urgency: 'emergency', description: 'Estômago cheio de gás — pode progredir para torção.', signs: ['Abdômen distendido', 'Tentativas de vomitar sem conseguir', 'Salivação excessiva', 'Inquietação', 'Pode resolver espontaneamente ou progredir'] },
          { id: 's2', label: 'GDV (Torção)', urgency: 'emergency', description: 'Torção do estômago — emergência cirúrgica imediata.', signs: ['Abdômen muito distendido e timpânico', 'Vômito improdutivo intenso', 'Colapso ou fraqueza grave', 'Mucosas pálidas', 'Taquicardia', 'Arritmia', 'Morte em 6-12h sem cirurgia'] },
        ],
        triggers: ['Refeição única grande (uma vez ao dia)', 'Exercício 1-2h após comer', 'Estresse intenso', 'Beber muita água rápido', 'Raças de tórax profundo geneticamente predispostas'],
        steps: [
          { title: 'EMERGÊNCIA CIRÚRGICA', icon: '🚨', duration: 'IMEDIATO',
            description: 'Cada minuto conta — a torção causa necrose gástrica progressiva.',
            checklist: ['Veterinário de emergência 24h IMEDIATAMENTE', 'Não oferecer comida, água ou remédio por via oral', 'Transportar com máxima rapidez', 'Não tentar nada em casa — há risco de piora', 'Cirurgia: descompressão + gastropexia (fixação preventiva)', 'Pré-cirúrgico: estabilização hemodinâmica, analgesia', 'Gastopexia profilática: pode ser feita eletivamente em raças de alto risco'] },
        ],
        checklists: [{ label: 'Prevenção Diária em Raças de Risco', freq: 'daily', items: ['Refeições divididas em 2-3 porções?', 'Exercício suspenso por 1h após a refeição?', 'Bebeu rapidamente? (bowl anti-engolir)', 'Cão estressado hoje?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Emergência', tasks: ['VETERINÁRIO DE EMERGÊNCIA IMEDIATO', 'Cirurgia = única chance de sobrevivência', 'Família informada do risco'] },
          { day: 2, label: 'Dia 2 — Pós-Cirúrgico', tasks: ['UTI veterinária: monitoramento de arritmias', 'Fluidos IV e suporte hemodinâmico', 'Comer só quando veterinário autorizar'], note: 'Arritmia cardíaca é a principal causa de morte pós-cirúrgica de GDV' },
          { day: 3, label: 'Dia 3 — Reintrodução Alimentar', tasks: ['Pequenas quantidades de alimento úmido', 'Monitoramento de distensão', 'Abdômen plano?'] },
          { day: 4, label: 'Dia 4 — Alta', tasks: ['Comer normalmente (pequenas porções frequentes)?', 'Restrição de atividade por 2-4 semanas', 'Gastropexia foi realizada? (evita recidiva)'] },
          { day: 5, label: 'Dia 5 — Mudança de Manejo', tasks: ['3 refeições/dia no lugar de 1', 'Bowl elevado: controverso (evidência não conclusiva)', 'Sem exercício 1h antes e após refeição'], note: 'Gastropexia profilática: 0% de recidiva de torção em raças de risco' },
          { day: 6, label: 'Dia 6 — Prevenção Futura', tasks: ['Gastropexia profilática discutida com cirurgião?', 'Dieta adequada (sem excesso de ar ao comer)?', 'Estresse minimizado em raças de risco?'] },
          { day: 7, label: 'Dia 7 — Conscientização', tasks: ['Família sabe os sinais de GDV?', 'Número do veterinário 24h salvo?', 'Protocolo de emergência claro?'] },
        ],
        vetAlert: ['Abdômen distendido + tentativas de vomitar = EMERGÊNCIA', 'Cão de raça grande que colapsa = suspeitar GDV'],
        prevention: ['Refeições menores e mais frequentes (2-3x/dia)', 'Evitar exercício 1-2h após refeição', 'Gastropexia profilática em raças de alto risco na castração'],
        myths: [{ myth: 'GDV só acontece em cães muito velhos', truth: 'GDV pode acontecer em qualquer idade — até em cães jovens de 2-3 anos de raças predispostas. Qualquer Grande raça de tórax profundo está em risco.' }],
        faq: [
          { q: 'O que é gastropexia profilática?', a: 'Cirurgia preventiva que fixa o estômago à parede abdominal, impedindo a rotação. Taxa de sucesso: quase 100% de prevenção de recidiva de GDV. Indicada para São Bernardo, Rottweiler, Dobermann, Labrador com histórico familiar. Pode ser feita junto com a castração.' },
          { q: 'Bowl elevado previne GDV?', a: 'Controverso. Alguns estudos antigos indicavam benefício; estudos mais recentes não confirmam e alguns sugerem risco levemente aumentado. A evidência atual não recomenda bowl elevado como medida preventiva de GDV.' },
          { q: 'Meu cão tentou vomitar mas não conseguiu. Devo ir ao vet?', a: 'SIM, imediatamente. Tentativa de vomitar sem sucesso + abdômen distendido em cão de raça grande = GDV até prova em contrário. Cada minuto sem descompressão piora o prognóstico.' },
        ],
      }],
    },
    {
      id: 'gastrite', name: 'Gastrite e Úlcera Gástrica', emoji: '🔥', gradient: 'g-orange',
      description: 'Vômito crônico, dor abdominal e erosão gástrica — causas e tratamento',
      prevalence: 'Comum; AINE sem proteção gástrica é a principal causa iatrogênica',
      protocols: [{
        id: 'p1', title: 'Protocolo Gastrite Canina', subtitle: 'Diagnóstico, proteção gástrica e dieta',
        stages: [
          { id: 's1', label: 'Gastrite Aguda', urgency: 'moderate', description: 'Vômito por 24-48h — geralmente autolimitado.', signs: ['Vômito 1-3x/dia', 'Sem sangue no vômito', 'Cão ainda ativo', 'Apetite reduzido'] },
          { id: 's2', label: 'Úlcera Gástrica', urgency: 'high', description: 'Erosão da mucosa — vômito com sangue.', signs: ['Vômito com sangue (vermelho ou "borra de café")', 'Fezes escuras (melena)', 'Dor abdominal cranial', 'Prostração', 'Em uso de AINE ou corticoide'] },
        ],
        triggers: ['AINE sem proteção gástrica (meloxicam, ibuprofeno humano)', 'Corticoide', 'H. pylori canino (controverso)', 'Estresse', 'Comida inadequada ou bichada'],
        steps: [
          { title: 'Proteção gástrica e jejum', icon: '💊', duration: '24-72h inicial',
            description: 'Jejum 12-24h, protetor gástrico, dieta bland gradual.',
            checklist: ['Jejum 12-24h para mucosa descansar', 'Omeprazol 1mg/kg/dia: redutor de acidez', 'Sucralfato 0,5-1g 3x/dia: protetor de mucosa', 'Reintrodução: arroz + frango cozido gradualmente', 'SUSPENDER AINE se em uso (causa da úlcera)', 'Misoprostol com AINEs que não podem ser suspensos'] },
        ],
        checklists: [{ label: 'Monitoramento Gástrico', freq: 'daily', items: ['Vômito cessou?', 'Fezes de cor normal (não pretas)?', 'Cão come sem dor?', 'Protetor gástrico dado?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Jejum', tasks: ['Jejum 12-24h', 'Água fresca disponível', 'Omeprazol iniciado', 'Veterinário se vômito com sangue'], note: 'Vômito com sangue = veterinário hoje' },
          { day: 2, label: 'Dia 2 — Reintrodução', tasks: ['Arroz + frango cozido (sem tempero)', 'Porções pequenas 4-5x/dia', 'Cão fica após comer?', 'Vômito retornou?'] },
          { day: 3, label: 'Dia 3 — Dieta Bland', tasks: ['50% bland + 50% ração normal (se tolerou)', 'Omeprazol continuado por 5-7 dias', 'Sucralfato se úlcera'] },
          { day: 4, label: 'Dia 4 — Causa Identificada?', tasks: ['Em uso de AINE? Suspender com veterinário', 'Ingeriu algo estranho?', 'Estressado recentemente?'] },
          { day: 5, label: 'Dia 5 — Normalização', tasks: ['75% ração normal + 25% bland', 'Vômito ausente?', 'Apetite normal?'] },
          { day: 6, label: 'Dia 6 — 100% Ração', tasks: ['Ração normal completa', 'Protetor gástrico terminando?', 'Sintomas resolvidos?'] },
          { day: 7, label: 'Dia 7 — Prevenção', tasks: ['AINE só com protetor gástrico (omeprazol ou misoprostol)', 'Nunca AINE humano (ibuprofeno, diclofenaco)', 'Veterinário se recidiva'] },
        ],
        vetAlert: ['Vômito com sangue vivo ou "borra de café"', 'Fezes pretas (melena)', 'Colapso com gastrite'],
        prevention: ['Nunca AINE humano (ibuprofeno, naproxeno) em cão — são mais ulcerogênicos que AINEs veterinários', 'AINEs veterinários sempre com protetor gástrico em tratamentos > 7 dias'],
        myths: [{ myth: 'Omeprazol é seguro em qualquer dose para cão', truth: 'Omeprazol em dose alta ou longo prazo pode causar hiperplasia de células parietais e dependência. Usar na dose correta (1mg/kg/dia) e pelo tempo necessário.' }],
        faq: [
          { q: 'Posso dar omeprazol humano para cão?', a: 'Sim, com mesma dose (1mg/kg). Formulação humana é biologicamente equivalente. Disponível sem receita. Ideal: primeiro consultar o veterinário para confirmar o diagnóstico.' },
          { q: 'Cão com gastrite pode continuar tomando anti-inflamatório?', a: 'Depende da condição que justifica o AINE. Se há dor articular intratável: AINE + omeprazol + misoprostol (proteção tripla). Se gastrite grave: suspender o AINE e trocar por gabapentina ou tramadol.' },
        ],
      }],
    },
  ],
};
