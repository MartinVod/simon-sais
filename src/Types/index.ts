/* eslint-disable prettier/prettier */

export interface ScoreboardItem {
    userId: string;
    displayName: string;
    score: number;
    id:string;
}

export type difficultiesType = 'easy' | 'medium' | 'hard';

export type colorItem = {
    name: string;
    height: string;
    width: string;
    sound?: string;
};

export type colorObject = {
    [key: string]: colorItem;
};
