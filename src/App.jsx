import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Menu from './components/Menu'
import Location from './components/Location'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-naan-cream">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Location />
      </main>
      <Footer />
    </div>
  )
}
