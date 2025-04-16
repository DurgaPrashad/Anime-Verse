
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, Eye, ArrowRight } from "lucide-react";

const forumPosts = [
  {
    id: 1,
    title: "Theories about the ending of Attack on Titan",
    category: "Fan Theories",
    content: "I've been thinking about the possible endings for AoT and wanted to share my thoughts...",
    author: {
      name: "TitanFan42",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    comments: 48,
    likes: 124,
    views: 1240,
    isHot: true,
    timeAgo: "3 hours ago"
  },
  {
    id: 2,
    title: "Best anime of Winter 2025 season - My reviews",
    category: "Reviews",
    content: "After watching all the premieres, here's my ranking of this season's new anime...",
    author: {
      name: "AnimeReviewer",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    comments: 35,
    likes: 89,
    views: 720,
    isHot: false,
    timeAgo: "12 hours ago"
  },
  {
    id: 3,
    title: "New to anime - Recommendations for beginners?",
    category: "Recommendations",
    content: "I've only seen a few anime like Death Note and My Hero Academia. What should I watch next?",
    author: {
      name: "NewWeeb101",
      avatar: "https://i.pravatar.cc/150?img=65"
    },
    comments: 92,
    likes: 67,
    views: 543,
    isHot: true,
    timeAgo: "1 day ago"
  }
];

const ForumPreview = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-12">
          <div>
            <h2 className="h2 mb-2">Active Discussions</h2>
            <p className="text-foreground/70">
              Join conversations about your favorite anime
            </p>
          </div>
          <Button variant="outline" className="flex items-center mt-4 md:mt-0">
            Browse All Forums <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {forumPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  {post.isHot && (
                    <Badge className="bg-secondary hover:bg-secondary/80">Hot</Badge>
                  )}
                </div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {post.content}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-xs font-medium">{post.author.name}</p>
                      <p className="text-xs text-muted-foreground">{post.timeAgo}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 bg-muted/50 flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {post.comments}
                  </span>
                  <span className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {post.likes}
                  </span>
                  <span className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {post.views}
                  </span>
                </div>
                <Button variant="ghost" className="h-8 px-2" size="sm">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForumPreview;
