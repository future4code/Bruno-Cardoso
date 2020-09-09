import React from "react";
import styled from 'styled-components'

const DeleteButton = styled.span`
color: red;
`

export class ShowUsers extends React.Component {
  state = {
    users: [
      {
        id: 1,
        name: "Batman",
      },
      {
        id: 2,
        name: "Robin",
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.users.map((user) => {
          return <p key={user.id}>
                    {user.name}
                    <DeleteButton> X </DeleteButton>
                  </p>;
        })}
      </div>
    );
  }
}

export default ShowUsers;
