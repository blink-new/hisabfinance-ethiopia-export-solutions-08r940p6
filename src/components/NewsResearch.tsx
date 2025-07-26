import { Calendar, ExternalLink, BookOpen, Newspaper, Users, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const NewsResearch = () => {
  const newsItems = [
    {
      id: 1,
      title: "Ethiopia's Coffee Export Revenue Drops 15% Due to Logistics Challenges",
      excerpt: "New report reveals significant impact of infrastructure gaps on coffee export performance, affecting thousands of farmers.",
      category: "News",
      date: "2024-01-15",
      readTime: "3 min read",
      image: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fnfm8mSyKZ7TNbIcalKzFd0pHQBA2%2Fdownload-16-150x150__c1ff229f.jpg?alt=media&token=e51cd0b3-d38c-4b12-aec2-4fdcb6c34878",
      author: "Ethiopian Export Authority"
    },
    {
      id: 2,
      title: "Innovative Cold Chain Solutions for Sesame Export Quality",
      excerpt: "Research study shows 40% improvement in sesame quality retention using new cold storage technologies.",
      category: "Research",
      date: "2024-01-12",
      readTime: "5 min read",
      image: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fnfm8mSyKZ7TNbIcalKzFd0pHQBA2%2Fimage-2024-05-27T09-08-38__72c7115c.webp?alt=media&token=6019d5c8-3ca4-4004-93cc-198bea8794c6",
      author: "Agricultural Research Institute"
    },
    {
      id: 3,
      title: "Digital Platform Connects Ethiopian Farmers to Global Markets",
      excerpt: "New technology platform enables direct farmer-to-buyer connections, reducing intermediary costs by 30%.",
      category: "Innovation",
      date: "2024-01-10",
      readTime: "4 min read",
      image: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fnfm8mSyKZ7TNbIcalKzFd0pHQBA2%2Fcountryside-worker-out-field-300x169__c04460af.jpg?alt=media&token=df12d29f-fa32-41c3-8e87-4d89cc353b1f",
      author: "Tech Innovation Hub"
    }
  ]

  const researchTopics = [
    {
      title: "Export Logistics Optimization",
      description: "Advanced supply chain solutions for Ethiopian agricultural exports",
      icon: TrendingUp,
      papers: 12,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Quality Assurance Systems",
      description: "International standards compliance for export products",
      icon: BookOpen,
      papers: 8,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Market Access Strategies",
      description: "Breaking into new international markets effectively",
      icon: Users,
      papers: 15,
      color: "bg-yellow-50 text-yellow-600"
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'News':
        return 'bg-red-100 text-red-800'
      case 'Research':
        return 'bg-blue-100 text-blue-800'
      case 'Innovation':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'News':
        return Newspaper
      case 'Research':
        return BookOpen
      case 'Innovation':
        return TrendingUp
      default:
        return BookOpen
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Research
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments, research findings, and innovative solutions in Ethiopia's export sector.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Articles */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">Recent Updates</h3>
              <Button variant="outline" className="button-pulse">
                View All
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-6">
              {newsItems.map((item, index) => {
                const CategoryIcon = getCategoryIcon(item.category)
                return (
                  <Card key={item.id} className="card-hover zoom-in-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 md:h-full object-cover rounded-l-lg zoom-hover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center space-x-3 mb-3">
                            <Badge className={getCategoryColor(item.category)}>
                              <CategoryIcon className="w-3 h-3 mr-1" />
                              {item.category}
                            </Badge>
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(item.date).toLocaleDateString()}
                            </div>
                          </div>
                          
                          <h4 className="text-xl font-semibold text-gray-900 mb-2 hover:text-green-600 transition-colors cursor-pointer">
                            {item.title}
                          </h4>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {item.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>{item.author}</span>
                              <span>•</span>
                              <span>{item.readTime}</span>
                            </div>
                            <Button variant="ghost" size="sm" className="button-pulse text-green-600 hover:text-green-700">
                              Read More
                              <ExternalLink className="ml-1 w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Research Topics Sidebar */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Research Topics</h3>
            
            <div className="space-y-4 mb-8">
              {researchTopics.map((topic, index) => {
                const Icon = topic.icon
                return (
                  <Card key={index} className="card-hover zoom-in-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${topic.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{topic.title}</CardTitle>
                          <p className="text-sm text-gray-600 mt-1">
                            {topic.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {topic.papers} research papers
                        </span>
                        <Button variant="ghost" size="sm" className="button-pulse text-green-600">
                          Explore
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Newsletter Signup */}
            <Card className="card-hover bg-gradient-to-br from-green-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Stay Updated</CardTitle>
                <p className="text-sm text-gray-600">
                  Get the latest export insights delivered to your inbox
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <Button className="w-full button-pulse bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsResearch