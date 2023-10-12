// ▼△▼△▼△▼△▼ Let's Play Baccarat! ▼△▼△▼△▼△▼


// deck of cards array
const deckOfCards = [
    { suit: 'Spades', rank: 'Ace', value: 1 },
    { suit: 'Spades', rank: '2', value: 2 },
    { suit: 'Spades', rank: '3', value: 3 },
    { suit: 'Spades', rank: '4', value: 4 },
    { suit: 'Spades', rank: '5', value: 5 },
    { suit: 'Spades', rank: '6', value: 6 },
    { suit: 'Spades', rank: '7', value: 7 },
    { suit: 'Spades', rank: '8', value: 8 },
    { suit: 'Spades', rank: '9', value: 9 },
    { suit: 'Spades', rank: '10', value: 10 },
    { suit: 'Spades', rank: 'Jack', value: 10 },
    { suit: 'Spades', rank: 'Queen', value: 10 },
    { suit: 'Spades', rank: 'King', value: 10 },
    { suit: 'Hearts', rank: 'Ace', value: 1 },
    { suit: 'Hearts', rank: '2', value: 2 },
    { suit: 'Hearts', rank: '3', value: 3 },
    { suit: 'Hearts', rank: '4', value: 4 },
    { suit: 'Hearts', rank: '5', value: 5 },
    { suit: 'Hearts', rank: '6', value: 6 },
    { suit: 'Hearts', rank: '7', value: 7 },
    { suit: 'Hearts', rank: '8', value: 8 },
    { suit: 'Hearts', rank: '9', value: 9 },
    { suit: 'Hearts', rank: '10', value: 10 },
    { suit: 'Hearts', rank: 'Jack', value: 10 },
    { suit: 'Hearts', rank: 'Queen', value: 10 },
    { suit: 'Hearts', rank: 'King', value: 10 },
    { suit: 'Diamonds', rank: 'Ace', value: 1 },
    { suit: 'Diamonds', rank: '2', value: 2 },
    { suit: 'Diamonds', rank: '3', value: 3 },
    { suit: 'Diamonds', rank: '4', value: 4 },
    { suit: 'Diamonds', rank: '5', value: 5 },
    { suit: 'Diamonds', rank: '6', value: 6 },
    { suit: 'Diamonds', rank: '7', value: 7 },
    { suit: 'Diamonds', rank: '8', value: 8 },
    { suit: 'Diamonds', rank: '9', value: 9 },
    { suit: 'Diamonds', rank: '10', value: 10 },
    { suit: 'Diamonds', rank: 'Jack', value: 10 },
    { suit: 'Diamonds', rank: 'Queen', value: 10 },
    { suit: 'Diamonds', rank: 'King', value: 10 },
    { suit: 'Clubs', rank: 'Ace', value: 1 },
    { suit: 'Clubs', rank: '2', value: 2 },
    { suit: 'Clubs', rank: '3', value: 3 },
    { suit: 'Clubs', rank: '4', value: 4 },
    { suit: 'Clubs', rank: '5', value: 5 },
    { suit: 'Clubs', rank: '6', value: 6 },
    { suit: 'Clubs', rank: '7', value: 7 },
    { suit: 'Clubs', rank: '8', value: 8 },
    { suit: 'Clubs', rank: '9', value: 9 },
    { suit: 'Clubs', rank: '10', value: 10 },
    { suit: 'Clubs', rank: 'Jack', value: 10 },
    { suit: 'Clubs', rank: 'Queen', value: 10 },
    { suit: 'Clubs', rank: 'King', value: 10 },
];


// shuffle the deck (fisher-yates method)
function shuffleDeck(deck) {
    console.log("shuffling deck");
    const shuffled = deck.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    console.log("deck shuffled!");
    return shuffled;
}

function calculateHandScore(hand) {
    let score = 0;
    for (const card of hand) {
        score += card.value;
    }
    return score % 10;
}

function determineWinner(playerScore, bankerScore) {
    if (playerScore > bankerScore) {
        return 'Player';
    } else if (bankerScore > playerScore) {
        return 'Banker';
    } else {
        return 'Tie';
    }
}

// deal the hands
function dealCards() {
    const playerHand = [];
    const bankerHand = [];

    // shuffle the deck
    let shuffledDeck = shuffleDeck(deckOfCards);

    // deal 2 cards each, alternating
    const playerFirstCard = shuffledDeck.pop();
    playerHand.push(playerFirstCard);

    const bankerFirstCard = shuffledDeck.pop();
    bankerHand.push(bankerFirstCard);

    const playerSecondCard = shuffledDeck.pop();
    playerHand.push(playerSecondCard);

    const bankerSecondCard = shuffledDeck.pop();
    bankerHand.push(bankerSecondCard);

    console.log({ playerHand, bankerHand });

    const playerScore = calculateHandScore(playerHand);
    const bankerScore = calculateHandScore(bankerHand);
    const winner = determineWinner(playerScore, bankerScore);

    console.log("dealing cards....");
    return { playerHand, bankerHand, playerScore, bankerScore, winner };
}



export { dealCards };
