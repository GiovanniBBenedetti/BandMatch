'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import './busca.css'

export default function Busca() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault(); // Evita recarregar a página
    if (query.trim()) {
      router.push(`/resultados?produtos=${query}`);
    }
  };

  return (
   
      <form onSubmit={handleSearch} className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Nome, estilo Musical, instrumento ... "
          aria-label="Nome, estilo Musical, instrumento ... "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>

  );
}