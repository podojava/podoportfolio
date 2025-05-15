interface IntroduceProps {
  content: string;
}

export default function Introduce({ content }: IntroduceProps) {
  return (
    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700 h-full">
      <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Introduce</h2>
      <div className="p-4 border border-gray-700 rounded-lg bg-gray-900/50">
        <p className="text-white/80 leading-relaxed">{content}</p>
      </div>
    </div>
  );
} 