"use client"

import { useState, useEffect } from "react"
import { Heart, Eye } from "lucide-react"

const MOCK_GALLERY = [
  { id: 1, title: "Materials Summit 2024", date: "Oct 2024", images: 24, likes: 342 },
  { id: 2, title: "Research Lab Tour", date: "Sep 2024", images: 18, likes: 289 },
  { id: 3, title: "Networking Event", date: "Aug 2024", images: 31, likes: 401 },
  { id: 4, title: "Workshop Sessions", date: "Jul 2024", images: 22, likes: 267 },
  { id: 5, title: "Award Ceremony", date: "Jun 2024", images: 15, likes: 523 },
  { id: 6, title: "Community Meetup", date: "May 2024", images: 27, likes: 298 },
]

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedAlbum, setSelectedAlbum] = useState<(typeof MOCK_GALLERY)[0] | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="space-y-8">
      {/* Header */}
      <div
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <h1 className="font-headline text-4xl font-bold text-foreground mb-2">Photo Gallery</h1>
        <p className="text-muted-foreground">Memories from NAMMES events and activities</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {MOCK_GALLERY.map((album, idx) => (
          <div
            key={album.id}
            className={`group cursor-pointer transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${100 + idx * 75}ms` }}
            onClick={() => setSelectedAlbum(album)}
          >
            <div className="relative overflow-hidden rounded-xl mb-4">
              <div className="aspect-square bg-gradient-to-br from-green-600/20 to-green-500/10 flex items-center justify-center border border-green-900/30 group-hover:border-green-500/50 transition-all duration-300">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">📸</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 text-white text-sm">
                  <Eye size={18} />
                  View Album
                </div>
              </div>
            </div>
            <h3 className="font-headline font-semibold text-foreground group-hover:text-green-500 transition-colors mb-2">
              {album.title}
            </h3>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{album.images} photos</span>
              <span className="flex items-center gap-1">
                <Heart size={14} className="text-green-500" />
                {album.likes}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Album Modal */}
      {selectedAlbum && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-background border border-green-900/30 rounded-xl max-w-2xl w-full p-8 animate-in scale-in duration-300">
            <button
              onClick={() => setSelectedAlbum(null)}
              className="float-right text-muted-foreground hover:text-foreground transition-colors text-2xl"
            >
              ✕
            </button>
            <div className="aspect-video bg-gradient-to-br from-green-600/20 to-green-500/10 rounded-lg mb-6 flex items-center justify-center border border-green-900/30">
              <span className="text-8xl">📸</span>
            </div>
            <h1 className="font-headline text-3xl font-bold text-foreground mb-2">{selectedAlbum.title}</h1>
            <p className="text-muted-foreground mb-6">{selectedAlbum.date}</p>
            <div className="flex items-center gap-4 pb-6 border-b border-green-900/20 mb-6">
              <span className="text-sm text-muted-foreground">{selectedAlbum.images} Photos</span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Heart size={16} className="text-green-500" />
                {selectedAlbum.likes}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-green-600/10 to-green-500/5 rounded-lg border border-green-900/20 flex items-center justify-center hover:border-green-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">📷</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
