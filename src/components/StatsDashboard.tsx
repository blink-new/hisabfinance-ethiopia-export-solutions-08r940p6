import { TrendingDown, DollarSign, Package, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const StatsDashboard = () => {
  const stats = [
    {
      title: "Export Revenue Loss",
      value: "$2.3B",
      change: "-15%",
      description: "Annual revenue lost due to export challenges",
      icon: DollarSign,
      color: "text-red-600",
      bgColor: "bg-red-50",
      trend: "down"
    },
    {
      title: "Export Volume Decline",
      value: "23%",
      change: "-8%",
      description: "Decrease in agricultural exports this year",
      icon: TrendingDown,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      trend: "down"
    },
    {
      title: "Affected Products",
      value: "150+",
      change: "+12%",
      description: "Agricultural products facing export barriers",
      icon: Package,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      trend: "up"
    },
    {
      title: "Critical Issues",
      value: "47",
      change: "+5%",
      description: "Major export challenges identified",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      trend: "up"
    }
  ]

  const exportData = [
    { product: "Coffee", value: 45, color: "bg-green-500" },
    { product: "Sesame", value: 25, color: "bg-yellow-500" },
    { product: "Leather", value: 15, color: "bg-blue-500" },
    { product: "Textiles", value: 10, color: "bg-purple-500" },
    { product: "Others", value: 5, color: "bg-gray-500" }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ethiopia's Export Crisis
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real-time data showing the impact of export challenges on Ethiopia's economy and the urgent need for innovative solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="card-hover zoom-in-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-medium ${
                      stat.trend === 'down' ? 'text-red-600' : 'text-orange-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500">vs last year</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Export Composition Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Export Composition by Product
              </CardTitle>
              <p className="text-sm text-gray-600">
                Breakdown of Ethiopia's major export products
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {exportData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded ${item.color}`}></div>
                      <span className="text-sm font-medium text-gray-700">
                        {item.product}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${item.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900 w-8">
                        {item.value}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Key Export Challenges
              </CardTitle>
              <p className="text-sm text-gray-600">
                Major barriers affecting Ethiopian exports
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { challenge: "Logistics & Infrastructure", severity: 85, color: "bg-red-500" },
                  { challenge: "Quality Standards", severity: 70, color: "bg-orange-500" },
                  { challenge: "Market Access", severity: 65, color: "bg-yellow-500" },
                  { challenge: "Financing", severity: 60, color: "bg-blue-500" },
                  { challenge: "Technology Gap", severity: 55, color: "bg-purple-500" }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {item.challenge}
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        {item.severity}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${item.severity}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default StatsDashboard