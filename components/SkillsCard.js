import { motion } from 'framer-motion'

const SkillsCard = ({ title, skills }) => {
  return (
    <div className="flex-grow">
      <h3 className="mb-4 font-mono text-sm tracking-wider text-gray-400 uppercase">
        {title}
      </h3>
      <ul>
        {skills.map((skill, i) => (
          <motion.li
            whileHover={{ x: 16 }}
            className={`rounded-lg flex-grow-0 -ml-4 py-2 px-4 ${
              skill.toLowerCase() === 'tailwind.css'
                ? 'hover:bg-gradient-r-tailwind-logo hover:text-white'
                : `hover:bg-${skill
                    .toLowerCase()
                    .replace(
                      ' ',
                      ''
                    )}-bg hover:text-${skill
                    .toLowerCase()
                    .replace(' ', '')}-text`
            }`}
            key={i}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsCard
