import React from "react";

class Users extends React.Component {

    users = [
        {
            id: 1,
            firstname: "John",
            lastname: "Smith",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam libero ultricies nisl,",
            age: 25,
            isHappy: true
        },
        {
            id: 2,
            firstname: "Jane",
            lastname: "Doe",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam libero ultricies nisl,",
            age: 30,
            isHappy: false
        }
    ];

    render() {
        if(this.users.length === 0) 
            return (
                <p>No users</p>
            );
        else
            return (
                <div>
                    {this.users.map((user) => (
                        <div className="user" key={user.id}>
                            <h3>{user.firstname} {user.lastname}</h3>
                            <p>{user.bio}</p>
                            <p>{user.age}</p>
                            <p>{user.isHappy ? <span>Happy</span> : <span>Sad</span>}</p>
                        </div>
                    ))}
                </div>
            );
    };
};

export default Users;