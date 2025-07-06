let translationFlag = document.getElementById("translationFlag")
let source = translationFlag.src
translationFlag.addEventListener("click", () => {
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