import React from 'react';
import './Loader.css'

export enum LoaderSize {
  s = 's',
  m = 'm',
  l = 'l'
}

export type LoaderProps = {
  loading?: boolean;
  size?: LoaderSize;
  className?: string;
};

export const Loader: React.FC<LoaderProps> = (props) => {

  const loaderSizeNames = () => {
    let nameSize = '';

    switch(props.size) {
      case 'm' || undefined:
        nameSize = 'loader_size-m';
        break;
      case 'l':
        nameSize = 'loader_size-l';
        break;
      case 's':
        nameSize = 'loader_size-s';
        break;

      default:
        nameSize = 'loader_size-m';
    }
    return nameSize;
  }

  if (props.loading === false) {
    return <></>
  }

  return <div className={`${'loader' + ' ' + props.className + ' ' + loaderSizeNames()}`}></div>
};
