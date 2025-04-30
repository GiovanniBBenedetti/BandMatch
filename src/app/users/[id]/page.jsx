import "./user.css";
import { League_Spartan } from 'next/font/google'

const LeagueSpartan = League_Spartan({
  weight: '700',
  subsets: ['latin'],
})

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

        <div className="imagemFundo">
        <img
          src={userExibido.fundo}
          className="background-img w-100"
        />

        </div>


        <div className="FotoUsuario img-fluid">
          <img src={userExibido.foto} alt="" />
        </div>


        <div className="nomeUsuario d-flex justify-content-center mt-3">
          <h1 className={LeagueSpartan.className}>{userExibido.nome}</h1>
        </div>
       
        

     

      </div>
    </>
  );
}