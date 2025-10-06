import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationScheduler = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [currentStep, setCurrentStep] = useState(1);

  const consultationTypes = [
    { value: 'career', label: 'Career Strategy Session', description: 'For job seekers and career changers' },
    { value: 'hiring', label: 'Hiring Solutions Consultation', description: 'For employers and hiring managers' },
    { value: 'executive', label: 'Executive Search Discussion', description: 'For C-level and senior positions' },
    { value: 'general', label: 'General Inquiry', description: 'For other recruitment needs' }
  ];

  const availableDates = [
    { value: '2025-01-07', label: 'Monday, January 7th' },
    { value: '2025-01-08', label: 'Tuesday, January 8th' },
    { value: '2025-01-09', label: 'Wednesday, January 9th' },
    { value: '2025-01-10', label: 'Thursday, January 10th' },
    { value: '2025-01-13', label: 'Monday, January 13th' }
  ];

  const availableTimes = [
    { value: '09:00', label: '9:00 AM EST' },
    { value: '10:00', label: '10:00 AM EST' },
    { value: '11:00', label: '11:00 AM EST' },
    { value: '14:00', label: '2:00 PM EST' },
    { value: '15:00', label: '3:00 PM EST' },
    { value: '16:00', label: '4:00 PM EST' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Mock submission
    alert('Consultation scheduled successfully! You will receive a confirmation email shortly.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Schedule Your Consultation</h2>
            <p className="text-muted-foreground">Step {currentStep} of 3</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
          >
            <Icon name="X" size={24} />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="flex items-center space-x-4">
            {[1, 2, 3]?.map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {step < currentStep ? <Icon name="Check" size={16} /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step < currentStep ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Step 1: Consultation Type */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What type of consultation do you need?
                </h3>
                <Select
                  label="Consultation Type"
                  options={consultationTypes}
                  value={selectedType}
                  onChange={setSelectedType}
                  placeholder="Select consultation type"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
                <Input
                  label="Company (Optional)"
                  type="text"
                  name="company"
                  value={formData?.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                />
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Choose your preferred date and time
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Select
                    label="Preferred Date"
                    options={availableDates}
                    value={selectedDate}
                    onChange={setSelectedDate}
                    placeholder="Select a date"
                    required
                  />
                  <Select
                    label="Preferred Time"
                    options={availableTimes}
                    value={selectedTime}
                    onChange={setSelectedTime}
                    placeholder="Select a time"
                    required
                  />
                </div>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" size={20} color="var(--color-primary)" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium text-foreground mb-1">Time Zone Information</p>
                    <p>All times are shown in Eastern Standard Time (EST). We'll send you a calendar invitation with the correct time zone conversion.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Additional Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Tell us more about your needs
                </h3>
                <Input
                  label="Message (Optional)"
                  type="text"
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  placeholder="Briefly describe what you'd like to discuss..."
                  description="This helps us prepare for your consultation"
                />
              </div>

              {/* Consultation Summary */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-4">Consultation Summary</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="text-foreground font-medium">
                      {consultationTypes?.find(t => t?.value === selectedType)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="text-foreground font-medium">
                      {availableDates?.find(d => d?.value === selectedDate)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="text-foreground font-medium">
                      {availableTimes?.find(t => t?.value === selectedTime)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="text-foreground font-medium">30 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              Back
            </Button>
            
            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={handleNext}
                disabled={
                  (currentStep === 1 && (!selectedType || !formData?.name || !formData?.email || !formData?.phone)) ||
                  (currentStep === 2 && (!selectedDate || !selectedTime))
                }
              >
                Next
              </Button>
            ) : (
              <Button type="submit">
                Schedule Consultation
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationScheduler;