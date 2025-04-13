import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import emailjs from "emailjs-com";

const ProgramsSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    { id: "lees", label: "Lees Campus Gym" },
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
        "Regular check-ins and progress tracking",
      ],
    },
    {
      id: "matchmaker",
      title: "Matchmaker Program",
      description: "Find a compatible gym buddy to train with",
      features: [
        "Matched based on goals and schedule",
        "Accountability partner",
        "Make new friends with similar interests",
        "Safer and more motivating workouts",
      ],
    },
  ];

  const handleFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    programId: string
  ) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target as HTMLFormElement);

    const data = {
      fullName: formData.get("fullName")?.toString() || "",
      studentNumber: formData.get("studentNumber")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      instagram: formData.get("instagram")?.toString() || "",
      facebook: formData.get("facebook")?.toString() || "",
      gender: formData.get("gender")?.toString() || "",
      preferredGender: formData.get("preferredGender")?.toString() || "",
      comments: formData.get("comments")?.toString() || "",
      goals: formData.getAll("goals[]").map(String),
      gyms: formData.getAll("gyms[]").map(String),
      days: formData.getAll("days[]").map(String),
      program: programId,
    };

    try {
      await emailjs.send(
        "service_dpqb51e", // Identifiant du service
        "template_8kz4d6c", // Identifiant du modèle (template)
        {
          ...data, // Cela inclut toutes les données du formulaire
          goals: data.goals.join(", "), // Joindre les objectifs (multiple) en une chaîne de caractères
          days: data.days.join(", "), // Joindre les jours (multiple) en une chaîne de caractères
          gyms: data.gyms.join(", "), // Joindre les gyms (multiple) en une chaîne de caractères
        },
        "SiYnPi7Orj4PK_WEV" // Ton identifiant d'utilisateur (userID)
      );

      toast({
        title: "Application Submitted",
        description: `Your application for the ${
          programId === "personal-trainer" ? "Personal Trainer" : "Matchmaker"
        } Program has been submitted successfully.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue with your application submission.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="programs" title="The GymBro Programs" background="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {programs.map((program) => (
          <Card
            key={program.id}
            className="shadow-lg border-2 border-gray-200 hover:border-gymbro-orange transition-colors duration-300"
          >
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <ul className="space-y-2 mb-6">
                {program.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle
                      size={20}
                      className="text-gymbro-orange mr-2"
                    />
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

                  <form
                    onSubmit={(event) => handleFormSubmit(event, program.id)}
                    className="space-y-4 mt-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input name="fullName" required placeholder="Full Name" />
                      <Input
                        name="studentNumber"
                        required
                        placeholder="Student Number"
                      />
                    </div>

                    <Input
                      name="email"
                      type="email"
                      required
                      placeholder="uOttawa Email"
                    />

                    {program.id === "matchmaker" && (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input
                            name="instagram"
                            placeholder="Instagram Handle"
                          />
                          <Input
                            name="facebook"
                            placeholder="Facebook Profile URL"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm mb-1">Your Gender</p>
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
                            <p className="text-sm mb-1">
                              Preferred Partner's Gender
                            </p>
                            <RadioGroup
                              defaultValue="any"
                              name="preferredGender"
                            >
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
                      </>
                    )}

                    <div>
                      <p className="text-sm font-medium mb-1">Workout Goals</p>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "Strength",
                          "Endurance",
                          "Weight Loss",
                          "Muscle Gain",
                        ].map((goal) => (
                          <div
                            key={goal}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox id={goal} name="goals[]" value={goal} />
                            <Label htmlFor={goal}>{goal}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-1">Preferred Days</p>
                      <div className="grid grid-cols-2 gap-2">
                        {weekdays.map((day) => (
                          <div
                            key={day.id}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={day.id}
                              name="days[]"
                              value={day.id}
                            />
                            <Label htmlFor={day.id}>{day.label}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-1">Preferred Gyms</p>
                      <div className="grid grid-cols-2 gap-2">
                        {gyms.map((gym) => (
                          <div
                            key={gym.id}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={gym.id}
                              name="gyms[]"
                              value={gym.id}
                            />
                            <Label htmlFor={gym.id}>{gym.label}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Textarea
                      name="comments"
                      placeholder="Let us know anything else"
                    />

                    <Button
                      type="submit"
                      className="w-full mt-4"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ProgramsSection;
