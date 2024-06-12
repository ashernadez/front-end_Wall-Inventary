import { useState, useEffect } from 'react';

interface Informe {
  id: string;
  tipo: string;
  fecha_i: string;
}

const baseUrlInformes: string = 'http://192.168.10.14/ApiRestProjet/ApiRestSgi/public/api/informes'; 

const useInformes = () => {
  const [informes, setInformes] = useState<Informe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInformes = async () => {
      try {
        const response = await fetch(baseUrlInformes, {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error('Error al cargar los informes');
        }
        const data = await response.json();
        setInformes(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInformes();
  }, []);

  return { informes, loading, error };
};

export default useInformes;
