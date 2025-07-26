import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { 
  DollarSign, 
  Truck, 
  Thermometer, 
  Wifi, 
  GraduationCap, 
  Heart,
  TrendingUp,
  Users,
  Target,
  ArrowRight
} from 'lucide-react'

const InvestorNGO = () => {
  const investmentAreas = [
    {
      icon: Truck,
      title: "Export Logistics Infrastructure",
      description: "Investment opportunities in transportation, warehousing, and logistics networks",
      investment: "$50M - $200M",
      impact: "Reduce export costs by 30-40%",
      timeline: "3-5 years",
      color: "bg-blue-500",
      details: [
        "Modern warehouse facilities",
        "Cold chain infrastructure",
        "Transportation networks",
        "Port facility upgrades"
      ]
    },
    {
      icon: Thermometer,
      title: "Cold Chain Projects",
      description: "Temperature-controlled storage and transportation for agricultural exports",
      investment: "$20M - $100M",
      impact: "Reduce post-harvest losses by 50%",
      timeline: "2-3 years",
      color: "bg-ethiopian-blue",
      details: [
        "Refrigerated storage facilities",
        "Cold transport vehicles",
        "Processing centers",
        "Quality control systems"
      ]
    },
    {
      icon: Wifi,
      title: "Digital Export Platforms",
      description: "Technology solutions for export management and market access",
      investment: "$5M - $25M",
      impact: "Connect 10,000+ exporters",
      timeline: "1-2 years",
      color: "bg-ethiopian-green",
      details: [
        "Export management software",
        "Market intelligence platforms",
        "Digital payment systems",
        "Blockchain traceability"
      ]
    },
    {
      icon: GraduationCap,
      title: "Capacity Building Programs",
      description: "Training and education initiatives for export professionals",
      investment: "$2M - $10M",
      impact: "Train 5,000+ professionals",
      timeline: "1-3 years",
      color: "bg-ethiopian-yellow",
      details: [
        "Export training programs",
        "Quality certification courses",
        "Digital literacy training",
        "Leadership development"
      ]
    }
  ]

  const supportAreas = [
    {
      title: "Technical Assistance",
      description: "Provide expertise in export procedures, quality standards, and market access",
      icon: Target,
      examples: ["Export documentation training", "Quality certification support", "Market research assistance"]
    },
    {
      title: "Capacity Building",
      description: "Support training programs and skill development for export professionals",
      icon: GraduationCap,
      examples: ["Professional development programs", "Technical skills training", "Leadership workshops"]
    },
    {
      title: "Policy Advocacy",
      description: "Support policy research and advocacy for improved export environment",
      icon: Users,
      examples: ["Policy research funding", "Stakeholder engagement", "Regulatory reform support"]
    },
    {
      title: "Financial Support",
      description: "Provide grants and funding for export development initiatives",
      icon: Heart,
      examples: ["Startup grants", "Equipment financing", "Working capital support"]
    }
  ]

  const successMetrics = [
    { label: "Export Revenue Growth", value: "45%", description: "Target increase in export earnings" },
    { label: "Jobs Created", value: "50,000", description: "Direct and indirect employment" },
    { label: "Farmers Benefited", value: "100,000", description: "Smallholder farmers supported" },
    { label: "Markets Accessed", value: "25", description: "New international markets" }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Investors & NGO Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in transforming Ethiopia's export sector. Discover high-impact investment 
            opportunities and partnership programs that drive sustainable economic growth.
          </p>
        </motion.div>

        {/* Investment Opportunities */}
        <section className="mb-20">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              High-Impact Investment Opportunities
            </h2>
            <p className="text-lg text-gray-600">
              Strategic investments that can transform Ethiopia's export landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {investmentAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${area.color}`}>
                        <area.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {area.title}
                        </CardTitle>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="secondary" className="text-xs">
                            {area.investment}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {area.timeline}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {area.description}
                    </p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-ethiopian-green font-semibold text-sm">
                        Expected Impact: {area.impact}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Components:</h4>
                    <ul className="space-y-2">
                      {area.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-ethiopian-green rounded-full flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-gradient-to-r from-ethiopian-green to-ethiopian-blue hover:from-ethiopian-green/90 hover:to-ethiopian-blue/90">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Success Metrics */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center mb-4">
                Our Impact Goals
              </CardTitle>
              <p className="text-gray-600 text-center">
                Measurable outcomes we aim to achieve through strategic partnerships
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {successMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-3xl font-bold text-ethiopian-green mb-2">
                        {metric.value}
                      </div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {metric.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {metric.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* NGO Support Areas */}
        <section className="mb-20">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How NGOs Can Help
            </h2>
            <p className="text-lg text-gray-600">
              Multiple ways for NGOs to support Ethiopia's export development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-ethiopian-green to-ethiopian-blue">
                        <area.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {area.title}
                      </CardTitle>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {area.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {area.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-ethiopian-green rounded-full flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partnership CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-ethiopian-green to-ethiopian-blue text-white">
            <CardContent className="p-12 text-center">
              <TrendingUp className="h-16 w-16 mx-auto mb-6 text-green-100" />
              <h2 className="text-4xl font-bold mb-6">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Join us in transforming Ethiopia's export sector. Whether you're an investor 
                looking for high-impact opportunities or an NGO seeking meaningful partnerships, 
                we have the right program for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-ethiopian-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                >
                  Schedule a Meeting
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-ethiopian-green px-8 py-4 text-lg font-semibold"
                >
                  Download Investment Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Get in Touch
              </CardTitle>
              <p className="text-gray-600 text-center">
                Ready to discuss partnership opportunities? Contact our team
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <DollarSign className="h-8 w-8 text-ethiopian-green mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Investment Inquiries</h3>
                  <p className="text-gray-600">invest@hisabfinance.et</p>
                  <p className="text-gray-600">+251 11 123 4567</p>
                </div>
                <div>
                  <Heart className="h-8 w-8 text-ethiopian-green mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">NGO Partnerships</h3>
                  <p className="text-gray-600">partnerships@hisabfinance.et</p>
                  <p className="text-gray-600">+251 11 123 4568</p>
                </div>
                <div>
                  <Users className="h-8 w-8 text-ethiopian-green mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
                  <p className="text-gray-600">info@hisabfinance.et</p>
                  <p className="text-gray-600">+251 11 123 4569</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default InvestorNGO