import React, { useState } from 'react';

function Home() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="bg-cover bg-center h-screen relative"
      style={{ backgroundColor: isHovering ? 'rgba(149, 168, 192, 1)' : '#C3DAF9' }}
    >
      {/* Introduction Section */}
      <div className="absolute inset-0 text-black">
        <div className="max-w-screen-xl px-8 py-20">
          <div className="pl-32">
            <h1 className="text-9xl font-bold mb-4">Welcome to My Portfolio</h1>
            <div className="bg-gray-800 bg-opacity-75 p-6 rounded-lg text-white">
              <p className="text-4xl">My name is Frankie Mundo. I graduated from Pepperdine University in 2024 with a degree in Computer Science and Mathematics. As an aspiring software engineer, I am driven by a dual passion for coding and artistic creation. From crafting intricate algorithms to composing visually captivating designs, I find joy in the fusion of logic and creativity. My journey is guided by a desire to weave these two realms seamlessly together, seeking opportunities that not only allow me to write elegant lines of code but also to unleash my artistic flair. With an unwavering commitment to honing my technical skills and nurturing my artistic sensibilities, I am eager to embark on a career path that embraces the intersection of technology and creativity, where innovation knows no bounds.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Picture Section */}
      <div
        className="absolute top-0 right-0 h-3/4 w-1/3 lg:w-1/4 flex items-center justify-center mt-32 mr-32"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="h-full w-full rounded-lg overflow-hidden border-4 border-blue-900 flex items-center justify-center">
          <img src="/profile.jpg" alt="Profile" className="h-full w-full object-cover" />
        </div>
      </div>
      {/* Contact Section */}
      <div className="absolute bottom-0 left-0 w-full bg-gray-800 text-white py-4">
        <div className="text-center mt-8">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="mb-2 lg:mb-0">
              <p className="mb-1">Email: frankiemundo4@gmail.com</p>
              <a href="https://www.linkedin.com/in/frank-mundo-iv-80b073262/" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
              <a href="https://github.com/Frankie59" className="ml-4 text-blue-400 hover:text-blue-600">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
