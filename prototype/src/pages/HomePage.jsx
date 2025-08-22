import { useNavigate } from 'react-router-dom'
import { 
  MagnifyingGlassIcon, 
  BellIcon,
  CalendarIcon,
  UsersIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const HomePage = () => {
  const navigate = useNavigate()

  const upcomingEvents = [
    {
      id: 1,
      name: "Anime Expo West",
      location: "Los Angeles Convention Center",
      date: "MAR 15",
      attendees: "2,341 attending",
      status: "Interested",
      color: "bg-yellow-200"
    },
    {
      id: 2,
      name: "Comic-Con International", 
      location: "San Diego Convention Center",
      date: "MAR 22",
      attendees: "5,678 attending",
      status: "View Details",
      color: "bg-yellow-200"
    }
  ]

  const squadInvitation = {
    name: "Attack on Titan Squad",
    author: "@squad_leader",
    description: "Join our group cosplay for the upcoming convention! We need a Mikasa.",
    status: "Pending",
    avatar: "https://static-dev.paraflowcontent.com/public/resource/image/8b648090-df44-4625-8575-86558051a99e.jpeg"
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="card-bg px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Good morning! 👋</h1>
          <BellIcon className="w-6 h-6 secondary-text" />
        </div>
        
        {/* Search Bar */}
        <div className="flex items-center card-bg rounded-xl px-4 py-3 mb-4">
          <MagnifyingGlassIcon className="w-4 h-4 secondary-text mr-3" />
          <input 
            type="text" 
            placeholder="Search cosplay items, events..."
            className="flex-1 bg-transparent text-sm outline-none"
            onClick={() => navigate('/marketplace')}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 space-y-6">
        {/* Quick Access */}
        <section>
          <h2 className="text-lg font-medium mb-4">Quick Access</h2>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => navigate('/marketplace')}
              className="card-bg p-4 rounded-2xl text-left secondary-button"
            >
              <div className="primary-bg w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                <span className="text-2xl">🛍️</span>
              </div>
              <h3 className="font-medium text-sm">Marketplace</h3>
              <p className="text-xs secondary-text">Buy, sell & rent costumes</p>
            </button>
            
            <button 
              onClick={() => navigate('/calendar')}
              className="card-bg p-4 rounded-2xl text-left secondary-button"
            >
              <div className="primary-bg w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                <CalendarIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-sm">Conventions</h3>
              <p className="text-xs secondary-text">Discover upcoming events</p>
            </button>
          </div>
        </section>

        {/* Upcoming Events */}
        <section>
          <h2 className="text-lg font-medium mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id} 
                className="card-bg p-4 rounded-2xl product-card"
                onClick={() => navigate('/calendar')}
              >
                <div className="flex items-start">
                  <div className={`${event.color} mr-3 p-2 rounded-xl`}>
                    <div className="text-xs font-medium text-center">
                      <div>{event.date.split(' ')[0]}</div>
                      <div className="text-sm font-medium">{event.date.split(' ')[1]}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium mb-1">{event.name}</h3>
                    <p className="text-xs secondary-text mb-2">{event.location}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <UsersIcon className="w-4 h-4 secondary-text" />
                        <span className="ml-1 text-xs secondary-text">{event.attendees}</span>
                      </div>
                      <div className="card-bg px-2 py-1 rounded-full">
                        <span className={`text-xs ${event.status === 'Interested' ? 'primary-text' : 'secondary-text'}`}>
                          {event.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Squad Invitations */}
        <section className="pb-8">
          <h2 className="text-lg font-medium mb-4">Squad Invitations</h2>
          <div className="bg-yellow-200 p-4 rounded-2xl">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <img 
                  src={squadInvitation.avatar} 
                  alt="Squad leader"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h3 className="text-xs font-medium">{squadInvitation.name}</h3>
                  <span className="text-xs secondary-text">{squadInvitation.author}</span>
                </div>
              </div>
              <div className="card-bg px-2 py-1 rounded-full flex items-center">
                <ClockIcon className="w-3 h-3 primary-text mr-1" />
                <span className="text-xs primary-text">{squadInvitation.status}</span>
              </div>
            </div>
            <p className="text-xs mb-3">{squadInvitation.description}</p>
            <div className="flex gap-2">
              <button className="flex-1 primary-bg text-white text-xs font-medium py-2 rounded-full primary-button">
                Accept
              </button>
              <button className="flex-1 card-bg secondary-text text-xs font-medium py-2 rounded-full secondary-button">
                Decline
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage