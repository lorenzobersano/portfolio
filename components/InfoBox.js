function InfoBox(props) {
  return (
    <div className="bg-purple-200 flex flex-col rounded-lg p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className=" h-6 w-6"
      >
        <path
          className="fill-current text-purple-300"
          d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"
        />
        <path
          className="fill-current text-purple-800"
          d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        />
      </svg>
      <div className="text-purple-900 mt-4">{props.children}</div>
    </div>
  )
}

export default InfoBox
