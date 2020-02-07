function H1(props) {
  return (
    <h1>
      <span style={{'font-size':'0.9em'}}>
        {props.first}
      </span>
      <br />
      <span style={{'font-size':'0.7em'}}>
        {props.second}
      </span>
    </h1>
  )
}
export default H1
