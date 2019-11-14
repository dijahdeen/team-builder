import React, { useState } from 'react';

// import logo from './logo.svg';
import './App.css';
import TeamMember from './components/teammember';
import TeamForm from './components/teamform';

function App() {

  const [TeamMate, setTeamMate] = useState([
    {

      name: "Dijah Deen",
      email: 'khadijatudeenkarim@gmail.com',
      role: "Web Development student"
    }
  ]);

  const getNewteamMember = teamMember => {
    const Newteammate = {

      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    };
    setTeamMate(Newteammate);
  }
  return (
    <div>
      <h1>THE TEAM</h1>
      {/* we are going to pass a function down as a prop */}
      <TeamForm getNewteamMember={getNewteamMember} />
      <TeamMember TeamMate={TeamMate} />
    </div>
  );
}



export default App;
