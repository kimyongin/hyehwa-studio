import studioData from "@/data/studio-data.json"
import { Phone, Mail, MapPin, User } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">연락처</h1>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="bg-red-500 p-3 rounded-full mr-4">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">전화번호</h3>
              <p className="text-zinc-300">{studioData.contact.contactInfo.전화번호}</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-red-500 p-3 rounded-full mr-4">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">이메일</h3>
              <p className="text-zinc-300">{studioData.contact.contactInfo.이메일}</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-red-500 p-3 rounded-full mr-4">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">주소</h3>
              <p className="text-zinc-300">{studioData.contact.contactInfo.주소}</p>
              <p className="text-zinc-400 mt-2">{studioData.contact.contactInfo.주소설명}</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-red-500 p-3 rounded-full mr-4">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">담당자</h3>
              <p className="text-zinc-300">{studioData.contact.contactInfo.담당자}</p>
            </div>
          </div>

        </div>

        <div className="mt-12 h-80 bg-zinc-800 rounded-lg relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2031&auto=format&fit=crop"
            alt="혜화 녹음실 위치"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <p className="text-white text-lg">{studioData.contact.contactInfo.주소}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

