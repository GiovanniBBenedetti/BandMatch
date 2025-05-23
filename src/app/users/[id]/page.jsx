'use client';

import "./user.css";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { League_Spartan } from 'next/font/google';
import Loader from "@/Components/loader/loader";

const LeagueSpartan = League_Spartan({
  weight: '700',
  subsets: ['latin'],
});

export default function User({ params }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);

  // Utilizando React.use() para acessar params de forma assíncrona
  useEffect(() => {
    const fetchUserId = async () => {
      const resolvedParams = await params;
      setUserId(resolvedParams.id);
    };
    fetchUserId();
  }, [params]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("http://localhost:3333/users");
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, []);

  const handleBannerClick = (artista, musica) => {
    router.push(`/cifras/busca?artist=${encodeURIComponent(artista)}&song=${encodeURIComponent(musica)}`);
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

  if (!user || !userId) return <Loader></Loader>;

  const userExibido = user[userId - 1];

  return (
    <>
      <div className="m-0">
    <div
  className="imagemFundo"
  style={{ backgroundImage: `url(${userExibido.fundo})` }}
></div>


        <div className="FotoUsuario">
          <img src={userExibido.foto} className="img-fluid" alt="" />
        </div>


        {userExibido.instrumentos && userExibido.instrumentos.length > 0 && (
          <div className="instrumentos d-flex justify-content-center mt-2 gap-3">
            {userExibido.instrumentos.map((instrumento, index) => (
              <img
                key={`${index}`}
                src={instrumentoImagens[instrumento]}
                className="instrumento-img"
              />
            ))}

          </div>
        )}

        <div className="nomeUsuario d-flex justify-content-center mt-3">
          <h1 className={LeagueSpartan.className}>{userExibido.nome}</h1>
        </div>

        <div className="container mt-4">
          <div className="justify-content-center gap-4">

            <div className="row">
              <div className="col-12 mb-4">
                <p className="mb-3">{userExibido.bio}</p>
              </div>

              <div className="d-flex  flex-column">
                <h2 className={`mb-3 ${LeagueSpartan.className}`}>Estilos Musicais</h2>
                <div className="d-flex gap-2 ">
                  {userExibido.estilos_musicais.map((estilo, index) => (
                    
                    <span key={index} className={`SpanEstilos ${LeagueSpartan.className}`}>
                      {estilo}
                    </span>
                  
                  ))}
                </div>
              </div>


            </div>

            <div>
              <div className="portifolio d-flex justify-content-center p-5 mt-5 mb-5">
                <h1 className={LeagueSpartan.className}>Portifólio</h1>
              </div>

              <div className="row g-4 mb-5">
                {userExibido.portifolio?.map((musica, index) => (
                  <div className="col-12 col-md-6" key={musica.id}>
                    <div className="portfolio-item">
                      <div className="music-number">{index + 1}</div>
                      <div className="music-details">
                        <div className="music-title">{musica.nome}</div>
                        <div className="music-artist">{musica.artista}</div>
                      </div>
                      <div className="music-icon">
                        <i
                          className="bi bi-music-note-beamed"
                          onClick={() => handleBannerClick(musica.artista, musica.nome)}
                        ></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
