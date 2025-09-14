import React, { useState } from 'react';
import Header from './components/Header';
import FeedView from './components/FeedView';
import ExploreView from './components/ExploreView';
import FriendsView from './components/FriendsView';
import ReelsView from './components/ReelsView';
import SettingsView from './components/SettingsView';
import RestaurantDetail from './components/RestaurantDetail';
import BottomNavigation from './components/BottomNavigation';

export type ViewType = 'feed' | 'explore' | 'friends' | 'reels' | 'settings' | 'restaurant';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('feed');
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null);

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
  };

  const handleRestaurantSelect = (restaurant: any) => {
    setSelectedRestaurant(restaurant);
    setCurrentView('restaurant');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <main className="pt-16">
        {currentView === 'feed' && (
          <FeedView onRestaurantSelect={handleRestaurantSelect} />
        )}
        {currentView === 'explore' && (
          <ExploreView onRestaurantSelect={handleRestaurantSelect} />
        )}
        {currentView === 'friends' && <FriendsView />}
        {currentView === 'reels' && <ReelsView />}
        {currentView === 'settings' && <SettingsView />}
        {currentView === 'restaurant' && selectedRestaurant && (
          <RestaurantDetail 
            restaurant={selectedRestaurant} 
            onBack={() => setCurrentView('feed')} 
          />
        )}
      </main>

      <BottomNavigation 
        currentView={currentView} 
        onViewChange={handleViewChange} 
      />
    </div>
  );
}

export default App;