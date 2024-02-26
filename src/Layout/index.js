import React, { Fragment } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import ViewDeck from "../components/Home/ViewDeck";
import CreateDeckButton from "../components/deck/CreateDeckbutton";
import CreateDeck from "../components/deck/CreateDeck";
import DeckList from "../components/deck/DeckList";
import StudyDeck from "../components/deck/StudyDeck";
import EditDeck from "../components/deck/EditDeck";
import AddCard from "../components/card/AddCard";
import EditCard from "../components/card/EditCard";
import { Route, Switch } from "react-router-dom";

function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path={`/`}>
            <CreateDeckButton />
            <DeckList />
          </Route>

          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route path="/decks/:deckId/study">
            <StudyDeck />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route path="/decks/:deckId/">
            <ViewDeck />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default Layout;