
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { 
  User, 
  Bell, 
  Palette, 
  Shield, 
  CreditCard, 
  HelpCircle,
  Upload,
  Star,
  CheckCircle
} from "lucide-react";

const Settings = () => {
  const [username, setUsername] = useState("KuroNeko");
  const [email, setEmail] = useState("user@example.com");
  const [colorTheme, setColorTheme] = useState<"blue" | "yellow" | "green">("blue");
  const [fontScale, setFontScale] = useState(100);
  const [uiDensity, setUiDensity] = useState(50);
  const [notifications, setNotifications] = useState({
    newMessages: true,
    mentions: true,
    follows: true,
    postLikes: false,
    communityUpdates: true,
    emailNotifications: false,
  });

  // Function to apply theme color
  const applyTheme = (theme: "blue" | "yellow" | "green") => {
    setColorTheme(theme);
    const root = document.documentElement;
    
    if (theme === "blue") {
      root.style.setProperty('--primary-rgb', '93, 47, 223');
    } else if (theme === "yellow") {
      root.style.setProperty('--primary-rgb', '234, 179, 8');
    } else if (theme === "green") {
      root.style.setProperty('--primary-rgb', '34, 197, 94');
    }
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">Settings</h1>
        
        <Tabs defaultValue="account" className="w-full">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-48 shrink-0">
              <TabsList className="flex flex-col w-full h-auto gap-1">
                <TabsTrigger value="account" className="w-full justify-start px-3">
                  <User size={16} className="mr-2" />
                  Account
                </TabsTrigger>
                <TabsTrigger value="appearance" className="w-full justify-start px-3">
                  <Palette size={16} className="mr-2" />
                  Appearance
                </TabsTrigger>
                <TabsTrigger value="notifications" className="w-full justify-start px-3">
                  <Bell size={16} className="mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="privacy" className="w-full justify-start px-3">
                  <Shield size={16} className="mr-2" />
                  Privacy
                </TabsTrigger>
                <TabsTrigger value="premium" className="w-full justify-start px-3">
                  <Star size={16} className="mr-2" />
                  Premium
                </TabsTrigger>
                <TabsTrigger value="help" className="w-full justify-start px-3">
                  <HelpCircle size={16} className="mr-2" />
                  Help & Support
                </TabsTrigger>
              </TabsList>
            </div>
            
            <div className="flex-1">
              <TabsContent value="account" className="space-y-4 mt-0">
                <Card className="p-6 border-primary/10">
                  <h2 className="text-2xl font-semibold mb-6">Account Information</h2>
                  
                  <div className="flex flex-col md:flex-row gap-8 mb-6">
                    <div className="shrink-0 flex flex-col items-center">
                      <Avatar className="h-24 w-24 mb-4">
                        <img src="/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png" alt="User avatar" />
                      </Avatar>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Upload size={14} />
                        Change Avatar
                      </Button>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="username" className="text-sm font-medium">Username</label>
                        <Input 
                          id="username" 
                          value={username} 
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="bio" className="text-sm font-medium">Bio</label>
                        <textarea 
                          id="bio" 
                          className="w-full p-2 border rounded-md bg-background resize-none h-24"
                          placeholder="Tell others about yourself..."
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="appearance" className="space-y-4 mt-0">
                <Card className="p-6 border-primary/10">
                  <h2 className="text-2xl font-semibold mb-6">Appearance Settings</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Theme Colors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button 
                        className={`h-20 w-full bg-[rgb(93,47,223)] hover:bg-[rgb(93,47,223)]/90 text-white ${colorTheme === 'blue' ? 'ring-2 ring-offset-2 ring-[rgb(93,47,223)]' : ''}`}
                        onClick={() => applyTheme("blue")}
                      >
                        {colorTheme === 'blue' && <CheckCircle className="absolute top-2 right-2" size={20} />}
                        Blue Theme
                      </Button>
                      <Button 
                        className={`h-20 w-full bg-[rgb(234,179,8)] hover:bg-[rgb(234,179,8)]/90 text-white ${colorTheme === 'yellow' ? 'ring-2 ring-offset-2 ring-[rgb(234,179,8)]' : ''}`}
                        onClick={() => applyTheme("yellow")}
                      >
                        {colorTheme === 'yellow' && <CheckCircle className="absolute top-2 right-2" size={20} />}
                        Yellow Theme
                      </Button>
                      <Button 
                        className={`h-20 w-full bg-[rgb(34,197,94)] hover:bg-[rgb(34,197,94)]/90 text-white ${colorTheme === 'green' ? 'ring-2 ring-offset-2 ring-[rgb(34,197,94)]' : ''}`}
                        onClick={() => applyTheme("green")}
                      >
                        {colorTheme === 'green' && <CheckCircle className="absolute top-2 right-2" size={20} />}
                        Green Theme
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Text Size</h3>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground mb-2">
                        Adjust the size of text throughout the application ({fontScale}%)
                      </div>
                      <Slider
                        value={[fontScale]}
                        min={80}
                        max={120}
                        step={5}
                        onValueChange={(value) => setFontScale(value[0])}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Smaller</span>
                        <span>Default</span>
                        <span>Larger</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">UI Density</h3>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground mb-2">
                        Adjust the spacing of UI elements ({uiDensity}%)
                      </div>
                      <Slider
                        value={[uiDensity]}
                        min={30}
                        max={70}
                        step={10}
                        onValueChange={(value) => setUiDensity(value[0])}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Compact</span>
                        <span>Default</span>
                        <span>Spacious</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Reset to Default</Button>
                    <Button>Save Changes</Button>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications" className="space-y-4 mt-0">
                <Card className="p-6 border-primary/10">
                  <h2 className="text-2xl font-semibold mb-6">Notification Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">New Messages</h3>
                        <p className="text-sm text-muted-foreground">Get notified when you receive a new message</p>
                      </div>
                      <Switch
                        checked={notifications.newMessages}
                        onCheckedChange={(checked) => setNotifications({...notifications, newMessages: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Mentions</h3>
                        <p className="text-sm text-muted-foreground">Get notified when you're mentioned in posts or comments</p>
                      </div>
                      <Switch
                        checked={notifications.mentions}
                        onCheckedChange={(checked) => setNotifications({...notifications, mentions: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">New Followers</h3>
                        <p className="text-sm text-muted-foreground">Get notified when someone follows you</p>
                      </div>
                      <Switch
                        checked={notifications.follows}
                        onCheckedChange={(checked) => setNotifications({...notifications, follows: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Post Likes</h3>
                        <p className="text-sm text-muted-foreground">Get notified when your posts receive likes</p>
                      </div>
                      <Switch
                        checked={notifications.postLikes}
                        onCheckedChange={(checked) => setNotifications({...notifications, postLikes: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Community Updates</h3>
                        <p className="text-sm text-muted-foreground">Get notified about updates in communities you've joined</p>
                      </div>
                      <Switch
                        checked={notifications.communityUpdates}
                        onCheckedChange={(checked) => setNotifications({...notifications, communityUpdates: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                      </div>
                      <Switch
                        checked={notifications.emailNotifications}
                        onCheckedChange={(checked) => setNotifications({...notifications, emailNotifications: checked})}
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <Button>Save Preferences</Button>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="privacy" className="space-y-4 mt-0">
                <Card className="p-6 border-primary/10">
                  <h2 className="text-2xl font-semibold mb-6">Privacy Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Profile Visibility</h3>
                        <p className="text-sm text-muted-foreground">Make your profile visible to everyone</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Online Status</h3>
                        <p className="text-sm text-muted-foreground">Show when you're online</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Activity Status</h3>
                        <p className="text-sm text-muted-foreground">Show what you're watching or reading</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Messaging</h3>
                        <p className="text-sm text-muted-foreground">Allow direct messages from non-followers</p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Data Usage</h3>
                        <p className="text-sm text-muted-foreground">Allow anonymous usage data collection</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  
                  <div className="mt-6 border-t border-primary/10 pt-6">
                    <h3 className="font-medium mb-4">Advanced Privacy</h3>
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full justify-start">Manage Blocked Users</Button>
                      <Button variant="outline" className="w-full justify-start">Download My Data</Button>
                      <Button variant="destructive" className="w-full justify-start">Delete Account</Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="premium" className="space-y-4 mt-0">
                <Card className="p-6 border-primary/10 bg-gradient-to-br from-background to-primary/10">
                  <div className="flex flex-col items-center text-center mb-6">
                    <Star className="h-16 w-16 text-yellow-500 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Upgrade to AnimeVerse Premium</h2>
                    <p className="text-muted-foreground max-w-lg">
                      Unlock exclusive features, remove ads, and get premium badges for your profile.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="p-6 border-primary/10 bg-card/80">
                      <h3 className="font-bold text-xl mb-4">Monthly</h3>
                      <div className="text-3xl font-bold mb-2">$4.99<span className="text-lg font-normal">/month</span></div>
                      <p className="text-sm text-muted-foreground mb-6">Perfect for trying out premium features</p>
                      <Button className="w-full">Subscribe</Button>
                    </Card>
                    
                    <Card className="p-6 border-primary/10 bg-card/80 relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs py-1 px-3 rounded-full">
                        Most Popular
                      </div>
                      <h3 className="font-bold text-xl mb-4">Annual</h3>
                      <div className="text-3xl font-bold mb-2">$39.99<span className="text-lg font-normal">/year</span></div>
                      <p className="text-sm text-muted-foreground mb-6">Save over 30% compared to monthly</p>
                      <Button className="w-full">Subscribe</Button>
                    </Card>
                    
                    <Card className="p-6 border-primary/10 bg-card/80">
                      <h3 className="font-bold text-xl mb-4">Lifetime</h3>
                      <div className="text-3xl font-bold mb-2">$199.99</div>
                      <p className="text-sm text-muted-foreground mb-6">One-time payment for lifetime access</p>
                      <Button className="w-full">Purchase</Button>
                    </Card>
                  </div>
                  
                  <div className="border-t border-primary/10 pt-6">
                    <h3 className="font-bold mb-4">Premium Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-primary" size={18} />
                        <span>Ad-free browsing experience</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-primary" size={18} />
                        <span>Exclusive profile badges and themes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-primary" size={18} />
                        <span>Early access to new features</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-primary" size={18} />
                        <span>Priority customer support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-primary" size={18} />
                        <span>Unlimited uploads for fan art and creations</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="help" className="space-y-4 mt-0">
                <Card className="p-6 border-primary/10">
                  <h2 className="text-2xl font-semibold mb-6">Help & Support</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg mb-2">Frequently Asked Questions</h3>
                      <div className="space-y-4 mb-6">
                        <Button variant="outline" className="w-full justify-start">
                          How do I customize my profile?
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          How can I create or join a community?
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          How do I upload fan art?
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          How do I report inappropriate content?
                        </Button>
                      </div>
                    </div>
                    
                    <div className="border-t border-primary/10 pt-6">
                      <h3 className="font-medium text-lg mb-2">Contact Support</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Need additional help? Our support team is ready to assist you.
                      </p>
                      <Button className="flex items-center gap-2">
                        <HelpCircle size={16} />
                        Contact Support
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
