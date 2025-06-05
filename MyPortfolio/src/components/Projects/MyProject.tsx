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
          <p className="text-md font-ubuntu text-zinc-400">
            Here are some of my recent projects. Each one represents a unique
            challenge and solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ProjectCard
              imageUrl="https://picsum.photos/id/237/200/300"
              title="Project 1"
              tag="React"
            />
            <ProjectCard
              imageUrl="https://picsum.photos/id/6/5000/3333"
              title="Project 2"
              tag="React"
            />
            <ProjectCard
              imageUrl="/project3.png"
              title="Project 3"
              tag="React"
            />
            <ProjectCard
              imageUrl="/project4.png"
              title="Project 4"
              tag="React"
            />
            <ProjectCard
              imageUrl="/project5.png"
              title="Project 5"
              tag="React"
            />
            <ProjectCard
              imageUrl="/project6.png"
              title="Project 6"
              tag="React"
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
  tag: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, tag }) => {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 text-center max-w-sm w-full shadow-lg hover:scale-[1.02] transition-transform duration-300">
      {/* Project Image */}
      <div className="bg-black rounded-lg overflow-hidden mb-4 w-full h-60">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tag */}
      <div className="inline-block bg-zinc-800 text-sm text-orange-400 px-3 py-1 rounded-full mb-2">
        {tag}
      </div>

      {/* Title */}
      <h3 className="text-white text-xl font-semibold tracking-wide">
        {title}
      </h3>
    </div>
  );
};
