import React, { useState } from 'react';

const productoViewModel = () => {
    const [values, setValues] = useState({
        NombreP: '',
        Descrpcion: '',
        Descripcion: "",
        stock:"",
       precio:"",
      Categoria:"", 
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    };

    const producto = () => {
        console.log(JSON.stringify(values));
        // Aquí puedes agregar la lógica para manejar el registro de la compra, 
        // por ejemplo, enviar los datos a una API
    };

    return {
        ...values,
        onChange,
       producto
    };
};

export default productoViewModel;
