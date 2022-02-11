// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);

    }
    return gifts;
}

wrapGifts(gifts);


const cardRecipient = ["Guadalupe", "Ollie", "Aki"]

function writeCards(cardRecipient) {
    let messages = []
    for (let i = 0; i < cardRecipient.length; i++) {
    messages.push(`Thank you, ${cardRecipient[i]}, for the wonderful surprise gift!`)
    }
return messages
}


function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number--
    }
}