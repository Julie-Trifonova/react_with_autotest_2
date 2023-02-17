import React from 'react';
import {Loader} from '../Loader/Loader';
import './WithLoader.module.css'

export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
}>;

export const WithLoader: React.FC<WithLoaderProps> =
    ({
       loading,
       children
     }) => {
      if (loading) {
        return <>
          <Loader/>
          <>{children}</>
        </>
      } else {
        return <>{children}</>
      }
    }
