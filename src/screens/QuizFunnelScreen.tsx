import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronLeft, ShieldCheck, Clock, Sparkles, Gift } from 'lucide-react';
import { captureUTMs, track, saveLead, checkoutUrl } from '../lib/funnelTracking';
import { fbqTrack } from '../lib/pixel';

/* ════════════════════════════════════════════════════════════════════
   CONFIGURAÇÃO — troque pelos seus links de checkout da Hotmart
   ════════════════════════════════════════════════════════════════════ */
const CHECKOUT_PROTOCOLO = 'https://pay.hotmart.com/G106054137K';           // R$ 97 — Método Patas Saudáveis
const CHECKOUT_APP_MENSAL = 'https://pay.hotmart.com/J106307416B?off=u7b0kisi'; // R$ 14,90/mês — PetVetly completo
const CHECKOUT_APP_ANUAL = 'https://pay.hotmart.com/J106307416B?off=4bf7rjdg'; // R$ 67/ano — PetVetly completo anual
/* Foto da Dra. Ana: salve a imagem como  public/dra-ana.jpg  */
const FOTO_DRA = '/dra-ana.jpg';

/* ════════════════════════════════════════════════════════════════════
   TEMA CLARO FORÇADO — o funil roda sempre em modo claro, com textos
   escuros o suficiente para leitura (mesmo se o app estiver em dark)
   ════════════════════════════════════════════════════════════════════ */
const LIGHT: CSSProperties = {
  background: '#F2F2F7',
  ['--page' as string]: '#F2F2F7',
  ['--surface' as string]: '#FFFFFF',
  ['--surface2' as string]: '#ECECF1',
  ['--border' as string]: '#E0E0E6',
  ['--border2' as string]: '#D1D1D6',
  ['--text1' as string]: '#1C1C1E',
  ['--text2' as string]: '#3A3A40',
  ['--text3' as string]: '#5A5A60',
  ['--text4' as string]: '#7A7A82',
  ['--accent' as string]: '#0D9488',
};

/* ════════════════════════════════════════════════════════════════════
   EMOJIS 3D — Microsoft Fluent Emoji 3D via CDN (fallback: emoji comum)
   ════════════════════════════════════════════════════════════════════ */
const FLUENT: Record<string, string> = {
  '🐶': 'Dog face', '🐕': 'Dog', '🦮': 'Guide dog', '🐾': 'Paw prints',
  '🦴': 'Bone', '🍖': 'Meat on bone',
  '🎉': 'Party popper', '✨': 'Sparkles', '🧩': 'Puzzle piece',
  '🔍': 'Magnifying glass tilted left', '⏰': 'Alarm clock', '⏱️': 'Stopwatch',
  '🌙': 'Crescent moon', '🌅': 'Sunrise', '☀️': 'Sun',
  '🏠': 'House', '🚪': 'Door', '🔑': 'Key', '🏢': 'Office building',
  '🛋️': 'Couch and lamp', '🧱': 'Brick', '🌱': 'Seedling', '🧊': 'Ice',
  '💵': 'Dollar banknote', '💰': 'Money bag', '💸': 'Money with wings',
  '🤯': 'Exploding head', '🙈': 'See-no-evil monkey',
  '💊': 'Pill', '🧴': 'Lotion bottle', '🛁': 'Bathtub', '⚠️': 'Warning',
  '💧': 'Droplet', '🫧': 'Bubbles',
  '😌': 'Relieved face', '😯': 'Hushed face', '😟': 'Worried face',
  '😰': 'Anxious face with sweat', '😣': 'Persevering face',
  '😠': 'Angry face', '😔': 'Pensive face', '😑': 'Expressionless face',
  '😅': 'Grinning face with sweat', '😞': 'Disappointed face',
  '😨': 'Fearful face', '🌀': 'Cyclone', '🤔': 'Thinking face',
  '💪': 'Flexed biceps', '💔': 'Broken heart', '🏥': 'Hospital',
  '⏳': 'Hourglass not done', '🗓️': 'Spiral calendar', '📅': 'Calendar',
  '🎆': 'Fireworks', '🛎️': 'Bellhop bell', '🍗': 'Poultry leg',
  '🩹': 'Adhesive bandage', '🔴': 'Red circle', '🟠': 'Orange circle',
  '🟤': 'Brown circle', '✅': 'Check mark button', '😿': 'Crying cat',
  '😴': 'Sleeping face', '📋': 'Clipboard', '📊': 'Bar chart', '📚': 'Books',
  '🛡️': 'Shield',
  '📉': 'Chart decreasing', '🤷': 'Person shrugging', '🌿': 'Herb',
  '🦠': 'Microbe', '🎯': 'Bullseye', '📱': 'Mobile phone', '🎁': 'Wrapped gift',
};

function fluentUrl(emoji: string): string | null {
  const name = FLUENT[emoji];
  if (!name) return null;
  const folder = encodeURIComponent(name);
  const file = name.toLowerCase().replace(/-/g, '-').replace(/ /g, '_');
  return `https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji/assets/${folder}/3D/${file}_3d.png`;
}

function Emoji3D({ e, size = 26 }: { e: string; size?: number }) {
  const [failed, setFailed] = useState(false);
  const url = fluentUrl(e);
  if (!url || failed) {
    return <span style={{ fontSize: size * 0.84, lineHeight: 1, filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.14))' }}>{e}</span>;
  }
  return (
    <img src={url} alt="" width={size} height={size} loading="lazy"
      onError={() => setFailed(true)}
      style={{ width: size, height: size, objectFit: 'contain', filter: 'drop-shadow(0 3px 5px rgba(0,0,0,0.18))' }} />
  );
}

/* ════════════════════════════════════════════════════════════════════
   SONS FOFOS — Web Audio API (sem arquivos), varia a cada resposta
   ════════════════════════════════════════════════════════════════════ */
let _actx: AudioContext | null = null;
function actx(): AudioContext | null {
  try {
    if (!_actx) _actx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    if (_actx.state === 'suspended') _actx.resume();
    return _actx;
  } catch { return null; }
}

function tone(freq: number, dur: number, type: OscillatorType, vol: number, when = 0, slideTo?: number) {
  const ctx = actx();
  if (!ctx) return;
  const t0 = ctx.currentTime + when;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(vol, t0 + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t0);
  osc.stop(t0 + dur + 0.05);
}

/* au-au fofinho */
const sndBark = () => { tone(160, 0.09, 'square', 0.12, 0, 95); tone(150, 0.1, 'square', 0.12, 0.16, 88); };
/* pop de bolha */
const sndPop = () => tone(420, 0.12, 'sine', 0.2, 0, 880);
/* sininho */
const sndDing = () => { tone(880, 0.18, 'triangle', 0.14); tone(1320, 0.22, 'triangle', 0.08, 0.04); };
/* boing de brinquedo */
const sndBoing = () => tone(300, 0.22, 'sine', 0.16, 0, 150);
/* squeak de brinquedo de cachorro */
const sndSqueak = () => { tone(900, 0.1, 'sine', 0.13, 0, 1500); tone(1400, 0.12, 'sine', 0.1, 0.11, 850); };
/* chime de conquista */
const sndChime = () => { tone(660, 0.14, 'triangle', 0.13); tone(880, 0.14, 'triangle', 0.13, 0.12); tone(1100, 0.25, 'triangle', 0.12, 0.24); };

const ANSWER_SOUNDS = [sndPop, sndBark, sndDing, sndSqueak, sndBoing];
const playAnswer = (i: number) => { try { ANSWER_SOUNDS[i % ANSWER_SOUNDS.length](); } catch { /* sem áudio */ } };

/* ════════════════════════════════════════════════════════════════════
   CHUVA DE PETISCOS — a cada resposta caem rações/ossinhos 🦴🍖🐾
   ════════════════════════════════════════════════════════════════════ */
const KIBBLE = ['🦴', '🍖', '🐾', '🦴', '🐾', '🍗'];

