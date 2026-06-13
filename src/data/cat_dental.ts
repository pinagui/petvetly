import type { Category } from './types';

export const catDental: Category = {
  id: 'dental',
  name: 'Saúde Dental',
  emoji: '🦷',
  gradient: 'grad-teal',
  description: 'Doença periodontal, tártaro, gengivite, extração dentária e higiene oral canina',
  conditions: [
    {
      id: 'doenca-periodontal',
      name: 'Doença Periodontal',
      emoji: '🦷',
      gradient: 'grad-teal',
      description: 'A doença periodontal é a condição de saúde mais prevalente em cães — afeta mais de 80% dos animais acima de 3 anos. Começa com placa bacteriana, evolui para tártaro, gengivite e destruição do tecido de suporte dentário. Dor crônica silenciosa frequentemente não reconhecida pelos tutores.',
      prevalence: '80% dos cães acima de 3 anos têm algum grau de doença periodontal.',
      protocols: [
        {
          id: 'proto-periodontal',
          title: 'Protocolo de Saúde Dental Canina',
          subtitle: 'Profilaxia, escovação e indicações de limpeza veterinária',
          stages: [
            {
              id: 's0', label: 'Grau 0 — Dentição saudável', description: 'Dentes brancos, gengiva firme, sem odor.',
              signs: ['Dentes brancos ou levemente amarelados', 'Gengiva rosada e firme', 'Sem odor fétido da boca', 'Come sem dificuldade'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'Grau 1 — Gengivite leve', description: 'Placa e início de acúmulo de cálculo sem perda óssea.',
              signs: ['Linha vermelha na gengiva junto ao dente', 'Leve odor oral', 'Tártaro amarelado em alguns dentes', 'Sangramento leve ao escovar'],
              urgency: 'low'
            },
            {
              id: 's2', label: 'Grau 2 — Periodontite inicial', description: 'Início de perda óssea, bolsas periodontais < 25%.',
              signs: ['Tártaro abundante (marrom ou preto)', 'Gengiva retraída', 'Odor fétido da boca', 'Dentes com mobilidade leve', 'Dificuldade em mastigar alimento duro'],
              urgency: 'moderate'
            },
            {
              id: 's3', label: 'Grau 3-4 — Periodontite avançada', description: 'Perda óssea > 50%, dentes mobilizados, dor intensa.',
              signs: ['Dentes mobilizados ou caídos espontaneamente', 'Fístula oronasal (comunicação boca-nariz)', 'Recusa de alimento sólido — come só pastoso', 'Sangramento gengival espontâneo', 'Infecção sistêmica possível (bacteremia)'],
              urgency: 'high'
            }
          ],
          triggers: [
            'Ausência de escovação dental',
            'Dieta exclusiva de ração úmida ou comida caseira (sem abrasão)',
            'Raças braquicefálicas e toy: dentes apinhados facilitam acúmulo de placa',
            'Raças pequenas: Yorkshire, Maltês, Poodle mini têm altíssima predisposição',
            'Genética: alguns cães acumulam tártaro muito mais rápido',
            'Boca seca (hipossalivação): redução da limpeza natural salivar'
          ],
          steps: [
            {
              title: 'Escovação dental diária — a mais importante ação preventiva',
              description: 'A escovação diária reduz a placa bacteriana em 70-80%. É a única forma comprovada de prevenir a doença periodontal sem intervenção veterinária.',
              duration: '2-3 minutos diários',
              icon: '🪥',
              checklist: [
                'Escova dental canina (dedeira de borracha para iniciantes)',
                'Creme dental veterinário (sabor frango, carne, menta suave) — NUNCA creme humano (flúor é tóxico para cão)',
                'Introduzir gradualmente: primeiro o sabor, depois a escova, depois o movimento',
                'Foco nos dentes posteriores (carnassiais) e pré-molares',
                'Lado de fora dos dentes (a língua limpa por dentro)',
                '30 segundos por lado, movimentos circulares suaves',
                'Recompensa após a escovação — construir associação positiva'
              ],
              warning: 'Nunca use creme dental humano em cães. O flúor em concentrações para humanos é tóxico para cães que engolem o produto.'
            },
            {
              title: 'Alternativas e complementos à escovação',
              description: 'Quando a escovação não é aceita, existem alternativas menos eficazes mas úteis como complemento.',
              duration: 'Conforme necessidade',
              icon: '🦴',
              checklist: [
                'Géis dentais de aplicação sem escova (Orozyme, Vet Aquadent)',
                'Mastigáveis dentais (Greenies, VOHC-approved): apenas os com Veterinary Oral Health Council seal',
                'Ossos crus naturais: costela bovina crua — abrasão mecânica (cuidado com fragmentação)',
                'Ração seca: tem leve efeito abrasivo vs. ração úmida',
                'Água com aditivo dental (Aquadent): clorexidina em baixa concentração',
                'Brinquedos de borracha dentais: estimulam salivação e têm efeito mecânico'
              ]
            },
            {
              title: 'Limpeza profilática veterinária sob anestesia',
              description: 'A profilaxia veterinária (rascagem + polimento + avaliação radiológica) é o tratamento padrão para tártaro estabelecido. SEMPRE feita sob anestesia geral — procedimento seguro quando com protocolo anestésico adequado.',
              duration: '30-90 minutos conforme gravidade',
              icon: '🏥',
              checklist: [
                'Avaliação pré-anestésica: hemograma, bioquímica, ECG (idosos)',
                'Rascagem ultrassônica sub e supragengival',
                'Polimento com pasta profilática',
                'Sondagem periodontal de cada dente',
                'Raio-X dental intra-oral (detecta doença abaixo da gengiva)',
                'Extração de dentes inviáveis com anestesia local associada',
                'Pós-procedimento: antibiótico 5-7 dias, analgésico 3-5 dias, dieta pastosa'
              ],
              warning: '"Limpeza dental sem anestesia" (anesthetic-free dental cleaning) é inadequada e não ética — não acessa a região subgengival onde a doença ocorre e causa estresse e risco ao animal.'
            },
            {
              title: 'Cuidados pós-extração',
              description: 'Cão que perdeu vários dentes come normalmente após cicatrização. Não ter dentes não impede qualidade de vida.',
              duration: '1-2 semanas de recuperação',
              icon: '🌡️',
              checklist: [
                'Dieta mole/úmida por 7-10 dias',
                'Antibiótico conforme prescrito (amoxicilina-clavulanato 14 dias)',
                'Analgésico: meloxicam 0,1mg/kg por 3-5 dias',
                'Não oferecer mastigáveis ou brinquedos duros durante 2 semanas',
                'Verificar o local: sangramento discreto nas primeiras 24h é normal; sangramento profuso não é',
                'Retorno ao veterinário em 10-14 dias para avaliação da cicatrização'
              ]
            }
          ],
          checklists: [
            {
              label: 'Higiene Oral Diária',
              freq: 'daily',
              items: [
                'Escovação com creme veterinário (mínimo 1x ao dia, ideal 2x)',
                'Inspecionar a boca: cor da gengiva, algum dente mole?',
                'Verificar: cão está comendo normalmente?',
                'Odor fétido aumentou?'
              ]
            },
            {
              label: 'Avaliação Oral Mensal',
              freq: 'monthly',
              items: [
                'Abertura da boca e inspeção visual',
                'Tártaro visível nos dentes posteriores?',
                'Gengiva: cor rosada normal ou vermelho-inflamada?',
                'Algum dente mole ou movimento perceptível?',
                'Consultar veterinário se há mudança'
              ]
            }
          ],
          vetAlert: [
            'Recusa de alimento sólido por dor',
            'Sangramento gengival espontâneo',
            'Dente mobilizado ou com pus ao redor',
            'Fístula (buraco) acima da raiz de um dente',
            'Inchaço facial (abscesso periapical)',
            'Halitose muito intensa e súbita em cão que antes estava bem'
          ],
          prevention: [
            'Escovação dental DIÁRIA iniciada desde filhote',
            'Mastigáveis dentais aprovados VOHC como complemento',
            'Limpeza veterinária profissional anual em cães predispostos',
            'Dieta com componente abrasivo (ração seca de qualidade)',
            'Inspeção oral mensal pelo tutor'
          ],
          myths: [
            { myth: 'Anestesia para limpeza dental é muito arriscada em cão idoso', truth: 'Com avaliação pré-anestésica e protocolo correto, a anestesia é muito segura. O risco de não tratar a doença periodontal (bacteremia, doença cardíaca, renal) é muito maior.' },
            { myth: 'Cão que mastiga osso não precisa de escovação', truth: 'Ossos ajudam mecanicamente mas não eliminam a placa subgengival. A escovação alcança onde o osso não alcança.' },
            { myth: 'Dentes do cão se limpam sozinhos', truth: 'Sem abrasão mecânica e enzimas salivares adequadas, a placa se deposita e mineraliza em tártaro em 3-5 dias.' }
          ],
          faq: [
            { q: 'Meu cão não deixa escovar os dentes — o que fazer?', a: 'Introduzir gradualmente: 1ª semana: apenas passar o dedo com sabor do creme. 2ª semana: dedeira de borracha. 3ª semana: escova de cerdas macias. Recompensa sempre após.' },
            { q: 'Com que frequência precisa de limpeza veterinária?', a: 'Depende da raça e adesão à escovação. Raças pequenas e toy: anual. Raças grandes com escovação diária: a cada 2-3 anos. Sem escovação: anual para qualquer raça.' },
            { q: 'Perder dentes afeta a qualidade de vida?', a: 'Cão sem dentes se adapta muito bem. Come ração úmida ou molhada. A dor crônica de dentes inflamados é muito pior que a ausência de dentes.' }
          ]
        }
      ]
    }
  ]
};
