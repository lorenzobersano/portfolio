import { useState, useMemo } from 'react'
import { motion, useAnimation } from 'framer-motion'

const SkillCard = ({ skill }) => {
  const animation = useAnimation()
  const [isHover, setIsHover] = useState(false)

  useMemo(() => {
    animation.stop()
    if (isHover) {
      animation.start({
        borderRadius: 8,
        flexGrow: 1,
        padding: '18px',
      })
    } else {
      animation.start({
        flexGrow: 0,
        borderRadius: 4,
        padding: '4px',
      })
    }
  }, [isHover, animation])

  function getSkillStyle(skill) {
    let skillBg = ''
    let skillText = 'hover:text-white'

    switch (skill) {
      case 'html':
        skillBg = 'bg-html-bg'
        skillText = 'hover:text-html-text'
        break
      case 'css':
        skillBg = 'bg-css-bg'
        skillText = 'hover:text-css-text'
        break
      case 'js':
        skillBg = 'bg-js-bg'
        skillText = 'hover:text-js-text'
        break
      case 'reactjs':
        skillBg = 'bg-reactjs-bg'
        skillText = 'hover:text-reactjs-text'
        break
      case 'nextjs':
        skillBg = 'bg-nextjs-bg'
        skillText = 'hover:text-nextjs-text'
        break
      case 'tailwindcss':
        skillBg = 'bg-gradient-r-tailwind-logo'
        break
      case 'redux':
        skillBg = 'bg-redux-bg'
        skillText = 'hover:text-redux-text'
        break
      case 'styledcomponents':
        skillBg = 'bg-gradient-r-styledcomponents'
        break
      case 'nodejs':
        skillBg = 'bg-nodejs-bg'
        skillText = 'hover:text-nodejs-text'
        break
      case 'netwebapi':
        skillBg = 'bg-gradient-r-netwebapi'
        break
      case 'express':
        skillBg = 'bg-express-bg'
        skillText = 'hover:text-express-text'
        break
      case 'solidity':
        skillBg = 'bg-gradient-r-solidity'
        break
      case 'uidesign':
        skillBg = 'bg-gradient-r-ui'
        break
      case 'uxdesign':
        skillBg = 'bg-gradient-r-ux'
        break
    }

    return { skillBg, skillText }
  }

  function renderSkill(skill, i) {
    let { skillBg, skillText } = getSkillStyle(
      skill.toLowerCase().replace(/ /g, '').replace('.', '')
    )

    return (
      <li className="relative flex items-center w-full py-4 -ml-4">
        <motion.div
          animate={animation}
          className={skillBg}
          transition={{ duration: 0.3 }}
        />
        <span
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          className={`absolute p-4 w-full ${skillText}`}
        >
          {skill}
        </span>
      </li>
    )
  }

  return <>{renderSkill(skill)}</>
}

export default SkillCard
