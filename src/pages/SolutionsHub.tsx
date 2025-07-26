import { useState, useEffect } from 'react'
import { Lightbulb, Rocket, Users, TrendingUp, BookOpen, Award, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { blink } from '../blink/client'

interface Solution {
  id: string
  solution_title: string
  solution_description: string
  solution_type: string
  implementation_status: string
  impact_metrics: string
  created_at: string
}

const SolutionsHub = () => {
  const [solutions, setSolutions] = useState<Solution[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const data = await blink.db.solutions.list({
          orderBy: { createdAt: 'desc' },
          limit: 20
        })
        setSolutions(data)
      } catch (error) {
        console.error('Error fetching solutions:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSolutions()
  }, [])

  const solutionCategories = [
    {
      id: 'technology',
      name: 'Technology Solutions',
      icon: Rocket,
      description: 'Digital platforms, automation, and tech innovations',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'infrastructure',
      name: 'Infrastructure',
      icon: TrendingUp,
      description: 'Logistics, transportation, and facility improvements',
      color: 'bg-green-50 text-green-600'
    },
    {
      id: 'policy',
      name: 'Policy & Regulation',
      icon: BookOpen,
      description: 'Government initiatives and regulatory frameworks',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      id: 'financing',
      name: 'Financing Solutions',
      icon: Award,
      description: 'Investment opportunities and funding mechanisms',
      color: 'bg-yellow-50 text-yellow-600'
    }
  ]

  const featuredSolutions = [
    {
      title: 'Digital Export Platform',
      description: 'AI-powered platform connecting Ethiopian exporters directly with global buyers, reducing intermediary costs by 30%.',
      type: 'Technology',
      status: 'Pilot Phase',
      impact: '500+ exporters connected',
      image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fnfm8mSyKZ7TNbIcalKzFd0pHQBA2%2Fhomeesx__1fbb6539.png?alt=media&token=c376e87d-801c-433e-bb20-49fcc031c1c7'
    },
    {
      title: 'Cold Chain Network',
      description: 'Nationwide cold storage and transportation network preserving product quality from farm to port.',
      type: 'Infrastructure',
      status: 'Implementation',
      impact: '40% quality improvement',
      image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fnfm8mSyKZ7TNbIcalKzFd0pHQBA2%2Fimage-2024-05-27T09-08-38__72c7115c.webp?alt=media&token=6019d5c8-3ca4-4004-93cc-198bea8794c6'
    },
    {
      title: 'Export Finance Hub',
      description: 'Innovative financing solutions providing working capital and export insurance for small-scale exporters.',
      type: 'Financing',
      status: 'Launched',
      impact: '$50M+ disbursed',
      image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fnfm8mSyKZ7TNbIcalKzFd0pHQBA2%2Fwegagenesx-Copy-Copy__0680a650.png?alt=media&token=d7da5bb9-9fc8-4870-8eb3-cc65c5068d4c'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'implemented':
      case 'launched':
        return 'bg-green-100 text-green-800'
      case 'pilot':
      case 'pilot phase':
      case 'implementation':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-blue-100 text-blue-800'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'technology':
        return 'bg-blue-100 text-blue-800'
      case 'infrastructure':
        return 'bg-green-100 text-green-800'
      case 'policy':
        return 'bg-purple-100 text-purple-800'
      case 'financing':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <Lightbulb className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Solutions Hub
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Innovative solutions, research breakthroughs, and government initiatives transforming Ethiopia's export landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white">
                Submit Solution
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Browse Research
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Breakthrough innovations making a real impact on Ethiopian exports.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredSolutions.map((solution, index) => (
              <Card key={index} className="card-hover zoom-in-animation overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-48 object-cover zoom-hover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(solution.status)}>
                      {solution.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getTypeColor(solution.type)}>
                      {solution.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-green-600">
                      {solution.impact}
                    </div>
                    <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solution Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore solutions organized by type and implementation approach.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all">All Solutions</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              <TabsTrigger value="policy">Policy</TabsTrigger>
              <TabsTrigger value="financing">Financing</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {solutionCategories.map((category, index) => {
                  const Icon = category.icon
                  return (
                    <Card key={category.id} className="card-hover text-center zoom-in-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader>
                        <div className={`w-16 h-16 mx-auto rounded-full ${category.color} flex items-center justify-center mb-4`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <CardTitle className="text-lg font-semibold">
                          {category.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm">
                          {category.description}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Solutions Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {solutions.map((solution, index) => (
                  <Card key={solution.id} className="card-hover zoom-in-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={getTypeColor(solution.solution_type)}>
                          {solution.solution_type}
                        </Badge>
                        <Badge className={getStatusColor(solution.implementation_status)}>
                          {solution.implementation_status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        {solution.solution_title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        {solution.solution_description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="text-sm text-gray-500">
                          {new Date(solution.created_at).toLocaleDateString()}
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {solutions.length === 0 && (
                <div className="text-center py-12">
                  <Lightbulb className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Solutions Yet</h3>
                  <p className="text-gray-600 mb-6">Be the first to contribute a solution.</p>
                  <Button className="bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white">
                    Submit Solution
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Other tab contents would be filtered versions of the solutions */}
            {solutionCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {solutions
                    .filter(s => s.solution_type.toLowerCase() === category.id)
                    .map((solution, index) => (
                      <Card key={solution.id} className="card-hover zoom-in-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge className={getStatusColor(solution.implementation_status)}>
                              {solution.implementation_status}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl font-semibold text-gray-900">
                            {solution.solution_title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">
                            {solution.solution_description}
                          </p>
                          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                            <div className="text-sm text-gray-500">
                              {new Date(solution.created_at).toLocaleDateString()}
                            </div>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Solution to Share?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Join our community of innovators and help solve Ethiopia's export challenges with your ideas and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white">
              Submit Your Solution
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Join Research Network
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SolutionsHub