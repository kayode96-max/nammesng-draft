"use client"

import { useState, useEffect } from "react"
import { Heart, MessageCircle, Share2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const MOCK_ARTICLES = [
  {
    id: 1,
    title: "Materials Science Summit 2025 Announced",
    excerpt: "Join industry leaders for the most anticipated materials science conference of the year",
    content:
      "This year's summit will feature keynote presentations from renowned researchers, networking sessions, and hands-on workshops covering the latest advances in materials science...",
    author: "Prof. Chioma Eze",
    date: "March 15, 2025",
    category: "Events",
    likes: 234,
    comments: 42,
    image: "📰",
    featured: true,
  },
  {
    id: 2,
    title: "New Collaboration: NAMMES & International Research Institutes",
    excerpt: "Strengthening global partnerships in materials research and innovation",
    content: "NAMMES is proud to announce strategic partnerships with leading international research institutions...",
    author: "Dr. Olufemi Okafor",
    date: "March 10, 2025",
    category: "Partnership",
    likes: 156,
    comments: 28,
    image: "🤝",
  },
  {
    id: 3,
    title: "Member Spotlight: Success Stories from Our Community",
    excerpt: "Celebrating the achievements of NAMMES members in 2025",
    content:
      "This month we're highlighting some of our most accomplished members who are making waves in the materials science industry...",
    author: "NAMMES Admin",
    date: "March 5, 2025",
    category: "Community",
    likes: 298,
    comments: 67,
    image: "⭐",
  },
  {
    id: 4,
    title: "Advances in Sustainable Materials",
    excerpt: "Latest research trends in eco-friendly material production",
    content: "Recent developments in sustainable materials are opening new possibilities for green manufacturing...",
    author: "Prof. Amara Muthenge",
    date: "March 1, 2025",
    category: "Research",
    likes: 412,
    comments: 89,
    image: "🌱",
  },
]

export default function NewsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedArticle, setSelectedArticle] = useState<(typeof MOCK_ARTICLES)[0] | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = ["All", "Events", "Partnership", "Community", "Research"]
  const filteredArticles = MOCK_ARTICLES.filter((article) => {
    const matchCategory = selectedCategory === "All" || article.category === selectedCategory
    const matchSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <h1 className="font-headline text-4xl font-bold text-foreground mb-2">Latest News</h1>
        <p className="text-muted-foreground">Stay updated with NAMMES community news and announcements</p>
      </div>

      {/* Search and Filter */}
      <div
        className={`space-y-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "100ms" }}
      >
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-green-900/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-white/20 transition-all duration-300"
          />
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-green-600 text-white shadow-lg shadow-green-500/30"
                  : "bg-white/5 border border-green-900/30 text-foreground hover:border-green-500/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Article */}
      {filteredArticles.length > 0 && filteredArticles.some((a) => a.featured) && (
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {filteredArticles
            .filter((a) => a.featured)
            .map((article) => (
              <div
                key={article.id}
                className="p-8 rounded-xl border border-green-500/50 bg-gradient-to-br from-green-900/20 to-transparent hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="flex items-start gap-6">
                  <div className="text-6xl">{article.image}</div>
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-green-600 text-white text-xs font-medium mb-3">
                      Featured
                    </div>
                    <h2 className="font-headline text-3xl font-bold text-foreground group-hover:text-green-500 transition-colors mb-2">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Articles Grid */}
      <div className="space-y-4">
        {filteredArticles
          .filter((a) => !a.featured)
          .map((article, idx) => (
            <div
              key={article.id}
              className={`p-6 rounded-xl border border-green-900/30 bg-white/5 hover:border-green-500/50 hover:bg-white/10 transition-all duration-300 group cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${300 + idx * 75}ms` }}
              onClick={() => setSelectedArticle(article)}
            >
              <div className="flex gap-6">
                <div className="text-4xl flex-shrink-0">{article.image}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="inline-block px-2 py-1 rounded-full bg-green-900/20 border border-green-900/30 text-xs font-medium text-green-400 mr-2">
                        {article.category}
                      </span>
                      <h3 className="font-headline text-xl font-bold text-foreground group-hover:text-green-500 transition-colors mt-2">
                        {article.title}
                      </h3>
                    </div>
                    <span className="text-xs text-muted-foreground flex-shrink-0">{article.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart size={16} />
                      {article.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={16} />
                      {article.comments}
                    </div>
                    <button className="ml-auto text-green-500 hover:text-green-400 transition-colors flex items-center gap-1">
                      <Share2 size={16} />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Modal for Full Article */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-background border border-green-900/30 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 animate-in scale-in duration-300">
            <button
              onClick={() => setSelectedArticle(null)}
              className="float-right text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>
            <div className="text-5xl mb-4">{selectedArticle.image}</div>
            <span className="inline-block px-3 py-1 rounded-full bg-green-900/20 border border-green-900/30 text-xs font-medium text-green-400 mb-4">
              {selectedArticle.category}
            </span>
            <h1 className="font-headline text-3xl font-bold text-foreground mb-4">{selectedArticle.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-green-900/20">
              <span>{selectedArticle.author}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
            </div>
            <p className="text-foreground leading-relaxed mb-8">{selectedArticle.content}</p>
            <div className="flex items-center gap-4 pt-8 border-t border-green-900/20">
              <button className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors">
                <Heart size={20} />
                {selectedArticle.likes}
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors">
                <MessageCircle size={20} />
                {selectedArticle.comments}
              </button>
              <Button className="ml-auto gradient-btn">Share Article</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
