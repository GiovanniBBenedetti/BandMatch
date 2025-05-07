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

      <main className="ConteudoPrincipal">
        <div className="text-white SobreNos">
          <h1 className={`mt-5 ${leagueSpartan.className}`}>Sobre Nós</h1>
          <p>Conheça mais sobre a empresa</p>
        </div>
      </main>

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