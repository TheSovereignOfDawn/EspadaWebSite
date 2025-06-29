function traductByTextContent (elementToTradList, traductionList) {
    for (let i = 0; i < elementToTradList.length; i++) {
        elementToTradList[i].textContent = traductionList[i]
    }
}

function traductByInnerHTML (elementToTradList, traductionList) {
    for (let i = 0; i < elementToTradList.length; i++) {
        elementToTradList[i].innerHTML = traductionList[i]
    }
}