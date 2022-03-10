import e from "express";
import React from "react";

export default function Message({ fullMessage, markAsRead }) {
  const clickHandle = (e) => {
    markAsRead(e);
  };
  return (
    <div onClick={() => clickHandle(fullMessage.id)}>
      <h1>
        From: <span>{fullMessage.from.email}</span>
      </h1>
      <h2>
        To: <span>{fullMessage.to.email}</span>
      </h2>
      <h3>
        Subject: <span>{fullMessage.subject}</span>
      </h3>
      <p>{fullMessage.body}</p>
    </div>
  );
}
