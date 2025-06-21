import React from "react";

import RoomLayout from "../../layouts/RoomLayout/RoomLayout";
import CreateRoom from "../../components/CreateRoom/CreateRoom";

const CreateRoomPage = () => (
  <RoomLayout className="create">
    <CreateRoom />
  </RoomLayout>
);

export default CreateRoomPage;
