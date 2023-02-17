import React from 'react';
import s from './input.module.css'

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value'> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = (props) => {

  const classNamesInput = () => {
    if (props.className) {
      if (props.disabled) {
        return `${props.className} input_disabled`
      } else if (!props.disabled) {
        return `${props.className} `
      }
    } else if (!props.className) {
      if (props.disabled) {
        return `input input_disabled`
      } else if (!props.disabled) {
        return `input`
      }
    }
  }
  return (
      <input {...props}
             className={`${props.className ? props.className : 'input'}` + `${props.disabled === true ? ' input_disabled' : ''}` + ` ${s.inputElement}`}
             type='text'
             value={props.value}
             onChange={(e) => props.onChange(e.target.value)}
             placeholder={props.placeholder}
             disabled={props.disabled ? true : false}>
      </input>
  )
};
