

const ErrorMessage = ({items}) => {
  return (
    <div>
      {
        items.length === 0? 'Im still hungry' : ''
      }
    </div>
  )
}

export default ErrorMessage