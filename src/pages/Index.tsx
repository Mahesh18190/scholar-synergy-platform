import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Calendar, GraduationCap, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-100 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-display text-xl font-semibold text-primary">Scholar Synergy</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
              <a href="#announcements" className="text-gray-600 hover:text-primary transition-colors">Announcements</a>
              <Link to="/forums" className="text-gray-600 hover:text-primary transition-colors">Forums</Link>
              <a href="#clubs" className="text-gray-600 hover:text-primary transition-colors">Clubs</a>
              <a href="#events" className="text-gray-600 hover:text-primary transition-colors">Events</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:inline-flex">Sign In</Button>
              <Button className="bg-primary hover:bg-primary-600 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-down">
            Connect, Collaborate, and<br />Thrive Together
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-up">
            Your all-in-one platform for university communication, collaboration, and community building.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-up">
            <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
              Join Community
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Everything You Need to Succeed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section id="announcements" className="py-20 px-4 bg-primary-100">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Latest Announcements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {announcements.map((announcement, index) => (
              <div 
                key={announcement.title}
                className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <Bell className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{announcement.title}</h3>
                    <p className="text-gray-600 mb-2">{announcement.description}</p>
                    <span className="text-sm text-gray-500">{announcement.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8" />
                <span className="font-display text-xl font-semibold">Scholar Synergy</span>
              </div>
              <p className="text-gray-400">Empowering university communities through seamless collaboration.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#announcements" className="hover:text-white transition-colors">Announcements</a></li>
                <li><a href="#clubs" className="hover:text-white transition-colors">Clubs</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Forums</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Alumni Network</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentorship</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Scholar Synergy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: MessageSquare,
    title: "Discussion Forums",
    description: "Engage in meaningful conversations with peers and faculty members in organized discussion threads."
  },
  {
    icon: Users,
    title: "Club Management",
    description: "Join and manage university clubs, organize events, and connect with like-minded individuals."
  },
  {
    icon: Calendar,
    title: "Event Planning",
    description: "Keep track of important dates, schedule meetings, and manage your academic calendar."
  },
  {
    icon: Bell,
    title: "Real-time Updates",
    description: "Stay informed with instant notifications about announcements, events, and discussions."
  },
  {
    icon: GraduationCap,
    title: "Academic Resources",
    description: "Access study materials, course information, and academic support tools."
  }
];

const announcements = [
  {
    title: "New Course Registration Period",
    description: "Course registration for the Spring semester opens next week. Check your portal for eligibility and time slots.",
    date: "2 hours ago"
  },
  {
    title: "Tech Innovation Summit",
    description: "Join us for the annual Technology Innovation Summit featuring industry leaders and workshops.",
    date: "1 day ago"
  },
  {
    title: "Library Extended Hours",
    description: "The university library will extend its operating hours during the final examination period.",
    date: "2 days ago"
  },
  {
    title: "Campus Career Fair",
    description: "Don't miss the upcoming Career Fair featuring top companies from various industries.",
    date: "3 days ago"
  }
];

export default Index;
