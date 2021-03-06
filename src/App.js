import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import "./styles/App.css";

import EventSearcher from "./Components/EventSearcher/EventSearcher.js";
import Navbar from "./Components/Navbar/Navbar";
import EventDetails from "./Components/EventPage/EventPage";
import PageNotFound from "./Components/PageNotFound";

function App() {
  // declare spollo client to get from graphql endpoint
  const client = new ApolloClient({
    uri: "https://api.hackthenorth.com/v3/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <Router>
      <ApolloProvider client={client}>
        <Navbar />
        <Routes>
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/" element={<EventSearcher />} />
          <Route path="/:eventID/:eventName" element={<EventDetails />} />
        </Routes>
      </ApolloProvider>
    </Router>
  );
}

export default App;
