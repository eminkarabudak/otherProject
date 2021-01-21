import React from 'react'
const ListPagination = ({ postsPerPage, totalPosts, Paginate  }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>   
      <nav >
        <ul className='pagination justify-content-end'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <p onClick={() => Paginate(number)} href='/#' className='page-link'>
                {number}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default ListPagination;