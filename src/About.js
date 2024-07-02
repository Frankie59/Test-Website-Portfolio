import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  // Array of projects
  const projects = [
    { id: 1, title: 'Course Planning Assistant', description: 'Web-based application that allows students at Pepperdine University to construct a four-year course plan based on their major and/or minor.', imageUrl: 'course.png', githubUrl: 'https://github.com/Frankie59/Course-Planning-Assistant' },
    { id: 2, title: 'Assembly Language Translator', description: 'A Pep/9 assembly language code generator/translator that manually parses through and translates Java code to be read by a low-level assembler.', imageUrl: 'assembly.png', githubUrl: 'https://github.com/Frankie59/Assembly-Language-Translator' },
    { id: 3, title: 'Personal Website Portfolio', description: 'My website portfolio created using ReactJS, incorporating Three.js for interactive 3D graphics, TailwindCSS for styling, and Framer Motion for animations.', imageUrl: 'myweb.png', githubUrl: 'https://github.com/Frankie59/Website-Portfolio' }
  ];

  // Array of experience
  const experience = [
    { id: 1, title: 'Researcher/Cinematographer', company: 'Skip Media', date: 'October 2020 - August 2023', description: ['Conducting relevant research and gathering footage for entertainment videos on YouTube.', 'Working with a team and collaborating on research and recordings.', 'Integrating and collecting new footage for editors to finalize projects.', 'Producing and operating with collected footage in a creative manner.'] },
    { id: 2, title: 'Frontend Developer Intern', company: 'California Seismic', date: 'June 2024 - Present', description: ['Developing React components to add new features and pages.', 'Constructing wireframes in Figma before creating new modules.', 'Learning how to host my own domain using AWS.', 'Participating in code reviews for components ready to go into production.'] }
  ];

  const navigateToUpcomingProjects = () => {
    navigate('/upcomingprojects');
  };

  return (
    <div className="p-4 pb-20" style={{ backgroundColor: "#C3DAF9" }}>
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <div className="mb-8 grid gap-8 md:grid-cols-3 md:gap-12">
          {projects.map(project => (
            <div key={project.id} className="p-6 bg-gray-800 rounded-lg shadow-lg relative">
              <img src={project.imageUrl} alt={project.title} className="w-full h-auto mx-auto mb-4 rounded-lg" style={{ maxWidth: "100%", height: "auto" }} />
              <h2 className="text-lg font-semibold mb-2 text-white">{project.title}</h2>
              <p className="text-gray-300">{project.description}</p>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white">Click to visit GitHub</a>
              </div>
            </div>
          ))}
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Experience</h1>
        <div className="mb-8 grid gap-8 md:grid-cols-2 md:gap-12">
          {experience.map(job => (
            <div key={job.id} className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-2 text-white">{job.title}</h2>
              <p className="text-gray-300 mb-2">{job.company}</p>
              <p className="text-gray-300 mb-2">{job.date}</p>
              <ul className="list-disc text-gray-300">
                {job.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h1 className="text-4xl font-bold mb-4">Upcoming Project</h1>
        <div className="mb-8">
          <button onClick={navigateToUpcomingProjects} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            View Upcoming Project
          </button>
        </div>

        <div className="text-center mt-8 bg-gray-800 bg-opacity-75 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2 text-white">Contact</h2>
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="mb-2 lg:mb-0 text-white">
              <p className="mb-1 text-lg">Email: frankiemundo4@gmail.com</p>
              <a href="https://www.linkedin.com/in/frank-mundo-iv-80b073262/" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
              <a href="https://github.com/Frankie59" className="ml-4 text-blue-400 hover:text-blue-600">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
