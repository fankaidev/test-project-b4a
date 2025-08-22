import { useState } from 'react'
import { 
  MagnifyingGlassIcon, 
  MapPinIcon,
  CalendarIcon,
  UsersIcon,
  ViewColumnsIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline'

const ConventionCalendar = () => {
  const [viewMode, setViewMode] = useState('list') // 'list' or 'calendar'
  
  const conventions = [
    {
      id: 1,
      name: "Anime Expo West",
      location: "Los Angeles Convention Center",
      date: "March 15-17, 2024",
      attendees: "2,341",
      status: "Going",
      image: "https://static-dev.paraflowcontent.com/public/resource/image/convention1.jpg",
      tags: ["Anime", "Cosplay", "Gaming"]
    },
    {
      id: 2,
      name: "Comic-Con International",
      location: "San Diego Convention Center", 
      date: "March 22-25, 2024",
      attendees: "5,678",
      status: "Interested",
      image: "https://static-dev.paraflowcontent.com/public/resource/image/convention2.jpg",
      tags: ["Comics", "Movies", "TV Shows"]
    },
    {
      id: 3,
      name: "WonderCon Anaheim",
      location: "Anaheim Convention Center",
      date: "April 1-3, 2024", 
      attendees: "3,247",
      status: null,
      image: "https://static-dev.paraflowcontent.com/public/resource/image/convention3.jpg",
      tags: ["Comics", "Pop Culture"]
    },
    {
      id: 4,
      name: "Dragon Con",
      location: "Atlanta Downtown",
      date: "April 8-11, 2024",
      attendees: "4,892",
      status: "Going",
      image: "https://static-dev.paraflowcontent.com/public/resource/image/convention4.jpg", 
      tags: ["Fantasy", "Sci-Fi", "Gaming"]
    }
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'Going': return 'primary-bg text-white'
      case 'Interested': return 'bg-yellow-200 text-yellow-800'
      default: return 'card-bg secondary-text'
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="card-bg px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Conventions</h1>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'list' ? 'primary-bg' : 'card-bg'
              }`}
            >
              <ViewColumnsIcon className={`w-5 h-5 ${
                viewMode === 'list' ? 'text-white' : 'secondary-text'
              }`} />
            </button>
            <button 
              onClick={() => setViewMode('calendar')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'calendar' ? 'primary-bg' : 'card-bg'
              }`}
            >
              <Squares2X2Icon className={`w-5 h-5 ${
                viewMode === 'calendar' ? 'text-white' : 'secondary-text'
              }`} />
            </button>
          </div>
        </div>
        
        {/* Search and Location */}
        <div className="space-y-3">
          <div className="flex items-center card-bg rounded-xl px-4 py-3">
            <MagnifyingGlassIcon className="w-4 h-4 secondary-text mr-3" />
            <input 
              type="text" 
              placeholder="Search conventions..."
              className="flex-1 bg-transparent text-sm outline-none"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <MapPinIcon className="w-4 h-4 secondary-text mr-2" />
              <span className="text-sm secondary-text">Los Angeles, CA</span>
            </div>
            <button className="text-sm primary-text font-medium">Change</button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 py-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {['All', 'This Month', 'Anime', 'Comics', 'Gaming', 'Fantasy'].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-full text-sm whitespace-nowrap card-bg secondary-text secondary-button"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Convention List */}
      <div className="px-6 space-y-4 pb-8">
        {conventions.map((convention) => (
          <div 
            key={convention.id} 
            className="card-bg p-4 rounded-2xl product-card"
          >
            {/* Event Image */}
            <div className="w-full h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">{convention.name}</span>
            </div>
            
            {/* Event Info */}
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold mb-1">{convention.name}</h3>
                <div className="flex items-center secondary-text text-sm mb-1">
                  <MapPinIcon className="w-4 h-4 mr-1" />
                  {convention.location}
                </div>
                <div className="flex items-center secondary-text text-sm">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  {convention.date}
                </div>
              </div>

              {/* Tags */}
              <div className="flex gap-2">
                {convention.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-xs rounded-full secondary-text">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center secondary-text text-sm">
                  <UsersIcon className="w-4 h-4 mr-1" />
                  {convention.attendees} attending
                </div>
                
                <div className="flex items-center gap-2">
                  {convention.status && (
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(convention.status)}`}>
                      {convention.status}
                    </span>
                  )}
                  {!convention.status && (
                    <button className="primary-bg text-white px-4 py-2 rounded-full text-xs font-medium primary-button">
                      RSVP
                    </button>
                  )}
                  <button className="card-bg secondary-text px-3 py-2 rounded-full text-xs font-medium secondary-button">
                    Squad Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ConventionCalendar