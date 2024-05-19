import React, { useState } from 'react';

const CompraViewModel = () => {
    const [values, setValues] = useState({
        cantidad: '',
        Valor: '',
        Fecha: '', 
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    };

    const Compra = () => {
        console.log(JSON.stringify(values));
        // Aquí puedes agregar la lógica para manejar el registro de la compra, 
        // por ejemplo, enviar los datos a una API
    };

    return {
        ...values,
        onChange,
        Compra
    };
};

export default CompraViewModel;
