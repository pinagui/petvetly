import type { Category } from './types';
export const catMedicamentos: Category = {
  id: 'medicamentos', name: 'Medicamentos — O Que É Seguro e O Que É Perigoso', emoji: '💊', gradient: 'g-red',
  description: 'Quais remédios humanos são tóxicos para cão, doses permitidas e interações',
  conditions: [
    {
      id: 'toxicidade-medicamentos', name: 'Medicamentos Tóxicos para Cão', emoji: '☠️', gradient: 'g-red',
      description: 'Paracetamol, ibuprofeno, ácido acetilsalicílico — intoxicação medicamentosa',
      prevalence: 'Intoxicação por medicamentos humanos é uma das emergências toxicológicas mais comuns em cães',
      protocols: [{
        id: 'p1', title: 'Protocolo Toxicidade Medicamentosa', subtitle: 'Tóxicos críticos, sinais de intoxicação e tratamento',
        stages: [
          { id: 's1', label: 'Ingestão Recente (< 2h)', urgency: 'emergency', description: 'Janela para indução de vômito.', signs: ['Ingestão confirmada ou suspeita de medicamento humano', 'Ainda sem sintomas (período de latência)', 'Veterinário IMEDIATAMENTE'] },
          { id: 's2', label: 'Intoxicação Estabelecida', urgency: 'emergency', description: 'Sinais de toxicidade orgânica em curso.', signs: ['Paracetamol: mucosas marrons, dispneia (metemoglobinemia)', 'AINE: vômito com sangue, insuficiência renal, ulceração GI', 'Benzo/sedativos: ataxia, sedação excessiva'] },
        ],
        triggers: ['Paracetamol (Tylenol): uma comprimido de 500mg pode ser fatal em cão de 10kg', 'Ibuprofeno: ulceração gastrointestinal e insuficiência renal', 'AAS: inibição plaquetária, toxicidade gastrointestinal', 'Antidepressivos: síndrome serotonérgica em cão'],
        steps: [
          { title: 'EMERGÊNCIA — Toxicidade medicamentosa', icon: '🚨', duration: 'Imediato',
            description: 'NÃO induzir vômito em casa. Veterinário IMEDIATAMENTE.',
            checklist: ['PARACETAMOL: Antídoto = N-acetilcisteína IV — VETERINÁRIO IMEDIATAMENTE', 'IBUPROFENO: Suporte renal intensivo, inibidores de ácido', 'AAS: Suporte GI, monitoramento de coagulação', 'NÃO: Indução de vômito em casa sem orientação veterinária', 'DISCLOSE: qual medicamento, qual dose, há quanto tempo', 'CARVÃO ATIVADO: veterinário pode usar para absorção nas primeiras 2h'] },
        ],
        checklists: [{ label: 'Prevenção de Intoxicação', freq: 'daily', items: ['Medicamentos guardados em gavetas fechadas?', 'Bolsa e mochila fora do alcance do cão?', 'Família informada: nunca dar remédio humano sem orientar?', 'Número do CEVAP/toxicologia veterinária salvo?'] }],
        weeklyPlan: [
          { day: 1, label: 'URGÊNCIA — Ingesta Suspeita', tasks: ['Veterinário de emergência IMEDIATAMENTE', 'Informar: qual med, dose, hora', 'Não perder tempo com medidas caseiras'] },
          { day: 2, label: 'Prevenção', tasks: ['Medicamentos em armário fechado com trava', 'Bolsa sempre guardada (ibuprofeno, paracetamol nas bolsas)', 'CEVAP: 0800-722-6001 (Centro de Informações Toxicológicas)'] },
        ],
        vetAlert: ['Mucosas marrons (paracetamol)', 'Vômito com sangue após AINE', 'Convulsão após antidepressivo ou benzodiazepínico'],
        prevention: ['Medicamentos em local seguro e inacessível', 'Nunca automedicar o cão com humano sem orientação', 'CEVAP no contato em caso de acidente'],
        myths: [{ myth: 'Uma dose pequena de paracetamol não faz mal ao cão', truth: 'FALSO. Paracetamol é altamente tóxico para cão em qualquer dose. Uma pastilha de 500mg pode causar metemoglobinemia fatal em cão de 10kg. NÃO dar paracetamol, ibuprofeno, naproxeno ou diclofenaco para cão.' }],
        faq: [
          { q: 'Quais medicamentos humanos são SEGUROS em cão?', a: 'Com orientação veterinária e dose adequada: omeprazol (1mg/kg), dipirona (25mg/kg), difenidramina (1mg/kg), loratadina (5-10mg/cão), metronidazol (padrão veterinário). NUNCA: paracetamol, ibuprofeno, naproxeno, diclofenaco, AAS em doses altas.' },
          { q: 'O que fazer se o cão comeu paracetamol há 1 hora?', a: 'Veterinário de emergência AGORA. O antídoto N-acetilcisteína deve ser dado precocemente — a janela é de horas. Cada minuto conta.' },
          { q: 'Xilitol (adoçante) é tóxico para cão?', a: 'Extremamente. Xilitol causa hipoglicemia grave e insuficiência hepática em cão. Alimentos com xilitol: gomas de mascar, manteiga de amendoim light, balas diet, alguns medicamentos. Verificar rótulo SEMPRE antes de dar manteiga de amendoim ao cão.' },
        ],
      }],
    },
    {
      id: 'medicamentos-seguros', name: 'Medicamentos de Uso Caseiro Seguro', emoji: '✅', gradient: 'g-emerald',
      description: 'O que o tutor pode usar em casa com orientação antes de ir ao veterinário',
      prevalence: 'Tutores frequentemente buscam orientação de primeiros socorros antes da consulta veterinária',
      protocols: [{
        id: 'p1', title: 'Guia de Primeiros Socorros Medicamentosos', subtitle: 'Medicamentos de suporte que podem ser usados por tutores com orientação',
        stages: [
          { id: 's1', label: 'Uso Seguro com Orientação', urgency: 'low', description: 'Situações que permitem suporte em casa.', signs: ['Diarreia leve sem sangue', 'Vômito esporádico', 'Picada de inseto leve', 'Febre moderada < 40°C'] },
        ],
        triggers: ['Diarreia aguda', 'Reação alérgica leve', 'Vômito sem causa grave'],
        steps: [
          { title: 'Guia prático de emergência', icon: '✅', duration: 'Primeiros socorros',
            description: 'Medicamentos que tutores podem usar ANTES do veterinário nas situações corretas.',
            checklist: ['DIARREIA LEVE: probiótico veterinário + dieta bland + hidratação oral', 'VÔMITO LEVE: jejum 4-6h + dieta bland gradual', 'ALERGIA LEVE (picada de abelha): difenidramina 1mg/kg VO', 'FEBRE 39-40°C: dipirona 25mg/kg + hidratação (SEM paracetamol)', 'FERIDA SUPERFICIAL: soro fisiológico + curativo limpo', 'CONSTIPAÇÃO: lactulose 0,5ml/kg + fibra na dieta', 'TODOS os casos: veterinário se não melhora em 24-48h'] },
        ],
        checklists: [{ label: 'Kit de Primeiros Socorros', freq: 'monthly', items: ['Soro fisiológico em casa?', 'Gaze e atadura?', 'Difenidramina?', 'Mel (para hipoglicemia toy)?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Monte o Kit', tasks: ['Soro fisiológico (2 frascos)', 'Gaze e atadura de crepe', 'Termômetro retal digital', 'Luva descartável'] },
          { day: 2, label: 'Dia 2 — Medicamentos Básicos', tasks: ['Probiótico veterinário (FortiFlora)', 'Dipirona comprimido 500mg', 'Difenidramina (Benadryl) sem efedrina', 'Mel (para raça toy)'] },
          { day: 3, label: 'Dia 3 — Contatos', tasks: ['Veterinário habitual', 'Veterinário de emergência 24h', 'CEVAP: 0800-722-6001'] },
          { day: 4, label: 'Dia 4 — Treinar a Família', tasks: ['Família sabe medir temperatura retal?', 'Sabe identificar febre?', 'Sabe fazer curativo básico?'] },
        ],
        vetAlert: ['Qualquer medicamento sem ter certeza da dose e indicação: ligar para o veterinário antes'],
        prevention: ['Kit de primeiros socorros sempre atualizado', 'Veterinário contatado antes de qualquer medicamento novo'],
        myths: [{ myth: 'Medicamento natural (homeopático, fitoterápico) não tem efeito em cão', truth: 'Alguns fitoterápicos têm atividade farmacológica real e podem ter interações com outros medicamentos. Erva de São João, por exemplo, interfere com vários fármacos. Sempre informar ao veterinário sobre qualquer produto natural em uso.' }],
        faq: [
          { q: 'Posso dar losartana ou remédio para pressão ao cão?', a: 'NUNCA sem prescrição veterinária. Anti-hipertensivos para cão existem (amlodipina, benazepril), mas doses e indicações diferem do humano. Dose humana pode causar hipotensão grave.' },
          { q: 'Cão pode tomar antialérgico como loratadina?', a: 'Loratadina: uso off-label em cão, com alguma eficácia (5mg para cão < 10kg, 10mg para > 10kg). Sem sedação (diferente de difenidramina). Mas a causa da alergia precisa ser identificada pelo veterinário.' },
        ],
      }],
    },
  ],
};
