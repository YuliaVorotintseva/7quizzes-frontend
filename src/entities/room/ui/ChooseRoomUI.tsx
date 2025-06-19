import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../../components/Loader/Loader";
import { AppDispatch, RootState } from "../../../app/storeTypes";
import { getRooms } from "../model/roomActions";

import "./chooseRoomUI.css";
import { Room } from "../model/actionTypes";

const ChooseRoomUI = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { rooms, isLoading } = useSelector(
    (state: RootState) => state.roomReducer,
  );

  const roomBtns = rooms
    ? rooms.map((room: Room) => (
        <button
          className="choose__room_btn"
          onClick={() => navigate("/start")}
          key={room.id}
        >
          {room.name}
        </button>
      ))
    : [];

  useEffect(() => {
    if (isLoading) {
      dispatch(getRooms());
    }
  }, [dispatch, isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="choose__room_btns">{roomBtns}</div>
      )}
    </>
  );
};

export default ChooseRoomUI;
