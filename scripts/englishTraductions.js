function traductToEnglish() {
    let linkToTradList = document.querySelectorAll(".linkToTrad")
    let linkTraduction = ["Presentation", "Ôken", "Contacts", "Click here to get the Ôken"]
    traductByTextContent(linkToTradList, linkTraduction)

    let h1ToTradList = document.querySelectorAll("h1")
    let h1Traduction = ["Presentation of the Concept", "Ôken", "Contact us"]
    traductByTextContent(h1ToTradList, h1Traduction)

    let h2ToTradList = document.querySelectorAll("h2")
    let h2Traduction = ["Espada Coaching", "Espada Team", "The fully automated and free Street-Lifting program"]
    traductByTextContent(h2ToTradList, h2Traduction)

    let pToTradList = document.querySelectorAll("p")
    let p1Trad = `Espada is a <strong>sports organization centered around strength sports</strong>, with a long-term ambition to expand into other disciplines and become a multi-sport team. It is divided into two sections :`
    let p2Trad = ``
    let p3Trad = ``
    let p4Trad = ``
    let p5Trad = ``
    let p6Trad = ``
    let p7Trad = ``
    let p8Trad = ``
    let p9Trad = ``
    let pTraduction = [p1Trad, p2Trad, p3Trad, p4Trad, p5Trad, p6Trad, p7Trad, p8Trad, p9Trad]
    traductByInnerHTML(pToTradList, pTraduction)

}