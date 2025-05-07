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
  const userId = bandaExibido.integrantes.map((integrante) => integrante.id);

  const userExibido = user[userId[2] - 1];

  return (
    <>
      <div className="container-fluid">
        <div className="row d-grid">
          <img
            src={bandaExibido.foto_banda}
            className="p-0 img-background img-fluid"
          />
          <div className="d-flex align-items-center justify-content-center">
            <img
              src={bandaExibido.logo_banda}
              className="rounded-circle img-logo"
            />
          </div>
        </div>

        <div className="row">
          <div className="d-flex align-items-center justify-content-center">
            <p className="title">{bandaExibido.nome}</p>
          </div>
        </div>

        <div className="row">
          <div className="d-flex align-items-center justify-content-center">
            <p className="fs-5">{bandaExibido.descricao}</p>
          </div>
        </div>

        <div className="row">
          <div className="d-flex align-items-center justify-content-center my-5">
            <p className="fs-1 fw-bold">Integrantes</p>
          </div>
        </div>

        <div className="gap-5 card-int d-flex row align-items-center justify-content-center">
          {userId.map((item, index) => {
            return (
              <div className="col-md-4 mx-5 w-25" key={index}>
                <div className="custom-card text-center">
                  <div
                    className="top-section"
                    style={{ backgroundImage: `url(${userExibido.fundo})` }}
                  ></div>

                  <img src={userExibido.foto} alt="" className="profile-pic" />
                  <h2 className="user-name">{userExibido.nome}</h2>

                  <div className="instrumento">
                    <img
                      src={instrumentoImagens.bateria}
                      className="instrumento-img"
                      alt=""
                    />
                  </div>
                  <Link href={`./users/${item}`}>
                    <button className="btn-verperfil">Ver Perfil</button>
                  </Link>

                  <div className="icon-section mb-3"></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="row">
          <div className="d-flex align-items-center justify-content-center my-5">
            <p className="fs-1 fw-bold">Temos necessidade em:</p>
          </div>
        </div>

        <div className="container rounded-4 card_faltante">
          <div className="row">
            <div className="col-md-12 d-flex">
              <div className="w-25">
               <img src={faltantesImagens.bateria} alt="" />
              </div>

              <div className="d-grid">
                <div className="d-grid justify-content-center">
                  <p className="fs-2 fw-bold mt-2">
                    {bandaExibido.integrante_faltante.instrumento}
                  </p>
                </div>

                <div className="d-flex justify-content-center">
                  <p className="faltante_desc fw-bold">
                    {bandaExibido.integrante_faltante.descricao}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
