import type { Category } from './types';
export const catLeishmaniose: Category = {
  id: 'leishmaniose', name: 'Leishmaniose Visceral Canina', emoji: '🦟', gradient: 'g-purple',
  description: 'Leishmaniose — zoonose endêmica no Brasil, controle, tratamento e prevenção',
  conditions: [
    {
      id: 'leishmania-visceral', name: 'Leishmaniose Visceral (Calazar)', emoji: '🦟', gradient: 'g-purple',
      description: 'Doença sistêmica causada por Leishmania infantum — endêmica em várias regiões do Brasil',
      prevalence: 'Endêmica em MG, BA, MA, CE, PI, RN, PA — mais de 1 milhão de cães infectados no Brasil',
      protocols: [{
        id: 'p1', title: 'Protocolo Leishmaniose Canina', subtitle: 'Diagnóstico, miltefosina/alopurinol, e prevenção rigorosa',
        stages: [
          { id: 's1', label: 'Fase Inicial', urgency: 'moderate', description: 'Linfadenopatia e seborréia.', signs: ['Linfônodos aumentados', 'Descamação da pele', 'Pelo opaco', 'Cão ainda ativo'] },
          { id: 's2', label: 'Fase Avançada', urgency: 'high', description: 'Emagrecimento, onicogrifose e lesões cutâneas.', signs: ['Emagrecimento progressivo apesar de comer', 'Unhas longas e curvadas (onicogrifose)', 'Lesões cutâneas na face e orelhas', 'Mucosas pálidas', 'Insuficiência renal progressiva'] },
        ],
        triggers: ['Picada do mosquito flebotomíneo (Lutzomyia longipalpis)', 'Ambiente endêmico (principalmente interior do Brasil)', 'Cão sem prevenção em área endêmica'],
        steps: [
          { title: 'Diagnóstico e tratamento', icon: '🔬', duration: 'Diagnóstico e tratamento crônico',
            description: 'ELISA + PCR para diagnóstico. Miltefosina + alopurinol para cães com sofrimento.',
            checklist: ['ELISA e PCR: sorologias + PCR confirmatória', 'Médico veterinário responsável deve notificar ao SUCEN/CCZ', 'Miltefosina (Milteforan): único antileishmanial aprovado no Brasil para cão', 'Alopurinol: tratamento crônico de manutenção', 'Hemograma, proteína total, creatinina: monitoramento regular', 'Vacina Leish-Tec (+ Leishmune): disponíveis e recomendadas em áreas endêmicas', 'Coleira impregnada (Scalibor/Seresto): barreira química de longa duração'] },
        ],
        checklists: [{ label: 'Monitoramento de Leishmaniose', freq: 'monthly', items: ['Medicação dada corretamente?', 'Peso estável?', 'Lesões cutâneas piorando?', 'Exames laboratoriais em dia?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['ELISA + confirmação por PCR', 'Hemograma e bioquímica (avaliar dano renal)', 'Estadiamento da doença (I-IV)'], note: 'Leishmaniose não tem cura — objetivo é controle e qualidade de vida' },
          { day: 2, label: 'Dia 2 — Inicio do Tratamento', tasks: ['Miltefosina: 2mg/kg/dia VO por 28 dias', 'Alopurinol: 10mg/kg 2x/dia (crônico)', 'Dieta adequada para suporte nutricional'] },
          { day: 3, label: 'Dia 3 — Efeito Colateral Miltefosina', tasks: ['Vômito: dar com alimento e dividir a dose', 'Monitoramento de função hepática', 'Lesões cutâneas: melhora em 4-8 semanas'] },
          { day: 4, label: 'Dia 4 — Prevenção Rigorosa', tasks: ['Coleira impregnada (Scalibor): trocar a cada 5-6 meses', 'Deltametrina spray: aplicar no cão', 'Entrada da casa com tela fina (Lutzomyia passa em tela comum)'] },
          { day: 5, label: 'Dia 5 — Zoonose: Proteção Humana', tasks: ['Criança imunossuprimida na casa?', 'Tela fina na janela: barreira fundamental', 'Controle do mosquito: pó inseticida peridomiciliar'], note: 'Leishmaniose visceral humana é grave — proteção da família também é prioridade' },
          { day: 6, label: 'Dia 6 — Vacina', tasks: ['Leish-Tec ou Leishmune: aplicação em cão não infectado', '3 doses + reforço anual', 'Não vacinar cão já infectado'], note: 'Vacina não é 100% protetora — coleira + vacina + inseticida = proteção máxima' },
          { day: 7, label: 'Dia 7 — Estadiamento e Prognóstico', tasks: ['Estádio I-II: tratamento com boa perspectiva', 'Estádio III-IV: insuficiência renal grave — prognóstico reservado', 'Qualidade de vida avaliada regularmente?'] },
        ],
        vetAlert: ['Insuficiência renal grave (creatinina > 5mg/dL)', 'Epistaxe (sangramento nasal) intensa', 'Cão sem comer por > 2 dias'],
        prevention: ['Coleira impregnada com deltametrina ou permetrina (5-6 meses de duração)', 'Vacina (Leish-Tec/Leishmune) em área endêmica', 'Tela fina (<0,5mm) nas janelas', 'Inseticida peridomiciliar', 'Evitar passeios ao entardecer e amanhecer (pico do flebotomíneo)'],
        myths: [{ myth: 'Cão com leishmaniose deve ser eutanasiado obrigatoriamente', truth: 'FALSO. A Portaria MMA revogou a obrigatoriedade de eutanásia em 2016. Tutores têm direito ao tratamento. Objetivo: controle da doença, qualidade de vida e proteção da saúde humana com medidas de prevenção rigorosas.' }],
        faq: [
          { q: 'Cão tratado de leishmaniose pode transmitir para humanos?', a: 'Cão não transmite diretamente para humano — a transmissão é EXCLUSIVAMENTE pelo mosquito flebotomíneo. Cão infectado tratado que vive em casa com tela adequada representa risco muito reduzido.' },
          { q: 'Qual a coleira mais eficaz contra o mosquito da leishmaniose?', a: 'Scalibor (deltametrina 4%): aprovada para repelência de flebotomíneos. Troca a cada 5-6 meses. Seresto (imidacloprid + flumetrina): excelente para carrapatos e pulgas. Para leishmaniose: Scalibor tem mais evidência específica.' },
          { q: 'Leishmaniose tem cura?', a: 'No cão: não há cura. O objetivo é controle (negativar o PCR e controlar os sintomas). Recidiva ocorre quando o tratamento é interrompido. Tratamento: indefinido (enquanto o cão tem qualidade de vida satisfatória).' },
        ],
      }],
    },
  ],
};
