import "./banda.css";
import Link from "next/link";

export default async function user({ params }) {
  const bandaId = params.id;

  const faltantesImagens = {
    guitarra: "/faltante_guitarra.png",
    bateria: "/faltante_bateria.png",
    baixo: "/faltante_baixo.png",
    piano: "/faltante_piano.png",
    controladora: "/faltante_controladora.png",
    vocal: "/faltante_vocal.png",
    teclado: "/faltante_teclado.png",
  };

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
        <div className="row d-grid">
          <img
            src={`/Bandas/${bandaId}.png`}
            className="p-0 img-background img-fluid"
            alt="Foto da banda"
          />
          <div className="d-flex align-items-center justify-content-center">
            <img
              src={bandaExibido.logo_banda}
              className="rounded-circle img-logo"
              alt="Logo da banda"
            />
          </div>
        </div>

        <div className="row d-grid">
          <div className="d-flex align-items-center justify-content-center">
            <p className="title">{bandaExibido.nome}</p>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <p className="fs-5">{bandaExibido.descricao}</p>
          </div>

          

        </div>

        <div className="row">
          <div className="d-flex align-items-center justify-content-center">
            
          </div>
        </div>

        <div className="row">
          <div className="d-flex align-items-center justify-content-center my-5">
            <p className="fs-1 fw-bold">Integrantes</p>
            <img src="/icon_integrante.png" className="img-fluid int" alt="" />
          </div>
        </div>

        <div className="gap-5 card-int d-flex row align-items-center justify-content-center">
          {integrantes.map((item, index) => (
            <div className="col-md-4 col-12 mx-0 mx-md-5 justify-content-center align-items-center d-grid" key={index}>
              <div className="custom-card text-center">
                <div
                  className="top-section"
                  style={{ backgroundImage: `url(/Bandas/${item.id}.png)` }}
                ></div>

                <img src={item.foto} alt={item.nome} className="profile-pic" />
                <h2 className="user-name">{item.nome}</h2>

                <div className="instrumento">
                  {item.instrumentos?.map((instrumento, index) => (
                    <img
                      key={index}
                      src={
                        instrumentoImagens[instrumento.toLowerCase().trim()] ||
                        "/default.png"
                      }
                      className="instrumento-img mx-1"
                      alt={instrumento}
                    />
                  ))}
                </div>

                <Link href={`./users/${item.id}`}>
                  <button className="btn-verperfil">Ver Perfil</button>
                </Link>

                <div className="icon-section mb-3"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="d-flex align-items-center justify-content-center my-5">
            <p className="fs-1 fw-bold">Temos necessidade em:</p>
          </div>
        </div>

        <div className="container rounded-4 card_faltante col-md-12">
          <div className="row">
            <div className="">
              <div className="d-grid">
                <div className="">
                  <div className="row">
                    <div className="col-md-4 justify-content-center d-flex align-items-center">
                      <img
                        src={
                          faltantesImagens[
                          bandaExibido.integrante_faltante.instrumento
                          ]
                        }
                        alt="Instrumento faltante"
                        style={{ scale: '1.5', marginTop: '-4vh' }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center">
                          <h5 className="card-title fs-2 fw-bold  d-flex my-4 me-2 my-md-0" >
                          {bandaExibido.integrante_faltante.instrumento
                            .charAt(0)
                            .toUpperCase() +
                            bandaExibido.integrante_faltante.instrumento
                              .slice(1)
                              .toLowerCase()}
                        </h5>
                        <img src={`/iconfaltante/${bandaExibido.integrante_faltante.instrumento}.png`} alt="" />
                        </div>
                        
                        <p className="card-text mt-4 align-items-center justify-content-center d-flex fw-bold">
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

        <div className="row">
          <div className="align-items-center justify-content-center d-flex">
            <button className="rounded-2 border-0 interesso">Me interesso pela vaga</button>
          </div>
        </div>
      </div>
    </>
  );
}
