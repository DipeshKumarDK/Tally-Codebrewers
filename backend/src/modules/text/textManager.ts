import { TEXTS } from './data/texts';
import { DIFFICULT_TEXTS } from './data/difficultTexts';
import { ILobby } from '../lobby/types/Lobby';

export const chooseRandomText = (lobby: ILobby): string => {
    if (lobby.typedTexts.length === TEXTS.length) {
        lobby.typedTexts = [];
    }

    let index;
    do {
        index = Math.floor(Math.random() * (lobby.difficulty === 'hard' ? DIFFICULT_TEXTS.length : TEXTS.length));
    } while (lobby.typedTexts.includes(index));

    lobby.typedTexts.push(index);

    let ans = lobby.difficulty === 'hard' ? DIFFICULT_TEXTS[index] : TEXTS[index];
    return ans ?? '';
};
