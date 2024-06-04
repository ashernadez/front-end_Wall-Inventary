import { useState, useEffect } from 'react';

interface Proveedor {
  id: string;
  nombre: string;
  telefono: string;
  direccion: string;
  correo: string;
}

const baseUrl: string = 'http://192.168.10.14/ApiRestProjet/ApiRestSgi/public/api/';

const useProveedores = () => {
  const [proveedores, setProveedores] = useState<Proveedor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProveedores = async () => {
      try {
        const response = await fetch(baseUrl + 'Proveedores', {
          method: 'GET',
        });
        const data = await response.json();
        setProveedores(data);
      } catch (err: any) {
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
