import { useState, useEffect } from 'react';

interface Venta {
  id: string;
  v_venta: number;
  f_venta: string;
  producto_id: string;
  c_compra: number;
}

const baseUrl: string = 'http://192.168.10.14/ApiRestProjet/ApiRestSgi/public/api/';

const useVentas = () => {
  const [ventas, setVentas] = useState<Venta[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const response = await fetch(baseUrl + 'Ventas', {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error('Error al cargar las ventas');
        }
        const data = await response.json();
        setVentas(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVentas();
  }, []);

  return { ventas, loading, error };
};

export default useVentas;
