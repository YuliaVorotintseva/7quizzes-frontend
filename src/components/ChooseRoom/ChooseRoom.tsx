import React from "react";
import { Link } from "react-router-dom";

import Loader from "../Loader/Loader";
import ChooseRoomUI from "../../entities/room/ui/ChooseRoomUI";
import { useGetAllRoomsQuery } from "../../entities/room/api/RoomAPI";

import "./chooseRoom.css";

const ChooseRoom = () => {
  const { isLoading } = useGetAllRoomsQuery();

  return (
    <div className="choose__room">
      <p className="choose__room_title">Game rooms</p>
      <p className="choose__room_info">
        You can join any room or{" "}
        <Link className="choose__room_create" to={"/create"}>
          create your own room
        </Link>
      </p>
      {isLoading ? <Loader /> : <ChooseRoomUI />}
    </div>
  );
};

export default ChooseRoom;
