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



        <div className=" container mt-4">
          <div className="row justify-content-center gap-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mb-4">
                  <p className="mb-3">{userExibido.bio}</p>
                </div>

                <div className="col-lg-5">
                  <div className="row g-3">
                    {userExibido.screenshot.map((shot) => (
                      <div className="col-6 m-0 mt-3" key={shot}>
                        <img src={`/${shot}`} className="img-fluid rounded shadow" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="portifolio d-flex justify-content-center p-5 mt-5 mb-5">
                <h1 className={LeagueSpartan.className}>Portifólio</h1>
              </div>
            </div>
          </div>
          </div>
        

     

      </div>
    </>
  );
}