import ReactDOM from "react-dom";
import BlankCircleIcon from "../../../mediumElements/leftElements/navigationWord/icons/BlankCircleIcon";
import NavigationWord from "../../../mediumElements/leftElements/navigationWord/NavigationWord";

export function updateProgressBar() {
    const KNOW_WORDS = window.document.querySelectorAll(".filled-circle");

    const currentProgress = getCurrentProgress(KNOW_WORDS);
    // currentProgressInNumber(KNOW_WORDS.length);

    document.getElementsByClassName("progBar").style.width = currentProgress + "%";
}

function getCurrentProgress(KNOW_WORDS) {
    const numOfKnownWords = KNOW_WORDS.length;
    const percentageValue = 100 / getValueOfLastItem;

    return numOfKnownWords * percentageValue;
}

function currentProgressInNumber(numOfKnownWords) {
    window.document.querySelector("" +
        "#complete").innerHTML =
        numOfKnownWords + " / " + getValueOfLastItem;
}

export function getValueOfLastItem() {
    return window.document.querySelectorAll(".navigation-word").length;
}