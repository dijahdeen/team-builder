import React, { useState } from 'react';




const TeamForm = props => {
    console.log("props", props);
    const [Team, setTeam] = useState({ name: "", email: "", role: "" });

    const ChangingHandles = e => {
        console.log(Team);

        setTeam({ ...Team, [e.target.name]: e.target.value });
    };


    const submitTeamForm = e => {
        e.preventDefault();

        props.getNewteamMember(Team);
        setTeam({ name: "", email: "", role: "" });
    };
    return (
        <form onSubmit={submitTeamForm}>
            <label htmlFor="Name">Name:</label>
            <input
                id="name"
                name="name"
                onChange={ChangingHandles}
            />

            <label htmlFor="Email"> Email:</label>
            <input
                id="email"
                name="email"
                onChange={ChangingHandles}
            />
            <label htmlFor="Role"> Role:</label>
            <input
                id="role"
                name="role"
                onChange={ChangingHandles}
            />
            <button type="submit">Add Mate</button>
        </form>
    )
}
export default TeamForm;