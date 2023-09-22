import { useId } from "react";

export default function EmailForm() {
  const id = useId();

  console.log(document.getElementById(":r0:"));

  return (
    <>
      <label htmlFor={id}>Email: </label>
      <input id={id} type="email" /><br />

      {/* for multiple inputs */}

      <label htmlFor={id + "-firstName"}>First Name</label>
      <input id={id + "-firstName"} type="text" /><br />

      <label htmlFor={id + "-lastName"}>Last Name</label>
      <input id={id + "-lastName"} type="text" /><br />
    </>
  );
}

// document.getElementById(':r0:')


// we cannot grab that id using document query selector.
