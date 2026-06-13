import type { Category } from './types';
export const catAgressividade: Category = {
  id: 'agressividade', name: 'Agressividade', emoji: '⚠️', gradient: 'g-red',
  description: 'Tipos de agressividade, manejo seguro, mordidas e reabilitação comportamental',
  conditions: [
    {
      id: 'agressividade-humanos', name: 'Agressividade com Humanos', emoji: '😤', gradient: 'g-red',
      description: 'Growl, snap e mordida em pessoas — como avaliar o risco e manejar com segurança',
      prevalence: 'Causa mais comum de eutanásia em cães jovens adultos; 90% tem causa identificável e tratável',
      protocols: [{
        id: 'p1', title: 'Protocolo de Agressividade', subtitle: 'Avaliação de risco, manejo seguro e reabilitação por behaviorista',
        stages: [
          { id: 's1', label: 'Agressão Leve', urgency: 'high', description: 'Growl ou snap sem contato.', signs: ['Growl (rosnar) ao ser tocado', 'Snap (tentativa de morder sem contato)', 'Postura rígida antes da agressão', 'Ameaça sem morder'] },
          { id: 's2', label: 'Mordida', urgency: 'emergency', description: 'Contato físico com ferimento.', signs: ['Mordida com ferimento em pessoa', 'Mordida inibida (sem romper pele) ou completa', 'Vítima: criança, idoso ou pessoa vulnerável', 'Multimordida sem liberação'] },
        ],
        triggers: ['Dor (agressividade por dor — comum em idosos)', 'Medo (mais comum que dominância)', 'Guarda de recursos', 'Predatório (criança = presa)', 'Redirecionamento (preso na guia, morde o tutor)'],
        steps: [
          { title: 'SEGURANÇA PRIMEIRO', icon: '🛡️', duration: 'Imediato',
            description: 'Segurança de todos os envolvidos antes de qualquer reabilitação.',
            checklist: ['Focinheira: obrigatória em espaços onde há risco', 'Isolar o cão de potenciais vítimas', 'Criança jamais sozinha com cão com histórico de mordida', 'Avaliar se é dor subjacente (exame veterinário completo primeiro)', 'Behaviorista veterinário certificado — não adestrador simples', 'Castração: pode reduzir agressividade testosterone-dependente'] },
        ],
        checklists: [{ label: 'Segurança Diária', freq: 'daily', items: ['Focinheira disponível em situações de risco?', 'Gatilhos de agressão evitados hoje?', 'Crianças supervisionadas com o cão?', 'Sinais de dor verificados?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação Médica', tasks: ['Exame veterinário completo (dor causa agressividade)', 'Hemograma e bioquímica', 'Hipotireoidismo: causa rara mas tratável de agressividade'], note: 'Dor é a causa mais subestimada de agressividade em cão adulto' },
          { day: 2, label: 'Dia 2 — Segurança', tasks: ['Instalar focinheira para situações de risco', 'Identificar e listar todos os gatilhos', 'Criar zona segura do cão (sem abordagem forçada)'] },
          { day: 3, label: 'Dia 3 — Behaviorista', tasks: ['Agendar avaliação com médico veterinário comportamentalista', 'NÃO com adestrador punitivo (piora agressividade)', 'Descrever cada episódio com detalhes ao comportamentalista'] },
          { day: 4, label: 'Dia 4 — Manejo Ambiental', tasks: ['Refeição do cão em local isolado?', 'Brinquedos de guarda retirados?', 'Espaço seguro sem acesso de crianças?'] },
          { day: 5, label: 'Dia 5 — Medicação?', tasks: ['Fluoxetina ou trazodona: pode ser indicado pelo comportamentalista', 'Medicação + comportamental = melhor resultado', 'NÃO medicar sem indicação veterinária'] },
          { day: 6, label: 'Dia 6 — Avaliação de Risco', tasks: ['Nível de risco: baixo, moderado ou alto?', 'Alta: crianças em casa = avaliação urgente de convivência', 'Prognóstico realista com o comportamentalista'] },
          { day: 7, label: 'Dia 7 — Plano de Longo Prazo', tasks: ['Reabilitação: processo de meses', 'Monitorar qualidade de vida do cão e da família', 'Decisão difícil? Comportamentalista apoia'] },
        ],
        vetAlert: ['Mordida em criança', 'Agressividade com escalada rápida', 'Mordida repetida com crescente intensidade'],
        prevention: ['Socialização precoce (8-16 semanas)', 'Reforço positivo — nunca punição física', 'Respeito pelos sinais de desconforto do cão'],
        myths: [{ myth: 'Cão que mordeu uma vez vai morder sempre', truth: 'Agressividade com causa identificável e tratável tem bom prognóstico com behaviorista. Mas o comportamento NUNCA deve ser ignorado ou minimizado.' }],
        faq: [
          { q: 'Devo denunciar o cão que me mordeu?', a: 'Mordida que rompe a pele: notificação à vigilância sanitária pode ser obrigatória para protocolo de raiva. Em geral, o cão fica em observação por 10 dias. Raiva em cão vacinado é raríssima, mas o protocolo protege todos.' },
          { q: 'Castrar reduz agressividade?', a: 'Castração reduz agressividade testosterone-dependente (entre machos) em 50-60% dos casos. Agressividade por medo, dor ou guarda de recursos — a castração tem efeito limitado. Avaliação individual com comportamentalista.' },
          { q: 'Posso confiar em cão com histórico de mordida perto de meu bebê?', a: 'Supervisão sempre, zero chance de erro. Cão com histórico de mordida e bebê na casa: avaliação urgente com behaviorista. Em alguns casos, realocação do cão é a decisão mais responsável.' },
        ],
      }],
    },
    {
      id: 'agressividade-caes', name: 'Reatividade e Briga entre Cães', emoji: '🐕🐕', gradient: 'g-orange',
      description: 'Reatividade a outros cães na guia, brigas em casa e manejo multi-cão',
      prevalence: 'Muito comum — 30-40% dos cães com guia apresentam reatividade a outros cães',
      protocols: [{
        id: 'p1', title: 'Protocolo Reatividade Canino-Canino', subtitle: 'Diagnóstico da causa, treinamento e manejo seguro',
        stages: [
          { id: 's1', label: 'Reativo na Guia', urgency: 'moderate', description: 'Late, puxa e tenta atacar outros cães na guia.', signs: ['Late e arremessa na direção de outros cães', 'Postura tensa, pelos eriçados', 'Foco intenso em outro cão à distância', 'Dificuldade de redirecionar quando cão visível'] },
          { id: 's2', label: 'Briga em Casa', urgency: 'high', description: 'Conflito entre cães que coabitam.', signs: ['Brigas com ferimento', 'Escalada de conflito após um gatilho', 'Um cão dominando completamente o outro', 'Cão submisso com estresse crônico'] },
        ],
        triggers: ['Frustração na guia (impulso impedido)', 'Medo (defensivo)', 'Guarda de recursos entre coabitantes', 'Excitação excessiva que se redireciona'],
        steps: [
          { title: 'Manejo seguro e treino', icon: '🦮', duration: 'Semanas a meses',
            description: 'Protocolo BAT (Behavior Adjustment Training) ou LAT (Look At That).',
            checklist: ['Identificar a distância limiar (distância em que o cão reage)', 'Trabalhar ABAIXO do limiar: cão vê outro cão + petisco sem reagir', 'Aumentar exposição gradualmente', 'Nunca punir a reatividade: piora o medo/frustração', 'Peitoral de cambão frontal: mais controle sem punição', 'Comportamentalista para casos graves ou de briga com ferimento'] },
        ],
        checklists: [{ label: 'Gerenciamento Diário', freq: 'daily', items: ['Passeio em horário de menor movimento?', 'Cruzou com outro cão sem reação intensa?', 'Petisco de alto valor disponível para contracondicionamento?', 'Manteve distância segura de limiares conhecidos?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Mapeamento', tasks: ['Identificar distância do limiar de reação', 'Que tipo de cão desencadeia? (só machos? qualquer?)', 'Em que contexto? (guia? no parque?)'], note: 'Entender o padrão é o primeiro passo do tratamento' },
          { day: 2, label: 'Dia 2 — Técnica LAT', tasks: ['Cão vê outro cão à distância segura (abaixo do limiar)', 'Cão olha para o outro → MARCA imediatamente com "bom!" + petisco', 'Pratica "Olha pra mim" como alternativa de foco'] },
          { day: 3, label: 'Dia 3 — Passeio Estratégico', tasks: ['Horário de menos cães', 'Rota sem locais de alta concentração', 'Cruzar pela rua quando ver cão à distância'] },
          { day: 4, label: 'Dia 4 — Exercício Prévio', tasks: ['Exercitar ANTES do passeio em área reativa', 'Cão menos excitado = menos reatividade', 'Olhar para o cão e ignorar = nível mais alto do treino'] },
          { day: 5, label: 'Dia 5 — Contracondicionamento', tasks: ['Saco de petisco de alto valor SÓ usado quando outro cão aparece', 'Cão começa a associar outro cão = coisa boa', 'Nunca punir durante o processo'] },
          { day: 6, label: 'Dia 6 — Briga em Casa', tasks: ['Recurso separado: 2 bowls, 2 camas distantes', 'Não interferir com corpo — coleira para separar', 'Comportamentalista urgente se brigas com ferimento'] },
          { day: 7, label: 'Dia 7 — Avaliação', tasks: ['Progresso vs. semana passada?', 'Distância do limiar diminuiu?', 'Cão redireciona mais facilmente?'] },
        ],
        vetAlert: ['Briga com ferimento entre coabitantes', 'Cão submisso com comportamento de "shutdown" (não come, esconde)', 'Escalada de brigas em frequência e intensidade'],
        prevention: ['Socialização correta com outros cães em 8-16 semanas', 'Apresentação gradual de novos cães ao lar', 'Recursos separados em casa multi-cão'],
        myths: [{ myth: 'Cão reativo é agressivo e perigoso', truth: 'Reatividade na guia é frequentemente manifestação de MEDO ou FRUSTRAÇÃO, não dominância ou intenção de machucar. Com treinamento correto, a maioria melhora significativamente.' }],
        faq: [
          { q: 'Meu cão reativo pode ir a parque de cães?', a: 'Não, pelo menos não inicialmente. Parque de cães sem guia é ambiente de alta excitação e imprevisibilidade — o pior local para trabalhar reatividade. Comece por passagem controlada à distância.' },
          { q: 'Quanto tempo para tratar reatividade?', a: 'Depende da gravidade e da consistência do treino. Melhoras iniciais em 2-4 semanas. Resultados duradouros em 3-6 meses. Alguns cães sempre precisarão de gerenciamento — o objetivo é abaixo do limiar, não ausência de resposta.' },
        ],
      }],
    },
  ],
};
