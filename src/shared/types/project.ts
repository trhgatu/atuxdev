export interface Technology {
    name: string;
    icon: string;
  }

  export interface Project {
    id: string;
    _id: string;
    description: string;
    status: string;
    name: string;
    slug: string;
    technologies: Technology[];
    duration: string;
    images: string[];
    githubLink: string;
    projectLink: string;
  }
