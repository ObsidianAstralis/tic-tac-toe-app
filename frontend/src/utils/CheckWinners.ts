const winningRules = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const checkWinner = (tiles: (string | null)[]) => {
    for (const combination of winningRules) {
        const [a, b, c] = combination

        if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
            return { winner: tiles[a], combination }
        }
    }

    return null
}

export default checkWinner