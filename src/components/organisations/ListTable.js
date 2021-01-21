import React, { useEffect, memo } from 'react';
import List from './List'
import ListPagination from '../organisations/ListPagination'
import useFilterSearchOperation from '../toolbox/useFilterSearchOperation'
import useScroll from '../toolbox/useScroll'
import { useDispatch, useSelector } from 'react-redux'
import { getOperations, getOperationsName } from '../../redux/actions/operationActions';
import { FaSearch, FaBackspace } from "react-icons/fa";
const ListTable = () => {
  const { operationName, organisationsName } = useSelector(state =>({ 
    operationName: state.operationListReducer, 
    organisationsName: state.organisationNameListReducer
   }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOperations())
    dispatch(getOperationsName());
    
  }, [dispatch]);
  const { text, handleText, handleSearch, clearSearch, filteredOperation, selectSearch } = useFilterSearchOperation(operationName)
  const { currentPosts, postsPerPage, totalPosts, Paginate } = useScroll(filteredOperation);
  return (
    <div>
      <div className="row  col-md-12">
        <div className="input-group mb-3 col-md-4">
          <select defaultValue={"Organizasyon Adı"} className="custom-select" id={"mySelect"} onChange={e => selectSearch(e)}>
            {organisationsName.map(organisation => {
              return <option key={organisation.value} value={organisation.value}>
                {organisation.name}</option>
            })}
          </select>
        </div>

        <div className="input-group mb-3 col-md-4">
          <input className="form-control mr-sm-2"
            type="search" placeholder="Anahtar Sözcük" value={text} aria-label="Search" onChange={handleText} />
        </div>
        <div className="input-grup mb-3 col-md-2">
          <button className="btn btn-outline-success btn-block  my-2 my-sm-0" type="submit" onClick={handleSearch}><FaSearch/>&ensp;&ensp;Ara</button>
        </div>
        <div className=" mb-3 col-md-2 ">
          <button type="button" className="btn btn-primary btn-block" onClick={clearSearch}><FaBackspace/>&ensp;&ensp;Temizle</button>
        </div>
      </div>
      <List currentPosts={currentPosts}/>
      <ListPagination  postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        Paginate={Paginate}/>
    </div>
  )
};


export default memo(ListTable);