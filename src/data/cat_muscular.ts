import type { Category } from './types';
export const catMuscular: Category = {
  id: 'muscular', name: 'Músculos e Miopatias Caninas', emoji: '💪', gradient: 'g-orange',
  description: 'Fraqueza muscular, miosite, miastenia gravis e atrofia muscular em cães',
  conditions: [
    {
      id: 'miastenia-gravis', name: 'Miastenia Gravis Canina', emoji: '💪', gradient: 'g-orange',
      description: 'Doença neuromuscular — fraqueza após exercício, megaesôfago e regurgitação',
      prevalence: 'Miastenia gravis: Labrador, Golden, Springer Spaniel predispostos. Forma focal: megaesôfago',
      protocols: [{
        id: 'p1', title: 'Protocolo Miastenia Gravis', subtitle: 'Diagnóstico, piridostigmina e manejo do megaesôfago',
        stages: [
          { id: 's1', label: 'Forma Focal (Megaesôfago)', urgency: 'high', description: 'Regurgitação e pneumonia aspirativa.', signs: ['Regurgitação (diferente de vômito)', 'Emagrecimento progressivo', 'Tosse e falta de ar (pneumonia aspirativa)', 'Raios-X tórax: esôfago dilatado'] },
          { id: 's2', label: 'Forma Generalizada', urgency: 'high', description: 'Fraqueza muscular progressiva que piora com exercício.', signs: ['Fraqueza que piora com caminhada', 'Colapso após exercício leve', 'Melhora com repouso', 'Disfagia (dificuldade para engolir)'] },
        ],
        triggers: ['Doença autoimune (anticorpos anti-receptor de acetilcolina)', 'Forma congênita em raças predispostas', 'Timoma (tumor do timo): miastenia paraneoplásica'],
        steps: [
          { title: 'Diagnóstico e tratamento', icon: '💊', duration: 'Crônico, pode entrar em remissão',
            description: 'Teste de Tensilon (edrofônio IV) ou titulação de AChR. Piridostigmina oral.',
            checklist: ['Titulação anticorpos anti-AChR: diagnóstico definitivo', 'Raio-X tórax: megaesôfago presente?', 'Pneumonia aspirativa: antibiótico + fisioterapia respiratória', 'Piridostigmina (Mestinon): inibidor de acetilcolinesterase', 'Alimentação em posição vertical (cadeira de Bailey): ESSENCIAL no megaesôfago', 'Timoma: ultrassom de tórax', 'Remissão espontânea: 50% em 6-18 meses'] },
        ],
        checklists: [{ label: 'Manejo Diário Miastenia', freq: 'daily', items: ['Alimentação vertical (cadeira de Bailey)?', 'Piridostigmina dada?', 'Regurgitação hoje?', 'Tosse ou dificuldade respiratória?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['Raio-X tórax: megaesôfago?', 'Neurológico: fraqueza que piora com exercício?', 'Titulação anti-AChR?'] },
          { day: 2, label: 'Dia 2 — Megaesôfago Agudo', tasks: ['Pneumonia aspirativa: antibióticos', 'Suporte nutricional: sonda se necessário', 'Posicionamento vertical IMEDIATO'] },
          { day: 3, label: 'Dia 3 — Cadeira de Bailey', tasks: ['Construção da cadeira de Bailey (DIY ou compra)?', 'Alimentar somente na posição vertical', 'Após refeição: manter 15-20min vertical'] },
          { day: 4, label: 'Semana 1 — Piridostigmina', tasks: ['Dose inicial: 1-3mg/kg 2x/dia', 'Efeito colateral: hipersalivação, vômito (reduzir dose)', 'Melhora da força após 2-3 dias?'] },
          { day: 5, label: 'Semana 2-4 — Resposta', tasks: ['Fraqueza melhorou?', 'Regurgitação diminuiu?', 'Peso estabilizou?'] },
          { day: 6, label: 'Timoma', tasks: ['Raio-X ou TC de tórax: massa cranial?', 'Timoma: cirurgia pode curar a miastenia', 'Oncologista veterinário'] },
          { day: 7, label: 'Longo Prazo', tasks: ['Remissão esperada em 6-18 meses em 50%?', 'Redução gradual de piridostigmina?', 'Recidiva: retornar à dose anterior'] },
        ],
        vetAlert: ['Pneumonia aspirativa (tosse + febre + megaesôfago)', 'Colapso após exercício leve', 'Disfagia grave (não consegue deglutir)'],
        prevention: ['Raças predispostas: suspeitar de miastenia gravis quando fraqueza pós-exercício', 'Megaesôfago em qualquer raça: titular AChR'],
        myths: [{ myth: 'Miastenia gravis é sempre incurável', truth: 'Cerca de 50% dos cães com miastenia gravis adquirida entram em remissão espontânea dentro de 6-18 meses. Com timoma associado, a remoção cirúrgica pode curar a miastenia. O prognóstico é variável mas frequentemente favorável.' }],
        faq: [
          { q: 'O que é a cadeira de Bailey para cão com megaesôfago?', a: 'É um suporte que mantém o cão em posição vertical (sentado com pescoço elevado) durante e após a refeição. A gravidade ajuda o alimento a descer pelo esôfago dilatado até o estômago, reduzindo drasticamente a regurgitação e o risco de pneumonia aspirativa.' },
          { q: 'Qual a diferença entre regurgitação e vômito?', a: 'Vômito: ato ativo com contração abdominal, bile frequente, alimento digerido. Regurgitação: passiva, sem esforço, alimento não digerido em tubo, sem bile. Regurgitação sugere problema esofágico (megaesôfago). Diferenciar é essencial para o diagnóstico.' },
        ],
      }],
    },
    {
      id: 'miosite-mastigacao', name: 'Miosite dos Músculos da Mastigação (MMM)', emoji: '🦷', gradient: 'g-amber',
      description: 'Inflamação autoimune dos músculos da mandíbula — cão não consegue abrir a boca',
      prevalence: 'MMM: Labrador, Golden, Pastor Alemão predispostos. Causa: autoimune contra miosina tipo 2M',
      protocols: [{
        id: 'p2', title: 'Protocolo MMM', subtitle: 'Diagnóstico, imunossupressão e abertura mandibular',
        stages: [
          { id: 's1', label: 'Fase Aguda', urgency: 'high', description: 'Músculos mastigatórios edemaciados.', signs: ['Inchaço dos músculos da cabeça', 'Dor ao abrir a boca', 'Febre', 'Relutância em comer'] },
          { id: 's2', label: 'Fase Crônica — Fibrose', urgency: 'moderate', description: 'Boca presa por fibrose muscular.', signs: ['Impossível abrir a boca (trismo)', 'Atrofia muscular severa', 'Cão emagrecendo por incapacidade de comer'] },
        ],
        triggers: ['Doença autoimune (anticorpos anti-2M)', 'Predisposição racial', 'Gatilho ambiental desconhecido'],
        steps: [
          { title: 'Imunossupressão imediata', icon: '💊', duration: '3-6 meses de tratamento',
            description: 'Prednisona imunossupressora: único tratamento efetivo. Diagnóstico precoce evita fibrose irreversível.',
            checklist: ['Titulação anti-2M: diagnóstico definitivo', 'Prednisona 2mg/kg/dia: imunossupressão', 'Fase crônica/fibrose: prognóstico pior', 'Abertura mandibular sob anestesia: exercitar para evitar fibrose', 'Fase crônica com trismo: pode precisar abertura cirúrgica', 'Recidiva ao reduzir prednisona: comum'] },
        ],
        checklists: [{ label: 'Tratamento MMM', freq: 'daily', items: ['Prednisona dada?', 'Consegue abrir a boca?', 'Come normalmente?', 'Atrofia muscular progressiva?'] }],
        weeklyPlan: [
          { day: 1, label: 'Diagnóstico', tasks: ['Titulação anti-2M', 'Prednisona imediatamente', 'Biópsia se necessário'] },
          { day: 2, label: 'Semana 1', tasks: ['Melhora da dor?', 'Consegue abrir a boca mais?', 'Coma mole ou papinha?'] },
          { day: 3, label: 'Semana 2-4', tasks: ['Reduzir prednisona gradualmente?', 'Abertura mandibular melhorou?', 'Recidiva ao reduzir?'] },
          { day: 4, label: 'Meses 2-3', tasks: ['Dose de manutenção de prednisona?', 'Atrofia muscular reverteu?', 'Qualidade de vida boa?'] },
          { day: 5, label: 'Fase Crônica', tasks: ['Trismo estabelecido: prognóstico reservado', 'Procedimento sob anestesia para abrir?', 'Fisioterapia mandibular?'] },
          { day: 6, label: 'Recidiva', tasks: ['Prednisona reduzida demais?', 'Reiniciar dose imunossupressora?', 'Azatioprina: poupar dose de prednisona?'] },
          { day: 7, label: 'Longo Prazo', tasks: ['Tratamento mínimo 3-6 meses?', 'Raças predispostas: diagnóstico precoce', 'MMM diagnosticado cedo: prognóstico excelente'] },
        ],
        vetAlert: ['Trismo (boca completamente presa)', 'Atrofia muscular rápida', 'Cão que para de comer por dor'],
        prevention: ['Diagnóstico precoce: antes da fibrose', 'Titulação anti-2M em raças predispostas com qualquer dor ao abrir a boca'],
        myths: [{ myth: 'Cão que não abre a boca tem problema nos dentes', truth: 'MMM é frequentemente confundida com dor dental. Se os dentes estão saudáveis e a boca não abre: suspeitar de MMM. A titulação de anti-2M é o diagnóstico definitivo. Tratamento precoce previne fibrose irreversível.' }],
        faq: [
          { q: 'MMM e tétano são a mesma coisa?', a: 'Não. Tétano (Clostridium tetani): trismo com rigidez generalizada e "sorriso sardônico". MMM: inflamação específica dos músculos mastigatórios por autoimunidade. Ambos causam trismo mas por mecanismos diferentes. Tétano é raro em cão. MMM: diagnóstico por anti-2M.' },
        ],
      }],
    },
  ],
};
