/* eslint-disable prettier/prettier */

export interface ScoreboardItem {
    userId: string;
    displayName: string;
    score: number;
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