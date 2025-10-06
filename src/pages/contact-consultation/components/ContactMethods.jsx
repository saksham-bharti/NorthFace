import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = ({ onMethodSelect }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const contactMethods = [
    {
      id: 'consultation',
      title: 'Free Strategy Consultation',
      description: 'Book a 30-minute session with our senior recruiters to discuss your career goals or hiring needs.',
      icon: 'Calendar',
      duration: '30 minutes',
      availability: 'Mon-Fri, 9 AM - 6 PM EST',
      bestFor: 'Career planning, hiring strategy',
      color: 'bg-primary',
      textColor: 'text-white'
    },
    {
      id: 'phone',
      title: 'Direct Phone Support',
      description: 'Speak immediately with our recruitment specialists for urgent inquiries and quick questions.',
      icon: 'Phone',
      duration: 'Immediate',
      availability: '24/7 Support Line',
      bestFor: 'Urgent inquiries, quick questions',
      color: 'bg-green-500',
      textColor: 'text-white'
    },
    {
      id: 'email',
      title: 'Email Correspondence',
      description: 'Send detailed inquiries and receive comprehensive responses within 24 hours.',
      icon: 'Mail',
      duration: '24-hour response',
      availability: 'Always available',
      bestFor: 'Detailed inquiries, document sharing',
      color: 'bg-blue-500',
      textColor: 'text-white'
    },
    {
      id: 'chat',
      title: 'Live Chat Support',
      description: 'Get instant answers during business hours through our live chat system.',
      icon: 'MessageCircle',
      duration: 'Real-time',
      availability: 'Mon-Fri, 8 AM - 8 PM EST',
      bestFor: 'Quick questions, initial screening',
      color: 'bg-purple-500',
      textColor: 'text-white'
    }
  ];

  const handleMethodClick = (method) => {
    setSelectedMethod(method?.id);
    onMethodSelect(method);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose Your Preferred Contact Method
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer multiple ways to connect based on your needs and preferences. 
            Select the option that works best for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className={`relative bg-card rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer elevation-hover ${
                selectedMethod === method?.id 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => handleMethodClick(method)}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${method?.color} rounded-xl flex items-center justify-center mb-6`}>
                <Icon name={method?.icon} size={28} color="white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {method?.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {method?.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} color="var(--color-muted-foreground)" />
                    <span className="text-sm text-muted-foreground">{method?.duration}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} color="var(--color-muted-foreground)" />
                    <span className="text-sm text-muted-foreground">{method?.availability}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Icon name="Target" size={16} color="var(--color-muted-foreground)" />
                    <span className="text-sm text-muted-foreground">{method?.bestFor}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant={selectedMethod === method?.id ? "default" : "outline"}
                  size="sm"
                  fullWidth
                  className="mt-4"
                >
                  {method?.id === 'consultation' && 'Schedule Now'}
                  {method?.id === 'phone' && 'Call Now'}
                  {method?.id === 'email' && 'Send Email'}
                  {method?.id === 'chat' && 'Start Chat'}
                </Button>
              </div>

              {/* Selection Indicator */}
              {selectedMethod === method?.id && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Check" size={16} color="white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-muted rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Icon name="Phone" size={24} color="var(--color-primary)" className="mx-auto" />
              <h4 className="font-semibold text-foreground">Phone</h4>
              <p className="text-muted-foreground">(555) 123-4567</p>
              <p className="text-sm text-muted-foreground">24/7 Support Available</p>
            </div>
            
            <div className="space-y-2">
              <Icon name="Mail" size={24} color="var(--color-primary)" className="mx-auto" />
              <h4 className="font-semibold text-foreground">Email</h4>
              <p className="text-muted-foreground">contact@northstep.com</p>
              <p className="text-sm text-muted-foreground">24-hour response time</p>
            </div>
            
            <div className="space-y-2">
              <Icon name="MapPin" size={24} color="var(--color-primary)" className="mx-auto" />
              <h4 className="font-semibold text-foreground">Office</h4>
              <p className="text-muted-foreground">123 Business Ave, Suite 100</p>
              <p className="text-sm text-muted-foreground">New York, NY 10001</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;