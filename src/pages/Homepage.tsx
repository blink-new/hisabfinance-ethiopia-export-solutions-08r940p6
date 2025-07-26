import HeroCarousel from '../components/HeroCarousel'
import StatsDashboard from '../components/StatsDashboard'
import NewsResearch from '../components/NewsResearch'
import { ArrowRight, Coffee, Wheat, TrendingUp, Users } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const Homepage = () => {
  const features = [
    {
      icon: Coffee,
      title: "Coffee Export Excellence",
      description: "Supporting Ethiopia's world-renowned coffee industry with quality assurance and market access solutions.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Wheat,
      title: "Agricultural Innovation",
      description: "Revolutionizing sesame, grain, and agricultural exports through technology and best practices.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Real-time market data and insights to help exporters make informed decisions.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connecting exporters, researchers, and investors to build a stronger export ecosystem.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ]

  const successStories = [
    {
      name: "Alemayehu Coffee Cooperative",
      location: "Sidama Region",
      achievement: "Increased export revenue by 45%",
      image: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fnfm8mSyKZ7TNbIcalKzFd0pHQBA2%2Fdownload-16-150x150__c1ff229f.jpg?alt=media&token=e51cd0b3-d38c-4b12-aec2-4fdcb6c34878",
      story: "Through improved quality control and direct market access, this cooperative transformed their export operations."
    },
    {
      name: "Tigray Sesame Farmers Union",
      location: "Tigray Region",
      achievement: "Reduced post-harvest losses by 60%",
      image: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fnfm8mSyKZ7TNbIcalKzFd0pHQBA2%2Fimage-2024-05-27T09-08-38__72c7115c.webp?alt=media&token=6019d5c8-3ca4-4004-93cc-198bea8794c6",
      story: "Implementing modern storage and processing techniques led to significant quality improvements."
    },
    {
      name: "Oromia Agricultural Exports",
      location: "Oromia Region",
      achievement: "Expanded to 12 new international markets",
      image: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fnfm8mSyKZ7TNbIcalKzFd0pHQBA2%2Fcountryside-worker-out-field-300x169__c04460af.jpg?alt=media&token=df12d29f-fa32-41c3-8e87-4d89cc353b1f",
      story: "Strategic partnerships and quality certifications opened doors to premium global markets."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Empowering Ethiopian Exports
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to overcome export challenges and unlock Ethiopia's agricultural potential in global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="card-hover zoom-in-animation text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className={`w-16 h-16 mx-auto rounded-full ${feature.bgColor} flex items-center justify-center mb-4`}>
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <StatsDashboard />

      {/* Success Stories */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real stories from Ethiopian exporters who have transformed their businesses through innovative solutions and community support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="card-hover zoom-in-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-48 object-cover rounded-t-lg zoom-hover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {story.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {story.location}
                    </p>
                    <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                      {story.achievement}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {story.story}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="button-pulse bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white px-8 py-3"
            >
              Read More Stories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* News & Research */}
      <NewsResearch />

      {/* Call to Action */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the Export Revolution
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Be part of Ethiopia's export transformation. Whether you're a farmer, exporter, researcher, or investor, 
            there's a place for you in building a stronger export ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="button-pulse bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white px-8 py-3"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="button-pulse border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage