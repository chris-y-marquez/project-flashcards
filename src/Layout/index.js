import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import deckList from "../components/deck/deckList";
import createNewDeck from "../components/deck/createNewDeck";
import Study from "../components/study/study";
import createNewCard from "../components/cards/createNewCard";
import Header from "./Header";
import NotFound from "./NotFound";
import viewDeck from "../components/deck/viewDeck";
import editCard from "../components/cards/editCard";
import editDeck from "../components/deck/editDeck";

function Layout() {
  
  return (
    <>
      <Header />
      <div className="container">
      <Switch>
          <Route exact path="/">
            <DeckList />
          </Route>
          <Route path="/decks/new">
            <CreateNewDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <ViewDeck />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CreateNewCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
