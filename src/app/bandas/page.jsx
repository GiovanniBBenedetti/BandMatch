"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./bandas.css";
import { League_Spartan } from 'next/font/google'

const LeagueSpartan = League_Spartan({
  weight: '700',
  subsets: ['latin'],
})


export default function Bandas() {
  const [bandas, setBandas] = useState([]);
  const [bandasFiltrados, setFiltragem] = useState([]);
  const [estilosSelecionados, setEstilosSelecionados] = useState([]);
  const [instrumentosSelecionados, setInstrumentosSelecionados] = useState([]);
  const estilosMusicaisCheckbox = ["rock", "pop", "raggae", "jazz", "funk", "eletronica"];
  const instrumentosCheckBox = [
    "guitarra", "baixo", "bateria", "vocal", "piano", "teclado", "saxofone", "controladora",
  ];

  const handleCheckbox = (e, setter) => {
    const { value, checked } = e.target;
    setter(prev =>
      checked ? [...prev, value] : prev.filter(item => item !== value)
    );
  };

  const filtragem = () => {
    const filtrados = bandas.filter((banda) => {
      const atendeInstrumentos =
        instrumentosSelecionados.length === 0 ||
        instrumentosSelecionados.every(instr =>
          banda.integrante_faltante.instrumento.includes(instr)
        );

      const atendeEstilos =
        estilosSelecionados.length === 0 ||
        estilosSelecionados.every(estilo =>
          banda.estilos_musicais.includes(estilo)
        );

      return atendeInstrumentos && atendeEstilos;
    });

    setFiltragem(filtrados);
  };

  useEffect(() => {
    fetch("http://localhost:3333/bandas/")
      .then((response) => response.json())
      .then((information) => {
        setBandas(information);
        setFiltragem(information);
      });
  }, []);

  return (
<>
  <div className="container-fluid mt-5">
    <div className="row">
      <div className="col-md-3 mb-5">
        <div className="filtros-container p-3 bg-white shadow rounded">
          <h3 className={`filtros-titulo ${LeagueSpartan.className}`}>Categorias relacionadas</h3>

          <div className="mb-3">
            <label className="filtros-label">Gêneros Musicais das Bandas</label>
            <div className="d-flex flex-column">
              {estilosMusicaisCheckbox.map((estilo) => (
                <div className="form-check d-flex align-items-center gap-2 p-0" key={estilo}>
                  <input
                    type="checkbox"
                    value={estilo}
                    className="ui-checkbox"
                    onChange={(e) => handleCheckbox(e, setEstilosSelecionados)}
                  />
                  <label className="form-check-label">
                    {estilo.charAt(0).toUpperCase() + estilo.slice(1).toLowerCase()}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <label className="filtros-label">Parte musical necessitada</label>
            <div className="d-flex flex-column">
              {instrumentosCheckBox.map((instrumento) => (
                <div className="form-check d-flex align-items-center gap-2 p-0" key={instrumento}>
                  <input
                    type="checkbox"
                    value={instrumento}
                    className="ui-checkbox"
                    onChange={(e) => handleCheckbox(e, setInstrumentosSelecionados)}
                  />
                  <label className="form-check-label">
                    {instrumento.charAt(0).toUpperCase() + instrumento.slice(1).toLowerCase()}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <button className="filtros-botao-aplicar w-100 mt-2" onClick={filtragem}>
            Filtrar
          </button>
        </div>
      </div>

      <div className="col-md-9">
        <div className="container mb-5">
          <div className="row">
            {bandasFiltrados.length > 0 ? (
              bandasFiltrados.map((banda) => (
                <div key={banda.id} className="col-md-4 mb-4">
      <div className="banda-card text-center">
  <div
    className="banda-header"
  ></div>

  <div className="banda-conteudo-gradient">
    <img src={banda.logo_banda} alt="Logo da Banda" className="banda-logo" />
    <h5 className="banda-nome">{banda.nome}</h5>
    <p className="banda-descricao">{banda.descricao}</p>
    <Link href={`./bandas/${banda.id}`}>
      <button className="btn-verperfil">Ver Perfil</button>
    </Link>
    <div className="banda-icons mb-3"></div>
  </div>
</div>

                </div>
              ))
            ) : (
              <div className={`text-center w-100 mt-5 ${LeagueSpartan.className}`}>
                <h3>Nenhuma banda encontrada com os filtros selecionados.</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  );
}
