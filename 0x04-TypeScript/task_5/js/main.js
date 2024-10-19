"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMajorCredits = sumMajorCredits;
exports.sumMinorCredits = sumMinorCredits;
function sumMajorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits };
}
function sumMinorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits };
}
