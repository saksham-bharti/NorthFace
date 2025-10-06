import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OfficeLocations = () => {
  const [selectedOffice, setSelectedOffice] = useState('headquarters');

  const offices = [
    {
      id: 'headquarters',
      name: 'Headquarters',
      type: 'Main Office',
      address: '123 Business Avenue, Suite 100',
      city: 'New York, NY 10001',
      phone: '(555) 123-4567',
      email: 'ny@northstep.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM EST',
      coordinates: '40.7589,-73.9851',
      description: 'Our main headquarters featuring executive recruitment, career counseling, and strategic consulting services.',
      services: ['Executive Search', 'Career Consulting', 'Strategic Planning', 'Industry Analysis'],
      team: [
        { name: 'Sarah Johnson', role: 'Senior Partner', specialization: 'Technology & Finance' },
        { name: 'Michael Chen', role: 'Executive Recruiter', specialization: 'Healthcare & Life Sciences' },
        { name: 'Emily Rodriguez', role: 'Career Strategist', specialization: 'Professional Development' }
      ]
    },
    {
      id: 'west-coast',
      name: 'West Coast Hub',
      type: 'Regional Office',
      address: '456 Innovation Drive, Floor 15',
      city: 'San Francisco, CA 94105',
      phone: '(555) 987-6543',
      email: 'sf@northstep.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM PST',
      coordinates: '37.7749,-122.4194',
      description: 'Specialized in tech recruitment and startup talent acquisition with deep Silicon Valley connections.',
      services: ['Tech Recruitment', 'Startup Consulting', 'Venture Capital Connections', 'Innovation Strategy'],
      team: [
        { name: 'David Park', role: 'Tech Recruitment Lead', specialization: 'Software Engineering' },
        { name: 'Lisa Wang', role: 'Startup Advisor', specialization: 'Early-stage Companies' },
        { name: 'James Miller', role: 'Innovation Consultant', specialization: 'Product & Design' }
      ]
    },
    {
      id: 'chicago',
      name: 'Midwest Center',
      type: 'Regional Office',
      address: '789 Commerce Plaza, Suite 200',
      city: 'Chicago, IL 60601',
      phone: '(555) 456-7890',
      email: 'chicago@northstep.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM CST',
      coordinates: '41.8781,-87.6298',
      description: 'Focused on manufacturing, logistics, and traditional industries with strong Midwest presence.',
      services: ['Manufacturing Recruitment', 'Supply Chain Consulting', 'Industrial Leadership', 'Operations Strategy'],
      team: [
        { name: 'Robert Thompson', role: 'Industrial Recruiter', specialization: 'Manufacturing & Logistics' },
        { name: 'Jennifer Adams', role: 'Operations Consultant', specialization: 'Process Optimization' },
        { name: 'Mark Wilson', role: 'Leadership Coach', specialization: 'Executive Development' }
      ]
    }
  ];

  const selectedOfficeData = offices?.find(office => office?.id === selectedOffice);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Visit Our Offices
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our team in person at one of our strategically located offices across the United States.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Office Selector */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-4">Our Locations</h3>
            {offices?.map((office) => (
              <button
                key={office?.id}
                onClick={() => setSelectedOffice(office?.id)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedOffice === office?.id
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    office?.id === 'headquarters' ? 'bg-primary' :
                    office?.id === 'west-coast' ? 'bg-blue-500' : 'bg-green-500'
                  }`}>
                    <Icon name="MapPin" size={20} color="white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{office?.name}</h4>
                    <p className="text-sm text-muted-foreground">{office?.type}</p>
                    <p className="text-sm text-muted-foreground mt-1">{office?.city}</p>
                  </div>
                  {selectedOffice === office?.id && (
                    <Icon name="ChevronRight" size={20} color="var(--color-primary)" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Office Details */}
          <div className="lg:col-span-2 space-y-6">
            {selectedOfficeData && (
              <>
                {/* Header */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{selectedOfficeData?.name}</h3>
                      <p className="text-muted-foreground">{selectedOfficeData?.type}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedOfficeData?.id === 'headquarters' ? 'bg-primary' :
                      selectedOfficeData?.id === 'west-coast' ? 'bg-blue-500' : 'bg-green-500'
                    }`}>
                      <Icon name="Building2" size={24} color="white" />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{selectedOfficeData?.description}</p>

                  {/* Contact Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Icon name="MapPin" size={18} color="var(--color-primary)" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{selectedOfficeData?.address}</p>
                          <p className="text-sm text-muted-foreground">{selectedOfficeData?.city}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Icon name="Phone" size={18} color="var(--color-primary)" />
                        <p className="text-sm text-foreground">{selectedOfficeData?.phone}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Icon name="Mail" size={18} color="var(--color-primary)" />
                        <p className="text-sm text-foreground">{selectedOfficeData?.email}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Icon name="Clock" size={18} color="var(--color-primary)" />
                        <p className="text-sm text-foreground">{selectedOfficeData?.hours}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Button
                      variant="default"
                      iconName="Navigation"
                      iconPosition="left"
                      onClick={() => window.open(`https://maps.google.com?q=${selectedOfficeData?.coordinates}`, '_blank')}
                    >
                      Get Directions
                    </Button>
                    <Button
                      variant="outline"
                      iconName="Phone"
                      iconPosition="left"
                      onClick={() => window.open(`tel:${selectedOfficeData?.phone}`, '_self')}
                    >
                      Call Office
                    </Button>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                  <div className="h-64 w-full">
                    <iframe
                      width="100%"
                      height="100%"
                      loading="lazy"
                      title={selectedOfficeData?.name}
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps?q=${selectedOfficeData?.coordinates}&z=14&output=embed`}
                      className="border-0"
                    />
                  </div>
                </div>

                {/* Services */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Specialized Services</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedOfficeData?.services?.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                        <span className="text-sm text-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Team Members</h4>
                  <div className="space-y-4">
                    {selectedOfficeData?.team?.map((member, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-elevation rounded-full flex items-center justify-center">
                          <Icon name="User" size={20} color="white" />
                        </div>
                        <div>
                          <h5 className="font-medium text-foreground">{member?.name}</h5>
                          <p className="text-sm text-muted-foreground">{member?.role}</p>
                          <p className="text-xs text-muted-foreground">{member?.specialization}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;