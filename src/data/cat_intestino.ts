import type { Category } from './types';
export const catIntestino: Category = {
  id: 'intestino', name: 'Intestino e Cólon', emoji: '🌀', gradient: 'g-amber',
  description: 'Diarreia crônica, doença inflamatória intestinal (DII), megacólon e constipação',
  conditions: [
    {
      id: 'dii-cronica', name: 'Doença Inflamatória Intestinal (DII)', emoji: '🌀', gradient: 'g-amber',
      description: 'Diarreia crônica com sangue, perda de peso e intolerância alimentar',
      prevalence: 'Causa mais comum de diarreia crônica em cães adultos — diagnóstico por biópsia intestinal',
      protocols: [{
        id: 'p1', title: 'Protocolo DII Canina', subtitle: 'Diagnóstico por exclusão, dieta hipoalergênica e imunossupressão',
        stages: [
          { id: 's1', label: 'Leve — Diarreia Crônica', urgency: 'moderate', description: 'Fezes moles recorrentes por > 3 semanas.', signs: ['Diarreia > 3 semanas', 'Fezes com muco', 'Apetite variável', 'Sem perda de peso significativa'] },
          { id: 's2', label: 'Grave — Síndrome de Perda de Proteína', urgency: 'high', description: 'Enteropatia perdedora de proteína.', signs: ['Emagrecimento progressivo', 'Ascite (abdômen inchado de líquido)', 'Hipoalbuminemia laboratorial', 'Edema de membros', 'Diarreia com sangue'] },
        ],
        triggers: ['Componente imunológico (autoimune)', 'Disbiose intestinal', 'Intolerância alimentar associada', 'Predisposição racial (Yorkshire, Basenji, Rottweiler)'],
        steps: [
          { title: 'Investigação e dieta de exclusão', icon: '🔬', duration: '8-12 semanas de diagnóstico',
            description: 'Excluir parasitas, infecções, antes de indicar imunomodulação.',
            checklist: ['Coproparasitológico x3 (excluir parasitas)', 'Hemograma e bioquímica (albumina, B12, folato)', 'Dieta de exclusão 8 semanas (proteína novel: peixe, coelho, canguru)', 'SEM petisco, SEM mistura com ração anterior', 'Se não responder à dieta: endoscopia + biópsia', 'Imunossupressão: prednisona + metronidazol ou ciclosporina'] },
        ],
        checklists: [{ label: 'Controle DII', freq: 'daily', items: ['Fezes com consistência normal?', 'Cão comeu dieta exclusiva sem desvio?', 'Peso estável ou aumentando?', 'Muco ou sangue nas fezes?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Início da Dieta de Exclusão', tasks: ['Trocar dieta completa para proteína novel', 'NADA mais (petisco = anula o teste)', 'Coletar fezes para coproparasitológico'], note: 'Qualquer desvio na dieta invalida as 8 semanas' },
          { day: 2, label: 'Dia 2 — Sintomas Basais', tasks: ['Fotografar fezes para acompanhamento', 'Registrar quantidade e consistência', 'Cão come nova ração sem dificuldade?'] },
          { day: 3, label: 'Dia 3 — Ajuste', tasks: ['Nova dieta sendo tolerada?', 'Vômito associado à troca?', 'Diminuir velocidade de transição se necessário'], note: 'DII: piora inicial possível na troca de dieta antes da melhora' },
          { day: 4, label: 'Dia 4 — Probiótico', tasks: ['Probiótico específico para cão iniciado', 'Prebiótico (FOS/inulina) conforme orientação', 'Omega-3 anti-inflamatório'] },
          { day: 5, label: 'Dia 5 — Semana 1 Completa', tasks: ['Fezes melhoraram?', 'Apetite estável?', 'Peso verificado'] },
          { day: 6, label: 'Dia 6 — Planejamento de Longo Prazo', tasks: ['Consulta veterinária para revisão', 'Endoscopia se sem resposta em 8 semanas', 'Família informada sobre regime longo'] },
          { day: 7, label: 'Dia 7 — Avaliação Semanal', tasks: ['Fezes melhores, piores ou iguais?', 'Dieta exclusiva mantida?', 'Continuar mais 7 semanas com registro'] },
        ],
        vetAlert: ['Albumina baixa (hipoalbuminemia)', 'Ascite', 'Perda de peso > 10% em 2 semanas', 'Sangramento intestinal ativo'],
        prevention: ['Dieta de qualidade com poucos ingredientes', 'Probiótico de manutenção em cães predispostos', 'Check-up anual com albumina sérica'],
        myths: [{ myth: 'Diarreia crônica se resolve com vermifugo', truth: 'Diarreia crônica por DII é de natureza imunológica, não parasitária. Vermifugo trata parasitas — DII requer dieta de exclusão, imunossupressão e manejo específico.' }],
        faq: [
          { q: 'DII tem cura ou é para vida toda?', a: 'A maioria dos cães com DII requer manejo a longo prazo (dieta + medicação). Alguns atingem remissão e ficam apenas com dieta controlada. Piora é comum após desvios alimentares.' },
          { q: 'Qual proteína novel usar na dieta de exclusão?', a: 'Proteína que o cão nunca comeu antes. Opções: peixe branco, coelho, canguru, javali, pato. Frango, boi e cordeiro são proteínas já expostas na maioria dos cães e não valem como proteína novel.' },
        ],
      }],
    },
    {
      id: 'constipacao', name: 'Constipação e Obstipação', emoji: '🪨', gradient: 'g-orange',
      description: 'Cão sem evacuar, fezes duras e megacólon — causas e tratamento',
      prevalence: 'Constipação: comum. Megacólon crônico: mais raro, mais em cães idosos ou com histórico de trauma pélvico',
      protocols: [{
        id: 'p1', title: 'Protocolo Constipação Canina', subtitle: 'Hidratação, fibra, enema veterinário e megacólon',
        stages: [
          { id: 's1', label: 'Constipação Simples', urgency: 'moderate', description: '1-2 dias sem evacuar — geralmente resolve com manejo.', signs: ['Sem evacuar 1-2 dias', 'Tentativas de defecar sem sucesso', 'Fezes duras quando saem', 'Cão se lambe debaixo da cauda'] },
          { id: 's2', label: 'Obstipação Grave', urgency: 'high', description: '> 3 dias sem evacuação ou megacólon.', signs: ['> 3 dias sem evacuação', 'Abdômen distendido caudal', 'Letargia e inapetência', 'Vômito por constipação', 'Fezes endurecidas palpáveis no cólon'] },
        ],
        triggers: ['Desidratação', 'Ossos na dieta', 'Pelos ingeridos (grooming)', 'Vida sedentária', 'Tumor pélvico', 'Fratura de pelve cicatrizada', 'Dor anal (anal sacculite)'],
        steps: [
          { title: 'Hidratação e desobstrução', icon: '💊', duration: '24-72h',
            description: 'Hidratação, lactulose e enema veterinário se necessário.',
            checklist: ['Aumentar ingestão de água (fonte de movimento, úmido na dieta)', 'Fibra solúvel: farelo de trigo ou psyllium 1-2 col. chá/dia na ração', 'Lactulose (laxante osmótico) por via oral conforme peso', 'Óleo de parafina: 1-2ml/kg VO (não usar regularmente)', 'Enema: APENAS pelo veterinário (enema de fosfato é TÓXICO para cão)', 'Nunca enema humano (Fleet/fosfato de sódio) em cão — causa hipocalcemia fatal'] },
        ],
        checklists: [{ label: 'Monitoramento Intestinal', freq: 'daily', items: ['Cão evacuou hoje?', 'Fezes de consistência normal?', 'Bebeu água em quantidade normal?', 'Fibra na dieta?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Início do Manejo', tasks: ['Aumentar ingestão de água', 'Adicionar farelo de trigo (1 col. chá)', 'Exercício: caminhada estimula motilidade'], note: 'Sem evacuar em 3 dias: veterinário imediato' },
          { day: 2, label: 'Dia 2 — Fibra e Hidratação', tasks: ['Úmido ou caldo de frango na ração', 'Fibra continuada', 'Cão tentou evacuar?'] },
          { day: 3, label: 'Dia 3 — Lactulose', tasks: ['Lactulose conforme peso (prescrição)', 'Fezes amolecidas?', 'Vômito? (indicativo de obstrução)'] },
          { day: 4, label: 'Dia 4 — Resultado', tasks: ['Evacuou?', 'Consistência normalizada?', 'Causa identificada (ossos? pelos?)'] },
          { day: 5, label: 'Dia 5 — Prevenção', tasks: ['Fibra na dieta permanentemente?', 'Hidratação mantida?', 'Proibir ossos (especialmente cozidos)?'] },
          { day: 6, label: 'Dia 6 — Avaliação', tasks: ['Normalizado?', 'Veterinário se cronicidade', 'Radiografia para ver quantidade de fezes no cólon?'] },
          { day: 7, label: 'Dia 7 — Prevenção de Recidiva', tasks: ['Dieta com fibra definitiva', 'Hidratação monitorada', 'Exercício diário'] },
        ],
        vetAlert: ['> 3 dias sem evacuar', 'Distensão abdominal caudal', 'Vômito por constipação', 'NUNCA enema humano (fosfato) em cão'],
        prevention: ['Dieta rica em fibra', 'Hidratação adequada', 'Proibir ossos cozidos', 'Exercício regular'],
        myths: [{ myth: 'Enema de farmácia (Fleet) é seguro para cão', truth: 'FALSO. Enemas com fosfato de sódio (Fleet) causam hipocalcemia e hiperfosfatemia graves e rapidamente fatais em cães. Nunca usar. Enemas veterinários são à base de água morna ou docusato.' }],
        faq: [
          { q: 'Meu cão pode tomar lactulose humana?', a: 'Sim, na dose correta. Lactulose 0,5-1ml/kg duas vezes ao dia VO. Formulação humana é idêntica. Laxante osmótico seguro e bem tolerado. Não usar cronicamente sem supervisão veterinária.' },
          { q: 'Cão que come osso sempre terá constipação?', a: 'Ossos são a causa mais comum de constipação aguda. Ossos cozidos são piores (mais frágeis e esfarelam em fragmentos). Ossos crus maiores são menos problemáticos mas ainda causam constipação. Evitar é a recomendação geral.' },
        ],
      }],
    },
  ],
};
