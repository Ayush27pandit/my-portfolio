import MainSection from "./MainSection";
import Navbar from "../components/Navbar/Navbar";
import MyProject from "../components/Projects/MyProject";

function Landing() {
  return (
    <div className="dark:bg-black p-6  md:p-10">
      {/* Navbar */}
      <Navbar />
      {/* Main-Section */}
      <MainSection />

      {/* Projects */}
      <MyProject />

      {/* Contributions */}

      {/* Blogs */}
    </div>
  );
}

export default Landing;
