import studioData from "@/data/studio-data.json"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">서비스 및 가격</h1>

      <Tabs defaultValue="studio" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="studio">스튜디오 서비스</TabsTrigger>
          <TabsTrigger value="allinone">올인원 패키지</TabsTrigger>
        </TabsList>

        <TabsContent value="studio">
          <div className="space-y-8">
            {studioData.pricing.studio.list.map((service, index) => (
              <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden">
                <div className="bg-zinc-700 p-4">
                  <h3 className="text-xl font-bold">{service.service}</h3>
                </div>
                <div className="p-4">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-600">
                        <th className="text-left py-2 px-4">서비스</th>
                        <th className="text-left py-2 px-4">가격</th>
                        <th className="text-left py-2 px-4">비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      {service.details.map((detail, detailIndex) => (
                        <tr key={detailIndex} className="border-b border-zinc-600 last:border-0">
                          <td className="py-3 px-4">{detail.contents}</td>
                          <td className="py-3 px-4 font-semibold">{detail.price}</td>
                          <td className="py-3 px-4 text-zinc-400">{detail.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            {studioData.pricing.studio.additionalNotes && (
              <div className="bg-zinc-800 p-6 rounded-lg">
                <h4 className="font-bold mb-4">추가 안내사항</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {studioData.pricing.studio.additionalNotes.map((note, index) => (
                    <li key={index} className="text-zinc-300">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="allinone">
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="bg-zinc-700 p-4">
              <h3 className="text-xl font-bold">{studioData.pricing.allinone.service}</h3>
            </div>
            <div className="p-4">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-600">
                    <th className="text-left py-2 px-4">서비스</th>
                    <th className="text-left py-2 px-4">가격</th>
                    <th className="text-left py-2 px-4">비고</th>
                  </tr>
                </thead>
                <tbody>
                  {studioData.pricing.allinone.details.map((detail, detailIndex) => (
                    <tr key={detailIndex} className="border-b border-zinc-600 last:border-0">
                      <td className="py-3 px-4">{detail.contents}</td>
                      <td className="py-3 px-4 font-semibold">{detail.price}</td>
                      <td className="py-3 px-4 text-zinc-400">{detail.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

