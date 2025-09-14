import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  MapPin, 
  Heart, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Moon,
  Globe,
  Award
} from 'lucide-react';
import AddressVerificationModal from './AddressVerificationModal';

const SettingsView: React.FC = () => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [localBadge, setLocalBadge] = useState('');

  const handleAddressVerification = (address: string, duration: string) => {
    setIsVerified(true);
    const badges = {
      '6months': 'New Local',
      '1year': 'Local',
      '3years': 'Established Local',
      '5years': 'Local Expert',
      '10years': 'Neighborhood Legend'
    };
    setLocalBadge(badges[duration as keyof typeof badges] || 'Local');
  };

  const settingsGroups = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Edit Profile', description: 'Update your personal information' },
        { icon: Bell, label: 'Notifications', description: 'Manage your notification preferences' },
        { icon: Shield, label: 'Privacy & Security', description: 'Control your privacy settings' },
      ]
    },
    {
      title: 'Local Status',
      items: [
        { 
          icon: Award, 
          label: isVerified ? 'Address Verified' : 'Verify Your Address', 
          description: isVerified ? `You're a verified ${localBadge}` : 'Become a trusted local reviewer',
          action: () => setShowAddressModal(true),
          verified: isVerified
        },
      ]
    },
    {
      title: 'Preferences',
      items: [
        { icon: MapPin, label: 'Location Services', description: 'Manage location permissions' },
        { icon: Heart, label: 'Saved Places', description: 'View your favorite restaurants' },
        { icon: Moon, label: 'Dark Mode', description: 'Toggle dark theme', toggle: true },
        { icon: Globe, label: 'Language', description: 'English (US)' },
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', description: 'Get help and support' },
        { icon: LogOut, label: 'Sign Out', description: 'Sign out of your account', danger: true },
      ]
    }
  ];

  return (
    <>
      <div className="px-4 py-6 max-w-md mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              {isVerified && (
                <div className="absolute -bottom-1 -right-1 bg-black text-white p-1 rounded-full">
                  <Shield className="w-3 h-3" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-bold text-black">Sarah Chen</h2>
                {isVerified && (
                  <div className="bg-black text-white px-2 py-1 rounded-full text-xs font-medium">
                    {localBadge}
                  </div>
                )}
              </div>
              <p className="text-gray-600">@sarahc</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                <span>87 Posts</span>
                <span>1.2k Followers</span>
                <span>324 Following</span>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Groups */}
        <div className="space-y-6">
          {settingsGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-lg font-bold text-black mb-3 px-2">{group.title}</h3>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                {group.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={itemIndex}
                      onClick={item.action}
                      className={`w-full flex items-center space-x-4 p-4 hover:bg-gray-50 transition-colors ${
                        itemIndex !== group.items.length - 1 ? 'border-b border-gray-100' : ''
                      } ${item.danger ? 'hover:bg-red-50' : ''}`}
                    >
                      <div className={`p-2 rounded-xl ${
                        item.danger 
                          ? 'bg-red-100 text-red-600' 
                          : item.verified
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-black'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className={`font-semibold ${
                          item.danger ? 'text-red-600' : 'text-black'
                        }`}>
                          {item.label}
                        </h4>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                      {item.toggle ? (
                        <div className="relative">
                          <input
                            type="checkbox"
                            className="sr-only"
                            defaultChecked={false}
                          />
                          <div className="w-11 h-6 bg-gray-200 rounded-full shadow-inner"></div>
                          <div className="absolute w-4 h-4 bg-white rounded-full shadow left-1 top-1 transition-transform"></div>
                        </div>
                      ) : (
                        <ChevronRight className={`w-5 h-5 ${
                          item.danger ? 'text-red-400' : 'text-gray-400'
                        }`} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* App Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">Savor v1.0.0</p>
          <p className="text-xs text-gray-400 mt-1">Made with ❤️ for food lovers</p>
        </div>
      </div>

      <AddressVerificationModal
        isOpen={showAddressModal}
        onClose={() => setShowAddressModal(false)}
        onVerify={handleAddressVerification}
      />
    </>
  );
};

export default SettingsView;