import React from 'react';
import './checkBox.css'

export type CheckBoxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>,
    'onChange'> & {
  /** Вызывается при клике на чекбокс */
  onChange: (value: boolean) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = (props) => {
    console.log(props)
    return (
        <input
            {...props}

            className="checkbox"
            type="checkbox"
            checked={props.checked}
            // checked={props.checked ? true : false}
            onChange={(e) => props.onChange(!props.checked)}
        />
    )
};
