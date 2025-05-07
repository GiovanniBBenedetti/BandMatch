import "./banda.css";

export default async function user({ params }) {
  const bandaId = params.id;

  const banda = await fetch("http://localhost:3333/bandas").then((response) =>
    response.json()
  );

  const user = await fetch("http://localhost:3333/users").then((response) =>
    response.json()
  );


  
  const bandaExibido = banda[bandaId - 1];
  const userid = bandaExibido.integrantes.map(integrante => integrante.id);


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
            <p className="fs-1 fw-bold my-5">Integrantes</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 card-int">
            

            <button>Veja Perfil</button>
          </div>
        </div>
      </div>
    </>
  );
}
