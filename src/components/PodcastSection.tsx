
import { Mic, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Section from "./Section";

const PodcastSection = () => {
  const { toast } = useToast();

  const handlePodcastSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Podcast Link Added",
      description: "Your podcast link has been submitted successfully.",
    });
  };

  return (
    <Section id="podcast" title="The GymBro Podcast" background="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">First Bodybuilding Podcast at UOttawa</h3>
          <p className="text-lg mb-6">
            The GymBro Podcast is the first bodybuilding focused podcast at the University Of Ottawa. With the goal of making fitness more accessible, relatable, and engaging by providing real, evidence-based knowledge while keeping the conversations lighthearted and fun, it is led by two student co-hosts, Diana Zinovjeva and Noah Ramos.
          </p>
          <p className="text-lg mb-6">
            We focus on interviewing personal trainers, bodybuilders, experienced athletes, and notable community members, anyone with valuable insights into fitness, nutrition, and mental health. But what truly makes us unique is our interactive approach, we bring students into the conversation, discussing their challenges and fitness journeys to create a sense of community and shared experience.
          </p>
          <p className="text-lg">
            Beyond education, the GymBro Podcast is about connection. There's a lot of false information out there, and we aim to cut through the noise by delivering real, science-backed fitness knowledge from credible sources. By making fitness approachable and fun, we hope to build a strong Ottawa-based fitness community where students feel supported on their journey.
          </p>
        </div>
        
        <div>
          <div className="bg-black rounded-lg p-8 text-white shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <Mic size={48} className="text-gymbro-orange mr-4" />
              <h3 className="text-3xl font-bold">Listen Now</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              <Card className="bg-gymbro-darkGray border-gray-700">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">Episode 12: Nutrition Myths Debunked</h4>
                      <p className="text-sm text-gray-400">April 2, 2025</p>
                    </div>
                    <Button variant="ghost" size="icon" className="text-gymbro-orange">
                      <ExternalLink size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gymbro-darkGray border-gray-700">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">Episode 11: Building Muscle as a Student</h4>
                      <p className="text-sm text-gray-400">March 26, 2025</p>
                    </div>
                    <Button variant="ghost" size="icon" className="text-gymbro-orange">
                      <ExternalLink size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="border-t border-gray-700 pt-6">
              <h4 className="text-xl font-bold mb-4">Add New Podcast Episode</h4>
              <form onSubmit={handlePodcastSubmit} className="space-y-4">
                <Input 
                  placeholder="Episode Title" 
                  className="bg-gray-800 border-gray-700"
                  required
                />
                <Input 
                  placeholder="Podcast URL" 
                  className="bg-gray-800 border-gray-700"
                  type="url"
                  required
                />
                <Button type="submit" className="w-full bg-gymbro-orange hover:bg-gymbro-orange/90">
                  Add Episode
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PodcastSection;
