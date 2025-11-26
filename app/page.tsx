import { Github, Twitter, AtSign } from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { ProjectCard, TechRegistery } from "./components/ProjectCard";
import { RoughNotation } from "react-rough-notation";
import { HoverHighlight } from "./components/HoverHighlight";
import Image from "next/image"
import img from "../public/pfp.jpg";
import profilePicture from "../public/pfp-main.png";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
type Tech = keyof typeof TechRegistery;

const projects: {
  title: string;
  description: string;
  technologies: Tech[];
  status: "operational" | "maintenance" | "offline";
  detailsUrl: string;
}[] = [
    {
      title: "NotesBuddy",
      description: "A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools",
      technologies: ["Next.js", "React", "TypeScript", "Drizzle ORM"],
      status: "operational",
      detailsUrl: "/projects/notesbuddy",
    },
    {
      title: "NotesBuddy",
      description: "A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools",
      technologies: ["Next.js", "React", "TypeScript", "Drizzle ORM"],
      status: "operational",
      detailsUrl: "/projects/notesbuddy",
    },
    {
      title: "NotesBuddy",
      description: "A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools",
      technologies: ["Next.js", "React", "TypeScript", "Drizzle ORM"],
      status: "operational",
      detailsUrl: "/projects/notesbuddy",
    },
    {
      title: "NotesBuddy",
      description: "A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools",
      technologies: ["Next.js", "React", "TypeScript", "Drizzle ORM"],
      status: "operational",
      detailsUrl: "/projects/notesbuddy",
    },
    {
      title: "NotesBuddy",
      description: "A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools",
      technologies: ["Next.js", "React", "TypeScript", "Drizzle ORM"],
      status: "operational",
      detailsUrl: "/projects/notesbuddy",
    },
  ];

const articles = [
  {
    title: "Building a scalable scraper",
    date: "Posted almost 4 years ago",
  },
   {
    title: "Building a scalable scraper",
    date: "Posted almost 4 years ago",
  },
  {
    title: "Golang is not a good language",
    date: "Posted about 4 years ago",
  },
  {
    title: "Building a robust permissions system in TypeScript",
    date: "Posted about 4 years ago",
  }
  ,
  {
    title: "Building a robust permissions system in TypeScript",
    date: "Posted about 4 years ago",
  }
  ,
  {
    title: "Building a robust permissions system in TypeScript",
    date: "Posted about 4 years ago",
  }
  ,
  {
    title: "Building a robust permissions system in TypeScript",
    date: "Posted about 4 years ago",
  }
  ,
  {
    title: "Building a robust permissions system in TypeScript",
    date: "Posted about 4 years ago",
  }
  ,
  {
    title: "Building a robust permissions system in TypeScript",
    date: "Posted about 4 years ago",
  }
  ,
  {
    title: "Building a robust permissions system in TypeScript",
    date: "Posted about 4 years ago",
  }
  ,
  {
    title: "Building a robust permissions system in TypeScript",
    date: "Posted about 4 years ago",
  }
];

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Theme toggle */}
      <ThemeToggle />

      <main className="max-w-6xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
          {/* Left content */}
          <div className="flex-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Hi, I'm Sahazel.
            </h1>

            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Avid functional programmer but also a clean interface advocater, i love making libraries that helps developers,
                developing internal tools is my hobby.
              </p>
              <p>
                I've dabbled in Web Dev, System programming, automation scripts and been recently interested in infrastructure.
              </p>
              <p>
                I'm currently based in <del className="inline-flex rotate-12">Morocco</del> Maghreb, Casablanca.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="https://github.com/WeismannS" className="text-muted hover:text-foreground transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://X.com/SahazelXI" className="text-muted hover:text-foreground transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="mailto:Sahazell@proton.me" className="text-muted hover:text-foreground transition-colors">
                <AtSign className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right content - Image placeholder */}
          <div className="relative">
            {/* Handwritten annotation */}
            <div className="absolute -top-8 right-0 text-accent-yellow handwriting text-sm hidden lg:block">
              <span>Definitely me IRL</span>
              <svg
                className="w-8 h-8 ml-auto mr-8 mt-1 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 5v14M12 19l-4-4M12 19l4-4" />
              </svg>
            </div>

            {/* Image placeholder */}
            <Image 
              src={profilePicture}
              alt="Profile Picture"
              width={250}
              height={250}
              className="rounded-lg border border-purple-500/20"
            />
          </div>
        </section>

        {/* Articles Section */}
        <section className="flex flex-col lg:flex-row gap-8" >
          <section className="mb-12 w-full lg:w-[70%] flex flex-col">
            <div>
              <p className="text-secondary-foreground/50 text-xs font-bold">Featured</p>
              <h2 className="text-lg font-semibold mb-6">
              {projects.length} Projects 📁
            </h2></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects.slice(0, 4).map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  status={project.status}
                  detailsUrl={project.detailsUrl}
                />
              ))}
            </div>
            { projects.length > 4 && <a href="/projects" className="m-auto w-32">
              <button className="border border-border rounded-sm px-4 py-2  m-auto w-32 font-siz text-xs font-bold mt-5 hover:bg-input/50 hover:shadow-accent-foreground transition-all">
                Show More
              </button>
            </a>}
          </section>
          <section className="w-full lg:w-[30%] flex flex-col">
            <div>
              <p className="text-secondary-foreground/50 text-xs font-bold">Latest</p>
              <h2 className="text-lg font-semibold mb-6">
              {articles.length} Articles 📝
            </h2></div>
            <div className="flex flex-col gap-7">
              {articles.slice(0,8).map((article, index) => (
                <div key={article.title + index} className="flex flex-col">
                  <HoverHighlight type="highlight"> <a
                    href="#"
                    className="text-foreground font-medium hover:underline"
                  >
                    {article.title}
                  </a>  
                  </HoverHighlight>
                  <span className="text-sm text-muted mt-1">
                    {article.date}
                  </span>
                </div>
              ))}
            </div>
            { articles.length > 10 && <a href="/articles" className="ml-auto mr-auto w-32">
              <button className="border border-border rounded-sm px-4 py-2  m-auto w-32 font-siz text-xs font-bold mt-5 hover:bg-input/50 hover:shadow-accent-foreground transition-all">
                Show More
              </button>
            </a>}
          </section>
        </section>
        <div className="border w-[90%] h-0.5 m-auto"></div>
         <div className="mt-20"><p className="text-secondary-foreground/50 text-xs font-bold">About Me</p>
         <h2 className="text-lg font-semibold mb-6">Weismann 👨‍💻</h2>
         </div>
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <div>
            <Image
              src={img}
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
          </div>
          <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I'm Software engineer with a wide range of experience in different domains. From low-level system programming to high-level web development. 
                Have gained a solid understanding of various programming paradigms and technologies ranging from Python, TypeScript, C++, C to Lua
              </p>
              <p>
                My experience spans web development, system programming, and automation scripts. Recently, I've been diving into infrastructure, exploring new ways to optimize and streamline processes.
              </p>
              <p className="font-bold">Skills</p>
              {Object.entries(TechRegistery).map(([key, Icon], index) => (
                <span key={index} className="mr-2 mb-2  rounded-full bg-transparent">
                  <Tooltip>
                    <TooltipTrigger><Icon /></TooltipTrigger>
                    <TooltipContent>
                      {key}
                    </TooltipContent>
                  </Tooltip>
                </span>
              ))}
            </div>
        </section>
        
        <footer className="mt-32 mb-12 text-center text-sm text-muted">
          © {new Date().getFullYear()} Sahazel. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

