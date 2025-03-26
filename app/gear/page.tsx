import studioData from "@/data/studio-data.json"
import Image from "next/image"

function getCategoryImage(category: string) {
  const imageMap: { [key: string]: string } = {
    마이크: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop",
    프리앰프: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
    스피커: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=2070&auto=format&fit=crop",
    오디오인터페이스: "https://images.unsplash.com/photo-1563330232-57114bb0823c?q=80&w=2070&auto=format&fit=crop",
    헤드폰: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop",
    기타앰프: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?q=80&w=2070&auto=format&fit=crop",
    기타: "https://images.unsplash.com/photo-1519552928909-67ca7aef9265?q=80&w=2132&auto=format&fit=crop",
  }

  return (
    imageMap[category] ||
    "https://images.unsplash.com/photo-1598295893369-1918ffaf89a2?q=80&w=2070&auto=format&fit=crop"
  )
}

export default function GearPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">장비</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1519552928909-67ca7aef9265?q=80&w=2132&auto=format&fit=crop"
            alt="스튜디오 장비"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-lg text-zinc-300 mb-6">
            혜화 녹음실은 최고의 사운드를 위해 엄선된 프로페셔널 장비들을 갖추고 있습니다. Neumann 마이크, AMS NEVE
            프리앰프, Genelec 모니터 등 최고급 장비로 최상의 녹음 환경을 제공합니다.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {studioData.gear.list.map((category, index) => (
          <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="h-48 relative">
              <Image
                src={getCategoryImage(category.category) || "/placeholder.svg"}
                alt={category.category}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

