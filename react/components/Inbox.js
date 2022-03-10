import React from "react";
import Message from "./Message";

export default function Inbox() {
  const [message, setMessage] = React.useState([]);

  return (
    <div>
      <h1>Inbox</h1>
      {message ? (
        message.map((msj, i) => {
          return <Message key={i} fullMessage={msj} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
}
