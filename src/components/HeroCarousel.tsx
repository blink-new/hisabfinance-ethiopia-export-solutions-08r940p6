import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Solving Ethiopia's Export Crisis",
      subtitle: "One Idea at a Time",
      description: "Empowering Ethiopian exporters with innovative solutions, research, and community support to overcome export challenges and unlock global market potential.",
      image: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fnfm8mSyKZ7TNbIcalKzFd0pHQBA2%2Fcountryside-worker-out-field-300x169__c04460af.jpg?alt=media&token=df12d29f-fa32-41c3-8e87-4d89cc353b1f",
      cta: "Explore Solutions"
    },
    {
      id: 2,
      title: "Ethiopian Coffee Excellence",
      subtitle: "From Farm to Global Markets",
      description: "Supporting coffee farmers and exporters with cutting-edge logistics, quality control, and market access solutions to showcase Ethiopia's world-renowned coffee.",
      image: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fnfm8mSyKZ7TNbIcalKzFd0pHQBA2%2Fdownload-16-150x150__c1ff229f.jpg?alt=media&token=e51cd0b3-d38c-4b12-aec2-4fdcb6c34878",
      cta: "Learn More"
    },
    {
      id: 3,
      title: "Sesame & Agricultural Exports",
      subtitle: "Unlocking Agricultural Potential",
      description: "Revolutionizing sesame and agricultural export processes through technology, quality assurance, and strategic partnerships for sustainable growth.",
      image: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fnfm8mSyKZ7TNbIcalKzFd0pHQBA2%2Fimage-2024-05-27T09-08-38__72c7115c.webp?alt=media&token=6019d5c8-3ca4-4004-93cc-198bea8794c6",
      cta: "Join Movement"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[600px] overflow-hidden bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              {/* Content */}
              <div className="space-y-6 slide-up-animation">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-medium text-green-600">
                    {slide.subtitle}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="button-pulse bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white px-8 py-3"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="button-pulse border-green-500 text-green-600 hover:bg-green-50 px-8 py-3"
                  >
                    Watch Video
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="zoom-in-animation">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl zoom-hover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel