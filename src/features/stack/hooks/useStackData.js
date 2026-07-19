import useStackStore from '../store/useStackStore';

export const useStackData = () => {
  const categories = useStackStore((state) => state.categories);

  return { categories };
};