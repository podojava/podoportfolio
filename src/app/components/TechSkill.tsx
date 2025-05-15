interface TechSkillProps {
  skills: string[];
}

export default function TechSkill({ skills }: TechSkillProps) {
  const getRandomGradient = (index: number) => {
    const gradients = [
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-emerald-500',
      'from-yellow-500 to-orange-500',
      'from-red-500 to-pink-500',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700 h-full">
      <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tech Skill</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`px-4 py-2 rounded-full bg-gradient-to-r ${getRandomGradient(index)} 
              text-white font-medium shadow-lg transform hover:scale-105 transition-all
              hover:shadow-xl hover:shadow-current/25`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
} 