import  { useState, useMemo} from 'react'

const useSortTableData = (items) => {
  const [sortConfig, setSortConfig] = useState(null);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items]; 
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key].toString().toLowerCase() < b[sortConfig.key].toString().toLowerCase()) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key].toString().toLowerCase() > b[sortConfig.key].toString().toLowerCase()) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {

    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
      ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return { items: sortedItems, requestSort, sortConfig, getClassNamesFor }
 
};

export default useSortTableData
