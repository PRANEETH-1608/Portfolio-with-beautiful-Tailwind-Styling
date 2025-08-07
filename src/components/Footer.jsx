import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className=" text-center py-12 px-4 bg-card relative border-border mt-12 pt-8 flex flex-wrap justify-center items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
            {" "}
        &copy: {new Date().getFullYear()} Praneeth G,All rights reserved.</p>

    <a href="#home" className="p-2 rounded-full ml-5 bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
        <ArrowUp size={20}/>

    </a>

    </footer>
    
  );
};
