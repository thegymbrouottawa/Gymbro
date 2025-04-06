
import { CheckCircle } from "lucide-react";
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

const ProgramsSection = () => {
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

  return (
    <Section id="programs" title="GymBro Programs" background="light">
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
                <Button className="w-full bg-gymbro-orange hover:bg-gymbro-orange/90">
                  Apply Now
                </Button>
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
          
          <Separator className="my-6" />
          
          <div className="mt-6">
            <h4 className="text-xl font-bold mb-4">Ready to Get Started?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button className="bg-gymbro-orange hover:bg-gymbro-orange/90 h-auto py-3">
                Apply for Personal Trainer
              </Button>
              <Button variant="outline" className="border-gymbro-orange text-gymbro-orange hover:bg-gymbro-orange/10 h-auto py-3">
                Find a Gym Partner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProgramsSection;
