import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  MagnifyingGlassIcon, 
  PlusIcon,
  UsersIcon,
  MapPinIcon,
  CalendarIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline'

const SquadUp = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('my-squads')

  const mySquads = [
    {
      id: 1,
      name: "Attack on Titan Squad",
      members: 5,
      maxMembers: 8,
      convention: "Anime Expo West",
      date: "Mar 15",
      avatar: "https://static-dev.paraflowcontent.com/public/resource/image/8b648090-df44-4625-8575-86558051a99e.jpeg",
      isOwner: true,
      lastMessage: "Great! Can't wait to see everyone's costumes",
      lastMessageTime: "2m"
    },
    {
      id: 2,
      name: "Sailor Moon Group",
      members: 4,
      maxMembers: 5, 
      convention: "Comic-Con",
      date: "Mar 22",
      avatar: "https://static-dev.paraflowcontent.com/public/resource/image/sailor-squad.jpg",
      isOwner: false,
      lastMessage: "Meeting point confirmed - Main entrance at 10am",
      lastMessageTime: "1h"
    }
  ]

  const discoveredSquads = [
    {
      id: 3,
      name: "Demon Slayer Corps",
      members: 3,
      maxMembers: 6,
      convention: "WonderCon",
      date: "Apr 1", 
      description: "Looking for Zenitsu and Inosuke cosplayers!",
      tags: ["Demon Slayer", "Group Cosplay"],
      avatar: "https://static-dev.paraflowcontent.com/public/resource/image/demon-slayer.jpg"
    },
    {
      id: 4,
      name: "Marvel Avengers",
      members: 7,
      maxMembers: 10,
      convention: "Dragon Con",
      date: "Apr 8",
      description: "Assemble! We need more heroes for our photoshoot.",
      tags: ["Marvel", "Superheroes"],
      avatar: "https://static-dev.paraflowcontent.com/public/resource/image/avengers.jpg"
    }
  ]

  const invitations = [
    {
      id: 5,
      name: "JoJo's Bizarre Adventure",
      invitedBy: "@jojo_fan",
      members: 2,
      maxMembers: 4,
      message: "You'd make a perfect Giorno! Join us?",
      avatar: "https://static-dev.paraflowcontent.com/public/resource/image/jojo.jpg"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="card-bg px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Squad Up</h1>
          <button className="primary-bg w-10 h-10 rounded-xl flex items-center justify-center primary-button">
            <PlusIcon className="w-5 h-5 text-white" />
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="flex items-center card-bg rounded-xl px-4 py-3 mb-4">
          <MagnifyingGlassIcon className="w-4 h-4 secondary-text mr-3" />
          <input 
            type="text" 
            placeholder="Search squads..."
            className="flex-1 bg-transparent text-sm outline-none"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          {[
            { id: 'my-squads', label: 'My Squads' },
            { id: 'discover', label: 'Discover' }, 
            { id: 'invitations', label: 'Invitations' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'primary-bg text-white'
                  : 'card-bg secondary-text hover:brightness-95'
              }`}
            >
              {tab.label}
              {tab.id === 'invitations' && invitations.length > 0 && (
                <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-1 min-w-[16px] h-4 flex items-center justify-center">
                  {invitations.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 space-y-4 pb-8">
        {/* My Squads Tab */}
        {activeTab === 'my-squads' && (
          <div className="space-y-4">
            {mySquads.map((squad) => (
              <div 
                key={squad.id} 
                className="card-bg p-4 rounded-2xl product-card"
                onClick={() => navigate(`/chat/${squad.id}`)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <img 
                      src={squad.avatar} 
                      alt={squad.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <div className="flex items-center">
                        <h3 className="text-sm font-medium">{squad.name}</h3>
                        {squad.isOwner && (
                          <span className="ml-2 px-2 py-0.5 primary-bg text-white text-xs rounded-full">Owner</span>
                        )}
                      </div>
                      <div className="flex items-center secondary-text text-xs mt-1">
                        <UsersIcon className="w-3 h-3 mr-1" />
                        {squad.members}/{squad.maxMembers} members
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center secondary-text text-xs">
                      <CalendarIcon className="w-3 h-3 mr-1" />
                      {squad.date}
                    </div>
                    <div className="text-xs secondary-text mt-1">{squad.convention}</div>
                  </div>
                </div>
                
                <div className="card-bg p-3 rounded-xl">
                  <div className="flex items-center justify-between">
                    <p className="text-xs secondary-text flex-1 mr-3">{squad.lastMessage}</p>
                    <span className="text-xs secondary-text">{squad.lastMessageTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Discover Tab */}
        {activeTab === 'discover' && (
          <div className="space-y-4">
            {discoveredSquads.map((squad) => (
              <div key={squad.id} className="card-bg p-4 rounded-2xl">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <img 
                      src={squad.avatar} 
                      alt={squad.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <h3 className="text-sm font-medium">{squad.name}</h3>
                      <div className="flex items-center secondary-text text-xs mt-1">
                        <UsersIcon className="w-3 h-3 mr-1" />
                        {squad.members}/{squad.maxMembers} members
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center secondary-text text-xs">
                      <CalendarIcon className="w-3 h-3 mr-1" />
                      {squad.date}
                    </div>
                    <div className="text-xs secondary-text mt-1">{squad.convention}</div>
                  </div>
                </div>
                
                <p className="text-sm mb-3">{squad.description}</p>
                
                <div className="flex gap-2 mb-3">
                  {squad.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-xs rounded-full secondary-text">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full primary-bg text-white py-2 rounded-full text-sm font-medium primary-button">
                  Request to Join
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Invitations Tab */}
        {activeTab === 'invitations' && (
          <div className="space-y-4">
            {invitations.map((invitation) => (
              <div key={invitation.id} className="bg-yellow-200 p-4 rounded-2xl">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <img 
                      src={invitation.avatar} 
                      alt={invitation.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <h3 className="text-sm font-medium">{invitation.name}</h3>
                      <p className="text-xs secondary-text">by {invitation.invitedBy}</p>
                      <div className="flex items-center secondary-text text-xs mt-1">
                        <UsersIcon className="w-3 h-3 mr-1" />
                        {invitation.members}/{invitation.maxMembers} members
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm mb-4">{invitation.message}</p>
                
                <div className="flex gap-2">
                  <button className="flex-1 primary-bg text-white py-2 rounded-full text-sm font-medium primary-button">
                    Accept
                  </button>
                  <button className="flex-1 card-bg secondary-text py-2 rounded-full text-sm font-medium secondary-button">
                    Decline
                  </button>
                </div>
              </div>
            ))}
            
            {invitations.length === 0 && (
              <div className="text-center py-8">
                <UsersIcon className="w-12 h-12 secondary-text mx-auto mb-3" />
                <p className="secondary-text">No pending invitations</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default SquadUp