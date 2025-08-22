import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  MagnifyingGlassIcon, 
  AdjustmentsHorizontalIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

const Marketplace = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filters = ['Popular', 'All', 'Buy', 'Rent', 'New', 'Like New']
  
  const products = [
    {
      id: 1,
      title: "Magical Girl Sailor Uniform",
      price: "$89",
      type: "RENT",
      typeColor: "primary-text",
      image: "https://static-dev.paraflowcontent.com/public/resource/image/4dfcd807-775c-4989-985e-66d154161dd0.jpeg",
      liked: false
    },
    {
      id: 2,
      title: "Witch Academy Uniform Set",
      price: "$156", 
      type: "BUY",
      typeColor: "secondary-text",
      image: "https://static-dev.paraflowcontent.com/public/resource/image/50b83e66-7353-482e-8887-9cb5ea5a2546.jpeg",
      liked: false
    },
    {
      id: 3,
      title: "Gothic Lolita Dress",
      price: "$124",
      type: "RENT", 
      typeColor: "primary-text",
      image: "https://static-dev.paraflowcontent.com/public/resource/image/4dfcd807-775c-4989-985e-66d154161dd0.jpeg",
      liked: true
    },
    {
      id: 4,
      title: "Victorian Steampunk Outfit",
      price: "$203",
      type: "BUY",
      typeColor: "secondary-text", 
      image: "https://static-dev.paraflowcontent.com/public/resource/image/50b83e66-7353-482e-8887-9cb5ea5a2546.jpeg",
      liked: false
    },
    {
      id: 5,
      title: "Anime Character Costume",
      price: "$67",
      type: "RENT",
      typeColor: "primary-text",
      image: "https://static-dev.paraflowcontent.com/public/resource/image/4dfcd807-775c-4989-985e-66d154161dd0.jpeg",
      liked: false
    },
    {
      id: 6,
      title: "Fantasy Warrior Armor",
      price: "$245",
      type: "BUY",
      typeColor: "secondary-text",
      image: "https://static-dev.paraflowcontent.com/public/resource/image/50b83e66-7353-482e-8887-9cb5ea5a2546.jpeg",
      liked: true
    }
  ]

  const [productList, setProductList] = useState(products)

  const toggleLike = (productId) => {
    setProductList(prev => 
      prev.map(product => 
        product.id === productId 
          ? { ...product, liked: !product.liked }
          : product
      )
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="card-bg fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-mobile z-10 px-6 pt-12 pb-4">
        {/* Search Bar */}
        <div className="flex items-center mb-4 gap-3">
          <div className="flex-1 card-bg rounded-xl px-4 py-3 flex items-center">
            <MagnifyingGlassIcon className="w-4 h-4 secondary-text mr-3" />
            <input 
              type="text" 
              placeholder="Search cosplay items..."
              className="flex-1 bg-transparent text-xs outline-none"
            />
          </div>
          <button className="card-bg w-10 h-10 rounded-xl flex items-center justify-center secondary-button">
            <AdjustmentsHorizontalIcon className="w-5 h-5 secondary-text" />
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                activeFilter === filter
                  ? 'primary-bg text-white'
                  : 'card-bg secondary-text hover:brightness-95'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="pt-40 px-6 pb-8">
        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4">
          {productList.map((product) => (
            <div key={product.id} className="relative mb-2">
              <div 
                className="product-card"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-xl"
                />
                
                {/* Type Badge */}
                <div className="absolute top-2 right-2 card-bg px-2 py-1 rounded-full">
                  <span className={`text-xs font-medium ${product.typeColor}`}>
                    {product.type}
                  </span>
                </div>

                {/* Like Button */}
                <button 
                  className="absolute top-2 left-2 card-bg w-6 h-6 rounded-full flex items-center justify-center secondary-button"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleLike(product.id)
                  }}
                >
                  {product.liked ? (
                    <HeartIconSolid className="w-4 h-4 text-red-500" />
                  ) : (
                    <HeartIcon className="w-4 h-4 secondary-text" />
                  )}
                </button>
              </div>

              {/* Product Info */}
              <div className="mt-2">
                <h3 className="text-sm font-medium mb-1 line-clamp-2">{product.title}</h3>
                <p className="text-lg font-semibold primary-text">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 primary-bg w-14 h-14 rounded-full flex items-center justify-center shadow-lg primary-button">
        <span className="text-white text-2xl">+</span>
      </button>
    </div>
  )
}

export default Marketplace