import './footer.css'
export default function Footer() {
    return (
  <>
  <footer>
  <div id="footer_content">
    <div id="footer_contacts">
      <img src="/logo.png"/>
      <div id="footer_social_media">
        <p>Conectando músicos e bandas pelo mundo. Encontre sua próxima jam aqui!
        </p>
      </div>
    </div>
    <ul className="footer-list">
      <li>
        <h3>Principal</h3>
      </li>
      <li>
        <a href="#" className="footer-link">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="footer-link">
          Acomodações
        </a>
      </li>
      <li>

          Restaurante

      </li>
    </ul>
    <ul className="footer-list">
      <li>
        <h3>Login</h3>
      </li>
      <li>
        <a href="#" className="footer-link">
          Eventos
        </a>
      </li>
      <li>
        <a href="#" className="footer-link">
          Cadastro
        </a>
      </li>
      <li>
        <a href="#" className="footer-link">
          Login
        </a>
      </li>
    </ul>
    <div id="footer_subscribe">
      <h3>Inscreva-se</h3>
      <p>Quer receber informações e promoções ? inscreva-se.</p>
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