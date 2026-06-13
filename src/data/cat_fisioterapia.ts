import type { Category } from './types';

export const catFisioterapia: Category = {
  id: 'fisioterapia', name: 'Fisioterapia e Reabilitação', emoji: '🏊', gradient: 'g-cyan',
  description: 'Hidroterapia, acupuntura, reabilitação pós-cirúrgica e geriatria ativa',
  conditions: [
    {
      id: 'hidroterapia', name: 'Hidroterapia Canina', emoji: '💧', gradient: 'g-blue',
      description: 'Reabilitação aquática — indicada para pós-operatório, artrose, displasia e neurológico',
      prevalence: 'Indicação crescente — disponível em clínicas especializadas de fisioterapia veterinária',
      protocols: [{
        id: 'p1', title: 'Protocolo Hidroterapia', subtitle: 'Esteira aquática e nado terapêutico para reabilitação',
        stages: [
          { id: 's1', label: 'Pós-Cirúrgico', urgency: 'low', description: 'Início 3ª semana após cirurgia ortopédica.', signs: ['Cirurgia de LCC, displasia, fratura há 2-3 semanas', 'Atrofia muscular pós-repouso', 'Claudicação residual após cirurgia', 'Articulação rígida pós-imobilização'] },
          { id: 's2', label: 'Crônico/Artrose', urgency: 'low', description: 'Manutenção para artrose, displasia e déficit neurológico.', signs: ['Displasia coxofemoral grau 2-3', 'Artrose estabelecida', 'Mielopatia degenerativa', 'Hernia discal (pós-cirurgia ou conservativo)'] },
        ],
        triggers: ['Pós-cirúrgico ortopédico', 'Artrose e displasia crônica', 'Sobrepeso com limitação de exercício terrestre', 'Doenças neurológicas (mielopatia, hérnia discal)'],
        steps: [
          { title: 'Avaliação e protocolo inicial', icon: '📋', duration: 'Avaliação',
            description: 'Fisioterapeuta veterinário avalia amplitude de movimento, força muscular e plano de tratamento.',
            checklist: ['Avaliação fisioterapêutica completa', 'Amplitude de movimento de cada articulação', 'Massa muscular e simetria', 'Esteira aquática: início 5-10 min, aumento gradual', 'Frequência recomendada: 2-3 sessões/semana', 'Temperatura da água: 30-32°C (terapêutica)'] },
          { title: 'Sessões de hidroterapia', icon: '🏊', duration: 'Sessões semanais',
            description: 'Esteira subaquática é o equipamento padrão para cães com dificuldade de natação.',
            checklist: ['Esteira aquática: marcha com suporte de flutuabilidade', 'Natação: para cães com coordenação preservada', 'Exercícios de equilíbrio: bola Bosu, pranchas instáveis', 'Eletroterapia (TENS, NMES) para atrofia muscular', 'Laser terapêutico de baixa intensidade: analgesia e cicatrização', 'Exercícios em casa entre sessões'] },
        ],
        checklists: [
          { label: 'Exercícios em Casa (entre sessões)', freq: 'daily', items: ['Caminhada 15-20 min em terreno plano?', 'Exercícios passivos de amplitude?', 'Massagem suave na musculatura afetada?', 'Cão usa o membro mais que ontem?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — 1ª Sessão', tasks: ['Avaliação inicial', 'Esteira aquática 5 min (temperatura e cão se adaptando)', 'Observar tolerância e resposta'], note: 'Primeira sessão é sempre de adaptação' },
          { day: 2, label: 'Dia 2 — Exercícios em Casa', tasks: ['Caminhada 15 min terreno plano', 'Exercício passivo de amplitude 10x cada articulação', 'Massagem 5 min na musculatura afetada'] },
          { day: 3, label: 'Dia 3 — 2ª Sessão', tasks: ['Esteira aquática 8-10 min', 'Laser terapêutico se disponível', 'Avaliar progresso vs. sessão 1'] },
          { day: 4, label: 'Dia 4 — Descanso Ativo', tasks: ['Caminhada curta', 'Monitorar uso espontâneo do membro', 'Registrar melhoras observadas'] },
          { day: 5, label: 'Dia 5 — 3ª Sessão', tasks: ['Esteira 10-12 min', 'Exercícios de equilíbrio (se estável)', 'TENS ou NMES para atrofia muscular se indicado'] },
          { day: 6, label: 'Dia 6 — Avaliação da Semana', tasks: ['Cão usa o membro mais que no início?', 'Amplitude de movimento melhorou?', 'Massa muscular aumentando?'] },
          { day: 7, label: 'Dia 7 — Planejamento', tasks: ['Relatar progressos ao fisioterapeuta', 'Ajustar protocolo da próxima semana', 'Fotos comparativas de marcha'], note: 'Progresso mensurado em semanas, não dias' },
        ],
        vetAlert: ['Ferida aberta na área a ser imersa', 'Infecção ativa', 'Cão com medo extremo de água — não forçar'],
        prevention: ['Hidroterapia preventiva para raças predispostas a displasia (Labrador, Golden)', 'Manutenção pós-reabilitação para não perder os ganhos'],
        myths: [
          { myth: 'Banho de banheira equivale à hidroterapia', truth: 'Hidroterapia utiliza temperaturas terapêuticas específicas, imersão controlada e exercícios dirigidos. O banho doméstico não tem os mesmos benefícios nem a supervisão de um fisioterapeuta veterinário.' },
        ],
        faq: [
          { q: 'Quantas sessões de hidroterapia são necessárias?', a: 'Pós-cirúrgico típico: 8-12 sessões ao longo de 4-6 semanas. Para condições crônicas (artrose, mielopatia), sessões de manutenção 1-2x/semana por tempo indefinido são benéficas.' },
        ],
      }],
    },
    {
      id: 'acupuntura-veterinaria', name: 'Acupuntura Veterinária', emoji: '📍', gradient: 'g-amber',
      description: 'Medicina tradicional chinesa adaptada para veterinária — evidência crescente para dor crônica',
      prevalence: 'Especialidade reconhecida pelo CFMV; disponível em clínicas especializadas',
      protocols: [{
        id: 'p1', title: 'Protocolo Acupuntura Veterinária', subtitle: 'Indicações, frequência e integração com medicina convencional',
        stages: [
          { id: 's1', label: 'Indicações Primárias', urgency: 'low', description: 'Condições com melhor evidência para acupuntura.', signs: ['Dor musculoesquelética crônica', 'Osteoartrite e artrose', 'Espondilose vertebral', 'Pós-operatório ortopédico'] },
          { id: 's2', label: 'Indicações Secundárias', urgency: 'low', description: 'Evidência emergente — uso adjuvante.', signs: ['Epilepsia (adjuvante)', 'Doenças gastrointestinais crônicas (IBD)', 'Doenças dermatológicas crônicas', 'Déficit neurológico leve'] },
        ],
        triggers: ['Dor crônica refratária a NSAID', 'Cão com contraindicação a anti-inflamatórios (renal, gástrico)', 'Busca por abordagem integrativa', 'Mielopatia e déficit neurológico'],
        steps: [
          { title: 'Avaliação e plano de tratamento', icon: '📋', duration: 'Inicial',
            description: 'Médico veterinário com especialização em acupuntura avalia pontos e frequência.',
            checklist: ['Anamnese completa — padrão energético (MTC)', 'Diagnóstico convencional confirmado antes', 'Agulhas estéreis descartáveis (tamanho por porte do animal)', 'Sessão inicial: 15-30 min (alguns cães dormem durante)', 'Frequência: semanal (fase aguda), quinzenal/mensal (manutenção)', 'Acupuntura a laser: para cães com medo de agulhas'] },
        ],
        checklists: [
          { label: 'Pós-Sessão', freq: 'daily', items: ['Cão dormiu bem?', 'Parece mais relaxado?', 'Claudicação ou dor melhorou?', 'Próxima sessão agendada?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — 1ª Sessão', tasks: ['Anamnese MTC e convencional', '10-15 agulhas em pontos específicos', 'Duração: 15-20 min (1ª vez)', 'Cão possivelmente sonolento após — normal'], note: 'Sonolência pós-sessão = resposta ao tratamento' },
          { day: 2, label: 'Dia 2 — Observação', tasks: ['Dor parece igual, melhor ou pior?', 'Comportamento geral?', 'Documenta para relatar ao acupunturista'] },
          { day: 3, label: 'Dia 3 — Exercício Suave', tasks: ['Caminhada curta', 'Observar marcha — melhora notável?', 'Integração com fisioterapia se disponível'] },
          { day: 4, label: 'Dia 4 — Avaliação Parcial', tasks: ['Após 1ª sessão, dor 10-30% melhor é esperado', 'Se piorou transitoriamente: resposta normal em MTC', 'Manter medicação convencional'] },
          { day: 5, label: 'Dia 5 — Preparação para 2ª Sessão', tasks: ['Anotar todas as mudanças observadas', 'Listar medicações atuais para o acupunturista', 'Chegada tranquila (cão deve estar calmo)'] },
          { day: 6, label: 'Dia 6 — 2ª Sessão', tasks: ['Relatar observações da semana', '2ª sessão: pontos podem variar conforme resposta', 'Duração pode aumentar para 30 min'] },
          { day: 7, label: 'Dia 7 — Avaliação de Resposta', tasks: ['Após 2 sessões: dor significativamente melhor?', 'Pode reduzir NSAID com aval do veterinário?', 'Planejar frequência de manutenção'], note: 'Resposta plena em 4-6 sessões na maioria dos casos' },
        ],
        vetAlert: ['Usar apenas com veterinário certificado em acupuntura', 'Não substituir diagnóstico convencional por MTC', 'Contraindicado em gravidez, infecção local e tumor em área de puntura'],
        prevention: ['Acupuntura preventiva em cães geriátricos ou de raças predispostas a artropatias', 'Sessões mensais de manutenção prolongam os benefícios'],
        myths: [
          { myth: 'Acupuntura veterinária não tem evidência científica', truth: 'Há estudos controlados demonstrando redução de dor, melhora de mobilidade e redução do uso de opioide pós-cirúrgico com acupuntura veterinária. A WSAVA a reconhece como terapia adjuvante com evidência emergente.' },
        ],
        faq: [
          { q: 'A acupuntura dói no cão?', a: 'A maioria dos cães tolera bem as agulhas. Muitos ficam relaxados e até dormem durante a sessão. Para cães muito sensíveis, existe acupuntura a laser (sem agulhas) como alternativa.' },
        ],
      }],
    },
    {
      id: 'reabilitacao-pos-cirurgica', name: 'Reabilitação Pós-Cirúrgica', emoji: '🏋️', gradient: 'g-emerald',
      description: 'Protocolo completo de reabilitação após cirurgias ortopédicas e neurológicas',
      prevalence: 'Indicado para qualquer cirurgia maior — acelera recuperação e melhora resultado final',
      protocols: [{
        id: 'p1', title: 'Protocolo Reabilitação Completa', subtitle: 'Da alta cirúrgica ao retorno pleno à atividade',
        stages: [
          { id: 's1', label: 'Fase 1 (Dias 1-14)', urgency: 'low', description: 'Controle de dor e edema, exercícios passivos.', signs: ['Pós-operatório imediato', 'Atrofia muscular inicial', 'Amplitude de movimento reduzida', 'Apoio mínimo no membro'] },
          { id: 's2', label: 'Fase 2 (Semanas 3-8)', urgency: 'low', description: 'Fortalecimento muscular progressivo e propriocepção.', signs: ['Apoio crescente no membro', 'Força muscular recuperando', 'Marcha melhorando progressivamente', 'Retorno gradual ao exercício'] },
        ],
        triggers: ['Cirurgia TPLO ou TTA (LCC)', 'Cirurgia de displasia coxofemoral', 'Hemilaminectomia (hérnia discal)', 'Fratura com fixação interna'],
        steps: [
          { title: 'Fase 1 — Controle de inflamação', icon: '❄️', duration: 'Semanas 1-2',
            description: 'Gelo, exercícios passivos e curtos passeios para fazer necessidades.',
            checklist: ['Gelo 10 min 2-3x/dia na incisão nos primeiros 3 dias', 'Exercícios passivos de amplitude: 10-15 repetições cada articulação, 3x/dia', 'Passeios 5 min 3x/dia apenas para necessidades', 'Anti-inflamatório conforme prescrito', 'Colar elizabetano e restrição rigorosa'] },
          { title: 'Fase 2 — Fortalecimento', icon: '💪', duration: 'Semanas 3-8',
            description: 'Aumento progressivo do exercício, hidroterapia e propriocepção.',
            checklist: ['Caminhadas progressivas: 10 → 20 → 30 min ao longo das semanas', 'Esteira aquática: 2x/semana', 'Superfícies instáveis: almofadas e pranchas de equilíbrio', 'Subida de escadas controlada a partir da 6ª semana', 'Sem corrida, saltos ou brincadeiras até liberação cirúrgica (12-16 semanas)'] },
        ],
        checklists: [
          { label: 'Progresso Semanal', freq: 'daily', items: ['Cão apoia mais o membro que na semana anterior?', 'Claudicação melhorando ou estacionada?', 'Exercícios do dia realizados?', 'Massa muscular visivelmente aumentando?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1-3 — Controle de Edema', tasks: ['Gelo 10 min 3x/dia', 'Repouso total com passeios curtos (necessidades)', 'Anti-inflamatório', 'Verificar incisão'] },
          { day: 2, label: 'Dia 4-7 — Início dos Passivos', tasks: ['Exercícios passivos 15x cada articulação 3x/dia', 'Caminhadas 5 min 3x/dia', 'Massagem suave na musculatura'] },
          { day: 3, label: 'Semana 2 — Progresso', tasks: ['Aumentar caminhadas para 8-10 min', 'Observar apoio espontâneo', 'Retorno cirúrgico para avaliação'] },
          { day: 4, label: 'Semana 3 — Hidroterapia', tasks: ['Iniciar esteira aquática', 'Caminhadas 15 min terreno plano', 'Laser terapêutico se disponível'] },
          { day: 5, label: 'Semana 4-6 — Fortalecimento', tasks: ['20-25 min caminhada/dia', 'Superfícies instáveis (5 min)', 'Esteira aquática 2x/semana'] },
          { day: 6, label: 'Semana 7-8 — Avançado', tasks: ['30 min caminhada/dia', 'Pequenas inclinações', 'Trot controlado permitido'] },
          { day: 7, label: 'Semana 12-16 — Alta', tasks: ['Radiografia de controle', 'Função normal restaurada?', 'Atividade plena liberada pelo cirurgião'], note: 'Musculatura completa retorna em 3-4 meses' },
        ],
        vetAlert: ['Claudicação que piora após dias de melhora', 'Incisão que abre ou tem secreção', 'Cão que gane peso durante a reabilitação (aumenta carga)'],
        prevention: ['Reabilitação é prevenção de resultado ruim', 'Sem reabilitação: atrofia muscular e osteoartrite acelerada', 'Fisioterapeuta veterinário credenciado faz diferença significativa'],
        myths: [
          { myth: 'Repouso total por 2 meses é o melhor pós-cirúrgico', truth: 'Repouso excessivo causa atrofia muscular, rigidez articular e deterioração mental. Exercícios progressivos e controlados são superiores ao repouso total após a 2ª semana.' },
        ],
        faq: [
          { q: 'Preciso de fisioterapeuta veterinário ou posso fazer em casa?', a: 'Exercícios simples em casa (passivos, caminhadas) podem ser feitos pelo tutor com instrução. Hidroterapia, eletroterapia e laser requerem equipamento especializado. O ideal é combinar sessões supervisionadas com exercícios domiciliares.' },
        ],
      }],
    },
    {
      id: 'geriatria-ativa', name: 'Geriatria Ativa: Qualidade de Vida do Idoso', emoji: '👴', gradient: 'g-purple',
      description: 'Plano completo de bem-estar para cães geriátricos — exercício, dieta, enriquecimento e medicina preventiva',
      prevalence: 'Cão idoso = > 7 anos raças grandes, > 9 anos raças pequenas; 30-40% dos cães atendidos',
      protocols: [{
        id: 'p1', title: 'Protocolo Geriatria Ativa', subtitle: 'Medicina preventiva, mobilidade e qualidade de vida no idoso',
        stages: [
          { id: 's1', label: 'Idoso Saudável', urgency: 'low', description: 'Cão idoso sem doença evidente — medicina preventiva.', signs: ['Sem sintomas aparentes', 'Ritmo mais lento que antes', 'Pode ter artrose leve', 'Exames laboratoriais normais'] },
          { id: 's2', label: 'Idoso Multimórbido', urgency: 'moderate', description: 'Múltiplas condições simultâneas — abordagem integrada.', signs: ['2+ condições crônicas', 'Múltiplas medicações', 'Perda de massa muscular (sarcopenia)', 'Déficit cognitivo (confusão, desorientação)'] },
        ],
        triggers: ['Envelhecimento natural', 'Redução do exercício → perda muscular → mais dor → menos exercício (ciclo vicioso)', 'Doenças crônicas acumuladas', 'Mudanças cognitivas e sensoriais'],
        steps: [
          { title: 'Check-up geriátrico semestral', icon: '🩺', duration: 'Semestral',
            description: 'Exames semestrais para detecção precoce de doenças no idoso.',
            checklist: ['Hemograma e bioquímica semestral', 'T4 e hormônios tireoidianos (hipotireoidismo comum)', 'Proteinúria (início de doença renal)', 'Pressão arterial (hipertensão em 30% dos idosos)', 'Radiografia torácica anual (tumor e cardiomegalia)', 'Escala de dor geriátrica (HGPS)'] },
          { title: 'Exercício e enriquecimento', icon: '🧠', duration: 'Diário',
            description: 'Exercício adaptado e enriquecimento cognitivo são fundamentais para a longevidade.',
            checklist: ['Caminhadas curtas e frequentes: 2-3 x 15-20 min/dia', 'Natação ou hidroterapia: excelente para articulações', 'Jogos de farejar e busca: mantém cognição', 'Kong com patê: enriquecimento alimentar', 'Novos cheiros em passeios: estímulo sensorial', 'Interação social com outros cães adaptados'] },
        ],
        checklists: [
          { label: 'Check-in Diário do Idoso', freq: 'daily', items: ['Levantou sem dificuldade?', 'Comeu normalmente?', 'Bebeu água (monitorar pelo volume)?', 'Urinações normais?', 'Pareceu confuso ou desorientado?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação Geral', tasks: ['Escala de dor: 0 a 10', 'Massa muscular: costelas palpáveis?', 'Peso atual', 'Hidratação'], note: 'Cão idoso deve ser pesado mensalmente' },
          { day: 2, label: 'Dia 2 — Exercício Adaptado', tasks: ['2 caminhadas de 15 min', 'Terreno plano e macio', 'Parar se cansa ou claudica mais', 'Rampa para carro e sofá'] },
          { day: 3, label: 'Dia 3 — Nutrição Geriátrica', tasks: ['Ração geriátrica (menos calorias, mais proteína de qualidade)?', 'Suplemento omega-3 1-2g/10kg/dia?', 'Antioxidantes (vitamina E, selênio)?', 'Probiótico para saúde intestinal?'] },
          { day: 4, label: 'Dia 4 — Enriquecimento Cognitivo', tasks: ['Jogo de farejar (esconder petisco)?', 'Kong ou puzzle alimentar?', 'Passeio em local novo (cheiros novos)?'], note: 'Cognição é "use it or lose it" no cão idoso' },
          { day: 5, label: 'Dia 5 — Medicação e Suplementação', tasks: ['Todas as medicações dadas no horário?', 'Suplemento articular (condroitina/glucosamina)?', 'Consulta veterinária necessária?'] },
          { day: 6, label: 'Dia 6 — Ambiente Adaptado', tasks: ['Piso antiderrapante instalado?', 'Cama ortopédica de memória espuma?', 'Acesso fácil a água e comida (tigela elevada)?', 'Rampa no carro?'], note: 'Adaptações ambientais são medicina preventiva' },
          { day: 7, label: 'Dia 7 — Qualidade de Vida', tasks: ['Avaliação de QV: 1-10', 'Cão faz coisas que ama?', 'Dor bem controlada?', 'Conexão com o tutor?'], note: 'Qualidade de vida é o objetivo central da geriatria' },
        ],
        vetAlert: ['Perda de peso involuntária > 10% em 1 mês', 'Desorientação súbita ou latidos sem causa', 'Parada de comer por > 48h'],
        prevention: ['Check-up semestral após os 7-9 anos', 'Manter peso ideal ao longo da vida reduz artrose e doenças metabólicas', 'Exercício moderado e consistente ao longo de toda a vida'],
        myths: [
          { myth: '"Cão velho, deixa ficar quieto — é para descansar"', truth: 'Repouso excessivo em idosos acelera sarcopenia (perda muscular), artrose e declínio cognitivo. Exercício moderado e adaptado às condições do cão melhora qualidade e expectativa de vida.' },
        ],
        faq: [
          { q: 'Quando um cão é considerado "idoso"?', a: 'Raças pequenas (< 10kg): > 9-10 anos. Raças médias (10-25kg): > 8 anos. Raças grandes (> 25kg): > 7 anos. Raças gigantes (> 45kg): > 6 anos. A medicina geriátrica deve começar 1-2 anos antes desses limiares.' },
        ],
      }],
    },
  ],
};
