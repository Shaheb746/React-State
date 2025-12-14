
import { useState } from "react"

export default function LudoBord() {
    const [Moves, setMoves] = useState({blue: 0, yellow:0, green: 0, red:0})
    let BlueUpdate = () =>{
        setMoves((prevMoves)=>{
            return{...prevMoves, blue: prevMoves.blue + 1}
        });
    }
    let YellowUpdate = () =>{
        setMoves((prevMoves)=>{
            return{...prevMoves, yellow: prevMoves.yellow + 1}
        });
    }
    let GreenUpdate = () =>{
        setMoves((prevMoves)=>{
            return{...prevMoves, green: prevMoves.green + 1}
        });
    }
    let RedUpdate = () =>{
        setMoves((prevMoves)=>{
            return{...prevMoves, red: prevMoves.red + 1}
        });
    }
    return(
        <div>
            <p>Ludo Bord!</p>
            <p>Blue Moves = {Moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={BlueUpdate}>+1</button>
            <p>Yellow Moves = {Moves.yellow}</p>
            <button style={{backgroundColor:"yellow"}} onClick={YellowUpdate}>+1</button>
            <p>Green Moves = {Moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={GreenUpdate}>+1</button>
            <p>Red Moves = {Moves.red}</p>
            <button style={{backgroundColor:"red"}} onClick={RedUpdate}>+1</button>
        </div>
    )
}