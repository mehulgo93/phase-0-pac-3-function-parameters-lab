function introductionWithLanguage(name, language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

introductionWithLanguage("Mehul", "Javascript");

function introductionWithLanguageOptional(name, language = "Javascript") {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
} 

introductionWithLanguageOptional("Mehul");
