import { League_Spartan } from 'next/font/google'

import Carrossel from '@/Components/carroselCifras/carrosselCifra';
import MaisAcessados from '@/Components/maisAcessadosCifra/maisAcessados';
import BuscaCifras from '@/Components/buscaCifra/buscaCifra';

const LeagueSpartan = League_Spartan({
  weight: '800',
  subsets: ['latin'],
})


import './cifraHome.css';

export default function Cifras() {



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
<Carrossel></Carrossel>

      </div>


      <div className="container mt-5">
       
       <BuscaCifras></BuscaCifras>


        <h2 className={`${LeagueSpartan.className} ps-2 tituloMaisAcessados`}>
          Mais acessados
        </h2>
        <MaisAcessados></MaisAcessados>
 
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