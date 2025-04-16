
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-anime opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-secondary/20 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="h2 mb-4">Join The AnimeVerse Community</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Connect with fellow anime lovers, share your creations, and discover new series. Join thousands of passionate fans in the ultimate anime social platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12"
            />
            <Button className="btn-anime w-full sm:w-auto h-12">
              Join Now
            </Button>
          </div>
          
          <div className="mt-6 text-sm text-muted-foreground">
            Already have an account? <a href="#" className="text-primary hover:underline">Sign In</a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm">
              <div className="text-4xl font-bold anime-gradient-text mb-2">50K+</div>
              <div className="text-foreground/70">Active Members</div>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm">
              <div className="text-4xl font-bold anime-gradient-text mb-2">200+</div>
              <div className="text-foreground/70">Anime Communities</div>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm">
              <div className="text-4xl font-bold anime-gradient-text mb-2">10K+</div>
              <div className="text-foreground/70">Fan Creations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
