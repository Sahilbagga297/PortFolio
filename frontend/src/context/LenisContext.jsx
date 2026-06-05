import { createContext, useContext } from 'react';

const LenisContext = createContext(null);

export const LenisProvider = LenisContext.Provider;

export const useLenisContext = () => {
  const lenis = useContext(LenisContext);
  return lenis;
};

export default LenisContext;
