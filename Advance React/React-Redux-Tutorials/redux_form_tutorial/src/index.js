import React from "react";
import ReactDOM from "react-dom/client";

import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { Provider } from "react-redux";
import { reducer as formReducer } from "redux-form";

import "./index.css";
import App from "./components/App";
import Form from "./components/Form";
import DynamicForm from "./components/DynamicForm";

// import registerServiceWorker from "./registerServiceWorker";

const rootReducer = combineReducers({
  form: formReducer,
});

const handleSubmit = (values) => {
  alert(JSON.stringify(values));
};

const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <App /> */}
    {/* <Form initialValues={{ firstName: "Nouman" }} /> */}

    <DynamicForm
      onSubmit={handleSubmit}
      initialValues={{
        users: [{}],
      }}
    />
  </Provider>
);

// registerServiceWorker();
