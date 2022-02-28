const lv = new Vue({
    el: "#listTag",
    data: {
        factOne: "Llamas are livestock.Llamas are livestock and are not wild animals for purposes of hunting or wildlife laws. Llamas and their products are farm products and livestock for purposes of financial transactions and collateral.",
        factTwo: "Raising llamas is an agricultural pursuit. Raising llamas is agricultural production and an agricultural pursuit.",
        factThree: "Sales of llamas and meat products. Persons selling or buying llamas sold as livestock, sold for human consumption, or sold for slaughter must comply with chapters 17A, 28A, 31, 31A, and 31B.",
        factFour: "[Repealed, 1997 c 220 s 5]",
        factFive: "Disease inspection. Llamas are subject to chapter 35 and the rules of the Board of Animal Health in the same manner as livestock and domestic animals, including provisions relating to importation and transportation.",
        factSix: "All camelids imported into the state must be accompanied by a certificate of veterinary inspection (CVI).",
        factSeven: "The CVI shall: State that the animals described are not showing clinical signs of infectious, contagious, or communicable disease and that they meet movement requirements; State the number of animals in the shipment; and State the species, breed, age, and sex of each animal",
        factEight: "Llamas and alpacas are like other farm animals: They need plenty of fenced outdoor space, along with a barn area to hang out in when it’s cold or rainy.",
        factNine: "Llamas make excellent therapy animals for both the elderly and children with special needs. You can even get them certified through some therapy animal programs.",
        factTen: "LLamas follow no laws!",
        secret: "Shhhhh! It is a secret!",
        selected: 'A',
        options: [
            { text: 'No', value: 'A' },
            { text: 'Yes', value: 'B' },
          ]

        // options: [
        // vm.secret === 'yes',
        // vm.secret === 'no'
        // ]

    }
})