import React, { memo } from 'react';
import useSortTableData from '../toolbox/useSortTableData'
import "../css/stylesList.css"
const List = ({ currentPosts }) => {
  const { items, requestSort, getClassNamesFor } = useSortTableData(currentPosts);
  return (
    <table className="table table-hover">
      <thead>
        <tr className="sortHover">
          <th scope="col" className={getClassNamesFor('Organizasyon_Id')} onClick={() => requestSort('Organizasyon_Id')}>Organizasyon Id</th>
          <th scope="col" className={getClassNamesFor('Organizasyon_Adı')} onClick={() => requestSort('Organizasyon_Adı')}>Organizasyon Adı</th>
          <th scope="col" className={getClassNamesFor('Marka_Adı')} onClick={() => requestSort('Marka_Adı')}>Marka Adı</th>
          <th scope="col" className={getClassNamesFor('Mobil')} onClick={() => requestSort('Mobil')}>Mobil</th>
          <th scope="col" className={getClassNamesFor('Genişbant')} onClick={() => requestSort('Genişbant')}>Genişbant</th>
          <th scope="col" className={getClassNamesFor('Sabit')} onClick={() => requestSort('Sabit')}>Sabit</th>
          <th scope="col" className={getClassNamesFor('Ovit')} onClick={() => requestSort('Ovit')}>Ovit</th>
        </tr>
      </thead>
      <tbody>
        {items.map((operation) => {
             return <tr  key={operation.Organizasyon_Id} >
              <th scope="row">{operation.Organizasyon_Id}</th>
              <td>{operation.Organizasyon_Adı}</td>
              <td>{operation.Marka_Adı}</td>
              <td>{operation.Mobil}</td>
              <td>{operation.Genişbant}</td>
              <td>{operation.Sabit}</td>
              <td>{operation.Ovit}</td>
            </tr>})}
      </tbody>
    </table>
  );
};

export default memo(List);