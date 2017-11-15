import "./index.css";

import React from "react";
import { render } from "react-dom";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";

import { writeNewLoginToStore } from './UserForm';

import { link } from "./graphql/link";
import App from "./App";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);


setInterval(() => {
  writeNewLoginToStore(
    client,
    "wailo"+Math.floor(Math.random() * 100)
  );
}, 2000)