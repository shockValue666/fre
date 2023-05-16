// components/CreatorsSection.js
import React from 'react';

const CreatorsSection = () => {
  return (
    <section id="team" className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 py-12">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Meet the Creators</h2>
      {/* Add information about the creators here */}
      <div className="flex flex-wrap justify-center">
        {/* Creator card example */}
        <div className="bg-white rounded-lg shadow-md m-4 p-6">
          <img src="creator-image-url" alt="Creator name" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-bold text-center">Creator Name</h3>
          <p className="text-center">Short bio about the creator</p>
        </div>
      </div>
    </section>
  );
};

export default CreatorsSection;
