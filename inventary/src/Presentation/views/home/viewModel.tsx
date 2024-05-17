import React, {useState} from 'react' 
const InicioViewModel = () => { 
const [values, setValues] = useState({ 
email:'', 
password:'', 
    }); 
     
    const onChange = (property: string, value: any) => { 
        setValues({...values, [property]: value}); 
    } 
 
  return { 
      ...values, 
      onChange 
  } 
} 
 
export default InicioViewModel; 
 
