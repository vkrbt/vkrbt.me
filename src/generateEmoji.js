import {getRandomInt} from './random';
import {isInRadius} from './isInRadius';

const FIRST_EMOJI_FACE = 0x1F601;
const LAST_EMOJI_FACE = 0x1F64F;

export function generateEmoji(number, radius) {
	let randomEmojis = [];

    for (let i = 0; i < number; ++i) {
		let newEmoji;
		let emojiInRadius;
		let attempts = 0;

        while (!newEmoji || emojiInRadius) {
			attempts += 1;

			if (attempts > 5) {
				return randomEmojis;
			}

			newEmoji = {
				x: getRandomInt(0, innerWidth),
				y: getRandomInt(0, innerHeight),
				emoji: `&#${getRandomInt(FIRST_EMOJI_FACE, LAST_EMOJI_FACE)}`,
			};

			emojiInRadius = isInRadius(randomEmojis, newEmoji, radius);
		}

		randomEmojis.push(newEmoji);
    }

    return randomEmojis;
}