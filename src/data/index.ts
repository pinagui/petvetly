import type { Category } from './types';

// Phase 1 — original 34
import { catPatas } from './cat_patas';
import { catPele } from './cat_pele';
import { catDigestivo } from './cat_digestivo';
import { catComportamento } from './cat_comportamento';
import { catOlhosOuvidos } from './cat_olhos_ouvidos';
import { catEmergencias } from './cat_emergencias';
import { catNutricao } from './cat_nutricao';
import { catArticulacoes } from './cat_articulacoes';
import { catRespiratorio } from './cat_respiratorio';
import { catParasitas } from './cat_parasitas';
import { catDental } from './cat_dental';
import { catFilhotes } from './cat_filhotes';
import { catIdosos } from './cat_idosos';
import { catRenal } from './cat_renal';
import { catCardiaco } from './cat_cardiaco';
import { catEndocrino } from './cat_endocrino';
import { catFeridas } from './cat_feridas';
import { catNeurologico } from './cat_neurologico';
import { catReprodutivo } from './cat_reprodutivo';
import { catOftalmologico } from './cat_oftalmologico';
import { catInfectologico } from './cat_infectologico';
import { catOncologico } from './cat_oncologico';
import { catToxicologia } from './cat_toxicologia';
import { catDermatologia } from './cat_dermatologia';
import { catSazonal } from './cat_sazonal';
import { catBraquicefalico } from './cat_braquicefalico';
import { catComportamento2 } from './cat_comportamento2';
import { catHepatico } from './cat_hepatico';
import { catImunologico } from './cat_imunologico';
import { catViroses } from './cat_viroses';
import { catOrtopedia2 } from './cat_ortopedia2';
import { catCastracao } from './cat_castracao';
import { catFisioterapia } from './cat_fisioterapia';
import { catVacinas } from './cat_vacinas';

// Phase 2 — 20 categories (cuidados e estilo de vida)
import { catBanhoHigiene } from './cat_banho_higiene';
import { catUnhasPedicure } from './cat_unhas_pedicure';
import { catPesoControle } from './cat_peso_controle';
import { catExercicio } from './cat_exercicio';
import { catViagem } from './cat_viagem';
import { catAdestramento } from './cat_adestramento';
import { catAdaptacao } from './cat_adaptacao';
import { catRacao } from './cat_racao';
import { catSuplementos } from './cat_suplementos';
import { catDentario } from './cat_dentario';
import { catOuvidoCuidados } from './cat_ouvido_cuidados';
import { catPrimeirosSocorros } from './cat_primeiros_socorros';
import { catColuna } from './cat_coluna';
import { catAgressividade } from './cat_agressividade';
import { catNeonatal } from './cat_neonatal';
import { catAdolescente } from './cat_adolescente';
import { catApartamento } from './cat_apartamento';
import { catCriancasPet } from './cat_criancas_pet';
import { catHidratacao } from './cat_hidratacao';
import { catCheckAnual } from './cat_check_anual';

// Phase 3 — 41 categories (doenças específicas e situações avançadas)
import { catCobraPicada } from './cat_cobra_picada';
import { catEstomago } from './cat_estomago';
import { catIntestino } from './cat_intestino';
import { catBexiga } from './cat_bexiga';
import { catTireoidea } from './cat_tireoidea';
import { catAlergiaAlimentar } from './cat_alergia_alimentar';
import { catAlergiaAmbiental } from './cat_alergia_ambiental';
import { catUrolitiase } from './cat_urolitiase';
import { catHematologia } from './cat_hematologia';
import { catCoprofagia } from './cat_coprofagia';
import { catMarcacao } from './cat_marcacao';
import { catDestruicao } from './cat_destruicao';
import { catFuga } from './cat_fuga';
import { catRacasGigantes } from './cat_racas_gigantes';
import { catRacasToy } from './cat_racas_toy';
import { catLutoPet } from './cat_luto_pet';
import { catEsporteCanino } from './cat_esporte_canino';
import { catQueimadura } from './cat_queimadura';
import { catSono } from './cat_sono';
import { catHigieneBucal } from './cat_higiene_bucal';
import { catOlhoAvancado } from './cat_olho_avancado';
import { catProstata } from './cat_prostata';
import { catMultiespecie } from './cat_multiespecie';
import { catCustosVet } from './cat_custos_vet';
import { catLeishmaniose } from './cat_leishmaniose';
import { catDorCronica } from './cat_dor_cronica';
import { catViroseAvancada } from './cat_virose_avancada';
import { catCaoPerdido } from './cat_cao_perdido';
import { catCognitivo } from './cat_cognitivo';
import { catZoonoses } from './cat_zoonoses';
import { catGravidezParto } from './cat_gravidez_parto';
import { catMicrobioma } from './cat_microbioma';
import { catCalorHipotermia } from './cat_calor_hipotermia';
import { catPetHotel } from './cat_pet_hotel';
import { catFebre } from './cat_febre';
import { catMedicamentos } from './cat_medicamentos';
import { catReabilitacao } from './cat_reabilitacao';
import { catEstresseAmbiental } from './cat_estresse_ambiental';
import { catHernia } from './cat_hernia';
import { catAdocao } from './cat_adocao';
import { catRacasCondrodistroficas } from './cat_racas_condrodistroficas';

