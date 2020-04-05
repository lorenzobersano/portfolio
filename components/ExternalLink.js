const ExternalLink = ({ href, children }) => (
  <a target="_blank" className="hover:underline focus:underline" href={href}>
    {children}
  </a>
)

export default ExternalLink
