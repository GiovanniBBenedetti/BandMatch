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
  <main className={`container mt-5 `}>
      <section className="text-center mb-5">
        <h1 className={`display-4 ${leagueSpartan.className}`}>Sobre o Band Match</h1>
        <p className="lead">Conectando músicos e bandas pelo Brasil!</p>
      </section>

      <section className="row align-items-center mb-5">
        <div className="col-md-6">
          <img src="/pessoasTocandoHome.png" alt="Pessoas tocando juntas" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2 className={leagueSpartan.className}>O que é o Band Match?</h2>
          <p>
            O Band Match é uma plataforma que ajuda músicos a encontrarem bandas e bandas a encontrarem músicos com os mesmos objetivos musicais.
            Seja você um guitarrista iniciante ou uma banda procurando um vocalista, aqui é o seu lugar!
          </p>
        </div>
      </section>





      <section className="stats py-5">
  <div className="container">
    <h1 className={`text-center mb-4 ${leagueSpartan.className}`}>Impacto do Band Match</h1>
    <div className="row text-center">
      <div className="col-md-4">
        <h2 className={leagueSpartan.className}>10.000+</h2>
        <p>Bandas Formadas</p>
      </div>
      <div className="col-md-4">
        <h2 className={leagueSpartan.className}>100.000+</h2>
        <p>Usuários Ativos</p>
      </div>
      <div className="col-md-4">
        <h2 className={leagueSpartan.className}>1.000+</h2>
        <p >Eventos Realizados</p>
      </div>
    </div>
  </div>
</section>








    </main>
    



<div className="d-none d-lg-block">
  <img src="/alugueEstudioDek.png" className="w-100" alt="" />
</div>


<div className="d-lg-none">
  <img src="/alugueEstudioCell.png" className="w-100" alt="" />
</div>
  </>
  );
}