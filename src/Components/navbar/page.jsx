import Link from "next/link";
import "./navbar.css";
import Busca from "@/Components/busca/page";

export default function navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img className="logo" src="/logo.png" alt="" />
          </Link>
          <div className="hamburgers d-lg-none">
            <label
              className="hamburger"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle naviga"
            >
              <input type="checkbox" />
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </label>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/users">
                  Usuarios
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/bandas" className="nav-link">
                  Bandas
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Contatos
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Como funciona
                </Link>
              </li>
            </ul>
            <Busca></Busca>
          </div>
        </div>
      </nav>
    </>
  );
}
