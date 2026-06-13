import type { Category } from './types';
export const catGravidezFalsa: Category = {
  id: 'gravidez-falsa', name: 'Pseudociese (Gravidez Falsa)', emoji: '🤱', gradient: 'g-pink',
  description: 'Cadela que fica com leite e comportamento maternal sem estar grávida',
  conditions: [
    {
      id: 'pseudociese', name: 'Pseudociese Canina', emoji: '🤱', gradient: 'g-pink',
      description: 'Gravidez psicológica — sintomas físicos e comportamentais de gravidez sem fertilização',
      prevalence: 'Afeta 50-75% das cadelas inteiras não prenhes após o cio — extremamente comum',
      protocols: [{
        id: 'p1', title: 'Protocolo Pseudociese', subtitle: 'Reconhecer, manejar e prevenir com castração',
        stages: [
          { id: 's1', label: 'Pseudociese Leve', urgency: 'low', description: 'Mamas com leite, comportamento levemente maternal.', signs: ['Secreção láctea nas mamas', 'Adota brinquedos como "filhotes"', 'Constrói "ninho"', 'Mais afetiva ou mais quieta', '4-8 semanas após o cio'] },
          { id: 's2', label: 'Pseudociese Grave', urgency: 'moderate', description: 'Mastite, agressividade e comportamento obsessivo.', signs: ['Mama ingurgitada e dolorosa', 'Mastite por secreção láctea estagnada', 'Agressividade ao proteger os "filhotes" (brinquedos)', 'Come pouco e fica prostrada'] },
        ],
        triggers: ['Progesterona elevada pós-cio e prolactina estimulada', 'Toda cadela inteira pode ter — variação é de grau', 'Recorre a cada ciclo em cadelas predispostas'],
        steps: [
          { title: 'Manejo e prevenção', icon: '🤱', duration: '2-4 semanas de resolução espontânea',
            description: 'A maioria resolve em 2-4 semanas espontaneamente.',
            checklist: ['Retirar os "filhotes" (brinquedos): piora o comportamento maternal', 'Evitar estímulo das mamas: aumenta prolactina', 'Compressa fria: reduz ingurgitamento', 'Cabergolina: inibidor de prolactina se sintomas graves', 'Mastite: veterinário urgente (antibiótico)', 'CASTRAÇÃO: única prevenção definitiva', 'Recorre em todo cio: considerar castração'] },
        ],
        checklists: [{ label: 'Monitoramento Pseudociese', freq: 'daily', items: ['Mamas: temperatura e tamanho normal?', 'Comiia normalmente?', 'Agressividade ao "proteger" objetos?', 'Resolução espontânea esperada?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Reconhecimento', tasks: ['Mamas com leite + 4-8 semanas pós-cio: pseudociese', 'Retirar todos os brinquedos que a cadela "adotou"', 'Evitar tocar as mamas'], note: 'Tocar e ordenhar as mamas aumenta a produção de leite — NÃO estimular' },
          { day: 2, label: 'Dia 2 — Mastite?', tasks: ['Mama quente, vermelha e dolorosa: mastite', 'Veterinário para antibiótico se mastite', 'Mama apenas ingurgitada: compresa fria?'] },
          { day: 3, label: 'Dia 3 — Comportamento Maternal', tasks: ['Brinquedos retirados?', 'Cadela procura outros objetos?', 'Agressividade ao proteger = risco para a família'] },
          { day: 4, label: 'Dia 4 — Cabergolina', tasks: ['Sintomas graves: veterinário indica cabergolina?', 'Inibidor de prolactina: resolve em 1-2 semanas', 'Efeito colateral: vômito (dar com alimento)'] },
          { day: 5, label: 'Dia 5 — Resolução', tasks: ['Leite diminuindo?', 'Comportamento maternal diminuindo?', 'Esperar mais 2-3 semanas se leve'] },
          { day: 6, label: 'Dia 6 — Prevenção', tasks: ['Castração discutida com veterinário?', 'Pseudociese recorrente a cada cio: indicação forte de castração', 'Risco de mastite e tumor mamário sem castração?'] },
          { day: 7, label: 'Dia 7 — Decisão Sobre Castração', tasks: ['Cadela terá mais cios?', 'Pseudociese recorrente = qualidade de vida comprometida', 'Benefícios da castração: tumor mamário, piometra, pseudociese'] },
        ],
        vetAlert: ['Mastite (mama vermelha, quente, dolorosa)', 'Febre + mastite (infecção sistêmica)', 'Agressividade intensa ao "proteger filhotes"'],
        prevention: ['Castração é a única prevenção definitiva', 'Cadelas que recidivam todo cio: castração recomendada', 'Castração antes do 1° cio: elimina 99% do risco de tumor mamário'],
        myths: [{ myth: 'Pseudociese só acontece em cadela que "queria" ter filhotes', truth: 'Pseudociese é fisiológica — ocorre por progesterona e prolactina após qualquer cio, independente de "querer" ter filhotes. É resposta hormonal evolutiva, não psicológica.' }],
        faq: [
          { q: 'Posso ordenhar a cadela com pseudociese para aliviar o ingurgitamento?', a: 'NÃO. Ordenhar as mamas estimula ainda mais a produção de prolactina, prolongando a pseudociese. Compressa fria reduz o ingurgitamento sem estimular a produção.' },
          { q: 'Quando castrar após a pseudociese?', a: 'Aguardar a resolução completa da pseudociese (sem leite) — geralmente 2-4 semanas após o início. Castrar durante a pseudociese pode piorar os sintomas temporariamente (queda abrupta de progesterona aumenta prolactina).' },
        ],
      }],
    },
  ],
};
