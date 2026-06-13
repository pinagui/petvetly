import type { Category } from './types';

export const catComportamento: Category = {
  id: 'comportamento',
  name: 'Comportamento',
  emoji: '🧠',
  gradient: 'grad-purple',
  description: 'Ansiedade, agressividade, fobias e transtornos comportamentais em cães',
  conditions: [
    {
      id: 'ansiedade-separacao',
      name: 'Ansiedade de Separação',
      emoji: '😰',
      gradient: 'grad-purple',
      description: 'Distúrbio comportamental onde o cão desenvolve pânico quando separado do tutor, causando destruição, vocalização excessiva e problemas físicos relacionados ao estresse crônico.',
      prevalence: 'Afeta 20-40% dos cães domésticos; mais comum em raças toy, resgatados e filhotes adotados após isolamento.',
      protocols: [
        {
          id: 'proto-ansiedade-sep',
          title: 'Protocolo de Dessensibilização para Ansiedade de Separação',
          subtitle: 'Retrainamento gradual da independência em 8-16 semanas',
          stages: [
            {
              id: 's0', label: 'Nível 0 — Sem sinais', description: 'Cão relaxado quando tutor sai; sem destruição, sem vocalização.',
              signs: ['Deita calmamente quando tutor vai embora', 'Come normalmente na ausência do tutor', 'Não segue tutor de cômodo em cômodo'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'Nível 1 — Ansiedade leve', description: 'Sinais leves, geralmente nos primeiros 5 minutos da ausência.',
              signs: ['Chora por até 5 minutos ao ser deixado', 'Arranha a porta de entrada ocasionalmente', 'Fica vigilante perto da saída', 'Come menos quando tutor não está'],
              urgency: 'low'
            },
            {
              id: 's2', label: 'Nível 2 — Ansiedade moderada', description: 'Comportamentos persistentes causando dano ao ambiente ou ao cão.',
              signs: ['Urina/defeca dentro de casa mesmo quando treinado', 'Destrói objetos pessoais do tutor (sapatos, roupas)', 'Late ou uiva por horas (relatos de vizinhos)', 'Não come na ausência do tutor', 'Lambedura compulsiva de patas ou flancos'],
              urgency: 'moderate'
            },
            {
              id: 's3', label: 'Nível 3 — Ansiedade grave', description: 'Comportamento de pânico com risco de autolesão.',
              signs: ['Tenta fugir com força da caixa ou ambiente — se machuca nas tentativas', 'Hipersalivação e tremores ao perceber sinais de saída do tutor', 'Vocalização persistente por mais de 1 hora', 'Perde peso progressivamente por anorexia', 'Escoriações, arranhados ou lesões por tentativa de fuga'],
              urgency: 'high'
            }
          ],
          triggers: [
            'Mudança de rotina (tutor começa a trabalhar fora após home office)',
            'Adoção de cão que viveu em canil ou rua sem vínculos estáveis',
            'Morte de companheiro animal ou humano',
            'Mudança de casa ou novo integrante na família',
            'Raças com forte tendência ao apego (Border Collie, Labrador, Poodle, Maltês)',
            'Cão que nunca ficou sozinho nos primeiros meses de vida',
            'Castração sem manejo comportamental associado (pode intensificar a ansiedade)',
            'Reforço inadvertido da dependência — sempre presente, acalmar excessivo',
          ],
          steps: [
            {
              title: 'Semana 1-2: Dessensibilização aos gatilhos pré-saída',
              description: 'Quebre a associação entre pegar chaves/calçar sapatos e a saída. Faça esses gestos sem sair — pegue as chaves, sente no sofá, coloque o casaco e tire logo depois, várias vezes ao dia.',
              duration: '20 min, 3x ao dia',
              icon: '🔑',
              checklist: [
                'Pegar chaves sem sair: 10x ao dia',
                'Colocar e tirar sapatos: 5x ao dia',
                'Ir até a porta, abrir, fechar, voltar: 5x',
                'Observar reação do cão — anotar sinais de ansiedade',
                'Jamais fazer elogios efusivos antes de sair ou ao chegar'
              ],
              warning: 'Não console o cão ansioso ao sair — isso reforça o comportamento. Ignore as vocalizações ao partir; só retorne quando ele estiver quieto.'
            },
            {
              title: 'Semana 2-4: Absências ultra-curtas (1-30 segundos)',
              description: 'Saia literalmente por 1 segundo e retorne antes que a ansiedade comece. Aumente progressivamente: 2s, 5s, 10s, 30s ao longo de dias.',
              duration: '15 ausências curtas por dia',
              icon: '⏱️',
              checklist: [
                'Dia 1-3: ausências de 1-5 segundos',
                'Dia 4-6: 10-30 segundos',
                'Dia 7-10: 30-60 segundos',
                'Retornar ANTES do cão vocalizar (não reforce o choro)',
                'Recompensar com petisco após retorno calmo'
              ]
            },
            {
              title: 'Semana 4-8: Absências progressivas com enriquecimento',
              description: 'Ofereça Kong recheado com pasta de amendoim + ração ou osso mastigável SOMENTE quando sair. Isso cria associação positiva com a ausência.',
              duration: 'Ausências de 5-60 minutos',
              icon: '🦴',
              checklist: [
                'Kong congelado preparado na véspera',
                'Brinquedo interativo de cheiro (esconde-esconde com petisco)',
                'Música clássica ou "dog music" no YouTube',
                'Câmera instalada para monitorar comportamento',
                'Não fazer despedida longa — saia discretamente'
              ],
              warning: 'Se o cão destruir ou urinar durante ausências de menos de 15 min, volte para a etapa anterior. Não pule etapas.'
            },
            {
              title: 'Enriquecimento ambiental diário obrigatório',
              description: 'Cão com ansiedade de separação precisa de cansaço mental e físico. Um cão exausto é um cão menos ansioso.',
              duration: '30-45 min de exercício + 15 min de enriquecimento',
              icon: '🎯',
              checklist: [
                'Caminhada de faro (deixar o cão cheirar tudo) 20-30 min',
                'Treino de obediência: 5 min de "sentar, deitar, aguarda"',
                'Busca de petisco escondido na casa',
                'Mastigáveis naturais: palito de couro cru, nervo bovino',
                'Jogo de cheiro: muffin tin com petiscos escondidos'
              ]
            },
            {
              title: 'Rotina de chegada neutra (desvincular chegada de festa)',
              description: 'Chegadas emocionantes ensinam o cão que sua saída é um evento traumático e que sua volta é um alívio extraordinário — amplificando o ciclo.',
              duration: 'Sempre',
              icon: '🚪',
              checklist: [
                'Ao chegar: ignore o cão por 2-5 minutos',
                'Só cumprimente quando ele estiver com quatro patas no chão e calmo',
                'Não faça festa exagerada ao chegar',
                'Da mesma forma, não faça despedida dramática ao sair',
                'Ensiná-lo a ir ao lugar dele quando pedir ("vai pro canto")'
              ]
            },
            {
              title: 'Medicação ansiolítica (quando necessário — etapa 3+)',
              description: 'Quando a dessensibilização não progride sozinha, o veterinário pode prescrever fluoxetina (1-2mg/kg/dia) ou clomipramina. A medicação não resolve sem o protocolo comportamental — ela só reduz o limiar de ansiedade para que o treinamento funcione.',
              duration: 'Mínimo 8 semanas de medicação',
              icon: '💊',
              checklist: [
                'Consulta com médico veterinário comportamentalista',
                'Exame de sangue antes de iniciar antidepressivo',
                'Fluoxetina: efeito começa em 4-6 semanas — não desistir antes',
                'Evitar alprazolam/diazepam sem orientação — sedação pode piorar cognição',
                'Reavaliação mensal com o veterinário'
              ],
              warning: 'Medicação ansiolítica veterinária é de uso exclusivo com prescrição. Nunca use medicação humana sem orientação veterinária — as doses são completamente diferentes.'
            },
            {
              title: 'Cão de estimação ou companheiro (avaliar individualmente)',
              description: 'Nem sempre um segundo cão resolve — alguns com ansiedade de separação ficam ansiosos SEM o tutor específico, mesmo com outro cão presente.',
              duration: 'Decisão de longo prazo',
              icon: '🐶',
              checklist: [
                'Avaliar se ansiedade é pelo tutor ou por solidão geral (câmera)',
                'Período de apresentação gradual entre cães',
                'Não adotar em crise — aguardar estabilização',
                'Considerar day care para casos graves enquanto trata'
              ]
            },
            {
              title: 'Monitoramento e registro semanal',
              description: 'Use câmera de segurança barata ou app de pet cam para registrar comportamento durante ausências. O vídeo ajuda o veterinário a graduar a gravidade e ajustar o protocolo.',
              duration: 'Sempre que sair',
              icon: '📹',
              checklist: [
                'Câmera configurada com campo visual da área de permanência',
                'Anotar: hora de início da vocalização, o que destruiu, se comeu',
                'Levar registros à consulta veterinária',
                'Comparar semana a semana para medir progresso'
              ]
            }
          ],
          checklists: [
            {
              label: 'Rotina Diária Anti-Ansiedade',
              freq: 'daily',
              items: [
                'Caminhada de faro (mínimo 20 min)',
                'Treino de obediência curto (5 min)',
                'Kong ou mastigável quando sair',
                'Saída discreta — sem despedida dramática',
                'Chegada neutra — ignorar por 2-5 min',
                'Sessão de enriquecimento de cheiro ou busca',
                'Anotar comportamento de ausência na câmera'
              ]
            },
            {
              label: 'Verificação Semanal de Progresso',
              freq: 'weekly',
              items: [
                'Revisar vídeos da câmera da semana',
                'Avaliar: destruição aumentou, diminuiu ou igual?',
                'Vocalização: duração e intensidade',
                'Peso do cão (ansiedade crônica causa perda de peso)',
                'Avançar ou recuar na etapa de dessensibilização conforme resultado'
              ]
            },
            {
              label: 'Checklist de Cada Saída',
              freq: 'each_event',
              items: [
                'Kong congelado ou mastigável preparado',
                'Música ou TV ligada (baixo volume)',
                'Cão exercitado antes da saída',
                'Câmera ligada',
                'Saída sem drama — nem "tchau, fica bem" prolongado'
              ]
            }
          ],
          vetAlert: [
            'Lesões físicas por tentativa de fuga (arranhados profundos, dentes quebrados)',
            'Perda de peso por anorexia persistente durante ausências',
            'Vocalização contínua por mais de 1 hora relatada por vizinhos',
            'Sem progresso após 4 semanas de protocolo correto',
            'Automutilação (lambedura compulsiva até escoriação)',
            'Convulsões relacionadas ao pânico em casos extremos',
            'Recusa total de alimento mesmo com tutor presente'
          ],
          prevention: [
            'Ensinar independência desde filhote: períodos de "vai pro lugar" mesmo em casa',
            'Nunca punir o cão por destruição ligada à ansiedade — é doença, não maldade',
            'Fazer saídas frequentes curtas mesmo quando não precisa sair',
            'Socialização precoce com diferentes ambientes e pessoas',
            'Evitar superapego excessivo: cão no colo 24h cria dependência',
            'Rotina previsível reduz ansiedade generalizante'
          ],
          myths: [
            { myth: 'Punição na volta ensina o cão que fez errado', truth: 'Cão não conecta a punição à destruição que ocorreu horas antes. Piorar a relação com o tutor aumenta a ansiedade.' },
            { myth: 'Pegar um segundo cão sempre resolve', truth: 'Só funciona se a ansiedade for por solidão geral. Se for apego específico ao tutor, o segundo cão não ajuda — pode até estressar mais.' },
            { myth: 'O cão age por raiva ou vingança quando destrói', truth: 'Destruição é comportamento de pánico puro — o cão tenta escapar ou se auto-estimular para reduzir o estresse hormonal.' },
            { myth: 'Caixas (cratas) sempre pioram a ansiedade', truth: 'Para muitos cães bem condicionados, a caixa é um refúgio seguro que reduz a ansiedade. O problema é usá-la como punição ou sem condicionamento.' }
          ],
          faq: [
            { q: 'Quanto tempo demora o tratamento?', a: 'Casos leves melhoram em 4-8 semanas. Casos graves podem levar 6-12 meses de protocolo consistente, especialmente com medicação associada.' },
            { q: 'Posso usar calmantes naturais (lavanda, CBD)?', a: 'Alguns cães respondem a suplementos como zylkene (casein hidrolisada), Adaptil (feromônio sintético) ou CBD veterinário. São auxiliares — não substituem o protocolo comportamental.' },
            { q: 'O que fazer quando recebo ligação de vizinho reclamando do latido?', a: 'Informe que está em tratamento, monitore com câmera, considere day care temporário. Nunca puna o cão ao chegar por causa do relato do vizinho.' },
            { q: 'Treinador de cães resolve?', a: 'Treinador convencional (obediência) não trata ansiedade de separação. Busque veterinário comportamentalista ou profissional com formação em modificação comportamental baseada em ciência.' }
          ]
        }
      ]
    },
    {
      id: 'agressividade',
      name: 'Agressividade Canina',
      emoji: '⚡',
      gradient: 'grad-red',
      description: 'Agressividade por medo, dominância, dor, territorialidade ou redirecionamento — com classificação por tipo, gatilhos e protocolo de manejo seguro.',
      prevalence: 'Principal motivo de abandono de cães adultos; 70% dos casos têm componente de medo subjacente.',
      protocols: [
        {
          id: 'proto-agressividade',
          title: 'Avaliação e Manejo da Agressividade',
          subtitle: 'Identificar o tipo, gatilho e protocolo de modificação comportamental',
          stages: [
            {
              id: 's0', label: 'Comunicação normal', description: 'Cão usa linguagem corporal adequada sem escalada agressiva.',
              signs: ['Rosnado como aviso claro (linguagem normal)', 'Recua quando respeitado', 'Relaxa após ameaça ser removida'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'Agressividade por medo', description: 'Cão morde quando acuado, sem espaço de fuga.',
              signs: ['Orelhas abaixadas, cauda entre as pernas', 'Tenta fugir antes de morder', 'Morde e foge imediatamente', 'Focinho enrugado, dentes expostos apenas quando acuado'],
              urgency: 'moderate'
            },
            {
              id: 's2', label: 'Agressividade territorial/proteção', description: 'Agressividade direcionada a estranhos em território do cão.',
              signs: ['Late e corre para a cerca/portão', 'Agressivo com estranhos em casa, neutro fora', 'Protege o carro ou cama do dono', 'Melhora quando retirado do território'],
              urgency: 'moderate'
            },
            {
              id: 's3', label: 'Agressividade com mordidas graves', description: 'Mordida Nível 4-6 (escala Dunbar) — lesão séria em humano ou animal.',
              signs: ['Mordidas múltiplas em uma mesma interação', 'Balança a cabeça ao morder (não solta)', 'Não há aviso prévio (rosnado omitido)', 'Escalada de intensidade nas últimas semanas'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Guarda de recursos (comida, brinquedo, cama, tutor)',
            'Manejo doloroso em cão com artrite, otite ou lesão',
            'Medo de crianças, homens com chapéu, uniformes, guarda-chuvas',
            'Agressividade inter-cães (mesma casa ou passeio)',
            'Redirecionamento: cão excitado morde o tutor por impossibilidade de atingir o alvo real',
            'Falta de socialização na janela crítica (3-14 semanas)',
            'Raças com seleção histórica para guarda ou combate sem manejo adequado',
            'Uso de punição física que cria resposta defensiva'
          ],
          steps: [
            {
              title: 'Muzzle (focinheira) como ferramenta de segurança imediata',
              description: 'Focinheira não é punição — é proteção para humanos e para o cão (evita que ele faça algo irreversível). Fociinheira cesto (basket muzzle) permite que o cão abra a boca, beba e halete.',
              duration: 'Uso imediato em situações de risco',
              icon: '🛡️',
              checklist: [
                'Focinheira cesto (não a de nylon que fecha a boca)',
                'Condicionamento clássico com a focinheira: associar a petisco',
                'Nunca usar focinheira como punição',
                'Cão com focinheira ainda pode morder — não substitui supervisão',
                'Treinar o cão a colocar a cabeça voluntariamente'
              ],
              warning: 'Cão com histórico de mordidas sérias (nível 4+) DEVE ser manejado com focinheira em qualquer situação de risco. Consulte veterinário comportamentalista antes de iniciar qualquer protocolo.'
            },
            {
              title: 'Identificação e gestão dos gatilhos',
              description: 'Mapeie EXATAMENTE o que dispara o comportamento: distância do gatilho, contexto, presença de recurso, estado físico do cão.',
              duration: 'Observação por 2 semanas',
              icon: '🔍',
              checklist: [
                'Diário de incidentes: data, hora, contexto, o que aconteceu',
                'Identificar o limiar — a que distância o cão fica alerta?',
                'Remover acesso temporário ao gatilho enquanto trata',
                'Nunca forçar a exposição ao gatilho ("deixa ele cheirar, ele não morde")'
              ]
            },
            {
              title: 'Protocolo BAT 2.0 (Behavior Adjustment Training)',
              description: 'Trabalho abaixo do limiar de reação: o cão observa o gatilho à distância confortável e recebe permissão para se afastar como recompensa (autonomia). Progressivamente diminuir a distância.',
              duration: '8-12 semanas, sessões de 15 min',
              icon: '📏',
              checklist: [
                'Determinar a distância de segurança (onde o cão nota mas não reage)',
                'Recompensar qualquer comportamento calmo na presença do gatilho',
                'Deixar o cão escolher se aproximar — não forçar',
                'Sessões curtas (não cansativas)',
                'Progredir apenas quando o cão estiver consistentemente calmo'
              ]
            },
            {
              title: 'Gestão de guarda de recursos',
              description: 'Se o cão agride em volta de comida/brinquedo, o problema é de guarda de recursos. Protocolo "troca" — apresentar algo de alto valor, cão larga o recurso, recebe o outro.',
              duration: 'Prática diária por 4 semanas',
              icon: '🍖',
              checklist: [
                'Nunca tirar recursos na força — isso piora o comportamento',
                'Treinar "deixa" com recompensa de alto valor',
                'Alimentar em local tranquilo, longe de crianças',
                'Não deixar crianças se aproximar de cão comendo',
                'Praticar "troca" com brinquedos diariamente'
              ],
              warning: 'Crianças jamais devem se aproximar de cão que guarda recursos. Acidentes ocorrem em segundos.'
            }
          ],
          checklists: [
            {
              label: 'Checklist de Segurança Diária',
              freq: 'daily',
              items: [
                'Focinheira acessível e condicionada',
                'Portas/portões fechados quando visitas chegam',
                'Crianças supervisionadas 100% do tempo com o cão',
                'Cão não tem acesso a recursos que guarda quando visitas estão presentes',
                'Exercício físico antes de situações de risco'
              ]
            },
            {
              label: 'Avaliação Semanal',
              freq: 'weekly',
              items: [
                'Incidentes da semana registrados?',
                'Progresso no protocolo de dessensibilização?',
                'Consulta com comportamentalista em dia?',
                'Membros da família estão seguindo o protocolo?'
              ]
            }
          ],
          vetAlert: [
            'Qualquer mordida que perfure pele humana — notificação obrigatória em algumas cidades',
            'Escalada de intensidade das mordidas nas últimas semanas',
            'Agressividade de início súbito em cão previamente sociável (investigar dor, neurológico)',
            'Agressividade sem aviso prévio (ausência de rosnado — pode indicar punição prévia do rosnado)',
            'Múltiplas vítimas ou mordidas sequenciais'
          ],
          prevention: [
            'Socialização entre 3-14 semanas: expor a pessoas, crianças, outros animais, ambientes',
            'Nunca punir o rosnado — é comunicação importante',
            'Ensinar crianças sobre linguagem corporal canina',
            'Evitar punição física — cria medo e respostas agressivas defensivas',
            'Exame médico anual — dor crônica é causa subestimada de agressividade'
          ],
          myths: [
            { myth: 'Mostrar quem manda resolve a agressividade', truth: 'Teoria da dominância está superada na ciência comportamental. Abordagens de confronto pioram agressividade por medo e criam lesão de relação.' },
            { myth: 'Cão que morde uma vez sempre vai morder', truth: 'Com diagnóstico correto e protocolo adequado, muitos cães têm excelente prognóstico.' },
            { myth: 'Castração resolve agressividade', truth: 'Pode reduzir agressividade hormonal (entre machos inteiros) mas não resolve agressividade por medo, territorial ou de guarda de recursos.' }
          ],
          faq: [
            { q: 'Devo colocar o cão para adoção por agressividade?', a: 'Somente após diagnóstico profissional e tentativa de tratamento. Muitos casos têm bom prognóstico. Repassar um cão agressivo sem tratamento ou aviso transfere o risco para outra família.' },
            { q: 'Criança pode conviver com cão com histórico de mordidas?', a: 'Somente com gestão rigorosa: supervisão total, sem interações sem adulto presente, cão sempre com acesso a espaço seguro para se retirar.' }
          ]
        }
      ]
    }
  ]
};
