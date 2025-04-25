import "./user.css";

export default async function user({ params }) {
  const userId = params.id;

  const user = await fetch("http://localhost:3333/users").then((response) =>
    response.json()
  );

  const userExibido = user[userId - 1];
  return (
    <>
      <div className="">
        <img
          src={userExibido.fundo}
          className="img-fluid background-img w-100"
        />

        <div className="rounded-circle align-items-center justify-content-center d-flex w-100">
          <img src={userExibido.foto} className="rounded-circle perfil-img" />  
          <div className="rounded-circle back-perfil"></div>
        </div>
        
      </div>
    </>
  );
}
