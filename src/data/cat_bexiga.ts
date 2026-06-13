import type { Category } from './types';
export const catBexiga: Category = {
  id: 'bexiga', name: 'Bexiga e Uretra', emoji: '💦', gradient: 'g-blue',
  description: 'Infecção urinária, incontinência, cistite e obstrução uretral',
  conditions: [
    {
      id: 'itu-cistite', name: 'Infecção Urinária (ITU) e Cistite', emoji: '🔥', gradient: 'g-orange',
      description: 'Cão urina frequente, com sangue ou dificuldade — como reconhecer e tratar ITU',
      prevalence: 'ITU é mais comum em fêmeas; 14% das cadelas terão ITU na vida',
      protocols: [{
        id: 'p1', title: 'Protocolo ITU Canina', subtitle: 'Diagnóstico por urinálise, urocultura e antibioticoterapia alvo',
        stages: [
          { id: 's1', label: 'ITU Simples', urgency: 'moderate', description: 'Cistite bacteriana sem complicações.', signs: ['Disúria (urinar com dificuldade/dor)', 'Hematúria (sangue na urina)', 'Polaciúria (urinar muito frequente em pequena quantidade)', 'Urina com odor forte ou turva', 'Lica a vulva ou prepúcio com frequência'] },
          { id: 's2', label: 'ITU Alta (Pielonefrite)', urgency: 'high', description: 'Infecção renal — febre + dor renal.', signs: ['Febre', 'Dor na região lombar (dor à palpação)', 'Prostração e inapetência', 'Polidipsia associada', 'ITU recorrente sem melhora'] },
        ],
        triggers: ['Anatomia feminina (uretra mais curta)', 'Bexiga não esvaziada completamente', 'Cálculos urinários crônicos', 'Diabetes mellitus', 'Imunossupressão', 'Higiene perineal insuficiente'],
        steps: [
          { title: 'Diagnóstico e tratamento alvo', icon: '🔬', duration: 'Diagnóstico e 7-14 dias antibiótico',
            description: 'Urinálise + urocultura antes do antibiótico.',
            checklist: ['Urinálise: leucócitos, bactérias, sangue, pH', 'Urocultura e antibiograma (para acertar o antibiótico)', 'Amoxicilina + clavulanato: opção empírica inicial', 'Aguardar antibiograma para ajustar', 'ITU recorrente: ultrassom renal e vesical', 'Aumentar hidratação: diluir urina e lavar a bexiga', 'Urocultura de controle 7 dias após fim do antibiótico'] },
        ],
        checklists: [{ label: 'Monitoramento UTI', freq: 'daily', items: ['Urina limpa (sem sangue visível)?', 'Cão urina normalmente?', 'Antibiótico dado na hora certa?', 'Bebeu água adequada?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Veterinário', tasks: ['Coleta de urina por cistocentese (veterinário) para urocultura', 'Antibiótico empírico iniciado', 'Hidratação aumentada'], note: 'Urocultura antes de começar antibiótico — resistência é crescente' },
          { day: 2, label: 'Dia 2 — Sinais Agudos', tasks: ['Sangue na urina diminuiu?', 'Urina menos frequente?', 'Cão mais confortável?'] },
          { day: 3, label: 'Dia 3 — Resultado da Urocultura', tasks: ['Antibiograma: bactéria sensível ao antibiótico?', 'Ajustar antibiótico se necessário', 'Continuar por 7-14 dias completos'] },
          { day: 4, label: 'Dia 4 — Hidratação', tasks: ['Dieta úmida para diluir urina', 'Fonte de água em movimento', 'Urina de cor normal?'] },
          { day: 5, label: 'Dia 5 — Investigação de Causa', tasks: ['Cálculo vesical: ultrassom?', 'Diabética: glicemia?', 'Higiene perineal adequada?'] },
          { day: 6, label: 'Dia 6 — Fim da Semana de Antibiótico', tasks: ['Sem sintomas?', 'Completar curso completo (não parar antes)', 'Controle de urina em 7 dias pós-término'] },
          { day: 7, label: 'Dia 7 — Prevenção de Recidiva', tasks: ['Urocultura de controle agendada?', 'ITU recorrente: investigação aprofundada', 'Cranberry/D-manose: suplemento preventivo em cadelas recorrentes'] },
        ],
        vetAlert: ['Febre + dor lombar (pielonefrite)', 'Cão macho que não urina (obstrução)', 'Sangue na urina sem melhora em 48h', 'ITU > 3x no mesmo ano'],
        prevention: ['Hidratação adequada', 'Higiene perineal em fêmeas', 'Esvaziamento completo da bexiga em passeios', 'Dieta úmida ou adição de água na ração'],
        myths: [{ myth: 'Cranberry cura ITU em cão como em humano', truth: 'Cranberry e D-manose têm evidência como PREVENÇÃO em cães (aderem a bactérias E. coli evitando aderência à parede da bexiga). Não curam ITU estabelecida — essa requer antibiótico.' }],
        faq: [
          { q: 'Qual a melhor forma de coletar urina para exame?', a: 'Cistocentese (punção da bexiga pelo veterinário): padrão-ouro para urocultura. Para urinálise simples: coleta na torneira (urina da calha) em frasco estéril. Nunca do chão — contamina a amostra.' },
          { q: 'ITU em cão macho é grave?', a: 'ITU em cão macho é menos comum e quase sempre indica patologia de base (próstata, cálculo, tumor). Investigação aprofundada sempre indicada em macho com ITU.' },
        ],
      }],
    },
    {
      id: 'incontinencia', name: 'Incontinência Urinária', emoji: '💧', gradient: 'g-blue',
      description: 'Cão que urina involuntariamente — causas hormonais, neurológicas e anatômicas',
      prevalence: 'Cadelas castradas: 20% desenvolvem incontinência urinária por deficiência de estrógeno',
      protocols: [{
        id: 'p1', title: 'Protocolo Incontinência Canina', subtitle: 'Diferencial hormonal/neurológico e tratamento',
        stages: [
          { id: 's1', label: 'Incontinência Hormonal', urgency: 'moderate', description: 'Urina escapa durante o sono — mais em cadelas castradas.', signs: ['Mancha de urina na cama durante o sono', 'Cão não percebe quando sai urina', 'Comum em cadelas de porte médio-grande castradas'] },
          { id: 's2', label: 'Incontinência Neurológica', urgency: 'high', description: 'Lesão medular ou neuropatia.', signs: ['Incontinência associada a fraqueza de membros posteriores', 'Sem sensação perianal', 'Cão não levanta a pata para urinar', 'Associada a trauma ou hérnia discal'] },
        ],
        triggers: ['Castração (deficiência de estrógeno em fêmeas)', 'Hérnia discal (compressão medular)', 'Anomalia congênita de ureter', 'Doença de Cushing', 'Bexiga atônica em idosos'],
        steps: [
          { title: 'Diagnóstico e tratamento hormonal', icon: '💊', duration: 'Diagnóstico e tratamento crônico',
            description: 'DMRE (fenilpropanolamina) ou estriol são padrões de tratamento.',
            checklist: ['Urinálise para excluir ITU (causa mais fácil)', 'Radiografia ou RM para avaliar coluna (causa neurológica)', 'Tratamento hormonal: fenilpropanolamina (Propalin) 1mg/kg 2-3x/dia', 'Alternativa: estriol (Incurin) em cadelas', 'Incontinência neurológica: tratar causa de base (hérnia discal)', 'Higiene: fraldas em casos graves, área de repouso lavável', 'Controle de peso: obesidade piora incontinência'] },
        ],
        checklists: [{ label: 'Manejo da Incontinência', freq: 'daily', items: ['Medicação dada?', 'Área de dormir limpa?', 'Cão com higiene perineal?', 'Peso controlado?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['Urinálise (excluir ITU)', 'Histórico completo: quando started?', 'Associado a problema neurológico?'] },
          { day: 2, label: 'Dia 2 — Início do Tratamento', tasks: ['Fenilpropanolamina iniciada?', 'Estriol: alternativa para cadelas?', 'Fraldas para higiene enquanto ajusta?'] },
          { day: 3, label: 'Dia 3 — Resposta Inicial', tasks: ['Menos episódios?', 'Tolerando a medicação?', 'Efeito colateral (hipertensão, agitação com PPA)?'] },
          { day: 4, label: 'Dia 4 — Ajuste de Dose', tasks: ['Resposta parcial: ajustar dose com veterinário', 'Monitorar pressão arterial (PPA pode aumentar)', 'Qualidade de vida mantida?'] },
          { day: 5, label: 'Dia 5 — Higiene', tasks: ['Área de dormir lavada e seca?', 'Fralda trocada frequentemente?', 'Pele perianal limpa (prevenir dermatite)'], note: 'Urina na pele causa dermatite grave — higiene é essencial' },
          { day: 6, label: 'Dia 6 — Ajuste de Estilo de Vida', tasks: ['Passeios mais frequentes para esvaziamento da bexiga?', 'Último passeio próximo à hora de dormir?', 'Água controlada à noite (reduz volume de urina noturno)?'] },
          { day: 7, label: 'Dia 7 — Avaliação Semanal', tasks: ['Episódios reduzidos?', 'Medicação em longo prazo aceita?', 'Qualidade de vida da cadela mantida?'] },
        ],
        vetAlert: ['Incontinência + fraqueza nos membros posteriores (lesão medular)', 'Incontinência em cão jovem sem castração (anomalia congênita)', 'Dermatite grave por urina na pele'],
        prevention: ['Incontinência hormonal pós-castração: conhecer o risco antes da castração', 'Peso saudável', 'Passeios frequentes para estimular esvaziamento completo da bexiga'],
        myths: [{ myth: 'Castração sempre causa incontinência em cadelas', truth: 'Apenas 20% das cadelas castradas desenvolvem incontinência — e a maioria responde bem ao tratamento. O risco não deve contraindicar a castração, cujos benefícios (pyometra, tumor mamário) superam o risco.' }],
        faq: [
          { q: 'Cadela incontinente pode usar fralda para sempre?', a: 'Fraldas são opção de manejo mas não tratamento. Sem medicação, urina constante na pele causa dermatite grave. Tratamento hormonal tem alta taxa de sucesso (70-80%) — fraldas devem ser complemento, não substituto.' },
          { q: 'Quando a incontinência indica problema neurológico sério?', a: 'Quando acompanhada de fraqueza dos membros posteriores, ataxia, dor à manipulação da coluna, ou em raças condrodistróficas (Dachshund). Nesses casos: RM de emergência para avaliar compressão medular.' },
        ],
      }],
    },
  ],
};
