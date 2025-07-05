function traductToFrench() {
    let linkToTradList = document.querySelectorAll(".linkToTrad")
    let linkTraduction = ["Présentation", "L'Ôken", "Contacts", "Clique ici pour te procurer l'Ôken"]
    traductByTextContent(linkToTradList, linkTraduction)

    let h1ToTradList = document.querySelectorAll("h1")
    let h1Traduction = ["Présentation du concept", "L'Ôken", "Nous contacter"]
    traductByTextContent(h1ToTradList, h1Traduction)

    let h2ToTradList = document.querySelectorAll("h2")
    let h2Traduction = ["Espada Coaching", "Espada Team", "Le programme de Street-Lifting entièrement automatisé et gratuit"]
    traductByTextContent(h2ToTradList, h2Traduction)

    let pToTradList = document.querySelectorAll(".paragraphToTrad") // Can not get it via <p> because browser are creating random ones...
    let p1Trad = `L’Espada est une <strong>organisation sportive centrée autour des sports de force</strong>, ayant pour volonté 
                    long-termiste de s’étendre à d’autres disciplines pour devenir une équipe multi-sports. Elle est scindée en 2
                     sections :`
    let p2Trad = `Julien et Matthias, deux passionnés de sport, proposent un <strong>service de coaching distanciel</strong> dans leurs
                     disciplines de prédilection, à savoir le <strong>street-workout</strong>, le <strong>street-lifting</strong>, 
                     la <strong>force atlhétique</strong> (powerlifting) et la <strong>musculation</strong>. Ingénieurs de formation,
                      peuvent aussi vous accompagner dans votre <strong>alimentation</strong> et votre <strong>hygiène de vie</strong> 
                      afin d'atteindre votre plein potentiel. Ils sont notamment compétents pour construire des plans 
                      d'entraînement permettant de <strong>mixer plusieurs de ces disciplines</strong> pour les plus polyvalents 
                      d'entre vous.`
    let p3Trad = `<strong>L'équipe compétitive de l'Espada</strong>, ayant pour but de représenter l'organisation au plus haut niveau possible. Si 
                    le sport compétitif t'intéresse, et que tu te sens prêt à fournir les efforts nécessaires, tente ta chance pour
                    nous rejoindre!`
    let p4Trad = `L'Ôken est un programme interactif et entièrement automatisé en VBA, qui s'adapte à tous les profils,
                    du débutant à l'intermédiaire. Il prend en compte votre fréquence et durée d'entraînement, votre niveau actuel, vos
                    points faibles spécifiques et musculaires ainsi que votre sexe pour vous proposer un plan structuré et efficace.`
    let p5Trad = `<strong>Simple et rapide:</strong> En moins de 5 minutes, téléchargez l'Excel, activez les macros, choisissez votre
                    langue (FR/EN) et rensignez vos données personnelles. Votre programme personnalisé est généré instantanément!`
    let p6Trad = `<strong>6 semaines de progression:</strong>`
    let p7Trad = `L'Ôken est <strong>100% gratuit</strong> afin d'aider chaque atlhète à atteindre son meilleur niveau en Street-Lifting
                    et permettre au sport de se démocratiser davantage.`
    let p8Trad = `<strong>Lancez-vous dès aujourd'hui et progressez efficacement!</strong>`
    let p9Trad = `Pour plus d'informations, prendre un coaching en ligne ou pour en découvrir un peu plus sur notre univers, vous
                    pouvez nous contacter via <strong>e-mail</strong> ou sur notre compte <strong>Instagram</strong>. À bientôt!<br><br>`
    let pTraduction = [p1Trad, p2Trad, p3Trad, p4Trad, p5Trad, p6Trad, p7Trad, p8Trad, p9Trad]
    traductByInnerHTML(pToTradList, pTraduction)

    let liToTradList = document.querySelectorAll("li")
    let liTraduction = ["1 semaine d'introduction", "4 semaines d'intensification", "1 semaine de test final sous format AMRAP"]
    traductByTextContent(liToTradList, liTraduction)

    let footerToTrad = document.querySelector("footer") 
    let footerTrad = `<em>Site web dévelopé par <a href="https://github.com/TheSovereignOfDawn" class="lienGitHub">TheSovereignOfDawn</a> / Dernière mise à jour: 29/01/2025</em>`
    footerToTrad.innerHTML = footerTrad
}