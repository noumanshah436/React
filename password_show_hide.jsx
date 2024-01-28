import React from "react";
import ReactDOM from "react-dom/client";

function PasswordRevealer({ value }) {
  const [shown, setShown] = React.useState(false);

  return (
    <div>
      <input
        type={shown ? "text" : "password"}
        value={value}
        onChange={() => {}}
      />
      <button onClick={() => setShown(!shown)}>Show/Hide</button>
    </div>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(
  <PasswordRevealer />
);
