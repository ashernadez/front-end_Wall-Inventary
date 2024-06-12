import React, {useState} from 'react' 
const ViewModel = () => { 
const [values, setValues] = useState({ 
documento:'', 
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
 
export default ViewModel; 
 
