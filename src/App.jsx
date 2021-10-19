import React from "react";
import Routes from "./config/routes";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <React.Fragment>
          <Routes />
        </React.Fragment>
      </PersistGate>
    </Provider>
  );
}
