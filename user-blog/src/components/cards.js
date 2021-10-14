import React from "react";

const Users = ({loading, users}) => {
    const mainstyle = {
        display: "flex"
    };
    return loading ? (
        <div id="main" align="center">
            <img
               src="https://c.tenor.com/vp3V50Hs-B8AAAAi/loading-waiting.gif"
               alt="Please Wait.."
               className="loader"
               />
        </div>
    ) : (
        <div id="main" style={mainstyle}>
            {users.map((user) => (
                <div className="profile_content" key={user.id}>
                    {console.log(user)}

                    <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                    <h1 className="names_of_user">
                        {user.first_name} {user.last_name}
                    </h1>
                    <p className="email_of_user">{user.email}</p>
                    <p>User Number: {user.id}</p>
                </div>
            ))}
        </div>
    );
};

export default Users;