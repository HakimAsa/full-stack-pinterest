import { useInfiniteQuery } from '@tanstack/react-query'

import GalleryItem from '../galleryItem/galleryItem'
import pinApi from '../../api/pins'
import './gallery.css'

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

const Gallery = () => {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ['pins'],
    queryFn: pinApi.getPins,
    initialPageParam: 0,
    getNextPageParam: function (lastPage, pages) {
      return lastPage.nextCursor
    },
  })

  if (!data?.ok || status === 'error')
    return (
      <p style={{ color: 'red' }}>
        An error has occured: {data?.originalError?.message}
      </p>
    )
  if (status === 'pending') return <p>loading...</p>

  return (
    <div className="gallery">
      {/* {data?.data?.data?.map((item) => (
        <GalleryItem
          key={item._id.toString()}
          item={item}
        />
      ))} */}
    </div>
  )
}

export default Gallery
