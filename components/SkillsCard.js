import { motion } from 'framer-motion'

const SkillsCard = ({ title, skills }) => {
  function getSkillStyle(skill) {
    let skillStyle = ''

    switch (skill) {
      case 'html':
        skillStyle += 'hover:bg-html-bg hover:text-html-text'
        break
      case 'css':
        skillStyle += 'hover:bg-css-bg hover:text-css-text'
        break
      case 'js':
        skillStyle += 'hover:bg-js-bg hover:text-js-text'
        break
      case 'reactjs':
        skillStyle += 'hover:bg-reactjs-bg hover:text-reactjs-text'
        break
      case 'nextjs':
        skillStyle += 'hover:bg-nextjs-bg hover:text-nextjs-text'
        break
      case 'tailwindcss':
        skillStyle += 'hover:bg-gradient-r-tailwind-logo hover:text-white'
        break
      case 'redux':
        skillStyle += 'hover:bg-redux-bg hover:text-redux-text'
        break
      case 'styledcomponents':
        skillStyle += 'hover:bg-gradient-r-styledcomponents hover:text-white'
        break
      case 'nodejs':
        skillStyle += 'hover:bg-nodejs-bg hover:text-nodejs-text'
        break
      case 'netwebapi':
        skillStyle += 'hover:bg-gradient-r-netwebapi hover:text-white'
        break
      case 'express':
        skillStyle += 'hover:bg-express-bg hover:text-express-text'
        break
      case 'solidity':
        skillStyle += 'hover:bg-gradient-r-solidity hover:text-white'
        break
      case 'userinterfacedesign':
        skillStyle += 'hover:bg-gradient-r-ui hover:text-white'
        break
      case 'userexperiencedesign':
        skillStyle += 'hover:bg-gradient-r-ux hover:text-white'
        break
    }

    return skillStyle
  }

  function renderSkill(skill, i) {
    let className = 'w-full px-4 py-2 -ml-4 rounded-lg '

    className += getSkillStyle(
      skill.toLowerCase().replace(/ /g, '').replace('.', '')
    )

    return (
      <motion.li whileHover={{ x: 8 }} className={className} key={i}>
        {skill}
      </motion.li>
    )
  }

  return (
    <div className="flex-grow">
      <h3 className="mb-2 font-mono text-sm tracking-wider text-gray-400 uppercase">
        {title}
      </h3>
      <ul>{skills.map((skill, i) => renderSkill(skill, i))}</ul>
    </div>
  )
}

export default SkillsCard
