// import DarkmodeToggle from "../utils/DarkmodeToggle";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";

function MainSection() {
  const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/AyushPandit",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ayushpandit/",
    },
    {
      icon: <FaSquareXTwitter />,
      link: "https://twitter.com/itsayushpandit",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/itsayushpandit/",
    },
  ];
  return (
    <div className="  text-white p-6 dark:bg-black">
      {/* Wrapper */}
      <div className="max-w-7xl p-6 mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {/* Profile Card */}
        <div className="bg-zinc-900  flex flex-col items-center space-y-6 rounded-xl p-6 font-ubuntu">
          <img
            src="/profile.svg"
            alt="profile-pic"
            className="w-32 h-32 rounded-full object-cover"
          />
          <h2 className="text-3xl font-normal font-arvo">Ayush Pandit</h2>
          <p className="text-sm text-gray-400 text-center">
            I am a Full Stack Developer , Problem Solver, and a Lifelong Learner
          </p>
          {/* Socials */}
          <div className="flex space-x-4 my-4">
            {socials.map((socials, index) => (
              <span className="rounded-xl bg-transparent border  border-gray-400 p-2 hover:bg-gray-700 hover:scale-102 transition-all duration-300 ">
                <a
                  key={index}
                  href={socials.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white  "
                >
                  {socials.icon}
                </a>
              </span>
            ))}
          </div>
          {/* Contact Info */}
          <div className="mt-4 text-sm space-y-4">
            <p className="flex flex-col">
              <span className="font-semibold font-inter opacity-80">
                PHONE:
              </span>

              <span className="font-arvo ">+91 97552 60855</span>
            </p>
            <p className="flex flex-col ">
              <span className="font-semibold font-inter opacity-80 ">
                EMAIL:
              </span>{" "}
              <a
                href="mailto:ayushpandit27bit@gmail.com"
                className="text-blue-400 underline font-arvo "
              >
                ayushpandit27bit@gmail.com
              </a>
            </p>
            <p className="flex flex-col ">
              <span className="font-semibold font-inter opacity-80 ">
                LOCATION:
              </span>{" "}
              <span className="font-arvo ">Raipur,India</span>
            </p>
          </div>
        </div>
        {/* Main info */}

        <div className=" md:col-span-2 flex flex-col gap-4  ">
          <div className="bg-zinc-900 p-6 rounded-xl space-y-4">
            <div>
              <p className="text-md text-gray-400 font-semibold">Hi There!</p>

              <h1 className="text-2xl md:text-3xl font-normal mt-2 leading-snug font-arvo">
                I’m Ayush Pandit, a Full Stack Developer building seamless,
                user-focused web applications with clean, efficient code.
              </h1>

              <p className="mt-4 text-gray-300 text-md leading-relaxed">
                With over 2 years of experience in web development, I specialize
                in creating responsive, high-performance applications using
                modern technologies like React, Next.js, Node.js, and
                TypeScript. My approach combines technical excellence with a
                deep understanding of user experience design.
              </p>

              <p className="mt-2 text-gray-300 text-md">
                I’m passionate about building solutions that solve real problems
                and deliver measurable results for businesses and users alike.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-green-400 text-sm ">
                ● Available for Freelancing
              </span>
              <button className="bg-orange-700 hover:bg-orange-800 text-white text-sm py-2 px-4 rounded-md">
                <p className="flex items-center gap-3 font-arvo">
                  {" "}
                  Open Resume <GrDocumentText />{" "}
                </p>
              </button>
            </div>
          </div>
          {/* Skill stack */}
          {/* <div className=" bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">
              Companies I worked With
            </h2>
            <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
              <span>Ant1</span>
              <span>Edudask</span>
              <span>WebSphere</span>
              <span>SERVMARK.LTD</span>
              <span>Qvi</span>
            </div>
          </div> */}

          <div className="bg-zinc-900 p-8  rounded-xl overflow-hidden">
            <h2 className="text-xl font-normal font-arvo mb-4 text-white">
              Skills & Technologies I Know
            </h2>

            {/* Marquee Wrapper */}
            <div className="relative w-full overflow-hidden">
              <div className="flex gap-12 animate-marquee whitespace-nowrap text-gray-400 text-base font-medium font-ubuntu">
                {/* Repeating skills for loop */}
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Tailwind CSS</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>Firebase</span>
                <span>PostgreSQL</span>
                <span>TypeScript</span>
                <span>Next.js</span>
                <span>Python</span>
                <span>Git</span>
                <span>Linux</span>

                {/* Repeat again for smooth looping */}
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Tailwind CSS</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>Firebase</span>
                <span>PostgreSQL</span>
                <span>TypeScript</span>
                <span>Next.js</span>
                <span>Python</span>
                <span>Git</span>
                <span>Linux</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
