import studioData from "@/data/studio-data.json"

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">연혁</h1>

      <div className="relative border-l-2 border-red-500 ml-4 md:ml-0 md:mx-auto md:max-w-3xl pl-8 md:pl-0">
        {studioData.history.list.map((item, index) => (
          <div key={index} className="mb-12 md:grid md:grid-cols-5 md:gap-8 relative">
            <div className="md:col-span-1 mb-2 md:mb-0 md:text-right">
              <span className="text-xl font-bold text-red-500">{item.year}</span>
            </div>
            <div className="md:col-span-4 bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{item.project}</h3>
              {item.client && <p className="text-zinc-400">클라이언트: {item.client}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

