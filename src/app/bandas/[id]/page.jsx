import "./banda.css";
import Link from "next/link";
import { League_Spartan } from 'next/font/google'

const LeagueSpartan = League_Spartan({
  weight: '700',
  subsets: ['latin'],
})

export default async function user({ params }) {
  const bandaId = params.id;

  const instrumentoImagens = {
    guitarra: "/guitarra.png",
    bateria: "/bateria.png",
    teclado: "/teclado.png",
    baixo: "/baixo.png",
    piano: "/piano.png",
    controladora: "/controladora.png",
    saxofone: "/saxofone.png",
    vocal: "/vocal.png",
  };

  const banda = await fetch("http://localhost:3333/bandas").then((response) =>
    response.json()
  );

  const user = await fetch("http://localhost:3333/users").then((response) =>
    response.json()
  );

  const bandaExibido = banda[bandaId - 1];

  const integrantes = bandaExibido.integrantes;

  return (
    <>
      <div className="container-fluid">
        <div className="row d-grid position-relative">
          <div className="banda-header-gradient"></div>
          <div className="banda-logo-container">
            <img
              src={bandaExibido.logo_banda}
              className="rounded-circle img-logo shadow-lg"
              alt="Logo da banda"
            />
          </div>
        </div>

        <div className="row">
          <div className="d-flex align-items-center justify-content-center">
            <h1 className={`mt-3 ${LeagueSpartan.className}`}>{bandaExibido.nome}</h1>
          </div>
        </div>

        <div className="container">
          <div className="descricaoDetalhada d-flex justify-content-center">
            <p className="fs-5 ">{bandaExibido.descricao_detalhada}</p>
          </div>
        </div>

       <div className="mt-5 d-flex container flex-column">
                <h1 className={`mb-3 ${LeagueSpartan.className}`}>Estilos Musicais</h1>
                <div className="d-flex gap-2 ">
                  {bandaExibido.estilos_musicais.map((estilo, index) => (
                    
                    <span key={index} className={`SpanEstilos ${LeagueSpartan.className}`}>
                      {estilo}
                    </span>
                  
                  ))}
                </div>
              </div>


        <div className="container my-5">
          <p className={`fs-1 fw-bold ${LeagueSpartan.className}`}>Integrantes</p>
        </div>


<div className="container">
  <div className="row gx-4 gy-5 justify-content-center">
    {integrantes.map((item, index) => (
      <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
        <div className="profile-card text-center w-100">
          <div
            className="card-header-img"
            style={{ backgroundImage: `url(/Bandas/${item.id}.png)` }}
          ></div>

          <img src={item.foto} alt={item.nome} className="profile-avatar" />
          <h2 className="profile-name">{item.nome}</h2>

          <div className="instrument-list d-flex justify-content-center flex-wrap">
            {item.instrumentos?.map((instrumento, index) => (
              <img
                key={index}
                src={
                  instrumentoImagens[instrumento.toLowerCase().trim()] || "/default.png"
                }
                className="instrument-icon mx-1 my-1"
                alt={instrumento}
              />
            ))}
          </div>

          <Link href={`../users/${item.id}`}>
            <button className="btn-view-profile mt-3">Ver Perfil</button>
          </Link>

          <div className="social-icons mb-3"></div>
        </div>
      </div>
    ))}
  </div>
</div>



        <div className="container mt-5">
          <div className="d-flex my-3">
            <h1 className={`${LeagueSpartan.className}`}>Temos necessidade em:</h1>
          </div>
        </div>

        <div className="container rounded-4 card_faltante col-md-12 mb-5">
          <div className="row">
            <div className="">
              <div className="d-grid">
                <div className="">
                  <div className="row">
                    <div className="col-md-4 justify-content-center d-flex align-items-center">
                      <img
                        src={instrumentoImagens[bandaExibido.integrante_faltante.instrumento]}
                        alt="Instrumento faltante"
                        style={{ width: '150px' }}
                      />

                    </div>
                    <div className="col-md-8 d-flex align-items-center justify-content-center">
                      <div className="card-body">
                        <h5 className={`card-title fs-2 fw-bold align-items-center justify-content-center d-flex my-4 my-md-0 ${LeagueSpartan.cla}`}>
                          {bandaExibido.integrante_faltante.instrumento
                            .charAt(0)
                            .toUpperCase() +
                            bandaExibido.integrante_faltante.instrumento
                              .slice(1)
                              .toLowerCase()}
                        </h5>
                        <p className="card-text mt-4 align-items-center justify-content-center d-flex">
                          {bandaExibido.integrante_faltante.descricao}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
