import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Anuj N",
      image:
        "https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg",
      places: 1,
    },
    {
      id: "u2",
      name: "User 2",
      image:
        "https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg",
      places: 1,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
