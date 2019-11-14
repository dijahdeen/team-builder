import React from 'react';



const TeamMember = props => {

    return (
        < div className="TeamMembers" >
            {
                props.TeamMate.map(teamMember => (


                    < div className="teamMember" key={teamMember.id}>
                        <h2>{teamMember.name}</h2>
                        <h2>{teamMember.email}</h2>
                        <h2>{teamMember.role}</h2>
                    </div>

                ))
            }
        </div >
    )

}
export default TeamMember;