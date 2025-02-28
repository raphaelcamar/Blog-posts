import React from 'react';

const ArrowDownIcon = React.lazy(async () => import(/* webpackChunkName: "ArrowDown" */ './arrow-down-icon'));
const CloseIcon = React.lazy(async () => import(/* webpackChunkName: "Close" */ './close-icon'));
const SearchIcon = React.lazy(async () => import(/* webpackChunkName: "Search" */ './search-icon'));
const SortIcon = React.lazy(async () => import(/* webpackChunkName: "Sort" */ './sort-icon'));

export const Icons = {
  arrowDown: ArrowDownIcon,
  close: CloseIcon,
  search: SearchIcon,
  sort: SortIcon,
};
