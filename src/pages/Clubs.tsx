
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  MessageSquare,
  Users,
  UserPlus,
  Calendar,
  Search,
  Filter,
  MapPin,
  Clock,
  CalendarDays
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const clubs = [
  {
    id: 1,
    name: "Tech Innovation Club",
    description: "Explore cutting-edge technologies and work on innovative projects with like-minded peers.",
    members: 156,
    icon: GraduationCap,
    category: "Technology",
    upcomingEvents: 3,
    coverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Debate Society",
    description: "Develop your public speaking skills and engage in thought-provoking discussions.",
    members: 89,
    icon: MessageSquare,
    category: "Academic",
    upcomingEvents: 2,
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Environmental Club",
    description: "Work towards a sustainable future through conservation projects and awareness campaigns.",
    members: 234,
    icon: Users,
    category: "Social",
    upcomingEvents: 4,
    coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop"
  }
];

const events = [
  {
    id: 1,
    title: "Tech Innovation Workshop",
    date: "March 15, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Tech Hub, Room 301",
    club: "Tech Innovation Club",
    attendees: 45,
    description: "Join us for an exciting workshop on emerging technologies and their applications."
  },
  {
    id: 2,
    title: "Annual Debate Championship",
    date: "March 20, 2024",
    time: "10:00 AM - 5:00 PM",
    location: "Main Auditorium",
    club: "Debate Society",
    attendees: 120,
    description: "The biggest debate event of the year featuring teams from all departments."
  }
];

const categories = [
  "All",
  "Technology",
  "Academic",
  "Social",
  "Sports",
  "Arts",
  "Professional"
];

const ClubsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState<"clubs" | "events">("clubs");

  const filteredClubs = clubs.filter(club => {
    const matchesCategory = selectedCategory === "All" || club.category === selectedCategory;
    const matchesSearch = club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-100 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-primary" />
              <span className="font-display text-xl font-semibold text-primary">University Clubs & Events</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => setView("clubs")} 
                className={view === "clubs" ? "bg-primary text-white" : ""}>
                <Users className="h-4 w-4 mr-2" />
                Clubs
              </Button>
              <Button variant="outline" onClick={() => setView("events")}
                className={view === "events" ? "bg-primary text-white" : ""}>
                <Calendar className="h-4 w-4 mr-2" />
                Events
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                type="text"
                placeholder={`Search ${view}...`}
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {view === "clubs" ? (
          // Clubs Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClubs.map((club) => (
              <div 
                key={club.id}
                className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-video w-full relative overflow-hidden">
                  <img 
                    src={club.coverImage} 
                    alt={club.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs">
                      {club.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{club.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{club.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{club.members} members</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{club.upcomingEvents} upcoming events</span>
                      </div>
                    </div>
                    <Button>Join Club</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Events Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div 
                key={event.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary">{event.club}</span>
                  <Button variant="outline" size="sm">RSVP</Button>
                </div>
                <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClubsPage;
