import { IKImage } from 'imagekitio-react'

const urlEndpoint = import.meta.env.VITE_URL_IK_ENDPOINT

const Image = ({ alt, className, height, path, src, width }) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      src={src}
      transformation={[
        {
          width,
          height,
        },
      ]}
      alt={alt}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
    />
  )
}

export default Image
