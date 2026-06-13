import type { Category } from './types';
export const catPlantasToxicas: Category = {
  id: 'plantas-toxicas', name: 'Plantas Tóxicas para Cão', emoji: '🌿', gradient: 'g-red',
  description: 'As principais plantas do jardim e de casa que são perigosas para cães',
  conditions: [
    {
      id: 'intoxicacao-planta', name: 'Intoxicação por Plantas', emoji: '🌿', gradient: 'g-red',
      description: 'Cão que comeu planta do jardim — como reconhecer, quais são perigosas e tratamento',
      prevalence: 'Intoxicação por plantas é frequente, especialmente em filhotes que exploram o ambiente com a boca',
      protocols: [{
        id: 'p1', title: 'Protocolo Intoxicação por Plantas', subtitle: 'Plantas de alto risco, CEVAP e tratamento',
        stages: [
          { id: 's1', label: 'Ingestão Recente', urgency: 'emergency', description: 'Janela para indução de vômito.', signs: ['Ingestão confirmada < 2h', 'Ainda sem sintomas', 'Identificou a planta'] },
          { id: 's2', label: 'Intoxicação Estabelecida', urgency: 'emergency', description: 'Sintomas neurológicos, digestivos ou cardíacos.', signs: ['Vômito e diarreia intensos', 'Tremores ou convulsão', 'Pupilas dilatadas', 'Ritmo cardíaco irregular', 'Colapso'] },
        ],
        triggers: ['Filhote explorando o jardim', 'Planta de interior ao alcance do cão', 'Flores ornamentais que caem no chão'],
        steps: [
          { title: 'Plantas de ALTO RISCO — lista essencial', icon: '☠️', duration: 'Emergência veterinária imediata',
            description: 'Identificar a planta e ir ao veterinário com o nome ou foto.',
            checklist: ['COMIGO-NINGUÉM-PODE (Dieffenbachia): irritação oral grave', 'LÍRIO-DA-PAZ (Spathiphyllum): moderadamente tóxico', 'AZALEIA: vômito, tremores, bradicardia', 'AMENDOEIRA-DA-PRAIA (Terminalia): sementes tóxicas', 'SAGO (Cicas): ALTAMENTE TÓXICO — insuficiência hepática aguda', 'BABOSA (Aloe vera): diarreia (partes amarelas da folha)', 'LOSNA/ABSINTO: neurotóxico', 'VETERINÁRIO + CEVAP: 0800-722-6001 imediatamente', 'Trazer amostra ou foto da planta ao veterinário'] },
        ],
        checklists: [{ label: 'Segurança de Plantas em Casa', freq: 'monthly', items: ['Plantas de interior identificadas como seguras ou perigosas?', 'Plantas tóxicas fora do alcance do cão?', 'CEVAP salvo no celular?', 'Veterinário de emergência no contato?'] }],
        weeklyPlan: [
          { day: 1, label: 'Emergência — Ingestão', tasks: ['CEVAP: 0800-722-6001', 'Veterinário imediatamente', 'Identificar a planta (foto ou nome)?'], note: 'Não induzir vômito em casa sem orientação — algumas plantas: vômito pode piorar' },
          { day: 2, label: 'Tratamento', tasks: ['Carvão ativado: absorção de toxinas (veterinário administra)', 'Suporte de sintomas específicos da planta?', 'Hidratação IV se vômito e diarreia intensos'] },
          { day: 3, label: 'Monitoramento', tasks: ['Sinais neurológicos?', 'Função hepática e renal?', 'Melhora em 24-48h?'] },
          { day: 4, label: 'Prevenção', tasks: ['Mapear todas as plantas em casa e jardim', 'ASPCA Animal Poison Control: banco de dados online de plantas tóxicas', 'Retirar as mais perigosas ou colocar fora do alcance'] },
          { day: 5, label: 'Jardim Seguro', tasks: ['Sago Palm (Cicas): remover do jardim (causa morte por insuficiência hepática)', 'Azaleia: remover ou cercar', 'Plantas ornamentais: pesquisar antes de comprar'] },
          { day: 6, label: 'Plantas Seguras para Cão', tasks: ['Samambaia de Boston: segura', 'Girassol: seguro', 'Begônia: levemente tóxica (evitar)', 'Bambu: seguro'] },
          { day: 7, label: 'Educação da Família', tasks: ['Família sabe quais plantas são perigosas?', 'CEVAP salvo em todos os celulares da família?', 'Cão é supervisionado no jardim?'] },
        ],
        vetAlert: ['Ingestão de Sago/Cicas: EMERGÊNCIA MÁXIMA — mortalidade alta', 'Convulsão após ingestão de planta', 'Qualquer ingestão de planta desconhecida: CEVAP + veterinário'],
        prevention: ['Pesquisar toxicidade ANTES de trazer planta nova para casa', 'Sago (Cicas): não ter em jardim com cão', 'Filhote: jardim supervisionado sempre'],
        myths: [{ myth: 'Plantas naturais são sempre inofensivas para cão', truth: 'Muitas plantas produzem toxinas como mecanismo de defesa. Algumas das plantas mais tóxicas para cão são ornamentais comuns (Cicas, azaleia). "Natural" não significa seguro.' }],
        faq: [
          { q: 'Cão pode comer capim de jardim?', a: 'Capim comum: geralmente seguro e pode ser comportamento de auto-regulação digestiva (cão induz vômito ou supre necessidade de fibra). Capim tratado com herbicida/pesticida: tóxico. Grama ornamental: verificar espécie.' },
          { q: 'Babosa é tóxica para cão?', a: 'Parte interna (gel): muito pouco tóxica, usada topicamente com segurança. Parte amarela (latex aloína): causa diarreia e cólica se ingerida. Ingestão de folha inteira: não recomendada, pode causar vômito e diarreia.' },
        ],
      }],
    },
  ],
};
