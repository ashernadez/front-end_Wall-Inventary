import { useState, useEffect } from 'react';

interface Compra {
  id: number;
  user_id: number;
  v_compra: string;
  f_compra: string;
  producto_id: number;
  c_compra: number;
}

const baseUrl: string = 'http://192.168.10.14/ApiRestProjet/ApiRestSgi/public/api/';

const useCompras = () => {
  const [compras, setCompras] = useState<Compra[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const response = await fetch(baseUrl + 'Compra', {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setCompras(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompras();
  }, []);

  return { compras, loading, error };
};

export default useCompras;
