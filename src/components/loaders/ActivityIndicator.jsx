const ActivityIndicator = ({ error, isLoading }) => {
  if (error)
    return (
      <p style={{ color: 'red' }}>An error has occured: {error?.message}</p>
    )
  if (isLoading) return <p>Loading...</p>

  return null // Always return something
}

export const Loader = ({ loading }) => {
  if (!loading) return null

  return <p>Loading...</p>
}

export const ErrorMessage = ({ visible, error }) => {
  if (!visible) return null

  return <p style={{ color: 'red' }}>An error has occured: {error}</p>
}

export default ActivityIndicator
