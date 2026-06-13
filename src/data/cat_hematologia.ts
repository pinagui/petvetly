import type { Category } from './types';
export const catHematologia: Category = {
  id: 'hematologia', name: 'Sangue e Hematologia', emoji: '🩸', gradient: 'g-red',
  description: 'Anemia, trombocitopenia, AHIM e distúrbios da coagulação',
  conditions: [
    {
      id: 'anemia-imune', name: 'Anemia Hemolítica Imunomediada (AHIM)', emoji: '🩸', gradient: 'g-red',
      description: 'Sistema imune destrói as próprias hemácias — emergência grave com boa resposta ao tratamento',
      prevalence: 'Caniches, Spaniels, Labrador predispostos; fêmeas mais afetadas; potencialmente fatal sem tratamento',
      protocols: [{
        id: 'p1', title: 'Protocolo AHIM', subtitle: 'Imunossupressão, transfusão e prevenção de tromboembolismo',
        stages: [
          { id: 's1', label: 'Anemia Moderada', urgency: 'high', description: 'Mucosas pálidas, cansaço, hematócrito em queda.', signs: ['Mucosas pálidas', 'Cansaço e letargia', 'Taquicardia', 'Hematócrito em queda (<30%)'] },
          { id: 's2', label: 'Crise Hemolítica', urgency: 'emergency', description: 'Colapso, hematócrito crítico, icterícia.', signs: ['Icterícia (mucosas e escleras amarelas)', 'Urina escura (hemoglobinúria)', 'Colapso e taquicardia grave', 'Hematócrito < 15%', 'Febre'] },
        ],
        triggers: ['Idiopático (autoimune primário)', 'Medicamentos (cefalosporinas, sulfas)', 'Vacinas (controverso)', 'Erliquiose e outros hemoparasitas', 'Neoplasia de base (secundária)'],
        steps: [
          { title: 'Imunossupressão e suporte', icon: '💊', duration: 'Internação + 3-6 meses de tratamento',
            description: 'Prednisona + azatioprina ou ciclosporina. Transfusão se hematócrito < 15%.',
            checklist: ['Prednisona 2mg/kg/dia: imunossupressão inicial', 'Transfusão de hemácias: hematócrito < 15% ou sintomas graves', 'Heparina de baixo peso molecular: prevenção de tromboembolismo', 'Omeprazol: proteção gástrica com corticoide', 'Azatioprina ou micofenolato: imunossupressão adicional', 'Monitoramento hematócrito a cada 24-48h até estabilização', 'Esplenectomia: casos refratários'] },
        ],
        checklists: [{ label: 'Monitoramento AHIM', freq: 'daily', items: ['Mucosas: cor?', 'Cão ativo ou prostrado?', 'Medicação dada?', 'Urina de cor normal?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Internação', tasks: ['Hemograma urgente: hematócrito, esferócitos', 'Teste de Coombs (confirma AHIM)', 'Imunossupressão iniciada'], note: 'AHIM sem tratamento: mortalidade de 50-70% em casos graves' },
          { day: 2, label: 'Dia 2 — Estabilização', tasks: ['Hematócrito estabilizando ou subindo?', 'Transfusão se necessário', 'Cão em posição confortável e mínimo estresse'] },
          { day: 3, label: 'Dia 3 — Resposta Inicial', tasks: ['Mucosas mais rosadas?', 'Esferócitos no esfregaço: diminuindo?', 'Sinais de tromboembolismo (dispneia súbita)?'], note: 'Tromboembolismo pulmonar: principal causa de morte em AHIM' },
          { day: 4, label: 'Dia 4 — Alta Hospitalar', tasks: ['Hematócrito > 20-25%?', 'Cão come e anda?', 'Prednisona em dose de saída prescrita?'] },
          { day: 5, label: 'Dia 5 — Em Casa', tasks: ['Exercício restrito (risco de crise hemolítica com exerção)', 'Prednisona conforme protocolo', 'Omeprazol e proteção gástrica'] },
          { day: 6, label: 'Dia 6 — Redução da Prednisona', tasks: ['Hemograma de controle em 2 semanas', 'Redução gradual NUNCA abrupta', 'Recidiva: risco máximo na redução'], note: 'Recidiva de AHIM: 30% dos casos — permanecer vigilante' },
          { day: 7, label: 'Dia 7 — Longo Prazo', tasks: ['Prednisona por 3-6 meses (mínimo)', 'Efeitos colaterais do corticoide: peso, polidipsia', 'Controle regular do hemograma'] },
        ],
        vetAlert: ['Hematócrito < 15%', 'Urina escura (hemoglobinúria)', 'Icterícia', 'Dispneia súbita (tromboembolismo)'],
        prevention: ['Não há prevenção confiável para AHIM primária', 'Evitar medicamentos desencadeantes em cães com histórico', 'Controle de hemoparasitas (erliquiose) preventivamente'],
        myths: [{ myth: 'Anemia em cão sempre é por falta de ferro', truth: 'Anemia por deficiência de ferro é incomum em cães adultos. AHIM, doença crônica, erliquiose e hemorragia são causas muito mais frequentes. Exame de sangue é necessário para diagnóstico correto.' }],
        faq: [
          { q: 'AHIM tem cura?', a: 'A maioria dos cães fica em remissão com tratamento. Cerca de 30% recidiva ao reduzir a medicação. Com manejo adequado, muitos cães vivem anos sem nova crise. Casos refratários: esplenectomia ou medicações de segunda linha.' },
          { q: 'Vacina pode causar AHIM?', a: 'Relação causal: controversa e não comprovada definitivamente. Associação temporal existe em alguns casos. Cães com histórico de AHIM: discussão com o veterinário sobre protocolo vacinal mínimo necessário, evitando vacinação em período de recidiva.' },
        ],
      }],
    },
    {
      id: 'trombocitopenia', name: 'Trombocitopenia (Plaquetas Baixas)', emoji: '⚡', gradient: 'g-purple',
      description: 'Plaquetas baixas causam sangramento — causas infecciosas, imunes e neoplásicas',
      prevalence: 'Erliquiose é a causa infecciosa mais comum no Brasil; AIMTP é a causa imune mais frequente',
      protocols: [{
        id: 'p1', title: 'Protocolo Trombocitopenia', subtitle: 'Diagnóstico da causa, doxiciclina para hemoparasitas, imunossupressão para AIMTP',
        stages: [
          { id: 's1', label: 'Trombocitopenia Moderada', urgency: 'high', description: 'Plaquetas < 50.000 — risco de sangramento.', signs: ['Petéquias (pontos vermelhos na pele/mucosa)', 'Equimoses (manchas roxas)', 'Sangramento gengival', 'Sangramento nasal'] },
          { id: 's2', label: 'Trombocitopenia Grave', urgency: 'emergency', description: 'Plaquetas < 20.000 — hemorragia espontânea.', signs: ['Sangramento espontâneo sem trauma', 'Melena (fezes negras)', 'Hematuria', 'Hemorragia retiniana', 'Colapso'] },
        ],
        triggers: ['Erliquiose (Ehrlichia canis)', 'Riquétsia (Rickettsia rickettsii)', 'Neoplasia', 'AIMTP (autoimune)', 'Medicamentos', 'CIVD (coagulopatia sistêmica)'],
        steps: [
          { title: 'Diagnóstico e tratamento da causa', icon: '🔬', duration: 'Diagnóstico urgente',
            description: 'Erliquiose: doxiciclina. AIMTP: imunossupressão. CIVD: tratar a causa.',
            checklist: ['Hemograma com diferencial: plaquetas e contagem', 'PCR ou sorologias para Ehrlichia/Rickettsia (Biovet)', 'Doxiciclina empírica se suspeita de erliquiose', 'Prednisona se AIMTP confirmada', 'Transfusão de plaquetas: casos críticos', 'Evitar injeções IM (risco de hematoma)', 'Restrição de atividade: evitar trauma com plaquetas baixas'] },
        ],
        checklists: [{ label: 'Monitoramento de Plaquetas', freq: 'daily', items: ['Petéquias novas apareceram?', 'Sangramento ativo?', 'Medicação em dia?', 'Cão ativo ou prostrado?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico Urgente', tasks: ['Hemograma urgente', 'PCR para Ehrlichia', 'Doxiciclina empírica iniciada se suspeita'], note: 'Erliquiose: resposta à doxiciclina em 24-72h confirma o diagnóstico' },
          { day: 2, label: 'Dia 2 — Resposta Inicial', tasks: ['Plaquetas subindo?', 'Petéquias novas?', 'Sangramento ativo?'] },
          { day: 3, label: 'Dia 3 — Causa Identificada', tasks: ['Erliquiose: doxiciclina por 28-42 dias', 'AIMTP: prednisona 2mg/kg/dia', 'Neoplasia: estadiamento oncológico'] },
          { day: 4, label: 'Dia 4 — Monitoramento', tasks: ['Hemograma de controle', 'Petéquias regredindo?', 'Restrição de atividade mantida?'] },
          { day: 5, label: 'Dia 5 — Melhora Esperada', tasks: ['Erliquiose: plaquetas normais em 2-4 semanas', 'Controle hemograma em 1 semana', 'Efeito colateral doxiciclina: náusea (dar com alimento)'] },
          { day: 6, label: 'Dia 6 — Prevenção de Erliquiose', tasks: ['Carrapato Rhipicephalus (marrom): transmissor', 'Antipulgas/carrapatos em dia?', 'Ambiente com carrapatos: redobrar prevenção'] },
          { day: 7, label: 'Dia 7 — Plano de Controle', tasks: ['Hemograma normal?', 'Erliquiose: doxiciclina por curso completo', 'AIMTP: redução gradual da prednisona em 3-6 meses'] },
        ],
        vetAlert: ['Sangramento espontâneo sem trauma', 'Plaquetas < 20.000', 'Hematoma após injeção', 'Melena'],
        prevention: ['Prevenção rigorosa de carrapatos (transmissores de erliquiose)', 'Antiparasitário externo mensal em toda vida do cão'],
        myths: [{ myth: 'Erliquiose só acontece em cão que vai à mata', truth: 'Erliquiose é transmitida pelo carrapato-marrom (Rhipicephalus sanguineus), que vive em quintais urbanos e cercas. Cão de apartamento que não vai à mata pode contrair erliquiose se houver carrapatos no ambiente.' }],
        faq: [
          { q: 'Quanto tempo leva para as plaquetas normalizarem após erliquiose?', a: 'Com doxiciclina adequada: plaquetas começam a subir em 72h. Normalização completa: 2-4 semanas. Erliquiose crônica pode levar 2-3 meses para normalizar o hemograma completamente.' },
          { q: 'Cão curado de erliquiose pode ter novamente?', a: 'Sim. Não há imunidade permanente. Prevenção de carrapatos é fundamental após a cura para evitar reinfecção.' },
        ],
      }],
    },
  ],
};
