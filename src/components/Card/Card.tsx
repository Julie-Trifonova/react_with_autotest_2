import React from 'react';
import './Card.css'

export type CardProps = {
  /** URL изображения */
  image: string;
  /** Заголовок карточки */
  title: React.ReactNode;
  /** Подзаголовок карточки */
  subtitle: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  content?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
};

export const Card: React.FC<CardProps> = (props) => {
  return (
      <div className={'card'} onClick={props.onClick}>
        <img
            className={'image'}
            src={props.image}/>
        <div className={'content'}>
          <h3>{props.title}</h3>
          <div className={'text'}>{props.subtitle}</div>
          <div className={'text'}>{props.content}</div>
        </div>

      </div>
  )
};
