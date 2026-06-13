import type { Category } from './types';
export const catCustosVet: Category = {
  id: 'custos-vet', name: 'Planejamento Financeiro Pet', emoji: '💰', gradient: 'g-amber',
  description: 'Quanto custa ter um cão, seguro pet, fundo de emergência e cuidados de baixo custo',
  conditions: [
    {
      id: 'orcamento-pet', name: 'Orçamento e Planejamento de Custos', emoji: '📊', gradient: 'g-amber',
      description: 'Custos reais de ter um cão — do filhote ao idoso — e como se planejar',
      prevalence: 'Maioria dos tutores subestima o custo total de ter um cão; emergências não planejadas são a maior dificuldade',
      protocols: [{
        id: 'p1', title: 'Protocolo Planejamento Financeiro Pet', subtitle: 'Custos por fase de vida, fundo de emergência e seguro',
        stages: [
          { id: 's1', label: 'Cão Jovem Saudável', urgency: 'low', description: 'Custos de manutenção e prevenção.', signs: ['Ração: R$150-500/mês (conforme porte e ração)', 'Veterinário: 2-4 consultas/ano', 'Vacinas: R$150-400/ano', 'Antiparasitário: R$30-80/mês'] },
          { id: 's2', label: 'Emergência ou Doença Crônica', urgency: 'high', description: 'Custos imprevistos elevados.', signs: ['Cirurgia de emergência: R$3.000-15.000', 'UTI veterinária: R$500-1.500/dia', 'Quimioterapia: R$1.000-3.000/ciclo', 'Doença crônica: R$200-600/mês em medicações'] },
        ],
        triggers: ['Imprevisibilidade de emergências', 'Doença crônica em cão idoso', 'Raça com predisposição a condições caras', 'Falta de seguro ou reserva'],
        steps: [
          { title: 'Planejamento preventivo', icon: '💰', duration: 'Desde a adoção',
            description: 'Fundo de emergência + seguro pet = proteção financeira.',
            checklist: ['Fundo de emergência: R$3.000-5.000 disponíveis sempre (poupança)', 'Seguro pet: pesquisar planos (Petz, Porto, Golden Cross)', 'Ração: não economizar — doença por má nutrição custa mais', 'Prevenção: R$100/mês economiza R$3.000 de tratamento', 'Castração: elimina custos de piometra, HPB, tumores mamários', 'Check-up anual: detecção precoce reduz custo de tratamento'] },
        ],
        checklists: [{ label: 'Saúde Financeira com Pet', freq: 'monthly', items: ['Fundo de emergência atualizado?', 'Seguro pet ativo?', 'Prevenção em dia (vacinas, antipulgas)?', 'Check-up anual agendado?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Levantamento de Custos', tasks: ['Listar todos os custos mensais atuais', 'Ração, antiparasitário, petisco, banho', 'Total mensal atual?'], note: 'Custo médio de um cão de porte médio saudável no Brasil: R$500-800/mês' },
          { day: 2, label: 'Dia 2 — Fundo de Emergência', tasks: ['Conta poupança separada para o pet?', 'Meta: R$3.000-5.000', 'Depósito mensal de R$100-200?'] },
          { day: 3, label: 'Dia 3 — Seguro Pet', tasks: ['Pesquisar seguro pet disponível na região', 'Coberturas: cirurgia, internação, consultas', 'Valor médio: R$60-200/mês'] },
          { day: 4, label: 'Dia 4 — Prevenção como Investimento', tasks: ['Antiparasitário mensal: R$30-80', 'Evita erliquiose, leishmaniose, carrapatos', 'ROI: R$50/mês previne R$5.000 de tratamento de erliquiose grave'] },
          { day: 5, label: 'Dia 5 — Cuidados de Baixo Custo', tasks: ['Banho em casa vs. petshop (R$50-200)?', 'Escovação em casa: reduz profilaxia dental', 'Receita caseira de petisco para reduzir custos?'] },
          { day: 6, label: 'Dia 6 — Porte e Custo', tasks: ['Cão de porte grande come 2-4x mais', 'Medicações por peso: maior = mais caro', 'Raça com predisposição: reserva maior?'] },
          { day: 7, label: 'Dia 7 — Planejamento de Longo Prazo', tasks: ['Cão sênior terá mais custos médicos', 'A partir de 7-8 anos: prever aumento de despesas', 'Fundo de emergência suficiente para fase sênior?'] },
        ],
        vetAlert: ['Emergência sem recursos: ONG veterinária, HOVET universitário, veterinário de baixo custo'],
        prevention: ['Prevenção sempre mais barata que tratamento', 'Fundo de emergência dedicado', 'Seguro pet para cirurgias e internações'],
        myths: [{ myth: 'Ração mais barata economiza dinheiro', truth: 'Rações de baixa qualidade causam mais doenças, mais consultas e mais custos a longo prazo. O custo por dia de alimentação de boa qualidade é frequentemente menor do que parece quando calculado por porção.' }],
        faq: [
          { q: 'Vale a pena fazer seguro pet?', a: 'Depende do porte, raça e condição de saúde do cão. Para raças de alto risco (gigantes, braquicefálicos) ou tutores sem reserva de emergência: muito válido. Coberturas a avaliar: cirurgia, internação, fisioterapia. Compare planos disponíveis na sua cidade.' },
          { q: 'O HOVET (hospital universitário veterinário) é uma opção de baixo custo?', a: 'Sim. Clínicas universitárias veterinárias geralmente cobram 30-60% menos que clínicas privadas. Tempo de espera pode ser maior. Ótima opção para procedimentos eletivos e doenças crônicas em famílias com dificuldade financeira.' },
          { q: 'Quanto custa em média uma cirurgia de emergência veterinária?', a: 'Grande variação por cidade e procedimento. Estimativas: GDV (torção gástrica): R$3.000-10.000. Obstrução intestinal: R$2.500-8.000. Fratura: R$1.500-5.000. UTI: R$500-1.500/dia. Fundo de emergência de R$5.000 cobre maioria das situações.' },
        ],
      }],
    },
  ],
};
