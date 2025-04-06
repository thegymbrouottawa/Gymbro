
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Section from "./Section";
import { Card } from "@/components/ui/card";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const GallerySection = () => {
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/lovable-uploads/fdb94f34-753e-43a7-90ff-54486cca094b.png",
      alt: "Team member",
      category: "team"
    },
    {
      id: 2,
      src: "/lovable-uploads/94e11ef1-148d-4754-a942-3d58b3690a88.png",
      alt: "Team member portrait",
      category: "portraits"
    },
    {
      id: 3,
      src: "/lovable-uploads/95ef6e93-cc49-433e-b719-9c02b580c4f3.png",
      alt: "Award ceremony",
      category: "events"
    },
    {
      id: 4,
      src: "/lovable-uploads/ba0ffc31-9a05-400f-b674-3baa7d68df52.png",
      alt: "Student Life Awards trophy",
      category: "awards"
    },
    {
      id: 5,
      src: "/lovable-uploads/7705dabc-2de9-4b37-9ed4-9ef324705426.png",
      alt: "Team member portrait",
      category: "portraits"
    }
  ];

  const categories = ["all", "team", "portraits", "events", "awards"];

  return (
    <Section id="gallery" title="Gallery" background="light">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full flex flex-wrap justify-center mb-8 bg-transparent">
          {categories.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="text-base capitalize px-6 data-[state=active]:bg-gymbro-orange data-[state=active]:text-white"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages
                .filter((img) => category === "all" || img.category === category)
                .map((image) => (
                  <Card key={image.id} className="overflow-hidden border-none shadow-lg bg-transparent">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                      />
                    </div>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
};

export default GallerySection;
