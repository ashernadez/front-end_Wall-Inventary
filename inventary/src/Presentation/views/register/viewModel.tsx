import React, { useState } from 'react' 
 
const RegisterViewModel = () => { 
    const [values, setValues] = useState({ 
        name: '', 
        description: '', 
        price: '', 
        stock: '', 
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
 
export default RegisterViewModel; 