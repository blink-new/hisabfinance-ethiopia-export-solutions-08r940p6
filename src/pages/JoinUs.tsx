import { Users, BookOpen, Lightbulb, Building2, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'

const JoinUs = () => {
  const opportunities = [
    {
      icon: BookOpen,
      title: "Researchers & Students",
      description: "Contribute research papers, policy recommendations, and innovative solutions to export challenges.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      actions: ["Submit Research", "Join Studies", "Collaborate"]
    },
    {
      icon: Users,
      title: "NGOs & Organizations",
      description: "Partner with us to implement solutions and support Ethiopian exporters at scale.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      actions: ["Partner Program", "Grant Opportunities", "Volunteer"]
    },
    {
      icon: Lightbulb,
      title: "Innovators & Entrepreneurs",
      description: "Develop and showcase innovative solutions for export challenges and market access.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      actions: ["Submit Ideas", "Join Incubator", "Get Funding"]
    },
    {
      icon: Building2,
      title: "Investors & Donors",
      description: "Support high-impact projects that transform Ethiopia's export sector and create sustainable change.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      actions: ["View Projects", "Invest Now", "Partner"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join the Movement
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Be part of Ethiopia's export transformation. Whether you're a researcher, NGO, innovator, or investor, 
              there's a place for you in building a stronger export ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon
              return (
                <Card key={index} className="card-hover zoom-in-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${opportunity.bgColor}`}>
                        <Icon className={`w-8 h-8 ${opportunity.color}`} />
                      </div>
                      <CardTitle className="text-2xl font-semibold text-gray-900">
                        {opportunity.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">
                      {opportunity.description}
                    </p>
                    <div className="space-y-3">
                      {opportunity.actions.map((action, idx) => (
                        <Button
                          key={idx}
                          variant="outline"
                          className="w-full justify-between button-pulse hover:bg-green-50 hover:border-green-500 hover:text-green-600"
                        >
                          {action}
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h2>
            <p className="text-lg text-gray-600">
              Ready to make a difference? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <Card className="card-hover">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization/Institution
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your organization name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How would you like to contribute?
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Select contribution type</option>
                    <option>Research & Studies</option>
                    <option>NGO Partnership</option>
                    <option>Innovation & Technology</option>
                    <option>Investment & Funding</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us more about your interest
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Describe how you'd like to contribute to Ethiopia's export transformation..."
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full button-pulse bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white"
                >
                  Submit Application
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default JoinUs