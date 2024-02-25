import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import { readDeck } from "../../utils/api"
import card from "./card"

function cardList() {
  const [deck, setDeck] = useState([])
  const [error, setError] = useState(undefined)
  const {deckId} = useParams()
  
  useEffect (() => {
    const abortController = new AbortController()
    readDeck(deckId, abortController.signal)
    .then(setDeck)
    .catch(setError)
    return () => abortController.abort()
    
  }, [deckId])
  
  const cards = deck.cards
  let cardList = ""
  
  if (cards) {
    cardList= cards.map((card) => < Card key={card.id} card={card} />)
  } else {
    cardList = "Loading..."
  }
  
  return (
  <div>
      {cardList}
      </div>
      )
}

export default cardList