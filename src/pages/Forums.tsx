
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Search, 
  BookOpen, 
  Calendar, 
  Users, 
  Briefcase,
  ThumbsUp,
  MessageCircle,
  Share2,
  Clock
} from "lucide-react";
import { Input } from "@/components/ui/input";

// Mock data for discussions
const discussions = [
  {
    id: 1,
    category: "Academics",
    title: "Tips for Final Year Project",
    author: "Sarah Chen",
    content: "Hey everyone! I'm starting my final year project in Computer Science and looking for some advice on choosing a topic. What areas do you think are most relevant for industry right now?",
    likes: 24,
    comments: 8,
    timePosted: "2 hours ago",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: 2,
    category: "Events",
    title: "Annual Tech Symposium 2024",
    author: "Alex Kumar",
    content: "The department is organizing its annual tech symposium next month. We're looking for volunteers and speakers. Great opportunity to network with industry professionals!",
    likes: 45,
    comments: 15,
    timePosted: "1 day ago",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    id: 3,
    category: "Placements",
    title: "Interview Experience - Google",
    author: "Maria Rodriguez",
    content: "Just completed my interviews with Google! Here's a detailed breakdown of the process and some tips for those preparing...",
    likes: 156,
    comments: 32,
    timePosted: "3 days ago",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
  }
];

const categories = [
  { name: "Academics", icon: BookOpen },
  { name: "Events", icon: Calendar },
  { name: "Clubs", icon: Users },
  { name: "Placements", icon: Briefcase }
];

const Forums = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesCategory = selectedCategory === "All" || discussion.category === selectedCategory;
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         discussion.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-100 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-8 w-8 text-primary" />
              <span className="font-display text-xl font-semibold text-primary">Discussion Forums</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">New Post</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              type="text"
              placeholder="Search discussions..."
              className="pl-10 w-full md:w-96"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={selectedCategory === "All" ? "default" : "outline"}
              onClick={() => setSelectedCategory("All")}
              className="rounded-full"
            >
              All Topics
            </Button>
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className="rounded-full"
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Discussion List */}
        <div className="space-y-6">
          {filteredDiscussions.map((discussion) => (
            <div
              key={discussion.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={discussion.authorAvatar}
                  alt={discussion.author}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-gray-900">{discussion.author}</span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {discussion.timePosted}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary mb-2">
                    {discussion.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{discussion.title}</h3>
                  <p className="text-gray-600 mb-4">{discussion.content}</p>
                  
                  <div className="flex items-center space-x-6 text-gray-500">
                    <button className="flex items-center space-x-2 hover:text-primary transition-colors">
                      <ThumbsUp className="h-5 w-5" />
                      <span>{discussion.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-primary transition-colors">
                      <MessageCircle className="h-5 w-5" />
                      <span>{discussion.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-primary transition-colors">
                      <Share2 className="h-5 w-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forums;
