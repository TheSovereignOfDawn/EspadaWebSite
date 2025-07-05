let translationFlag = document.getElementById("translationFlag")
translationFlag.addEventListener("click", () => {
    let source = translationFlag.src
    console.log(source)
    if (source.endsWith("img/ukFlag.png")) {
        source = "img/franceFlag.png"
        traductToEnglish()
    }
    else {
        source = "img/ukFlag.png"
        traductToFrench() 
    }
    translationFlag.src = source
})