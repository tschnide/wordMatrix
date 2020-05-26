
const lessons = [
    {
        id: 0,
        name: "Pig",
        vocabulary: [
            "fig",
            "big",
            "wig",
            "pig",
            "jig",
            "dig",
            "tip",
            "zip",
            "pip",
            "dip",
            "sip",
            "quip",
            "kid",
            "lid",
            "bid",
            "hid",
            "rid",
            "quid",
            "it",
            "wit",
            "pit",
            "sit",
            "fit",
            "quit",
            "quill",
            "will",
            "fill",
            "hill",
            "sill",
            "bill"
        ]
    },
    {
        id: 1,
        name:"Tub",
        vocabulary:[
            "sun",
            "fun",
            "bun",
            "run",
            "gun",
            "nun",
            "rub",
            "tub",
            "cub",
            "hub",
            "dub",
            "nub",
            "hum",
            "gum",
            "bum",
            "rum",
            "sum",
            "mum",
            "huff",
            "cuff",
            "buff",
            "muff",
            "puff",
            "huff",
            "duck",
            "yuck",
            "buck",
            "luck",
            "puck",
            "muck"
        ]
    }
];

export function getword(lessonId, wordIndex) {
    return lessons[lessonId].vocabulary[wordIndex];
}

export function getLessonName(lessonId){
    return lessons[lessonId].name;
}
