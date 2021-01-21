import { useEffect, useState } from 'react'

const useScroll = (items) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
      setPosts(items);
  }, [items]);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = posts.length

  const handlePaginate = pageNumber => setCurrentPage(pageNumber)
  const Paginate = pageNumber => setCurrentPage(pageNumber)
  return { items: handlePaginate, currentPosts, postsPerPage, totalPosts, Paginate };
}

export default useScroll
