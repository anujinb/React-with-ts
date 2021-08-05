import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import PeopleList from "../src/components/List"
import AddToList from "./components/AddtoList"

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      age: 36,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allergic to staying on the same team"
    }
  ])
  return (
    <div className="App">
      <h1>List</h1>
      <PeopleList people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  )
}

export default App
