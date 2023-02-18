import React from 'react';
import {Loader, LoaderSize} from '../Loader/Loader'
import classNames from 'classnames';
import './Button.css'

// import '../../styles/Roboto/Roboto-Bold.woff2'

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
