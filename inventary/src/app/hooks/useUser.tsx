import { useState, useEffect } from 'react';

interface User {
    id: number,
    email: string,
    password: string  
}

const baseUrl: string = 'http://192.168.20.174/ApiRestProjet/ApiRestSgi/public/api/';

const useUser = (data: User) => {
  const [user, setUser] = useState<User>(data);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /*useEffect(() => {
    const fetchLogin = async () => {
      try {
        const response = await fetch(baseUrl + 'User/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        });      

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setUser(data["user"]);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLogin();
  }, []);*/

  return { user, loading, error };
};

export default useUser;
