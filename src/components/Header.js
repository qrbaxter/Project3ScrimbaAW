import React from "react"
import "../style.css"
let banana=require("../images/banana.png")


export default function Header() {
    return (
        <header className="header">
            <img 
                src={banana}
                alt="banana"
                className="header--image"
            />
            <h2 className="header--title">Meme Time</h2>
            <h4 className="header--project">Project3ScrimbaAW</h4>
        </header>
    )
}