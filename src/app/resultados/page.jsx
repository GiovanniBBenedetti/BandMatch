'use client'

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import './resultados.css'


export default function Results() {
  const searchParams = useSearchParams();
  const query = searchParams.get("produtos") || "";
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3333/users');
      const json = await response.json();

      const resultados = json.filter(produto => {
        const termo = query.toLowerCase();

        const nomeMatch = produto.nome.toLowerCase().includes(termo);

        const instrumentoMatch = produto.instrumentos.some(instr =>
          instr.toLowerCase().includes(termo)
        );

        const estiloMatch = produto.estilos_musicais.some(estilo =>
          estilo.toLowerCase().includes(termo)
        );

        return nomeMatch || instrumentoMatch || estiloMatch;
      });

      setProdutosFiltrados(resultados);
    }

    fetchData();
  }, [query]);

  
  const instrumentoImagens = {
    guitarra: "/guitarra.png",
    bateria: "/bateria.png",
    teclado: "/teclado.png",
    baixo: "/baixo.png",
    piano: "/piano.png",
    controladora: "/controladora.png",
    saxofone: "/saxofone.png",
    vocal: "/vocal.png",
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Resultados da Pesquisa</h1>
      <p className="text-lg">Você pesquisou por: <strong>{query}</strong></p>

      <div className='container mb-5'>
        <div className="row m-5">
          {produtosFiltrados.map(cards => (
  <div className="col-md-4 mb-4" key={cards.id}>
  <div className="custom-card text-center">
  <div
  className="top-section"
  style={{
    backgroundImage: `url(${cards.fundo})`,
  }}
></div>


    <img src={cards.foto} alt="" className="profile-pic" />
    <h2 className="user-name">{cards.nome}</h2>
    <h5 className="user-location">{cards.cidade}</h5>

    <div className='instrumento'>
      {cards.instrumentos.map((item, index) => (
        <img
          key={`${cards.id}-${index}`}
          src={instrumentoImagens[item]}
          alt={item}
          className="instrumento-img"
        />
      ))}
    </div>

    <p className="user-description">{cards.descricao}</p>

    <button className="btn-vermais">Ver Perfil</button>
    <div className="icon-section mb-3"></div>
  </div>
</div>

          ))}
        </div>

      </div>
       
  
    </div>
  );
}