function KibbleRain({ burst }: { burst: number }) {
  const items = useMemo(() => {
    if (!burst) return [];
    return Array.from({ length: 7 }, (_, i) => ({
      id: `${burst}-${i}`,
      x: 4 + Math.random() * 90,
      delay: Math.random() * 0.3,
      e: KIBBLE[Math.floor(Math.random() * KIBBLE.length)],
      size: 20 + Math.random() * 16,
      rot: (Math.random() - 0.5) * 380,
    }));
  }, [burst]);

  if (!burst) return null;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
      {items.map(it => (
        <motion.span key={it.id}
          className="absolute"
          style={{ left: `${it.x}%` }}
          initial={{ top: '-8%', opacity: 1, rotate: 0 }}
          animate={{ top: '108%', opacity: [1, 1, 0.7], rotate: it.rot }}
          transition={{ duration: 1.5, delay: it.delay, ease: [0.4, 0, 0.9, 0.6] }}>
          <Emoji3D e={it.e} size={it.size} />
        </motion.span>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PERGUNTAS
   ════════════════════════════════════════════════════════════════════ */
interface QOpt { label: string; value: string; emoji?: string; }
interface QDef {
  id: string;
  title: string;
  sub?: string;
  multi?: boolean;
  options: QOpt[];
  showIf?: (answers: Answers) => boolean;
  section: number;
}
type Answers = Record<string, string | string[]>;

const QUESTIONS: QDef[] = [
  {
    id: 'q1', section: 1, title: 'Com que frequência, nos últimos 30 dias, você percebeu seu cachorro lambendo as patas?',
    options: [
      { emoji: '🌤️', label: 'Umas 2-3 vezes na semana, pelo menos.', value: 'raro' },
      { emoji: '⏱️', label: 'Quase todo dia, mas por pouco tempo.', value: 'quase' },
      { emoji: '📅', label: 'Todo dia. Por vários minutos.', value: 'diario' },
      { emoji: '⏰', label: 'Todo dia. Horas. Parece que não para.', value: 'horas' },
      { emoji: '🌙', label: 'Ele acorda de madrugada para lamber.', value: 'madrugada' },
    ]
  },
  {
    id: 'q2', section: 1, title: 'Quando ele lambe, qual a intensidade?',
    options: [
      { emoji: '😌', label: 'Lambidas leves. Parece mais um hábito.', value: 'leve' },
      { emoji: '😯', label: 'Lambidas constantes. Ele fica focado naquilo.', value: 'constante' },
      { emoji: '😟', label: 'Ele lambe com força. Dá para ouvir de longe.', value: 'forte' },
      { emoji: '😰', label: 'Ele morde a pata junto. Não é só lamber.', value: 'morde' },
    ]
  },
  {
    id: 'q3', section: 1, title: 'Qual pata ele mais lambe?',
    options: [
      { emoji: '🐾', label: 'Dianteira direita', value: 'dd' },
      { emoji: '🐾', label: 'Dianteira esquerda', value: 'de' },
      { emoji: '🐾', label: 'Traseira direita', value: 'td' },
      { emoji: '🐾', label: 'Traseira esquerda', value: 'te' },
      { emoji: '🔄', label: 'Mais de uma. Alterna.', value: 'alterna' },
      { emoji: '🐕', label: 'Todas as 4.', value: 'todas' },
    ]
  },
  {
    id: 'q4', section: 1, title: 'Qual a aparência da pata do seu cachorro NESTE MOMENTO?',
    options: [
      { emoji: '✅', label: 'Ainda normal (rosa/clara) — mas ele não para de lamber.', value: 'normal' },
      { emoji: '🟠', label: 'Pelo um pouco escurecido (tom ferrugem).', value: 'ferrugem' },
      { emoji: '🟤', label: 'Pelo bem escuro (quase marrom).', value: 'escuro' },
      { emoji: '🔴', label: 'Vermelha.', value: 'vermelha' },
      { emoji: '💧', label: 'Vermelha e úmida/molhada.', value: 'umida' },
      { emoji: '🩹', label: 'Com ferida aberta ou crosta.', value: 'ferida' },
    ]
  },
  {
    id: 'q5', section: 1, title: 'Quando você percebeu o PRIMEIRO sinal de lambedura?',
    options: [
      { emoji: '🗓️', label: 'Menos de 1 semana atrás.', value: 'semana' },
      { emoji: '🗓️', label: '1-4 semanas atrás.', value: 'mes' },
      { emoji: '🗓️', label: '1-3 meses atrás.', value: '3meses' },
      { emoji: '🗓️', label: '3-6 meses atrás.', value: '6meses' },
      { emoji: '🗓️', label: 'Mais de 6 meses atrás.', value: 'mais6' },
      { emoji: '🤔', label: 'Não lembro. Faz muito tempo.', value: 'sempre' },
    ]
  },
  {
    id: 'q6', section: 2, title: 'Você já levou seu cachorro ao veterinário por causa dessa lambedura?',
    options: [
      { emoji: '🏥', label: 'Sim, uma vez.', value: 'sim1' },
      { emoji: '🏥', label: 'Sim, 2-3 vezes.', value: 'sim2' },
      { emoji: '🏥', label: 'Sim, mais de 3 vezes.', value: 'sim3' },
      { emoji: '🤷', label: 'Ainda não, mas estou considerando.', value: 'nao_considera' },
      { emoji: '🏠', label: 'Não. Prefiro tentar resolver sozinho antes.', value: 'nao' },
    ]
  },
  {
    id: 'q7', section: 2, title: 'O que o veterinário disse?',
    showIf: a => typeof a.q6 === 'string' && a.q6.startsWith('sim'),
    options: [
      { emoji: '😰', label: 'Disse que era ansiedade.', value: 'ansiedade' },
      { emoji: '🌿', label: 'Disse que era alergia, mas não especificou.', value: 'alergia' },
      { emoji: '🦠', label: 'Disse que era fungo ou bactéria.', value: 'fungo' },
      { emoji: '🔁', label: 'Disse que era mania/comportamental.', value: 'mania' },
      { emoji: '❓', label: 'Não deu um diagnóstico claro.', value: 'sem_diag' },
      { emoji: '💊', label: 'Passou remédio e não explicou direito.', value: 'remedio' },
    ]
  },
  {
    id: 'q8', section: 2, title: 'O que você já tentou para resolver?', sub: 'Pode marcar mais de um', multi: true,
    options: [
      { emoji: '🧴', label: 'Spray antilambedura', value: 'spray' },
      { emoji: '🩹', label: 'Pomada ou creme', value: 'pomada' },
      { emoji: '😿', label: 'Colar elizabetano (cone)', value: 'cone' },
      { emoji: '🍖', label: 'Troca de ração', value: 'racao' },
      { emoji: '🛁', label: 'Shampoo veterinário', value: 'shampoo' },
      { emoji: '💊', label: 'Ansiolítico ou calmante', value: 'calmante' },
      { emoji: '👀', label: 'Nada ainda. Só observando.', value: 'nada' },
    ]
  },
  {
    id: 'q9', section: 2, title: 'O que aconteceu depois que você tentou essas coisas?',
    showIf: a => Array.isArray(a.q8) && !(a.q8.length === 1 && a.q8[0] === 'nada'),
    options: [
      { emoji: '↩️', label: 'Melhorou por alguns dias, depois voltou.', value: 'voltou' },
      { emoji: '😑', label: 'Não fez diferença nenhuma.', value: 'nada' },
      { emoji: '📉', label: 'Melhorou enquanto usava, piorou depois.', value: 'piorou' },
      { emoji: '😅', label: 'Não consegui aplicar direito.', value: 'nao_aplicou' },
    ]
  },
  {
    id: 'q10', section: 3, title: 'Existe algum HORÁRIO específico em que ele lambe mais?',
    options: [
      { emoji: '🌅', label: 'Manhã (ao acordar)', value: 'manha' },
      { emoji: '☀️', label: 'Tarde', value: 'tarde' },
      { emoji: '🌆', label: 'Noite (antes de dormir)', value: 'noite' },
      { emoji: '🌙', label: 'De madrugada', value: 'madrugada' },
      { emoji: '🏠', label: 'Depois de eu chegar do trabalho', value: 'chegada' },
      { emoji: '🚪', label: 'Depois de eu sair de casa', value: 'saida' },
      { emoji: '🤷', label: 'Não tem horário fixo', value: 'sem_horario' },
    ]
  },
  {
    id: 'q11', section: 3, title: 'O que acontece POUCO ANTES de ele começar a lamber?', sub: 'Pode marcar mais de um', multi: true,
    options: [
      { emoji: '🚪', label: 'Eu saio de casa', value: 'saio' },
      { emoji: '🔑', label: 'Eu chego em casa', value: 'chego' },
      { emoji: '🍖', label: 'Ele come', value: 'come' },
      { emoji: '🦮', label: 'Ele volta do passeio', value: 'passeio' },
      { emoji: '🛎️', label: 'Tem visita em casa', value: 'visita' },
      { emoji: '🎆', label: 'Tem barulho alto (fogos, obra)', value: 'barulho' },
      { emoji: '🐕', label: 'Fica sozinho', value: 'sozinho' },
      { emoji: '❓', label: 'Não consigo identificar o que acontece antes', value: 'nao_sei' },
    ]
  },
  {
    id: 'q12', section: 3, title: 'Onde seu cachorro passa a maior parte do dia?',
    options: [
      { emoji: '🛋️', label: 'Dentro de casa, no tapete/sofá.', value: 'tapete' },
      { emoji: '🧊', label: 'Dentro de casa, no piso frio (cerâmica/madeira).', value: 'piso' },
      { emoji: '🌱', label: 'No quintal, com acesso à terra/grama.', value: 'quintal_terra' },
      { emoji: '🧱', label: 'No quintal, com piso cimentado.', value: 'quintal_cimento' },
      { emoji: '🏢', label: 'Apartamento. Só sai para passear.', value: 'ape' },
    ]
  },
  {
    id: 'q13', section: 3, title: 'Qual produto você usa para limpar o chão de casa?',
    options: [
      { emoji: '🫧', label: 'Água e sabão neutro.', value: 'neutro' },
      { emoji: '🧴', label: 'Produto de limpeza comum (pinho, cloro, veja).', value: 'comum' },
      { emoji: '🐾', label: 'Produto específico para pet.', value: 'pet' },
      { emoji: '⚠️', label: 'Água sanitária.', value: 'sanitaria' },
      { emoji: '🤷', label: 'Não sei. Outra pessoa limpa.', value: 'nao_sei' },
      { emoji: '💧', label: 'Passo só pano úmido, sem produto.', value: 'pano' },
    ]
  },
  {
    id: 'q14', section: 3, title: 'Além da lambedura, seu cachorro apresenta algum desses comportamentos?', sub: 'Pode marcar mais de um', multi: true,
    options: [
      { emoji: '😣', label: 'Se coça muito em outras partes do corpo.', value: 'coca' },
      { emoji: '🔄', label: 'Se esfrega no chão ou na parede.', value: 'esfrega' },
      { emoji: '😠', label: 'Está mais irritado ou agressivo.', value: 'irritado' },
      { emoji: '😔', label: 'Está mais quieto, apático.', value: 'apatico' },
      { emoji: '😰', label: 'Está ansioso (anda de um lado para o outro).', value: 'ansioso' },
      { emoji: '🐾', label: 'Não — o problema principal é a lambedura mesmo.', value: 'so_lambedura' },
    ]
  },
  {
    id: 'q15', section: 4, title: 'Qual dessas frases descreve MELHOR o que você sente sobre essa situação agora?',
    options: [
      { emoji: '😮‍💨', label: 'Estou cansada de tentar e não resolver.', value: 'cansada' },
      { emoji: '⏳', label: 'Estou preocupada de estar perdendo tempo.', value: 'preocupada' },
      { emoji: '😨', label: 'Estou com medo de virar algo grave.', value: 'medo' },
      { emoji: '💸', label: 'Estou frustrada por gastar dinheiro à toa.', value: 'frustrada' },
      { emoji: '🌀', label: 'Estou confusa. Não sei mais o que fazer.', value: 'confusa' },
    ]
  },
  {
    id: 'q16', section: 4, title: 'Se essa lambedura não resolver nos próximos 30 dias, o que MAIS te preocupa?',
    options: [
      { emoji: '💸', label: 'Gastar mais dinheiro sem resultado.', value: 'dinheiro' },
      { emoji: '🏥', label: 'A pata infeccionar e precisar de cirurgia.', value: 'cirurgia' },
      { emoji: '💔', label: 'Meu cachorro sofrer à toa.', value: 'sofrer' },
      { emoji: '⏰', label: 'Não conseguir mais resolver porque deixei tempo demais passar.', value: 'tempo' },
      { emoji: '😞', label: 'Me sentir uma tutora negligente.', value: 'culpa' },
    ]
  },
  {
    id: 'q17', section: 4, title: 'Aproximadamente, quanto você já gastou tentando resolver essa lambedura até hoje?',
    options: [
      { emoji: '💵', label: 'Menos de R$100.', value: '100' },
      { emoji: '💵', label: 'Entre R$100 e R$300.', value: '300' },
      { emoji: '💰', label: 'Entre R$300 e R$600.', value: '600' },
      { emoji: '💰', label: 'Entre R$600 e R$1.000.', value: '1000' },
      { emoji: '🤯', label: 'Mais de R$1.000.', value: 'mais1000' },
      { emoji: '🙈', label: 'Não sei. Não somei. Prefiro não saber.', value: 'nao_sei' },
    ]
  },
  {
    id: 'q18', section: 4, title: 'Se existisse um protocolo que mapeia exatamente o gatilho da lambedura do SEU CACHORRO e te dá um passo a passo para resolver, você estaria disposto a seguir?',
    options: [
      { emoji: '💪', label: 'Sim. Só quero algo que funcione.', value: 'sim' },
      { emoji: '⏱️', label: 'Sim, mas precisa ser prático. Não tenho muito tempo.', value: 'sim_pratico' },
      { emoji: '🎯', label: 'Sim, desde que seja para o caso específico do MEU cachorro.', value: 'sim_especifico' },
    ]
  },
];

/* marcos gamificados entre seções */
const MILESTONES: Record<number, { emoji: string; title: string; sub: string }> = {
  1: { emoji: '🐶', title: 'Perfil do comportamento mapeado!', sub: 'Agora vamos entender o que você já tentou...' },
  2: { emoji: '🔍', title: 'Histórico registrado!', sub: 'As próximas perguntas revelam o gatilho. Preste atenção...' },
  3: { emoji: '🧩', title: 'Padrão quase completo!', sub: 'Últimas perguntas. O diagnóstico está se formando...' },
};

/* ════════════════════════════════════════════════════════════════════
   DIAGNÓSTICO PERSONALIZADO
   ════════════════════════════════════════════════════════════════════ */
function computeStage(a: Answers): { n: number; label: string; desc: string } {
  const ap = a.q4 as string;
  if (ap === 'ferida') return { n: 4, label: 'Estágio 4 — Crítico', desc: 'Ferida aberta ou crosta. A pele rompeu. Infecção secundária é questão de dias, não de "se".' };
  if (ap === 'vermelha' || ap === 'umida') return { n: 3, label: 'Estágio 3 — Inflamação Ativa', desc: 'Pata vermelha e irritada. O ciclo lambedura → irritação → mais lambedura está consolidado.' };
  if (ap === 'escuro' || ap === 'ferrugem') return { n: 2, label: 'Estágio 2 — Crônico', desc: 'Pelo escurecido pela porfirina da saliva. Isso confirma semanas de lambedura — o ciclo já está estabelecido.' };
  const freq = a.q1 as string;
  if (freq === 'horas' || freq === 'madrugada' || freq === 'diario') return { n: 2, label: 'Estágio 2 — Em Consolidação', desc: 'A pata ainda parece normal, mas a frequência diária indica que o ciclo está se formando agora.' };
  return { n: 1, label: 'Estágio 1 — Início', desc: 'Lambedura ocasional sem alteração visível. Este é o MELHOR momento para agir — antes do ciclo se estabelecer.' };
}

const GASTO_TXT: Record<string, string> = {
  '100': 'menos de R$100', '300': 'entre R$100 e R$300', '600': 'entre R$300 e R$600',
  '1000': 'entre R$600 e R$1.000', 'mais1000': 'mais de R$1.000', 'nao_sei': 'um valor que você nem quis somar',
};

const TENTATIVA_TXT: Record<string, string> = {
  spray: 'o spray', pomada: 'a pomada', cone: 'o colar elizabetano', racao: 'a troca de ração',
  shampoo: 'o shampoo veterinário', calmante: 'o calmante',
};

function buildDiagnosis(a: Answers) {
  const stage = computeStage(a);
  const tried = (Array.isArray(a.q8) ? a.q8 : []).filter(t => t !== 'nada');
  const gasto = GASTO_TXT[a.q17 as string];
  const triggers = Array.isArray(a.q11) ? a.q11 : [];

  const paragraphs: string[] = [];

  let p1 = `Seu cachorro está no ${stage.label.toLowerCase().replace(' — ', ': ')}. ${stage.desc}`;
  if (gasto && a.q17 !== '100') p1 += ` E você já gastou ${gasto} em tentativas que não funcionaram.`;
  paragraphs.push(p1);

  if (tried.length > 0) {
    const nomes = tried.slice(0, 2).map(t => TENTATIVA_TXT[t]).filter(Boolean);
    const lista = nomes.length === 2 ? `${nomes[0]} e ${nomes[1]}` : (nomes[0] ?? 'o que você tentou');
    paragraphs.push(`${lista.charAt(0).toUpperCase() + lista.slice(1)} não resolveu porque ataca o sintoma, não o gatilho. Você não errou em tentar. Errou em tentar sem saber o que estava causando.`);
  } else {
    paragraphs.push(`Você ainda não tentou nada — e isso é bom. Significa que ainda não gastou dinheiro atacando o sintoma errado. A maioria das tutoras gasta R$300-600 antes de descobrir o que você vai descobrir agora.`);
  }

  if (triggers.includes('saio') || triggers.includes('sozinho') || a.q10 === 'saida') {
    paragraphs.push(`Suas respostas mostram um padrão claro: a lambedura está vinculada à sua ausência. Isso aponta para gatilho COMPORTAMENTAL — e explica por que sprays e pomadas nunca vão resolver.`);
  } else if (triggers.includes('passeio')) {
    paragraphs.push(`Suas respostas mostram um padrão: a lambedura acontece após o passeio. Isso aponta para gatilho AMBIENTAL (contato da pata com grama, poeira ou piso) — e tem solução simples que quase ninguém conhece.`);
  } else if (triggers.includes('come')) {
    paragraphs.push(`Suas respostas mostram um padrão: a lambedura acontece após comer. Isso aponta para gatilho ALIMENTAR — e explica por que o problema "vai e volta" sem motivo aparente.`);
  } else if (a.q13 === 'comum' || a.q13 === 'sanitaria') {
    paragraphs.push(`Um detalhe das suas respostas chama atenção: o produto que você usa no chão. Cloro e desinfetantes comuns são um dos gatilhos mais subestimados de lambedura — a pata absorve o resíduo o dia inteiro.`);
  } else {
    paragraphs.push(`Existe um padrão de sinais que aparece semanas antes da pata ficar vermelha. Um padrão que você está vendo todo dia mas ninguém te ensinou a interpretar.`);
  }

  // custo de NÃO agir agora — específico por estágio
  if (stage.n === 1) {
    paragraphs.push(`Aqui está o que ninguém te conta: o estágio 1 é o único em que resolver custa quase nada — alguns dias de observação certa. O ciclo se instala em semanas. Se você esperar "para ver se passa", entra na estatística das tutoras que gastam R$600+ e meses tentando resolver o que hoje se resolve em dias. O relógio já está rodando.`);
  } else if (stage.n === 2) {
    paragraphs.push(`E aqui está a parte que ninguém te contou: o estágio 2 é o ÚLTIMO estágio em que a solução ainda é rápida. A partir daqui o hábito se enraíza no cérebro do cachorro — ele passa a lamber mesmo sem o gatilho presente. Cada semana de espera te empurra para o estágio 3: inflamação ativa, dor, e o triplo do tempo (e do custo) para resolver. Você não está escolhendo entre agir agora ou depois. Está escolhendo entre resolver em dias ou em meses.`);
  } else if (stage.n === 3) {
    paragraphs.push(`E preciso ser direta com você: no estágio 3 não existe "esperar passar". A pele inflamada coça sozinha — seu cachorro lambe porque DÓI. Você está a uma ferida aberta do estágio 4, onde a conversa muda para antibiótico, cone por semanas e risco real de cirurgia. A janela para resolver sem chegar lá está se fechando — não em meses. Em semanas.`);
  } else {
    paragraphs.push(`E preciso ser direta com você: no estágio 4 o tempo trabalha contra o seu cachorro por DIA, não por semana. Ferida aberta é porta escancarada para infecção — e infecção instalada significa antibiótico, cone, e a palavra que nenhuma tutora quer ouvir: cirurgia. Procure atendimento veterinário para a ferida — e use o mapa do Método para garantir que DESSA VEZ o tratamento ataque a causa, e a pata nunca mais volte a abrir.`);
  }

  // promessa + decisão
  paragraphs.push(`A boa notícia: suas 18 respostas já revelaram o padrão. No Método Patas Saudáveis, em 3 dias você identifica o gatilho exato do SEU cachorro — e quebra o ciclo antes do próximo estágio. Daqui a uma semana, você pode estar olhando para uma pata cicatrizando. Ou pode estar exatamente onde está hoje — só que uma semana mais perto do estágio ${Math.min(stage.n + 1, 4)}${stage.n >= 4 ? ' com infecção' : ''}. Quem decide é você. E a decisão é agora.`);

  return { stage, paragraphs };
}

/* ════════════════════════════════════════════════════════════════════
   STACK DE BÔNUS — PetVetly Completo
   ════════════════════════════════════════════════════════════════════ */
const APP_CORE = [
  'Mapa de Padrão em 3 dias — identifica se o gatilho é ambiental, alimentar ou comportamental',
  'O sinal que aparece ANTES da pata ficar vermelha (que você está vendo todo dia sem saber)',
  'Protocolo por estágio — o que fazer exatamente no estágio em que seu cachorro está',
  'Checklist diário de acompanhamento (Dia 1 a Dia 7)',
  'Os 3 erros que mantêm o ciclo rodando mesmo quando você tenta resolver',
  '100 categorias: vômito, coceira, diarreia, emergências, comportamento e tudo mais',
  'Triagem de sintomas: responde perguntas e recebe orientação na hora',
  'Checklists de 7 dias para acompanhar cada problema',
  'Atualizações constantes — novos protocolos todo mês',
];

const APP_BONUS = [
  { emoji: '📋', title: 'Diário de Saúde + Mapa de Sintomas', desc: 'Registre comportamento, apetite, energia. Gera histórico visual para levar ao veterinário.', value: 97 },
  { emoji: '📊', title: 'Rastreador de Lambedura', desc: 'Frequência, duração e horário com gráfico de evolução — você VÊ a melhora acontecendo.', value: 67 },
  { emoji: '🗓️', title: 'Calendário Veterinário Automático', desc: 'Vacinas, vermifugação, antipulgas e consultas com lembrete automático. Você nunca mais esquece nada.', value: 97 },
  { emoji: '🍖', title: 'Calculadora de Porção + Alimentos Permitidos e Proibidos', desc: '"Pode dar uva?" Resposta imediata com o porquê. Porção ideal pelo peso, raça e atividade.', value: 47 },
  { emoji: '✅', title: 'Habit Tracker Pet', desc: 'Passeio, escovação, orelhas, unhas. Score semanal de bem-estar do seu cachorro.', value: 47 },
  { emoji: '💰', title: 'Controle de Gastos + Reserva de Emergência Pet', desc: 'Relatório mensal de gastos e meta de reserva para emergência veterinária.', value: 67 },
  { emoji: '📚', title: 'Biblioteca de Protocolos da Dra. Ana Paula', desc: 'Ansiedade, latido excessivo, medo de fogos, viagem, novo pet, bebê em casa — protocolo de ação para cada situação.', value: 197 },
  { emoji: '🪪', title: 'Documentos do Cachorro', desc: 'Carteira de vacinação digital, chip, contatos de emergência 24h. Tudo num lugar só.', value: 27 },
];

const BONUS_TOTAL = APP_BONUS.reduce((s, b) => s + b.value, 0);

/* ════════════════════════════════════════════════════════════════════
   FOTO DA DRA. ANA (com fallback se a imagem não existir)
   ════════════════════════════════════════════════════════════════════ */
function DraAvatar({ size = 64 }: { size?: number }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="g-teal rounded-full flex items-center justify-center shrink-0 shadow-lg"
        style={{ width: size, height: size }}>
        <span style={{ fontSize: size * 0.45 }}>👩‍⚕️</span>
      </div>
    );
  }
  return (
    <img src={FOTO_DRA} alt="Dra. Ana Paula — Médica Veterinária"
      onError={() => setFailed(true)}
      className="rounded-full object-cover shrink-0 shadow-lg"
      style={{ width: size, height: size, border: '3px solid #FFFFFF' }} />
  );
}

/* ════════════════════════════════════════════════════════════════════
   COMPONENTE
   ════════════════════════════════════════════════════════════════════ */
type Phase = 'landing' | 'quiz' | 'milestone' | 'lead' | 'analyzing' | 'result';

/* Respostas padrão usadas no modo preview (?preview=result) */
const PREVIEW_ANSWERS: Answers = {
  q1: 'diario', q2: 'forte', q3: 'alterna', q4: 'ferrugem',
  q5: '3meses', q6: 'sim2', q7: 'alergia',
  q8: ['spray', 'pomada'], q9: 'voltou',
  q10: 'noite', q11: ['sozinho', 'saio'], q12: 'tapete',
  q13: 'comum', q14: ['coca', 'ansioso'],
  q15: 'cansada', q16: 'sofrer', q17: '300', q18: 'sim',
};

export default function QuizFunnelScreen() {
  const [searchParams] = useSearchParams();
  const isPreview = searchParams.get('preview') === 'result';

  const [answers, setAnswers] = useState<Answers>(isPreview ? PREVIEW_ANSWERS : {});
  const [stepIdx, setStepIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>(isPreview ? 'result' : 'landing');
  const [multiSel, setMultiSel] = useState<string[]>([]);
  const [milestone, setMilestone] = useState<number | null>(null);
  const [kibbleBurst, setKibbleBurst] = useState(0);
  const [soundIdx, setSoundIdx] = useState(0);
  const [plan, setPlan] = useState<'anual' | 'mensal'>('anual');
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadZap, setLeadZap] = useState('');
  const [leadErr, setLeadErr] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  /* captura UTMs + page_view na entrada */
  useEffect(() => {
    captureUTMs();
    track('page_view');
  }, []);

  /* result_view (1x) */
  useEffect(() => {
    if (phase === 'result') track('result_view', { stage: computeStage(answers).n });
    if (phase === 'lead') track('lead_view');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const visible = useMemo(
    () => QUESTIONS.filter(q => !q.showIf || q.showIf(answers)),
    [answers]
  );
  const q = visible[stepIdx];
  const progress = Math.round((stepIdx / visible.length) * 100);

  /* a cada pergunta nova: volta o scroll para o topo */
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [q?.id, phase]);

  /* auto-avanço do marco gamificado */
  useEffect(() => {
    if (phase === 'milestone') {
      try { sndChime(); } catch { /* sem áudio */ }
      const t = setTimeout(() => setPhase('quiz'), 1600);
      return () => clearTimeout(t);
    }
  }, [phase]);

  const celebrate = () => {
    setKibbleBurst(b => b + 1);
    playAnswer(soundIdx);
    setSoundIdx(i => i + 1);
  };

  const advance = (next: Answers) => {
    celebrate();
    track('q_answered', { q: q.id, step: stepIdx + 1, value: next[q.id] });
    setAnswers(next);
    const newVisible = QUESTIONS.filter(qq => !qq.showIf || qq.showIf(next));
    const curPos = newVisible.findIndex(qq => qq.id === q.id);
    if (curPos + 1 >= newVisible.length) {
      setPhase('lead'); // captura de contato ANTES do diagnóstico
    } else {
      const nextQ = newVisible[curPos + 1];
      setStepIdx(curPos + 1);
      setMultiSel([]);
      if (nextQ.section !== q.section && MILESTONES[q.section]) {
        setMilestone(q.section);
        setPhase('milestone');
      }
    }
  };

  const pickSingle = (value: string) => {
    advance({ ...answers, [q.id]: value });
  };

  const toggleMulti = (value: string) => {
    try { sndPop(); } catch { /* sem áudio */ }
    setMultiSel(sel => {
      if (value === 'nada' || value === 'so_lambedura' || value === 'nao_sei') return [value];
      const cleaned = sel.filter(v => v !== 'nada' && v !== 'so_lambedura' && v !== 'nao_sei');
      return cleaned.includes(value) ? cleaned.filter(v => v !== value) : [...cleaned, value];
    });
  };

  const confirmMulti = () => {
    if (multiSel.length === 0) return;
    advance({ ...answers, [q.id]: multiSel });
  };

  const back = () => {
    if (stepIdx > 0) { setStepIdx(stepIdx - 1); setMultiSel([]); }
  };

  const diagnosis = useMemo(
    () => (phase === 'result' ? buildDiagnosis(answers) : null),
    [phase, answers]
  );

  const submitLead = () => {
    const email = leadEmail.trim().toLowerCase();
    const zap = leadZap.replace(/\D/g, '');
    if (leadName.trim().length < 2) { setLeadErr('Digite seu nome.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { setLeadErr('Digite um e-mail válido.'); return; }
    if (zap.length < 10) { setLeadErr('Digite um WhatsApp válido com DDD.'); return; }
    const st = computeStage(answers);
    saveLead({ name: leadName.trim(), email, whatsapp: zap, stage: st.n, stage_label: st.label });
    fbqTrack('Lead', { content_name: 'quiz_funnel', stage: st.n });
    try { sndChime(); } catch { /* sem áudio */ }
    setLeadErr('');
    setPhase('analyzing');
    setTimeout(() => setPhase('result'), 2800);
  };

  /* ══════════════ TELA: LANDING ══════════════ */
  if (phase === 'landing') {
    return (
      <div className="h-full overflow-y-auto no-scroll" style={LIGHT}>
        <div className="min-h-full flex flex-col items-center justify-center px-6 py-12 max-w-xl mx-auto text-center">

          {/* mascote 3D flutuante */}
          <motion.div
            initial={{ scale: 0, rotate: -12 }} animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 14 }}
            className="relative mb-3">
            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}>
              <Emoji3D e="🐶" size={110} />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -right-6 top-1">
              <Emoji3D e="🐾" size={36} />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: 'spring' }}
              className="absolute -left-7 bottom-2">
              <Emoji3D e="🦴" size={30} />
            </motion.div>
          </motion.div>

          {/* prova de autoridade */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="flex items-center gap-2.5 rounded-full pl-1.5 pr-4 py-1.5 mb-6 bg-white"
            style={{ border: '1px solid #E0E0E6' }}>
            <DraAvatar size={30} />
            <span className="text-xs font-semibold" style={{ color: '#3A3A40' }}>
              Avaliação criada pela Dra. Ana Paula · Méd. Veterinária
            </span>
          </motion.div>

          {/* headline */}
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="text-[26px] leading-tight font-extrabold mb-3" style={{ color: '#1C1C1E' }}>
            Seu cachorro lambe as patas todo dia?{' '}
            <span style={{ color: '#0D9488' }}>Descubra em 2 minutos o que está REALMENTE causando</span> — e em qual estágio ele está.
          </motion.h1>

          {/* subheadline */}
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            className="text-[15px] leading-relaxed mb-8" style={{ color: '#5A5A60' }}>
            Não é ansiedade. Não é mania. Existe um <strong style={{ color: '#3A3A40' }}>gatilho silencioso</strong> que
            aparece <strong style={{ color: '#3A3A40' }}>antes</strong> da pata ficar vermelha — e que nenhuma consulta
            de 15 minutos tem tempo de investigar. Responda 18 perguntas rápidas e receba o
            diagnóstico do padrão do <strong style={{ color: '#3A3A40' }}>SEU</strong> cachorro.
          </motion.p>

          {/* CTA pulsante */}
          <motion.button
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            onClick={() => { try { sndChime(); } catch { /* sem áudio */ } track('quiz_start'); setPhase('quiz'); }}
            className="relative w-full max-w-sm g-teal text-white font-extrabold py-5 rounded-2xl text-base shadow-xl shadow-teal-600/30 press">
            <motion.span
              className="absolute inset-0 rounded-2xl g-teal"
              animate={{ opacity: [0.5, 0, 0.5], scale: [1, 1.06, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ zIndex: -1 }} />
            COMEÇAR AVALIAÇÃO GRATUITA <ArrowRight size={18} className="inline ml-1 -mt-0.5" />
          </motion.button>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="flex items-center gap-4 mt-4 text-xs" style={{ color: '#7A7A82' }}>
            <span className="flex items-center gap-1"><Clock size={12} /> Menos de 2 minutos</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Check size={12} /> 100% gratuito</span>
          </motion.div>
        </div>
      </div>
    );
  }

  /* ══════════════ TELA: MARCO GAMIFICADO ══════════════ */
  if (phase === 'milestone' && milestone) {
    const m = MILESTONES[milestone];
    return (
      <div className="h-full flex flex-col items-center justify-center px-6 text-center relative" style={LIGHT}>
        <KibbleRain burst={kibbleBurst} />
        <motion.div
          initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 14 }}
          className="mb-5">
          <Emoji3D e={m.emoji} size={88} />
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-xl font-extrabold mb-1.5" style={{ color: '#1C1C1E' }}>{m.title}</motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-sm" style={{ color: '#5A5A60' }}>{m.sub}</motion.p>
        <motion.div initial={{ width: 0 }} animate={{ width: 120 }} transition={{ delay: 0.2, duration: 1.2 }}
          className="h-1 g-teal rounded-full mt-6" />
      </div>
    );
  }

  /* ══════════════ TELA: CAPTURA DE LEAD ══════════════ */
  if (phase === 'lead') {
    return (
      <div className="h-full overflow-y-auto no-scroll" style={LIGHT}>
        <div className="min-h-full flex flex-col items-center justify-center px-6 py-10 max-w-md mx-auto">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 220, damping: 13 }}
            className="mb-4">
            <Emoji3D e="🐶" size={84} />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-[22px] leading-tight font-extrabold text-center mb-2" style={{ color: '#1C1C1E' }}>
            Seu diagnóstico está pronto! ✅
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-sm text-center leading-relaxed mb-6" style={{ color: '#5A5A60' }}>
            Cruzamos suas 18 respostas e identificamos o <strong style={{ color: '#3A3A40' }}>estágio</strong> e
            o <strong style={{ color: '#3A3A40' }}>padrão de gatilho</strong> do seu cachorro.
            Para onde enviamos o resultado completo?
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="w-full space-y-2.5">
            <input value={leadName} onChange={e => setLeadName(e.target.value)} placeholder="Seu nome"
              className="w-full rounded-2xl px-4 py-4 text-sm outline-none bg-white"
              style={{ border: '1px solid #E0E0E6', color: '#1C1C1E' }} />
            <input value={leadEmail} onChange={e => setLeadEmail(e.target.value)} type="email" placeholder="Seu melhor e-mail"
              className="w-full rounded-2xl px-4 py-4 text-sm outline-none bg-white"
              style={{ border: '1px solid #E0E0E6', color: '#1C1C1E' }} />
            <input value={leadZap} onChange={e => setLeadZap(e.target.value)} type="tel" placeholder="WhatsApp com DDD (ex.: 11 91234-5678)"
              onKeyDown={e => e.key === 'Enter' && submitLead()}
              className="w-full rounded-2xl px-4 py-4 text-sm outline-none bg-white"
              style={{ border: '1px solid #E0E0E6', color: '#1C1C1E' }} />
            {leadErr && <p className="text-xs text-red-600 px-1">{leadErr}</p>}
            <button onClick={submitLead}
              className="w-full g-teal text-white font-extrabold py-4 rounded-2xl text-[15px] shadow-xl shadow-teal-600/25 press">
              VER MEU DIAGNÓSTICO AGORA <ArrowRight size={16} className="inline ml-1 -mt-0.5" />
            </button>
            <p className="text-[11px] text-center leading-relaxed pt-1" style={{ color: '#7A7A82' }}>
              🔒 Seus dados estão seguros. Sem spam — só o diagnóstico e orientações da equipe da Dra. Ana Paula.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  /* ══════════════ TELA: ANALISANDO ══════════════ */
  if (phase === 'analyzing') {
    return (
      <div className="h-full flex flex-col items-center justify-center px-6" style={LIGHT}>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 g-teal rounded-3xl flex items-center justify-center shadow-xl shadow-teal-500/30 mb-6">
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }}>
            <Sparkles size={32} className="text-white" />
          </motion.div>
        </motion.div>
        <h2 className="text-lg font-bold text-center mb-2" style={{ color: '#1C1C1E' }}>
          Cruzando as suas respostas...
        </h2>
        <div className="space-y-2.5 mt-4 text-center">
          {['Analisando frequência e intensidade 🐾', 'Identificando o estágio da lambedura 🔍', 'Mapeando o padrão de gatilho 🧩'].map((t, i) => (
            <motion.p key={t} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.7 }}
              className="text-sm flex items-center gap-2 justify-center" style={{ color: '#5A5A60' }}>
              <Check size={14} className="text-emerald-500" />{t}
            </motion.p>
          ))}
        </div>
      </div>
    );
  }

  /* ══════════════ TELA: RESULTADO + OFERTA ══════════════ */
  if (phase === 'result' && diagnosis) {
    const { stage, paragraphs } = diagnosis;
    const stageColor = stage.n >= 4 ? 'bg-red-50 border-red-200 text-red-700'
      : stage.n === 3 ? 'bg-orange-50 border-orange-200 text-orange-700'
        : stage.n === 2 ? 'bg-amber-50 border-amber-200 text-amber-700'
          : 'bg-emerald-50 border-emerald-200 text-emerald-700';

    return (
      <div className="h-full overflow-y-auto no-scroll" style={LIGHT}>
        <div className="max-w-xl mx-auto px-5 py-10 space-y-6">

          {/* Diagnóstico */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-bold tracking-widest mb-2" style={{ color: '#0D9488' }}>SEU DIAGNÓSTICO PERSONALIZADO</p>
            <div className={`rounded-3xl p-5 border ${stageColor}`}>
              <h1 className="font-bold text-2xl mb-1">{stage.label}</h1>
              <div className="flex gap-1.5 my-3">
                {[1, 2, 3, 4].map(n => (
                  <motion.div key={n}
                    initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3 + n * 0.12 }}
                    className={`h-2 flex-1 rounded-full origin-left ${n <= stage.n ? (stage.n >= 3 ? 'bg-red-400' : 'bg-amber-400') : 'bg-black/10'}`} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed" style={{ color: '#3A3A40' }}>{p}</p>
            ))}
          </motion.div>

          {/* ── ANTES × DEPOIS ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="rounded-3xl p-5 bg-white" style={{ border: '1px solid #E0E0E6', boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
            <p className="text-xs font-bold tracking-widest mb-4 text-center" style={{ color: '#0D9488' }}>
              O QUE MUDA QUANDO VOCÊ ENXERGA O GATILHO
            </p>
            <div className="grid grid-cols-2 gap-3">
              {/* HOJE — a dor */}
              <div className="rounded-2xl p-4 text-center" style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
                <p className="text-[11px] font-extrabold tracking-wider mb-3 text-red-600">SE NADA MUDAR 😟</p>
                <div className="space-y-3.5">
                  <div className="flex flex-col items-center gap-1">
                    <Emoji3D e="🔴" size={34} />
                    <p className="text-[11px] leading-tight font-medium" style={{ color: '#7F1D1D' }}>A pata piorando a cada semana — e você vendo, sem saber o que fazer</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Emoji3D e="💸" size={34} />
                    <p className="text-[11px] leading-tight font-medium" style={{ color: '#7F1D1D' }}>Mais R$400, R$600, R$1.000 em spray, pomada e consulta que termina em "é ansiedade"</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Emoji3D e="🏥" size={34} />
                    <p className="text-[11px] leading-tight font-medium" style={{ color: '#7F1D1D' }}>A ferida infeccionando até a palavra "cirurgia" entrar na conversa</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Emoji3D e="🌙" size={34} />
                    <p className="text-[11px] leading-tight font-medium" style={{ color: '#7F1D1D' }}>O barulho da lambedura toda noite te lembrando que você ainda não resolveu</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Emoji3D e="😞" size={34} />
                    <p className="text-[11px] leading-tight font-medium" style={{ color: '#7F1D1D' }}>Ele sofrendo à toa — e a culpa de sentir que você deixou chegar até aqui</p>
                  </div>
                </div>
              </div>
              {/* COM O MÉTODO — a promessa */}
              <div className="rounded-2xl p-4 text-center" style={{ background: '#ECFDF5', border: '1px solid #A7F3D0' }}>
                <p className="text-[11px] font-extrabold tracking-wider mb-3 text-emerald-600">COM O MÉTODO 🐶</p>
                <div className="space-y-3.5">
                  <div className="flex flex-col items-center gap-1">
                    <Emoji3D e="🎯" size={34} />
                    <p className="text-[11px] leading-tight font-medium" style={{ color: '#065F46' }}>Em 3 dias: o gatilho exato do SEU cachorro identificado, preto no branco</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Emoji3D e="🐾" size={34} />
                    <p className="text-[11px] leading-tight font-medium" style={{ color: '#065F46' }}>A pata cicatrizando porque você atacou a CAUSA — não o sintoma</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Emoji3D e="💰" size={34} />
                    <p className="text-[11px] leading-tight font-medium" style={{ color: '#065F46' }}>Nunca mais um real gasto no escuro, em tentativa aleatória</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Emoji3D e="😴" size={34} />
                    <p className="text-[11px] leading-tight font-medium" style={{ color: '#065F46' }}>Silêncio à noite. Ele dormindo. Você também.</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Emoji3D e="🛡️" size={34} />
                    <p className="text-[11px] leading-tight font-medium" style={{ color: '#065F46' }}>A certeza de que você agiu a tempo — sem culpa, sem "e se eu tivesse..."</p>
                  </div>
                </div>
              </div>
            </div>
            {/* seta de transformação */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <Emoji3D e="😣" size={26} />
              <motion.div animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
                <ArrowRight size={20} className="text-teal-600" />
              </motion.div>
              <Emoji3D e="🐶" size={26} />
              <motion.div animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.2 }}>
                <ArrowRight size={20} className="text-teal-600" />
              </motion.div>
              <Emoji3D e="🎉" size={26} />
            </div>
          </motion.div>

          {/* ── DRA. ANA PAULA — apresentação profissional ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="rounded-3xl p-5 bg-white" style={{ border: '1px solid #E0E0E6', boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
            <p className="text-xs font-bold tracking-widest mb-4" style={{ color: '#0D9488' }}>RESPONSÁVEL TÉCNICA</p>
            <div className="flex items-center gap-4 mb-4">
              <DraAvatar size={76} />
              <div>
                <p className="font-bold text-lg" style={{ color: '#1C1C1E' }}>Dra. Ana Paula</p>
                <p className="text-xs font-medium" style={{ color: '#5A5A60' }}>Médica Veterinária</p>
              </div>
            </div>
            <ul className="space-y-2">
              {[
                'Pós-graduada em Dermatologia Veterinária',
                'Especializada em casos de lambedura crônica e dermatites de difícil resolução',
                'Centenas de casos atendidos — incluindo cães que passaram por 3 ou mais veterinários sem diagnóstico',
                'Criadora do Método Patas Saudáveis e responsável técnica por todos os protocolos do PetVetly',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#3A3A40' }}>
                  <Check size={15} className="text-teal-600 shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── OFERTA PRINCIPAL: App completo (stack de valor) — DESTAQUE ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1, y: 0,
              boxShadow: [
                '0 0 0 0 rgba(13,148,136,0.45), 0 4px 18px rgba(13,148,136,0.18)',
                '0 0 0 10px rgba(13,148,136,0), 0 4px 18px rgba(13,148,136,0.18)',
              ],
            }}
            transition={{
              opacity: { delay: 0.35 }, y: { delay: 0.35 },
              boxShadow: { repeat: Infinity, duration: 1.8, ease: 'easeOut' },
            }}
            className="rounded-3xl p-6 relative overflow-visible bg-white border-2"
            style={{ borderColor: '#0D9488' }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap tracking-wide">
              ⭐ MELHOR ESCOLHA — MAIS COMPLETO
            </div>
            <div className="flex items-center gap-2.5 mb-1 mt-3">
              <Emoji3D e="📱" size={32} />
              <h2 className="font-extrabold text-xl" style={{ color: '#1C1C1E' }}>PetVetly Completo</h2>
            </div>
            <p className="text-sm mb-4" style={{ color: '#5A5A60' }}>
              O Método Patas Saudáveis + o sistema completo de saúde do seu cachorro, em um único app.
            </p>

            {/* core */}
            <ul className="space-y-2 mb-5">
              {APP_CORE.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#3A3A40' }}>
                  <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>

            {/* bônus stack */}
            <div className="flex items-center gap-2 mb-3">
              <Gift size={16} className="text-amber-600" />
              <p className="text-xs font-bold tracking-widest text-amber-600">E VOCÊ AINDA LEVA {APP_BONUS.length} BÔNUS</p>
            </div>
            <div className="space-y-2.5 mb-5">
              {APP_BONUS.map((b, i) => (
                <div key={b.title} className="rounded-2xl px-4 py-3 flex items-start gap-3"
                  style={{ background: '#F7F7FA', border: '1px solid #ECECF1' }}>
                  <Emoji3D e={b.emoji} size={26} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-bold text-[13px]" style={{ color: '#1C1C1E' }}>Bônus {i + 1}: {b.title}</p>
                      <span className="text-[11px] font-bold shrink-0 text-emerald-600">R$ {b.value}</span>
                    </div>
                    <p className="text-xs leading-snug mt-0.5" style={{ color: '#5A5A60' }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ancoragem */}
            <div className="rounded-2xl px-4 py-3 mb-4 text-center" style={{ background: 'rgba(13,148,136,0.07)', border: '1px dashed #0D9488' }}>
              <p className="text-xs" style={{ color: '#5A5A60' }}>Só em bônus são</p>
              <p className="text-lg font-extrabold" style={{ color: '#0D9488' }}>R$ {BONUS_TOTAL} de valor</p>
            </div>

            {/* justificativa de recorrência */}
            <p className="text-sm leading-relaxed mb-5 px-1 italic" style={{ color: '#3A3A40' }}>
              "Quanto mais tempo você usa, mais preciso o sistema fica. O PetVetly do mês 6 conhece
              o seu cachorro melhor do que qualquer veterinário que ele já viu."
            </p>

            {/* seletor de plano */}
            <div className="space-y-2.5 mb-4">
              {/* Anual */}
              <button onClick={() => setPlan('anual')}
                className="w-full rounded-2xl px-4 py-4 flex items-center gap-3 text-left press relative"
                style={plan === 'anual'
                  ? { border: '2px solid #0D9488', background: 'rgba(13,148,136,0.06)' }
                  : { border: '1px solid #E0E0E6', background: '#fff' }}>
                <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
                  style={{ borderColor: plan === 'anual' ? '#0D9488' : '#D1D1D6' }}>
                  {plan === 'anual' && <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#0D9488' }} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-bold text-sm" style={{ color: '#1C1C1E' }}>Plano Anual</p>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">ECONOMIZE 53%</span>
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: '#5A5A60' }}>
                    <span className="line-through">R$ 178,80</span>{' '}
                    <strong style={{ color: '#0D9488' }}>R$ 67/ano</strong>
                    {' '}— equivale a <strong style={{ color: '#0D9488' }}>R$ 5,58/mês</strong>
                  </p>
                </div>
              </button>
              {/* Mensal */}
              <button onClick={() => setPlan('mensal')}
                className="w-full rounded-2xl px-4 py-4 flex items-center gap-3 text-left press"
                style={plan === 'mensal'
                  ? { border: '2px solid #0D9488', background: 'rgba(13,148,136,0.06)' }
                  : { border: '1px solid #E0E0E6', background: '#fff' }}>
                <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
                  style={{ borderColor: plan === 'mensal' ? '#0D9488' : '#D1D1D6' }}>
                  {plan === 'mensal' && <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#0D9488' }} />}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm" style={{ color: '#1C1C1E' }}>Plano Mensal</p>
                  <p className="text-xs mt-0.5" style={{ color: '#5A5A60' }}>
                    <strong style={{ color: '#0D9488' }}>R$ 14,90/mês</strong>
                    {' '}— cancela quando quiser
                  </p>
                </div>
              </button>
            </div>

            <a href={checkoutUrl(plan === 'anual' ? CHECKOUT_APP_ANUAL : CHECKOUT_APP_MENSAL)}
              onClick={() => { const isAnual = plan === 'anual'; track('checkout_click', { offer: isAnual ? 'app_anual' : 'app_mensal' }); fbqTrack('InitiateCheckout', { content_name: isAnual ? 'app_anual' : 'app_mensal', value: isAnual ? 67 : 14.90, currency: 'BRL' }); }}
              className="block w-full font-extrabold py-4 rounded-2xl text-sm text-center press text-white"
              style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', boxShadow: '0 8px 24px rgba(234,88,12,0.30)', fontSize: '15px' }}>
              QUERO O APP COMPLETO + BÔNUS {plan === 'anual' ? '(R$ 67/ANO)' : '(R$ 14,90/MÊS)'} <ArrowRight size={15} className="inline ml-1" />
            </a>
            <p className="text-xs text-center mt-2" style={{ color: '#7A7A82' }}>Cancela quando quiser. Sem fidelidade.</p>
          </motion.div>

          {/* ── OFERTA SECUNDÁRIA: Método Patas Saudáveis — discreta ── */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
            className="rounded-2xl px-5 py-4"
            style={{ background: '#FAFAFA', border: '1px solid #EBEBEB' }}>
            <p className="text-[11px] font-semibold mb-1" style={{ color: '#9A9AA2' }}>Prefere só o protocolo?</p>
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs leading-snug" style={{ color: '#AEAEB2' }}>
                Método Patas Saudáveis — acesso avulso, pagamento único.
              </p>
              <a href={checkoutUrl(CHECKOUT_PROTOCOLO)}
                onClick={() => { track('checkout_click', { offer: 'protocolo' }); fbqTrack('InitiateCheckout', { content_name: 'protocolo', value: 97, currency: 'BRL' }); }}
                className="shrink-0 text-[11px] font-semibold px-3 py-1.5 rounded-xl press"
                style={{ color: '#9A9AA2', background: '#F0F0F0', border: '1px solid #E0E0E0' }}>
                R$ 97
              </a>
            </div>
          </motion.div>

          {/* Garantia */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
            className="rounded-2xl p-4 flex items-start gap-3 bg-white" style={{ border: '1px solid #E0E0E6' }}>
            <ShieldCheck size={22} className="text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm mb-0.5" style={{ color: '#1C1C1E' }}>Garantia de Clareza em 72 horas</p>
              <p className="text-xs leading-relaxed" style={{ color: '#5A5A60' }}>
                Se em 72 horas você não identificar o padrão da lambedura do seu cachorro com mais clareza
                do que tem agora, devolvemos cada centavo. Sem pergunta. Sem burocracia.
              </p>
            </div>
          </motion.div>

          {/* Urgência */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
            className="flex items-start gap-3 px-1 pb-6">
            <Clock size={18} className="shrink-0 mt-0.5" style={{ color: '#7A7A82' }} />
            <p className="text-xs leading-relaxed" style={{ color: '#5A5A60' }}>
              O ciclo está rodando hoje. Cada dia sem o mapa é mais um dia tomando decisões no escuro.
              O problema não avisa quando está ficando mais caro.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  /* ══════════════ TELA: QUIZ ══════════════ */
  return (
    <div className="h-full flex flex-col relative" style={LIGHT}>
      <KibbleRain burst={kibbleBurst} />

      {/* Progresso com cachorrinho */}
      <div className="px-5 pt-6 pb-3 shrink-0">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <button onClick={back} className="flex items-center gap-0.5 text-xs font-medium press"
              style={{ color: stepIdx > 0 ? '#0D9488' : 'transparent', pointerEvents: stepIdx > 0 ? 'auto' : 'none' }}>
              <ChevronLeft size={14} />Voltar
            </button>
          </div>
          <div className="relative">
            <div className="h-2.5 rounded-full overflow-hidden" style={{ background: '#ECECF1', border: '1px solid #E0E0E6' }}>
              <motion.div className="h-full g-teal rounded-full" animate={{ width: `${Math.max(progress, 4)}%` }} transition={{ type: 'spring', stiffness: 80, damping: 16 }} />
            </div>
            <motion.div
              className="absolute -top-4"
              animate={{ left: `calc(${Math.max(progress, 4)}% - 12px)` }}
              transition={{ type: 'spring', stiffness: 80, damping: 16 }}>
              <Emoji3D e="🐕" size={24} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pergunta (área com scroll — volta ao topo a cada pergunta) */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto no-scroll px-5 pb-10">
        <div className="max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={q.id}
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.2 }}>
              <h1 className="font-bold text-xl leading-snug mt-4 mb-1" style={{ color: '#1C1C1E' }}>{q.title}</h1>
              {q.sub && <p className="text-sm mb-4" style={{ color: '#5A5A60' }}>✨ {q.sub}</p>}
              <div className="space-y-2 mt-5">
                {q.options.map((opt, i) => {
                  const selected = q.multi && multiSel.includes(opt.value);
                  return (
                    <motion.button key={opt.value}
                      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => (q.multi ? toggleMulti(opt.value) : pickSingle(opt.value))}
                      className="w-full rounded-2xl px-4 py-4 flex items-center gap-3 text-left press bg-white"
                      style={selected
                        ? { border: '2px solid #0D9488', background: 'rgba(13,148,136,0.06)' }
                        : { border: '1px solid #E0E0E6' }}>
                      {opt.emoji && <Emoji3D e={opt.emoji} size={28} />}
                      <span className="flex-1 font-medium text-sm leading-snug" style={{ color: '#1C1C1E' }}>{opt.label}</span>
                      {q.multi
                        ? <div className="w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0"
                          style={{ borderColor: selected ? '#0D9488' : '#D1D1D6', background: selected ? '#0D9488' : 'transparent' }}>
                          {selected && <Check size={13} className="text-white" />}
                        </div>
                        : <ArrowRight size={15} className="shrink-0" style={{ color: '#9A9AA2' }} />
                      }
                    </motion.button>
                  );
                })}
              </div>
              {q.multi && (
                <button onClick={confirmMulti}
                  className="w-full mt-4 g-teal text-white font-bold py-4 rounded-2xl text-sm shadow-lg shadow-teal-600/25 press"
                  disabled={multiSel.length === 0}
                  style={multiSel.length === 0 ? { opacity: 0.4 } : {}}>
                  Continuar <ArrowRight size={15} className="inline ml-1" />
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
