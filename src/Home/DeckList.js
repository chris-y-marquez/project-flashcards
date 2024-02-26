import React from "react"
import Deck from "./Deck"
import { Link } from "react-router-dom"

function DeckList() {
  return (
        <React.Fragment>
            <Link to="/decks/new" className="btn btn-secondary" style={{marginBottom: "10px"}}>+ Create Deck</Link>
            <Deck />
        </React.Fragment>
        
    )
}

export default DeckList