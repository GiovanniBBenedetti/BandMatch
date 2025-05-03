"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./bandas.css";

export default function Bandas() {
  const [bandas, setBandas] = useState([]);
  const [bandasFiltrados, setFiltragem] = useState([]);
  const [estilosSelecionados, setEstilosSelecionados] = useState([]);
  const [instrumentosSelecionados, setInstrumentosSelecionados] = useState([]);
  const estilosMusicaisCheckbox = ["rock", "pop", "raggae", "jazz", "funk", "eletronica"];
  const instrumentosCheckBox = [
    "guitarra",
    "baixo",
    "bateria",
    "vocal",
    "piano",
    "teclado",
    "saxofone",
    "controladora",
  ];

  const handleCheckbox = (e, setter) => {
    const { value, checked } = e.target;
    setter(prev => (
      checked ? [...prev, value] : prev.filter(item => item !== value)
    ));
  };

  const filtragem = () => {
    const filtrados = bandas.filter((banda) => {
      const atendeInstrumentos =
        instrumentosSelecionados.length === 0 ||
        instrumentosSelecionados.every(instr => banda.integrante_faltante.instrumento.includes(instr));

      const atendeEstilos =
        estilosSelecionados.length === 0 ||
        estilosSelecionados.every(estilo => banda.estilos_musicais.includes(estilo));

      return atendeInstrumentos && atendeEstilos;
    });

    console.log(filtrados);
    setFiltragem(filtrados);
  }


  useEffect(() => {
    fetch("http://localhost:3333/bandas/")
      .then((response) => response.json())
      .then((information) => {
        setBandas(information)
        setFiltragem(information)
      });
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <h2>Bandas</h2>
          </div>

        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="filtros p-3 bg-white shadow rounded">
              <h5>Categorias relacionadas</h5>

              <div className="mb-3">
                <label>Gêneros Musicais das Bandas</label>
                {estilosMusicaisCheckbox.map((estilo) => (
                  <div className="" key={estilo}>
                    <label>{estilo}</label>
                    <input
                      type="checkbox"
                      value={estilo}
                      className=""
                      onChange={(e) => handleCheckbox(e, setEstilosSelecionados)}
                    />
                  </div>
                ))}
              </div>


              <div className="mb-3">
                <label>Parte musical necessitada</label>
                {instrumentosCheckBox.map((instrumento) => (
                  <div className="" key={instrumento}>
                    <label className="form-check-label">
                      {instrumento.charAt(0).toUpperCase() + instrumento.slice(1).toLowerCase()}
                    </label>
                    <input
                      type="checkbox"
                      value={instrumento}
                      className=""
                      onChange={(e) => handleCheckbox(e, setInstrumentosSelecionados)}
                    />
                  </div>

                ))}
              </div>





              <button className="btn-verperfil w-100 mt-2" onClick={filtragem}>
                Filtrar
              </button>
            </div>
          </div>


          <div className="col-md-9">
            <div className="row">
              {bandasFiltrados.length > 0 ? (
                bandasFiltrados.map((banda) => {
                  return (
                    <div key={banda.id} className="col-md-5 me-2 mb-4 ms-5">
                      <div className=" mb-4" key={banda.id}>
                        <div className="custom-card text-center">
                          <div
                            className="top-section"
                            style={{
                              backgroundImage: `url(${banda.foto_banda})`,
                            }}
                          ></div>

                          <img
                            src={banda.logo_banda}
                            alt=""
                            className="profile-pic"
                          />
                          <h2 className="user-name">{ }</h2>
                          <h5 className="user-location">{banda.nome}</h5>
                          <p className="user-description">{banda.descricao}</p>

                          <Link href={`./bandas/${banda.id}`}>
                            <button className="btn-verperfil">
                              Ver Perfil
                            </button>
                          </Link>

                          <div className="icon-section mb-3"></div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <>
                  <p>Carregando...</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
