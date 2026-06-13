import type { Category } from './types';
export const catViroseAvancada: Category = {
  id: 'virose-avancada', name: 'Cinomose e Parvovirose — Manejo Completo', emoji: '🦠', gradient: 'g-red',
  description: 'Cinomose e parvovirose em detalhe — estadiamento, tratamento intensivo e sequelas',
  conditions: [
    {
      id: 'cinomose-grave', name: 'Cinomose (Moquicho) — Completo', emoji: '🧠', gradient: 'g-red',
      description: 'Cinomose: do diagnóstico ao prognóstico — a doença viral mais devastadora do cão',
      prevalence: 'Cão não vacinado: cinomose é a principal causa infecciosa de morte. Sequelas neurológicas em 50-70% dos sobreviventes',
      protocols: [{
        id: 'p1', title: 'Protocolo Cinomose Completo', subtitle: 'Fases, tratamento de suporte e prognóstico neurológico',
        stages: [
          { id: 's1', label: 'Fase Respiratória-Digestiva', urgency: 'emergency', description: 'Secreção ocular/nasal, diarreia e pneumonia.', signs: ['Corrimento ocular e nasal mucopurulento', 'Diarreia e vômito', 'Febre bifásica', 'Pneumonia', 'Hiperqueratose dos coxins (nariz e patas)'] },
          { id: 's2', label: 'Fase Neurológica', urgency: 'emergency', description: 'Convulsão, mioclonia e encefalopatia.', signs: ['Convulsão', 'Mioclonia (tremor de grupamentos musculares)', 'Ataxia e incoordenação', 'Desmielinização progressiva', 'Sequela permanente provável'] },
        ],
        triggers: ['Filhote não vacinado < 6 meses', 'Adulto com vacinação desatualizada', 'Exposição em canil ou abrigo'],
        steps: [
          { title: 'Tratamento de suporte intensivo', icon: '🏥', duration: 'Hospitalização + semanas',
            description: 'Não há antiviral específico — suporte é tudo.',
            checklist: ['Fluidos IV para correção de desidratação e eletrólitos', 'Antibiótico: prevenir infecção bacteriana secundária', 'Antiemético: metoclopramida ou maropitant', 'Anticonvulsivante: fenobarbital ou diazepam se convulsões', 'Nebulização: auxilia pneumonia', 'Vitamina A e C: suporte imune', 'Plasma hiperimune: disponível em alguns centros', 'Prognóstico neurológico: reservado se mioclonia persistente'] },
        ],
        checklists: [{ label: 'Monitoramento Cinomose', freq: 'daily', items: ['Convulsão hoje?', 'Cão hidratado?', 'Come e bebe?', 'Secreção ocular limpa?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Hospitalização', tasks: ['Fluidos IV urgentes', 'Diagnóstico confirmado (IFD ou PCR)', 'Anticonvulsivante se convulsão'], note: 'Prognóstico de sobrevivência sem fase neurológica: 50-80%' },
          { day: 2, label: 'Dia 2 — Suporte Respiratório', tasks: ['Nebulização 3x/dia', 'Broncodilatador se indicado', 'Oxigenoterapia se SpO2 < 94%'] },
          { day: 3, label: 'Dia 3 — Fase Neurológica Iniciou?', tasks: ['Convulsão: anticonvulsivante', 'Mioclonia: prognóstico reservado', 'Família informada sobre sequelas'], note: 'Mioclonia = tremor em grupos musculares; pode ser permanente' },
          { day: 4, label: 'Dia 4 — Alta ou Continuação', tasks: ['Comer sozinho?', 'Sem convulsão 48h?', 'Orientação pós-alta: isolamento de outros cães'] },
          { day: 5, label: 'Dia 5 — Pós-Alta', tasks: ['Fisioterapia para sequela neurológica?', 'Fenobarbital crônico se convulsão controlada', 'Acompanhamento neurológico'] },
          { day: 6, label: 'Dia 6 — Vacinação dos Contatos', tasks: ['Outros cães no domicílio: vacinação urgente', 'Quarentena do cão doente: 4-6 semanas', 'Desinfecção do ambiente (vírus em superfícies)'] },
          { day: 7, label: 'Dia 7 — Prevenção Futura', tasks: ['Filhote primovacina a partir de 6-8 semanas', 'Reforços a cada 21-28 dias até 16 semanas', 'Adulto: reforço a cada 1-3 anos conforme protocolo'] },
        ],
        vetAlert: ['Convulsão em filhote com secreção mucopurulenta = cinomose até prova em contrário', 'Mioclonia: sinal neurológico grave', 'Pneumonia grave por cinomose'],
        prevention: ['Vacinação múltipla a partir de 6-8 semanas, reforços a cada 21 dias até 16 semanas', 'Reforço anual ou trienal conforme protocolo e sorologia', 'Filhote: sem exposição a cães não vacinados até 2 semanas após última vacina'],
        myths: [{ myth: 'Cão que sobreviveu à cinomose está imune para sempre', truth: 'Cão que sobreviveu à cinomose tem imunidade prolongada mas não necessariamente vitalícia. Além disso, pode ser reservatório e transmitir por meses após a recuperação.' }],
        faq: [
          { q: 'Cão vacinado pode pegar cinomose?', a: 'Raramente. Vacinação não confere 100% de proteção, mas reduz drasticamente a gravidade. Filhote primovacina incompleta ou adulto com reforço muito atrasado (> 3 anos) têm risco aumentado.' },
          { q: 'Cinomose é transmissível para humanos?', a: 'Não. Cinomose é espécie-específica para canídeos. Não transmite para humanos.' },
        ],
      }],
    },
  ],
};
