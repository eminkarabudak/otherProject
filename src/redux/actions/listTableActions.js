import * as actionTypes from './actionTypes'
export const listTableActions = () => async dispatch =>{
  let columns = await  [
      {
        Header: 'Organizasyon Id',
        accessor: 'Organizasyon_Id',

      }, {
        Header: 'Organizasyon Adı',
        accessor: 'Organizasyon_Adı',

      }, {
        Header: 'Marka Adı',
        accessor: 'Marka_Adı',

      }, {
        Header: 'Mobil',
        accessor: 'Mobil',

      }, {
        Header: 'Genişbant',
        accessor: 'Genişbant',

      }, {
        Header: 'Sabit',
        accessor: 'Sabit',

      },
      {
        Header: 'Ovit',
        accessor: 'Ovit',
      }]
  return dispatch({ type: actionTypes.GET_LIST_TABLE_DATA, payload: columns })
}
