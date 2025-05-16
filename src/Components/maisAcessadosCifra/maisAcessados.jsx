'use client';

import { useRouter } from 'next/navigation';
import { League_Spartan } from 'next/font/google';
import './maisAcessados.css';

const LeagueSpartan = League_Spartan({
  weight: '800',
  subsets: ['latin'],
});

export default function MaisAcessados() {
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
    { musica: "Baby", artista: "Justin Bieber" },
    { musica: "A Ele Glória", artista: "Diante do Trono" }
  ];

  return (
    <div className="container mt-5">


      <div className="row g-3">
        {maisAcessados.map((item, index) => (
          <div key={index} className="col-md-4">
            <div
              className="card h-100 border-0 cardsAcessados"
              onClick={() => handleBannerClick(item.artista, item.musica)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-body p-3">
                <div className="d-flex align-items-center">
                  <p className={`${LeagueSpartan.className} numero me-3 m-0`}>
                    {index + 1}
                  </p>
                  <div className="flex-grow-1">
                    <div className="musicaVerificada d-flex gap-3">
                      <h6 className="mb-1 fw-normal" style={{ fontSize: '1rem' }}>
                        {item.musica}
                      </h6>
                      <i className="bi bi-check-circle-fill"></i>
                    </div>
                    <small className="text-muted">{item.artista}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
