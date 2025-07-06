function traductToEnglish() {
    let linkToTradList = document.querySelectorAll(".linkToTrad")
    let linkTraduction = ["Presentation", "The Ôken", "Contacts", "Click here to get the Ôken"]
    traductByTextContent(linkToTradList, linkTraduction)

    let h1ToTradList = document.querySelectorAll("h1")
    let h1Traduction = ["Presentation of the Concept", "The Ôken", "Contact us"]
    traductByTextContent(h1ToTradList, h1Traduction)

    let h2ToTradList = document.querySelectorAll("h2")
    let h2Traduction = ["Espada Coaching", "Espada Team", "The fully automated and free Street-Lifting program"]
    traductByTextContent(h2ToTradList, h2Traduction)

    let pToTradList = document.querySelectorAll(".paragraphToTrad") // Can not get it via <p> because browser are creating random ones...
    let p1Trad = `Espada is a <strong>sports organization centered around strength sports</strong>, with a long-term ambition to expand into other disciplines and become a multi-sport team. It is divided into two sections :`
    let p2Trad = `Julien and Matthias, two sports enthusiasts, offer a <strong>remote coaching service</strong> in their areas of expertise: <strong>street workout</strong>, <strong>street lifting</strong>, <strong>powerlifting</strong>, and <strong>strength training</strong>. With an engineering background, they can also guide you in your <strong>nutrition</strong> and <strong>lifestyle habits</strong> to help you reach your full potential. They are especially skilled in creating training programs that <strong>combine multiple disciplines</strong> for those of you who are looking for versatility.`
    let p3Trad = `<strong>The Espada competitive team</strong> aims to represent the organization at the highest level possible. If you're interested in competitive sports and ready to put in the necessary effort, give it a shot and try to join us!`
    let p4Trad = `The Ôken is an interactive, fully automated VBA-based program designed to adapt to all profiles, from beginners to intermediate athletes. It takes into account your training frequency and duration, current level, specific muscular weaknesses, and gender to provide you with a structured and effective training plan.`
    let p5Trad = `<strong>Simple and fast:</strong> In less than 5 minutes, download the Excel file, enable macros, choose your language (FR/EN), and enter your personal information. Your personalized program is generated instantly!`
    let p6Trad = `<strong>6 weeks of progression:</strong>`
    let p7Trad = `The Ôken is <strong>100% free</strong> to help every athlete reach their highest level in Street Lifting and to make the sport even more accessible and widespread.`
    let p8Trad = `<strong>Get started today and make real progress!</strong>`
    let p9Trad = `For more information, to sign up for online coaching, or to learn more about our world, feel free to contact us via <strong>email</strong> or through our <strong>Instagram</strong> account. See you soon!<br><br>`
    let pTraduction = [p1Trad, p2Trad, p3Trad, p4Trad, p5Trad, p6Trad, p7Trad, p8Trad, p9Trad]
    traductByInnerHTML(pToTradList, pTraduction)

    let liToTradList = document.querySelectorAll("li")
    let liTraduction = ["1 introduction week", "4 intensification weeks", "1 week of final testing in AMRAP format"]
    traductByTextContent(liToTradList, liTraduction)

    let footerToTrad = document.querySelector("footer") 
    let footerTrad = `<em>Website developed by <a href="https://github.com/TheSovereignOfDawn" class="lienGitHub">TheSovereignOfDawn</a> / Last updated: 06/07/2025</em>`
    footerToTrad.innerHTML = footerTrad
}