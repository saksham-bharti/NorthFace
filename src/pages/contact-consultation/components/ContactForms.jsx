import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForms = () => {
  const [activeForm, setActiveForm] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    urgency: '',
    budget: '',
    timeline: ''
  });

  const formTypes = [
    {
      id: 'general',
      title: 'General Inquiry',
      description: 'For general questions and information requests',
      icon: 'MessageSquare',
      color: 'bg-blue-500'
    },
    {
      id: 'candidate',
      title: 'Career Guidance',
      description: 'For job seekers needing career advice',
      icon: 'User',
      color: 'bg-green-500'
    },
    {
      id: 'employer',
      title: 'Hiring Solutions',
      description: 'For employers seeking recruitment services',
      icon: 'Building2',
      color: 'bg-primary'
    },
    {
      id: 'partnership',
      title: 'Partnership Inquiry',
      description: 'For potential business partnerships',
      icon: 'Handshake',
      color: 'bg-purple-500'
    }
  ];

  const urgencyOptions = [
    { value: 'low', label: 'Low - General inquiry' },
    { value: 'medium', label: 'Medium - Need response within a week' },
    { value: 'high', label: 'High - Need response within 24 hours' },
    { value: 'urgent', label: 'Urgent - Need immediate attention' }
  ];

  const budgetOptions = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: 'over-100k', label: 'Over $100,000' },
    { value: 'discuss', label: 'Prefer to discuss' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (within 1 month)' },
    { value: '1-3months', label: '1-3 months' },
    { value: '3-6months', label: '3-6 months' },
    { value: '6months+', label: '6+ months' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Mock form submission
    alert(`Thank you for your ${formTypes?.find(f => f?.id === activeForm)?.title?.toLowerCase()}! We'll respond within 24 hours.`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      urgency: '',
      budget: '',
      timeline: ''
    });
  };

  const renderFormFields = () => {
    const baseFields = (
      <>
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
          />
          <Input
            label="Company"
            type="text"
            name="company"
            value={formData?.company}
            onChange={handleInputChange}
            placeholder="Enter your company name"
          />
        </div>

        <Input
          label="Subject"
          type="text"
          name="subject"
          value={formData?.subject}
          onChange={handleInputChange}
          placeholder="Brief subject line"
          required
        />
      </>
    );

    switch (activeForm) {
      case 'candidate':
        return (
          <>
            {baseFields}
            <Select
              label="Urgency Level"
              options={urgencyOptions}
              value={formData?.urgency}
              onChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}
              placeholder="How urgent is your inquiry?"
            />
            <Input
              label="Message"
              type="text"
              name="message"
              value={formData?.message}
              onChange={handleInputChange}
              placeholder="Tell us about your career goals, current situation, or specific questions..."
              required
            />
          </>
        );

      case 'employer':
        return (
          <>
            {baseFields}
            <div className="grid md:grid-cols-2 gap-4">
              <Select
                label="Project Budget"
                options={budgetOptions}
                value={formData?.budget}
                onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                placeholder="Select budget range"
              />
              <Select
                label="Timeline"
                options={timelineOptions}
                value={formData?.timeline}
                onChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
                placeholder="When do you need to hire?"
              />
            </div>
            <Input
              label="Hiring Requirements"
              type="text"
              name="message"
              value={formData?.message}
              onChange={handleInputChange}
              placeholder="Describe the positions you need to fill, required skills, company culture, etc..."
              required
            />
          </>
        );

      case 'partnership':
        return (
          <>
            {baseFields}
            <Select
              label="Partnership Type"
              options={[
                { value: 'referral', label: 'Referral Partnership' },
                { value: 'vendor', label: 'Vendor Partnership' },
                { value: 'strategic', label: 'Strategic Alliance' },
                { value: 'other', label: 'Other Partnership' }
              ]}
              value={formData?.urgency}
              onChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}
              placeholder="What type of partnership?"
            />
            <Input
              label="Partnership Proposal"
              type="text"
              name="message"
              value={formData?.message}
              onChange={handleInputChange}
              placeholder="Describe your partnership idea, mutual benefits, and how we can work together..."
              required
            />
          </>
        );

      default:
        return (
          <>
            {baseFields}
            <Select
              label="Inquiry Type"
              options={[
                { value: 'services', label: 'Services Information' },
                { value: 'pricing', label: 'Pricing Inquiry' },
                { value: 'support', label: 'Technical Support' },
                { value: 'feedback', label: 'Feedback/Suggestion' },
                { value: 'other', label: 'Other' }
              ]}
              value={formData?.urgency}
              onChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}
              placeholder="What is your inquiry about?"
            />
            <Input
              label="Message"
              type="text"
              name="message"
              value={formData?.message}
              onChange={handleInputChange}
              placeholder="Please provide details about your inquiry..."
              required
            />
          </>
        );
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Send Us a Message
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the form that best matches your needs for a more personalized response.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Form Type Selector */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {formTypes?.map((type) => (
              <button
                key={type?.id}
                onClick={() => setActiveForm(type?.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  activeForm === type?.id
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border bg-background hover:border-primary/50'
                }`}
              >
                <div className={`w-10 h-10 ${type?.color} rounded-lg flex items-center justify-center mb-3`}>
                  <Icon name={type?.icon} size={20} color="white" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {type?.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {type?.description}
                </p>
              </button>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-2xl shadow-lg border border-border p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-8 h-8 ${formTypes?.find(f => f?.id === activeForm)?.color} rounded-lg flex items-center justify-center`}>
                <Icon name={formTypes?.find(f => f?.id === activeForm)?.icon} size={16} color="white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {formTypes?.find(f => f?.id === activeForm)?.title}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {renderFormFields()}

              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="text-sm text-muted-foreground">
                  <p>We typically respond within 24 hours</p>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  iconName="Send"
                  iconPosition="right"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForms;