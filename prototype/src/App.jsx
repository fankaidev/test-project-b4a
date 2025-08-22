import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import Marketplace from './pages/Marketplace'
import ConventionCalendar from './pages/ConventionCalendar'
import SquadUp from './pages/SquadUp'
import Profile from './pages/Profile'
import ProductDetail from './pages/ProductDetail'
import Chat from './pages/Chat'
import './index.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/calendar" element={<ConventionCalendar />} />
            <Route path="/squad" element={<SquadUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/chat/:id?" element={<Chat />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  )
}

export default App
