import React from 'react';
import { MapPin, Home, Users, Video, Settings } from 'lucide-react';
import { ViewType } from '../App';

interface BottomNavigationProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: 'explore', icon: MapPin, label: 'Explore' },
    { id: 'feed', icon: Home, label: 'Home' },
    { id: 'friends', icon: Users, label: 'Friends' },
    { id: 'reels', icon: Video, label: 'Reels' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as ViewType)}
              className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-black text-white scale-110'
                  : 'text-gray-500 hover:text-black hover:bg-gray-100'
              }`}
            >
              <Icon className={`w-6 h-6 mb-1 ${isActive ? 'stroke-2' : 'stroke-1.5'}`} />
              <span className={`text-xs font-medium ${isActive ? 'font-semibold' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;