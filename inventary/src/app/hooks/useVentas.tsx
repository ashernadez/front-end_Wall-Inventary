import { useState, useEffect } from 'react';

interface Venta {
  id: number;
  user_id: number;
  v_venta: string;
  f_venta: string;
  producto_id: number;
  c_compra: number;
  created_at: string | null;
  updated_at: string | null;
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
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setVentas(data);
      } catch (err: any) { // Aquí especificamos que 'err' es de tipo 'any'
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
