import React from "react"


const Meme = () => {
    
    const [meme , setMemeImg] = React.useState({
        topText:" ",
        bottomText: " ",
        randomImg:"http://i.imgflip.com/1bij.jpg" 

    })

    const[memetext , setMemeText] = React.useState({
        upperText: "",
        bottomText: ""
    })

    const changeTextFunc = (event) => {
       const {name , value} = event.target
        
       setMemeText(prevmeme => ({
            ...prevmeme,
            [name] : value
        }))
    }



    const [allMemeImg , setallMemeImg] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setallMemeImg(data.data.memes))
    }, [])
    
    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemeImg.length)
        const url = allMemeImg[randomNumber].url
        setMemeImg(prevMeme => ({
            ...prevMeme , 
            randomImg:url
        }))
    
    }



    
    return (
        <main>
             <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="upperText"
                    value={memetext.upperText}
                    onChange={changeTextFunc}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={memetext.bottomText}
                    onChange={changeTextFunc}
                />
                <button 
                    className="form--btn"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="img--div">
            <img src={meme.randomImg} className="meme--image"/>
            <h2 className="meme--text top" >{memetext.upperText}</h2>
           <h2 className="meme--text bottom" >{memetext.bottomText}</h2>
            </div>
        </main> 
        </main>
    )
}
export default Meme