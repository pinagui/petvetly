import type { Category } from './types';

export const catOlhosOuvidos: Category = {
  id: 'olhos-ouvidos',
  name: 'Olhos & Ouvidos',
  emoji: '👁️',
  gradient: 'grad-cyan',
  description: 'Conjuntivite, otite, glaucoma, catarata e demais problemas oculares e auriculares caninos',
  conditions: [
    {
      id: 'otite',
      name: 'Otite (Inflamação do Ouvido)',
      emoji: '👂',
      gradient: 'grad-amber',
      description: 'Inflamação do canal auditivo externo ou médio causada por bactérias, fungos (Malassezia), ácaros ou alergias. Uma das condições mais frequentes em cães, especialmente orelhas pendentes.',
      prevalence: 'Afeta 10-20% dos cães; Cocker Spaniel, Basset Hound, Labrador e Poodle têm predisposição.',
      protocols: [
        {
          id: 'proto-otite',
          title: 'Protocolo de Tratamento de Otite',
          subtitle: 'Limpeza, medicação e prevenção de recorrência',
          stages: [
            {
              id: 's0', label: 'Ouvido saudável', description: 'Canal limpo, sem odor, cão não coça.',
              signs: ['Canal rosado sem odor', 'Cão não balança ou coça o ouvido', 'Sem secreção ou crostas'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'Otite leve', description: 'Início de inflamação sem complicações.',
              signs: ['Coça levemente o ouvido', 'Odor leve "azedo"', 'Secreção amarelada ou marrom clara', 'Balança a cabeça ocasionalmente'],
              urgency: 'low'
            },
            {
              id: 's2', label: 'Otite moderada', description: 'Infecção ativa com dor e desconforto.',
              signs: ['Coça o ouvido intensamente (até se machucar)', 'Odor forte e fétido', 'Secreção marrom escura ou preta (Malassezia) ou amarelo-esverdeada (bacteriana)', 'Balança a cabeça frequentemente', 'Dor à palpação da base da orelha', 'Orelha quente ao toque'],
              urgency: 'moderate'
            },
            {
              id: 's3', label: 'Otite grave / Otite média', description: 'Comprometimento profundo do canal ou tímpano.',
              signs: ['Inclinação persistente da cabeça para um lado', 'Perda de equilíbrio, andar em círculos', 'Vômito por vestibular', 'Dor intensa ao abrir a boca', 'Paralisia facial (rara, mas possível)', 'Sangramento do canal'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Raças com orelhas pendentes (Cocker, Basset, Beagle) — pouca ventilação',
            'Banho com água entrando no canal auditivo',
            'Natação frequente sem secagem adequada',
            'Alergia alimentar ou atópica (otite recorrente = pensar em alergia)',
            'Excesso de pelos no canal auditivo',
            'Corpo estranho (sementes de gramíneas)',
            'Ácaros auriculares (Otodectes — mais em filhotes e gatos)',
            'Limpeza excessiva com cotonetes (remove proteção natural, trauma)'
          ],
          steps: [
            {
              title: 'Limpeza correta do canal auditivo',
              description: 'Use somente solução limpadora auricular veterinária (não álcool, não água oxigenada, não vinagre). Aplique, massageie a base por 30 segundos, deixe o cão sacudir, limpe a sujeira que sair com algodão.',
              duration: 'Conforme necessário; manutenção 1-2x/semana em predispostos',
              icon: '🧹',
              checklist: [
                'Solução limpadora auricular veterinária (Epi-Otic, OtiRinse ou similar)',
                'Algodão (não cotonete — não inserir no canal)',
                'Aplicar a solução até o canal encher levemente',
                'Massagear a base da orelha por 30 segundos (ouve "glu-glu")',
                'Deixar o cão sacudir — facilita a remoção de debris',
                'Limpar o que saiu com algodão na parte externa',
                'Nunca inserir cotonete dentro do canal'
              ],
              warning: 'Se houver suspeita de tímpano rompido, NÃO use nenhuma solução — pode causar surdez. Ir ao veterinário.'
            },
            {
              title: 'Identificação do agente causador (citologia)',
              description: 'O veterinário coleta amostra do canal e examina ao microscópio para identificar se é bactéria gram+, gram-, Malassezia ou ácaro. O tratamento correto depende disso.',
              duration: 'Necessário antes de medicação',
              icon: '🔬',
              checklist: [
                'Citologia auricular: diagnóstico em 10 minutos no consultório',
                'Malassezia: uso de antifúngico (cetoconazol, miconazol)',
                'Bactéria gram+: fluoroquinolonas ou neomicina',
                'Bactéria gram-: tobramicina, marbofloxacina (otite resistente)',
                'Ácaros: ivermectina, selamectina ou produto específico para ouvido'
              ]
            },
            {
              title: 'Medicação tópica correta',
              description: 'A maioria das otites responde a medicações tópicas. Produtos como Otodem, Posatex, Easotic ou Surolan contêm antifúngico + antibiótico + corticoide em combinações variadas.',
              duration: '7-14 dias conforme prescrição',
              icon: '💊',
              checklist: [
                'Aplicar conforme orientação veterinária (gotas ou gel)',
                'Manter canal limpo antes da aplicação',
                'Não interromper antes do fim mesmo se melhorar',
                'Retornar para reavaliação citológica ao final',
                'Otite crônica pode requerer tratamento de manutenção mensal'
              ]
            },
            {
              title: 'Prevenção de recorrência e manejo da causa raiz',
              description: 'Otite recorrente (3+ episódios/ano) exige investigação de causa subjacente: alergia alimentar (trocade proteína), atopia (imunoterapia), hipotireoidismo.',
              duration: 'Investigação de 8-12 semanas',
              icon: '🔄',
              checklist: [
                'Dieta de exclusão se otite recorrente (8-12 semanas)',
                'Secar bem os ouvidos após banho e natação',
                'Não arrancar pelos do canal sem orientação veterinária',
                'Limpeza preventiva 1x/semana em raças predispostas',
                'Investigar hipotireoidismo em cães com otite crônica bilateral'
              ]
            }
          ],
          checklists: [
            {
              label: 'Manutenção Auricular Semanal',
              freq: 'weekly',
              items: [
                'Inspecionar a orelha: odor, cor, secreção',
                'Limpeza com solução veterinária se predisposto',
                'Verificar se cão está coçando ou balançando a cabeça',
                'Secar a orelha após banho ou natação'
              ]
            },
            {
              label: 'Checklist Pós-Banho',
              freq: 'each_event',
              items: [
                'Colocar algodão nos ouvidos antes do banho (opcional)',
                'Após o banho: secar a orelha com pano macio',
                'Não usar secador quente diretamente na orelha',
                'Verificar se entrou água e aplicar solução secante se necessário'
              ]
            }
          ],
          vetAlert: [
            'Inclinação de cabeça ou andar em círculos — otite média',
            'Sangramento do canal auditivo',
            'Odor extremamente fétido sugerindo necrose',
            'Sem resposta após 7 dias de tratamento correto',
            'Dor intensa à abertura da boca (ramo mandibular da trígemeo)',
            'Terceiro ou mais episódio no ano — investigar causa sistêmica'
          ],
          prevention: [
            'Secar completamente os ouvidos após cada banho',
            'Evitar que água entre no canal durante banhos',
            'Limpeza preventiva semanal em raças predispostas',
            'Não usar cotonetes dentro do canal',
            'Controlar alergias subjacentes para prevenir otite recorrente'
          ],
          myths: [
            { myth: 'Álcool ou vinagre são boas soluções para limpar ouvido', truth: 'Álcool irrita o canal inflamado e dói. Vinagre pode alterar o pH mas não é indicado como rotina — use soluções veterinárias específicas.' },
            { myth: 'Arrancar pelos do ouvido previne otite', truth: 'Em raças com pelos excessivos, depende do caso — pode criar microtraumas. Avalie com seu veterinário antes de fazer isso.' },
            { myth: 'Otite "cura sozinha"', truth: 'Otite bacteriana ou fúngica raramente resolve sem tratamento e pode progredir para otite média com sequelas permanentes.' }
          ],
          faq: [
            { q: 'Posso limpar o ouvido do meu cão em casa?', a: 'Sim, com solução limpadora veterinária e algodão. Nunca cotonetes dentro do canal, nunca álcool ou água pura.' },
            { q: 'Otite tem cura ou sempre volta?', a: 'Otite aguda tem cura com tratamento correto. Otite crônica recorrente exige identificar e tratar a causa subjacente (alergia, anatomia, hipotireoidismo).' },
            { q: 'Quanto tempo demora para melhorar?', a: '48-72h já há melhora do desconforto com tratamento adequado. Cura completa em 7-14 dias na maioria dos casos.' }
          ]
        }
      ]
    },
    {
      id: 'conjuntivite',
      name: 'Conjuntivite e Problemas Oculares',
      emoji: '👁️',
      gradient: 'grad-cyan',
      description: 'Inflamação da conjuntiva por alergia, infecção, corpo estranho ou doenças sistêmicas. Inclui blefarite, úlcera de córnea e ceratoconjuntivite seca (KCS).',
      prevalence: 'Conjuntivite é muito comum; KCS afeta principalmente Bulldogs, Shih Tzu e Cocker Spaniel.',
      protocols: [
        {
          id: 'proto-conjuntivite',
          title: 'Avaliação e Tratamento de Problemas Oculares',
          subtitle: 'Do diagnóstico diferencial ao tratamento específico',
          stages: [
            {
              id: 's0', label: 'Olho saudável', description: 'Olho limpo, brilhante, sem secreção.',
              signs: ['Córnea transparente sem opacidade', 'Ausência de secreção', 'Cão não esfrega o olho', 'Conjuntiva rosada sem vermelhidão'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'Conjuntivite leve', description: 'Vermelhidão e secreção discretas, sem comprometimento visual.',
              signs: ['Secreção serosa ou mucosa leve', 'Leve vermelhidão conjuntival', 'Olho semicerrado', 'Esfrega o olho com a pata ocasionalmente'],
              urgency: 'low'
            },
            {
              id: 's2', label: 'Conjuntivite moderada / úlcera inicial', description: 'Dor ocular evidente e risco de progressão para úlcera.',
              signs: ['Olho fortemente fechado (blefarospasmo)', 'Secreção mucopurulenta amarela ou verde', 'Córnea levemente turva', 'Lacrimejamento excessivo', 'Evita luz (fotofobia)', 'Esfrega o olho intensamente'],
              urgency: 'high'
            },
            {
              id: 's3', label: 'Emergência ocular', description: 'Risco imediato de perda visual.',
              signs: ['Córnea com mancha branca densa ou perfuração visível', 'Glaucoma: globo ocular visivelmente aumentado e duro', 'Prolapso de globo ocular (olho saindo da órbita)', 'Olho vermelho-sangue intenso com dor extrema', 'Cegueira súbita (colide com objetos, desorientado)'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Alergia sazonal (pólen, poeira)',
            'Corpo estranho (cisco, pelo, gramínea)',
            'Infecção viral (Cinomose — conjuntivite é sintoma inicial)',
            'Ceratoconjuntivite seca — KCS (produção insuficiente de lágrima)',
            'Trauma corneal (arranhado de gato, galho)',
            'Entrópio (pálpebra enrolada para dentro) em Sharpei, Chow Chow',
            'Glaucoma primário em Cocker, Bassett, Dálmata',
            'Herpesvírus canino em filhotes'
          ],
          steps: [
            {
              title: 'Avaliação básica domiciliar',
              description: 'Examine o olho em boa iluminação. Verifique secreção, vermelhidão, opacidade corneal, simetria entre os dois olhos e se o cão permite o toque.',
              duration: 'Imediato',
              icon: '🔍',
              checklist: [
                'Comparar os dois olhos — simetria?',
                'Tipo de secreção: serosa (líquida e clara), mucosa (transparente e viscosa) ou purulenta (amarela/verde)?',
                'Córnea transparente ou com mancha branca?',
                'Olho aberto normalmente ou fechado/entreaerto?',
                'Pupila: tamanho normal e reativa à luz?',
                'Globo ocular normal ou aumentado (glaucoma)?'
              ],
              warning: 'NUNCA use colírio humano de descongestionante (visine, colírio azul) em cão — causa lesão corneal. Nunca use cortisona sem diagnóstico de úlcera excluído.'
            },
            {
              title: 'Limpeza ocular segura',
              description: 'Para remover secreção e corpo estranho superficial, lave com soro fisiológico 0,9% ou solução ocular salina. Nunca use algodão que solte fios.',
              duration: 'Conforme necessário',
              icon: '💧',
              checklist: [
                'Soro fisiológico 0,9% gelado (firmeza) ou solução salina ocular',
                'Gaze não estéril ou pano limpo — nunca algodão',
                'Limpar de dentro para fora (do canto interno para externo)',
                'Um pano diferente para cada olho (evitar contaminação cruzada)',
                'Se houver sujeira que não sai: veterinário — pode ser corpo estranho embutido'
              ]
            },
            {
              title: 'Teste de Schirmer (KCS) — pelo veterinário',
              description: 'KCS (olho seco) causa conjuntivite recorrente e úlcera de córnea crônica. Tratamento é colírio de ciclosporina 0,2% ou tacrolimus 0,02% aplicado 2x ao dia pelo resto da vida.',
              duration: 'Teste rápido no consultório',
              icon: '💧',
              checklist: [
                'Shih Tzu, Bulldog, Cocker, Yorkshire com conjuntivite recorrente: solicitar teste de Schirmer',
                'Normal: >15mm de molhamento em 1 minuto',
                'KCS: <10mm — iniciar ciclosporina imediatamente',
                'Colírio artificial suplementar (2-6x ao dia) para conforto',
                'Nunca usar colírio com corticoide em KCS sem orientação — piora'
              ]
            },
            {
              title: 'Emergência: prolapso de globo ocular',
              description: 'Em braquicefálicos (Shih Tzu, Pug, Bulldog), trauma pode causar o globo a sair da órbita. É emergência cirúrgica — tempo é visão.',
              duration: 'Máximo 30 minutos para chegada ao veterinário',
              icon: '🚨',
              checklist: [
                'Não tentar empurrar o olho de volta',
                'Cobrir com pano úmido em soro fisiológico ou água limpa',
                'Ir imediatamente ao veterinário de emergência',
                'Manter o cão calmo — não deixar coçar o olho',
                'Menos de 15 min fora da órbita: boa chance de salvar a visão'
              ],
              warning: 'Prolapso de globo ocular é emergência absoluta. Cada minuto sem umidade e reposicionamento causa dano irreversível à córnea.'
            }
          ],
          checklists: [
            {
              label: 'Inspeção Ocular Diária (Raças Predispostas)',
              freq: 'daily',
              items: [
                'Limpar secreção do canto interno com gaze e soro',
                'Verificar: córnea transparente, ambos os olhos abertos igualmente',
                'Cão está esfregando o olho? Há blefarospasmo?',
                'Aplicar colírio prescrito conforme horário'
              ]
            },
            {
              label: 'Monitoramento Mensal',
              freq: 'monthly',
              items: [
                'Cão com KCS: reavaliar teste de Schirmer a cada 3-6 meses',
                'Verificar se colírio de ciclosporina está sendo efetivo',
                'Inspeção de pálpebras: entrópio, triquíase (pelos tocando a córnea)?'
              ]
            }
          ],
          vetAlert: [
            'Qualquer opacidade corneal (mancha branca ou azulada)',
            'Olho fortemente fechado com dor intensa (blefarospasmo)',
            'Globo ocular visivelmente aumentado (glaucoma)',
            'Prolapso de globo ocular — emergência absoluta',
            'Cegueira súbita (colide com objetos no escuro)',
            'Conjuntivite unilateral sem melhora em 48h com colírio',
            'Secreção purulenta associada a febre e prostração (cinomose)'
          ],
          prevention: [
            'Nunca usar colírio humano descongestionante em cães',
            'Braquicefálicos: manter pelos ao redor dos olhos aparados',
            'Verificar olhos diariamente em raças com predisposição',
            'Controlar alergias subjacentes',
            'Usar proteção ocular em atividades de risco (mato, areia, vento forte)'
          ],
          myths: [
            { myth: 'Colírio de bebê é seguro para cão', truth: 'Mesmo colírios salinos humanos podem ter conservantes que irritam olhos de cães. Use sempre produto veterinário ou soro fisiológico simples.' },
            { myth: 'Catarata é sempre curável com colírio', truth: 'Não existe colírio que dissolva catarata estabelecida. O tratamento é cirúrgico (facoemulsificação), quando indicado.' }
          ],
          faq: [
            { q: 'Meu cão Shih Tzu tem sempre o olho vermelho. Normal?', a: 'Shih Tzu tem predisposição a KCS, entrópio e exposição corneal pela conformação da raça. Consultar oftalmologista veterinário para avaliação completa e iniciar tratamento preventivo.' },
            { q: 'Glaucoma tem tratamento?', a: 'Glaucoma primário tem tratamento médico (colírios hipotensores) e cirúrgico. O objetivo é controlar a pressão intraocular para preservar a visão — cura definitiva raramente existe.' }
          ]
        }
      ]
    }
  ]
};
