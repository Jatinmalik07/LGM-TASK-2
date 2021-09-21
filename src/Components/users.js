import React from 'react'

const Users_card = ({loading,users}) => {
    return loading ? (   
          <div id="main">
            <iframe src="https://giphy.com/embed/vfg92uVyrc3aU" width="1300" height="570" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ui-user-interface-vfg92uVyrc3aU" ></a></p>
            
          </div>
        ) : 
        (
          <div id="main">
    
          {users.map(user =>
                      <div className="project column-3">
                        {
                          console.log(user)
                        }
                        <div className="profile">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          <p>User_ID: {user.id}</p>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users_card;