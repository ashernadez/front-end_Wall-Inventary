import React, { useState } from 'react' 
import ProductoScreen from './producto';
 
const ProductoViewModel = () => { 
    const [values, setValues] = useState({ 
        name: '', 
        description: '', 
        price: '', 
        stock: '', 
    }); 
 
    const onChange = (property: string, value: any) => { 
        setValues({ ...values, [property]: value }); 
    } 
 
    const producto = () => { 
        console.log(JSON.stringify(values)); 
    } 
 
    return { 
        ...values, 
        onChange, 
        producto 
    } 
} 
 
export default ProductoViewModel; 