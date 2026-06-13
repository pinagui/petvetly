import type { Category } from './types';
export const catAdaptacao: Category = {
  id: 'adaptacao', name: 'Adaptação e Integração', emoji: '🏠', gradient: 'g-teal',
  description: 'Novo lar, adoção, integração com outros pets e chegada de bebê',
  conditions: [
    {
      id: 'novo-lar', name: 'Primeiros Dias no Novo Lar', emoji: '🏡', gradient: 'g-teal',
      description: 'Os primeiros 7 dias determinam a adaptação emocional do cão ao novo lar',
      prevalence: 'Cão novo em casa é a situação de maior estresse — muitos devolvidos na primeira semana por comportamentos normais de adaptação',
      protocols: [{
        id: 'p1', title: 'Protocolo de Chegada', subtitle: 'Regra dos 3-3-3: 3 dias, 3 semanas, 3 meses',
        stages: [
          { id: 's1', label: 'Regra dos 3 Dias', urgency: 'low', description: 'Cão desligado, escondido ou superexcitado — ambos normais.', signs: ['Recusa comer nos primeiros dias (normal)', 'Esconde em cantos', 'Urina ou defeca em lugares errados', 'Excitação excessiva ou letargia total', 'Qualquer extremo é normal nos 3 primeiros dias'] },
          { id: 's2', label: 'Regra das 3 Semanas', urgency: 'low', description: 'Começa a mostrar personalidade real — pode surgir comportamentos inesperados.', signs: ['Já se sente mais confortável', 'Testa limites', 'Pode latir mais ou menos que antes', 'Começa a mostrar medos e gatilhos reais'] },
        ],
        triggers: ['Mudança completa de ambiente, cheiros, rotina', 'Histórico de múltiplos lares (resgate)', 'Traumatismos ou abandono anteriores'],
        steps: [
          { title: 'Primeiros 3 dias — "Silêncio"', icon: '🤫', duration: '72 horas',
            description: 'Deixar o cão descomprimir. Menos interação forçada, não convidar visitas.',
            checklist: ['Preparar espaço dedicado com cama, água, bowl ANTES da chegada', 'Não forçar contato — deixar o cão explorar no próprio ritmo', 'Sem visitas de amigos/família na 1ª semana', 'Passeios curtos e tranquilos', 'Rotina alimentar fixa desde o 1º dia', 'Veterinário nos primeiros 3-5 dias (exame geral)'] },
        ],
        checklists: [{ label: 'Checklist de Chegada', freq: 'daily', items: ['Cão comeu alguma coisa?', 'Bebeu água?', 'Fez necessidades normalmente?', 'Dormiu?', 'Explorou algum cômodo novo voluntariamente?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Chegada', tasks: ['Espaço preparado com antecedência', 'Deixar o cão explorar sem forçar', 'Evitar abraçar forçadamente', 'Voz calma e movimentos lentos'], note: 'Não forçar interação é o maior presente nos primeiros dias' },
          { day: 2, label: 'Dia 2 — Rotina Começa', tasks: ['Horários fixos de alimentação', 'Passeio curto de 10-15 min', 'Identificar espaço onde se sente mais seguro'], note: 'Cão que não come no 1º dia: normal. Não come no 3º: veterinário' },
          { day: 3, label: 'Dia 3 — Início de Regras', tasks: ['Decidir regras da casa (sobe no sofá? entra no quarto?)', 'TODOS da família seguir as mesmas regras desde o início', 'Sem exceções nos primeiros dias'], note: 'Regras consistentes desde o início criam segurança psicológica' },
          { day: 4, label: 'Dia 4 — Exploração', tasks: ['Deixar explorar mais cômodos voluntariamente', 'Brinquedo introduzido', 'Observar medos e gatilhos (outros animais, barulhos)'] },
          { day: 5, label: 'Dia 5 — Nome', tasks: ['Chamar pelo nome com voz alegre + petisco', 'Não usar o nome para repreender', 'Responde ao nome?'], note: 'Nome = sempre coisa boa' },
          { day: 6, label: 'Dia 6 — Veterinário', tasks: ['Exame geral', 'Verificar vacinação e vermifugação', 'Relatar comportamentos observados ao médico'], note: 'Primeiros 5-7 dias: ideal para consulta inicial' },
          { day: 7, label: 'Dia 7 — Avaliação da 1ª Semana', tasks: ['Cão parece mais relaxado?', 'Come e bebe normalmente?', 'Pesadelos ou agitação noturna?', 'Planejar semanas 2-3 de adaptação'] },
        ],
        vetAlert: ['Anorexia > 3 dias', 'Diarreia com sangue', 'Letargia extrema e sem movimentos'],
        prevention: ['Preparar a casa antes da chegada', 'Regras definidas ANTES — não improvisar', 'Enriquecimento desde o 1º dia'],
        myths: [{ myth: 'O cão novo vai se adaptar rápido se tiver amor', truth: 'Amor sem estrutura confunde o cão. Rotina, regras consistentes e paciência são mais importantes que afeto excessivo nos primeiros dias.' }],
        faq: [
          { q: 'Por que o cão novo não come nada?', a: 'Normal nos primeiros 1-2 dias. O estresse suprime o apetite. Ofereça a ração habitual do lar anterior se possível. Se não come por 3+ dias, chame o veterinário.' },
          { q: 'Posso deixar o cão novo com outros pets imediatamente?', a: 'Não. Apresentação progressiva é essencial. Primeiro: cheiros (troca de manta/cama). Depois: contato visual separado. Só depois contato direto supervisionado. Apressar aumenta conflito e trauma.' },
        ],
      }],
    },
    {
      id: 'multipet', name: 'Integração Multi-Pet', emoji: '🐕🐈', gradient: 'g-orange',
      description: 'Como introduzir um novo cão ou gato ao pet que já mora na casa',
      prevalence: 'Brasil tem 74 milhões de cães e 25 milhões de gatos — conflitos multi-pet são muito comuns',
      protocols: [{
        id: 'p1', title: 'Protocolo de Integração Multi-Pet', subtitle: 'Apresentação por cheiro, visual e contato direto progressivo',
        stages: [
          { id: 's1', label: 'Apresentação Inicial', urgency: 'low', description: 'Primeiros contatos — curiosidade e possível tensão.', signs: ['Farejamento intenso', 'Postura rígida', 'Latido ou focinhada', 'Perseguição sem agressão'] },
          { id: 's2', label: 'Conflito Real', urgency: 'high', description: 'Brigas com contato físico e lesões.', signs: ['Morder com intenção', 'Growl prolongado com ataque', 'Pet novo se esconde constantemente com medo', 'Pet residente para de comer por estresse'] },
        ],
        triggers: ['Apresentação forçada e apressada', 'Sem território neutro na apresentação', 'Guarda de recursos (comida, brinquedo, dono)'],
        steps: [
          { title: 'Protocolo de 3 etapas', icon: '👃', duration: '1-4 semanas',
            description: 'Cheiro → Visual → Contato.',
            checklist: ['Etapa 1: Trocar mantas com cheiro por 3-5 dias sem contato', 'Etapa 2: Ver um ao outro através de grade/porta por 3-5 dias', 'Etapa 3: Contato supervisionado em território neutro', 'Coleiras em ambos durante o contato', 'Recursos separados: bowls, camas, brinquedos diferentes', 'Sem forçar interação positiva — deixar evoluir'] },
        ],
        checklists: [{ label: 'Monitoramento Diário da Integração', freq: 'daily', items: ['Ambos comeram normalmente?', 'Alguma briga ou growl?', 'Conseguem dividir o espaço sem tensão?', 'Aproximação voluntária de algum?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Troca de Cheiros', tasks: ['Trocar as camas/mantas dos dois animais', 'Observar reação ao cheiro do outro (rosna? ignora? cheira curioso?)', 'Não forçar nenhum contato ainda'] },
          { day: 2, label: 'Dia 2 — Cheiros no Corpo', tasks: ['Passar pano no novo animal e aproximar do residente', 'Recompensar curiosidade sem ansiedade', 'Pet residente comeu normalmente?'] },
          { day: 3, label: 'Dia 3 — Contato Visual', tasks: ['Grade ou porta separando: podem se ver sem se tocar', '5-10 min de sessão', 'Recompensar calma de ambos com petisco'] },
          { day: 4, label: 'Dia 4 — Visual Prolongado', tasks: ['15-20 min de visão mútua', 'Observar linguagem corporal: relaxada ou tensa?', 'Latidos → retroceder na etapa'], note: 'Retroceder etapas não é fracasso — é prudência' },
          { day: 5, label: 'Dia 5 — Contato em Território Neutro', tasks: ['Local que nenhum considera "seu" (rua, parque)', 'Guias em ambos os cães', 'Aproximação lateral — evitar contato frontal direto'] },
          { day: 6, label: 'Dia 6 — Em Casa Supervisionado', tasks: ['Ambos na mesma sala com supervisão ativa', 'Separar ao sinal de tensão', 'Recompensar coexistência pacífica'] },
          { day: 7, label: 'Dia 7 — Avaliação da 1ª Semana', tasks: ['Quanto progresso?', 'Convivência possível ou muito conflito?', 'Behaviorista veterinário se sem progresso'] },
        ],
        vetAlert: ['Brigas com mordidas e lesões', 'Animal que para de comer completamente por estresse', 'Gato que desenvolve cistite por estresse da integração'],
        prevention: ['Apresentação SEMPRE progressiva — nunca jogar junto de repente', 'Recursos separados evitam 80% dos conflitos', 'Apresentação em território neutro'],
        myths: [{ myth: 'Se der tempo, os animais se entendem sozinhos', truth: 'Alguns pares se integram naturalmente, outros nunca se toleram. Sem protocolo correto, conflito pode se intensificar e criar trauma permanente.' }],
        faq: [
          { q: 'Cão e gato podem viver juntos?', a: 'Sim, mas depende da individualidade de cada animal. Cão com alto instinto de caça e gato medroso é combinação difícil. Apresentação correta e enriquecimento separado para o gato (arranhador, caminhos elevados) são fundamentais.' },
          { q: 'Meu cão residente virou o dono da casa e briga com o novo — o que fazer?', a: 'Guarda de recursos e território são causas comuns. Separar os recursos (bowls longe), passeios separados inicialmente, atenção distribuída igualmente. Behaviorista veterinário em casos de briga com lesão.' },
        ],
      }],
    },
  ],
};
