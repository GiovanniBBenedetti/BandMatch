'use client'

import { useState, useEffect } from 'react'
import './users.css'
import { League_Spartan } from 'next/font/google'
import Link from 'next/link'

const LeagueSpartan = League_Spartan({
  weight: '700',
  subsets: ['latin'],
})

export default function Users() {
  const [usuarios, setUsuario] = useState([])
  const [idade, setIdade] = useState(18)
  const [usuariosFiltrados, setFiltragem] = useState([])
  const [instrumentosSelecionados, setInstrumentosSelecionados] = useState([])
  const [estilosSelecionados, setEstilosSelecionados] = useState([])
  const [generoSelecionado, setGeneroSelecionado] = useState([])
  const instrumentosCheckBox = ["guitarra", "baixo", "bateria", "vocal", "piano", "teclado", "saxofone", "controladora"]
  const estilosMusicaisCheckbox = ["rock", "pop", "raggae", "jazz", "funk", "eletronica"]
  const instrumentoImagens = {
    guitarra: "/guitarra.png",
    bateria: "/bateria.png",
    teclado: "/teclado.png",
    baixo: "/baixo.png",
    piano: "/piano.png",
    controladora: "/controladora.png",
    saxofone: "/saxofone.png",
    vocal: "/vocal.png",
  }

  const handleCheckbox = (e, setter) => {
    const { value, checked } = e.target
    setter(prev =>
      checked ? [...prev, value] : prev.filter(item => item !== value)
    )
  }

  const filtragem = () => {
    const filtrados = usuarios.filter((user) => {
      const atendeIdade = user.idade >= idade

      const atendeInstrumentos =
        instrumentosSelecionados.length === 0 ||
        instrumentosSelecionados.every(instr => user.instrumentos.includes(instr))

      const atendeEstilos =
        estilosSelecionados.length === 0 ||
        estilosSelecionados.every(estilo => user.estilos_musicais.includes(estilo))

      const atendeGenero =
        generoSelecionado.length === 0 ||
        generoSelecionado.every(genero => user.genero.includes(genero))

      return atendeIdade && atendeInstrumentos && atendeEstilos && atendeGenero
    })

    console.log(filtrados)
    setFiltragem(filtrados)
  }

  useEffect(() => {
    fetch("http://localhost:3333/users")
      .then((response) => response.json())
      .then((information) => {
        setUsuario(information)
        setFiltragem(information)
      })
  }, [])


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="filtros p-3 bg-white shadow rounded">
            <h3 className={LeagueSpartan.className}>Categorias relacionadas</h3>

            <div className="mb-3">
              <label>Idade</label>
              <div className="PB-range-slider-div">
                <input type="range" min={18} max={80} defaultValue={18} className="PB-range-slider" id="myRange"  onChange={(e) => setIdade(Number(e.target.value))}/>
              </div>
              <span>{idade} anos</span>
            </div>
           


            <div className="mb-3">
              <label>Genêro</label>

              <div className="form-check d-flex align-items-center gap-2 p-0">
                <input
                  type="checkbox"
                  className="ui-checkbox"
                  value="Masculino"
                  onChange={(e) => handleCheckbox(e, setGeneroSelecionado)}
                />
                <label className="form-check-label">
                  Masculino
                </label>
              </div>
              <div className="form-check d-flex align-items-center gap-2 p-0">
                <input
                  type="checkbox"
                  className="ui-checkbox"
                  value="Feminino"
                  onChange={(e) => handleCheckbox(e, setGeneroSelecionado)}
                />
                <label className="form-check-label">
                  Feminino
                </label>
              </div>

            </div>




            <div className="mb-3">
              <label>Gêneros Musicais</label>
              {estilosMusicaisCheckbox.map((estilo) => (
                <div key={estilo} className="form-check d-flex align-items-center gap-2 p-0">
                  <input
                    type="checkbox"
                    className="ui-checkbox"
                    value={estilo}
                    onChange={(e) => handleCheckbox(e, setEstilosSelecionados)}
                  />
                  <label className="form-check-label">
                    {estilo.charAt(0).toUpperCase() + estilo.slice(1).toLowerCase()}
                  </label>
                </div>
              ))}
            </div>


            <div className="mb-3">
              <label>Instrumentos</label>
              {instrumentosCheckBox.map((instrumento) => (
                <div key={instrumento} className="form-check d-flex align-items-center gap-2 p-0">
                  <input
                    type="checkbox"
                    className="ui-checkbox"
                    value={instrumento}
                    onChange={(e) => handleCheckbox(e, setInstrumentosSelecionados)}
                  />
                  <label className="form-check-label">
                    {instrumento.charAt(0).toUpperCase() + instrumento.slice(1).toLowerCase()}
                  </label>
                </div>
              ))}
            </div>





            <button className="btn-verperfil w-100 mt-2" onClick={filtragem}>
              Filtrar
            </button>
          </div>
        </div>


        <div className="col-md-9 marginTop">
          <div className='container mb-5'>
            <div className="row">
              {usuariosFiltrados.length > 0 ? (
                usuariosFiltrados.map(cards => (
                  <div className="col-md-4 mb-4" key={cards.id}>
                    <div className="custom-card text-center">
                      <div
                        className="top-section"
                        style={{ backgroundImage: `url(${cards.fundo})` }}
                      ></div>

                      <img src={cards.foto} alt="" className="profile-pic" />
                      <h2 className="user-name">{cards.nome}</h2>
                      <h5 className="user-location">{cards.cidade}</h5>
                      <p className="user-description">{cards.descricao}</p>

                      <div className='instrumento'>
                        {cards.instrumentos.map((item, index) => (
                          <img
                            key={`${cards.id}-${index}`}
                            src={instrumentoImagens[item]}
                            alt={item}
                            className="instrumento-img"
                          />
                        ))}
                      </div>

                      <Link href={`./users/${cards.id}`}>
                        <button className="btn-verperfil">Ver Perfil</button>
                        </Link>
                      <div className="icon-section mb-3"></div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center w-100 mt-5">
                  <h5>Nenhum usuário encontrado com os filtros selecionados.</h5>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
