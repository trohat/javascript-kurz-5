/*7.Write a function that takes time (hours, minutes, seconds) and
displays it on the screen in the format "hh:mm:ss". If minutes

and/or seconds were not sent when the function was called,
then output them as 00.
8. Write a function that takes hours, minutes, and seconds and
returns this time in seconds.
9. Write a function that takes the number of seconds, converts
them into hours, minutes, and seconds and returns them as a
string "hh:mm:ss".
10. Write a function that calculates the difference between dates.
The function takes 6 parameters, which describe 2 dates, and
returns the result as a string "hh:mm:ss". When completing the
task, use the functions from the previous 2 tasks: first convert
both dates into seconds, find the difference in seconds, and then
convert the difference back to "hh:mm:ss".*/



function toSeconds(hours, minutes, seconds) {
    return seconds + minutes * 60 + hours * 60 * 60;
}

function toSeconds2(hours, minutes, seconds) {
    let hoursInSeconds = 3600 * hours;
    console.log("Hodiny převedené na sekundy: " + hoursInSeconds)
    let minutesInSeconds = 30 * minutes;
    console.log("Minuty převedené na sekundy: " + minutesInSeconds)
    let secondsTotal = seconds + minutesInSeconds + hoursInSeconds
    return secondsTotal;
}

function toSeconds3(hours, minutes, seconds) {
    minutes = minutes + hours * 60;
    seconds += minutes * 60;
    return seconds;
}

function niceTime(hours, minutes, seconds = "00") {
    return `${hours}:${minutes}:${seconds}`;
}

// niceTime = format hh:mm:ss
function toNiceTime(seconds) {
    let minutes;
    let hours;

    hours = Math.floor(seconds / 3600);
    seconds = seconds - hours * 3600;

    minutes = seconds / 60
    minutes = Math.floor(minutes)
    seconds = seconds - minutes * 60

    return niceTime(hours, minutes, seconds);
}

const toNiceTimeArrow = (seconds) => {
    let minutes;
    let hours;

    hours = Math.floor(seconds / 3600);
    seconds = seconds - hours * 3600;

    minutes = seconds / 60
    minutes = Math.floor(minutes)
    seconds = seconds - minutes * 60

    return niceTime(hours, minutes, seconds);
};

function toNiceTime(seconds) {
    // doesn't work with negative numbers
    let minutes;
    let hours;

    debugger;
    hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;

    minutes = seconds / 60
    minutes = Math.floor(minutes)
    seconds = seconds % 60;

    return niceTime(hours, minutes, seconds);
}

function deltaTime(h1, m1, s1, h2, m2, s2) {
    let firstTime = toSeconds(h1, m1, s1);
    let secondTime = toSeconds(h2, m2, s2);
    let delta = firstTime - secondTime;
    if (delta < 0) {
        delta = -delta;
    }
    return toNiceTime(delta);
}

function deltaTimeVeryShort(h1, m1, s1, h2, m2, s2) {
    return toNiceTime(Math.abs(toSeconds(h1, m1, s1) - toSeconds(h2, m2, s2)));
}

const deltaTimeVeryShortArrow = (h1, m1, s1, h2, m2, s2) => toNiceTime(Math.abs(toSeconds(h1, m1, s1) - toSeconds(h2, m2, s2)));



