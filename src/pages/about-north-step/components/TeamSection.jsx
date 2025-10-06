import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      specialization: "Executive Leadership & Strategic Partnerships",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: `Sarah founded NorthStep with a vision to transform recruitment from transactional to transformational. With over 15 years of experience in executive search and talent strategy, she has personally placed over 200 C-level executives and built recruitment teams for Fortune 500 companies.

Her expertise spans across technology, finance, and healthcare sectors, with a particular focus on scaling organizations through strategic talent acquisition. Sarah holds an MBA from Wharton and is a frequent speaker at industry conferences.`,
      achievements: [
        "Placed 200+ C-level executives",
        "Built recruitment teams for 50+ Fortune 500 companies",
        "Named \'Recruitment Leader of the Year\' 2023",
        "MBA from Wharton School of Business"
      ],
      industries: ["Technology", "Finance", "Healthcare", "Manufacturing"],
      contact: {
        email: "sarah.mitchell@northstep.com",
        linkedin: "linkedin.com/in/sarahmitchell"
      }
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "VP of Technology Recruitment",
      specialization: "Software Engineering & Product Leadership",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: `Michael leads our technology recruitment division with deep expertise in software engineering, product management, and technical leadership roles. He has successfully placed over 300 engineers and product leaders at startups and established tech companies.

Before joining NorthStep, Michael was Head of Talent at a unicorn startup where he scaled the engineering team from 20 to 200+ professionals. His technical background as a former software engineer gives him unique insight into what makes great technical hires.`,
      achievements: [
        "Placed 300+ software engineers and product leaders",
        "Scaled engineering teams at 3 unicorn startups",
        "Former software engineer with 5 years development experience",
        "Certified Technical Recruiter (CTR)"
      ],
      industries: ["Technology", "Fintech", "SaaS", "AI/ML"],
      contact: {
        email: "michael.rodriguez@northstep.com",
        linkedin: "linkedin.com/in/michaelrodriguez"
      }
    },
    {
      id: 3,
      name: "Jennifer Chen",
      role: "Senior Director, Finance & Operations",
      specialization: "Finance Leadership & Operations Excellence",
      experience: "14+ years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: `Jennifer specializes in placing finance and operations leaders who drive business transformation. With 14 years of experience in financial services recruitment, she has placed CFOs, Controllers, and Finance Directors at companies ranging from high-growth startups to public corporations.

Her deep understanding of financial operations, regulatory compliance, and business strategy enables her to identify candidates who can navigate complex financial challenges while driving growth initiatives.`,
      achievements: [
        "Placed 150+ finance and operations executives",
        "Specialized in IPO-ready finance team builds",
        "CPA with Big 4 accounting experience",
        "Expert in regulatory compliance hiring"
      ],
      industries: ["Financial Services", "Fintech", "Real Estate", "Healthcare"],
      contact: {
        email: "jennifer.chen@northstep.com",
        linkedin: "linkedin.com/in/jenniferchen"
      }
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Director, Healthcare & Life Sciences",
      specialization: "Healthcare Leadership & Clinical Operations",
      experience: "11+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: `David leads our healthcare and life sciences practice with extensive experience in clinical operations, medical device, and pharmaceutical recruitment. He has successfully placed healthcare executives, clinical researchers, and regulatory affairs professionals across the healthcare ecosystem.

His background includes working with leading medical institutions, biotech startups, and pharmaceutical companies to build teams that advance patient care and medical innovation.`,
      achievements: [
        "Placed 200+ healthcare and life sciences professionals",
        "Expert in clinical trial and regulatory hiring",
        "Former healthcare operations manager",
        "Specialized in FDA compliance roles"
      ],
      industries: ["Healthcare", "Biotechnology", "Medical Devices", "Pharmaceuticals"],
      contact: {
        email: "david.thompson@northstep.com",
        linkedin: "linkedin.com/in/davidthompson"
      }
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Senior Consultant, Marketing & Sales",
      specialization: "Revenue Leadership & Marketing Excellence",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      bio: `Lisa specializes in placing marketing and sales leaders who drive revenue growth and brand transformation. With 10 years of experience in marketing recruitment, she has placed CMOs, VPs of Sales, and marketing directors at companies across various industries.

Her expertise includes digital marketing, brand strategy, sales operations, and customer success leadership. Lisa has a proven track record of identifying leaders who can scale revenue operations and build high-performing marketing teams.`,
      achievements: [
        "Placed 180+ marketing and sales executives",
        "Expert in digital marketing and e-commerce hiring",
        "Former marketing manager with agency experience",
        "Specialized in revenue operations roles"
      ],
      industries: ["Technology", "E-commerce", "Consumer Goods", "Professional Services"],
      contact: {
        email: "lisa.park@northstep.com",
        linkedin: "linkedin.com/in/lisapark"
      }
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Principal Consultant, Manufacturing & Supply Chain",
      specialization: "Operations Leadership & Supply Chain Excellence",
      experience: "13+ years",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      bio: `Robert leads our manufacturing and supply chain practice with deep expertise in operations management, logistics, and industrial engineering roles. He has successfully placed operations directors, plant managers, and supply chain executives at manufacturing companies worldwide.

His background includes working with automotive, aerospace, and consumer goods manufacturers to build teams that optimize production efficiency, quality control, and supply chain resilience.`,
      achievements: [
        "Placed 160+ manufacturing and operations leaders",
        "Expert in lean manufacturing and Six Sigma hiring",
        "Former operations manager in automotive industry",
        "Specialized in supply chain transformation roles"
      ],
      industries: ["Manufacturing", "Automotive", "Aerospace", "Consumer Goods"],
      contact: {
        email: "robert.kim@northstep.com",
        linkedin: "linkedin.com/in/robertkim"
      }
    }
  ];

  const openMemberModal = (member) => {
    setSelectedMember(member);
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-headline mb-4">Meet Our Expert Team</h2>
          <p className="text-brand-subheading max-w-3xl mx-auto">
            Our senior consultants bring decades of combined experience and deep industry expertise to every partnership. Each team member is a specialist who understands the unique challenges and opportunities in their focus areas.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers?.map((member) => (
            <div
              key={member?.id}
              className="bg-background rounded-xl p-6 shadow-sm border border-border elevation-hover cursor-pointer"
              onClick={() => openMemberModal(member)}
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src={member?.image}
                      alt={member?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-elevation rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">{member?.name}</h3>
                <p className="text-primary font-medium mb-2">{member?.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member?.specialization}</p>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={16} />
                    <span>{member?.experience}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {member?.industries?.slice(0, 2)?.map((industry, index) => (
                    <span
                      key={index}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {industry}
                    </span>
                  ))}
                  {member?.industries?.length > 2 && (
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                      +{member?.industries?.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-background rounded-2xl p-8 lg:p-12 shadow-sm border border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Collective Expertise</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team's combined experience and proven track record
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">75+</div>
              <div className="text-sm text-muted-foreground">Years Combined Experience</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={32} className="text-success" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">1,200+</div>
              <div className="text-sm text-muted-foreground">Successful Placements</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Building2" size={32} className="text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">8</div>
              <div className="text-sm text-muted-foreground">Industry Specializations</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-purple-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 lg:p-8">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src={selectedMember?.image}
                      alt={selectedMember?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{selectedMember?.name}</h3>
                    <p className="text-primary font-medium mb-1">{selectedMember?.role}</p>
                    <p className="text-muted-foreground">{selectedMember?.specialization}</p>
                  </div>
                </div>
                <button
                  onClick={closeMemberModal}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <Icon name="X" size={24} className="text-muted-foreground" />
                </button>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Bio */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">About</h4>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {selectedMember?.bio}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements</h4>
                    <div className="space-y-3">
                      {selectedMember?.achievements?.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Icon name="CheckCircle" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="bg-muted/50 rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-4">Industry Expertise</h4>
                    <div className="space-y-2">
                      {selectedMember?.industries?.map((industry, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="Building2" size={16} className="text-primary" />
                          <span className="text-sm text-muted-foreground">{industry}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-4">Experience</h4>
                    <div className="flex items-center space-x-2 mb-4">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span className="text-sm text-muted-foreground">{selectedMember?.experience}</span>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-4">Contact</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Icon name="Mail" size={16} className="text-primary" />
                        <span className="text-sm text-muted-foreground">{selectedMember?.contact?.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Linkedin" size={16} className="text-primary" />
                        <span className="text-sm text-muted-foreground">{selectedMember?.contact?.linkedin}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;