import type { Category } from './types';
export const catColuna: Category = {
  id: 'coluna', name: 'Coluna e Neurológico', emoji: '🦴', gradient: 'g-indigo',
  description: 'Hérnia discal, IVDD, paraplegia e doenças da coluna vertebral',
  conditions: [
    {
      id: 'hernia-discal', name: 'Hérnia Discal (IVDD)', emoji: '🦴', gradient: 'g-red',
      description: 'Doença do disco intervertebral — principal causa de paraplegia em cães de pernas curtas',
      prevalence: 'Dachshund (25% dos casos); também Beagle, Basset, Shih Tzu, Pekingese',
      protocols: [{
        id: 'p1', title: 'Protocolo IVDD', subtitle: 'Classificação neurológica, cirurgia vs. conservativo e reabilitação',
        stages: [
          { id: 's1', label: 'Grau 1-2 (Dor)', urgency: 'high', description: 'Dor vertebral sem déficit neurológico.', signs: ['Dor intensa ao toque na coluna', 'Relutância a subir escadas ou saltar', 'Postura curvada (escoliose por dor)', 'Choro ao se mover', 'Rigidez cervical ou lombar'] },
          { id: 's2', label: 'Grau 3-5 (Déficit Neurológico)', urgency: 'emergency', description: 'Paresia a paraplegia — cirurgia urgente.', signs: ['Membros arrastando', 'Perda de propriocepção', 'Incontinência urinária ou fecal', 'Ausência de dor profunda (grau 5 = urgência máxima)'] },
        ],
        triggers: ['Condrodistrofia em raças anãs (Dachshund, Basset)', 'Saltos de altura (sofá, cama)', 'Trauma direto', 'Envelhecimento e degeneração do disco'],
        steps: [
          { title: 'Avaliação neurológica urgente', icon: '🧠', duration: 'Urgente',
            description: 'Cada hora conta em IVDD grau 4-5 — a janela para cirurgia é de 24-48h.',
            checklist: ['Classificação neurológica imediata (grau 1 a 5)', 'TC ou RM para localização exata', 'Grau 1-2: conservativo (repouso, anti-inflamatório)', 'Grau 3-4: cirurgia de hemilaminectomia em até 24-48h', 'Grau 5 com dor profunda ausente > 48h: prognóstico ruim', 'Pré-cirúrgico: prednisolona apenas com orientação (controverso)'] },
          { title: 'Repouso e manejo conservativo (Grau 1-2)', icon: '🛏️', duration: '4-6 semanas',
            description: 'Canil pequeno, anti-inflamatório, analgésico e SEM subir/descer escadas.',
            checklist: ['Confinamento em canil pequeno (sem pulos ou corridas)', 'Meloxicam ou tramadol conforme prescrição', 'Sem escadas, sofá ou cama alta por 6 semanas', 'Passeios somente com guia (curtos)', 'Fisioterapia a partir da 3ª semana', 'Rampas para o resto da vida'] },
        ],
        checklists: [{ label: 'Monitoramento Neurológico Diário', freq: 'daily', items: ['Cão apoia os membros normalmente?', 'Incontinência urinária presente?', 'Dor ao toque na coluna?', 'Membro arrastando?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — URGÊNCIA', tasks: ['Avaliação veterinária IMEDIATA', 'Classificação grau 1-5', 'TC/RM para localização'], note: 'IVDD grau 4-5: cirurgia em < 24-48h para prognóstico favorável' },
          { day: 2, label: 'Dia 2 — Decisão Cirúrgica', tasks: ['Cirurgia indicada?', 'Referência para neurologista veterinário', 'Hemilaminectomia ou fenestração?'] },
          { day: 3, label: 'Dia 3 — Pós-Cirúrgico ou Repouso', tasks: ['Canil pequeno com repouso absoluto', 'Anti-inflamatório conforme prescrição', 'Expressão manual da bexiga se incontinente'] },
          { day: 4, label: 'Dia 4 — Avaliação Neurológica', tasks: ['Membros se movem mais que ontem?', 'Propriocepção: cão corrige o posicionamento?', 'Dor diminuindo?'] },
          { day: 5, label: 'Dia 5 — Prevenção de Atrofia', tasks: ['Fisioterapia passiva: mover membros gentilmente', 'Estação: apoiar o cão de pé 3x/dia', 'Estimulação tátil nas patas'] },
          { day: 6, label: 'Dia 6 — Bexiga e Intestino', tasks: ['Urina espontânea ou expressão manual?', 'Intestino funcionando?', 'Cuidado: bexiga cheia = infecção urinária', 'Sonda urinária se necessário'] },
          { day: 7, label: 'Dia 7 — Plano de Reabilitação', tasks: ['Hidroterapia a partir de quando?', 'Retorno neurológico: semanas a meses', 'Rampas instaladas? Sofá e cama vedados?'], note: 'Rampa para o resto da vida: previne recidiva' },
        ],
        vetAlert: ['Piora neurológica súbita', 'Paraplegia em Dachshund = EMERGÊNCIA CIRÚRGICA', 'Perda de sensibilidade profunda = janela de 24-48h'],
        prevention: ['Rampas para subir em sofá e cama (Dachshund)', 'Controle de peso rigoroso', 'Evitar saltos: escada de bebê, grades', 'Arnês no lugar de coleira em raças condrodistróficas'],
        myths: [{ myth: 'Dachshund paralítico nunca mais anda', truth: 'Com cirurgia em tempo hábil (< 24-48h) e fisioterapia, 80-90% dos grau 3-4 recuperam a marcha. Mesmo grau 5 com dor profunda ausente pode ter alguma recuperação com tratamento intensivo.' }],
        faq: [
          { q: 'Dachshund tem que usar roupa no inverno?', a: 'Sim! Raças com pernas curtas e pelo fino perdem calor rápido e têm predisposição a espasmos musculares no frio, que agravam a coluna. Roupa em dias < 18°C é funcional, não frescura.' },
          { q: 'Carrinho de rodas para cão paralítico: serve?', a: 'Sim, muito bem. Cão se adapta em dias, permite exercício, socialização e qualidade de vida excelente. Medidas específicas para o cão são fundamentais. Cão em cadeira de rodas vive muito bem.' },
          { q: 'Preciso fazer cirurgia ou repouso resolve?', a: 'Depende do grau. Grau 1-2 (só dor): conservativo com boa taxa de sucesso. Grau 3 (paresia): controverso — cirurgia tem resultado mais rápido e seguro. Grau 4-5 (paresia grave/plegia): cirurgia obrigatória em < 48h.' },
        ],
      }],
    },
    {
      id: 'estenose-lombossacra', name: 'Síndrome Cauda Equina e Estenose Lombossacra', emoji: '🐕', gradient: 'g-amber',
      description: 'Compressão da cauda equina — lamenta ao sentar, dificuldade de levantar a cauda',
      prevalence: 'Pastor Alemão, Labrador, Rottweiler — cães grandes predispostos',
      protocols: [{
        id: 'p1', title: 'Protocolo Síndrome Cauda Equina', subtitle: 'Diagnóstico por RM, manejo conservativo e cirurgia de descompressão',
        stages: [
          { id: 's1', label: 'Inicial', urgency: 'moderate', description: 'Dor ao sentar, relutância em pular.', signs: ['Lamentação ao sentar ou deitar', 'Relutância em subir escadas', 'Cauda carregada baixa', 'Dificuldade em levantar da posição sentada', 'Sensibilidade na região lombossacra'] },
          { id: 's2', label: 'Avançado', urgency: 'high', description: 'Déficit neurológico nos membros posteriores.', signs: ['Paresia posterior', 'Incontinência urinária ou fecal', 'Atrofia muscular de membros', 'Dor intensa constante'] },
        ],
        triggers: ['Estenose degenerativa lombossacra', 'Instabilidade da articulação lombossacra', 'Proliferação óssea osteofítica'],
        steps: [
          { title: 'Diagnóstico e tratamento', icon: '🔬', duration: 'Diagnóstico',
            description: 'RM é o padrão-ouro. TC detecta calcificação. Rx simples tem valor limitado.',
            checklist: ['RM lombossacra (padrão-ouro para compressão de partes moles)', 'Tratamento conservativo: repouso + anti-inflamatório 4-6 semanas', 'Injeção epidural de metilprednisolona: casos moderados', 'Cirurgia: laminectomia dorsale com foraminotomia', 'Fisioterapia: componente crucial do manejo'] },
        ],
        checklists: [{ label: 'Monitoramento Lombossacro', freq: 'daily', items: ['Cão senta sem lamenter?', 'Levanta sem auxílio?', 'Cauda tem movimento normal?', 'Incontinência presente?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação', tasks: ['Neurológico completo com veterinário', 'RM lombossacra agendada?', 'Anti-inflamatório iniciado para conforto'] },
          { day: 2, label: 'Dia 2 — Repouso', tasks: ['Sem escadas', 'Sem saltos', 'Restrição de atividade por 4-6 semanas'] },
          { day: 3, label: 'Dia 3 — Analgesia', tasks: ['Gabapentina para dor neuropática?', 'Meloxicam para inflamação?', 'Cão confortável?'] },
          { day: 4, label: 'Dia 4 — Peso', tasks: ['Cada kg extra = mais carga na lombossacra', 'Iniciar redução calórica se sobrepeso', 'Peso ideal protege a coluna'] },
          { day: 5, label: 'Dia 5 — Fisioterapia', tasks: ['Hidroterapia: sem impacto axial', 'Fortalecimento muscular estabilizador', 'TENS para dor neuropática'] },
          { day: 6, label: 'Dia 6 — Avaliação Cirúrgica', tasks: ['Sem resposta conservativa em 6 semanas → cirurgia', 'Deficit neurológico progressivo → cirurgia urgente', 'Cirurgião neurológico para avaliar'] },
          { day: 7, label: 'Dia 7 — Adaptações', tasks: ['Rampas instaladas?', 'Cama baixa (fácil acesso)?', 'Monitorar déficit neurológico mensalmente'] },
        ],
        vetAlert: ['Incontinência súbita', 'Piora neurológica rápida', 'Dor intratável com NSAID'],
        prevention: ['Controle de peso em raças predispostas', 'Sem saltos repetidos em alturas', 'Rastreamento em cães com sinais precoces'],
        myths: [{ myth: 'Cão que lamenta ao sentar tem artriti só', truth: 'Lamentação ao sentar em Pastor Alemão adulto deve levantar suspeita de síndrome cauda equina. É condição específica diferente de artrose — requer RM para diagnóstico e tratamento específico.' }],
        faq: [
          { q: 'Injeção epidural de corticoide funciona para cauda equina?', a: 'Sim, em casos selecionados. A injeção epidural de metilprednisolona proporciona alívio temporário em 60-70% dos casos moderados. Duração de 3-6 meses. Pode ser repetida. Alternativa à cirurgia em casos não graves.' },
          { q: 'Cirurgia de cauda equina tem bom resultado?', a: 'Em casos sem déficit grave: 80-90% de melhora da dor. Em casos com déficit neurológico leve: 70-80% de recuperação funcional. Melhor resultado quando realizada antes do déficit neurológico se instalar.' },
        ],
      }],
    },
  ],
};
