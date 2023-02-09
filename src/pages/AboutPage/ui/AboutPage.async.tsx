import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => { 
  //@ts-ignore
  setTimeout(() => resolve(import('./AboutPage')), 1000)
}));

// Не для дефолтного импорта
// const AboutPageLazy = lazy(() => import('./about-page').then(module=>({default:module.AboutPage})));