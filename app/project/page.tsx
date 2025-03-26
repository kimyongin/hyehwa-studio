"use client"

import Image from "next/image"
import studioData from "@/data/studio-data.json"
import { useState } from "react"

// 이미지 대체용 함수 (임베드가 없는 경우 사용)
function getProjectImage(index: number, category: string) {
  // 카테고리별 이미지 매핑
  const categoryImages: { [key: string]: string } = {
    "Ani Pop": "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop",
    "Modern Rock": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
    Ballad: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
    "J-Rock Style": "https://images.unsplash.com/photo-1598295893369-1918ffaf89a2?q=80&w=2070&auto=format&fit=crop",
    "Retro Synth Pop": "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=2070&auto=format&fit=crop",
    "Ani Rock": "https://images.unsplash.com/photo-1574873215043-44119461cb3b?q=80&w=2070&auto=format&fit=crop",
    "Ani OP": "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop",
    Rock: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop",
  }

  // 카테고리에 맞는 이미지가 있으면 반환, 없으면 기본 이미지 배열에서 선택
  if (categoryImages[category]) {
    return categoryImages[category]
  }

  const defaultImages = [
    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598295893369-1918ffaf89a2?q=80&w=2070&auto=format&fit=crop",
  ]
  return defaultImages[index % defaultImages.length]
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
    // 타임스탬프가 있는지 확인
    const timeRegExp = /[?&]t=([0-9]+)/
    const timeMatch = url.match(timeRegExp)
    const startTime = timeMatch ? `&start=${timeMatch[1]}` : ""

    return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0${startTime}`
  }

  return null
}

export default function ProjectPage() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null)
    } else {
      setExpandedProject(index)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">프로젝트</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {studioData.project.list.map((project, index) => {
          const isExpanded = expandedProject === index
          const hasSoundCloud = !!project.soundcloud
          const hasYouTube = !!project.youtube
          const hasEmbed = hasSoundCloud || hasYouTube

          return (
            <div
              key={index}
              className={`bg-zinc-800 rounded-lg overflow-hidden transition-all duration-300 ${
                isExpanded ? "lg:col-span-3 md:col-span-2" : ""
              }`}
              id={`project-${index}`}
            >
              <div className={`${isExpanded ? "h-96" : "h-64"} bg-zinc-700 relative`}>
                {hasEmbed ? (
                  // 임베드 표시 (확장 여부와 관계없이)
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
                  // 임베드가 없는 경우 이미지만 표시
                  <Image
                    src={getProjectImage(index, project.category) || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-red-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  {hasEmbed && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-zinc-400 hover:text-white text-sm flex items-center"
                    >
                      {isExpanded ? "접기" : "확장하기"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ml-1 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {isExpanded ? (
                          <polyline points="18 15 12 9 6 15"></polyline>
                        ) : (
                          <polyline points="6 9 12 15 18 9"></polyline>
                        )}
                      </svg>
                    </button>
                  )}
                </div>
                <h3 className="text-xl font-bold mt-2 mb-4">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.roles.map((role, roleIndex) => (
                    <span key={roleIndex} className="text-xs bg-zinc-700 px-2 py-1 rounded">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

