const ActivitityIndicator = ({ error, isLoading }) => {
  if (error)
    return (
      <p style={{ color: 'red' }}>An error has occured: {error?.message}</p>
    )
  if (isLoading) return <p>Loading...</p>

  return null // Always return something
}

export default ActivitityIndicator
