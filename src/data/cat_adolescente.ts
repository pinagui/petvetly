import type { Category } from './types';
export const catAdolescente: Category = {
  id: 'adolescente', name: 'Adolescência Canina', emoji: '🐕', gradient: 'g-orange',
  description: 'Puberdade, comportamento explosivo dos 6-18 meses e como manejar a fase mais difícil',
  conditions: [
    {
      id: 'puberdade-canina', name: 'Puberdade e Comportamento Adolescente', emoji: '🌪️', gradient: 'g-orange',
      description: 'O cão adolescente "esquece" tudo que aprendeu — é normal e tem solução',
      prevalence: 'Fase mais difícil dos tutores — principal período de abandono (6-18 meses)',
      protocols: [{
        id: 'p1', title: 'Protocolo Adolescência Canina', subtitle: 'Entender a fase, manter o treino e sobreviver aos 6-18 meses',
        stages: [
          { id: 's1', label: '6-9 Meses — Início Puberdade', urgency: 'low', description: 'Comportamentos novos emergem — testosterona/estrogênio aumentam.', signs: ['Machos: marcação urinária em casa começa', 'Fêmeas: primeiro cio (6-12 meses em raças médias)', 'Cheiro das outras fêmeas em cio distrai completamente', 'Cão "esquece" comandos aprendidos'] },
          { id: 's2', label: '9-18 Meses — Pico Adolescência', urgency: 'low', description: 'Testosterona no pico em machos, cérebro ainda imaturo.', signs: ['Hiperatividade', 'Destrói objetos', 'Ignora o tutor', 'Testa limites constantemente', 'Reatividade com outros machos'] },
        ],
        triggers: ['Hormônios sexuais em ascensão', 'Maturação cerebral incompleta (córtex pré-frontal)', 'Energia sem canalização adequada', 'Treino inconsistente durante a fase'],
        steps: [
          { title: 'Manter consistência e exercício', icon: '🎯', duration: '6-18 meses',
            description: 'A fase é temporária. Consistência e exercício são as chaves.',
            checklist: ['Manter treino diário — não desistir mesmo com "regressão"', 'Aumentar exercício (a energia física precisa de saída)', 'Enriquecimento mental: puzzles, farejar, treinos novos', 'Evitar punição física: piora ansiedade e agressividade', 'Castração em machos: pode ajudar na marcação e reatividade', 'Primeiro cio em fêmeas: isolar de machos em período fértil'] },
        ],
        checklists: [{ label: 'Rotina do Adolescente', freq: 'daily', items: ['Exercício adequado para a idade e raça?', 'Treino de 5-10 min realizado?', 'Enriquecimento mental oferecido?', 'Limites mantidos consistentemente?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Reconhecer a Fase', tasks: ['Cão entre 6-18 meses com comportamento difícil?', 'Verificar: é normal ou há patologia?', 'Plano de exercício e treino para a semana'], note: 'A fase adolescente é NORMAL — não é falha do treino nem do cão' },
          { day: 2, label: 'Dia 2 — Exercício Dobrado', tasks: ['Adolescente precisa de 50% mais exercício que filhote', 'Corrida, agility, natação, bola', 'Cão cansado = cão obediente'], note: 'Energia não gasta vira destruição e latido' },
          { day: 3, label: 'Dia 3 — Treino Revisado', tasks: ['Comandos básicos: praticar todos os dias', '"Esqueceu" sentar? Retome do básico sem irritação', 'Sessões mais curtas (5 min) com alta recompensa'] },
          { day: 4, label: 'Dia 4 — Marcação Urinária (Machos)', tasks: ['Cão marcou dentro de casa?', 'Limpeza com enzimático (não amônia — cheiro similar à urina)', 'Castração? Discutir com veterinário'], note: 'Marcação em casa = hormônio + aprendizado — castração ajuda bastante' },
          { day: 5, label: 'Dia 5 — Primeiro Cio (Fêmeas)', tasks: ['Sangramento vaginal iniciou?', 'Isolar de machos por 21 dias', 'Proteger de tentativas de fuga', 'Agendar castração para após o cio?'] },
          { day: 6, label: 'Dia 6 — Gerenciamento de Ambiente', tasks: ['Objetos de valor fora do alcance (mastigação destrutiva)', 'Exercício antes de ficar sozinho em casa', 'Kong ou puzzle ao sair'] },
          { day: 7, label: 'Dia 7 — Perspectiva', tasks: ['A fase termina entre 12-24 meses (raças grandes: mais tarde)', 'Consistência agora = cão adulto equilibrado', 'Registrar comportamentos positivos também!'] },
        ],
        vetAlert: ['Agressividade que aumenta em frequência ou intensidade', 'Primeiro cio com mais de 1 ano de atraso', 'Criptorquidismo não diagnosticado'],
        prevention: ['Treinamento consistente desde filhote', 'Socialização completa até 16 semanas', 'Exercício adequado à raça durante toda a adolescência'],
        myths: [{ myth: 'Meu cão virou outro — o treino não funcionou', truth: 'O cérebro adolescente canino tem literalmente menos controle de impulsos. O treino está lá — só precisa de reforço. A maturidade cerebral completa em raças médias ocorre entre 18-24 meses.' }],
        faq: [
          { q: 'Quando o cão adolescente "melhora"?', a: 'Raças pequenas: 12-14 meses. Médias: 14-18 meses. Grandes: 18-24 meses. Gigantes: até 3 anos. A consistência no treino durante a adolescência determina o cão adulto que você terá.' },
          { q: 'Castrar ajuda no comportamento adolescente?', a: 'Para machos: reduz marcação urinária, reatividade a outros machos e escapismo. Para fêmeas: elimina comportamentos do cio. Não "cura" todos os problemas comportamentais — personalidade e treino são mais determinantes.' },
          { q: 'Devo usar coleira de choque ou estrangulamento para controlar o adolescente?', a: 'Não. Métodos punitivos em adolescentes criam adultos ansiosos, reativos e/ou agressivos. Reforço positivo consistente + exercício adequado é muito mais eficaz.' },
        ],
      }],
    },
  ],
};
