export interface BlogImage {
  public_id: string;
  url: string;
}
export interface ProjectImage {
  public_id: string;
  url: string;
}

export interface BlogPost {
  _id: string; // Use _id if your backend returns that
  title: string;
  excerpt: string;
  content: string;
  image: BlogImage[]; // Now matches backend structure
  date: string;
  author: string;
  category: string;
  readTime: string;
}

export interface ProjectItem {
  _id: string;
  slug: string;
  title: string;
  summary: string;
  cover: ProjectImage[];
  tags: string[];
  githubLink: string;
  liveLink: string;
}
