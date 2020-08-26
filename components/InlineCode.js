function InlineCode({ children }) {
  return (
    <code className="p-1 text-green-400 bg-black rounded-lg font-code">
      {children}
    </code>
  )
}

export default InlineCode
