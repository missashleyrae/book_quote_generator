const quotes = [
    '"It is a curious thing, the death of a loved one. Well all know that our time in this world is limited. And yet it is always a surprise when it happens to someone we know. It is like walking up the stairs to your bedroom in the dark, and thinking there is one more stair than there is. Your foot falls down, through the air, and there is a sickly moment of dark surprise as you try to readjust the way you thought of things." --Lemony Snicket, The Reptile Room',

    '"Act out being alive, like a play. And after a while, a long while, it will be true."--John Steinbeck, East of Eden',

    '"Humans need fantasy to be human. To be the place where the falling angel meets the rising ape"--Terry Pratchett, Hogfather',

    '"He who controls the past controls the future. He who controls the present controls the past."--George Orwell, 1984',

    '"A person who has good thoughts cannot ever be ugly. You can have a wonky nose and a crooked mouth and a double chin and stick-out teeth, but if you ahve good thoughts they will shine out of your face like sunbeams and you will always look lovely." --Roald Dahl, The Twits',

    '"My life amounts to no more than a single drop in a limitless ocean; yet, what is any ocean but a multitude of drops?" --David Mitchell, Cloud Atlas',

    '"Come, we must see and act. Devils or no devils, or all the devils all at once, it matters not; we fight him all the same." --Bram Stoker, Dracula',

    '"Believe me, my young friend, there is nothing-absolutely nothing-half so much worth doing as simply messing about in boats." --Kenneth Grahame, The Wind in the Willows'
]

let quoteEl = document.getElementById("quote-el")

function generateRandomQuote(){
    let randomQuote=Math.floor(Math.random() * quotes.length)
    quoteEl.textContent = quotes[randomQuote]
}