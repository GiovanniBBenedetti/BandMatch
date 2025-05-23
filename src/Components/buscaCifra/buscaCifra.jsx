'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';



export default function BuscaCifras() {
    const router = useRouter();

    const [artista, setArtista] = useState("");
    const [musica, setMusica] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (artista && musica.trim()) {
            router.push(`/cifras/busca?artist=${encodeURIComponent(artista)}&song=${encodeURIComponent(musica)}`);
        }
    };


    return (
        <>
            <form className="row gy-3 gx-3 justify-content-center align-items-center mb-5" onSubmit={handleSearch}>
                <div className="col-12 col-md-4">
                    <input
                        type="text"
                        placeholder="Digite artista ou banda ..."
                        className="form-control custom-input"
                        value={artista}
                        onChange={(e) => setArtista(e.target.value)}
                        required
                    />
                </div>
                <div className="col-12 col-md-4">
                    <input
                        type="text"
                        placeholder="Digite a música ..."
                        className="form-control custom-input"
                        value={musica}
                        onChange={(e) => setMusica(e.target.value)}
                        required
                    />
                </div>
                <div className="col-12 col-md-auto">
                    <button type="submit" className={`btnEnviar`}>Buscar</button>
                </div>
            </form>
        </>
    )
}