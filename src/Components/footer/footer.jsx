import Link from 'next/link';
import './footer.css'
export default function Footer() {
  return (
    <>
      <footer>
        <div id="footer_content">
          <div id="footer_contacts">
           <Link href='/'><img src="/logo.png" /></Link> 
            <div id="footer_social_media">
              <p>Conectando músicos e bandas pelo mundo. Encontre sua próxima jam aqui!
              </p>
            </div>
            <div className='redesSociais d-flex gap-5 mt-2'>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-facebook"></i>
            </div>
          </div>
          <ul className="footer-list">
            <li>
              <h3>Principal</h3>
            </li>
            <li>
              <Link href="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/users" className="footer-link">
                Usuários
              </Link>
           </li>
            <li>
              <Link href="" className='footer-link'>
              Como funciona
              </Link>


            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <h3>Novidades</h3>
            </li>
            <li>
              <Link href="/cifras" className="footer-link">
                Cifras
              </Link>
            </li>
            <li>
              <Link href="/bandas" className="footer-link">
              Bandas
              </Link>
            </li>

          </ul>
          <div id="footer_subscribe">
            <h3>Inscreva-se</h3>
            <p>Quer receber informações e novidades ? inscreva-se.</p>
            <div id="input_group">
              <input type="email" id="email" placeholder="Seu email..." />
              <button>
                <i className="bi bi-envelope" />

              </button>
            </div>
          </div>
        </div>
        <div id="footer_copyright">
          <p>@2025 BandMatch . Todos os direitos reservados</p>
        </div>
      </footer>

    </>
  );
}