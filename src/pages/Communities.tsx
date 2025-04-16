
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, Plus, Users, TrendingUp, Star, Calendar } from "lucide-react";
import { useState } from "react";

const Communities = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const topCommunities = [
   {
     id: 1,
     name: "Attack on Titan",
     image: "/lovable-uploads/a31d16cb-3d52-4d6b-a6c2-d23f681f2f90.png", // Updated path
     members: 145672,
     posts: 8792,
     category: "Anime Discussion",
     description: "A community dedicated to discussing everything related to Attack on Titan, from the anime to the manga and all theories in between."
   },
   {
     id: 2,
     name: "Demon Slayer Corps",
     image: "/lovable-uploads/76ff8669-9616-4392-b8bd-f24827feedc7.png", // Updated path
     members: 132891,
     posts: 7563,
     category: "Fan Club",
     description: "The ultimate community for Demon Slayer fans! Share fan art, discuss episodes, and connect with fellow demon slayers."
   },
   {
     id: 3,
     name: "My Hero Academia",
     image: "https://cdn.myanimelist.net/images/anime/1326/121972.jpg", // Keep this as is for now
     members: 119543,
     posts: 6821,
     category: "Anime Discussion",
     description: "Go beyond! Plus Ultra! Join fellow heroes in discussions about My Hero Academia, share your quirk theories and favorite characters."
   },
   {
     id: 4,
     name: "One Punch Man",
     image: "/lovable-uploads/23086714-cacd-4566-a4d9-53896acd8b19.png", // Updated path
     members: 98723,
     posts: 5432,
     category: "Fan Club",
     description: "The strongest community for One Punch Man fans! Discussions about Saitama, Genos, and all the heroes and monsters."
   },
   {
     id: 5,
     name: "Sword Art Online",
     image: "https://cdn.myanimelist.net/images/anime/4/82513.jpg", // Keep this as is for now
     members: 87651,
     posts: 4298,
     category: "Gaming & Anime",
     description: "For fans of both the Sword Art Online anime and its gaming concepts. Discuss virtual reality, game mechanics, and character development."
   }
 ];
 

  const yourCommunities = [
    {
      id: 1,
      name: "Anime Artists",
      image: "/lovable-uploads/76ff8669-9616-4392-b8bd-f24827feedc7.png",
      members: 42863,
      posts: 3872,
      category: "Art",
      unread: 12,
      description: "A community for sharing and discussing anime fan art and drawing techniques."
    },
    {
      id: 2,
      name: "Shonen Jump Fans",
      image: "/lovable-uploads/7077f4a1-c9a9-4f03-86af-6bec08413983.png",
      members: 78954,
      posts: 5683,
      category: "Manga Discussion",
      unread: 5,
      description: "The place to discuss all your favorite Shonen Jump manga series and characters."
    },
    {
      id: 3,
      name: "Anime OST Appreciation",
      image: "/lovable-uploads/d954d644-12d7-438c-800f-002a654cb09b.png",
      members: 34521,
      posts: 2341,
      category: "Music",
      unread: 0,
      description: "For fans of anime soundtracks and music. Share your favorite OPs, EDs, and background music."
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Attack on Titan Final Season Discussion",
      community: "Attack on Titan",
      date: "Tomorrow, 8:00 PM",
      attendees: 1247,
      image: "/lovable-uploads/a31d16cb-3d52-4d6b-a6c2-d23f681f2f90.png"
    },
    {
      id: 2,
      title: "Anime Drawing Workshop",
      community: "Anime Artists",
      date: "Saturday, 2:00 PM",
      attendees: 532,
      image: "/lovable-uploads/76ff8669-9616-4392-b8bd-f24827feedc7.png"
    },
    {
      id: 3,
      title: "Naruto Rewatch Party",
      community: "Shonen Jump Fans",
      date: "Sunday, 3:00 PM",
      attendees: 874,
      image: "/lovable-uploads/bc97dd34-8773-45db-9c07-cf3e52c46c56.png"
    }
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          <h1 className="text-4xl font-bold">Communities</h1>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search communities..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="flex-shrink-0">
              <Plus size={20} className="mr-2" />
              Create Community
            </Button>
          </div>
        </div>

        <Tabs defaultValue="discover" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="discover" className="flex items-center gap-2">
              <TrendingUp size={16} />
              Discover
            </TabsTrigger>
            <TabsTrigger value="joined" className="flex items-center gap-2">
              <Users size={16} />
              Your Communities
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar size={16} />
              Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="space-y-6">
            <h2 className="text-2xl font-semibold">Top Anime Communities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topCommunities
                .filter(community => community.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map(community => (
                <Card key={community.id} className="overflow-hidden border-primary/10 flex flex-col h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-40 relative">
                    <img 
                      src={community.image} 
                      alt={community.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end p-4">
                      <h3 className="text-xl font-bold text-white">{community.name}</h3>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">
                        {community.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {community.members.toLocaleString()} members
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {community.description}
                    </p>
                    <Button className="w-full">Join Community</Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="joined" className="space-y-6">
            <h2 className="text-2xl font-semibold">Your Communities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {yourCommunities
                .filter(community => community.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map(community => (
                <Card key={community.id} className="overflow-hidden border-primary/10 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-4 flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="h-16 w-16 rounded-lg">
                        <img src={community.image} alt={community.name} className="object-cover" />
                      </Avatar>
                      {community.unread > 0 && (
                        <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {community.unread}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{community.name}</h3>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">
                          {community.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {community.members.toLocaleString()} members
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {community.description}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 pb-4 flex gap-2">
                    <Button variant="outline" className="flex-1">Visit</Button>
                    <Button className="flex-1">New Post</Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents
                .filter(event => 
                  event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  event.community.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map(event => (
                <Card key={event.id} className="overflow-hidden border-primary/10 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-48">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                      <span className="bg-primary/60 text-white text-xs px-2 py-0.5 rounded-full w-fit mb-2">
                        {event.community}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-white/80 text-xs">
                          <Calendar size={14} />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1 text-white/80 text-xs">
                          <Users size={14} />
                          {event.attendees} attending
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <Button variant="outline" size="sm">
                      Add to Calendar
                    </Button>
                    <Button size="sm">
                      RSVP
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-4 mt-6 border-primary/10 bg-primary/5">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-2">Create Your Own Event</h3>
                  <p className="text-muted-foreground">
                    Host watch parties, discussions, art contests, or any anime-related event 
                    and invite the community to join!
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-end">
                  <Button>
                    <Calendar size={18} className="mr-2" />
                    Create Event
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Communities;
