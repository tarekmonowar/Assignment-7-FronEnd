import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectItem } from "@/constant/type";
import Image from "next/image";
import Link from "next/link";

interface Projects {
  projects: ProjectItem[];
}

const ProjectList = ({ projects }: Projects) => {
  return (
    <section
      aria-labelledby="featured-projects-heading"
      className="container max-w-7xl mx-auto px-7 mt-20 xl:mt-36"
    >
      <header className="mb-10 xl:mb-20">
        <h2 className="text-lg md:text-6xl mb-7 text-white ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] via-[#a9bcff] to-[#4285F4] ">
            Projects.
          </span>
        </h2>
        <p className="text-muted-foreground mb-5">
          Explore my featured projects showcasing modern, full-stack, and
          user-focused web applications.
        </p>
      </header>

      <div className="grid gap-8 xl:gap-16">
        {projects?.map((p, idx) => (
          <article
            key={p.slug}
            className="rounded-lg border border-border bg-background/50 shadow-sm overflow-hidden border-gray-700 bg-[#181c22be] "
          >
            <div
              className={`grid items-stretch md:grid-cols-2 ${
                idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Image side */}
              <div className="relative group max-h-[400px] overflow-hidden ">
                <div className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105 relative">
                  <Image
                    src={p.cover?.[0]?.url}
                    alt={`${p.title} preview layout 1/2 image`}
                    loading="lazy"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Details side */}
              <div className="flex max-h-[400px]">
                <Card className="flex-1 rounded-none border-0 ">
                  <CardContent className="p-6 md:p-8  flex flex-col gap-5 justify-center">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge key={t} variant="secondary">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-3xl font-semibold text-foreground my-2">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-justify font-third">
                      {p.summary}
                    </p>
                    <div className="pt-5 flex gap-4 xl:gap-7">
                      <Link
                        href={`/projects/${p._id}`}
                        className="inline-block px-[17px] py-[5px] bg-accent text-black border-2 border-accent rounded-[5px] text-[15px] font-semibold transition-all duration-500 ease-in-out hover:bg-transparent hover:text-accent hover:shadow-[0_0_20px_#13bbff]"
                      >
                        Details
                      </Link>

                      <Link
                        href={p.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-[17px] py-[5px] bg-[#1c1c22] text-accent border-2 border-accent rounded-[5px] text-[15px] font-semibold transition-all duration-500 ease-in-out hover:bg-accent hover:text-black hover:shadow-[0_0_20px_#13bbff]"
                      >
                        Live
                      </Link>
                      <Link
                        href={p.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-[17px] py-[5px] bg-accent text-black border-2 border-accent rounded-[5px] text-[15px] font-semibold transition-all duration-500 ease-in-out hover:bg-transparent hover:text-accent hover:shadow-[0_0_20px_#13bbff]"
                      >
                        Github
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 mx-auto max-w-sm">
        <Link
          href="https://github.com/tarekmonowar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-[17px] py-[5px]  text-accent border-[1px] border-accent rounded-[5px] text-[15px] font-semibold transition-all duration-500 ease-in-out hover:bg-accent hover:text-black hover:shadow-[0_0_20px_#13bbff]"
        >
          See More Projects in Github
        </Link>
      </div>
    </section>
  );
};

export default ProjectList;
