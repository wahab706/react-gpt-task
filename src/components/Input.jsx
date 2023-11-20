import React, { useState } from "react";
import axios from "axios";

export function Input(props) {
  const BASE_URL = "http://64.226.89.243:86/text/";
  const { messagesList, setMessagesList, setLoading } = props;

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (value) {
      handleMessages(value, true);
      sendMessage(value);
      setValue("");
    }
  };

  const sendMessage = async (value) => {
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}`, {
        text: value,
      });

      if (response.data?.message == "success") {
        handleMessages(response.data, false);
      } else {
        handleMessages(error, false, true);
      }
      setLoading(false);
    } catch (error) {
      console.warn("Api Error", error);
      setLoading(false);
      handleMessages(error, false, true);
    }
  };

  const handleMessages = (data, self, isError) => {
    // let message1 = {
    //   id: messagesList.length + 1,
    //   content: value,
    //   isError: false,
    //   type: "text",
    //   owner: true,
    // };

    // let message2 = {
    //   id: messagesList.length + 2,
    //   owner: false,
    //   isError: isError ? true : false,
    //   content: isError ? "Something went wrong! try again." : data.video_url,
    //   type: isError ? "text" : "audio",
    // };

    let message = {
      id: messagesList.length + 1,
      content: self
        ? data
        : isError
        ? "Something went wrong! try again."
        : data.video_url,
      isError: self ? false : isError ? true : false,
      type: self ? "text" : isError ? "text" : "audio",
      owner: self ? true : false,
    };

    setMessagesList((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="input-container">
      <div className="input-main">
        <span className="error-div"></span>
        <input
          type="text"
          placeholder="Please type..."
          minLength="0"
          maxLength="500"
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          className="input-field"
        />
        <span className="limit">{value.length} / 500</span>
      </div>

      <button
        className={`btn send-btn`}
        disabled={!value}
        onClick={handleSubmit}
      />
    </div>
  );
}
