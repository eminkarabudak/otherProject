import { useState, useMemo, useCallback } from 'react'

const useFilterSearchOperation = (items) => {
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  const [searchOption, setSearchOption] = useState("Organizasyon_Adı")
  
  const filteredOperation = useMemo(() => {
    let filterItems = [...items]
    return (
    filterItems.filter(operation => {
      return operation[searchOption].toString().toLowerCase().includes(search.toLowerCase())
    }))
  }, [search, items, searchOption])

  const handleText = e => {
    setText(e.target.value)
  }

  const handleSearch = () => {
    setSearch(text)
  }

  const selectSearch = e => { 
    setSearchOption(e.target.value) 
  }

  const clearSearch = useCallback(() => {
    setSearch('');
    setText('');
  }, [setSearch, setText])
  
  return { items: setSearchOption, text, handleText, handleSearch, clearSearch, filteredOperation, selectSearch };

};

export default useFilterSearchOperation
