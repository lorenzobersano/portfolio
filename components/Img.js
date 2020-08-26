function Img(props) {
  if (!props.caption) return <img className="rounded-lg" {...props} />

  return (
    <div className="flex flex-col">
      <img className="rounded-lg" {...props} />
      <label className="text-blue-100 font-mono mt-1" htmlFor={props.id}>
        {props.caption}
      </label>
    </div>
  )
}

export default Img
