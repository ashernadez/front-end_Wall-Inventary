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
 
    const supplier = () => { 
        console.log(JSON.stringify(values)); 
    } 
 
    return { 
        ...values, 
        onChange, 
        supplier
    } 
} 
 
export default SupplierViewModel; 