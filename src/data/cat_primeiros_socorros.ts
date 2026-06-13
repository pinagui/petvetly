import type { Category } from './types';
export const catPrimeirosSocorros: Category = {
  id: 'primeiros-socorros', name: 'Primeiros Socorros', emoji: '🩺', gradient: 'g-red',
  description: 'RCP canina, engasgo, Heimlich, hemorragia e o que fazer antes de chegar ao vet',
  conditions: [
    {
      id: 'rcp-canina', name: 'RCP Canina (Parada Cardiorrespiratória)', emoji: '❤️', gradient: 'g-red',
      description: 'Como fazer RCP no cão — cada segundo conta em parada cardiorrespiratória',
      prevalence: 'Situação rara mas fatal sem ação imediata; 4-6 min de anóxia = dano cerebral irreversível',
      protocols: [{
        id: 'p1', title: 'Protocolo RCP Canino', subtitle: 'Reconhecimento + compressões + respiração + veterinário de emergência',
        stages: [
          { id: 's1', label: 'Parada Respiratória', urgency: 'emergency', description: 'Cão não respira mas tem pulso.', signs: ['Não respira', 'Pulso ainda palpável (femoral)', 'Mucosas começando a cianotizar', 'Sem resposta a estímulos'] },
          { id: 's2', label: 'PCR (Parada Cardiorrespiratória)', urgency: 'emergency', description: 'Sem respiração e sem pulso.', signs: ['Sem respiração', 'Sem pulso femoral ou axilar', 'Mucosas brancas ou azuis', 'Pupilas dilatadas', 'Inconsciente e sem resposta'] },
        ],
        triggers: ['Afogamento', 'Eletrocussão', 'Golpe de calor grave', 'Trauma severo', 'Obstrução de vias aéreas', 'Anestesia (complicação rara)'],
        steps: [
          { title: 'PROTOCOLO RCP — Passo a Passo', icon: '🚨', duration: 'Imediato',
            description: 'ABC: Airway (via aérea) → Breathing (respiração) → Circulation (circulação).',
            checklist: ['A — VIA AÉREA: Esticar o pescoço, remover objetos visíveis da boca', 'B — RESPIRAÇÃO: Boca do cão coberta, soprar pelo nariz — tórax deve subir', 'Tamanho médio/grande: 1 respiração a cada 5 compressões', 'C — CIRCULAÇÃO: Cão em decúbito lateral; 1/3 inferior do tórax', 'CÃES PEQUENOS: 1 mão; GRANDES: 2 mãos sobre o coração', 'Frequência: 100-120 compressões/min (ritmo de "Staying Alive")', 'Profundidade: 1/3 do diâmetro do tórax', 'VETERINÁRIO DE EMERGÊNCIA AO MESMO TEMPO QUE FAZ RCP'] },
        ],
        checklists: [{ label: 'Treinamento de Emergência', freq: 'monthly', items: ['Sabe onde fica o veterinário de emergência mais próximo?', 'Número de emergência veterinária salvo no celular?', 'Sabe localizar o pulso femoral do seu cão?', 'Praticou RCP em simulador ou vídeo?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Preparação', tasks: ['Salvar número do veterinário 24h', 'Assistir vídeo de RCP canino', 'Praticar localizar o pulso femoral no seu cão (coxa interna)'], note: 'Preparação salva vidas — não espere a emergência para aprender' },
          { day: 2, label: 'Dia 2 — Simulação', tasks: ['Praticar abertura das vias aéreas no cão (gentilmente)', 'Simular o posicionamento para compressões', 'Cronometrar: 100-120 compressões/min'] },
          { day: 3, label: 'Dia 3 — Sinais de Emergência', tasks: ['Reconhecer: mucosas azuis ou brancas', 'Reconhecer: sem movimento respiratório', 'Reconhecer: sem resposta a estímulos'], note: 'Rapidez no reconhecimento = sobrevivência' },
          { day: 4, label: 'Dia 4 — Kit de Emergência', tasks: ['Seringa sem agulha para respiração artificial', 'Luvas descartáveis', 'Contato de emergência na bolsa do cão'] },
          { day: 5, label: 'Dia 5 — Transporte', tasks: ['Como transportar cão em PCR?', 'Superfície rígida (tábua) para continuar compressões no carro', 'Segunda pessoa dirige enquanto você faz RCP'] },
          { day: 6, label: 'Dia 6 — Revisão', tasks: ['A = Airway (via aérea)', 'B = Breathing (respiração)', 'C = Circulation (compressões)'] },
          { day: 7, label: 'Dia 7 — Pronto?', tasks: ['Número de emergência salvo?', 'Sabe fazer compressões torácicas?', 'Sabe respiração artificial para cão?'] },
        ],
        vetAlert: ['Qualquer suspeita de PCR = ligar para emergência IMEDIATAMENTE enquanto inicia RCP'],
        prevention: ['Nenhuma emergência é completamente previsível', 'Preparo e conhecimento aumentam a chance de sobrevivência'],
        myths: [{ myth: 'Só veterinário pode fazer RCP', truth: 'Tutor que conhece o procedimento pode e DEVE iniciar imediatamente — cada minuto sem perfusão cerebral aumenta dano irreversível. RCP leigo aumenta a sobrevivência em situações onde vet está a minutos de distância.' }],
        faq: [
          { q: 'Como saber se o cão tem pulso?', a: 'Artéria femoral: face interna da coxa, cruzar os dedos médio e indicador na virilha. Artéria braquial: face interna do braço. Pulse no pescoço (carótida) em cães grandes. Em emergência: sem pulso visível + sem respiração = iniciar RCP.' },
          { q: 'Quanto tempo continuar a RCP?', a: 'Continuar até o cão respirar espontaneamente, até chegada ao veterinário ou até 20-30 minutos sem resposta (prognóstico muito ruim após esse tempo). A decisão de parar deve ser do veterinário sempre que possível.' },
          { q: 'RCP com intubação é diferente?', a: 'Com tubo endotraqueal (só veterinário), a relação muda: 30 compressões : 2 respirações em pausa vs. respiração contínua. Para o tutor sem equipamento: 30 compressões : 2 respirações com pausa é o padrão.' },
        ],
      }],
    },
    {
      id: 'engasgo-heimlich', name: 'Engasgo e Manobra de Heimlich', emoji: '🫁', gradient: 'g-orange',
      description: 'Como agir quando o cão está engasgado — Heimlich canino passo a passo',
      prevalence: 'Mais comum em filhotes e cães vorazes; brinquedos, ossos e comida são as causas mais frequentes',
      protocols: [{
        id: 'p1', title: 'Protocolo Obstrução de Vias Aéreas', subtitle: 'Manobra de Heimlich canina e quando vai para a emergência',
        stages: [
          { id: 's1', label: 'Obstrução Parcial', urgency: 'high', description: 'Cão tossindo, engasgando mas ainda passa algum ar.', signs: ['Tosse vigorosa', 'Vocalização', 'Salivação excessiva', 'Patadas na boca', 'Mucosas ainda rosadas'] },
          { id: 's2', label: 'Obstrução Total', urgency: 'emergency', description: 'Sem passagem de ar — urgência máxima.', signs: ['Sem vocalização (não consegue latir)', 'Mucosas azuladas', 'Colapso', 'Movimentos respiratórios sem entrada de ar', 'Pânico extremo'] },
        ],
        triggers: ['Osso ou brinquedo preso na faringe', 'Comida engolida rápido demais', 'Objeto ingerido de brincadeira', 'Filhotes que mastigam tudo'],
        steps: [
          { title: 'Manobra de Heimlich Canino', icon: '🫁', duration: 'Imediato',
            description: 'Diferente da humana — posicionamento varia pelo tamanho do cão.',
            checklist: ['OLHAR NA BOCA: remover objeto visível COM CUIDADO (não empurrar para dentro)', 'CÃO PEQUENO: segurar de cabeça para baixo, dar 5 tapas nas costas (ombros)', 'CÃO MÉDIO/GRANDE: inclinar cabeça para baixo; abraçar o abdômen; comprimir firmemente 5x', 'Posicionar os punhos juntos atrás do último par de costelas', 'Compressão para dentro e para cima (como se fosse espremer para fora)', 'Alternar 5 tapas costas + 5 compressões abdominais', 'VETERINÁRIO IMEDIATAMENTE mesmo após resolver'] },
        ],
        checklists: [{ label: 'Prevenção de Engasgo', freq: 'daily', items: ['Brinquedos adequados ao tamanho do cão?', 'Bowl anti-engasgo para cão voraz?', 'Sem ossos menores que a boca do cão?', 'Objetos pequenos fora do alcance?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Prevenir é Melhor', tasks: ['Verificar tamanho dos brinquedos vs. tamanho da boca', 'Brinquedo que cabe inteiro na boca: perigo', 'Bowl anti-engasgo para comedores vorazes'], note: 'Cão que come rápido: bowl anti-engasgo reduz risco 70%' },
          { day: 2, label: 'Dia 2 — Aprender a Técnica', tasks: ['Assistir vídeo de Heimlich canino', 'Praticar posicionamento no cão (sem compressão)', 'Diferenciar pequeno vs. médio/grande'] },
          { day: 3, label: 'Dia 3 — Ossos e Brinquedos', tasks: ['Avaliar todos os brinquedos do cão', 'Ossos: somente maiores que a boca', 'Brinquedo rasgado? Descartar imediatamente'] },
          { day: 4, label: 'Dia 4 — Comportamento Alimentar', tasks: ['Cão come muito rápido?', 'Bowl com obstáculo ou anti-engasgo', 'Pequenas porções várias vezes ao dia'] },
          { day: 5, label: 'Dia 5 — Crianças e Cão', tasks: ['Crianças não devem dar objetos pequenos ao cão', 'Vigilância durante brincadeiras', 'Brinquedos de criança fora do alcance do cão'] },
          { day: 6, label: 'Dia 6 — Sinais de Obstrução', tasks: ['Tussindo + salivação + patadas na boca = possível engasgo', 'Sem vocalização + mucosas azuis = emergência', 'Agir IMEDIATAMENTE'] },
          { day: 7, label: 'Dia 7 — Kit de Segurança', tasks: ['Pinça de boca disponível em casa?', 'Número de emergência veterinária?', 'Técnica de Heimlich revisada?'] },
        ],
        vetAlert: ['Obstrução total (sem passagem de ar)', 'Mucosas azuis', 'Colapso após engasgo'],
        prevention: ['Brinquedos adequados ao porte', 'Bowl anti-engasgo para comedores rápidos', 'Supervisionamento durante mastigação de ossos'],
        myths: [{ myth: 'Se o cão está tossindo, está se virando sozinho', truth: 'Obstrução parcial com tosse pode progredir para total rapidamente. Ajudar com tapas nas costas e verificar a boca é correto. Sem melhora em 1-2 min: Heimlich e emergência.' }],
        faq: [
          { q: 'Devo colocar a mão na boca do cão engasgado?', a: 'Apenas se o objeto for visível e acessível. Usar luva ou pano para não ser mordido (cão em pânico morde). Nunca tentar puxar algo que não está visível — pode empurrar mais para dentro.' },
          { q: 'Após Heimlich com sucesso: preciso ir ao vet?', a: 'Sim, sempre. O Heimlich pode causar lesão interna. O objeto removido pode ter causado lesão na mucosa. E o objeto pode ter fragmentado e parte ainda estar presente.' },
        ],
      }],
    },
  ],
};
