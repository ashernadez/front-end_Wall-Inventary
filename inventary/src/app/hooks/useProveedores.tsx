import { useState, useEffect } from 'react';

interface Proveedor {
  id: number;
  user_id: number;
  nombre: string;
  telefono: string;
  direccion: string;
  correo: string;
}

const baseUrl: string = 'https://wallinventary.azurewebsites.net/api/';

const useProveedores = () => {
  const [proveedores, setProveedores] = useState<Proveedor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProveedores = async () => {
      try {
        const response = await fetch(baseUrl + 'Proveedors', {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setProveedores(data);
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProveedores();
  }, []);

  return { proveedores, loading, error };
};

export default useProveedores;
