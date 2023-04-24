import memesData from "../src/memesData"
import { useState } from "react"

export default function Meme() {
    // Default states
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    // Setting meme
    const getMemeImage = ()=> {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme((prevMeme) => {
            return {
                ...prevMeme, randomImage: memesArray[randomNumber].url
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input className="form--input" type="text" placeholder="Top text"/>
                <input className="form--input" type="text" placeholder="Bottom text"/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>  
            </div>
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )
}
