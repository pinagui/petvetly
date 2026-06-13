import type { Category } from './types';
export const catCheckAnual: Category = {
  id: 'check-anual', name: 'Check-up e Medicina Preventiva', emoji: '🩺', gradient: 'g-teal',
  description: 'O que verificar anualmente, exames preventivos por faixa etária e medicina proativa',
  conditions: [
    {
      id: 'checkup-adulto', name: 'Check-up do Adulto Saudável', emoji: '📋', gradient: 'g-teal',
      description: 'Consulta anual que detecta doenças silenciosas antes dos sintomas',
      prevalence: 'Doenças renais, dentais e tumorais são detectadas 1-3 anos mais cedo com check-up anual',
      protocols: [{
        id: 'p1', title: 'Protocolo Check-up Anual', subtitle: 'Exames mínimos, vacinação e avaliação completa por faixa etária',
        stages: [
          { id: 's1', label: 'Adulto Jovem (1-5 anos)', urgency: 'low', description: 'Check-up básico anual.', signs: ['Sem sintomas — check-up preventivo', 'Vacinação de reforço', 'Vermifugação', 'Avaliação clínica geral'] },
          { id: 's2', label: 'Pré-Sênior (5-7 anos)', urgency: 'low', description: 'Exames laboratoriais começam a ser mais relevantes.', signs: ['Sem sintomas mas rastreamento preventivo', 'Hemograma e bioquímica como baseline', 'Pressão arterial aferida', 'Exame dental minucioso'] },
        ],
        triggers: ['Aniversário anual do pet', 'Mudança de fase de vida', 'Raças predispostas a doenças específicas'],
        steps: [
          { title: 'Check-up anual mínimo', icon: '📋', duration: 'Anual',
            description: 'O que deve ser feito no check-up de todo adulto saudável.',
            checklist: ['Exame físico completo: peso, temperatura, auscultação', 'Avaliação dental: tártaro, gengivite', 'Palpação abdominal e linfonodos', 'Vacinação de reforço conforme protocolo', 'Vermifugação + antiparasitário externo em dia', 'Hemograma e bioquímica: a partir dos 5 anos (anual)', 'Urinálise: a partir dos 5 anos', 'Pressão arterial: a partir dos 7 anos'] },
          { title: 'Exames adicionais por raça', icon: '🔬', duration: 'Conforme risco',
            description: 'Raças predispostas merecem rastreamento adicional.',
            checklist: ['Golden, Labrador: ecocardiograma a partir de 5 anos', 'Dachshund, Basset: avaliação neurológica', 'Boxer: ECG (cardiomiopatia arritmogênica)', 'Pastor Alemão: raio-x de quadril (displasia)', 'Yorkshire, Maltese: dental rigoroso semestral', 'Rottweiler, Dobermann: titulação de anticorpos vacinais'] },
        ],
        checklists: [{ label: 'Check-up Anual', freq: 'monthly', items: ['Último check-up foi há < 1 ano?', 'Vacinação em dia?', 'Vermifugação trimestral em dia?', 'Antiparasitário externo mensal em dia?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Agendar', tasks: ['Agendar check-up anual', 'Listar perguntas e observações do ano', 'Preparar caderneta vacinal'], note: 'Doenças crônicas detectadas cedo custam menos e têm melhor prognóstico' },
          { day: 2, label: 'Dia 2 — Antes da Consulta', tasks: ['Coleta de fezes para coproparasitológico', 'Coleta de urina se indicado', 'Registrar peso em casa'] },
          { day: 3, label: 'Dia 3 — Consulta', tasks: ['Exame físico completo', 'Solicitação de exames conforme faixa etária', 'Vacinação e vermifugação realizadas?'] },
          { day: 4, label: 'Dia 4 — Exames Laboratoriais', tasks: ['Hemograma e bioquímica realizados?', 'Urinálise se indicada', 'Coproparasitológico entregue?'] },
          { day: 5, label: 'Dia 5 — Resultados', tasks: ['Valores alterados?', 'Tratamento ou monitoramento iniciado?', 'Próximo controle definido?'] },
          { day: 6, label: 'Dia 6 — Dental', tasks: ['Estado dental avaliado?', 'Profilaxia indicada?', 'Agendar limpeza dental se necessário'] },
          { day: 7, label: 'Dia 7 — Documentação', tasks: ['Caderneta atualizada', 'Próximas datas anotadas', 'App de lembretes configurado?'] },
        ],
        vetAlert: ['Alteração laboratorial significativa', 'Sopro cardíaco identificado', 'Linfonodo palpável anormal'],
        prevention: ['Check-up anual é a prevenção mais eficaz', 'Rastreamento específico por raça economiza vidas e dinheiro'],
        myths: [{ myth: 'Cão saudável não precisa de médico veterinário', truth: 'Doenças silenciosas (renal, cardíaca, dental, tumores) são comuns em cões aparentemente saudáveis. Check-up anual detecta antes dos sintomas, quando tratamento é mais efetivo.' }],
        faq: [
          { q: 'Com que frequência fazer hemograma em cão saudável?', a: 'Cão jovem (1-4 anos) saudável: bianual ou anual é suficiente. Adulto 5-7 anos: anual. Sênior > 7-8 anos: semestral. Cão em medicação crônica: conforme orientação veterinária.' },
          { q: 'Ultrassom preventivo é recomendado?', a: 'Para raças predispostas a hepatopatia, esplenomegalia, tumores abdominais (Golden, Pastor, Rottweiler): sim, a partir dos 7 anos. Para cães jovens sem predisposição: não é exame de rastreio padrão, mas pode ser feito.' },
          { q: 'Meu cão foi ao vet só nas vacinas — isso conta como check-up?', a: 'Vacinação sem exame físico completo não é check-up. Check-up inclui ausculta cardíaca e pulmonar, palpação abdominal, avaliação dental, linfonodos, peso. Muitos problemas são detectados só com a palpação.' },
        ],
      }],
    },
    {
      id: 'microchip-identificacao', name: 'Microchip e Identificação', emoji: '📡', gradient: 'g-indigo',
      description: 'Como funciona o microchip, registro nacional e importância da identificação',
      prevalence: 'Apenas 30% dos cães no Brasil têm microchip; 75% dos perdidos sem ID nunca retornam',
      protocols: [{
        id: 'p1', title: 'Protocolo Microchip e Identificação', subtitle: 'Implantação, registro e atualização de dados',
        stages: [
          { id: 's1', label: 'Sem Microchip', urgency: 'low', description: 'Cão sem identificação permanente.', signs: ['Sem número de chip', 'Coleira com plaquinha como única ID', 'Sem registro em banco nacional'] },
          { id: 's2', label: 'Com Microchip', urgency: 'low', description: 'Chip implantado mas sem registro ou dados desatualizados.', signs: ['Chip presente mas cadastro desatualizado', 'Telefone do tutor antigo no registro', 'Chip implantado mas não registrado'] },
        ],
        triggers: ['Cão sem identificação se perde', 'Viagem ou mudança de endereço', 'Transferência de propriedade'],
        steps: [
          { title: 'Implantação e registro', icon: '📡', duration: 'Único procedimento',
            description: 'Microchip ISO 11784/11785 (padrão internacional) implantado pelo veterinário.',
            checklist: ['Microchip ISO 11784/11785 (padrão internacional de 15 dígitos)', 'Implante subcutâneo no pescoço: procedimento rápido e pouco doloroso', 'Registro em banco nacional: SINID, SISID ou municipal', 'Atualizar a cada mudança de endereço ou telefone', 'Coleira com plaquinha: complemento (não substituto)', 'Coleira com QR code: tendência crescente e prática'] },
        ],
        checklists: [{ label: 'Atualização de Identificação', freq: 'monthly', items: ['Microchip implantado e registrado?', 'Dados do registro atualizados?', 'Plaquinha de identificação legível na coleira?', 'Coleira no cão em passeios?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Verificar Situação Atual', tasks: ['Cão tem microchip?', 'Verificar com leitor na clínica veterinária', 'Dados registrados estão atualizados?'], note: 'Microchip implantado sem registro = inutilizado' },
          { day: 2, label: 'Dia 2 — Implantação (Se Necessário)', tasks: ['Procedimento realizado pelo médico veterinário', 'Área de implante: nuca, subcutâneo', 'Verificar leitura imediata pós-implante'], note: 'Implantação = uma picada de agulha. O cão não sente mais que isso' },
          { day: 3, label: 'Dia 3 — Registro Nacional', tasks: ['Registrar no SINID (sinid.br) ou banco municipal', 'Dados: nome, endereço, telefone, foto do cão', 'Confirmação por email recebida?'] },
          { day: 4, label: 'Dia 4 — Coleira e Plaquinha', tasks: ['Plaquinha com nome e telefone legível?', 'Coleira segura mas não apertada?', 'QR code ou NFC tag na coleira?'] },
          { day: 5, label: 'Dia 5 — Atualização', tasks: ['Mudou de telefone? Atualizar no registro', 'Mudou de endereço? Atualizar', 'Foto atual do cão no registro?'] },
          { day: 6, label: 'Dia 6 — Educar Família', tasks: ['Família sabe o número do microchip?', 'Foto recente do cão disponível (se perder)?', 'Contato da ONG local de resgate de cães anotado?'] },
          { day: 7, label: 'Dia 7 — Documentação', tasks: ['Caderneta com número do chip anotado?', 'Registro online com senha guardada?', 'Histórico vacinal digitalizado?'] },
        ],
        vetAlert: ['Cão perdido sem microchip: identificação quase impossível', 'Cão encontrado: levar ao vet mais próximo para leitura do chip'],
        prevention: ['Microchip na primeira consulta veterinária (a partir de 6-8 semanas)', 'Atualizar dados a cada mudança de contato ou endereço'],
        myths: [{ myth: 'Microchip é um rastreador GPS', truth: 'Microchip é identificação passiva — responde quando um leitor é aproximado. Não transmite localização. Para rastreamento em tempo real, existem coleiras GPS separadas.' }],
        faq: [
          { q: 'O microchip pode migrar no corpo do cão?', a: 'Raramente. Em menos de 1% dos casos, o chip migra alguns centímetros do ponto de implante. Não causa dano ao cão. Por isso, ao verificar o chip, o leitor deve varrer toda a região do pescoço e parte superior do dorso.' },
          { q: 'Preciso de microchip para viajar com meu cão para o exterior?', a: 'Para a maioria dos países europeus e vários outros: obrigatório. Deve ser implantado ANTES da vacinação anti-rábica para ter validade. Verificar exigências específicas do país de destino com antecedência de pelo menos 3 meses.' },
          { q: 'Onde posso verificar se meu cão perdido foi encontrado?', a: 'SINID (sinid.br), ONG Cão Sem Dono, grupos do Facebook da sua cidade, redes sociais locais, veterinários e CCZ municipais. Publicar foto nas redes com localização e contato.' },
        ],
      }],
    },
  ],
};
