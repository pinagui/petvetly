import type { Category } from './types';
export const catFebre: Category = {
  id: 'febre', name: 'Febre e Hipertermia Patológica', emoji: '🌡️', gradient: 'g-orange',
  description: 'Como medir a temperatura do cão, causas de febre e quando tratar',
  conditions: [
    {
      id: 'febre-canina', name: 'Febre no Cão', emoji: '🌡️', gradient: 'g-orange',
      description: 'Temperatura > 39,2°C — causas, manejo e quando ir ao veterinário',
      prevalence: 'Febre é um sinal, não uma doença — sempre indica processo subjacente que precisa ser investigado',
      protocols: [{
        id: 'p1', title: 'Protocolo Febre Canina', subtitle: 'Medição retal, causas principais e tratamento da causa',
        stages: [
          { id: 's1', label: 'Febre Moderada (39,2°-40,5°C)', urgency: 'moderate', description: 'Febre com cão ainda responsivo.', signs: ['Temperatura retal 39,2-40,5°C', 'Letargia', 'Inapetência', 'Cão quente ao toque (orelhas, abdômen)'] },
          { id: 's2', label: 'Febre Alta (> 40,5°C)', urgency: 'emergency', description: 'Risco de dano cerebral e convulsão > 41,5°C.', signs: ['Temperatura > 40,5°C', 'Tremores', 'Desorientação', 'Gengivas quentes e secas', 'Convulsão em temperatura > 41,5°C'] },
        ],
        triggers: ['Infecção bacteriana ou viral', 'Erliquiose e hemoparasitas', 'Piroplasmose', 'Abscesso dentário', 'Neoplasia', 'Imune (poliartrite, lupus)'],
        steps: [
          { title: 'Medição e manejo da febre', icon: '🌡️', duration: '24-72h de avaliação',
            description: 'Termômetro retal é o método mais preciso — digital em < 1 min.',
            checklist: ['Termômetro retal: lubrificar com vaselina, inserir 2-3cm, aguardar 1 min', 'Normal: 38°C-39,2°C', 'NUNCA: dipirona ou paracetamol sem prescrição veterinária', 'Compressa morna (não gelada): em axilas e virilha', 'Hidratação: oferecer água fresca sempre', 'Veterinário se: > 40,5°C, > 24h de duração, letargia grave', 'Dipirona: apenas com orientação veterinária (dose: 25mg/kg)'] },
        ],
        checklists: [{ label: 'Monitoramento de Febre', freq: 'daily', items: ['Temperatura retal medida?', 'Cão bebeu água?', 'Algum sinal de causa (coxeando, orelha dolorosa)?', 'Febre < 24h ou persistente?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Medir e Identificar', tasks: ['Medir temperatura retal', 'Buscar causa: orelha, dentes, pata, lesão', 'Hidratar o cão'], note: 'Temperatura retal é o único método confiável — testa auricular é impreciso em cão' },
          { day: 2, label: 'Dia 2 — Causa Identificável?', tasks: ['Otite? Veterinário para antibiótico', 'Pata infectada? Limpar e vet', 'Sem causa óbvia: exames laboratoriais'], note: 'Febre de origem desconhecida (FUO) em cão: exames = hemograma, PCR erliquiose' },
          { day: 3, label: 'Dia 3 — Tratamento da Causa', tasks: ['Erliquiose: doxiciclina', 'Infecção bacteriana: antibiótico conforme cultura', 'Febre viral: suporte e aguardar'] },
          { day: 4, label: 'Dia 4 — Controle', tasks: ['Temperatura normalizada?', 'Tratamento em andamento?', 'Cão come e bebe?'] },
          { day: 5, label: 'Dia 5 — Febre Persistente', tasks: ['> 5 dias com febre: investigação avançada', 'Hemograma, PCR, sorologia', 'Internação para suporte IV se necessário?'] },
          { day: 6, label: 'Dia 6 — Prevenção', tasks: ['Prevenir erliquiose: antipulgas/carrapatos', 'Dentição limpa: prevenir abscesso dental como causa', 'Vacinação em dia: prevenir causas infecciosas'] },
          { day: 7, label: 'Dia 7 — Resolução', tasks: ['Febre resolvida?', 'Causa tratada?', 'Controle laboratorial se indicado?'] },
        ],
        vetAlert: ['Temperatura > 40,5°C', 'Febre por > 24h sem causa identificada', 'Convulsão associada à febre', 'Gengivas secas e quentes'],
        prevention: ['Prevenção de erliquiose (principal causa de febre infecciosa)', 'Saúde dental adequada', 'Vacinação em dia'],
        myths: [{ myth: 'Cão com febre deve tomar dipirona humana sem receita', truth: 'Dipirona tem uso off-label em cão mas NUNCA sem orientação veterinária para dose e frequência. Paracetamol (Tylenol) é TÓXICO para cão. Tratar a febre sem tratar a causa não cura o animal.' }],
        faq: [
          { q: 'Posso medir a temperatura do cão na orelha?', a: 'Termômetros auriculares são imprecisos em cão. Temperatura retal com termômetro digital é o método padrão. Inserir 2-3cm no reto com vaselina, aguardar 1 minuto.' },
          { q: 'Devo dar antitérmico para cão com febre?', a: 'A febre é resposta imune útil até 40°C. Febre > 40,5°C: antitérmico veterinário pode ser indicado. Dipirona: dose 25mg/kg VO com orientação veterinária. Nunca: paracetamol, ibuprofeno, ácido acetilsalicílico sem orientação.' },
        ],
      }],
    },
  ],
};
