// filtroUsuarios.tsx
'use client'

import { League_Spartan } from 'next/font/google'
import './filtroUsuario.css'

const LeagueSpartan = League_Spartan({ weight: '700', subsets: ['latin'] })

export default function FiltroUsuario({
  idade,
  setIdade,
  setInstrumentosSelecionados,
  setEstilosSelecionados,
  setGeneroSelecionado,
  filtragem
}) {
  const instrumentosCheckBox = ["guitarra", "baixo", "bateria", "vocal", "piano", "teclado", "saxofone", "controladora"]
  const estilosMusicaisCheckbox = ["rock", "pop", "raggae", "jazz", "funk", "eletronica"]

  const handleCheckbox = (e, setter) => {
    const { value, checked } = e.target
    setter(prev => checked ? [...prev, value] : prev.filter(item => item !== value))
  }

  return (
    <div className="col-md-3 mb-5">
      <div className="filtros p-3 bg-white shadow rounded">
        <h3 className={LeagueSpartan.className}>Categorias relacionadas</h3>

        <div className="mb-3">
          <label>Idade</label>
          <div className="PB-range-slider-div">
            <input
              type="range"
              min={18}
              max={80}
              value={idade}
              className="PB-range-slider"
              onChange={(e) => setIdade(Number(e.target.value))}
            />
          </div>
          <span>{idade} anos</span>
        </div>

        <div className="mb-3">
          <label>Gênero</label>
          {['Masculino', 'Feminino'].map(genero => (
            <div className="form-check d-flex align-items-center gap-2 p-0" key={genero}>
              <input
                type="checkbox"
                className="ui-checkbox"
                value={genero}
                onChange={(e) => handleCheckbox(e, setGeneroSelecionado)}
              />
              <label className="form-check-label">{genero}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <label>Gêneros Musicais</label>
          {estilosMusicaisCheckbox.map(estilo => (
            <div key={estilo} className="form-check d-flex align-items-center gap-2 p-0">
              <input
                type="checkbox"
                className="ui-checkbox"
                value={estilo}
                onChange={(e) => handleCheckbox(e, setEstilosSelecionados)}
              />
              <label className="form-check-label">
                {estilo.charAt(0).toUpperCase() + estilo.slice(1)}
              </label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <label>Instrumentos</label>
          {instrumentosCheckBox.map(instr => (
            <div key={instr} className="form-check d-flex align-items-center gap-2 p-0">
              <input
                type="checkbox"
                className="ui-checkbox"
                value={instr}
                onChange={(e) => handleCheckbox(e, setInstrumentosSelecionados)}
              />
              <label className="form-check-label">
                {instr.charAt(0).toUpperCase() + instr.slice(1)}
              </label>
            </div>
          ))}
        </div>

        <button className="btn-verperfil w-100 mt-2" onClick={filtragem}>
          Filtrar
        </button>
      </div>
    </div>
  )
}
