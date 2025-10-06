import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const VideoTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "David Park",
      role: "Senior Product Manager",
      company: "TechFlow Dynamics",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      duration: "2:45",
      category: "Career Growth",
      quote: "NorthStep helped me transition from engineering to product management with a 50% salary increase.",
      metrics: {
        salaryIncrease: "50%",
        timeToHire: "22 days",
        satisfaction: "10/10"
      }
    },
    {
      id: 2,
      name: "Lisa Thompson",
      role: "VP of Engineering",
      company: "DataScale Solutions",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop",
      duration: "3:12",
      category: "Executive Placement",
      quote: "The executive search process was thorough and professional. They found the perfect cultural fit.",
      metrics: {
        teamSize: "45 engineers",
        timeToHire: "35 days",
        retention: "96%"
      }
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "Data Scientist",
      company: "AI Innovations Lab",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
      duration: "2:28",
      category: "Career Pivot",
      quote: "Made a successful transition from finance to data science with comprehensive support.",
      metrics: {
        careerChange: "Finance → Tech",
        salaryIncrease: "35%",
        timeToHire: "28 days"
      }
    },
    {
      id: 4,
      name: "Rachel Kim",
      role: "Head of Talent",
      company: "GrowthTech Ventures",
      thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
      duration: "3:45",
      category: "Employer Success",
      quote: "NorthStep transformed our hiring process and helped us build an exceptional team.",
      metrics: {
        hires: "23 positions",
        timeReduction: "40%",
        quality: "Exceptional"
      }
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Senior DevOps Engineer",
      company: "CloudFirst Systems",
      thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
      duration: "2:15",
      category: "Remote Transition",
      quote: "Found the perfect remote opportunity that aligned with my work-life balance goals.",
      metrics: {
        workModel: "100% Remote",
        salaryIncrease: "28%",
        satisfaction: "Excellent"
      }
    },
    {
      id: 6,
      name: "Amanda Rodriguez",
      role: "UX Design Director",
      company: "DesignForward Inc",
      thumbnail: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=300&fit=crop",
      duration: "3:20",
      category: "Leadership Role",
      quote: "Transitioned from individual contributor to leading a design team of 12 professionals.",
      metrics: {
        teamSize: "12 designers",
        salaryIncrease: "45%",
        timeToHire: "19 days"
      }
    }
  ];

  const categories = ["All", "Career Growth", "Executive Placement", "Career Pivot", "Employer Success", "Remote Transition", "Leadership Role"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTestimonials = activeCategory === "All" 
    ? testimonials 
    : testimonials?.filter(t => t?.category === activeCategory);

  const openVideoModal = (testimonial) => {
    setSelectedVideo(testimonial);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-hero mb-6">
            Hear From Our Success Stories
          </h2>
          <p className="text-brand-subheading max-w-3xl mx-auto">
            Real people, real transformations. Watch authentic testimonials from candidates and employers who've experienced the NorthStep difference.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-background text-foreground hover:bg-primary/10 border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials?.map((testimonial) => (
            <div
              key={testimonial?.id}
              className="bg-background rounded-xl overflow-hidden card-premium elevation-hover cursor-pointer"
              onClick={() => openVideoModal(testimonial)}
            >
              {/* Video Thumbnail */}
              <div className="relative">
                <Image
                  src={testimonial?.thumbnail}
                  alt={`${testimonial?.name} testimonial`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Icon name="Play" size={24} className="text-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {testimonial?.duration}
                </div>
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                  {testimonial?.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-elevation rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">
                      {testimonial?.name?.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial?.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial?.role}</p>
                    <p className="text-sm font-medium text-primary">{testimonial?.company}</p>
                  </div>
                </div>

                <blockquote className="text-sm text-muted-foreground italic mb-4 line-clamp-2">
                  "{testimonial?.quote}"
                </blockquote>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  {Object.entries(testimonial?.metrics)?.map(([key, value]) => (
                    <div key={key} className="p-2 bg-muted/50 rounded">
                      <div className="text-sm font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">
                        {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{selectedVideo?.name}</h3>
                  <p className="text-muted-foreground">{selectedVideo?.role} at {selectedVideo?.company}</p>
                </div>
                <button
                  onClick={closeVideoModal}
                  className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Icon name="Play" size={48} className="text-primary mb-4 mx-auto" />
                    <p className="text-muted-foreground">Video testimonial would play here</p>
                    <p className="text-sm text-muted-foreground mt-2">Duration: {selectedVideo?.duration}</p>
                  </div>
                </div>
                
                <blockquote className="text-lg text-foreground italic text-center mb-6">
                  "{selectedVideo?.quote}"
                </blockquote>
                
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(selectedVideo?.metrics)?.map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-xl font-bold text-primary mb-1">{value}</div>
                      <div className="text-sm text-muted-foreground capitalize">
                        {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Share Your Success Story?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of professionals who've transformed their careers with NorthStep. Your success story could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              className="bg-gradient-elevation hover:shadow-elevation"
              iconName="UserPlus"
              iconPosition="left"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              iconName="Video"
              iconPosition="left"
            >
              Submit Your Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;