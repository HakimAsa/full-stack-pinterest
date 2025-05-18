import { useSearchParams } from 'react-router'
import Gallery from '../../components/gallery/gallery'

import './search.css'

const Search = () => {
  const [searchParams] = useSearchParams()

  const searchItem = searchParams.get('searchItem')
  return <Gallery searchItem={searchItem} />
}

export default Search
