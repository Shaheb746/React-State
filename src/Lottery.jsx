import Confetti from "react-confetti"
import { useState } from "react"
import { genTicket, sum } from "./helper"
import Ticket from "./Ticket";

export default function Lottery({n = 3 , winningSum = 15}) {
    const[ticket, setTicket] = useState(genTicket(n))
    let isWining = sum(ticket) === winningSum;
    let buyTicket = ()=>{
        setTicket(genTicket(n))
    }

    return(<div>
            <h2>Buy Lottery Ticket</h2>
            {isWining && <Confetti />}
            <h1>{isWining && "Congratulation! You won"}</h1>
            <Ticket ticket={ticket}/>

            <br />
            <button onClick={buyTicket}>Buy New Ticket</button>

        </div>)
}