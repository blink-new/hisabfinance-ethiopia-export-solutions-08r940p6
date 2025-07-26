import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { blink } from './blink/client'
import { Toaster } from './components/ui/toaster'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Homepage from './pages/Homepage'
import Problems from './pages/Problems'
import SolutionsHub from './pages/SolutionsHub'
import ExporterStories from './pages/ExporterStories'
import JoinUs from './pages/JoinUs'
import InvestorNGO from './pages/InvestorNGO'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const unsubscribe = blink.auth.onAuthStateChanged((state) => {
        setUser(state?.user || null)
        setLoading(state?.isLoading || false)
      })
      return unsubscribe
    } catch (error) {
      console.error('Auth state change error:', error)
      setLoading(false)
    }
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header user={user} />
        <main className="min-h-screen pt-16">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/solutions" element={<SolutionsHub />} />
            <Route path="/stories" element={<ExporterStories />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/investors" element={<InvestorNGO />} />
            <Route path="*" element={<Homepage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  )
}

export default App