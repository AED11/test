const Card = (props) => {
  console.log(props)
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Card