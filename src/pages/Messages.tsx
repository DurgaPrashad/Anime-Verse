
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Search, Send, MessageSquare, Users, Bell, ChevronDown } from "lucide-react";
import { useState } from "react";

const Messages = () => {
  const [activeConversation, setActiveConversation] = useState<number | null>(1);

  const conversations = [
    { 
      id: 1, 
      name: "Anime Club", 
      avatar: "/lovable-uploads/76ff8669-9616-4392-b8bd-f24827feedc7.png", 
      lastMessage: "Did you guys see the new episode?", 
      time: "5m ago", 
      unread: 2,
      isGroup: true,
      members: ["You", "MangaMaster", "AnimeQueen", "+4 others"] 
    },
    { 
      id: 2, 
      name: "MangaMaster", 
      avatar: "/lovable-uploads/23086714-cacd-4566-a4d9-53896acd8b19.png", 
      lastMessage: "That fight scene was incredible!", 
      time: "1h ago", 
      unread: 0,
      isGroup: false
    },
    { 
      id: 3, 
      name: "Shounen Squad", 
      avatar: "/lovable-uploads/7077f4a1-c9a9-4f03-86af-6bec08413983.png", 
      lastMessage: "Vote for next week's discussion topic", 
      time: "3h ago", 
      unread: 5,
      isGroup: true,
      members: ["You", "DragonBallZ", "OnePieceFan", "+7 others"]
    },
    { 
      id: 4, 
      name: "AnimeQueen", 
      avatar: "/lovable-uploads/a31d16cb-3d52-4d6b-a6c2-d23f681f2f90.png", 
      lastMessage: "Have you finished watching it yet?", 
      time: "Yesterday", 
      unread: 0,
      isGroup: false
    },
    { 
      id: 5, 
      name: "AOT Theorists", 
      avatar: "/lovable-uploads/a31d16cb-3d52-4d6b-a6c2-d23f681f2f90.png", 
      lastMessage: "What do you think about the ending?", 
      time: "2 days ago", 
      unread: 0,
      isGroup: true,
      members: ["You", "TitanHunter", "ErenFan", "+12 others"]
    },
  ];

  const followingUsers = [
    { id: 1, name: "AnimeQueen", avatar: "/lovable-uploads/a31d16cb-3d52-4d6b-a6c2-d23f681f2f90.png", status: "online", anime: "Attack on Titan" },
    { id: 2, name: "MangaMaster", avatar: "/lovable-uploads/23086714-cacd-4566-a4d9-53896acd8b19.png", status: "online", anime: "One Punch Man" },
    { id: 3, name: "NarutoFan", avatar: "/lovable-uploads/bc97dd34-8773-45db-9c07-cf3e52c46c56.png", status: "offline", anime: "Naruto" },
    { id: 4, name: "DragonBallZ", avatar: "/lovable-uploads/d954d644-12d7-438c-800f-002a654cb09b.png", status: "idle", anime: "Dragon Ball Z" },
    { id: 5, name: "DemonSlayerFan", avatar: "/lovable-uploads/76ff8669-9616-4392-b8bd-f24827feedc7.png", status: "online", anime: "Demon Slayer" },
    { id: 6, name: "PirateKing", avatar: "/lovable-uploads/7077f4a1-c9a9-4f03-86af-6bec08413983.png", status: "online", anime: "One Piece" },
  ];

  const joinedCommunities = [
    { id: 1, name: "Anime News Network", avatar: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", members: 15430, category: "News" },
    { id: 2, name: "Sakura Society", avatar: "/lovable-uploads/76ff8669-9616-4392-b8bd-f24827feedc7.png", members: 8765, category: "Fan Club" },
    { id: 3, name: "Animation Analysis", avatar: "/lovable-uploads/a31d16cb-3d52-4d6b-a6c2-d23f681f2f90.png", members: 12509, category: "Discussion" },
    { id: 4, name: "Manga Collectors", avatar: "/lovable-uploads/23086714-cacd-4566-a4d9-53896acd8b19.png", members: 9348, category: "Collection" },
    { id: 5, name: "Cosplay Central", avatar: "/lovable-uploads/d954d644-12d7-438c-800f-002a654cb09b.png", members: 18762, category: "Cosplay" },
  ];

  const messages = [
    { id: 1, sender: "MangaMaster", message: "Hey guys! Did you see the new episode?", time: "5:32 PM", avatar: "/lovable-uploads/23086714-cacd-4566-a4d9-53896acd8b19.png" },
    { id: 2, sender: "AnimeQueen", message: "Yes! That fight scene was incredible!", time: "5:33 PM", avatar: "/lovable-uploads/a31d16cb-3d52-4d6b-a6c2-d23f681f2f90.png" },
    { id: 3, sender: "You", message: "I haven't seen it yet, no spoilers please!", time: "5:35 PM", avatar: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png" },
    { id: 4, sender: "MangaMaster", message: "Sorry! Just make sure to watch it soon, it's amazing.", time: "5:36 PM", avatar: "/lovable-uploads/23086714-cacd-4566-a4d9-53896acd8b19.png" },
    { id: 5, sender: "DemonSlayerFan", message: "I thought the animation quality was better in the previous episode, but the story development was fantastic.", time: "5:38 PM", avatar: "/lovable-uploads/76ff8669-9616-4392-b8bd-f24827feedc7.png" },
    { id: 6, sender: "AnimeQueen", message: "Agreed! And the new opening theme song is a banger! Can't stop listening to it.", time: "5:40 PM", avatar: "/lovable-uploads/a31d16cb-3d52-4d6b-a6c2-d23f681f2f90.png" },
    { id: 7, sender: "You", message: "Now I really need to watch it tonight!", time: "5:42 PM", avatar: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png" },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">Messages</h1>
        
        <Tabs defaultValue="conversations" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="conversations" className="flex items-center gap-2">
              <MessageSquare size={16} />
              Conversations
            </TabsTrigger>
            <TabsTrigger value="following" className="flex items-center gap-2">
              <Users size={16} />
              Following
            </TabsTrigger>
            <TabsTrigger value="communities" className="flex items-center gap-2">
              <Bell size={16} />
              Communities
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="conversations" className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 h-[70vh]">
              {/* Conversations sidebar */}
              <div className="md:w-1/3 h-full">
                <Card className="h-full overflow-hidden flex flex-col border-primary/10">
                  <div className="p-3 border-b border-primary/10 flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Messages</h3>
                    <Button variant="ghost" size="sm">
                      <ChevronDown size={18} />
                    </Button>
                  </div>
                  
                  <div className="p-3 border-b border-primary/10">
                    <div className="relative">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input 
                        placeholder="Search conversations..." 
                        className="pl-9 bg-background"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto hide-scrollbar">
                    {conversations.map(convo => (
                      <div 
                        key={convo.id} 
                        className={`p-3 cursor-pointer border-b border-primary/5 hover:bg-primary/5 transition-colors ${activeConversation === convo.id ? 'bg-primary/10' : ''}`}
                        onClick={() => setActiveConversation(convo.id)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <Avatar className="h-10 w-10">
                              <img src={convo.avatar} alt={convo.name} className="object-cover" />
                            </Avatar>
                            {convo.isGroup && (
                              <div className="absolute -bottom-1 -right-1 bg-primary rounded-full w-4 h-4 flex items-center justify-center text-[8px] text-primary-foreground font-bold border-2 border-background">
                                +
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium truncate">{convo.name}</h4>
                              <span className="text-xs text-muted-foreground whitespace-nowrap">{convo.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">{convo.lastMessage}</p>
                          </div>
                          {convo.unread > 0 && (
                            <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center text-xs text-primary-foreground">
                              {convo.unread}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-3 border-t border-primary/10">
                    <Button className="w-full">New Message</Button>
                  </div>
                </Card>
              </div>
              
              {/* Chat area */}
              <div className="md:w-2/3 h-full">
                <Card className="h-full flex flex-col border-primary/10">
                  {activeConversation ? (
                    <>
                      <div className="p-3 border-b border-primary/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <img 
                              src={conversations.find(c => c.id === activeConversation)?.avatar || ""} 
                              alt={conversations.find(c => c.id === activeConversation)?.name || "Chat"} 
                              className="object-cover"
                            />
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">
                              {conversations.find(c => c.id === activeConversation)?.name || "Chat"}
                            </h3>
                            {conversations.find(c => c.id === activeConversation)?.isGroup && (
                              <p className="text-xs text-muted-foreground">
                                {conversations.find(c => c.id === activeConversation)?.members?.join(", ")}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Search size={18} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ChevronDown size={18} />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex-1 overflow-y-auto p-4 hide-scrollbar flex flex-col gap-3">
                        {messages.map(message => (
                          <div key={message.id} className={`flex items-start gap-3 ${message.sender === "You" ? "flex-row-reverse" : ""}`}>
                            <Avatar className="h-8 w-8 flex-shrink-0">
                              <img src={message.avatar} alt={message.sender} className="object-cover" />
                            </Avatar>
                            <div className={`max-w-[70%] ${message.sender === "You" ? "bg-primary/20" : "bg-card"} p-3 rounded-lg`}>
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`font-medium text-sm ${message.sender === "You" ? "text-primary" : ""}`}>
                                  {message.sender}
                                </span>
                                <span className="text-xs text-muted-foreground">{message.time}</span>
                              </div>
                              <p className="text-sm">{message.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="p-3 border-t border-primary/10">
                        <div className="flex items-center gap-2">
                          <Input placeholder="Type your message..." className="flex-1" />
                          <Button>
                            <Send size={18} className="mr-2" />
                            Send
                          </Button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 flex items-center justify-center flex-col p-6">
                      <MessageSquare size={48} className="text-muted-foreground mb-4" />
                      <h3 className="text-xl font-medium mb-2">No Conversation Selected</h3>
                      <p className="text-muted-foreground text-center max-w-md">
                        Select a conversation from the sidebar or start a new one to begin chatting
                      </p>
                      <Button className="mt-4">New Conversation</Button>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="following" className="space-y-4">
            <Card className="p-4 border-primary/10">
              <h2 className="text-2xl font-semibold mb-4">People You Follow</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {followingUsers.map(user => (
                  <Card key={user.id} className="flex items-center gap-3 p-3 bg-card/80 border-primary/10">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <img src={user.avatar} alt={user.name} className="object-cover" />
                      </Avatar>
                      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${
                        user.status === 'online' ? 'bg-green-500' : 
                        user.status === 'idle' ? 'bg-amber-500' : 
                        'bg-gray-500'
                      }`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{user.name}</h4>
                      <p className="text-xs text-muted-foreground truncate">Favorite: {user.anime}</p>
                    </div>
                    <Button variant="outline" size="sm">Message</Button>
                  </Card>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="link">View All (24)</Button>
              </div>
            </Card>
            
            <Card className="p-4 border-primary/10">
              <h2 className="text-2xl font-semibold mb-4">Recommended Users</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...followingUsers].reverse().slice(0, 3).map(user => (
                  <Card key={user.id} className="flex items-center gap-3 p-3 bg-card/80 border-primary/10">
                    <Avatar className="h-12 w-12">
                      <img src={user.avatar} alt={user.name} className="object-cover" />
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{user.name}</h4>
                      <p className="text-xs text-muted-foreground truncate">Favorite: {user.anime}</p>
                    </div>
                    <Button variant="outline" size="sm">Follow</Button>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="communities" className="space-y-4">
            <Card className="p-4 border-primary/10">
              <h2 className="text-2xl font-semibold mb-4">Your Communities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {joinedCommunities.map(community => (
                  <Card key={community.id} className="p-4 bg-card/80 border-primary/10 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="h-12 w-12">
                        <img src={community.avatar} alt={community.name} className="object-cover" />
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{community.name}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                            {community.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {community.members.toLocaleString()} members
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">Visit</Button>
                      <Button size="sm" className="flex-1">Post</Button>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="link">View All Communities</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Messages;
