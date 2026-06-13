import type { Category } from './types';
export const catDentario: Category = {
  id: 'dentario', name: 'Saúde Dentária Completa', emoji: '🦷', gradient: 'g-blue',
  description: 'Escovação, tártaro, doença periodontal e higiene oral completa',
  conditions: [
    {
      id: 'escovacao-dental', name: 'Escovação Dental e Higiene Oral', emoji: '🪥', gradient: 'g-blue',
      description: 'Escovação diária previne 70% das doenças periodontais — a doença mais comum em cães',
      prevalence: '80% dos cães > 3 anos têm algum grau de doença periodontal; causa infecção sistêmica (rim, coração)',
      protocols: [{
        id: 'p1', title: 'Protocolo de Higiene Oral', subtitle: 'Escovação diária, enzimático e petiscos dentais',
        stages: [
          { id: 's1', label: 'Placa Dental', urgency: 'low', description: 'Filme bacteriano visível — reversível com escovação.', signs: ['Película amarelada nos dentes', 'Hálito levemente aumentado', 'Dentes com aspecto opaco'] },
          { id: 's2', label: 'Tártaro e Gengivite', urgency: 'moderate', description: 'Cálculo mineralizado — exige limpeza profissional.', signs: ['Depósito marrom/amarelo nos dentes', 'Gengiva vermelha e sangrante', 'Hálito fétido', 'Cão reluta a tocar a boca', 'Dificuldade para comer'] },
        ],
        triggers: ['Falta de escovação regular', 'Alimentação só com ração úmida', 'Dieta sem croquetes abrasivos', 'Raças braquicefálicas (dentes apinhados)'],
        steps: [
          { title: 'Como escavar o dente do cão', icon: '🪥', duration: 'Diário',
            description: 'Escova de silicone de dedo ou escova pequena, dentifrício veterinário.',
            checklist: ['NUNCA pasta de dente humana (flúor é tóxico para cão)', 'Dentifrício veterinário: sabores aceitos (frango, carne)', 'Escova de dedo de silicone: mais fácil para iniciantes', 'Movimento circular na junção dente-gengiva', 'Foco nos dentes caudais (molares e pré-molares)', 'Duração: 2-3 min por sessão', 'Frequência: idealmente diária, mínimo 3x/semana'] },
          { title: 'Alternativas para quem não aceita escovação', icon: '🦴', duration: 'Diário',
            description: 'Gel enzimático, água oral e petiscos dentais como complemento.',
            checklist: ['Gel enzimático oral (Logic, Enzymedent): aplicar com dedo', 'Clorexidina oral veterinária: spray ou gel', 'Petiscos dentais (Dentastix, Greenies): suplemento, não substituto', 'Brinquedos de borracha com ranhuras: auxiliam', 'Osso de couro (raw hide): cuidado com engolir pedaço'] },
        ],
        checklists: [{ label: 'Higiene Oral Diária', freq: 'daily', items: ['Escovação realizada?', 'Dentifrício veterinário usado?', 'Gengiva: cor rosada (não vermelha)?', 'Hálito: aceitável?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Habituação', tasks: ['Tocar a boca do cão sem escova (petisco)', 'Deixar lamber o dentifrício veterinário na escova', 'Não forçar nenhuma abertura de boca'], note: 'Semana 1 inteira só para habituar — paciência é essencial' },
          { day: 2, label: 'Dia 2 — Escova nos Dentes da Frente', tasks: ['Escova nos incisivos por 30 segundos', 'Petisco logo após', 'Sessão termina sempre positiva'], note: 'Terminar SEMPRE positivo, mesmo com pouco progresso' },
          { day: 3, label: 'Dia 3 — Molares', tasks: ['Avançar para pré-molares e molares (onde tártaro se acumula mais)', 'Movimento circular na gengiva', '1-2 min de escovação'] },
          { day: 4, label: 'Dia 4 — Rotina Completa', tasks: ['Escovação completa: 2-3 min', 'Todos os dentes acessados?', 'Cão cooperativo?'] },
          { day: 5, label: 'Dia 5 — Verificar Bocal', tasks: ['Olhar todos os dentes: cor, posição', 'Gengiva: avermelhada em algum ponto?', 'Dente fraturado ou faltando?'] },
          { day: 6, label: 'Dia 6 — Produtos Auxiliares', tasks: ['Gel enzimático nos molares posteriores (difíceis de escovar)', 'Petisco dental como recompensa pós-escovação'] },
          { day: 7, label: 'Dia 7 — Rotina Consolidada', tasks: ['Escovação parte da rotina noturna?', 'Cão aceita bem?', 'Exame dental profissional: agendar anualmente'], note: 'Profilaxia profissional a cada 12-18 meses mesmo com escovação' },
        ],
        vetAlert: ['Dente fraturado', 'Sangramento gengival excessivo', 'Cão que para de comer por dor na boca'],
        prevention: ['Escovação desde filhote: hábito fácil de criar', 'Ração seca como base: mecânica abrasiva reduz placa', 'Profilaxia veterinária anual'],
        myths: [{ myth: 'Osso duro limpa os dentes naturalmente', truth: 'Osso CRUDO remove alguma placa, mas não substitui escovação. Ossos muito duros (fêmur bovino) fraturama os dentes saudáveis. Petisco dental não é substituto para escovação.' }],
        faq: [
          { q: 'Com que frequência devo ir ao dentista veterinário?', a: 'Cão com boa higiene oral em casa: a cada 12-18 meses para profilaxia sob anestesia. Raças braquicefálicas ou de pequeno porte: a cada 6-12 meses (mais propensos a tártaro por dentes apinhados).' },
          { q: 'É seguro anestesia para profilaxia dental?', a: 'Com avaliação pré-anestésica adequada e veterinário experiente, os riscos são baixos. "Limpeza sem anestesia" (anesthesia-free dental cleaning) é controversa — sem anestesia não é possível avaliar periodonto, extrair ou fazer radiografia dental.' },
          { q: 'Meu cão odeia escova — tem alternativa?', a: 'Gel enzimático aplicado com dedo (Logic Oral), spray clorexidina e petiscos dentais têm evidência de eficácia moderada. Não substituem escovação, mas são melhores que nada. Dessensibilização progressiva tende a funcionar em 2-3 semanas.' },
        ],
      }],
    },
    {
      id: 'doenca-periodontal', name: 'Doença Periodontal', emoji: '🩸', gradient: 'g-red',
      description: 'A doença mais comum em cães — afeta rins, coração e fígado se não tratada',
      prevalence: '80% dos cães > 3 anos; raças pequenas (Yorkshire, Maltese, Lhasa) mais afetadas',
      protocols: [{
        id: 'p1', title: 'Protocolo Doença Periodontal', subtitle: 'Diagnóstico, tratamento e prevenção de recidiva',
        stages: [
          { id: 's1', label: 'Grau 1-2 (Leve a Moderado)', urgency: 'moderate', description: 'Gengivite e início de perda óssea.', signs: ['Gengiva vermelha e sangrante ao toque', 'Tártaro visível', 'Hálito moderado a intenso', 'Pus ao pressionar gengiva'] },
          { id: 's2', label: 'Grau 3-4 (Grave)', urgency: 'high', description: 'Perda óssea e dental irreversível.', signs: ['Dentes móveis', 'Abscessos gengivais', 'Necrose óssea', 'Cão não consegue manter comida na boca', 'Perda de peso por dificuldade de comer'] },
        ],
        triggers: ['Falta de higiene oral', 'Raças braquicefálicas', 'Imunossupressão', 'Diabetes (agrava gengivite)'],
        steps: [
          { title: 'Profilaxia e tratamento', icon: '🔬', duration: 'Procedimento cirúrgico',
            description: 'Profilaxia profissional sob anestesia — único tratamento definitivo do tártaro.',
            checklist: ['Exame clínico completo', 'Radiografia dental (detecta lesão óssea não visível)', 'Ultrassom de tártaro sob anestesia', 'Tratamento periodontal (curetagem, gengivectomia)', 'Extração de dentes inviáveis', 'Antibiótico pós-procedimento se necessário', 'Higiene domiciliar após como manutenção'] },
        ],
        checklists: [{ label: 'Pós-Profilaxia Dental', freq: 'daily', items: ['Dieta úmida ou amolecida por 7-10 dias?', 'Antibiótico dado conforme prescrição?', 'Anti-inflamatório para dor?', 'Cão come sem dificuldade?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação', tasks: ['Observar cor da gengiva', 'Hálito fétido?', 'Cão tem dificuldade para mastigar?', 'Agendar consulta dental'], note: 'Doença periodontal causa bacteremia — bactérias vão para o coração e rins' },
          { day: 2, label: 'Dia 2 — Pré-Procedimento', tasks: ['Exames pré-anestésicos', 'Radiografia dental se disponível', 'Jejum conforme orientação'] },
          { day: 3, label: 'Dia 3 — Dia do Procedimento', tasks: ['Jejum respeitado?', 'Profilaxia + tratamento periodontal', 'Extração se necessário'] },
          { day: 4, label: 'Dia 4 — Pós-Procedimento', tasks: ['Dieta úmida por 7 dias', 'Anti-inflamatório dado?', 'Antibiótico dado?', 'Cão está comendo?'] },
          { day: 5, label: 'Dia 5 — Início da Higiene', tasks: ['Reiniciar escovação SUAVE após 7 dias', 'Gel enzimático enquanto gengiva cura', 'Evitar petiscos duros por 2 semanas'] },
          { day: 6, label: 'Dia 6 — Manutenção', tasks: ['Escovação como novo hábito', 'Petisco dental suave', 'Próxima profilaxia: 12 meses'] },
          { day: 7, label: 'Dia 7 — Impacto Sistêmico', tasks: ['Exames de controle renal e hepático em 30 dias', 'Doenças cardíacas: monitorar Valvulopatia em raças pequenas', 'Diabetes: controle glicêmico melhora após tratamento dental'] },
        ],
        vetAlert: ['Cão que para de comer por dor bucal', 'Abscesso dental (inchaço facial)', 'Fístula oronasal (espirro com sangue de origem dental)'],
        prevention: ['Escovação diária desde filhote', 'Profilaxia veterinária anual', 'Ração seca como base da dieta'],
        myths: [{ myth: 'Cão que come mal tem fome — não dor', truth: 'Cão com doença periodontal grave frequentemente NEGA comida por DOR. Após a extração de dentes dolorosos, a maioria come melhor e com entusiasmo, mesmo sem os dentes afetados.' }],
        faq: [
          { q: 'Cão sem dentes consegue se alimentar?', a: 'Sim, muito bem. Cão edêntulo (sem dentes) ingere ração úmida ou seca amolecida. Qualidade de vida melhora dramaticamente após extração de dentes dolorosos. Vida sem dentes mas sem dor é superior a vida com dentes e infecção.' },
          { q: 'Doença periodontal causa doença do coração?', a: 'Em humanos, evidência forte. Em cães, correlação entre doença periodontal e endocardite bacteriana e valvulopatia mitral foi demonstrada em estudos. Cuidar dos dentes é cuidar do coração.' },
        ],
      }],
    },
  ],
};
