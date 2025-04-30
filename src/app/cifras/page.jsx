'use client';

import { League_Spartan } from 'next/font/google'

const LeagueSpartan = League_Spartan({
  weight: '800',
  subsets: ['latin'],
})



import { useRouter } from 'next/navigation';
import './cifraHome.css';

export default function Cifras() {
  const router = useRouter();

  const handleBannerClick = (artista, musica) => {
    router.push(`/cifras/busca?artist=${encodeURIComponent(artista)}&song=${encodeURIComponent(musica)}`);
  };

  const maisAcessados = [
    { musica: "Porque Ele Vive", artista: "Harpa Cristã" },
    { musica: "Bondade de Deus", artista: "Isaías Saad" },
    { musica: "Céu Azul", artista: "Charlie Brown Jr" },
    { musica: "Santo Pra Sempre", artista: "Gabriel Guedes" },
    { musica: "Iris", artista: "Goo Goo Dolls" },
    { musica: "American idiot", artista: "Green day" },
    { musica: "Pra Sempre", artista: "Fernandinho" },
    { musica: "Garota Nacional", artista: "Skank" },
    { musica: "Boate Azul", artista: "Bruno e Marrone" },
    { musica: "Toxicity", artista: "System of a Down" },
    { musica: "Final Feliz", artista: "Jorge Vercillo" },
    { musica: "Nada Além do Sangue", artista: "Fernandinho" },
    { musica: "Em Teus Braços", artista: "Laura Souguellis" },
    { musica: "Tempo Perdido", artista: "Legião Urbana" },
    { musica: "A Ele Glória", artista: "Diante do Trono" }
  ];

  const videos = [
    { artista: "13 mil visualisações", musica: "BEAUTIFUL THINGS - Benson Boone (Simplificada)", imagem: "/beautifulThingsVideo.jpeg", link: "https://www.youtube.com/watch?v=BczxyQJoMkU" },
    { artista: "8,5 mil visualisações", musica: "MAS QUE NADA - Jorge Ben Jor (Completa)", imagem: "/JorgeBenJorAula.jpeg", link: "https://www.youtube.com/watch?v=L9QsdlijzT0" },
    { artista: "27 mil visualisações", musica: "CONSTRUÇÃO - Chico Buarque (Completa) ", imagem: "/chicoBoarqueAula.jpeg", link: "https://youtu.be/7jMD5XBX8Ds?si=aRY_fPKTt9cvHDeW" },
    { artista: "14 mil visualisações", musica: "AERIALS - System Of A Down | Como tocar no baixo", imagem: "/aerialsAula.jpeg", link: "https://youtu.be/hnBUWp6xL7c?si=sPhuQ16TdrO2TCDv" },
    { artista: "52 mil visualisações", musica: "STAYING ALIVE - Bee Gees (Completa) | Como tocar no violão", imagem: "/beeGuessAula.jpg", link: "https://youtu.be/dRUD4DBGt20?si=RzP5O1wsHeqqgDh_" },
    { artista: "29 mil visualisações", musica: "MARIA, MARIA - Milton Nascimento (Completa) | Como tocar no violão", imagem: "/mariaMariaAula.jpeg", link: "https://youtu.be/8A1OPqJzY0Y?si=RyVbfsPkR9wa-NhB" },
    { artista: "11 mil visualisações", musica: "SEPTEMBER - Earth, Wind and Fire | Como tocar no baixo", imagem: "/septemberAula.jpeg", link: "https://youtu.be/HPs0XYQBOhQ?si=UxrPqjPpaxUQ4IvH" },
    { artista: "12 mil visualisações", musica: "SUPERSTITION - Stevie Wonder | Como tocar no baixo", imagem: "/superstitionAula.jpeg", link: "https://youtu.be/24MvQeRyc0g?si=2lnmarvplE675tYP" },
  ];


  return (
    <>

      <div className='marginNegativa'>


        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./fundoDjavan.png"
                className="d-block w-100"
                alt="Djavan"
                style={{ cursor: 'pointer' }}
                onClick={() => handleBannerClick('djavan', 'eu te devoro')}
              />
            </div>

            <div className="carousel-item">
              <img
                src="/fundoBillie.png"
                className="d-block w-100"
                alt="Mais Artista"
                style={{ cursor: 'pointer' }}
                onClick={() => handleBannerClick('billie eilish', 'happier than ever')}
              />
            </div>
            <div className="carousel-item">
              <img
                src="./fundoNirvana.png"
                className="d-block w-100"
                alt="Mais Artista"
                style={{ cursor: 'pointer' }}
                onClick={() => handleBannerClick('nirvana', 'smells like teen spirit')}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://placehold.co/1600x600"
                className="d-block w-100"
                alt="Mais Artista"
                style={{ cursor: 'pointer' }}
                onClick={() => handleBannerClick('MaisArtista', 'MaisMusica')}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      <div className="container mt-5">
        <h2 className={`${LeagueSpartan.className} ps-2 tituloMaisAcessados`}>
          Mais acessados
        </h2>

        <div className="row g-3">
          {maisAcessados.map((item, index) => (
            <div key={index} className="col-md-4">
              <div
                className="card h-100 border-0  cardsAcessados"
                onClick={() => handleBannerClick(item.artista, item.musica)}
              >
                <div className="card-body p-3">
                  <div className="d-flex align-items-center">
                    <p className={`${LeagueSpartan.className} numero me-3 m-0`}>
                      {index + 1}
                    </p>
                    <div className="flex-grow-1">
                      <h6 className="mb-1 fw-normal" style={{ fontSize: '1rem' }}>{item.musica}</h6>
                      <small className="text-muted">{item.artista}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <h2 className={`${LeagueSpartan.className} ps-2 tituloMaisAcessados`}>Aulas em Vídeo</h2>
        <div className="row g-4">
          {videos.map((video, index) => (
            <div key={index} className="col-md-3">
              <a className='linkVideo' target='blank' href={video.link}>
                <div
                  className="card border-0 cardsVideo position-relative"
                  style={{ cursor: 'pointer' }}
                >
                  <div className="video-thumbnail">
                    <img
                      src={video.imagem}
                      className="card-img-top rounded"
                      alt={video.musica}
                    />
                    <div className="overlay">
                      <img src="/play.png" alt="Play" className="play-icon" />
                    </div>
                  </div>
                  <div className="card-body p-2">
                    <h6 className="card-title mb-1 fw-bold" style={{ fontSize: '1rem' }}>{video.musica}</h6>
                    <small className="text-muted">{video.artista}</small>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

    </>

  );
}