import React, { useState } from 'react';

const VentaViewModel = () => {
    const [values, setValues] = useState({
        C_Venta: '',
        V_Venta: '',
        F_Venta: '', 
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    };

    const Venta = () => {
        console.log(JSON.stringify(values));
        
    };

    return {
        ...values,
        onChange,
        Venta
    };
};

export default VentaViewModel;
