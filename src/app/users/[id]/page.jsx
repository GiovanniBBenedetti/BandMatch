import "./user.css";

export default async function user({ params }) {
  const userId = params.id;

  const user = await fetch("http://localhost:3333/users").then((response) =>
    response.json()
  );

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

  const userExibido = user[userId - 1];
  return (
    <>
      <div className="m-0">
        <img
          src={userExibido.fundo}
          className="img-fluid background-img w-100"
        />

        <div className="rounded-circle mt-5 mt-md-3 w-md-100 align-items-center justify-content-center d-flex w-100">
          <div className="rounded-circle back-circle w-md-50">
            <img src={userExibido.foto} className="rounded-circle perfil-img img-fluid" />
          </div>


        </div>
        <div className="align-items-center justify-content-center d-grid person-name">
          <p>{userExibido.nome}</p>

        </div>
        <div className="align-items-center justify-content-center d-grid city-name">
          <p>{userExibido.cidade}</p>
        </div>

        <div className="align-items-center justify-content-center d-flex gap-4">
          {userExibido.instrumentos.map((item, index) => (
            <img
              key={`${userExibido.id}-${index}`}
              src={instrumentoImagens[item]}
              alt={item}
              className="img-fluid img-instrumeto"
            />
          ))}
        </div>

      </div>
    </>
  );
}
