import { useState, useEffect } from 'react'
import { AlertTriangle, TrendingDown, Users, Clock, CheckCircle, XCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { blink } from '../blink/client'

interface Challenge {
  id: string
  challenge_title: string
  challenge_description: string
  severity_level: number
  affected_products: string
  solution_status: string
  created_at: string
}

const Problems = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const data = await blink.db.exportChallenges.list({
          orderBy: { severityLevel: 'desc' },
          limit: 20
        })
        setChallenges(data)
      } catch (error) {
        console.error('Error fetching challenges:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchChallenges()
  }, [])

  const getSeverityColor = (level: number) => {
    if (level >= 8) return 'bg-red-100 text-red-800'
    if (level >= 6) return 'bg-orange-100 text-orange-800'
    if (level >= 4) return 'bg-yellow-100 text-yellow-800'
    return 'bg-green-100 text-green-800'
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'in_progress':
        return <Clock className="w-4 h-4 text-yellow-600" />
      default:
        return <XCircle className="w-4 h-4 text-red-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-800'
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-red-100 text-red-800'
    }
  }

  const parseProducts = (productsJson: string) => {
    try {
      return JSON.parse(productsJson)
    } catch {
      return [productsJson]
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
      <section className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-red-100 p-4 rounded-full">
                <AlertTriangle className="w-12 h-12 text-red-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Export Challenges
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Understanding the critical barriers facing Ethiopian exporters and working together to find sustainable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white">
                Report a Challenge
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                View Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-red-600 mb-2">{challenges.length}</div>
                <div className="text-sm text-gray-600">Total Challenges</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {challenges.filter(c => Number(c.severity_level) >= 8).length}
                </div>
                <div className="text-sm text-gray-600">Critical Issues</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  {challenges.filter(c => c.solution_status === 'in_progress').length}
                </div>
                <div className="text-sm text-gray-600">In Progress</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {challenges.filter(c => c.solution_status === 'resolved').length}
                </div>
                <div className="text-sm text-gray-600">Resolved</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenges List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Export Challenges
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed breakdown of the major barriers affecting Ethiopian exports, with real examples and potential solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={challenge.id} className="card-hover zoom-in-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                        {challenge.challenge_title}
                      </CardTitle>
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge className={getSeverityColor(Number(challenge.severity_level))}>
                          Severity: {challenge.severity_level}/10
                        </Badge>
                        <Badge className={getStatusColor(challenge.solution_status)}>
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(challenge.solution_status)}
                            <span className="capitalize">{challenge.solution_status.replace('_', ' ')}</span>
                          </div>
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {challenge.challenge_description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Affected Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {parseProducts(challenge.affected_products).map((product: string, idx: number) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                      Reported: {new Date(challenge.created_at).toLocaleDateString()}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        Propose Solution
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {challenges.length === 0 && (
            <div className="text-center py-12">
              <AlertTriangle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Challenges Found</h3>
              <p className="text-gray-600 mb-6">Be the first to report an export challenge.</p>
              <Button className="bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white">
                Report Challenge
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Help Solve These Challenges
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Your expertise and insights can make a difference. Join our community of exporters, researchers, and innovators working to overcome these barriers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white">
              Join the Community
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Problems