export interface Project {
  id: string;
  title: string;
  category: "Web Development" | "Mobile Development" | "Machine Learning";
  description: string;
  longDescription: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  features: string[];
  challenge: string;
  architecture: string;
  imageUrl?: string;
  imageFit?: "cover" | "contain";
}
