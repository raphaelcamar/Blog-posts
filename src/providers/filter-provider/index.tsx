import { createContext, useContext } from 'react';

type FilterContextProps = {
  filter: any;
};

export const FilterContext = createContext<FilterContextProps>({} as FilterContextProps);

export const useFilterContext = (): FilterContextProps => useContext(FilterContext);

export const ProfileProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const filter = '';

  return <FilterContext.Provider value={{ filter }}>{children}</FilterContext.Provider>;
};
