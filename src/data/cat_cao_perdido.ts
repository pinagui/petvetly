import type { Category } from './types';
export const catCaoPerdido: Category = {
  id: 'cao-perdido', name: 'Cão Perdido — O Que Fazer', emoji: '🔍', gradient: 'g-amber',
  description: 'Protocolos imediatos quando o cão foge ou se perde — busca eficaz nas primeiras horas',
  conditions: [
    {
      id: 'cao-fugiu', name: 'Cão Fugiu — Ação Imediata', emoji: '🔍', gradient: 'g-amber',
      description: 'Primeiras 24 horas são críticas — estratégias de busca eficaz',
      prevalence: 'Cão sem microchip: apenas 22% retornam. Com microchip: mais de 50% retornam',
      protocols: [{
        id: 'p1', title: 'Protocolo Cão Perdido', subtitle: 'Primeiras 24h, redes sociais, ONGs e microchip',
        stages: [
          { id: 's1', label: 'Primeiras Horas', urgency: 'high', description: 'Ação imediata aumenta drasticamente as chances de retorno.', signs: ['Cão fugiu do quintal ou escapou durante passeio', 'Assustado por barulho (fogos, trovão)', 'Portão aberto inadvertidamente'] },
          { id: 's2', label: 'Mais de 24h', urgency: 'high', description: 'Estratégia de busca ampliada necessária.', signs: ['Não retornou ao lar', 'Não encontrado na região imediata', 'Expansão do raio de busca'] },
        ],
        triggers: ['Fogos de artifício e trovão: principal causa de fuga', 'Portão aberto', 'Guia partida ou coleira soltou', 'Perseguição de gato/outro animal'],
        steps: [
          { title: 'Protocolo de busca imediato', icon: '🔍', duration: 'Imediato',
            description: 'Agir nas primeiras 2 horas aumenta muito as chances.',
            checklist: ['IMEDIATO: percorrer a vizinhança chamando pelo nome', 'Foto atualizada: postar em todos os grupos de animais perdidos da cidade', 'Facebook: grupos locais de pets perdidos', 'Instagram: hashtag com nome da cidade', 'WhatsApp: enviar para grupos de bairro', 'Veterinários locais: avisados com foto e telefone', 'CCZ municipal: cão capturado pode estar lá', 'Vizinhos: deixar papel com foto e contato', 'Microchip: informar perda no SINID (sinid.br)'] },
        ],
        checklists: [{ label: 'Busca Ativa', freq: 'daily', items: ['Grupos de redes sociais postados?', 'CCZ local contactado?', 'Veterinários da região avisados?', 'Panfletos nas imediações?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Primeiras Horas', tasks: ['Percorrer ruas no raio de 2km', 'Grupos de FB da cidade AGORA', 'CCZ municipal contactado'], note: 'Cão assustado geralmente se esconde — não vai latir ou aparecer ao ser chamado imediatamente' },
          { day: 2, label: 'Dia 2 — Expansão', tasks: ['Abrigos e ONGs locais visitados (não só ligados)', 'Clínicas veterinárias: aviso físico', 'Raio expandido: 5km', 'Anúncio no Olx/Marketplace?'] },
          { day: 3, label: 'Dia 3 — Panfletos', tasks: ['Panfleto impresso: foto grande, nome, telefone, recompensa', 'Postes, padarias, supermercados, pet shops', 'Pessoas que passeiam cedo e tarde: pedir para avisar'] },
          { day: 4, label: 'Dia 4 — Rastreamento', tasks: ['Visitar o local onde fugiu com frequência (cão retorna)', 'Deixar roupa com seu cheiro na porta de casa', 'Comida favorita próxima ao local de fuga'] },
          { day: 5, label: 'Dia 5 — Armadilha Humanitária', tasks: ['Armadilha com comida: captura sem machucar', 'Câmera de movimento próxima?', 'Vizinhança próxima reavaliada?'] },
          { day: 6, label: 'Dia 6 — Cão Encontrado Ferido', tasks: ['Abordagem calma — cão assustado pode morder', 'Veterinário imediatamente', 'Não forçar — deixar o animal chegar até você'] },
          { day: 7, label: 'Dia 7 — Prevenção Futura', tasks: ['Microchip e registro atualizados?', 'Coleira com plaquinha legível?', 'Cerca e portão avaliados?', 'GPS collar considerado?'] },
        ],
        vetAlert: ['Cão retornou ferido: veterinário imediato', 'Cão assustado pode morder mesmo o dono — abordagem calma'],
        prevention: ['Microchip + registro SINID', 'Plaquinha com telefone na coleira', 'Quintal à prova de fuga', 'Collar GPS para cães de alta fuga'],
        myths: [{ myth: 'Cão sempre volta sozinho', truth: 'Cão de companhia perdido raramente sabe voltar sozinho — ao contrário do cão de fazenda. Rua com carros, estresse e confusão: pode ficar parado em um lugar. Busca ativa nas primeiras horas é fundamental.' }],
        faq: [
          { q: 'Devo deixar comida no jardim para o cão retornar?', a: 'Sim. Comida favorita com cheiro familiar próximo ao portão. Roupas com seu cheiro. Cão perdido pode rondar a casa à noite com medo de se aproximar de dia — câmera de movimento pode capturá-lo.' },
          { q: 'Como encontrar o CCZ da minha cidade?', a: 'Google "CCZ + nome da cidade". CCZ (Centro de Controle de Zoonoses) recolhe cães da rua. Visitar pessoalmente (ligação nem sempre é suficiente) com foto. Ir antes da eutanásia programada do canil municipal.' },
        ],
      }],
    },
  ],
};
