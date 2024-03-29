// TextArea
import React from 'react';
import ReactDOM from 'react-dom/client';

function TextArea ({ callback, cols = 20, rows = 2, disabled = false, readOnly = false, placeholder='' }) {
  return (
    <textarea
      cols={cols}
      rows={rows}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={({ target : { value } }) => callback(value)}
    />
  );
}
ReactDOM.createRoot(
  document.querySelector('#root')
).render(<TextArea placeholder='Insert some text here...' callback={(val) => console.log(val)}/>)


// TextArea
// Renders a <textarea> element that uses a callback function to pass its value to the parent component.

// Use object destructuring to set defaults for certain attributes of the <textarea> element. Render a <textarea> element with the appropriate attributes and use the callback function in the onChange event to pass the value of the textarea to the parent.


