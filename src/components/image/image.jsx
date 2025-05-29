import { IKImage } from 'imagekitio-react'

const urlEndpoint = import.meta.env.VITE_URL_IK_ENDPOINT

const Image = ({ alt, className, path, width, height, src }) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      src={src}
      alt={alt}
      transformation={[
        {
          width,
          height,
        },
      ]}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
    />
  )
}

export default Image
