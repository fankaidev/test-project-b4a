import { useLocation, useNavigate } from 'react-router-dom'
import { 
  HomeIcon, 
  ShoppingBagIcon, 
  CalendarDaysIcon, 
  UserGroupIcon, 
  UserIcon 
} from '@heroicons/react/24/outline'
import {
  HomeIcon as HomeIconSolid,
  ShoppingBagIcon as ShoppingBagIconSolid,
  CalendarDaysIcon as CalendarDaysIconSolid,
  UserGroupIcon as UserGroupIconSolid,
  UserIcon as UserIconSolid
} from '@heroicons/react/24/solid'

const Layout = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const navItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: HomeIcon, 
      activeIcon: HomeIconSolid 
    },
    { 
      path: '/marketplace', 
      label: 'Marketplace', 
      icon: ShoppingBagIcon, 
      activeIcon: ShoppingBagIconSolid 
    },
    { 
      path: '/calendar', 
      label: 'Calendar', 
      icon: CalendarDaysIcon, 
      activeIcon: CalendarDaysIconSolid 
    },
    { 
      path: '/squad', 
      label: 'Squad', 
      icon: UserGroupIcon, 
      activeIcon: UserGroupIconSolid 
    },
    { 
      path: '/profile', 
      label: 'Profile', 
      icon: UserIcon, 
      activeIcon: UserIconSolid 
    }
  ]

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pb-20">
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-mobile card-bg border-t border-gray-200 px-6 py-2">
        <div className="flex justify-between items-center">
          {navItems.map((item) => {
            const Icon = isActive(item.path) ? item.activeIcon : item.icon
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="nav-item"
              >
                <Icon 
                  className={`w-6 h-6 ${
                    isActive(item.path) ? 'primary-text' : 'secondary-text'
                  }`} 
                />
                <span 
                  className={`text-xs font-normal ${
                    isActive(item.path) ? 'primary-text' : 'secondary-text'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default Layout