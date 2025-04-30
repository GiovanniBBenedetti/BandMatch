"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./bandas.css";

export default function Bandas() {
  const [bandas, setBandas] = useState();

  useEffect(() => {
    fetch("http://localhost:3333/bandas/")
      .then((response) => response.json())

      .then((information) => setBandas(information));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">ola</div>

          <div className="col-md-9">
            <div className="row">
            {bandas ? (
              <>
                {bandas.map((item, index) => {
                  return (
                    <div key={index} className="col-md-5 me-2 mb-4">
                      <div className=" mb-4" key={item.id}>
                        <div className="custom-card text-center">
                          <div
                            className="top-section"
                            style={{
                              backgroundImage: `url(${item.foto_banda})`,
                            }}
                          ></div>

                          <img
                            src={item.logo_banda}
                            alt=""
                            className="profile-pic"
                          />
                          <h2 className="user-name">{}</h2>
                          <h5 className="user-location">{item.nome}</h5>
                          <p className="user-description">{item.nome}</p>

                          <Link href={`./bandas/${bandas.nome}`}>
                            <button className="btn-verperfil">
                              Ver Perfil
                            </button>
                          </Link>

                          <div className="icon-section mb-3"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
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
