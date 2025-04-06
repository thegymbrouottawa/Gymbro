
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
    // All photos have been removed as requested
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
