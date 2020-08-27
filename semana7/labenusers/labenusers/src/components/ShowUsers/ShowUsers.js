import React from "react";

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
    return <div></div>;
  }
}

export default ShowUsers;
