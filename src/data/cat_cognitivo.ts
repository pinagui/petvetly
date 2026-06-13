import type { Category } from './types';
export const catCognitivo: Category = {
  id: 'cognitivo', name: 'Síndrome Cognitiva Canina (Demência Senil)', emoji: '🧠', gradient: 'g-purple',
  description: 'O Alzheimer do cão — sinais, manejo e como preservar a qualidade de vida do idoso',
  conditions: [
    {
      id: 'sindrome-cognitiva', name: 'Síndrome de Disfunção Cognitiva (SDC)', emoji: '🧠', gradient: 'g-purple',
      description: 'Demência canina — comum em cães > 11 anos, frequentemente confundida com "velhice normal"',
      prevalence: '28% dos cães de 11-12 anos e 68% dos cães > 15 anos têm SDC; muito subdiagnosticada',
      protocols: [{
        id: 'p1', title: 'Protocolo SDC', subtitle: 'Reconhecimento pelos sinais DISHA, selegilina e enriquecimento cognitivo',
        stages: [
          { id: 's1', label: 'Inicial', urgency: 'moderate', description: 'Sinais sutis de declínio cognitivo.', signs: ['Desorientação ocasional na casa', 'Acordar à noite (inversão do ciclo)', 'Menos interativo que antes', 'Às vezes esquece onde está a comida'] },
          { id: 's2', label: 'Avançado', urgency: 'high', description: 'Perda significativa de funções cognitivas.', signs: ['Fica preso em cantos ou atrás de móveis', 'Não reconhece familiares ou o tutor', 'Urina dentro de casa sem perceber', 'Agitação intensa à noite (sundowning)', 'Perda de reflexos aprendidos (obediência)'] },
        ],
        triggers: ['Envelhecimento cerebral acumulação de beta-amiloide', 'Estresse oxidativo neuronal', 'Predisposição racial: raças pequenas tendem a viver mais e desenvolver SDC mais'],
        steps: [
          { title: 'Critério DISHA e manejo', icon: '🧠', duration: 'Crônico — manejo vitalício',
            description: 'D=Desorientação, I=Interação diminuída, S=Sono alterado, H=Housetraining perdido, A=Atividade alterada.',
            checklist: ['Selegilina (Anipryl): inibidor MAO-B — único aprovado para SDC', 'Suplementação: DHA (ômega-3 cerebral), vitamina E, SAMe, Apoaequorin', 'Atividade cerebral: ensinar novos truques (neuroplasticidade)', 'Rotina: horários fixos reduzem desorientação', 'Luz noturna: claridade reduz agitação noturna', 'Melatonina: auxilia inversão do ciclo sono-vigília', 'Ambiente: sem rearranjo de móveis (cão usa mapa mental)'] },
        ],
        checklists: [{ label: 'Monitoramento SDC', freq: 'daily', items: ['Cão dormiu bem a noite?', 'Desorientou hoje?', 'Comeu normalmente?', 'Algum momento de reconhecimento/alegria?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Identificação dos Sintomas DISHA', tasks: ['Desorientação presente?', 'Interação diminuiu?', 'Sono invertido?', 'Higiene perdida?', 'Atividade diferente?'] },
          { day: 2, label: 'Dia 2 — Veterinário', tasks: ['Excluir: hipotireoidismo, doença renal, dor (pioram cognição)', 'Selegilina prescrita?', 'Suplementos iniciados?'] },
          { day: 3, label: 'Dia 3 — Ambiente', tasks: ['Móveis no mesmo lugar', 'Saídas ao banheiro com frequência (housetraining perdido)', 'Cama no mesmo local de sempre'] },
          { day: 4, label: 'Dia 4 — Estimulação Mental', tasks: ['Ensinar 1 truque simples por dia', 'Sniffari (farejar): estimula cognição', 'Mastigação: brinquedos de mastigação segura'] },
          { day: 5, label: 'Dia 5 — Noite', tasks: ['Luz acesa no corredor de noite?', 'Melatonina (1-3mg) 1h antes de dormir?', 'Cão tem cama confortável acessível?'], note: 'Agitação noturna: um dos principais queixas de tutores com cão com SDC' },
          { day: 6, label: 'Dia 6 — Omega-3', tasks: ['DHA: 100mg/kg/dia para suporte neurológico', 'Dieta antioxidante rica (mirtilos, cenoura)', 'Dieta comercial "cognitive health"?'] },
          { day: 7, label: 'Dia 7 — Qualidade de Vida', tasks: ['Ainda tem momentos de alegria?', 'Sofrimento controlado?', 'Plano de qualidade de vida e eutanásia quando indicado?'] },
        ],
        vetAlert: ['Cão que fica preso em cantos e não consegue sair', 'Agitação noturna intensa que piora rapidamente', 'Crise de desorientação aguda (excluir acidente vascular)'],
        prevention: ['Enriquecimento cognitivo ao longo da vida reduz risco e retarda progressão', 'Omega-3 de manutenção em idosos', 'Exercício físico regular', 'Estimulação social e mental'],
        myths: [{ myth: 'Cão idoso confuso é normal — é só a velhice', truth: 'SDC é doença tratável e manejável. Sinais cognitivos em cão idoso não são "só a velhice" — são patologia com diagnóstico e tratamento. Identificar precocemente melhora a resposta ao tratamento e a qualidade de vida.' }],
        faq: [
          { q: 'Selegilina realmente funciona para SDC canina?', a: 'Selegilina (Anipryl) é o único medicamento aprovado pela FDA para SDC canina. Melhora os sinais cognitivos em 60-70% dos cães tratados por 4-8 semanas. Não é cura mas melhora significativamente a qualidade de vida.' },
          { q: 'Ensinar truques a cão idoso ajuda a SDC?', a: 'Sim — neuroplasticidade existe em todo cão saudável. Novos aprendizados estimulam conexões neurais. Trucques simples e reforço positivo: excelente exercício cognitivo para o idoso.' },
        ],
      }],
    },
  ],
};
