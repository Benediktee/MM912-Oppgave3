// convert.mjs
import { runTests } from './test.mjs';


export function convert(inches, unit) {

    const conversions = {
        '-mm': (inches) => (inches * 25.4).toFixed(2) + ' mm',
        '-cm': (inches) => (inches * 2.54).toFixed(2) + ' cm',
        '-m': (inches) => (inches * 0.0254).toFixed(2) + ' m',
    };

    if (conversions[unit]) {
        return conversions[unit](inches);
    } else {
        return 'Invalid Unit. Use -mm, -cm, or -m. For example in Node: node convert.mjs 3 -mm';
    }
}

if (typeof window !== 'undefined') {

    document.addEventListener('DOMContentLoaded', function () {
        const button = document.getElementById('convertButton');
        button.onclick = () => {
            const inches = parseFloat(document.getElementById('inchesInput').value);
            const unit = document.getElementById('unitSelect').value;
            const result = convert(inches, unit);
            console.log('convert', inches, unit)

            const output = document.getElementById('outputText');
            const li = document.createElement('li');

            li.innerHTML = `Result: ${result}`;
            output.appendChild(li);
        };
    });
    
} else {

    let argument = process.argv;
    if (argument.length === 4) {
        const inches = parseFloat(argument[2]);
        const unit = argument[3];

        if (isNaN(inches)) {
            console.log('Please use a valid number of inches.');
        } else {
            const result = convert(inches, unit);
            console.log(result);
        }
    } else {
        console.log('Use: node convert.js <inches> <-mm/-cm/-m> [-t]. For example: node convert.js 3 -mm.');
    }
}

let argument = process.argv;
    if (argument.includes('-t')) {
        runTests();
    } 