// Phase 4 — 5 categories (especializados)
import { catGravidezFalsa } from './cat_gravidez_falsa';
import { catPlantasToxicas } from './cat_plantas_toxicas';
import { catHipertensao } from './cat_hipertensao';
import { catBaco } from './cat_baco';
import { catMuscular } from './cat_muscular';

export const allCategories: Category[] = [
  // Emergências primeiro (mais crítico)
  catEmergencias,
  catCobraPicada,
  catCalorHipotermia,
  catQueimadura,
  catPlantasToxicas,
  catPrimeirosSocorros,

  // Pele, patas e aparência
  catPele,
  catPatas,
  catDermatologia,
  catAlergiaAlimentar,
  catAlergiaAmbiental,
  catSazonal,
  catParasitas,

  // Digestivo e nutrição
  catDigestivo,
  catEstomago,
  catIntestino,
  catHepatico,
  catMicrobioma,
  catNutricao,
  catRacao,
  catSuplementos,
  catHidratacao,
  catPesoControle,

  // Urinário e reprodutivo
  catRenal,
  catBexiga,
  catUrolitiase,
  catReprodutivo,
  catGravidezParto,
  catGravidezFalsa,
  catProstata,
  catCastracao,

  // Coração, circulação e sangue
  catCardiaco,
  catHipertensao,
  catHematologia,
  catBaco,

  // Ossos, articulações e músculos
  catArticulacoes,
  catOrtopedia2,
  catColuna,
  catHernia,
  catRacasCondrodistroficas,
  catFisioterapia,
  catReabilitacao,
  catMuscular,
  catDorCronica,
  catEsporteCanino,

  // Respiratório e braquicéfalo
  catRespiratorio,
  catBraquicefalico,
  catRacasToy,
  catRacasGigantes,

  // Olhos, ouvidos e boca
  catOlhosOuvidos,
  catOftalmologico,
  catOlhoAvancado,
  catDental,
  catDentario,
  catHigieneBucal,
  catOuvidoCuidados,

  // Neurológico e endócrino
  catNeurologico,
  catEndocrino,
  catTireoidea,
  catCognitivo,

  // Oncologia e imunologia
  catOncologico,
  catImunologico,

  // Infecções, viroses e zoonoses
  catInfectologico,
  catViroses,
  catViroseAvancada,
  catLeishmaniose,
  catZoonoses,
  catVacinas,
  catFebre,

  // Toxicologia e medicamentos
  catToxicologia,
  catMedicamentos,

  // Comportamento
  catComportamento,
  catComportamento2,
  catAgressividade,
  catCoprofagia,
  catMarcacao,
  catDestruicao,
  catFuga,
  catEstresseAmbiental,
  catSono,
  catAdestramento,

  // Cuidados cotidianos e higiene
  catBanhoHigiene,
  catUnhasPedicure,
  catExercicio,
  catCheckAnual,
  catCustosVet,

  // Fases da vida
  catFilhotes,
  catNeonatal,
  catAdolescente,
  catAdocao,
  catIdosos,
  catFeridas,

  // Raças e situações especiais
  catMultiespecie,
  catApartamento,
  catCriancasPet,
  catViagem,
  catPetHotel,
  catAdaptacao,
  catCaoPerdido,
  catLutoPet,
];

export function getCategoryById(id: string): Category | undefined {
  return allCategories.find(c => c.id === id);
}

export function getConditionById(categoryId: string, conditionId: string) {
  const cat = getCategoryById(categoryId);
  return cat?.conditions.find(c => c.id === conditionId);
}

export function getProtocolById(categoryId: string, conditionId: string, protocolId: string) {
  const cond = getConditionById(categoryId, conditionId);
  return cond?.protocols.find(p => p.id === protocolId);
}

export function searchAll(query: string): { category: Category; matches: string[] }[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return allCategories
    .map(cat => {
      const matches: string[] = [];
      if (cat.name.toLowerCase().includes(q)) matches.push(cat.name);
      cat.conditions.forEach(cond => {
        if (cond.name.toLowerCase().includes(q) || cond.description.toLowerCase().includes(q)) {
          matches.push(cond.name);
        }
        cond.protocols.forEach(proto => {
          if (proto.title.toLowerCase().includes(q) || proto.subtitle.toLowerCase().includes(q)) {
            matches.push(proto.title);
          }
          proto.stages.forEach(s => {
            if (s.signs.some(sign => sign.toLowerCase().includes(q))) {
              matches.push(`${cond.name}: ${s.label}`);
            }
          });
        });
      });
      return { category: cat, matches: [...new Set(matches)] };
    })
    .filter(r => r.matches.length > 0);
}

export const stats = {
  categories: allCategories.length,
  conditions: allCategories.reduce((sum, cat) => sum + cat.conditions.length, 0),
  protocols: allCategories.reduce((sum, cat) =>
    sum + cat.conditions.reduce((s, c) => s + c.protocols.length, 0), 0),
  checklists: allCategories.reduce((sum, cat) =>
    sum + cat.conditions.reduce((s, c) =>
      s + c.protocols.reduce((ss, p) => ss + p.checklists.length, 0), 0), 0),
};
