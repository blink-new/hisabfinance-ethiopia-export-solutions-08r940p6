import { MessageSquare, Heart, Star, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const ExporterStories = () => {
  const stories = [
    {
      id: 1,
      title: "From Local Farm to Global Markets",
      author: "Alemayehu Tadesse",
      location: "Sidama Region",
      date: "2024-01-15",
      excerpt: "How our coffee cooperative increased export revenue by 45% through quality improvements and direct market access.",
      image: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fnfm8mSyKZ7TNbIcalKzFd0pHQBA2%2Fdownload-16-150x150__c1ff229f.jpg?alt=media&token=e51cd0b3-d38c-4b12-aec2-4fdcb6c34878",
      likes: 124,
      comments: 18
    },
    {
      id: 2,
      title: "Sesame Success: Overcoming Quality Challenges",
      author: "Tigist Mekonnen",
      location: "Tigray Region",
      date: "2024-01-12",
      excerpt: "Our journey to reduce post-harvest losses by 60% through innovative storage and processing techniques.",
      image: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fnfm8mSyKZ7TNbIcalKzFd0pHQBA2%2Fimage-2024-05-27T09-08-38__72c7115c.webp?alt=media&token=6019d5c8-3ca4-4004-93cc-198bea8794c6",
      likes: 89,
      comments: 12
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Exporter Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real stories from Ethiopian exporters sharing their challenges, victories, and lessons learned.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stories.map((story) => (
              <Card key={story.id} className="card-hover">
                <CardContent className="p-0">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover rounded-t-lg zoom-hover"
                  />
                  <div className="p-6">
                    <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                      {story.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span>{story.author}</span>
                      <span>•</span>
                      <span>{story.location}</span>
                      <span>•</span>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(story.date).toLocaleDateString()}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-gray-600">{story.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-gray-600">{story.comments}</span>
                        </div>
                      </div>
                      <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                        Read Full Story
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExporterStories