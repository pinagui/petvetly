import type { Category } from './types';
export const catCriancasPet: Category = {
  id: 'criancas-pet', name: 'Cão e Crianças', emoji: '👧🐶', gradient: 'g-emerald',
  description: 'Cão com bebê, mordida em criança, integração segura e educação simultânea',
  conditions: [
    {
      id: 'cao-bebe', name: 'Cão com Bebê Recém-Nascido', emoji: '👶', gradient: 'g-pink',
      description: 'Chegada de um bebê transforma completamente a vida do cão — como preparar',
      prevalence: 'Mudança de rotina com bebê é um dos maiores gatilhos de ansiedade e comportamento indesejado no cão',
      protocols: [{
        id: 'p1', title: 'Protocolo Cão com Bebê', subtitle: 'Preparação antes, apresentação segura e convivência saudável',
        stages: [
          { id: 's1', label: 'Gestação — Preparação', urgency: 'low', description: '9 meses para preparar o cão para a chegada do bebê.', signs: ['Cão depende muito da atenção do tutor', 'Não tem boa obediência de comandos básicos', 'Nunca foi exposto a sons/cheiros de bebê'] },
          { id: 's2', label: 'Chegada do Bebê', urgency: 'low', description: 'Primeiro encontro cão-bebê — deve ser controlado.', signs: ['Cão muito excitado', 'Latidos ao choro do bebê', 'Ciúme de atenção visível', 'Aproximação não convidada do berço'] },
        ],
        triggers: ['Mudança radical de rotina e atenção', 'Novos cheiros, sons e objetos', 'Restrição de espaços antes permitidos', 'Cão não preparado para a mudança'],
        steps: [
          { title: 'Preparação antes do bebê', icon: '📋', duration: '9 meses de gestação',
            description: 'Introduzir gradualmente os sons, cheiros e mudanças antes da chegada.',
            checklist: ['Passar loção de bebê no braço do tutor para o cão farejar', 'Reproduzir sons de choro de bebê gradualmente (YouTube)', 'Instalar grades e cercadinhos antes do bebê chegar', 'Praticar comandos: sentar, ficar, deixa, pra baixo', 'Reduzir gradualmente atenção excessiva (evitar dependência aguda)', 'Visita ao pediatra para verificar alergias (cão e bebê)'] },
          { title: 'Primeiro encontro', icon: '👶', duration: 'Chegada em casa',
            description: 'Cão conhece o cheiro antes de ver o bebê.',
            checklist: ['Trazer fralda ou manta do bebê do hospital ANTES de trazer o bebê', 'Cão fareja o objeto, recompensa se calmo', 'Apresentação: cão sentado/deitado, bebê no colo do adulto à distância', 'Cão aproxima farejando: permitir com supervisão total', 'NUNCA deixar cão e bebê sozinhos — NUNCA'] },
        ],
        checklists: [{ label: 'Convivência Segura Diária', freq: 'daily', items: ['Cão e bebê NUNCA sozinhos?', 'Zona segura do cão respeitada?', 'Cão teve atenção individual hoje?', 'Bebê jamais tocou o rosto do cão sem supervisão?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Retorno do Hospital', tasks: ['Trazer objeto com cheiro do bebê primeiro', 'Cão excitado: exercitar antes do retorno', 'Apresentação sem bebê no colo ainda'], note: 'Rotina de apresentação determina a relação por anos' },
          { day: 2, label: 'Dia 2 — Primeiros Encontros', tasks: ['Encontros curtos (5-10 min) supervisionados', 'Cão pode farejar os pés e mãos do bebê', 'Recompensar comportamento calmo do cão'] },
          { day: 3, label: 'Dia 3 — Rotina do Cão', tasks: ['Manter horário de passeio do cão', 'Atenção individual para o cão (15 min/dia)', 'Cão não deve sentir que bebê = fim da atenção'] },
          { day: 4, label: 'Dia 4 — Choro do Bebê', tasks: ['Cão reage ao choro? Ansioso ou alerta?', 'Distrair o cão durante choro', 'Associar choro = petisco para o cão?'], note: 'Choro do bebê associado a coisa boa = cão calmo' },
          { day: 5, label: 'Dia 5 — Espaço Seguro do Cão', tasks: ['Cama/canil do cão: lugar sem acesso de crianças', 'Cão pode se retirar quando quiser', 'Respeitar o retiro do cão — não forçar interação'] },
          { day: 6, label: 'Dia 6 — Quando Bebê Cresce', tasks: ['Bebê que rasteja: cão a salvo de puxões?', 'Ensinar bebê "delicado" antes de qualquer contato', 'Cão estressado: separar ativamente'] },
          { day: 7, label: 'Dia 7 — Avaliação da Semana', tasks: ['Cão mais calmo com bebê?', 'Algum growl ou sinal de desconforto?', 'Rotina de atenção ao cão mantida?'] },
        ],
        vetAlert: ['Growl do cão em direção ao bebê', 'Cão que persegue o bebê como presa', 'Cão com sinais de estresse crônico (língua, bocejos, olhar esquivo constante)'],
        prevention: ['Comandos básicos sólidos antes do bebê', 'Preparação gradual dos 9 meses', 'Zona de retiro do cão respeitada'],
        myths: [{ myth: 'Cão que cresceu com crianças é seguro', truth: 'Cão que cresceu com crianças PODE ser mais tolerante, mas nenhum cão é 100% seguro sem supervisão. Criança e cão nunca devem ficar sozinhos — independente do histórico do cão.' }],
        faq: [
          { q: 'Meu bebê tem alergia — preciso devolver o cão?', a: 'Alergias a animais em bebês: avaliar com alergista pediátrico. Muitos bebês desenvolvem tolerância com exposição graduada. Devolução do cão raramente é a primeira opção. Higiene rigorosa, áreas sem cão e HEPA filters são medidas iniciais.' },
          { q: 'Quando criança pode brincar com cão sem supervisão adulta?', a: 'Nunca com < 5-6 anos. A partir de 6-8 anos: criança educada sobre linguagem corporal canina e cão com temperamento comprovado. Mesmo assim, adulto próximo.' },
        ],
      }],
    },
    {
      id: 'mordida-crianca', name: 'Mordida em Criança', emoji: '🩸', gradient: 'g-red',
      description: 'O que fazer imediatamente após mordida, cuidado da ferida e avaliação do cão',
      prevalence: 'Crianças de 5-9 anos representam o maior grupo de vítimas de mordidas; maioria das mordidas é de cão da própria família',
      protocols: [{
        id: 'p1', title: 'Protocolo Pós-Mordida', subtitle: 'Cuidado da ferida, protocolo de raiva e avaliação comportamental',
        stages: [
          { id: 's1', label: 'Mordida Superficial', urgency: 'high', description: 'Arranhão ou mordida que não rompe a pele completamente.', signs: ['Vermelhidão ou hematoma', 'Arranhão superficial', 'Sem sangramento ativo'] },
          { id: 's2', label: 'Mordida Profunda', urgency: 'emergency', description: 'Ruptura da pele com sangramento.', signs: ['Sangramento ativo', 'Lesão profunda', 'Face ou pescoço: emergência pediátrica', 'Multimordida'] },
        ],
        triggers: ['Criança invade espaço do cão dormindo', 'Aproximação da comida ou brinquedo do cão', 'Brincadeira muito intensa', 'Criança que gritou ou fez movimento brusco'],
        steps: [
          { title: 'Primeiros socorros imediatos', icon: '🩺', duration: 'Imediato',
            description: 'Lavar abundantemente, UPA/pronto socorro e notificação.',
            checklist: ['Lavar com água e sabão por 5-10 min IMEDIATAMENTE', 'UPA ou pronto socorro para avaliação da ferida e sutura se necessário', 'Notificação à vigilância sanitária (protocolo de raiva)', 'Cão fica em observação 10 dias (protocolo padrão)', 'Verificar vacinação anti-rábica do cão (no mínimo 1 dose prévia)', 'Documentar o incidente (foto da ferida, data, local)'] },
        ],
        checklists: [{ label: 'Pós-Mordida', freq: 'daily', items: ['Ferida limpa e sem sinais de infecção?', 'Antibiótico prescrito?', 'Cão em observação conforme protocolo?', 'Avaliação comportamental agendada?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Emergência', tasks: ['Lavar ferida 10 min com água e sabão', 'UPA/Pronto Socorro', 'Notificação vigilância sanitária'], note: 'Raiva: raríssima em cão vacinado, mas protocolo é obrigatório' },
          { day: 2, label: 'Dia 2 — Cão em Observação', tasks: ['Cão separado de crianças', 'Observação de 10 dias (protocolo anti-rábico)', 'Vacinação do cão verificada?'] },
          { day: 3, label: 'Dia 3 — Avaliação Comportamental', tasks: ['Agendar médico veterinário comportamentalista', 'Descrever contexto completo da mordida', 'Nenhuma punição ao cão (aumenta risco de nova mordida)'], note: 'Punir após mordida não ensina nada — cão não tem raciocínio retrospectivo' },
          { day: 4, label: 'Dia 4 — Análise do Incidente', tasks: ['Por que aconteceu? (gatilho identificado?)', 'Criança invadiu espaço do cão?', 'Havia sinais prévios ignorados?'] },
          { day: 5, label: 'Dia 5 — Segurança', tasks: ['Regras de convivência reformuladas?', 'Criança recebeu educação sobre linguagem corporal do cão?', 'Cão e criança separarados quando sem supervisão adulta?'] },
          { day: 6, label: 'Dia 6 — Decisão Difícil', tasks: ['Comportamentalista avaliou prognóstico?', 'Reabilitação viável no contexto da família?', 'Se alto risco: recolocação responsável?'] },
          { day: 7, label: 'Dia 7 — Plano de Longo Prazo', tasks: ['Crianças nunca sozinhas com o cão?', 'Comportamentalista acompanhando?', 'Todos da família alinhados?'] },
        ],
        vetAlert: ['Mordida no rosto ou pescoço de criança', 'Mordida com perda de tecido', 'Cão que mordeu múltiplas vezes no mesmo episódio'],
        prevention: ['Supervisão SEMPRE de cão e criança', 'Educação da criança: nunca tocar cão dormindo, comendo ou com dor', 'Zona de retiro do cão inviolável'],
        myths: [{ myth: 'Cão que mordeu criança precisa ser sacrificado', truth: 'Maioria das mordidas tem causa contextual identificável e tratável. Avaliação comportamental veterinária é o primeiro passo. Eutanásia é considerada somente em casos de risco comprovado sem alternativa.' }],
        faq: [
          { q: 'Preciso vacinar a criança contra raiva após mordida de cão vacinado?', a: 'Protocolo da vigilância sanitária: cão em observação 10 dias. Se saudável ao fim dos 10 dias + vacinação anti-rábica em dia: profilaxia humana desnecessária na maioria dos casos. O médico da UPA faz o protocolo correto.' },
          { q: 'Devo denunciar o cão à prefeitura?', a: 'Notificação à vigilância sanitária é obrigatória por lei para protocolo anti-rábico. Isso não significa apreensão — cão fica em casa em observação. Recolhimento pelo CCZ ocorre só em casos específicos (cão sem tutor ou vacinação).' },
        ],
      }],
    },
  ],
};
