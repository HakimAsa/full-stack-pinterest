import { useSearchParams } from 'react-router'
import Gallery from '../../components/gallery/gallery'

import './search.css'

const Search = () => {
  const [searchParams] = useSearchParams()

  const searchItem = searchParams.get('searchItem')
  const boardId = searchParams.get('boardId')
  return (
    <Gallery
      searchItem={searchItem}
      boardId={boardId}
    />
  )
}

export default Search
