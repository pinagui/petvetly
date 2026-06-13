import type { Category } from './types';
export const catZoonoses: Category = {
  id: 'zoonoses', name: 'Zoonoses — Doenças do Cão para Humano', emoji: '🦠', gradient: 'g-red',
  description: 'Raiva, leptospirose, toxoplasmose, larva migrans — prevenção e risco real',
  conditions: [
    {
      id: 'leptospirose-cao', name: 'Leptospirose Canina e Zoonótica', emoji: '🐀', gradient: 'g-amber',
      description: 'Leptospirose: transmitida por urina de rato, perigosa para cão e humano',
      prevalence: 'Endêmica no Brasil; pico após enchentes; cão vacinado tem risco baixo',
      protocols: [{
        id: 'p1', title: 'Protocolo Leptospirose Canina', subtitle: 'Diagnóstico sorológico, penicilina e prevenção por vacina',
        stages: [
          { id: 's1', label: 'Leptospirose Aguda', urgency: 'emergency', description: 'Insuficiência hepato-renal aguda.', signs: ['Prostração intensa e súbita', 'Vômito e inapetência', 'Icterícia (olhos e gengivas amarelos)', 'Urina escura ou com sangue', 'Após enchente ou contato com água parada'] },
          { id: 's2', label: 'Subclínica', urgency: 'moderate', description: 'Infecção sem sintomas graves.', signs: ['Febre baixa', 'Letargia moderada', 'Pode resolver espontaneamente', 'Portador urinário (risco para humanos)'] },
        ],
        triggers: ['Contato com urina de rato (água parada, enchente)', 'Lamber poças de água', 'Ambiente infestado de roedores', 'Sem vacinação'],
        steps: [
          { title: 'Tratamento e suporte hepato-renal', icon: '💊', duration: 'Internação urgente',
            description: 'Penicilina ou doxiciclina + suporte intensivo.',
            checklist: ['Fluidos IV: suporte renal urgente', 'Penicilina G cristalina: tratamento de escolha fase inicial', 'Doxiciclina: elimina o portador (fase de limpeza)', 'Suporte hepático: SAMe, vitaminas lipossolúveis', 'Isolamento: urina do cão é infectante para humanos', 'Luva e proteção ao manusear urina do cão tratado', 'Desinfecção do ambiente com hipoclorito'] },
        ],
        checklists: [{ label: 'Prevenção de Leptospirose', freq: 'monthly', items: ['Vacina leptospirose em dia?', 'Roedores no quintal controlados?', 'Água parada eliminada?', 'Cão sem acesso a esgoto ou poça suja?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Emergência', tasks: ['Veterinário de emergência IMEDIATAMENTE', 'Fluidos IV para proteção renal', 'Sorologia (MAT) para diagnóstico'], note: 'Insuficiência renal por leptospirose: pode ser irreversível sem tratamento rápido' },
          { day: 2, label: 'Dia 2 — Tratamento', tasks: ['Penicilina iniciada?', 'Função renal (creatinina, ureia) monitorada?', 'Icterícia: pior ou melhor?'] },
          { day: 3, label: 'Dia 3 — Proteção Humana', tasks: ['Família informada: usar luva para manusear urina do cão', 'Hipoclorito no local de urinar do cão', 'Criança e imunodeprimido: afastar do contato com urina'], note: 'Leptospirose humana: febre, dor de cabeça, hemorragia — buscar UBS se sintomas' },
          { day: 4, label: 'Dia 4 — Resposta ao Tratamento', tasks: ['Cão bebe água?', 'Icterícia revertendo?', 'Urina normal?'] },
          { day: 5, label: 'Dia 5 — Doxiciclina (Fase 2)', tasks: ['Doxiciclina 5mg/kg 2x/dia por 14 dias', 'Elimina o estado de portador', 'Controle laboratorial renal e hepático'] },
          { day: 6, label: 'Dia 6 — Prevenção', tasks: ['Vacina: 2 doses + reforço anual', '9 ou 10 sorovares: cobertos na vacina?', 'Controle de roedores: ratoeiras, vedação'] },
          { day: 7, label: 'Dia 7 — Sequela Renal', tasks: ['Doença renal crônica pós-leptospirose: comum', 'Dieta renal se creatinina elevada persistente', 'Controle semestral de função renal'] },
        ],
        vetAlert: ['Icterícia súbita + prostração = emergência', 'Oligúria ou anúria (sem urinar)', 'Hemorragias após enchente'],
        prevention: ['Vacina anual (polivalente com leptospirose)', 'Controle de roedores no ambiente', 'Não deixar água parada no quintal', 'Não deixar cão beber de poças, especialmente após chuva'],
        myths: [{ myth: 'Cão com leptospirose sempre morre', truth: 'Com tratamento precoce e agressivo: 60-80% de recuperação. O prognóstico piora muito com atraso no tratamento — cada hora conta para a função renal.' }],
        faq: [
          { q: 'A vacina cobre todos os sorovares de leptospirose?', a: 'As vacinas disponíveis cobrem os sorovares mais prevalentes em cada região (geralmente Canicola, Icterohaemorrhagiae, Bratislava, Pomona). Não cobrem todos os > 200 sorovares existentes. Mesmo vacinado: risco não é zero em exposição intensa.' },
          { q: 'Posso pegar leptospirose do meu cão?', a: 'Risco existe mas é baixo com higiene básica. Cão infectado elimina Leptospira pela urina. Usar luva ao limpar urina, lavar as mãos. Leptospirose humana mais frequentemente vem de água contaminada, não do cão diretamente.' },
        ],
      }],
    },
    {
      id: 'toxoplasmose', name: 'Toxoplasma e Larva Migrans', emoji: '🦠', gradient: 'g-purple',
      description: 'Toxoplasmose em grávidas, larva migrans por fezes de cão — risco e prevenção',
      prevalence: 'Toxoplasmose: cão tem baixíssimo risco de transmitir. Larva migrans: fezes de cão em areia = risco real',
      protocols: [{
        id: 'p1', title: 'Protocolo Zoonoses Parasitárias', subtitle: 'Larva migrans, toxoplasmose e proteção de grupos de risco',
        stages: [
          { id: 's1', label: 'Larva Migrans Cutânea', urgency: 'moderate', description: 'Ancilostoma nas fezes de cão infecta a pele humana.', signs: ['Trilha serpiginosa vermelha na pele humana', 'Após contato com areia contaminada (praia, playground)', 'Crianças: risco maior por brincar em areia'] },
          { id: 's2', label: 'Toxoplasmose', urgency: 'low', description: 'Cão não é transmissor eficiente de Toxoplasma.', signs: ['Grávidas NÃO precisam se afastar do cão', 'Gato: fonte principal de Toxoplasma', 'Carne crua para o cão: risco para o humano via fezes'] },
        ],
        triggers: ['Cão defeca em areia pública (praia, playground)', 'Cão sem vermifugação regular', 'Grávidas em contato com gatos e carne crua'],
        steps: [
          { title: 'Prevenção de zoonoses parasitárias', icon: '🛡️', duration: 'Contínuo — prevenção permanente',
            description: 'Vermifugação regular do cão e higiene são as principais medidas.',
            checklist: ['VERMIFUGAÇÃO regular: a cada 3 meses (Panacur, Drontal)', 'Recolher fezes do cão IMEDIATAMENTE', 'Não deixar cão defecar em areia de playground', 'Grávidas e crianças: lavar mãos após contato com solo', 'Cão: não dar carne crua (Toxoplasma pode contaminar fezes)', 'Praia: lavar pés após contato com areia'] },
        ],
        checklists: [{ label: 'Prevenção de Zoonoses', freq: 'monthly', items: ['Vermifugação em dia (cada 3 meses)?', 'Fezes recolhidas do jardim?', 'Cão não defecou em área de crianças?', 'Mãos lavadas após manipular fezes?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Vermifugação', tasks: ['Protocolo de vermifugação do cão?', 'Drontal, Panacur, Milbemax: cobrem as principais espécies', 'Frequência: 4x/ano (a cada 3 meses)'] },
          { day: 2, label: 'Dia 2 — Manejo de Fezes', tasks: ['Saquinho biodegradável em todos os passeios', 'Quintal: fezes recolhidas diariamente', 'Descarte adequado (lixo, não no jardim de outros)'] },
          { day: 3, label: 'Dia 3 — Grupos de Risco', tasks: ['Grávida em casa?', 'Crianças que brincam em areia?', 'Imunodeprimido?', 'Higiene intensificada?'] },
          { day: 4, label: 'Dia 4 — Mito da Grávida e o Cão', tasks: ['Grávida NÃO precisa se afastar do cão', 'Grávida PODE se afastar do gato (caixa de areia)', 'Cão com toxoplasmose: risco muito baixo de transmissão'], note: 'Cão não é reservatório de Toxoplasma — gato é o hospedeiro definitivo' },
          { day: 5, label: 'Dia 5 — Larva Migrans', tasks: ['Praia: sapato e cuidado com areia', 'Playground: areia coberta à noite?', 'Tratamento: ivermectina tópica ou albendazol para humano afetado'] },
          { day: 6, label: 'Dia 6 — Raiva', tasks: ['Vacinação anti-rábica do cão: obrigatória anualmente', 'Raiva canina: risco mínimo com cão vacinado', 'Mordida de cão: protocolo na UBS independente da vacinação'] },
          { day: 7, label: 'Dia 7 — Perspectiva Correta', tasks: ['Benefícios do cão superam os riscos das zoonoses?', 'Higiene básica: riscos mínimos para saúde humana?', 'Pet bem cuidado: convivência segura?'] },
        ],
        vetAlert: ['Cão com infestação parasitária intensa: vermifugação urgente', 'Cão sem vacinação anti-rábica: regularizar'],
        prevention: ['Vermifugação trimestral', 'Vacinação anti-rábica anual', 'Recolher fezes', 'Higiene de mãos após contato com solo ou animais'],
        myths: [{ myth: 'Grávida deve se afastar do cão por causa de toxoplasmose', truth: 'FALSO. Cão não é transmissor de Toxoplasma. A fonte de risco para grávidas é o gato (hospedeiro definitivo) e a carne malpassada, não o cão. Grávida pode conviver normalmente com cão.' }],
        faq: [
          { q: 'Com que frequência vermifugar o cão?', a: 'Padrão geral: a cada 3 meses (4x/ano). Filhote: vermifugação mais frequente (a cada 2 semanas até 3 meses, depois mensal até 6 meses). Cão que caça ou ingere roedores: a cada 1-2 meses.' },
        ],
      }],
    },
  ],
};
