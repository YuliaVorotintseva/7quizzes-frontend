import React from "react";
import { Link } from "react-router-dom";

import "./chooseRoom.css";
import ChooseRoomUI from "../../entities/room/ui/ChooseRoomUI";

const ChooseRoom = () => {
  return (
    <div className="choose__room">
      <p className="choose__room_title">Game rooms</p>
      <p className="choose__room_info">
        You can join any room or
        <Link to={"/create"}>create your own room</Link>
      </p>
      <ChooseRoomUI />
    </div>
  );
};

export default ChooseRoom;
