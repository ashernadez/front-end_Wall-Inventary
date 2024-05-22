import { useState } from 'react';

const useViewModel = () => {
  const [NombreP, setNombreP] = useState('');
  const [Descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [Categoria, setCategoria] = useState('');
  const [created_at, setCreatedAt] = useState('');
  const [updated_at, setUpdatedAt] = useState('');

  const onChange = (property, value) => {
    switch (property) {
      case 'NombreP':
        setNombreP(value);
        break;
      case 'Descripcion':
        setDescripcion(value);
        break;
      case 'precio':
        setPrecio(value);
        break;
      case 'stock':
        setStock(value);
        break;
      case 'Categoria':
        setCategoria(value);
        break;
      case 'created_at':
        setCreatedAt(value);
        break;
      case 'updated_at':
        setUpdatedAt(value);
        break;
      default:
        break;
    }
  };

  const producto = async () => {
    try {
      // Realizar la solicitud HTTP para enviar los datos del formulario a la base de datos
      const response = await fetch('URL_de_tu_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          NombreP,
          Descripcion,
          precio: parseFloat(precio),
          stock: parseInt(stock),
          Categoria,
          created_at,
          updated_at,
        }),
      });

      // Manejar la respuesta
      if (response.ok) {
        // Mostrar mensaje de éxito
        alert('Producto registrado exitosamente');
      } else {
        // Mostrar mensaje de error
        alert('Error al registrar el producto');
      }
    } catch (error) {
      console.error('Error al enviar los datos del formulario:', error);
    }
  };

  return { NombreP, Descripcion, precio, stock, Categoria, created_at, updated_at, onChange, producto };
};

export default useViewModel;
