import React, { useState } from 'react';
import { MapPin, Shield, X, Check, AlertCircle } from 'lucide-react';

interface AddressVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (address: string, duration: string) => void;
}

const AddressVerificationModal: React.FC<AddressVerificationModalProps> = ({ 
  isOpen, 
  onClose, 
  onVerify 
}) => {
  const [address, setAddress] = useState('');
  const [duration, setDuration] = useState('');
  const [step, setStep] = useState(1);

  const durationOptions = [
    { value: '6months', label: '6 months - 1 year', badge: 'New Local', color: 'bg-gray-100 text-gray-700' },
    { value: '1year', label: '1 - 2 years', badge: 'Local', color: 'bg-gray-200 text-gray-800' },
    { value: '3years', label: '3 - 5 years', badge: 'Established Local', color: 'bg-gray-300 text-gray-900' },
    { value: '5years', label: '5+ years', badge: 'Local Expert', color: 'bg-gray-800 text-white' },
    { value: '10years', label: '10+ years', badge: 'Neighborhood Legend', color: 'bg-black text-white' },
  ];

  const handleSubmit = () => {
    if (address && duration) {
      onVerify(address, duration);
      onClose();
      setStep(1);
      setAddress('');
      setDuration('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-black rounded-xl">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-black">Verify Your Address</h2>
              <p className="text-sm text-gray-600">Become a trusted local reviewer</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              {/* Why Verify */}
              <div className="bg-gray-50 rounded-2xl p-4">
                <h3 className="font-semibold text-black mb-2">Why verify your address?</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-black" />
                    <span>Get a "Local Expert" badge on your reviews</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-black" />
                    <span>Your reviews rank higher for nearby restaurants</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-black" />
                    <span>Help others discover great local spots</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-black" />
                    <span>Build trust in the community</span>
                  </li>
                </ul>
              </div>

              {/* Address Input */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Your Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your street address"
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  We only use this to verify you're a local resident. Your exact address is never shared.
                </p>
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!address}
                className="w-full bg-black text-white py-3 px-4 rounded-2xl font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-black mb-2">How long have you lived in this area?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  This helps us determine your local expertise level
                </p>
              </div>

              <div className="space-y-3">
                {durationOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setDuration(option.value)}
                    className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                      duration === option.value
                        ? 'border-black bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-black">{option.label}</div>
                        <div className="text-sm text-gray-600">Earn the "{option.badge}" badge</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${option.color}`}>
                        {option.badge}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!duration}
                  className="flex-1 bg-black text-white py-3 px-4 rounded-2xl font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Verify Address
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Privacy Notice */}
        <div className="px-6 pb-6">
          <div className="flex items-start space-x-2 p-3 bg-gray-50 rounded-xl">
            <AlertCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
            <div className="text-xs text-gray-700">
              <strong>Privacy:</strong> We use your address only for verification. It's never shared publicly or with other users. Only your neighborhood/area is shown on your profile.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressVerificationModal;