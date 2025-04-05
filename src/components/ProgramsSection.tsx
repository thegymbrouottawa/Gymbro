
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Section from "./Section";

const ProgramsSection = () => {
  const { toast } = useToast();
  
  const handleApplicationSubmit = (e: React.FormEvent<HTMLFormElement>, program: string) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: `Your ${program} application has been received. We'll contact you soon!`,
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Section id="programs" title="Our Programs" background="light">
      <Tabs defaultValue="trainer" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="trainer">Personal Trainer Program</TabsTrigger>
          <TabsTrigger value="matchmaker">Matchmaker Program</TabsTrigger>
        </TabsList>
        
        <TabsContent value="trainer">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Personal Trainer Program</h3>
              <p className="text-lg mb-4">
                The GymBros Personal Trainer Program is a comprehensive, 2-month experience that links students at the University of Ottawa with certified Personal Trainers at no cost.
              </p>
              <p className="text-lg mb-4">
                With the help of a Personal Trainer, you will have the opportunity to step outside of your comfort zone and correctly learn new exercises, build a structured routine, and transform your fitness mindset.
              </p>
              <p className="text-lg">
                Our personal trainers are highly experienced in developing personalized fitness and nutrition plans that apply to your unique goals, and are also students themselves; they understand that life is hectic, and spending 6 days a week in the gym is unrealistic for many of us.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <h4 className="text-xl font-bold mb-4 text-gymbro-orange">Apply for the Personal Trainer Program</h4>
              <form onSubmit={(e) => handleApplicationSubmit(e, "Personal Trainer Program")} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="pt-name" className="text-sm font-medium">Full Name</label>
                  <Input id="pt-name" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="pt-email" className="text-sm font-medium">UOttawa Email</label>
                  <Input id="pt-email" type="email" placeholder="example@uottawa.ca" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="pt-student-number" className="text-sm font-medium">Student Number</label>
                  <Input id="pt-student-number" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="pt-goals" className="text-sm font-medium">Fitness Goals</label>
                  <Textarea id="pt-goals" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="pt-comments" className="text-sm font-medium">Additional Comments</label>
                  <Textarea id="pt-comments" />
                </div>
                
                <Button type="submit" className="w-full bg-gymbro-orange hover:bg-gymbro-orange/90">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="matchmaker">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Matchmaker Program</h3>
              <p className="text-lg mb-4">
                The GymBro Matchmaker Program is designed to help students connect with certified personal trainers who have shared interests and are able to support you through your fitness journey. This includes similar schedules, fitness goals, and with a focus on your exercise preferences.
              </p>
              <p className="text-lg mb-4">
                The program matches students with compatible gym companions. This tactic ensures that each individual has someone to train with who aligns with their training routines and goals.
              </p>
              <p className="text-lg">
                By signing up for the GymBro Matchmaker Program, you will receive a variety of different benefits. This program offers accountability and motivation, to maintain consistency and dedication with workouts. Students are able to meet new people and form relationships through the use of physical activity, which will connect them to the local fitness community on our campus!
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <h4 className="text-xl font-bold mb-4 text-gymbro-orange">Apply for the Matchmaker Program</h4>
              <form onSubmit={(e) => handleApplicationSubmit(e, "Matchmaker Program")} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="mm-name" className="text-sm font-medium">Full Name</label>
                  <Input id="mm-name" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="mm-email" className="text-sm font-medium">UOttawa Email</label>
                  <Input id="mm-email" type="email" placeholder="example@uottawa.ca" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="mm-student-number" className="text-sm font-medium">Student Number</label>
                  <Input id="mm-student-number" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="mm-schedule" className="text-sm font-medium">Available Gym Times</label>
                  <Textarea id="mm-schedule" placeholder="E.g., Mon-Wed-Fri evenings, weekends mornings, etc." required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="mm-goals" className="text-sm font-medium">Fitness Goals</label>
                  <Textarea id="mm-goals" required />
                </div>
                
                <Button type="submit" className="w-full bg-gymbro-orange hover:bg-gymbro-orange/90">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Section>
  );
};

export default ProgramsSection;
