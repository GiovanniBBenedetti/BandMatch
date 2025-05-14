import Link from "next/link";
import './home.css'


import { League_Spartan } from 'next/font/google'

const leagueSpartan = League_Spartan({
  weight: ['700'],
  subsets: ['latin'],
})

export default function Home() {
  return (


    
    <>





      <Link href='/users'>
        <div className="home-background d-none d-lg-block">
          <img src="./fundoHomeDesk.png" className="d-block w-100" alt="..." />
        </div>
        <div className="home-background d-lg-none">
          <img src="./fundoHomeCell.png" className="d-block w-100" alt="..." />
        </div>
      </Link>

      <main className=" SobreNos ">
<div className="container py-5">



<div className="text-center mb-5 titulo-sobre-nos">
  <h1 className={`fw-bold ${leagueSpartan.className}`}>Sobre Nós</h1>
  <p className="fs-5 fst-italic">Conheça mais sobre a empresa</p>
</div>

<section className="secao-inicial row align-items-center mt-5">
  <div className="col-md-6 mb-4 mb-md-0">
  <img src="/ImagemSobreNos2.png"  className="img-fluid rounded" />
  </div>
  <div className="col-md-6 text-md-start text-center">
    <h2 className={`mb-4 ${leagueSpartan.className}`}>Nossa Missão</h2>
    <p className="fs-5">
      Conectar músicos e bandas que compartilham da mesma paixão, criando oportunidades reais para tocar, crescer e formar parcerias musicais incríveis.
    </p>
  </div>
</section>

<section className="row align-items-center mb-5 mt-5">
  <div className="col-md-6 order-md-2 mb-4 mb-md-0">
    <img src="/ImagemSobreNos1.png"  className="img-fluid rounded" />
  </div>
  <div className="col-md-6 order-md-1 text-md-start text-center">
    <h2 className={`mb-4 ${leagueSpartan.className}`}>Nossa História</h2>
    <p className="fs-5">
      A Band Match surgiu da necessidade de facilitar a vida de quem ama tocar. Criada por músicos que já passaram pela dificuldade de encontrar parceiros para ensaiar ou formar bandas, a plataforma nasceu para ser um ponto de encontro digital entre talentos musicais.
    </p>
  </div>
</section>




</div>

</main>
<section className="porqueUsar py-5">
  <div className="containerPorqueUsar container text-center">
    <h2 className={`mb-5 ${leagueSpartan.className}`}>Por que usar o BandMatch?</h2>
    <div className="row">
      <div className="col-md-4">
        <i className="bi bi-music-note-beamed fs-1 mb-3"></i>
        <h5 className={`${leagueSpartan.className}`}>Descubra talentos locais</h5>
        <p>Busque músicos da sua cidade para ensaiar ou montar bandas.</p>
      </div>
      <div className="col-md-4">
        <i className="bi bi-people-fill fs-1 mb-3"></i>
        <h5 className={`${leagueSpartan.className}`}>Monte ou entre em uma banda</h5>
        <p>Conecte-se com bandas procurando integrantes com o seu perfil.</p>
      </div>
      <div className="col-md-4">
        <i className="bi bi-file-music fs-1 mb-3"></i>
        <h5 className={`${leagueSpartan.className}`}>Cifras</h5>
        <p>Encontre a cifra da música que você procura, de forma rápida e fácil.</p>
      </div>
    </div>
  </div>
</section>



      <div className="d-none d-lg-block">
        <a target="_blank" href="https://www.madeinbrazil.com.br/?srsltid=AfmBOopNsV_iuphtBCL1d0BDTPaJBvVE7aysVXTqIXMrTOwM9_DZ8szJ">
          <img src="/parceriaMadeBrazil.png" className="w-100" alt="" />
        </a>

      </div>


      <div className="d-lg-none">
        <a target="_blank" href="https://www.madeinbrazil.com.br/?srsltid=AfmBOopNsV_iuphtBCL1d0BDTPaJBvVE7aysVXTqIXMrTOwM9_DZ8szJ">
          <img src="/parceriaMadeBrazilCell.png" className="w-100" alt="" />
        </a>

      </div>
    </>
  );
}