import type { Category } from './types';
export const catRacao: Category = {
  id: 'racao', name: 'Rações e Alimentação Comercial', emoji: '🍽️', gradient: 'g-amber',
  description: 'Como escolher ração de qualidade, entender os ingredientes e evitar marcas ruins',
  conditions: [
    {
      id: 'escolha-racao', name: 'Como Escolher a Ração Certa', emoji: '🔍', gradient: 'g-amber',
      description: 'Nem toda ração é igual — como ler o rótulo e escolher qualidade real',
      prevalence: 'Mercado brasileiro tem >500 marcas; 70% das rações econômicas têm qualidade nutricional inferior',
      protocols: [{
        id: 'p1', title: 'Protocolo Escolha de Ração', subtitle: 'Ler rótulo, entender ingredientes e critérios de qualidade',
        stages: [
          { id: 's1', label: 'Ração de Baixa Qualidade', urgency: 'low', description: 'Sinais de que a ração atual não está adequada.', signs: ['Pelo sem brilho', 'Fezes em grande volume e amolecidas', 'Flatulência excessiva', 'Comer e nunca parecer saciado', 'Coceira sem causa identificada'] },
          { id: 's2', label: 'Troca de Ração', urgency: 'low', description: 'Transição incorreta causa diarreia intensa.', signs: ['Diarreia na troca de ração', 'Cão que recusa a nova ração', 'Fezes muito diferentes da anterior'] },
        ],
        triggers: ['Escolha por preço sem avaliar qualidade', 'Troca abrupta de ração', 'Ração inadequada para fase da vida'],
        steps: [
          { title: 'Como ler o rótulo', icon: '🔍', duration: 'Avaliação',
            description: 'Os 5 primeiros ingredientes definem 80% da qualidade nutricional.',
            checklist: ['1º ingrediente deve ser proteína animal (frango, carne) — não farinha', 'Evitar: "farelo de soja" no 1º lugar', 'Evitar: corante artificial, BHA/BHT (conservante suspeito)', 'Procurar: AAFCO ou NRC certificado', 'Proteína bruta > 25% para adultos, > 28% filhotes', 'Extrato etéreo (gordura): 10-18% adulto', 'Fibra bruta: < 5% ideal'] },
          { title: 'Transição segura de ração', icon: '📅', duration: '7-10 dias',
            description: 'Troca abrupta = diarreia garantida. Mistura gradual é a chave.',
            checklist: ['Dia 1-3: 75% ração antiga + 25% nova', 'Dia 4-6: 50% + 50%', 'Dia 7-9: 25% antiga + 75% nova', 'Dia 10: 100% nova ração', 'Se tiver diarreia: desacelerar a transição', 'Probiótico durante a transição: facilita adaptação'] },
        ],
        checklists: [{ label: 'Avaliação Mensal da Ração', freq: 'monthly', items: ['Fezes formadas e sem excesso de volume?', 'Pelo brilhante?', 'Cão satisfeito após as refeições?', 'Peso estável?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação da Ração Atual', tasks: ['Ler o rótulo da ração atual', 'Qual o 1º ingrediente?', 'Tem corante? Conservante suspeito?', 'Fezes do cão: bom indicador de qualidade'], note: 'Fezes volumosas e amolecidas = ração com muita fibra de baixa qualidade' },
          { day: 2, label: 'Dia 2 — Pesquisa de Alternativas', tasks: ['Pesquisar marcas premium ou super premium', 'Comparar ingredientes (não só preço)', 'Consultar veterinário nutrólogo se possível'] },
          { day: 3, label: 'Dia 3 — Início da Transição (se mudando)', tasks: ['75% antiga + 25% nova ração', 'Probiótico (FortiFlora ou similar) para facilitar', 'Observar fezes e apetite'] },
          { day: 4, label: 'Dia 4 — 50/50', tasks: ['50% de cada ração', 'Fezes mais firmes ou moles?', 'Cão aceita a nova ração bem?'] },
          { day: 5, label: 'Dia 5 — 75% Nova', tasks: ['25% antiga + 75% nova', 'Aceitação boa?', 'Sem diarreia?'] },
          { day: 6, label: 'Dia 6 — 100% Nova Ração', tasks: ['Apenas a nova ração', 'Fezes normais?', 'Apetite mantido?'] },
          { day: 7, label: 'Dia 7 — Avaliação Pós-Troca', tasks: ['Pelo começando a melhorar?', 'Volume de fezes menor (mais digestível)?', 'Cão parece mais saciado?'], note: 'Melhoras visíveis na pele e pelo levam 4-6 semanas' },
        ],
        vetAlert: ['Diarreia com sangue durante troca de ração', 'Cão recusa qualquer alimento por > 48h', 'Reação alérgica após nova ração (inchaço facial, urticária)'],
        prevention: ['Nunca trocar ração abruptamente', 'Verificar selos de qualidade e certificações', 'Adequar ração à fase de vida (filhote, adulto, idoso)'],
        myths: [{ myth: 'Ração cara é sempre melhor', truth: 'Preço não é garantia de qualidade. Leia os ingredientes. Algumas rações econômicas de cooperativas têm qualidade superior a marcas caras que investem mais em marketing.' }],
        faq: [
          { q: 'Ração seca ou úmida: qual a melhor?', a: 'Seca: prática e melhor para dentes. Úmida: mais palatável, hidratação. Misturar é válido. Para cães com doença renal ou obesos: úmida tem vantagens. Para filhotes: mistura facilita o aprendizado alimentar.' },
          { q: 'Posso dar ração de gato para cachorro?', a: 'Não. Ração de gato tem muito mais proteína e gordura, causando sobrecarga hepática e obesidade no cão. Em dose única não é emergência, mas habitualmente é prejudicial.' },
          { q: 'Ração grain-free (sem grão) é melhor?', a: 'Não necessariamente. A FDA investigou possível relação entre grain-free e cardiomiopatia dilatada em cães. Sem evidência científica forte pró ou contra. A qualidade dos ingredientes importa mais que a presença ou ausência de grãos.' },
        ],
      }],
    },
    {
      id: 'alimentacao-natural', name: 'Alimentação Natural (BARF e Cozida)', emoji: '🥩', gradient: 'g-red',
      description: 'Alimentação natural para cães: benefícios, riscos e como fazer corretamente',
      prevalence: 'Tendência crescente: 15% dos tutores brasileiros já adotam alguma forma de alimentação natural',
      protocols: [{
        id: 'p1', title: 'Protocolo Alimentação Natural', subtitle: 'BARF, cozido ou misto — como iniciar com segurança',
        stages: [
          { id: 's1', label: 'Transição Segura', urgency: 'low', description: 'Mudança gradual para evitar distúrbios digestivos.', signs: ['Fezes mais amolecidas inicialmente (normal)', 'Maior volume fecal nas primeiras semanas', 'Cão mais entusiasmado com a comida'] },
          { id: 's2', label: 'Deficiência Nutricional', urgency: 'high', description: 'Dieta natural mal formulada causa carências.', signs: ['Pelo opaco', 'Fraqueza óssea', 'Hipocalcemia (espasmos musculares)', 'Crescimento inadequado em filhotes'] },
        ],
        triggers: ['Alergia alimentar a ingredientes da ração', 'Preferência por dieta mais natural', 'Cão que recusa ração comercial'],
        steps: [
          { title: 'BARF (Biologically Appropriate Raw Food)', icon: '🥩', duration: 'Diário',
            description: 'Carne crua, ossos carnudos, vísceras, vegetais e suplementos.',
            checklist: ['Proporção básica: 70% carne muscular, 10% ossos carnudos, 10% vísceras, 10% vegetal', 'Ossos sempre CRUS (cozidos: perigo de estilhaço)', 'Nunca cebola, alho, uva, passas, xilitol, chocolate', 'Vitamina E: 1-2 UI/kg/dia (antioxidante)', 'Ômega-3 (sardinha, salmão): 3x/semana', 'Consultar médico vet nutrólogo para formulação completa'] },
        ],
        checklists: [{ label: 'Qualidade da Dieta Natural', freq: 'weekly', items: ['Pelo com brilho e macio?', 'Fezes formadas (não duras nem moles)?', 'Cão com energia adequada?', 'Peso estável?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Consultoria Nutricional', tasks: ['Consultar médico veterinário nutrólogo ANTES de iniciar', 'Formulação calculada para o peso e idade do cão', 'Lista de ingredientes permitidos e proibidos'], note: 'Dieta natural mal formulada é pior que ração ruim' },
          { day: 2, label: 'Dia 2 — Compras e Preparo', tasks: ['Fontes proteicas variadas (frango, bovino, peixe)', 'Orgânicos quando possível', 'Freezar em porções para a semana'] },
          { day: 3, label: 'Dia 3 — Início da Transição', tasks: ['25% natural + 75% ração', 'Observar fezes: amolecimento leve é normal', 'Probiótico durante a transição'] },
          { day: 4, label: 'Dia 4 — 50% Natural', tasks: ['50% de cada', 'Aceitação do cão?', 'Verificar hiperexcitação com proteína alta'] },
          { day: 5, label: 'Dia 5 — 75% Natural', tasks: ['Fezes: mais firmes com ossos carnudos', 'Odor fecal: menor que ração (normal na natural)', 'Cão com apetite?'] },
          { day: 6, label: 'Dia 6 — 100% Natural', tasks: ['Primeira semana 100% natural', 'Pesar o cão para verificar adequação calórica', 'Ajustar quantidade conforme peso'] },
          { day: 7, label: 'Dia 7 — Exames de Controle', tasks: ['Hemograma e bioquímica em 30-60 dias de dieta natural', 'Cálcio e fósforo sérico', 'Peso e BCS estáveis?'], note: 'Exames confirmam se a dieta está nutricionalmente completa' },
        ],
        vetAlert: ['Espasmos musculares (hipocalcemia)', 'Osso preso na garganta ou intestino', 'Salmonela em contatos humanos (manipulação de carne crua)'],
        prevention: ['NUNCA ossos cozidos — SOMENTE crus e carnudos', 'Formulação por nutrólogo veterinário', 'Higiene rígida no preparo'],
        myths: [{ myth: 'Natural é sempre melhor que ração', truth: 'Dieta natural mal formulada é pior que ração premium. Deficiências de cálcio, vitamina D e taurina são comuns em dietas domésticas sem supervisão nutricional.' }],
        faq: [
          { q: 'Osso de frango pode para cachorro?', a: 'Osso de frango CRU e carnudo: sim. Osso de frango COZIDO: absolutamente não. O cozimento torna o osso quebradiço — estilhaça e perfura o trato digestivo. Osso de fêmur bovino grande também é risco de fratura dentária.' },
          { q: 'Quanto custa a alimentação natural vs. ração?', a: 'Varia muito. Em geral, similar ou ligeiramente mais caro que ração premium. Mais barato que ração super premium. O custo extra pode ser compensado por menor necessidade de consultas veterinárias por alergias alimentares.' },
        ],
      }],
    },
  ],
};
