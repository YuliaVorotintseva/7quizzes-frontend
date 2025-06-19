import React from "react";

import RoomLayout from "../../layouts/RoomLayout/RoomLayout";
import ChooseRoom from "../../components/ChooseRoom/ChooseRoom";

const CreateRoomPage = () => {
  return (
    <>
      <RoomLayout className="choose">
        <ChooseRoom />
      </RoomLayout>
    </>
  );
};

export default CreateRoomPage;
