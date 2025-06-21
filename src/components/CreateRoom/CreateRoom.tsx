import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useFormField from "../../utils/useFormField";
import CloseButton from "../CloseButton/CloseButton";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useCreateRoomMutation } from "../../entities/room/api/RoomAPI";

import "./createRoom.css";

const playerId = "player1";

const CreateRoom = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const createRoomField = useFormField();

  const handleSubmit = async () => {
    try {
      await useCreateRoomMutation({
        playerId,
        roomName: createRoomField.value,
      });
      navigate("/choose");
    } catch (error) {
      console.error(error);
      setIsOpen(true);
    }
  };

  return (
    <div className="create__room">
      <CloseButton onClickHandle={() => navigate("/choose")} />
      <p className="create__room_title">Create room</p>
      <form className="create__room_name" onSubmit={handleSubmit}>
        <label htmlFor="roomName">Room name</label>
        <input
          id="roomName"
          className="room__name"
          type="text"
          {...createRoomField}
          required
        />
        <Button
          className="create__room_button"
          onClick={() => navigate("/choose")}
          text="continue"
          isSubmit={true}
        />
      </form>
      {isOpen && (
        <Modal
          onClickHandle={() => setIsOpen(!isOpen)}
          title="Creating room error"
          content={
            <p>
              An error occurred while creating the room because you are already
              in another room. To create a new room, leave the current one.
            </p>
          }
        />
      )}
    </div>
  );
};

export default CreateRoom;
