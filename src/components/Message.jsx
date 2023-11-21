import React, { Fragment, useEffect, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";

export function Message({ message }) {
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <Fragment>
      <div
        ref={ref}
        className={`message ${message.owner ? "self-msg" : "reply-msg"} ${
          message.isError && "border border-red-300 !bg-transparent"
        } ${message.type == "audio" && "!bg-transparent !p-0 !-ml-1.5"} `}
      >
        {message.owner || message.type == "text" ? (
          <span className={`${message.isError && "text-red-400 "}`}>
            {message.content}
          </span>
        ) : (
          <ReactAudioPlayer
            controls
            preload="auto"
            controlsList="nodownload"
            src={message.content}
          />
        )}
      </div>
    </Fragment>
  );
}
