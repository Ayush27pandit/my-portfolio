import { FaGithub } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

function MyProject() {
  return (
    <div className=" p-6 ">
      <div className="dark:bg-zinc-900 rounded-2xl dark:text-white w-[100%] max-w-[600px] md:max-w-[1240px] p-6 mx-auto">
        {/* Title */}
        <div className="flex flex-col gap-3 items-center justify-center">
          <span className="text-md font-ubuntu font-semibold text-orange-800">
            My work
          </span>
          <p className="text-3xl font-semibold  font-mono">Featured Projects</p>
          <p className="text-md font-ubuntu text-zinc-400 mb-4">
            Here are some of my recent projects. Each one represents a unique
            challenge and solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-2">
            <ProjectCard
              imageUrl="https://picsum.photos/id/237/200/300"
              title="Project 1"
              tag={["React", "Typescript"]}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod."
              GithubLink="https://github.com/AyushPandit"
              LiveLink="https://github.com/AyushPandit"
            />
            <ProjectCard
              imageUrl="https://picsum.photos/id/6/5000/3333"
              title="Project 2"
              tag={["React", "Typescript"]}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod."
              GithubLink="https://github.com/AyushPandit"
              LiveLink="https://github.com/AyushPandit"
            />
            <ProjectCard
              imageUrl="/project3.png"
              title="Project 3"
              tag={["Nextjs", " Prisma", "WebSockets"]}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod."
              GithubLink="https://github.com/AyushPandit"
              LiveLink="https://github.com/AyushPandit"
            />
            <ProjectCard
              imageUrl="/project4.png"
              title="Project 4"
              tag={["React", "MongoDb,"]}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod."
              GithubLink="https://github.com/AyushPandit"
              LiveLink="https://github.com/AyushPandit"
            />
            <ProjectCard
              imageUrl="/project5.png"
              title="Project 5"
              tag={["Nextjs", " Prisma", "WebSockets"]}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod."
              GithubLink="https://github.com/AyushPandit"
              LiveLink="https://github.com/AyushPandit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProject;

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  tag: string[];
  description: string;
  GithubLink: string;
  LiveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  tag,
  description,
  GithubLink,
  LiveLink,
}) => {
  return (
    <div className="bg-zinc-800 rounded-xl p-4 text-center max-w-sm w-full shadow-lg hover:scale-[1.01] border-2 border-zinc-700 transition-transform duration-300">
      {/* Project Image */}
      <div className="bg-black rounded-lg overflow-hidden mb-4 w-full h-60">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tag */}
      <div className="inline-block text-sm text-orange-400 px-3 py-1 rounded-full mb-2 space-x-4">
        {tag.map((tag, index) => (
          <div className="inline-block">
            <span
              key={index}
              className="bg-zinc-800 px-2 rounded-2xl font-inter text-md"
            >
              {tag}
            </span>
          </div>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-white text-xl font-semibold tracking-wide">
        {title}
      </h3>

      {/* Description */}
      <div>
        <p className="text-zinc-400 mt-2 text-sm font-semibold tracking-wide">
          {description}
        </p>
      </div>
      {/* Links */}
      <div className="flex justify-between space-x-4 mt-4 px-6">
        <a
          href={GithubLink}
          className=" text-stone-300 hover:text-white   rounded-2xl px-2 py-1 hover:scale-110 font-inter text-md transition-all duration-300"
        >
          <span className="flex text-2xl items-center gap-2">
            <FaGithub />
          </span>
        </a>
        <a
          href={LiveLink}
          className="bg-red-500 rounded-xl px-4 py-1 hover:bg-red-400 font-ubuntu text-md"
        >
          <span className="flex items-center gap-2 text-white">
            Live
            <IoIosSend />
          </span>
        </a>
      </div>
    </div>
  );
};
