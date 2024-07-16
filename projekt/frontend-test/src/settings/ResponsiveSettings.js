import { useMediaQuery } from 'react-responsive';

export const useBreakpoints = () => {
  const isLaptop = useMediaQuery({ query: '(min-width: 960px)' });
  return {
    isLaptop
  };
};