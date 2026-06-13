import type { Category } from './types';

export const catCardiaco: Category = {
  id: 'cardiaco',
  name: 'Cardíaco',
  emoji: '❤️',
  gradient: 'grad-red',
  description: 'Doença valvar mitral, cardiomiopatia dilatada, insuficiência cardíaca e arritmias em cães',
  conditions: [
    {
      id: 'doenca-valvar',
      name: 'Doença Valvar Mitral (DVMi)',
      emoji: '❤️',
      gradient: 'grad-red',
      description: 'A doença valvar mitral degenerativa é a cardiopatia mais comum em cães, especialmente em raças pequenas acima de 10 anos. A válvula mitral degenera, causando regurgitação e sobrecarga do coração esquerdo com progressão para insuficiência cardíaca.',
      prevalence: '75% dos cães com doença cardíaca têm DVMi. Cavalier King Charles Spaniel: praticamente 100% acima de 10 anos.',
      protocols: [
        {
          id: 'proto-dvmi',
          title: 'Manejo da Doença Valvar Mitral',
          subtitle: 'Estadiamento ACC/AHA e tratamento específico por estágio',
          stages: [
            {
              id: 's0', label: 'Estágio A — Em risco', description: 'Raça predisposta sem sopro ainda.',
              signs: ['Cavalier, Poodle, Chihuahua, Maltês, Shih Tzu: verificar regularmente', 'Exame físico sem alteração', 'Sem sinais cardíacos'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'Estágio B1 — Sopro sem remodelamento', description: 'Sopro cardíaco presente, coração de tamanho normal.',
              signs: ['Sopro sistólico audível no ápice esquerdo', 'Raio-X normal', 'Ecocardiograma: refluxo mitral leve', 'Cão assintomático'],
              urgency: 'low'
            },
            {
              id: 's2', label: 'Estágio B2 — Sopro com cardiomegalia', description: 'Coração ampliado, sem sinais de falência ainda.',
              signs: ['Sopro de intensidade > III/VI', 'Raio-X: cardiomegalia (VHS > 10,5)', 'Ecocardiograma: diâmetro atrial esquerdo aumentado', 'Cão ainda sem tosse ou dispneia em repouso'],
              urgency: 'moderate'
            },
            {
              id: 's3', label: 'Estágio C-D — Insuficiência cardíaca', description: 'Edema pulmonar ou efusão pleural — emergência potencial.',
              signs: ['Tosse especialmente à noite', 'Dispneia em repouso', 'Intolerância ao exercício progressiva', 'Edema pulmonar ao raio-X (broncograma aéreo)', 'Síncope (desmaio)', 'Caquexia cardíaca'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Predisposição genética: Cavalier King Charles Spaniel, Poodle toy e miniatura, Chihuahua, Maltês, Schnauzer miniatura, Dachshund',
            'Idade: progressão inevitável com o envelhecimento',
            'Sobrecarga crônica da válvula',
            'Hipertensão pulmonar secundária'
          ],
          steps: [
            {
              title: 'Diagnóstico completo cardiológico',
              description: 'O diagnóstico completo inclui auscultação, raio-X de tórax, ecocardiograma Doppler e pressão arterial.',
              duration: 'Diagnóstico inicial + reavaliação conforme estágio',
              icon: '🩺',
              checklist: [
                'Auscultação: intensidade e localização do sopro (escala I-VI)',
                'Raio-X de tórax: VHS (Vertebral Heart Score), edema, efusão',
                'Ecocardiograma: gravidade da regurgitação, função sistólica, relação AE/Ao',
                'Pressão arterial: hipertensão agrava',
                'ECG: arritmias',
                'B-type natriuretic peptide (NT-proBNP): marcador de dano cardíaco'
              ]
            },
            {
              title: 'Tratamento Estágio B2: pimobendan preventivo',
              description: 'O EPIC Trial (2016) demonstrou que pimobendan no estágio B2 com critérios específicos atrasa o início da insuficiência cardíaca em média 15 meses.',
              duration: 'Tratamento contínuo',
              icon: '💊',
              checklist: [
                'Pimobendan: 0,25-0,3mg/kg 2x/dia (em jejum ou 1h antes da refeição)',
                'Critérios para iniciar em B2: VHS > 10,5 E diâmetro AE/Ao > 1,6 (ecocardiograma)',
                'Efeito: inotrópico positivo + vasodilatador',
                'Reavaliação a cada 3-6 meses',
                'Não iniciar sem ecocardiograma confirmatório'
              ]
            },
            {
              title: 'Estágio C: insuficiência cardíaca estabelecida',
              description: 'Triade terapêutica: pimobendan + furosemida + IECA. Terapia para toda a vida.',
              duration: 'Tratamento crônico',
              icon: '⚕️',
              checklist: [
                'Pimobendan: 0,3mg/kg 2x/dia',
                'Furosemida: dose inicial 1-2mg/kg 2x/dia (ajustar conforme sintomas)',
                'Benazepril ou enalapril: 0,5mg/kg/dia (IECA — reduz sobrecarga)',
                'Espironolactona: 2mg/kg/dia (diurético poupador de potássio + cardioprotetor)',
                'Monitoramento: eletrólitos, função renal a cada 1-3 meses',
                'Frequência respiratória em repouso: monitorar em casa (> 35 mrpm = ajustar)'
              ],
              warning: 'NUNCA aumentar furosemida sem avaliação veterinária. Superdosagem causa desidratação e azotemia pré-renal graves.'
            },
            {
              title: 'Frequência respiratória em repouso (FRR) — monitoramento domiciliar',
              description: 'A FRR em repouso é o melhor parâmetro domiciliar para detectar edema pulmonar precocemente. Normal: < 30 mrpm.',
              duration: 'Diariamente',
              icon: '📊',
              checklist: [
                'Medir quando o cão está dormindo ou em repouso completo',
                'Contar os movimentos do tórax por 1 minuto',
                'Normal: < 30 movimentos/minuto',
                'Alerta: 30-35 mrpm por 2 dias consecutivos — consultar veterinário',
                'Emergência: > 35 mrpm ou dispneia em repouso — ir ao veterinário imediatamente',
                'App "Cardalis DRS" ou "Cardalis" para facilitar o registro'
              ]
            },
            {
              title: 'Dieta cardíaca e restrição de sódio',
              description: 'Dieta com sódio moderado ajuda no controle do fluido. Evitar petiscos salgados, embutidos, queijo, presunto.',
              duration: 'Permanente',
              icon: '🥗',
              checklist: [
                'Dieta cardíaca veterinária: Hills h/d, Royal Canin Cardiac',
                'Sódio < 100mg/100kcal em estágio C-D',
                'Petiscos: sem sal — frango cozido, cenoura',
                'Suplemento de taurina se dieta grain-free (associação entre DCM e dieta sem grão)',
                'Potássio: monitorar (furosemida causa hipocalemia)'
              ]
            }
          ],
          checklists: [
            {
              label: 'Monitoramento Cardíaco Diário',
              freq: 'daily',
              items: [
                'Frequência respiratória em repouso (FRR): < 30 mrpm',
                'Tosse: frequência aumentou?',
                'Atividade: mais ou menos dispneia que ontem?',
                'Apetite: comeu normalmente?',
                'Medicações dadas no horário?',
                'Urina: saindo normalmente? (controle com furosemida)'
              ]
            },
            {
              label: 'Exames de Controle',
              freq: 'monthly',
              items: [
                'Ecocardiograma: a cada 3-6 meses em B2; mensal a cada 2-3 meses em C',
                'Raio-X de tórax: quando houver mudança de sintomas',
                'Eletrólitos + creatinina: a cada 1-3 meses com furosemida',
                'Pressão arterial: em cada consulta'
              ]
            }
          ],
          vetAlert: [
            'FRR > 35 mrpm em dois dias consecutivos',
            'Tosse com espuma rósea na boca (edema pulmonar agudo)',
            'Síncope (desmaio)',
            'Língua ou mucosas azuladas',
            'Distensão abdominal súbita (ascite por ICCongestiva)',
            'Não urina com furosemida (insuficiência cardíaca refratária)'
          ],
          prevention: [
            'Triagem ecocardiográfica anual em raças predispostas acima de 5 anos',
            'Evitar reprodução de cães com DVMi precoce (programa de triagem Cavalier)',
            'Controle de peso',
            'Evitar estresse físico excessivo em cães com sopro conhecido'
          ],
          myths: [
            { myth: 'Sopro no coração significa morte iminente', truth: 'Sopro grau I-II pode persistir por anos sem progressão. O prognóstico depende da evolução — com tratamento correto, qualidade de vida é excelente por muito tempo.' },
            { myth: 'Cão com problema no coração não pode se exercitar', truth: 'Exercício moderado é benéfico até o estágio C. Em C-D severo, repouso é recomendado. Cada caso é individual.' }
          ],
          faq: [
            { q: 'Meu Cavalier de 7 anos tem sopro grau III — devo iniciar tratamento?', a: 'Depende do ecocardiograma. Se VHS > 10,5 e AE/Ao > 1,6, iniciar pimobendan. Se ainda dentro dos limites normais (B1), monitorar a cada 3-6 meses.' },
            { q: 'A furosemida vai prejudicar os rins do meu cão?', a: 'Furosemida causa azotemia pré-renal em doses altas ou em desidratação. Monitoramento da creatinina é essencial. Os benefícios cardíacos superam os riscos renais quando bem manejado.' }
          ]
        }
      ]
    }
  ]
};
