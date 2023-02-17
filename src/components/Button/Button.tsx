import React from 'react';
import {Loader, LoaderSize} from '../Loader/Loader'
import classNames from 'classnames';
import './Button.css'

export type ButtonProps = React.PropsWithChildren<{
  /**
   * Если true, то внутри кнопки вместе с children отображается компонент Loader
   * Также кнопка должна переходить в состояние disabled
   */
  loading?: boolean;
}> & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = (props) => {

  const buttonClass = classNames({
    button: true,
    button_disabled: props.loading && (props.disabled || props.disabled === false || typeof props.disabled === 'undefined') ? true : false || props.disabled ? true : false,

    button_loading_true_disabled_true: props.loading && props.disabled ? true : false,
    button_loading_true_disabled_false: props.loading && props.disabled === false ? true : false,
    button_loading_true_disabled_undefined: props.loading && typeof props.disabled === 'undefined' ? true : false,

    button_loading_false_disabled_true: props.loading === false && props.disabled ? true : false,
    button_loading_false_disabled_false: props.loading === false && props.disabled === false ? true : false,
    button_loading_false_disabled_undefined: props.loading === false && typeof props.disabled === 'undefined' ? true : false,

    button_loading_undefined_disabled_true: typeof props.loading === 'undefined' && props.disabled ? true : false,
    button_loading_undefined_disabled_false: typeof props.loading === 'undefined' && props.disabled === false ? true : false,
    button_loading_undefined_disabled_undefined: typeof props.loading === 'undefined' && typeof props.disabled === 'undefined' ? true : false,

  })

  if (props.loading) {
    return (
        <>
          <button {...props} className={buttonClass} onClick={props.onClick} disabled>
            <Loader className='loader-button' size={LoaderSize.s}/>{props.children}click
          </button>
        </>
    )

  }
  return (
      <button {...props} onClick={props.onClick}
              className={buttonClass + `${props.className ? ' ' + props.className : ''}`}>
        <div className='children'>{props.children}</div>
      </button>
  )

};
