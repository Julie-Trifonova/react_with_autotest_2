import React from 'react';
import s from './Card.module.css'

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
      <div className={s.container} onClick={props.onClick}>
        <img
            className={s.image}
            src={props.image}/>
        <div className={s.content}>
          <h3>{props.title}</h3>
          <div className={s.text}>{props.subtitle}</div>
          <div className={s.text}>{props.content}</div>
        </div>

      </div>
  )
};
