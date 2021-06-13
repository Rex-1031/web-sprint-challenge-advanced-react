// write your custom hook here to control your checkout form
import { useState} from 'react';


export  const useForm = intialValues => {
  const [values, setValues] = useState(intialValues);

  const handleChanges = e =>{
      setValues({
          ...values,
          [e.target.name]: e.target.value
      });
  }

 

  return [values, handleChanges];
}


