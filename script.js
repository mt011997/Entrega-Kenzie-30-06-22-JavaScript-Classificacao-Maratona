function positions(array){

    if(array.indexOf(" Daniel ") == 0){

        alert (`A classificação ficou: ${array}. E o campeão foi: ${array[0]}!!!`)
        console.log(`A classificação ficou: ${array}. E o campeão foi: ${array[0]}!!!`)

    } else if(array.indexOf(" Daniel ") == 1){

        let pontoExtra = array[0]
        array[0] = array[1];
        array[1] = pontoExtra

        alert (`A classificação ficou: ${array}. E o campeão foi: ${array[0]}!!!`)
        console.log(`A classificação ficou: ${array}. E o campeão foi: ${array[0]}!!!`)

    }else if(array.indexOf(" Daniel ") == 2){

        let pontoExtra2 = array[1]
        array[1] = array[2]
        array[2] = pontoExtra2

        alert (`A classificação ficou: ${array}. E o campeão foi: ${array[0]}!!!`)
        console.log(`A classificação ficou: ${array}. E o campeão foi: ${array[0]}!!!`)

    }

}

let array = [" Rafael ", " Manoel ", " Daniel "]
positions(array)
