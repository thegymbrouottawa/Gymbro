
import { Card, CardContent } from "@/components/ui/card";
import Section from "./Section";

const AboutSection = () => {
  return (
    <Section id="about" title="About Us" background="light">
      <div className="grid grid-cols-1 gap-12">
        <div>
          <p className="text-lg mb-4">
            The GymBro is a club founded on community, the common interest of betterment and motivation for our student body. With the goal of filling the gap in fitness knowledge and accessibility, we strive to provide students with the resources and guidance they need to succeed in their fitness journeys.
          </p>
          <p className="text-lg mb-4">
            This journey was sparked by our founder, Hanif Ehsani and his personal experience with bodybuilding. Hanif, who is very passionate about fitness and was unsure where to start found himself wanting to improve himself, but not being able to afford expensive personal training sessions made him realize how difficult it was for students and others with limited resources to access proper guidance with training.
          </p>
          <p className="text-lg mb-4">
            Through this, he saw an opportunity to change that. His vision led to him creating The GymBro, a club for the common person who wants to learn how to better themselves through fitness in a safe, affordable and accessible way at the University of Ottawa.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <p className="text-lg mb-6">
          In the early days of Hanif's gym journey, he quickly learned that there was a gap between fitness education and bodybuilding on campus, and he then partnered with Farnam who is the President who is also a big gym enthusiast to help move our mission forward. The two of them shared the same vision and passion to better our student body and create a more inclusive and progressive fitness community together. They expanded our club and began to set the foundation for the clubs of growth. Through their successful partnership and leadership.
        </p>
        
        <p className="text-lg mb-6">
          We are currently the first and the only bodybuilding club on campus. We offer free training resources for students who are eager to build muscle, have proper education on fitness and also be able to learn the technical aspect of bodybuilding.
        </p>
        
        <p className="text-lg mb-8">
          Today, we are a club with 82 members, over 1,000 followers on social media, and a growing presence in the student fitness community! We have successfully hosted multiple training sessions, collaborated with fitness professionals, and built a supportive space where students can train, learn, and grow together. Our impact continues to expand, inspiring more students to take control of their health and fitness while fostering a strong sense of community at the University of Ottawa.
        </p>
        
        <div className="mt-8 mb-12">
          <img 
            src="/lovable-uploads/e91d1d78-1823-4094-8e9a-b99e3a102f29.png" 
            alt="The GymBro Team Award Ceremony" 
            className="w-full md:w-3/4 mx-auto h-auto rounded-lg shadow-xl"
          />
          <p className="text-center text-gray-600 mt-2 italic">The GymBro team celebrating at the Student Life Awards ceremony</p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6">Our Founder: Hanif Ehsani</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <img 
              src="/lovable-uploads/4cb05fe8-ef36-4be0-8587-cad866e313af.png" 
              alt="Hanif Ehsani" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-lg mb-4">
              The Founder and Senior Executive Consultant of The GymBro, Hanif plays a key role in guiding the club's members and departments, offering support and consultation on every project. His vision is to make fitness accessible, inclusive, and welcoming for all students, ensuring that anyone who steps into the gym has the resources and guidance they need to succeed.
            </p>
            <p className="text-lg mb-4">
              Hanif, a Communication and Political Science student, first joined the gym at 16 years old but struggled with equipment use and form. Relying on YouTube tutorials, he learned through trial and error, often leading to injuries. When he started university, he saw other students facing the same struggles and realized there were no free resources to help. That's what inspired him to create The GymBro, offering free trainers and fitness advice to make sure students learn and progress safely.
            </p>
            <p className="text-lg">
              For Hanif, fitness is about more than just physical strength, it's about mental discipline, patience, and self-growth. Waking up early, staying committed, and pushing through challenges have shaped his mindset in and out of the gym. His goal for The GymBro is to build a supportive student community where everyone, regardless of experience, feels empowered to train, learn, and grow together.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
