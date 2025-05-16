'use client'

import { useRouter } from 'next/navigation'
import './carrosselCifra.css'


export default function CarrosselCifras() {
  const router = useRouter()

  const handleBannerClick = (artista, musica
  ) => {
    router.push(`/cifras/busca?artist=${encodeURIComponent(artista)}&song=${encodeURIComponent(musica)}`)
  }

  return (
    <div className='marginNegativa'>
      <div
        id="carouselExampleIndicators"
        className="carousel slide desktop"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          {[0, 1, 2, 3].map(i => (
            <button
              key={i}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={i}
              className={i === 0 ? 'active' : ''}
              aria-current={i === 0 ? 'true' : undefined}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./fundoDjavan.png"
              className="d-none d-lg-block w-100"
              alt="Djavan"
              style={{ cursor: 'pointer' }}
              onClick={() => handleBannerClick('djavan', 'eu te devoro')}
            />
            <img
              src="./fundoDjavanCell.png"
              className="d-block d-lg-none w-100"
              alt="Djavan"
              style={{ cursor: 'pointer' }}
              onClick={() => handleBannerClick('djavan', 'eu te devoro')}
            />
          </div>

          <div className="carousel-item">
            <img
              src="/fundoBillie.png"
              className="d-none d-lg-block w-100"
              alt="Billie"
              style={{ cursor: 'pointer' }}
              onClick={() => handleBannerClick('billie eilish', 'happier than ever')}
            />
            <img
              src="/fundoBellieCell.png"
              className="d-block d-lg-none w-100"
              alt="Billie"
              style={{ cursor: 'pointer' }}
              onClick={() => handleBannerClick('billie eilish', 'happier than ever')}
            />
          </div>

          <div className="carousel-item">
            <img
              src="./fundoNirvana.png"
              className="d-none d-lg-block w-100"
              alt="Nirvana"
              style={{ cursor: 'pointer' }}
              onClick={() => handleBannerClick('nirvana', 'smells like teen spirit')}
            />
            <img
              src="./fundoNirvanaCell.png"
              className="d-block d-lg-none w-100"
              alt="Nirvana"
              style={{ cursor: 'pointer' }}
              onClick={() => handleBannerClick('nirvana', 'smells like teen spirit')}
            />
          </div>

          <div className="carousel-item">
            <img
              src="./fundoCharlie.png"
              className="d-none d-lg-block w-100"
              alt="Charlie Brown Jr"
              style={{ cursor: 'pointer' }}
              onClick={() => handleBannerClick('charlie brown jr', 'so os loucos sabem')}
            />
            <img
              src="./fundoCharlieCell.png"
              className="d-block d-lg-none w-100"
              alt="Charlie Brown Jr"
              style={{ cursor: 'pointer' }}
              onClick={() => handleBannerClick('charlie brown jr', 'so os loucos sabem')}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

