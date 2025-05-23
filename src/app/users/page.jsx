'use client'

import { useState, useEffect } from 'react'
import { League_Spartan } from 'next/font/google'
import FiltroUsuario from '@/Components/filtroUsuarios/filtroUsuarios'
import CardUsuario from '@/Components/cardUsuario/CardUsuario'
import './users.css'
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
  const [visibleCount, setVisibleCount] = useState(6)

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

    setFiltragem(filtrados)
    setVisibleCount(6)
  }

  useEffect(() => {
    fetch("http://localhost:3333/users")
      .then((response) => response.json())
      .then((information) => {
        setUsuario(information)
        setFiltragem(information)
      })
  }, [])

  const mostrarMais = () => {
    setVisibleCount(prev => prev + 6)
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <FiltroUsuario
          idade={idade}
          setIdade={setIdade}
          instrumentosSelecionados={instrumentosSelecionados}
          setInstrumentosSelecionados={setInstrumentosSelecionados}
          estilosSelecionados={estilosSelecionados}
          setEstilosSelecionados={setEstilosSelecionados}
          generoSelecionado={generoSelecionado}
          setGeneroSelecionado={setGeneroSelecionado}
          filtragem={filtragem}
        />

        <div className="col-md-9 marginTop">
          <div className='container mb-5'>
            <div className="row">
              {usuariosFiltrados.length > 0 ? (
                usuariosFiltrados
                  .slice(0, visibleCount)
                  .map(usuario => (
                    <CardUsuario key={usuario.id} usuario={usuario} />
                  ))
              ) : (
                <div className={`text-center w-100 mt-5 ${LeagueSpartan.className}`}>
                  <h3>Nenhum usuário encontrado com os filtros selecionados.</h3>
                </div>
              )}
            </div>

            {visibleCount < usuariosFiltrados.length && (
              <div className="d-flex justify-content-center mt-4">
              <button onClick={mostrarMais} className="vermais">
                  Ver mais
                  <i className="bi bi-arrow-down-short seta"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
