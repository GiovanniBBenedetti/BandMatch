'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Loader from '@/Components/loader/loader';
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
      {loading ? (<>


        <Loader></Loader>


      </>)
        : (<>

          <div>
            <h1>Cifra de {artist} - {song}</h1>
            <pre>{JSON.stringify(resultado, null, 2)}</pre>
          </div>


        </>)}


    </>

  );
}
