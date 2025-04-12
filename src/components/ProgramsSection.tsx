
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Section from "./Section";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const ProgramsSection = () => {
  const { toast } = useToast();
  
  const [weekdays] = useState([
    { id: "monday", label: "Monday" },
    { id: "tuesday", label: "Tuesday" },
    { id: "wednesday", label: "Wednesday" },
    { id: "thursday", label: "Thursday" },
    { id: "friday", label: "Friday" },
    { id: "saturday", label: "Saturday" },
    { id: "sunday", label: "Sunday" },
  ]);

  const [gyms] = useState([
    { id: "montpetit", label: "Montpetit Gym" },
    { id: "minto", label: "Minto Sports Complex" },
    { id: "lees", label: "Lees Campus Gym" }
  ]);
  
  const programs = [
    {
      id: "personal-trainer",
      title: "Personal Trainer Program",
      description: "Get matched with a certified personal trainer for free",
      features: [
        "Customized workout plans",
        "Nutritional guidance",
        "Form correction and technique tips",
        "Regular check-ins and progress tracking"
      ]
    },
    {
      id: "matchmaker",
      title: "Matchmaker Program",
      description: "Find a compatible gym buddy to train with",
      features: [
        "Matched based on goals and schedule",
        "Accountability partner",
        "Make new friends with similar interests",
        "Safer and more motivating workouts"
      ]
    }
  ];

  const handlePersonalTrainerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Your application for the Personal Trainer Program has been submitted successfully.",
    });
  };

  const handleMatchmakerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Your application for the Matchmaker Program has been submitted successfully.",
    });
  };

  return (
    <Section id="programs" title="The GymBro Programs" background="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Program Cards */}
        <div className="space-y-6">
          {programs.map((program) => (
            <Card key={program.id} className="shadow-lg border-2 border-gray-200 hover:border-gymbro-orange transition-colors duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle size={20} className="text-gymbro-orange mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gymbro-orange hover:bg-gymbro-orange/90">
                      Apply Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{program.title} Application</DialogTitle>
                    </DialogHeader>
                    
                    {program.id === "personal-trainer" ? (
                      <form onSubmit={handlePersonalTrainerSubmit} className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name</label>
                            <Input id="fullName" name="fullName" required placeholder="Your full name" />
                          </div>
                          <div>
                            <label htmlFor="studentNumber" className="block text-sm font-medium mb-1">Student Number</label>
                            <Input id="studentNumber" name="studentNumber" required placeholder="Your student number" />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">uOttawa Email</label>
                          <Input id="email" name="email" type="email" required placeholder="youremail@uottawa.ca" />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Preferred Personal Trainer</label>
                          <Select name="preferredTrainer">
                            <SelectTrigger>
                              <SelectValue placeholder="Select a trainer" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="nayan">Nayan Kar</SelectItem>
                              <SelectItem value="justin">Justin Cocchio</SelectItem>
                              <SelectItem value="mehdi">Mehdi Bibi</SelectItem>
                              <SelectItem value="axel">Axel</SelectItem>
                              <SelectItem value="noPreference">No preference</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <Checkbox id="agreement" name="agreement" required />
                          <div className="grid gap-1.5 leading-none">
                            <label
                              htmlFor="agreement"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              I agree to be contacted by The GymBro regarding my application
                            </label>
                            <p className="text-sm text-muted-foreground">
                              The GymBro may contact you via email to discuss your application and match you with a personal trainer.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex justify-end gap-2 pt-4">
                          <DialogTrigger asChild>
                            <Button variant="outline" type="button">Cancel</Button>
                          </DialogTrigger>
                          <Button type="submit" className="bg-gymbro-orange hover:bg-gymbro-orange/90">Submit Application</Button>
                        </div>
                      </form>
                    ) : (
                      <form onSubmit={handleMatchmakerSubmit} className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name</label>
                            <Input id="fullName" name="fullName" required placeholder="Your full name" />
                          </div>
                          <div>
                            <label htmlFor="studentNumber" className="block text-sm font-medium mb-1">Student Number</label>
                            <Input id="studentNumber" name="studentNumber" required placeholder="Your student number" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">uOttawa Email</label>
                            <Input id="email" name="email" type="email" required placeholder="youremail@uottawa.ca" />
                          </div>
                          <div>
                            <label htmlFor="yearOfStudy" className="block text-sm font-medium mb-1">Year of Study</label>
                            <Select name="yearOfStudy">
                              <SelectTrigger>
                                <SelectValue placeholder="Select year" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1st Year</SelectItem>
                                <SelectItem value="2">2nd Year</SelectItem>
                                <SelectItem value="3">3rd Year</SelectItem>
                                <SelectItem value="4">4th Year</SelectItem>
                                <SelectItem value="5+">5th Year or Higher</SelectItem>
                                <SelectItem value="graduate">Graduate Student</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="instagram" className="block text-sm font-medium mb-1">Instagram Handle</label>
                            <Input id="instagram" name="instagram" placeholder="@yourusername" />
                          </div>
                          <div>
                            <label htmlFor="facebook" className="block text-sm font-medium mb-1">Facebook Profile</label>
                            <Input id="facebook" name="facebook" placeholder="Your Facebook profile URL" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Your Gender</label>
                            <RadioGroup defaultValue="male" name="gender">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="male" id="male" />
                                <Label htmlFor="male">Male</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="female" id="female" />
                                <Label htmlFor="female">Female</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="other" id="other" />
                                <Label htmlFor="other">Other</Label>
                              </div>
                            </RadioGroup>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Preferred Partner's Gender</label>
                            <RadioGroup defaultValue="any" name="preferredGender">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="male" id="p-male" />
                                <Label htmlFor="p-male">Male</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="female" id="p-female" />
                                <Label htmlFor="p-female">Female</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="any" id="p-any" />
                                <Label htmlFor="p-any">No Preference</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Workout Goals</label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="strength" name="goals[]" value="strength" />
                              <label htmlFor="strength">Strength Training</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="bodybuilding" name="goals[]" value="bodybuilding" />
                              <label htmlFor="bodybuilding">Bodybuilding</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="cardio" name="goals[]" value="cardio" />
                              <label htmlFor="cardio">Cardio</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="weightLoss" name="goals[]" value="weightLoss" />
                              <label htmlFor="weightLoss">Weight Loss</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="generalFitness" name="goals[]" value="generalFitness" />
                              <label htmlFor="generalFitness">General Fitness</label>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Preferred Workout Days</label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {weekdays.map((day) => (
                              <div key={day.id} className="flex items-center space-x-2">
                                <Checkbox id={day.id} name="days[]" value={day.id} />
                                <label htmlFor={day.id}>{day.label}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Preferred Gym</label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {gyms.map((gym) => (
                              <div key={gym.id} className="flex items-center space-x-2">
                                <Checkbox id={gym.id} name="gyms[]" value={gym.id} />
                                <label htmlFor={gym.id}>{gym.label}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="comments" className="block text-sm font-medium mb-1">Additional Comments or Questions</label>
                          <Textarea id="comments" name="comments" placeholder="Any additional information you'd like to share..." />
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <Checkbox id="agreement" name="agreement" required />
                          <div className="grid gap-1.5 leading-none">
                            <label
                              htmlFor="agreement"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              I agree to be contacted by The GymBro regarding my application
                            </label>
                            <p className="text-sm text-muted-foreground">
                              The GymBro may contact you via email to discuss your application and match you with a gym partner.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex justify-end gap-2 pt-4">
                          <DialogTrigger asChild>
                            <Button variant="outline" type="button">Cancel</Button>
                          </DialogTrigger>
                          <Button type="submit" className="bg-gymbro-orange hover:bg-gymbro-orange/90">Submit Application</Button>
                        </div>
                      </form>
                    )}
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Program Details */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold mb-6">Program Details</h3>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                The GymBros Personal Trainer Program
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p className="mb-4">
                  The GymBros Personal Trainer Program is a comprehensive, 2-month experience that links students at the University of Ottawa with certified Personal Trainers at no cost.
                </p>
                <p className="mb-4">
                  With the help of a Personal Trainer, you will have the opportunity to step outside of your comfort zone and correctly learn new exercises, build a structured routine, and transform your fitness mindset.
                </p>
                <p className="mb-4">
                  Our personal trainers are highly experienced in developing personalized fitness and nutrition plans that apply to your unique goals, and are also students themselves; they understand that life is hectic, and spending 6 days a week in the gym is unrealistic for many of us. Therefore, every program is flexible to your schedule and commitments while still providing a full personal trainer experience. Whatever your target is, whether it be bodybuilding or functional fitness, our Personal Trainers will cater to your needs to guide and motivate you through your health journey.
                </p>
                <p>
                  To begin working with a Personal Trainer, you can apply through the link below. There you will be asked to provide your preferred training times, your fitness goals, and other pertinent information. You will also have the option to give preference to one of our many qualified Personal Trainers, whose descriptions can be found on our Instagram.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                The Matchmaker Program
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p className="mb-4">
                  The GymBro Matchmaker Program is designed to help students connect with certified personal trainers who have shared interests and are able to support you through your fitness journey. This includes similar schedules, fitness goals, and with a focus on your exercise preferences. You can easily find a motivating gym companion through this program. Whether you are looking for someone to hold you accountable, a running partner, or someone to lift with, this program gives you the opportunity to match with an individual that will help you with your desired objective(s).
                </p>
                <p className="mb-4">
                  The program matches students with compatible gym companions. This tactic ensures that each individual has someone to train with who aligns with their training routines and goals. By signing up for the GymBro Matchmaker Program, you will receive a variety of different benefits. This program offers accountability and motivation, to maintain consistency and dedication with workouts. Students are able to meet new people and form relationships through the use of physical activity, which will connect them to the local fitness community on our campus! When exercising with someone, safety is higher along with self-esteem; this is true whether you are lifting heavy weights and are in need of a spotter, or if you merely want to feel more at ease in a gym environment.
                </p>
                <p className="mb-4">
                  Participating within The Matchmaker Program is effortless and takes minimal time. Students are simply required to fill out a short online form. It contains various questions, including available gym times, fitness goals, fitness level, and favoured workout styles.
                </p>
                <p>
                  Do not hesitate to train with others. Join the GymBro Matchmaker Program today and begin taking your fitness journey to a new level. Fill out the form provided and find your best suitable GymBro!
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Section>
  );
};

export default ProgramsSection;
