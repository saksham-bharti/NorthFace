import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {

  const contactMethods = [
    {
      method: 'Phone',
      value: '+1 (555) 123-4567',
      icon: 'Phone',
      description: 'Speak directly with our team'
    },
    {
      method: 'Email',
      value: 'hello@northstep.com',
      icon: 'Mail',
      description: 'Send us your questions'
    },
    {
      method: 'Office',
      value: 'New York, NY',
      icon: 'MapPin',
      description: 'Visit our headquarters'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Contact Information */}
        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Get in Touch
            </h3>
            <p className="text-muted-foreground">
              Multiple ways to connect with our team of recruitment experts
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {contactMethods?.map((contact, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-elevation-subtle rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={contact?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">
                  {contact?.method}
                </h4>
                <p className="text-primary font-medium mb-2">
                  {contact?.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {contact?.description}
                </p>
              </div>
            ))}
          </div>

          {/* Emergency Contact */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <div className="inline-flex items-center space-x-2 bg-warning/10 px-4 py-2 rounded-full">
              <Icon name="Clock" size={16} className="text-warning" />
              <span className="text-sm font-medium text-warning">
                Urgent Hiring Needs? Call us 24/7 at +1 (555) 999-HIRE
              </span>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">2,500+</div>
              <div className="text-sm text-muted-foreground">Successful Placements</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-secondary">500+</div>
              <div className="text-sm text-muted-foreground">Partner Companies</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-success">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">4+ Years</div>
              <div className="text-sm text-muted-foreground">Industry Experience</div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-foreground font-medium mb-4">
              "Your next breakthrough is just one conversation away."
            </p>
            <p className="text-muted-foreground">
              Join the thousands of professionals and companies who have transformed their futures with NorthStep. 
              Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;