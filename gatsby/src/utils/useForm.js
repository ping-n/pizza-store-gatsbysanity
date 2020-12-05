import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValue] = useState(defaults);

  function updateValue(e) {
    // check if its a number and convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(value);
    }
    setValue({
      // Copy the existing values into it
      ...values,
      // Update teh new value that changed
      [e.target.name]: value,
    });
  }

  return { values, updateValue };
}
