import InfinitScroll from 'react-infinite-scroll-component'

import GalleryItem from '../galleryItem/galleryItem'
import pinApi from '../../api/pins'
import './gallery.css'
import useInfiniteQueryHandler from '../../hooks/useInfiniteQueryHandler'

//TEMP ITEM ARRAY

const items = [
  {
    id: 1,
    media: '/pins/pin1.jpeg',
    width: 1260,
    height: 1000,
  },
  {
    id: 2,
    media: '/pins/pin2.jpeg',
    width: 1260,
    height: 1400,
  },
  {
    id: 3,
    media: '/pins/pin3.jpeg',
    width: 1260,
    height: 1400,
  },
  {
    id: 4,
    media: '/pins/pin4.jpeg',
    width: 1260,
    height: 1000,
  },
  {
    id: 5,
    media: '/pins/pin5.jpeg',
    width: 1260,
    height: 1000,
  },
  {
    id: 6,
    media: '/pins/pin6.jpeg',
    width: 1260,
    height: 1400,
  },
  {
    id: 7,
    media: '/pins/pin7.jpeg',
    width: 1260,
    height: 500,
  },
  {
    id: 8,
    media: '/pins/pin8.jpeg',
    width: 1260,
    height: 1400,
  },
]

const Gallery = ({ searchItem }) => {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQueryHandler({
    key: 'pins',
    params: { searchItem },
    apiFunc: ({ pageParam }) =>
      pinApi.getPins({ cursor: pageParam, searchItem: searchItem ?? '' }),
    initialPageParam: 0,
    getNextPageParam: function (lastPage, pages) {
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
        {allPins?.map((item) => (
          <GalleryItem
            key={item?._id.toString()}
            item={item}
          />
        ))}
      </div>
    </InfinitScroll>
  )
}

export default Gallery
