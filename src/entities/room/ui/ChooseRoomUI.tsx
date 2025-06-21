import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setCurrentRoomId } from "../../../entities/currentRoomId/model/currentRoomIdActions";
import { AppDispatch, RootState } from "../../../app/storeTypes";
import { Room } from "../model/actionTypes";

import "./chooseRoomUI.css";

const ChooseRoomUI = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { rooms } = useSelector((state: RootState) => state.roomReducer);

  return (
    <div className="choose__room_btns">
      {rooms && rooms.length > 0 ? (
        rooms.map((room: Room, key) => (
          <button
            key={key}
            className="choose__room_btn"
            onClick={() => {
              dispatch(setCurrentRoomId(room.id));
              navigate("/start");
            }}
          >
            {room.name}
          </button>
        ))
      ) : (
        <p className="choose__room_info">There are no rooms yet</p>
      )}
    </div>
  );
};

export default ChooseRoomUI;
