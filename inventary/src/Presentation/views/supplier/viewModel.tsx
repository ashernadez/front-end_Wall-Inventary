import React, { useState } from 'react' 
 
const SupplierViewModel = () => { 
    const [values, setValues] = useState({ 
        name: '', 
        direccion: '', 
        correo: '', 
        telefono: '', 
    }); 
 
    const onChange = (property: string, value: any) => { 
        setValues({ ...values, [property]: value }); 
    } 
 
    const register = () => { 
        console.log(JSON.stringify(values)); 
    } 
 
    return { 
        ...values, 
        onChange, 
        register 
    } 
} 
 
export default SupplierViewModel; 