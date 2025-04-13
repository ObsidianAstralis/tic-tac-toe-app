import checkWinner from "./CheckWinners";
import { describe, it, expect } from "vitest";

describe('checkWinner', ()=>{
    it('detects horizontal win', ()=>{
        const tiles = ['X', 'X', 'X', null, null, null, null, null, null];
        expect(checkWinner(tiles)).toEqual({winner: 'X', combination: [0, 1, 2]});
    });

    it('detects vertical win', ()=>{
        const tiles = ['O', null, null, 'O', null, null, 'O', null, null];
        expect(checkWinner(tiles)).toEqual({ winner: 'O', combination: [0, 3, 6] });
    });

    it('detects diagonal win', ()=>{
        const tiles = ['X', null, null, null, 'X', null, null, null, 'X'];
        expect(checkWinner(tiles)).toEqual({ winner: 'X', combination: [0, 4, 8] });
    });

    it('returns null when no winner', () => {
        const tiles = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
        expect(checkWinner(tiles)).toBe(null);
    });

    it('returns null when game is incomplete', () => {
    const tiles = [null, 'X', 'O', 'O', 'X', null, 'X', null, null];
    expect(checkWinner(tiles)).toBe(null);
    });

});