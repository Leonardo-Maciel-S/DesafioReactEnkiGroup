import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.scss";
import App from "./app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const useClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={useClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
