'use client'

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import './resultados.css'
import Link from "next/link";
import { League_Spartan } from 'next/font/google'
import Loader from "@/Components/loader/loader";

const LeagueSpartan = League_Spartan({
  weight: '700',
  subsets: ['latin'],
})

export default function Results() {
  const searchParams = useSearchParams();
  const query = searchParams.get("produtos") || "";
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
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
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setProdutosFiltrados([]);
      } finally {
        setIsLoading(false);
      }
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
    <div className="container flex flex-col items-center justify-center min-h-screen p-4">
      {isLoading ? (
        <Loader></Loader>
      ) : produtosFiltrados.length === 0 ? (
        <div className="container d-flex align-items-center justify-content-center g-5">
          <div className="row w mt-5 mb-5">
            <div className="col-md-6 d-flex flex-column justify-content-center notFoundTexto">
              <h1 className={`fw-bold ${LeagueSpartan.className}`}>Nenhum Resultado encontrado</h1>
              <h2 className="h4 mb-3">Nenhum Resultado encontrado para "{query}"</h2>
              <p className="text-muted mb-4">
                Verifique se você escreveu corretamente as informações !!!
              </p>
              <Link href="/" className={`btn btn-danger px-4 py-2`}>
                VOLTAR
              </Link>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img src='/discoNotFound.png' alt="CD" />
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1 className={`text-2xl font-bold mb-4 ${LeagueSpartan.className}`}>Resultados da Pesquisa</h1>
          <p className="text-lg mb-5">Você pesquisou por: <strong>{query}</strong></p>

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

                  <Link href={`./users/${cards.id}`}>
                    <button className="btn-vermais">Ver Perfil</button>
                  </Link>
                  <div className="icon-section mb-3"></div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
