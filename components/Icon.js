const icons = {
  'back-arrow': (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
    >
      <path
        className="text-white fill-current"
        d="M9.41 11H17a1 1 0 0 1 0 2H9.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L9.4 11z"
      />
    </svg>
  ),
}

const Icon = ({ name }) => {
  return icons[name]
}

export { Icon }
