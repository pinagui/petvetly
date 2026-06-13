import type { Category } from './types';
export const catNeonatal: Category = {
  id: 'neonatal', name: 'Neonatal e Amamentação', emoji: '🍼', gradient: 'g-pink',
  description: 'Cuidados com recém-nascidos, amamentação, temperatura e desenvolvimento inicial',
  conditions: [
    {
      id: 'cuidados-neonatos', name: 'Cuidados com Recém-Nascidos', emoji: '🐾', gradient: 'g-pink',
      description: 'Os primeiros 14 dias de vida são os mais críticos — temperatura, colostro e peso diário',
      prevalence: 'Mortalidade neonatal canina: até 20-30% na primeira semana sem cuidados adequados',
      protocols: [{
        id: 'p1', title: 'Protocolo Neonatal', subtitle: 'Temperatura, colostro, pesagem diária e sinais de alerta',
        stages: [
          { id: 's1', label: 'Normal (0-14 dias)', urgency: 'low', description: 'Filhote saudável e em desenvolvimento.', signs: ['Mamar vigorosamente', 'Ganho de 5-10% do peso ao dia', 'Mucosas rosadas', 'Temperatura corporal 35-37°C (temperatura dependente da mãe)', 'Choro somente quando com fome'] },
          { id: 's2', label: 'Filhote em Risco', urgency: 'emergency', description: '"Fading puppy" — síndrome de morte neonatal.', signs: ['Choro constante ("pedido de socorro")', 'Não mama ou mama fracamente', 'Hipotermia (frio ao toque)', 'Perde peso ao invés de ganhar', 'Separado da mãe ou rejeitado'] },
        ],
        triggers: ['Hipotermia', 'Hipoglicemia', 'Herpesvírus neonatal', 'Toxicidade do leite materno', 'Falta de colostro nas primeiras horas'],
        steps: [
          { title: 'Cuidados essenciais neonatais', icon: '🍼', duration: '0-14 dias',
            description: 'Temperatura, pesagem e colostro nas primeiras 12h.',
            checklist: ['Temperatura ambiente da caixa: 29-32°C (1ª semana)', 'Colostro: filhote DEVE mamar nas primeiras 12-24h', 'Pesagem diária: todo filhote, mesma hora', 'Ganho < 5% ou perda: intervenção imediata', 'Leite substituto (Royal Canin Babydog Milk, Breeders Edge): se mãe insuficiente', 'Estimulação: anogenital com pano úmido após cada mamada (até 3 semanas)'] },
        ],
        checklists: [{ label: 'Monitoramento Neonatal Diário', freq: 'daily', items: ['Todos os filhotes pesados?', 'Todos ganharam > 5% do peso?', 'Temperatura da caixa 29-32°C?', 'Todos mamaram hoje?', 'Choro persistente em algum?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Colostro', tasks: ['Cada filhote mamar colostro nas primeiras 6-12h', 'Mãe produz leite? Verificar mamilo', 'Filhote fraco: apoiar no mamilo'], note: 'Colostro é a vacina natural — janela de absorção fecha em 24h' },
          { day: 2, label: 'Dia 2 — Pesagem', tasks: ['Pesar cada filhote individualmente (identificar por cor ou fita)', 'Registrar em tabela', 'Quem ganhou menos?'], note: 'Sem pesagem diária, fading puppy passa despercebido' },
          { day: 3, label: 'Dia 3 — Temperatura', tasks: ['Termômetro ambiental na caixa?', '29-32°C (1ª semana)', 'Filhotes não se dispersam? (frio os faz se juntar)'] },
          { day: 4, label: 'Dia 4 — Estimulação', tasks: ['Estimular eliminação após cada mamada (pano úmido na área genital)', 'Mãe está lambendo? Se não, ajudar', 'Verificar umbigos (sem vermelhidão)'] },
          { day: 5, label: 'Dia 5 — Identificar o Mais Fraco', tasks: ['O filhote menor: consegue mamada suficiente?', 'Aproximar do mamilo mais cheio', 'Separar temporariamente os maiores se necessário'] },
          { day: 6, label: 'Dia 6 — Colostro e Imunidade', tasks: ['Filhotes com dificuldade: leite substituto', 'Temperatura dos filhotes: 35-37°C', 'Amamentação a cada 1-2h (natural ou artificial)'] },
          { day: 7, label: 'Dia 7 — Avaliação', tasks: ['Todos dobraram o peso de nascimento?', 'Abertura ocular ainda fechada (normal até D10-14)', 'Mãe saudável e produtiva?'] },
        ],
        vetAlert: ['Filhote com hipotermia < 34°C', 'Filhote que perde peso por 2 dias seguidos', 'Mãe rejeita filhote ou cai sobre eles'],
        prevention: ['Temperatura adequada da caixa de parto', 'Colostro nas primeiras 12h', 'Pesagem diária obrigatória'],
        myths: [{ myth: 'A mãe cuida de tudo naturalmente', truth: 'Mães primíparas podem rejeitar, esmagar ou não produzir leite suficiente. Monitoramento humano ativo nos primeiros 14 dias salva vidas.' }],
        faq: [
          { q: 'O que fazer com filhote rejeitado pela mãe?', a: 'Amamentação artificial com leite substituto específico para cão (NUNCA leite de vaca — causa diarreia fatal). Frequência: a cada 2h nas primeiras 2 semanas. Temperatura do leite: 37-38°C. Estimulação anogenital após cada alimentação.' },
          { q: 'Como saber se a mãe tem leite suficiente?', a: 'Filhotes que ganham peso = leite adequado. Filhotes que choram constantemente, não ganham peso ou ficam apáticos = suplementação necessária. Verificar mamas da mãe: ingurgitadas vs. flácidas.' },
          { q: 'Quando filhotes podem ficar sem a mãe?', a: 'Desmame completo: 7-8 semanas. Antes disso, a presença materna e dos irmãos é essencial para desenvolvimento social. Filhote separado antes de 7 semanas tem maior risco de problemas comportamentais.' },
        ],
      }],
    },
    {
      id: 'problemas-amamentacao', name: 'Problemas de Amamentação e Mastite', emoji: '🤱', gradient: 'g-red',
      description: 'Mastite, agalaxia e pseudociese — problemas da cadela que amamenta',
      prevalence: 'Mastite afeta 5-10% das cadelas que amamentam; mais comum em primíparas',
      protocols: [{
        id: 'p1', title: 'Protocolo Mastite e Amamentação', subtitle: 'Diagnóstico de mastite, tratamento e manejo do desmame',
        stages: [
          { id: 's1', label: 'Mastite Aguda', urgency: 'high', description: 'Inflamação da glândula mamária.', signs: ['Mama vermelha, quente e dura', 'Dor intensa ao toque', 'Febre > 39,5°C', 'Recusa amamentar', 'Leite com aspecto alterado (esverdeado, sanguíneo)'] },
          { id: 's2', label: 'Agalaxia (Sem Leite)', urgency: 'high', description: 'Cadela não produz leite — filhotes em risco.', signs: ['Mamas flácidas sem produção', 'Filhotes chorando constantemente', 'Filhotes perdem peso', 'Cadela recém-parida'] },
        ],
        triggers: ['Bactérias ascendentes (Staphylococcus, E.coli)', 'Trauma das mamas (filhotes com unhas longas)', 'Desmame abrupto', 'Deficiência hormonal (prolactina baixa)'],
        steps: [
          { title: 'Tratamento da Mastite', icon: '💊', duration: 'Urgente',
            description: 'Antibiótico sistêmico, compressas mornas e monitoramento.',
            checklist: ['Antibiótico: amoxicilina+clavulanato ou cefalexina (10-14 dias)', 'Compressa morna 3-4x/dia para drenar', 'Filhotes: NÃO mamar da mama afetada (leite contaminado)', 'Ordenha manual ou filhotes saudáveis em mamas sadias', 'Abscesso: drenagem veterinária', 'Mastite grave/necrosante: remoção cirúrgica da mama'] },
        ],
        checklists: [{ label: 'Mamas em Lactação — Diário', freq: 'daily', items: ['Todas as mamas: cor e temperatura normais?', 'Mamas endurecidas ou avermelhadas?', 'Mãe amamentando voluntariamente?', 'Filhotes mamando de todas as mamas?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['Palpar cada mama individualmente', 'Temperatura da cadela?', 'Aspecto do leite de cada mama'], note: 'Mastite grau 3 (necrosante) = cirurgia de emergência' },
          { day: 2, label: 'Dia 2 — Tratamento Iniciado', tasks: ['Antibiótico iniciado', 'Compressa morna na mama afetada 3x/dia', 'Filhotes afastados da mama doente'], note: 'Filhotes de outras mamas: suplementar se produção cair' },
          { day: 3, label: 'Dia 3 — Filhotes', tasks: ['Pesagem de todos os filhotes', 'Ganharam peso?', 'Leite substituto se necessário', 'Cortar unhas dos filhotes (trauma nas mamas)'] },
          { day: 4, label: 'Dia 4 — Mama Afetada', tasks: ['Vermelhidão diminuindo?', 'Temperatura da cadela normal?', 'Mama mais macia ao toque?'] },
          { day: 5, label: 'Dia 5 — Monitoramento', tasks: ['Antibiótco em dia?', 'Mãe comendo e bebendo?', 'Produção de leite nas mamas sadias suficiente?'] },
          { day: 6, label: 'Dia 6 — Recuperação', tasks: ['Mama afetada pode ser reintroduzida?', 'Veterinário autoriza?', 'Continuar antibiótico por 10-14 dias mesmo com melhora'] },
          { day: 7, label: 'Dia 7 — Revisão', tasks: ['Mastite resolvida?', 'Filhotes ganhando peso normalmente?', 'Cadela saudável?', 'Exame veterinário de controle'] },
        ],
        vetAlert: ['Mama negra ou com necrose', 'Febre > 40°C na cadela', 'Todos os filhotes perdendo peso rapidamente'],
        prevention: ['Cortar unhas dos filhotes a cada 5-7 dias', 'Higiene da caixa de parto', 'Monitoramento diário das mamas durante lactação'],
        myths: [{ myth: 'Filhote que mama mama bem — não precisa verificar', truth: 'Filhote pode mamar de mama com mastite e ingerir leite contaminado. Pode também mamar de mama com pouco leite. Pesagem diária é o único método confiável.' }],
        faq: [
          { q: 'Posso continuar amamentando com mastite?', a: 'Depende do grau. Mastite leve (mama vermelha sem abscesso): filhotes podem continuar mamando de outras mamas, com mama afetada sendo ordenhada manualmente. Mastite grave ou abscesso: afastar todos os filhotes e suplementar.' },
          { q: 'Cadela pode pegar mastite após a cirurgia de castração?', a: 'Sim, se for castrada durante a lactação ou na pseudociese. A pseudociese (lactação falsa) tratada com cabbergolina e seguida de castração tem baixo risco de mastite se feita no momento correto.' },
        ],
      }],
    },
  ],
};
