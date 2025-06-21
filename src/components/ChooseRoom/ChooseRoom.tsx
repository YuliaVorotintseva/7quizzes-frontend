import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ChooseRoomUI from "../../entities/room/ui/ChooseRoomUI";
import { AppDispatch, RootState } from "../../app/storeTypes";
import { getRooms } from "../../entities/room/model/roomActions";

import "./chooseRoom.css";
import Loader from "../Loader/Loader";

const ChooseRoom = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.roomReducer);

  useEffect(() => {
    if (isLoading) {
      dispatch(getRooms());
    }
  }, [dispatch, isLoading]);

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
