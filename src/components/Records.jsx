import React from "react";
import "./Records.scss";
const Records = ({ data, sortOrder }) => {
  return (
    <table className="table customTable">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Full Name</th>
          <th scope="col">User Name</th>
          <th scope="col">Thumbnail Icon</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          (
            {
              name: { title, first, last },
              login: { username, uuid },
              picture: { thumbnail },
            },
            index
          ) => (
            <tr key={uuid}>
              <td>{index + 1} </td>
              <td>{title + " " + first + " " + last} </td>
              <td>{username}</td>
              <td>
                <img alt="img" src={`${thumbnail}`}></img>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Records;
