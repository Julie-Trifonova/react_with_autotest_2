import React, {useState} from 'react';
import s from './input.module.css'

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value'> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = (props) => {

  const [value, setValue] = useState('');

  // const classNamesInput = () => {
  //   if (props.className) {
  //     if (props.disabled) {
  //       return `${props.className} input_disabled`
  //     } else if (!props.disabled) {
  //       return `${props.className} `
  //     }
  //   } else if (!props.className) {
  //     if (props.disabled) {
  //       return `input input_disabled`
  //     } else if (!props.disabled) {
  //       return `input`
  //     }
  //   }
  // }

  const onInputChange = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
  }


  return (
      <input {...props}
             className={`${props.className ? props.className : 'input'}` + `${props.disabled === true ? ' input_disabled' : ''}` + ` ${s.inputElement}`}
             type='text'
             value={props.value}
             // value={value}
             onChange={(e) => props.onChange(e.target.value)}
             // onChange={(e) => onInputChange(e)}
             placeholder={props.placeholder}
             disabled={props.disabled ? true : false}>
      </input>
  )
};
