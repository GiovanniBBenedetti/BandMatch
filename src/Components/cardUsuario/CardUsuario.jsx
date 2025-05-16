'use client'

import Link from 'next/link'
import './cardUsuario.css' 

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

export default function CardUsuario({ usuario }) {
  return (
    <div className="col-md-6 col-sm-12 mb-4">
      <div className="custom-card text-center">
        <div
          className="top-section"
          style={{ backgroundImage: `url(${usuario.fundo})` }}
        ></div>

        <img src={usuario.foto} alt="" className="profile-pic" />
        <h2 className="user-name">{usuario.nome}</h2>
        <h5 className="user-location">{usuario.cidade}</h5>
        <p className="user-description">{usuario.descricao}</p>

        <div className="instrumento">
          {usuario.instrumentos.map((item, index) => (
            <img
              key={`${usuario.id}-${index}`}
              src={instrumentoImagens[item]}
              alt={item}
              className="instrumento-img"
            />
          ))}
        </div>

        <Link href={`./users/${usuario.id}`}>
          <button className="btn-verperfil">Ver Perfil</button>
        </Link>
        <div className="icon-section mb-3"></div>
      </div>
    </div>
  )
}
