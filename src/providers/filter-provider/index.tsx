import React, { createContext, useContext, useMemo, useState } from 'react';

type FilterContextProps = {
  authorFilters: string[];
  setAuthors: React.Dispatch<React.SetStateAction<string[]>>;
  // categories: string[];
  // sort: 'oldest' | 'newest';
  // text: string;
};

export const FilterContext = createContext<FilterContextProps>({} as FilterContextProps);

export const useFilterContext = (): FilterContextProps => useContext(FilterContext);

export const ProfileProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [authorFilters, setAuthorsFilters] = useState();

  const memoizedFilter = useMemo(() => authorFilters, []);

  return (
    <FilterContext.Provider value={{ authorFilters: memoizedFilter, setAuthors: setAuthorsFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
