import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Users, 
  Calendar, 
  GraduationCap, 
  Bell, 
  BookOpen,
  Clock,
  ClipboardList,
  UserPlus,
  CalendarDays,
  User,
  Megaphone,
  LogIn
} from "lucide-react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

const Index = () => {
  const { user } = useUser();

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
            <SignedIn>
              <div className="hidden md:flex space-x-6">
                <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
                <a href="#announcements" className="text-gray-600 hover:text-primary transition-colors">Announcements</a>
                <Link to="/forums" className="text-gray-600 hover:text-primary transition-colors">Forums</Link>
                <Link to="/clubs" className="text-gray-600 hover:text-primary transition-colors">Clubs</Link>
                <a href="#timetable" className="text-gray-600 hover:text-primary transition-colors">Timetable</a>
              </div>
            </SignedIn>
            <div className="flex items-center space-x-4">
              <SignedIn>
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  <span className="hidden md:inline">Notifications</span>
                </Button>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <Link to="/sign-in">
                  <Button variant="outline">
                    <LogIn className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
                <Link to="/sign-up">
                  <Button>Sign Up</Button>
                </Link>
              </SignedOut>
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
            <SignedIn>
              <Link to="/clubs">
                <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  Explore Communities
                </Button>
              </Link>
            </SignedIn>
            <SignedOut>
              <Link to="/sign-up">
                <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  Join Community
                </Button>
              </Link>
              <Link to="/sign-in">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </SignedOut>
          </div>
        </div>
      </section>

      <SignedIn>
        {/* Rest of the sections only visible to authenticated users */}
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
        <section id="announcements" className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Important Announcements
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {announcements.map((announcement) => (
                  <div 
                    key={announcement.id}
                    className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${announcement.categoryColor}`}>
                        <announcement.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${announcement.categoryBadge} mb-2`}>
                          {announcement.category}
                        </span>
                        <h3 className="text-lg font-semibold mb-2">{announcement.title}</h3>
                        <p className="text-gray-600 mb-3">{announcement.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{announcement.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-primary-100 border border-primary-200">
                  <h3 className="font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Bell className="h-4 w-4 mr-2" />
                      Notification Settings
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Course Updates
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="h-4 w-4 mr-2" />
                      Event Calendar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timetable Preview Section */}
        <section id="timetable" className="py-20 px-4 bg-primary-100">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Your Schedule at a Glance
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {todayClasses.map((class_) => (
                      <div key={class_.id} className="p-4 rounded-lg border border-gray-200 hover:border-primary transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-primary">{class_.time}</span>
                          <span className="text-sm text-gray-500">{class_.duration}</span>
                        </div>
                        <h4 className="font-medium mb-1">{class_.subject}</h4>
                        <p className="text-sm text-gray-600">{class_.location}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold mb-4">Upcoming Events</h3>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex items-start space-x-3">
                        <div className="bg-primary-100 rounded-lg p-2">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{event.title}</h4>
                          <p className="text-xs text-gray-500">{event.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clubs Section */}
        <section id="clubs" className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              University Clubs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((club) => (
                <div 
                  key={club.id}
                  className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video w-full bg-primary-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <club.icon className="h-12 w-12 text-primary-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{club.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{club.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        <Users className="h-4 w-4 inline mr-1" />
                        {club.members} members
                      </span>
                      <Button variant="outline" size="sm">Join Club</Button>
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
      </SignedIn>

      <SignedOut>
        {/* Show only basic marketing content for non-authenticated users */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Join Our Academic Community
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Sign up to access all features including forums, clubs, events, and connect with your peers.
            </p>
            <Link to="/sign-up">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </section>
      </SignedOut>
    </div>
  );
};

const announcements = [
  {
    id: 1,
    category: "Academic",
    title: "Final Exam Schedule Released",
    description: "The final examination timetable for this semester has been published. Please check your student portal for your personal schedule.",
    date: "2 hours ago",
    icon: BookOpen,
    categoryColor: "bg-blue-500",
    categoryBadge: "bg-blue-100 text-blue-700"
  },
  {
    id: 2,
    category: "Event",
    title: "Annual Tech Symposium 2024",
    description: "Join us for the biggest tech event of the year. Register now to secure your spot and meet industry leaders.",
    date: "1 day ago",
    icon: Calendar,
    categoryColor: "bg-purple-500",
    categoryBadge: "bg-purple-100 text-purple-700"
  },
  {
    id: 3,
    category: "Administrative",
    title: "New Library Access System",
    description: "Starting next week, the library will implement a new digital access system. Please update your student ID.",
    date: "2 days ago",
    icon: ClipboardList,
    categoryColor: "bg-green-500",
    categoryBadge: "bg-green-100 text-green-700"
  }
];

const todayClasses = [
  {
    id: 1,
    time: "9:00 AM",
    subject: "Advanced Mathematics",
    location: "Room 101, Science Building",
    duration: "1h 30m"
  },
  {
    id: 2,
    time: "11:00 AM",
    subject: "Computer Science",
    location: "Lab 3, Tech Center",
    duration: "2h"
  },
  {
    id: 3,
    time: "2:00 PM",
    subject: "Physics Workshop",
    location: "Physics Lab",
    duration: "1h 30m"
  },
  {
    id: 4,
    time: "4:00 PM",
    subject: "Study Group",
    location: "Library, Room 2B",
    duration: "1h"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Project Presentation",
    date: "Tomorrow, 2:00 PM"
  },
  {
    id: 2,
    title: "Guest Lecture: AI Ethics",
    date: "Wed, 11:00 AM"
  },
  {
    id: 3,
    title: "Club Meeting",
    date: "Thu, 4:00 PM"
  }
];

const clubs = [
  {
    id: 1,
    name: "Tech Innovation Club",
    description: "Explore cutting-edge technologies and work on innovative projects with like-minded peers.",
    members: 156,
    icon: GraduationCap
  },
  {
    id: 2,
    name: "Debate Society",
    description: "Develop your public speaking skills and engage in thought-provoking discussions.",
    members: 89,
    icon: MessageSquare
  },
  {
    id: 3,
    name: "Sports Club",
    description: "Stay active and participate in various sports activities and competitions.",
    members: 234,
    icon: Users
  },
  {
    id: 4,
    name: "Arts & Culture",
    description: "Express your creativity and celebrate cultural diversity through various art forms.",
    members: 167,
    icon: UserPlus
  },
  {
    id: 5,
    name: "Environmental Society",
    description: "Work towards a sustainable future through conservation projects and awareness campaigns.",
    members: 123,
    icon: Megaphone
  },
  {
    id: 6,
    name: "Career Development",
    description: "Prepare for your professional journey with workshops, mentoring, and networking events.",
    members: 198,
    icon: CalendarDays
  }
];

const features = [
  {
    title: "Discussion Forums",
    description: "Engage in meaningful conversations with peers and faculty members.",
    icon: MessageSquare
  },
  {
    title: "Club Activities",
    description: "Join and participate in various university clubs and societies.",
    icon: Users
  },
  {
    title: "Event Calendar",
    description: "Stay updated with upcoming events, deadlines, and activities.",
    icon: Calendar
  }
];

export default Index;
