// Provide custom components for markdown elements
const components = {
  h1: (props) => (
    <h1 className="pb-8 text-2xl" style={{ color: 'tomato' }} {...props} />
  ),
  h2: (props) => (
    <h2
      className="pt-6 pb-4 text-xl"
      style={{ color: 'papayawhip' }}
      {...props}
    />
  ),
  p: (props) => <p className="text-lg leading-relaxed text-white" {...props} />,
  code: (props) => (
    <code className="text-green-600 bg-black font-code" {...props} />
  ),
}

export default components
