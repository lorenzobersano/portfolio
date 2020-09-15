function Quote(props) {
  return (
    <div className="relative border-t-4 p-4 border-purple-400 rounded-r-sm">
      <span className="font-serif absolute -ml-8 -mt-5 top-0 left-0 text-6xl text-purple-200 leading-none">
        &ldquo;
      </span>
      <p className="text-purple-100">{props.children}</p>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-purple-400 opacity-25 rounded-br-sm"></div>
    </div>
  )
}

export default Quote
