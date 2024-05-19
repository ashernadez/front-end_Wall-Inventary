import React, { useState } from 'react';

const InformeViewModel = () => {
    const [values, setValues] = useState({
        Tipo: '',
        Fecha_I: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    };

    const informe = () => {
        console.log(JSON.stringify(values));
        
    };

    return {
        ...values,
        onChange,
        informe
    };
};

export default InformeViewModel;
