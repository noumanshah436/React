import React from 'react';
import ReactDOM from 'react-dom/client';

// style.css

// body{
//   background-color: white;
// }

// .tree-element {
//   margin: 0;
//   position: relative;
// }

// div.tree-element:before {
//   content: '';
//   position: absolute;
//   top: 24px;
//   left: 1px;
//   height: calc(100% - 48px);
//   border-left: 1px solid gray;
// }

// .toggler {
//   position: absolute;
//   top: 10px;
//   left: 0px;
//   width: 0;
//   height: 0;
//   border-top: 4px solid transparent;
//   border-bottom: 4px solid transparent;
//   border-left: 5px solid gray;
//   cursor: pointer;
// }

// .toggler.closed {
//   transform: rotate(90deg);
// }

// .collapsed {
//   display: none;
// }


function TreeView({
  data,
  toggled = true,
  name = null,
  isLast = true,
  isChildElement = false,
  isParentToggled = true
}) {
  const [isToggled, setIsToggled] = React.useState(toggled);

  return (
    <div
      style={{ marginLeft: isChildElement ? 16 : 4 + "px" }}
      className={isParentToggled ? "tree-element" : "tree-element collapsed"}
    >
      <span
        className={isToggled ? "toggler" : "toggler closed"}
        onClick={() => setIsToggled(!isToggled)}
      />
      {name ? <strong>&nbsp;&nbsp;{name}: </strong> : <span>&nbsp;&nbsp;</span>}
      {Array.isArray(data) ? "[" : "{"}
      {!isToggled && "..."}
      {Object.keys(data).map(
        (v, i, a) =>
          typeof data[v] == "object" ? (
            <TreeView
              data={data[v]}
              isLast={i === a.length - 1}
              name={Array.isArray(data) ? null : v}
              isChildElement
              isParentToggled={isParentToggled && isToggled}
            />
          ) : (
            <p
              style={{ marginLeft: 16 + "px" }}
              className={isToggled ? "tree-element" : "tree-element collapsed"}
            >
              {Array.isArray(data) ? "" : <strong>{v}: </strong>}
              {data[v]}
              {i === a.length - 1 ? "" : ","}
            </p>
          )
      )}
      {Array.isArray(data) ? "]" : "}"}
      {!isLast ? "," : ""}
    </div>
  );
}

let data = {
  lorem: {
    ipsum: "dolor sit",
    amet: {
      consectetur: "adipiscing",
      elit: [
        "duis",
        "vitae",
        {
          semper: "orci"
        },
        {
          est: "sed ornare"
        },
        "etiam",
        ["laoreet", "tincidunt"],
        ["vestibulum", "ante"]
      ]
    },
    ipsum: "primis"
  }
};
ReactDOM.createRoot(
  document.querySelector('#root')
).render(<TreeView data={data} name='data'/>)





// TreeView
// Renders a tree view of a JSON object or array with collapsible content.

// Use object destructuring to set defaults for certain props. Use the value of the toggled prop to determine the initial state of the content (collapsed/expanded). Use the React.setState() hook to create the isToggled state variable and give it the value of the toggled prop initially. Return a <div> to wrap the contents of the component and the <span> element, used to alter the component's isToggled state. Determine the appearance of the component, based on isParentToggled, isToggled, name and Array.isArray() on data. For each child in data, determine if it is an object or array and recursively render a sub-tree. Otherwise, render a <p> element with the appropriate style.

