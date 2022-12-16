const textArea = document.querySelector("#vowelstextarea");
const button = document.querySelector("button");
const message = document.querySelector(".messagearea");

button.addEventListener("click", ()=>{
 textArea.innerHTML = result(textArea.value);
})

const result = (sentence) => {
    const convertLowerCase = sentence.toLowerCase();
    let list = [];
    let vowels = ["a", "e", "i", "o", "u"]
    let newSentence = convertLowerCase.split("")
    console.log(newSentence)
    for (let i of newSentence) {
        for (j of vowels) { 
            if (i == j) { 
            list.push(i)
            let m = list.length;
                console.log(m);
                console.log(list)
            message.innerHTML = `the number of vowels in the text is : ${m} <br> and vowel list : ${list}`   ;
        }
        }
    }
}

