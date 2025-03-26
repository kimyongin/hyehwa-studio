import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mic2, Music2, Settings, ExternalLink } from "lucide-react"
import studioData from "@/data/studio-data.json"

function getProjectImage(index: number, category: string) {
  const images = [
    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598295893369-1918ffaf89a2?q=80&w=2070&auto=format&fit=crop",
  ]
  return images[index % images.length]
}

// SoundCloud URL을 임베드 URL로 변환
function getSoundCloudEmbedUrl(url: string) {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true`
}

// YouTube URL을 임베드 URL로 변환
function getYouTubeEmbedUrl(url: string) {
  // YouTube URL에서 비디오 ID 추출
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  const videoId = match && match[7].length === 11 ? match[7] : null

  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`
  }

  return null
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"
          alt="Recording Studio"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">혜화 녹음실</h1>
          <p className="text-xl md:text-2xl text-zinc-200 max-w-2xl mb-8">{studioData.about.description[0]}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/contact">
                문의하기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/about">
                더 알아보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/about" className="group">
              <div className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-950 transition-all duration-300 h-full">
                <Mic2 className="h-10 w-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">스튜디오 소개</h3>
                <p className="text-zinc-400 mb-4">
                  혜화 녹음실은 4호선 혜화역 도보 10분 거리에 위치한 조용하고 차분한 분위기의 스튜디오입니다.
                </p>
                <span className="text-red-500 group-hover:underline flex items-center">
                  더 알아보기 <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>

            <Link href="/project" className="group">
              <div className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-950 transition-all duration-300 h-full">
                <Music2 className="h-10 w-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">프로젝트</h3>
                <p className="text-zinc-400 mb-4">
                  다양한 장르의 음악 프로젝트를 진행해왔습니다. 녹음, 믹싱, 마스터링 등 음원 제작의 전 과정을
                  지원합니다.
                </p>
                <span className="text-red-500 group-hover:underline flex items-center">
                  더 알아보기 <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>

            <Link href="/pricing" className="group">
              <div className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-950 transition-all duration-300 h-full">
                <Settings className="h-10 w-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">서비스 및 가격</h3>
                <p className="text-zinc-400 mb-4">
                  보컬 녹음, 편집, 믹싱, 마스터링 등 다양한 서비스를 합리적인 가격에 제공합니다.
                </p>
                <span className="text-red-500 group-hover:underline flex items-center">
                  더 알아보기 <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">주요 프로젝트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioData.project.list.slice(0, 4).map((project, index) => {
              const hasSoundCloud = !!project.soundcloud
              const hasYouTube = !!project.youtube
              const hasEmbed = hasSoundCloud || hasYouTube

              return (
                <div
                  key={index}
                  className="bg-zinc-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="h-48 bg-zinc-700 relative">
                    {hasEmbed ? (
                      hasSoundCloud ? (
                        <iframe
                          width="100%"
                          height="100%"
                          scrolling="no"
                          frameBorder="no"
                          allow="autoplay"
                          src={getSoundCloudEmbedUrl(project.soundcloud!)}
                          className="absolute inset-0"
                        ></iframe>
                      ) : hasYouTube ? (
                        <iframe
                          width="100%"
                          height="100%"
                          src={getYouTubeEmbedUrl(project.youtube!)}
                          title={project.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0"
                        ></iframe>
                      ) : null
                    ) : (
                      <Image
                        src={getProjectImage(index, project.category) || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold mt-1 mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.roles.map((role, roleIndex) => (
                        <span key={roleIndex} className="text-xs bg-zinc-700 px-2 py-1 rounded">
                          {role}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/project#project-${index}`}
                      className="text-zinc-400 hover:text-white text-sm flex items-center"
                    >
                      더 보기 <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/project">
                모든 프로젝트 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">음악 프로젝트를 시작하세요</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            15년 이상의 상업 음악 프로젝트 경험을 바탕으로 합리적인 가격에 높은 퀄리티를 보장합니다.
          </p>
          <Button asChild size="lg" variant="default" className="bg-white text-red-600 hover:bg-zinc-100">
            <Link href="/contact">
              문의하기 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

