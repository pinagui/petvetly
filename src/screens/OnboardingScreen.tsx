import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const BREEDS = ['SRD (Vira-lata)', 'Labrador Retriever', 'Golden Retriever', 'Bulldog Francês', 'Yorkshire Terrier', 'Poodle', 'Shih Tzu', 'Maltês', 'Beagle', 'Pinscher', 'Rottweiler', 'Pastor Alemão', 'Border Collie', 'Husky Siberiano', 'Boxer', 'Dachshund', 'Cocker Spaniel', 'Lhasa Apso', 'Bichon Frisé', 'Pug', 'Chihuahua', 'Outra raça'];
const AVATARS = ['🐶', '🐕', '🦮', '🐩', '🐕‍🦺', '🐾'];

export default function OnboardingScreen() {
  const { updatePet } = useAuth();
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ name: '', breed: '', age: '', weight: '', gender: 'male' as 'male' | 'female', avatar: '🐶' });

  const canNext = [
    data.name.trim().length > 1,
    data.breed.length > 0,
    data.age.length > 0 && data.weight.length > 0,
  ];

  return (
    <div className="flex flex-col min-h-full" style={{ background: 'var(--surface)' }}>
      {/* Progress bar */}
      <div className="pt-12 px-5 pb-4" style={{ background: 'var(--surface)' }}>
        <div className="max-w-lg mx-auto">
          <div className="flex gap-1.5 mb-6">
            {[0, 1, 2].map(i => (
              <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i <= step ? 'g-teal' : ''}`}
                   style={i > step ? { background: 'var(--border)' } : {}} />
            ))}
          </div>
          <p className="text-xs font-medium" style={{ color: 'var(--text3)' }}>
            {['NOME & PERFIL', 'RAÇA', 'DETALHES'][step]}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scroll px-5 pb-6">
        <div className="max-w-lg mx-auto">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="s0" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className="space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: 'var(--text1)' }}>Qual o nome do<br />seu cachorro? 🐶</h2>

              <div>
                <p className="text-xs font-semibold mb-3" style={{ color: 'var(--text3)' }}>ESCOLHA UM ÍCONE</p>
                <div className="flex gap-2 flex-wrap">
                  {AVATARS.map(a => (
                    <button key={a} onClick={() => setData(d => ({ ...d, avatar: a }))}
                      className="w-14 h-14 rounded-2xl text-2xl flex items-center justify-center border-2 transition-all press"
                      style={{
                        borderColor: data.avatar === a ? 'var(--accent)' : 'var(--border)',
                        background: data.avatar === a ? 'rgba(13,148,136,.12)' : 'var(--surface2)',
                      }}>
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold mb-2" style={{ color: 'var(--text3)' }}>NOME</p>
                <input type="text" value={data.name}
                  onChange={e => setData(d => ({ ...d, name: e.target.value }))}
                  placeholder="Ex: Thor, Mel, Bidu..."
                  className="inp font-semibold text-lg"
                  autoFocus
                />
              </div>

              <div>
                <p className="text-xs font-semibold mb-2" style={{ color: 'var(--text3)' }}>SEXO</p>
                <div className="grid grid-cols-2 gap-2">
                  {(['male', 'female'] as const).map(g => (
                    <button key={g} onClick={() => setData(d => ({ ...d, gender: g }))}
                      className={`py-3.5 rounded-2xl text-sm font-semibold border-2 transition-all press ${data.gender === g ? 'g-teal text-white' : ''}`}
                      style={data.gender !== g ? { background: 'var(--surface2)', color: 'var(--text1)', borderColor: 'var(--border)' } : { borderColor: 'transparent' }}>
                      {g === 'male' ? '♂  Macho' : '♀  Fêmea'}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
              <h2 className="text-2xl font-bold mb-1" style={{ color: 'var(--text1)' }}>
                Qual a raça de<br /><span style={{ color: 'var(--accent)' }}>{data.name || 'seu pet'}</span>?
              </h2>
              <p className="text-sm mb-5" style={{ color: 'var(--text3)' }}>Isso personaliza os protocolos e alertas</p>
              <div className="space-y-2">
                {BREEDS.map(b => (
                  <button key={b} onClick={() => setData(d => ({ ...d, breed: b }))}
                    className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-medium border-2 transition-all press"
                    style={{
                      background: data.breed === b ? 'rgba(13,148,136,.12)' : 'var(--surface2)',
                      borderColor: data.breed === b ? 'var(--accent)' : 'transparent',
                      color: data.breed === b ? 'var(--accent)' : 'var(--text1)',
                    }}>
                    <span>{b}</span>
                    {data.breed === b && <ChevronRight size={14} style={{ color: 'var(--accent)' }} />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold" style={{ color: 'var(--text1)' }}>Mais sobre</h2>
                <h2 className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>{data.name} {data.avatar}</h2>
              </div>

              <div>
                <p className="text-xs font-semibold mb-2" style={{ color: 'var(--text3)' }}>IDADE</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Menos de 1 ano', '1 a 2 anos', '3 a 5 anos', '6 a 8 anos', '9 a 11 anos', 'Mais de 12 anos'].map(a => (
                    <button key={a} onClick={() => setData(d => ({ ...d, age: a }))}
                      className={`py-3.5 rounded-2xl text-xs font-semibold border-2 transition-all press ${data.age === a ? 'g-teal text-white' : ''}`}
                      style={data.age !== a ? { background: 'var(--surface2)', color: 'var(--text1)', borderColor: 'transparent' } : { borderColor: 'transparent' }}>
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold mb-2" style={{ color: 'var(--text3)' }}>PESO APROXIMADO</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Menos de 5 kg', '5 a 10 kg', '10 a 20 kg', '20 a 30 kg', '30 a 45 kg', 'Mais de 45 kg'].map(w => (
                    <button key={w} onClick={() => setData(d => ({ ...d, weight: w }))}
                      className={`py-3.5 rounded-2xl text-xs font-semibold border-2 transition-all press ${data.weight === w ? 'g-teal text-white' : ''}`}
                      style={data.weight !== w ? { background: 'var(--surface2)', color: 'var(--text1)', borderColor: 'transparent' } : { borderColor: 'transparent' }}>
                      {w}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>

      <div className="px-5 pb-10 pt-3" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-lg mx-auto">
          <button disabled={!canNext[step]}
            onClick={() => step < 2 ? setStep(s => s + 1) : updatePet(data)}
            className="w-full g-teal text-white font-semibold py-4 rounded-2xl text-base disabled:opacity-30 press shadow-lg shadow-teal-600/25 flex items-center justify-center gap-2">
            {step < 2 ? <>Continuar <ChevronRight size={16} /></> : `Começar com ${data.name} 🐾`}
          </button>
        </div>
      </div>
    </div>
  );
}
