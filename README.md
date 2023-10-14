# ⋇⊶⊰ React Baccarat ⊱⊷⋇

This is a simple popular casino card game called Baccarat, implemented as a React web application.

## Features

- Shuffle and deal a deck of cards.
- Calculate the scores for the player and banker hands.
- Determine the winner of the round.

## How to Play

1. Click the "Deal" button to start a new round.
2. Two cards are dealt to the player and the banker, alternating.
3. The scores are calculated for both the player and banker.
4. The winner of the round (Player, Banker, or Tie) is displayed.

## Installation

To run the app locally:

1. Clone this repository to your local machine.
2. Install the required dependencies by running `npm install`.
3. Start the development server using `npm start`.
4. Open your web browser and navigate to `http://localhost:3000` to play the game.

## Code Structure

- `baccarat.js`: Contains the game logic, including card shuffling, hand score calculation, and determining the winner.
- `App.js`: The main component of the React app that handles user interactions and displays game results.

## Future Updates

- This app currently reshuffles a single card deck each and every time a hand is dealt... not really casino-like!  I'd like to switch this over to system that allows for card-counting.
- Some additional styling
- Mock betting with a chips/coin balance for the player

Enjoy playing Baccarat!
