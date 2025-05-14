'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { League_Spartan } from 'next/font/google';

const leagueSpartan = League_Spartan({
  weight: ['700'],
  subsets: ['latin'],
});

import Loader from '@/Components/loader/loader';
import Link from 'next/link';

export default function CifraPage() {
  const searchParams = useSearchParams();
  const artist = searchParams.get('artist');
  const song = searchParams.get('song');

  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCifra() {
      try {
        const response = await fetch(`http://localhost:3000/api/cifra?artist=${artist}&song=${song}`);
        const data = await response.json();
        setResultado(data);
      } catch (error) {
        console.error('Erro ao buscar cifra:', error);
      } finally {
        setLoading(false);
      }
    }

    if (artist && song) {
      fetchCifra();
    }
  }, [artist, song]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
       <div className="container mt-5 mb-5">
  {resultado?.cifra ? (
    <>
      <h1 className={`${leagueSpartan.className} mb-4`}>
        Cifra de {resultado.artist} - {resultado.name}
      </h1>
      <div className="row">
        {/* Cifra à esquerda */}
        <div className="col-md-8">
         <pre >{JSON.stringify(resultado.cifra, null, 2)}</pre>
        </div>

        {/* Banner à direita */}
        <div className="col-md-4 d-flex justify-content-center align-items-start">
          <a href={resultado.cifraclub_url} target='blank'>
          <img 
            src="/bandmatchCifraclubDesk.png" 
            alt="Banner" 
            className="img-fluid   d-none d-md-block" 
           
          />
            <img 
            src="/bandmatchCifraclubCell.png" 
            alt="Banner" 
            className="img-fluid d-md-none" 
           
          />
          </a>
        </div>
      </div>
    </>
  ) : (
           <div className="container d-flex align-items-center justify-content-center g-5">
            <div className="row w mt-5 mb-5">
              <div className="col-md-6 d-flex flex-column justify-content-center notFoundTexto">
                <h1 className={`fw-bold ${leagueSpartan.className}`}>Nenhuma cifra encontrada</h1>
                <h2 className="h4 mb-3">Nenhuma cifra encontrada para "{resultado.artist} - {resultado.name}"</h2>
                <p className="text-muted mb-4">
                  Verifique se você escreveu corretamente as informações da música e do artista !!!
                </p>
                <Link href="/cifras" className="btn btn-danger px-4 py-2">
                  VOLTAR
                </Link>
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <img src='/discoNotFound.png' alt="CD"  />
              </div>
            </div>
          </div>

  )}
</div>

      )}
    </>
  );
}
