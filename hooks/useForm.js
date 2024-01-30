import React, { useReducer } from 'react'

const setValueChange = (state,action) => {
    switch(action.type) {
        case "CHANGE_INPUT" :{
            return{
                ...state,
                inputs:{
                    ...state.inputs,
                    [action.inputName] : action.inputValue
                }
            }
        }
    }
}

export const useForm = (initInputs) => {
  const [formSatet, dispath] = useReducer(setValueChange, {
    inputs: initInputs,
  });

  const onValueChange = (value, inputName) => {
    dispath({
      type: "CHANGE_INPUT",
      inputValue: value,
      inputName,
    });
  };
  return [formSatet, onValueChange];
};
