export enum GameType {
    BLACKJACK = 1,
    SOLITAIRE = 2
}

export const GameTypes = [
    {
        gameType: GameType.BLACKJACK,
        name: 'BlackJack',
        url: '/black-jack'
    },
    {
        gameType: GameType.SOLITAIRE,
        name: 'Solitaire',
        url: '/solitaire'
    }
]