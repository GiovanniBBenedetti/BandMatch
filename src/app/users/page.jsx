'use client'
import { useState, useEffect } from 'react'
import './users.css'

export default function users() {
  const [usuarios, setUsuario] = useState([])
  const [number, setNumber] = useState(9)

  function resposta() {
    const novoNumero = number + 9
    setNumber(novoNumero)

    fetch(`http://localhost:3333/users?_limit=${novoNumero}`)
      .then((response) => response.json())
      .then((information) => setUsuario(information))
  }

  useEffect(() => {
    fetch("http://localhost:3333/users?_limit=9")
      .then((response) => response.json())
      .then((information) => setUsuario(information))
  }, [])

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


  return (
    <>
      <div className='container mb-5'>
        <div className="row">
          {usuarios.map(cards => (
            <div className="col-md-4 mb-4" key={cards.id}>
              <div className="custom-card text-center">
                <div
                  className="top-section"
                  style={{
                    backgroundImage: `url(${cards.fundo})`,

                  }}
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


                <button className="btn-verperfil">Ver Perfil</button>
                <div className="icon-section mb-3"></div>
              </div>
            </div>

          ))}
        </div>

        <div className='container-btn'>
          <button className="btn-vermais" onClick={resposta}>
            Ver Mais
          </button>
        </div>

      </div>

    </>
  )
}
