import React, { useState } from 'react'
import Tile from './Tiles'
import checkWinner from '../utils/CheckWinners'

const Board: React.FC = () => {
  const [tiles, setTiles] = useState<(string | null)[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [winner, setWinner] = useState<string | null>(null)
  const [winningCombination, setWinningCombination] = useState<(number[] | null)>(null)

  const handleClick = (index: number) => {
    if (tiles[index] || winner) return

    // Update the board
    const nextTiles = tiles.slice()
    nextTiles[index] = xIsNext ? "X" : "O"

    setTiles(nextTiles)
    setXIsNext(!xIsNext)

    // Check any winner
    const result = checkWinner(nextTiles)
    if (result) {
      setWinner(result.winner)
      setWinningCombination(result.combination)
    }
  }

  const handleReset = () => {
    setTiles(Array(9).fill(null))
    setXIsNext(true)
    setWinner(null)
    setWinningCombination(null)
  }
  
  const status = winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-6">{status}</div>
      <div className="grid grid-cols-3 gap-1 border-solid border-white border-2 p-2 mb-8 rounded-lg shadow-inner shadow-blue-500">
        {tiles.map((tile, id) => (
          <Tile key={id} value={tile} onClick={() => handleClick(id)} highlight={winningCombination?.includes(id) || false} />
        ))}
      </div>
      <button title="reset" type="reset" onClick={handleReset} className='w-40 h-11 text-xl bg-transparent shadow-inner shadow-fuchsia-500 text-white rounded-full hover:border-x-cyan-500 hover:border-4 hover:scale-125 hover:ease-linear'>Reset</button>
    </div>
  )
}

export default Board