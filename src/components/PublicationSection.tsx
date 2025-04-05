
import { useState } from "react";
import { BookOpen, MessageSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Section from "./Section";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  comments: Comment[];
}

interface Comment {
  id: number;
  name: string;
  content: string;
  date: string;
}

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

const PublicationSection = () => {
  const { toast } = useToast();
  
  const [articles] = useState<Article[]>([
    {
      id: 1,
      title: "The Truth About Protein Consumption",
      excerpt: "Discover the real science behind protein intake and muscle building, including practical recommendations for university students.",
      date: "March 30, 2025",
      author: "Fitness Research Team",
      comments: [
        {
          id: 1,
          name: "Sarah K.",
          content: "This article completely changed my approach to protein intake. Thank you!",
          date: "April 1, 2025"
        }
      ]
    },
    {
      id: 2,
      title: "Balancing Studies and Fitness",
      excerpt: "Learn effective strategies for maintaining your fitness goals while excelling in your academic pursuits.",
      date: "March 25, 2025",
      author: "Student Success Team",
      comments: []
    }
  ]);

  const [teamMembers] = useState<TeamMember[]>([
    {
      name: "Ana Milinkovic",
      title: "Editor in Chief & Publisher",
      image: "/images/publication-editor.jpg"
    },
    {
      name: "Kaylen White",
      title: "Head of Marketing",
      image: "/images/publication-marketing.jpg"
    },
    {
      name: "Maria Vukojevic",
      title: "Writer",
      image: "/images/publication-writer1.jpg"
    },
    {
      name: "Eva Milinković",
      title: "Writer",
      image: "/images/publication-writer2.jpg"
    }
  ]);
  
  const [commentText, setCommentText] = useState("");
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);

  const handleCommentSubmit = (articleId: number) => {
    toast({
      title: "Comment Added",
      description: "Your comment has been added to the article.",
    });
    setCommentText("");
    setSelectedArticleId(null);
  };

  return (
    <Section id="publication" title="The GymBro Publication" background="dark">
      <div className="mb-12 max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-300">
          As the first bodybuilding club at the University of Ottawa, The GymBro is vital in creating a platform to amplify all elements of this lifestyle. The Publication team is dedicated to transforming fitness frameworks into engaging content to spread awareness and inspire students to embrace health and wellness lifestyles.
        </p>
      </div>
      
      {/* Publication Team */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center text-gymbro-orange mb-8 flex items-center justify-center">
          <Users className="mr-2" /> Publication Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 aspect-square overflow-hidden rounded-full mx-auto w-32 h-32 border-2 border-gymbro-orange">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-bold text-white">{member.name}</h4>
              <p className="text-gray-400">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <Card key={article.id} className="bg-gymbro-darkGray text-white border border-gray-800">
            <CardHeader>
              <CardTitle className="text-gymbro-orange">{article.title}</CardTitle>
              <CardDescription className="text-gray-400">
                By {article.author} | {article.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">{article.excerpt}</p>
              <Button variant="outline" className="border-gymbro-orange text-gymbro-orange hover:bg-gymbro-orange hover:text-white">
                Read Full Article
              </Button>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <div className="flex items-center mb-4 text-gray-400">
                <MessageSquare size={16} className="mr-2" />
                <span>{article.comments.length} Comments</span>
              </div>
              
              {article.comments.length > 0 && (
                <div className="w-full bg-black/30 p-4 rounded-md mb-4">
                  {article.comments.map((comment) => (
                    <div key={comment.id} className="mb-2 last:mb-0">
                      <p className="text-sm font-bold">{comment.name} <span className="text-gray-400 font-normal">- {comment.date}</span></p>
                      <p className="text-sm text-gray-300">{comment.content}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {selectedArticleId === article.id ? (
                <div className="w-full space-y-2">
                  <Textarea
                    placeholder="Add your comment..."
                    className="bg-black/30 border-gray-700"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                  <div className="flex space-x-2">
                    <Button 
                      size="sm"
                      onClick={() => handleCommentSubmit(article.id)}
                      className="bg-gymbro-orange hover:bg-gymbro-orange/90"
                    >
                      Submit
                    </Button>
                    <Button 
                      size="sm"
                      variant="ghost"
                      onClick={() => setSelectedArticleId(null)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <Button
                  variant="ghost" 
                  className="text-gymbro-orange p-0 hover:bg-transparent hover:text-gymbro-orange/80"
                  onClick={() => setSelectedArticleId(article.id)}
                >
                  Add Comment
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
        
        <Card className="bg-gymbro-darkGray text-white border border-gray-800 flex flex-col justify-center">
          <CardContent className="p-6 text-center">
            <BookOpen size={48} className="text-gymbro-orange mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Add New Publication</h3>
            <p className="text-gray-400 mb-4">
              Share your fitness knowledge and insights with the GymBro community.
            </p>
            <Button className="bg-gymbro-orange hover:bg-gymbro-orange/90">
              Create Article
            </Button>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default PublicationSection;
