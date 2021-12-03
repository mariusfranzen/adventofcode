import { readFileSync } from 'fs';
import path from 'path';

export default class Day1 {
    constructor() {
        const numbers = this.readFile(path.join(__dirname, '/../../_input/day1.txt')).map(Number);
        console.log(this.countIncreases(numbers));
    }

    // Function that reads a file and returns an array of each line
    private readFile = (filePath: string) => {
        return readFileSync(filePath, 'utf8').split('\n');
    }

    // Function that takes an array of numbers and counts how many times the number increases
    private countIncreases = (numbers: number[]) => {
        let count = 0;
        for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] < numbers[i + 1]) {
                count++;
            }
        }
        return count;
    }
}
