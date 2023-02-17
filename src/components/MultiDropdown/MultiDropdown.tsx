import React, {useState} from 'react';
import './multiDropDown.css'

export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
  pluralizeOptions: (value: Option[]) => string;
};

export const MultiDropdown: React.FC<MultiDropdownProps> = (props) => {
  const [visible, setVisible] = useState(false);

  const handleOnInputChange = (object: Option, e: any) => {
    props.value.includes(object)
        ? props.onChange(props.value.filter((value) => value.key !== object.key))
        : props.onChange([...props.value, object]);
  }

  const handleChangeVisibility = () => {
    setVisible(!visible);
  }
  return (
      <div className='multi-dropdown'>
        <div onClick={handleChangeVisibility}>
          {props.pluralizeOptions(props.value)}
        </div>
        {!props.disabled && visible ? (
            <div className='list'>
              {props.options.map((option) => (
                  <div key={option.key} className='drop-element'>
                    <label>
                      <input
                          className='input'
                          name={option.value}
                          type='checkbox'
                          onChange={(e) => handleOnInputChange(option, e)}
                      />
                      {option.value}
                    </label>
                  </div>
              ))}
            </div>
        ) : <></>}
      </div>
  )
};
