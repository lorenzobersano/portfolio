import { useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { motion, AnimatePresence } from 'framer-motion'
import reactElementToJSXString from 'react-element-to-jsx-string'

export default function CodeWithSource(props) {
  const [showCode, setShowCode] = useState(false)

  const variants = {
    hidden: { height: 0, opacity: 0 },
    visible: { opacity: 1, height: '100%' },
    exit: { height: 0, opacity: 0, padding: 0 },
  }

  return (
    <div className="flex flex-col w-full">
      <div
        className={`bg-gray-800 h-auto p-8 ${
          showCode ? 'rounded-t-lg' : 'rounded-lg'
        }`}
      >
        {props.children}
      </div>
      <div>
        <div
          className={`${
            showCode ? 'top-0 rounded-t-lg' : 'bottom-0 rounded-b-lg'
          } left-0 right-0`}
        >
          <div>
            <Highlight
              {...defaultProps}
              code={reactElementToJSXString(props.children)}
              language="jsx"
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <AnimatePresence>
                  {showCode && (
                    <motion.pre
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={variants}
                      className={`${className} rounded-b-lg overflow-x-scroll p-8`}
                      style={style}
                    >
                      {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                          ))}
                        </div>
                      ))}
                    </motion.pre>
                  )}
                </AnimatePresence>
              )}
            </Highlight>
            <div className="flex justify-center">
              <button
                type="button"
                className="px-6 py-1 text-white bg-gray-700 rounded-b-lg"
                onClick={() => setShowCode(!showCode)}
              >
                {showCode ? (
                  <>
                    <svg
                      className="inline w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-current text-gray-600"
                      />
                      <path
                        className="fill-current text-white"
                        d="M13 9.41V17a1 1 0 0 1-2 0V9.41l-2.3 2.3a1 1 0 1 1-1.4-1.42l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.42L13 9.4z"
                      />
                    </svg>
                    <span className="ml-2">Hide code</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="inline w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-current text-gray-600"
                      />
                      <path
                        className="fill-current text-white"
                        d="M11 14.59V7a1 1 0 0 1 2 0v7.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                      />
                    </svg>
                    <span className="ml-2">Show code</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
