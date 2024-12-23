import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Adir Shelly",
      image:
        "https://img.yad2.co.il/Pic/202411/22/1_4/o/y2_1pa_010881_20241122002107.jpeg?w=256&h=256&c=9",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
