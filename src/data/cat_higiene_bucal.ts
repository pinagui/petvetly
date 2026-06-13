import type { Category } from './types';
export const catHigieneBucal: Category = {
  id: 'higiene-bucal', name: 'Higiene Bucal Avançada', emoji: '🦷', gradient: 'g-teal',
  description: 'Tártaro, extração dental, estomatite e cuidados bucais preventivos avançados',
  conditions: [
    {
      id: 'tartaro-avancado', name: 'Tártaro e Doença Periodontal Avançada', emoji: '🦷', gradient: 'g-teal',
      description: 'Tártaro grave, gengivite e perda óssea — profilaxia e extração',
      prevalence: '80% dos cães com mais de 3 anos têm algum grau de doença periodontal',
      protocols: [{
        id: 'p1', title: 'Protocolo Saúde Periodontal', subtitle: 'Profilaxia anestésica, extração e escovação preventiva',
        stages: [
          { id: 's1', label: 'Tártaro Leve-Moderado', urgency: 'moderate', description: 'Tártaro visível, mau hálito, leve sangramento gengival.', signs: ['Depósito amarelo-marrom nos dentes', 'Mau hálito (halitose)', 'Gengiva levemente rosada/sangrante', 'Sem dor aparente'] },
          { id: 's2', label: 'Doença Periodontal Grave', urgency: 'high', description: 'Mobilidade dentária, pus, dor e infecção sistêmica.', signs: ['Dente com mobilidade', 'Pus visível ao redor do dente', 'Cão para de comer pela dor', 'Bacteremia: bacteria na corrente sanguínea afeta coração e rins'] },
        ],
        triggers: ['Sem escovação regular', 'Dieta exclusivamente seca (mito de proteção)', 'Raças toy: dentes supranumerários e apinhamento', 'Boca pequena com dentes grandes'],
        steps: [
          { title: 'Profilaxia e prevenção', icon: '🦷', duration: 'Anual + escovação diária',
            description: 'Profilaxia sob anestesia é o único tratamento eficaz para tártaro consolidado.',
            checklist: ['Profilaxia dental anual sob anestesia (não há eficácia sem anestesia)', 'Radiografia dental periapical: avaliar raízes e perda óssea', 'Extração: dente com mobilidade ou raiz exposta', 'Escovação diária: escova veterinária + dentifrício sem flúor', 'Sem escova: dedeiras dentais, gaze ou chews dentais (segundo recurso)', 'Água com clorexidina oral: reduz placa entre profilaxias'] },
        ],
        checklists: [{ label: 'Higiene Bucal Diária', freq: 'daily', items: ['Escovação ou dedeira dental feita?', 'Mau hálito presente?', 'Cão comeu normalmente?', 'Gengiva de cor rosa normal?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação Bucal', tasks: ['Abrir a boca e observar os dentes', 'Tártaro visível?', 'Mau hálito?', 'Dentes com mobilidade?'] },
          { day: 2, label: 'Dia 2 — Introdução à Escovação', tasks: ['Dentifrício veterinário (sabor frango/baunilha)', 'Deixar lamber o dentifrício da dedo primeiro', 'Depois: mover o dedo nos dentes (habituação)'] },
          { day: 3, label: 'Dia 3 — Escova Dental', tasks: ['Escova de dente de cabeça pequena (infantil funciona)', 'Posição: cão sentado, escova em ângulo de 45°', '30 segundos por lado é suficiente'] },
          { day: 4, label: 'Dia 4 — Resistência?', tasks: ['Cão resiste muito? Adestrador pode ajudar', 'Dedeira dental como alternativa', 'Nunca forçar — trauma causa recusa permanente'] },
          { day: 5, label: 'Dia 5 — Profilaxia', tasks: ['Profilaxia indicada? Agendada?', 'Pré-anestésico: exame de sangue, ecocardiograma em idosos', 'Sem escovação prévia: profilaxia + mudar hábito'] },
          { day: 6, label: 'Dia 6 — Pós-Profilaxia', tasks: ['Escovação 48h após profilaxia', 'Alimento úmido por 2-3 dias se extração', 'Dor: analgesia prescrita?'] },
          { day: 7, label: 'Dia 7 — Prevenção Definitiva', tasks: ['Escovação: mínimo 3x/semana (ideal: diária)', 'Chew dental certificado VOHC: benefício comprovado', 'Profilaxia anual agendada?'] },
        ],
        vetAlert: ['Dente com mobilidade (periodontite grave)', 'Cão para de comer pela dor bucal', 'Pus visível ao redor do dente', 'Fístula na face abaixo dos olhos (abscesso de raiz do carnassial)'],
        prevention: ['Escovação diária desde filhote', 'Profilaxia anual', 'Chews dentais VOHC-certificados'],
        myths: [{ myth: 'Ração seca limpa os dentes de cão', truth: 'Ração seca tem efeito abrasivo mínimo e insuficiente para prevenir tártaro. A maioria das partículas se fragmenta antes de ter contato com a linha gengival. Escovação é insubstituível; ração seca não é proteção dental adequada.' }],
        faq: [
          { q: 'Profilaxia dental exige anestesia — o risco vale a pena?', a: 'Sim. Profilaxia sem anestesia (anesthetic-free dental) não toca a linha subgengival — remove apenas o tártaro visível cosmético. A doença periodontal começa abaixo da gengiva. Risco anestésico em cão saudável com exame pré-anestésico: < 0,1%.' },
          { q: 'Ossos e petiscos duros limpam os dentes?', a: 'Produtos certificados pelo VOHC (Veterinary Oral Health Council) têm eficácia comprovada. Ossos reais e antlers muito duros: risco de fratura dentária (dente seco > 60°F ou mais duro que o dente). Regra do pressão do polegar: se você não consegue machucar seu polegar pressionando, não dê ao cão.' },
        ],
      }],
    },
  ],
};
