import type { Category } from './types';

export const catFeridas: Category = {
  id: 'feridas',
  name: 'Feridas & Pele',
  emoji: '🩹',
  gradient: 'grad-orange',
  description: 'Cuidado com feridas, lacerações, mordidas de outros animais, abcessos, queimaduras e técnicas de curativo domiciliar',
  conditions: [
    {
      id: 'feridas-mordidas',
      name: 'Feridas e Mordidas',
      emoji: '🩹',
      gradient: 'grad-orange',
      description: 'Avaliação e primeiros socorros para lacerações, feridas por mordida, abcessos e lesões traumáticas em cães. Mordidas de animais são sempre contaminadas e exigem atenção especial.',
      prevalence: 'Feridas por mordida são uma das principais causas de consulta de emergência veterinária.',
      protocols: [
        {
          id: 'proto-feridas',
          title: 'Primeiros Socorros para Feridas Caninas',
          subtitle: 'Avaliação, limpeza e decisão sobre necessidade veterinária',
          stages: [
            {
              id: 's0', label: 'Ferida superficial', description: 'Arranhado ou abrasão superficial sem comprometimento profundo.',
              signs: ['Sangramento mínimo ou sem sangramento', 'Ferida não ultrapassa a pele (sem profundidade)', 'Cão não demonstra dor intensa', 'Sem sujidade profunda'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'Laceração moderada', description: 'Ferida com bordas abertas ou sangramento ativo.',
              signs: ['Bordas da ferida abertas > 1cm', 'Sangramento ativo que não cede com pressão em 10 min', 'Ferida em face, pata ou região articular', 'Sujidade visível no interior'],
              urgency: 'moderate'
            },
            {
              id: 's2', label: 'Mordida de animal', description: 'Toda mordida é potencialmente grave — contaminação bacteriana profunda.',
              signs: ['Perfuração por dentes — "ponta de cigarro" pode esconder dano profundo', 'Sangramento variável', 'Calor e inchaço após 24-48h (infecção)', 'Pus emergindo de furo pequeno'],
              urgency: 'high'
            },
            {
              id: 's3', label: 'Ferida grave / comprometimento profundo', description: 'Emergência — estruturas profundas visíveis.',
              signs: ['Sangramento arterial (jato pulsátil)', 'Músculo, tendão ou osso visível', 'Ferida no tórax com dificuldade respiratória', 'Ferida penetrante no abdômen', 'Fraturas expostas'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Briga com outro cão ou animal',
            'Atropelamento',
            'Queda de altura',
            'Arame farpado ou cercas de madeira',
            'Objeto perfurocortante no ambiente',
            'Mau trato ou trauma intencional'
          ],
          steps: [
            {
              title: 'Contenção segura e avaliação inicial',
              description: 'Cão com dor pode morder mesmo o tutor amado. Coloque focinheira improvisada antes de examinar ferida dolorosa.',
              duration: 'Primeiros 2 minutos',
              icon: '🛡️',
              checklist: [
                'Focinheira improvisada: ataduras ou cinto em forma de laço na focinheira',
                'Avaliar: ferida superficial ou profunda?',
                'Sangramento: ativo, parou sozinho, ou pulsátil (arterial)?',
                'Outras feridas menos visíveis? (mordida frequentemente tem feridas múltiplas)',
                'Temperatura e estado geral: prostração (choque?).'
              ]
            },
            {
              title: 'Controle do sangramento',
              description: 'Para a maioria das feridas, pressão direta por 10-15 minutos é suficiente. Torniquete SOMENTE em membro com sangramento arterial ativo.',
              duration: '10-15 minutos de pressão',
              icon: '🩸',
              checklist: [
                'Compressa limpa ou toalha sobre a ferida',
                'Pressão firme e constante por 10 minutos (não verificar antes)',
                'Torniquete: SOMENTE em membro, sangramento arterial, pressão não cessa',
                'Torniquete improvisado: cinto ou faixa 5cm acima da ferida, anotar hora',
                'Não remover torniquete em casa — ir ao veterinário'
              ],
              warning: 'Torniquete impede circulação e causa dano tecidual. Use SOMENTE em emergência real com sangramento ameaçador de vida, e NUNCA por mais de 2 horas.'
            },
            {
              title: 'Limpeza da ferida superficial/moderada',
              description: 'Lavagem copiosa com soro fisiológico é a etapa mais importante. Volume e pressão de lavagem são mais importantes que o antisséptico.',
              duration: '5-10 minutos de irrigação',
              icon: '💧',
              checklist: [
                'Soro fisiológico 0,9% em quantidade abundante',
                'Seringa de 20-60mL com agulha 18G para irrigação sob pressão',
                'Lavar de dentro para fora, removendo sujidade visível',
                'NUNCA lavar com álcool 70% — é citotóxico para células de cicatrização',
                'Antisséptico seguro: clorexidina 0,05% (diluição de 1:10 da solução 0,5%)',
                'Remover pelos ao redor da ferida com tesoura (não barbeador)'
              ],
              warning: 'Água oxigenada (H2O2) não é recomendada para limpeza de feridas — interfere na cicatrização. Use soro fisiológico como padrão.'
            },
            {
              title: 'Curativo domiciliar temporário',
              description: 'Para feridas moderadas antes de ir ao veterinário ou em feridas leves que não precisam de sutura.',
              duration: 'Enquanto não vai ao veterinário',
              icon: '🩹',
              checklist: [
                'Gaze estéril sobre a ferida',
                'Atadura crepe (não comprimir excessivamente)',
                'Colar elizabetano: evitar que o cão lamba a ferida',
                'Lambedura de ferida: retarda cicatrização e causa infecção',
                'Nunca aplicar pomada antibiótica humana profundamente em feridas perfurantes'
              ]
            },
            {
              title: 'Mordidas: sempre avaliar pelo veterinário',
              description: 'Ferida de mordida parece pequena na superfície mas pode ter dano muscular extenso por baixo. "Iceberg rule" — o que você vê é só a ponta.',
              duration: 'Em até 6-8 horas da mordida',
              icon: '⚠️',
              checklist: [
                'Mesmo ferida pequenininha: vai ao veterinário em feridas por mordida',
                'Veterinário: desbridamento cirúrgico, lavagem intensa, sutura primária vs. aberta',
                'Antibiótico: amoxicilina-clavulanato 25mg/kg 2x/dia por 7-14 dias',
                'Analgésico: meloxicam 0,1mg/kg por 5 dias',
                'Vacina antirrábica: verificar status — em área endêmica, mordida de animal pode requerer profilaxia'
              ],
              warning: 'Ferida de mordida fechada sem desbridamento é receita para abscesso. O veterinário muitas vezes deixa a ferida aberta propositalmente para drenar — isso é correto.'
            }
          ],
          checklists: [
            {
              label: 'Monitoramento de Ferida em Cicatrização',
              freq: 'daily',
              items: [
                'Ferida está mais fechada, igual ou abrindo?',
                'Vermelhidão no entorno: aumentou?',
                'Calor local: aumentou?',
                'Secreção: clara/serosa (normal) ou purulenta amarela/verde (infecção)?',
                'Cão lambendo a ferida? Colar elizabetano em uso?',
                'Troca de curativo conforme orientação veterinária'
              ]
            },
            {
              label: 'Kit de Primeiros Socorros Veterinário',
              freq: 'monthly',
              items: [
                'Soro fisiológico 0,9%: 2-3 frascos de 250mL',
                'Gaze estéril e atadura crepe',
                'Seringa de 20mL e agulha 18G',
                'Clorexidina 0,5% para diluir',
                'Colar elizabetano (comprar no tamanho do seu cão)',
                'Focinheira emergencial ou atadura para improvisação',
                'Luvas descartáveis'
              ]
            }
          ],
          vetAlert: [
            'Sangramento arterial (jato pulsátil)',
            'Músculo, tendão ou osso visível',
            'Toda mordida por animal — mesmo pequena',
            'Ferida em face, olho ou genitália',
            'Sinais de infecção (pus, calor, febre) 24-48h após lesão',
            'Ferida penetrante no tórax ou abdômen',
            'Cão em choque: mucosas pálidas, frio extremidades, fraqueza'
          ],
          prevention: [
            'Supervisão em encontros com outros cães',
            'Latido ou focinheira em cão agressivo durante passeios',
            'Verificar quintal para objetos cortantes periodicamente',
            'Tratar feridas superficiais imediatamente — não deixar infectar'
          ],
          myths: [
            { myth: 'Deixar o cão lamber a ferida ajuda a cicatrizar', truth: 'Saliva canina tem bactérias que infectam feridas. Lambedura remove curativos, introduz bactérias e irrita o tecido. Colar elizabetano é obrigatório.' },
            { myth: 'Água oxigenada limpa melhor que soro fisiológico', truth: 'Soro fisiológico é superior. Água oxigenada mata células de cicatrização (fibroblastos) além das bactérias, retardando a cura.' }
          ],
          faq: [
            { q: 'A ferida precisa ficar aberta ou coberta?', a: 'Feridas limpas e superficiais cicatrizam bem ao ar livre (sem lambedura). Feridas contaminadas, profundas ou com suturas: curativo fechado trocado diariamente.' },
            { q: 'Quanto tempo leva para uma ferida cicatrizar em cão?', a: 'Feridas superficiais: 5-7 dias. Lacerações suturadas: 10-14 dias. Feridas por mordida ou abertamente infectadas: 3-6 semanas.' }
          ]
        }
      ]
    }
  ]
};
