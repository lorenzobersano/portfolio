import SkillCard from './SkillCard'

const SkillsCards = ({ title, skills }) => {
  return (
    <div className="flex-grow">
      <h3 className="mb-2 font-mono text-sm tracking-wider text-gray-400 uppercase">
        {title}
      </h3>
      <ul>
        {skills.map((skill, i) => (
          <SkillCard skill={skill} key={i} />
        ))}
      </ul>
    </div>
  )
}

export default SkillsCards
