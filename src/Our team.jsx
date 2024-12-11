import React from 'react';
import './App.css';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO',
      image: '/images/portrait-smiling-man-holding-digital-tablet-looking-camera.jpg',
      bio: 'John is the visionary leader of our company, guiding us to new heights with his extensive industry experience and innovative approach.',
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      image: '/images/portrait-young-man-with-bulb-idea-concept.jpg',
      bio: 'Jane is the technical genius behind our cutting-edge solutions, ensuring our products meet the highest standards of quality and efficiency.',
    },
    {
      name: 'Alice Johnson',
      position: 'Lead Designer',
      image: '/images/reporter-sea.jpg',
      bio: 'Alice brings creative ideas to life with her exceptional design skills, crafting stunning visuals that resonate with users.',
    },
    // Add more team members as needed
  ];

  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={`${member.name}`} />
            <h2>{member.name}</h2>
            <p>{member.position}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
