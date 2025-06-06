import MainSection from "./MainSection";
import Navbar from "../components/Navbar/Navbar";
import MyProject from "../components/Projects/MyProject";
import { TechSkills } from "@/components/TechStack/TechSkills";
import BLogCta from "@/components/Blog/BLogCta";

function Landing() {
  return (
    <div className="bg-black p-6  md:p-10">
      {/* Navbar */}
      <Navbar />
      {/* Main-Section */}
      <MainSection />

      <TechSkills />

      {/* Projects */}
      <MyProject />

      {/* Contributions */}

      {/* Blogs */}
      <BLogCta />
    </div>
  );
}

export default Landing;
