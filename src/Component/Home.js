import React, { useState } from 'react';
import myImage from '../assets/gab.jpg';

const Home = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-16">
      <div className="max-w-4xl p-8 md:p-12 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 mt-8">Welcome to My Portfolio</h2>
          <p className={`text-base md:text-lg text-gray-800 leading-relaxed mb-8 ${collapsed ? 'overflow-hidden h-32 md:h-auto' : 'overflow-auto h-auto'}`}>
            This is the <span className="font-bold">Home page</span> of my portfolio website. 
            I am Gabriel Massabni, a skilled web developer known for his expertise in building modern and user-friendly websites. 
            With a keen eye for design and a passion for coding, Gabriel combines creativity with technical proficiency to craft innovative digital experiences. 
            His dedication to staying updated with the latest web technologies ensures that his projects are always at the forefront of industry standards. 
            Gabriel's commitment to excellence and attention to detail make him a valuable asset in the field of web development.
          </p>
          {/* <button onClick={toggleCollapse} className="text-blue-500 hover:text-blue-600">
            {collapsed ? 'Read More' : 'Show Less'}
          </button> */}
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img src={myImage} alt="My Image" className="h-64 md:h-auto w-auto md:w-80 rounded-lg shadow-lg" style={{ border: 'none', padding: 0 }} />
        </div>
      </div>
    </div>
  );
};

export default Home;







