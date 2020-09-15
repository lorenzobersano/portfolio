function Img(props) {
  if (!props.caption)
    return (
      <div className="flex justify-center">
        <img className="rounded-lg" {...props} />
      </div>
    )

  return (
    <div className="flex flex-col">
      <img className="rounded-lg" {...props} />
      <label
        className="text-blue-100 font-mono text-base mt-1"
        htmlFor={props.id}
      >
        {props.caption}
      </label>
    </div>
  )
}

export default Img
