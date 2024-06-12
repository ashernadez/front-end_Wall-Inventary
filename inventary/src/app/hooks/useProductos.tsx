import { useState, useEffect } from 'react';

interface Producto {
  id: string;
  NombreP: string;
  Descripcion: string;
  Precio: number;
  stock: number;
  categoria_id: number;
  proveedor_id: number;
}

const baseUrl: string = 'http://192.168.10.14/ApiRestProjet/ApiRestSgi/public/api/';

const useProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(baseUrl + 'Productos', {
          method: 'GET',
        });
        const data = await response.json();
        setProductos(data);
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  return { productos, loading, error };
};

export default useProductos;