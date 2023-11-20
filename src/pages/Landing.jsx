import React, { useState } from "react";
import { Messages, Input, InitialChat } from "../components";

export function Landing() {
  const [messagesList, setMessagesList] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex h-screen pb-6">
      <div className="main_container">
        <div className="flex flex-col h-full">
          <div className="chat_list">
            <InitialChat />
            <Messages messages={messagesList} loading={loading} />
          </div>

          <Input
            messagesList={messagesList}
            setMessagesList={setMessagesList}
            setLoading={setLoading}
          />
        </div>
      </div>
    </div>
  );
}
