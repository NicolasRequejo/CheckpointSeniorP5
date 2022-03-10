import React from "react";

export default function NewMessageForm({ onSend }) {
  const [recipient, setRecipient] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [body, setBody] = React.useState("");

  const recOnChange = (e) => {
    console.log(e);
    setRecipient(e.target.value);
  };
  const subOnChange = (e) => {
    setSubject(e.target.value);
  };
  const bodyOnChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      recipient,
      subject,
      body,
    };

    onSend(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>To:</label>
        <input
          type="text"
          id="recipient-field"
          name="recipient"
          onChange={recOnChange}
          value={recipient}
        />
      </div>
      <div className="form-group">
        <label>Subject:</label>
        <input
          type="text"
          id="subject-field"
          name="subject"
          onChange={subOnChange}
          value={subject}
        />
      </div>
      <div className="form-group">
        <label>Body:</label>
        <textarea
          id="body-field"
          name="body"
          onChange={bodyOnChange}
          value={body}
        />
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
}
