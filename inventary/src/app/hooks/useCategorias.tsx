import { useState, useEffect } from 'react';

interface Categoria {
  id: number;
  user_id: number;
  Nombre: string;
  created_at: string | null;
  updated_at: string | null;
}

const baseUrl: string = 'http://192.168.10.14/ApiRestProjet/ApiRestSgi/public/api/';

const useCategorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch(baseUrl + 'Categoria', {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setCategorias(data);
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategorias();
  }, []);

  return { categorias, loading, error };
};

export default useCategorias;
