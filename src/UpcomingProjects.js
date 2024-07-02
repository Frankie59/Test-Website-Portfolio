import React from 'react';

function UpcomingProjects() {
  return (
    <div className="p-8 pb-40 flex flex-col items-center justify-center" style={{ backgroundColor: "#C3DAF9" }}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/5 flex flex-col items-center justify-center pl-8 pr-4">
          {[1, 2, 3, 1].map((index) => (
            <img key={`resume${index}`} src={`resume${index}.png`} alt={`Resume ${index}`} className="w-56 h-auto mb-8 md:mb-12" />
          ))}
        </div>
        <div className="md:w-3/5 text-center md:text-left">
          <img src="pleasehireme.png" alt="PleaseHireMe.com" className="w-80 md:w-120 h-auto mb-16 mx-auto" />
          <div className="text-left md:text-center">
            <div className="bg-black-800 text-black rounded-lg p-8 mb-8">
              <p className="text-4xl">
                Are you tired of juggling multiple job applications, missing important deadlines, and struggling to keep track of your progress? Look no further! PleaseHireMe.com is your ultimate job application assistant and hub, designed to streamline your job search process and keep you organized every step of the way.
              </p>
            </div>
            <h2 className="text-5xl font-bold mb-8">Key Features</h2>
            <ul className="text-gray-800 text-2xl mb-8 list-disc list-inside">
              <li className="mb-4"><strong>Job Application Tracker:</strong> Input and manage your job applications with details like company name, location, position, direct link, job description, and status (e.g., need to apply, in progress, waitlisted, rejected, accepted, interview scheduled).</li>
              <li className="mb-4"><strong>Application Reminders:</strong> Pair with Google Calendar and/or email to set important deadlines for application due dates, interview schedules, and follow-up reminders.</li>
              <li className="mb-4"><strong>Resume and Cover Letter Template Page:</strong> Choose from a variety of professional templates, edit directly on the page, and download with ease.</li>
            </ul>
            <h2 className="text-5xl font-bold mb-8">Potential Features</h2>
            <ul className="text-gray-800 text-2xl mb-8 list-disc list-inside">
              <li className="mb-4"><strong>Job Search Integration:</strong> Seamlessly pair with LinkedIn, Indeed, and other job boards to find and save jobs effortlessly.</li>
            </ul>
            <div className="text-center mt-16 bg-gray-800 bg-opacity-75 p-8 rounded-lg">
              <h2 className="text-4xl font-semibold mb-8 text-white">Sign Up for Updates</h2>
              <div className="max-w-screen-xl mx-auto px-8">
                <form className="mb-2 lg:mb-0 text-white">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="mb-8 px-8 py-4 rounded-lg text-black w-full md:w-auto text-2xl"
                  />
                  <button className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-2xl">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/5 flex flex-col items-center justify-center pr-8 pl-4">
          {[1, 2, 3, 1].map((index) => (
            <img key={`cover${index}`} src={`cover${index}.png`} alt={`Cover ${index}`} className="w-56 h-auto mb-8 md:mb-12" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpcomingProjects;
