import type { Category } from './types';
export const catMarcacao: Category = {
  id: 'marcacao', name: 'Marcação Territorial e Comportamento de Urina', emoji: '🚿', gradient: 'g-indigo',
  description: 'Cão que urina dentro de casa, marca território, late no portão — causas e soluções',
  conditions: [
    {
      id: 'marcacao-urina', name: 'Marcação com Urina Dentro de Casa', emoji: '🚿', gradient: 'g-indigo',
      description: 'Urinar em locais específicos dentro de casa — motivação diferente da incontinência',
      prevalence: 'Machos inteiros: 80% marcam; castração resolve em 50-60% dos casos',
      protocols: [{
        id: 'p1', title: 'Protocolo Marcação com Urina', subtitle: 'Castração, manejo ambiental, treinamento e ansiedade',
        stages: [
          { id: 's1', label: 'Marcação Hormonal', urgency: 'low', description: 'Macho inteiro marca em locais específicos.', signs: ['Cão levanta a pata em sofá, parede, cama do visitante', 'Pequena quantidade de urina em posição elevada', 'Só acontece em locais específicos', 'Mais após visita de outro cão ou pessoa estranha'] },
          { id: 's2', label: 'Marcação por Ansiedade', urgency: 'moderate', description: 'Marca por insegurança ou conflito territorial.', signs: ['Ocorre após mudança na casa', 'Novo bebê, animal ou pessoa', 'Cão ansiosos marca próximo à entrada', 'Não melhora somente com castração'] },
        ],
        triggers: ['Testosterona (macho inteiro)', 'Ansiedade de separação', 'Novo animal na casa', 'Visita de humano estranho', 'Mudança de casa', 'Estresse ambiental'],
        steps: [
          { title: 'Castração + manejo ambiental + treinamento', icon: '✂️', duration: '2-12 semanas',
            description: 'Castração é o primeiro passo para machos inteiros.',
            checklist: ['CASTRAÇÃO: reduz marcação em 50-60% dos machos', 'Limpeza enzimática dos pontos marcados (eliminar odor que mantém comportamento)', 'Evitar produto com amônia (parecido com urina)', 'Supervisão: trela indoor em machos que marcam muito', 'Negar acesso aos locais frequentes de marcação', 'Aumentar saídas para marcar no ambiente correto', '"Aqui sim": local permitido para marcar no passeio'] },
        ],
        checklists: [{ label: 'Controle de Marcação', freq: 'daily', items: ['Locais marcados limpos com produto enzimático?', 'Cão teve saídas suficientes para marcar lá fora?', 'Acesso aos locais-problema controlado?', 'Castração já realizada?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['Marcação ou incontinência? (quantidade, posição)', 'Macho inteiro: castração discutida com veterinário?', 'ITU excluída (urinálise)?'], note: 'Marcação = pequena quantidade em posição elevada; incontinência = gotejamento passivo' },
          { day: 2, label: 'Dia 2 — Limpeza Enzimática', tasks: ['Produto enzimático (Simple Green, BioPet) nos pontos marcados', 'NÃO usar água sanitária ou amônia', 'Cobrir ou bloquear acesso ao local?'] },
          { day: 3, label: 'Dia 3 — Castração', tasks: ['Castração: discutida e agendada?', 'Machos > 1 ano: comportamento pode persistir pós-castração', 'Cadelas também marcam: castração pode ajudar'] },
          { day: 4, label: 'Dia 4 — Enriquecimento', tasks: ['Saídas: 3-4 passeios diários (marcar lá fora)', 'Passeios de "sniffari" (farejar livremente)', 'Canal de marcação = lá fora, não dentro de casa'] },
          { day: 5, label: 'Dia 5 — Treinamento', tasks: ['Flagrar marcando: interromper com "NÃO" + levar para fora', 'Nunca punir após o fato (cão não associa)', 'Recompensar ao urinar no local correto lá fora?'] },
          { day: 6, label: 'Dia 6 — Ansiedade', tasks: ['Marcação por ansiedade? Causa identificada?', 'Novo animal na casa: reintrodução gradual', 'Feromonas sintéticas (DAP): reduzem ansiedade'] },
          { day: 7, label: 'Dia 7 — Avaliação', tasks: ['Frequência de marcação reduziu?', 'Pós-castração: 2-4 semanas para efeito comportamental?', 'Comportamentalista veterinário se ansiedade?'] },
        ],
        vetAlert: ['ITU confundida com marcação (urinálise resolve a dúvida)', 'Marcação acompanhada de agressividade territorial'],
        prevention: ['Castração precoce reduz marcação hormonal', 'Rotina de passeios consistente', 'Supervisão de machos inteiros dentro de casa'],
        myths: [{ myth: 'Castração resolve 100% da marcação dentro de casa', truth: 'Castração elimina o componente hormonal, reduzindo marcação em 50-60% dos machos. Comportamento aprendido e marcação por ansiedade persistem mesmo após castração e requerem treinamento e manejo ambiental.' }],
        faq: [
          { q: 'Cadela também marca território com urina?', a: 'Sim, menos frequentemente que machos. Cadelas inteiras durante o cio marcam mais. Cadelas castradas também podem marcar por ansiedade ou conflito social.' },
          { q: 'Produto para parar a marcação funciona?', a: 'Feromonas sintéticas (DAP/Adaptil): reduzem ansiedade e podem diminuir marcação por estresse. Produtos com cheiro aversivo: eficácia variável. Limpeza enzimática dos pontos existentes é mais eficaz do que sprays preventivos.' },
        ],
      }],
    },
  ],
};
