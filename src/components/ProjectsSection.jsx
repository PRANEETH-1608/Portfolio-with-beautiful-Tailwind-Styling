import { ArrowBigRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Imagify",
    description: "A beautiful image generator page using React and Tailwind",
    image: "/projects/proj1_1st_image.png",
    tags: ["React", "TailwindCSS", "CLIPDROP API","EXPRESS","MONGODB"],
    demoUrl: "#",
    githubUrl: "https://github.com/PRANEETH-1608/imagify",
  },
  {
    id: 2,
    title: "Concept-Revison-App",
    description:
      "A beautiful image Concept Revision App using React and Tailwind",
    image: "/projects/proj-2_1st_image.png",
    tags: ["React", "TailwindCSS", "NODE JS","MONGO DB","ALERT NOTIFICATOINS","CALENDER"],
    demoUrl: "https://concept-keep-alive.vercel.app/",
    githubUrl: "https://github.com/PRANEETH-1608/concept-keep-alive",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h1>

        <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto ">
          Here are some of my recent projecst. Each project was carrefully
          crafted with attention to detail performance, and user experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-2xs card-hover "
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag,index) => (
                    <span 
                    key={`${project.id}-${tag}-${index}`}
                    className="px-2 py-1 text-sx border font-medium rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center flex mt-12">

            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/PRANEETH-1608">Check My Github <ArrowBigRight size={16}/></a>

            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://www.linkedin.com/in/praneeth-ginjupalli-92bb60292/">Review My LinkedIn <ArrowBigRight size={16}/></a>
        </div>
      </div>
    </section>
  );
};
