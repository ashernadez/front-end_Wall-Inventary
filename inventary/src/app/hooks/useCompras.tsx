import { useState, useEffect } from 'react';

interface Compra {
  id: string;
  proveedor_id: string;
  producto_id: string;
  v_compra: number;
  f_compra: string;
}

const baseUrl: string = 'http://192.168.10.14/ApiRestProjet/ApiRestSgi/public/api/Compras';

const useCompras = () => {
  const [compras, setCompras] = useState<Compra[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const response = await fetch(baseUrl, {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error('Error al cargar las compras');
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
