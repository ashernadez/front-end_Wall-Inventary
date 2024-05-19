import React, { useState } from 'react' 
 
const CategoriaViewModel = () => { 
    const [values, setValues] = useState({ 
        N_Categoria: '',  
    }); 
 
    const onChange = (property: string, value: any) => { 
        setValues({ ...values, [property]: value }); 
    } 
 
    const Categoria = () => { 
        console.log(JSON.stringify(values)); 
    } 
 
    return { 
        ...values, 
        onChange, 
       Categoria
    } 
} 
 
export default CategoriaViewModel; 
