// Tests.
import { convert } from "./convert.mjs";

export function runTests() { 
    testInchesToMillimeters();
    testInchesToCentimeters();
    testInchesToMeters();
}


function testInchesToMillimeters() {
    const result = convert(1, '-mm');
    if (result === '25.40 mm') {
        console.log('Test passed!');
    } else {
        console.log('Test Failed..');
    }
}

function testInchesToCentimeters() {
    const result = convert(1, '-cm');
    if (result === '2.54 cm') {
        console.log('Test passed!');
    } else {
        console.log('Test failed..');
    }
}

function testInchesToMeters() {
    const result = convert(1, '-m');
    if (result === '0.03 m') {
        console.log('Test passed!');
    } else {
        console.log('Test failed..');
    }
}

