import InfinitScroll from 'react-infinite-scroll-component'

import GalleryItem from '../galleryItem/galleryItem'
import pinApi from '../../api/pins'
import './gallery.css'
import useInfiniteQueryHandler from '../../hooks/useInfiniteQueryHandler'

const Gallery = ({ searchItem, userId, boardId }) => {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQueryHandler({
    key: 'pins',
    params: { searchItem, userId, boardId },
    apiFunc: ({ pageParam }) =>
      pinApi.getPins({
        cursor: pageParam,
        searchItem: searchItem ?? '',
        userId: userId ?? '',
        boardId: boardId ?? '',
      }),
    initialPageParam: null,
    getNextPageParam: function (lastPage) {
      return lastPage.nextCursor
    },
  })

  if (status === 'error')
    return (
      <p style={{ color: 'red' }}>
        An error has occured: {data?.originalError?.message}
      </p>
    )
  if (status === 'pending') return <p>loading...</p>

  const allPins = data?.pages.flatMap((page) => page.data) || []
  return (
    <InfinitScroll
      dataLength={allPins.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>loading more pins...</h4>}
      endMessage={<h3>All Pins loaded!</h3>}
    >
      <div className="gallery">
        {allPins?.length > 0 &&
          allPins.map((item) => (
            <GalleryItem
              key={item._id.toString()}
              item={item}
            />
          ))}
      </div>
    </InfinitScroll>
  )
}

export default Gallery
