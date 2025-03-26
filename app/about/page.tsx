import Image from "next/image"
import studioData from "@/data/studio-data.json"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">스튜디오 소개</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div className="space-y-4">
            {studioData.about.description.map((paragraph, index) => (
              <p key={index} className="text-lg text-zinc-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"
            alt="혜화 녹음실"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="bg-zinc-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">최적의 환경</h3>
          <p className="text-zinc-300">
            조용하고 차분한 분위기의 스튜디오에서 창작에만 집중할 수 있는 환경을 제공합니다.
          </p>
        </div>
        <div className="bg-zinc-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">최신 장비</h3>
          <p className="text-zinc-300">
            Neumann, AMS NEVE, Genelec 등 최고급 장비를 갖추고 있어 최상의 사운드를 구현합니다.
          </p>
        </div>
        <div className="bg-zinc-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">전문 경험</h3>
          <p className="text-zinc-300">
            15년 이상의 상업 음악 프로젝트 경험을 바탕으로 높은 퀄리티의 결과물을 보장합니다.
          </p>
        </div>
      </div>
    </div>
  )
}

