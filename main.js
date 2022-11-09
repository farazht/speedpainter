// go to "!!!" for end of presets
var cl = {
	white: "#F1F1F1",
	gray: "#BABABA",
	black: "#222222",
    pink: "#EF56FF",
    crimson: "#560C1B",
    red: "#E50000",
    orange: "#FFA600",
    yellow: "#FFE135",
    lime: "#73f57A",
    green: "#038253",
    cyan: "#4dE6f7",
    blue: "#1005E6",
    purple: "#9C099C",
    brown: "#7D4D31"
};
var presetLonelyTree = {
    template: 
    [cl.cyan, cl.cyan, cl.cyan, cl.cyan, cl.cyan, cl.cyan, cl.cyan, 
    cl.cyan, cl.cyan, cl.cyan, cl.cyan, cl.cyan, cl.green, cl.cyan, 
    cl.cyan, cl.cyan, cl.cyan, cl.cyan, cl.green, cl.green, cl.green, 
    cl.cyan, cl.cyan, cl.cyan, cl.cyan, cl.green, cl.green, cl.green,
    cl.cyan, cl.cyan, cl.cyan, cl.cyan, cl.cyan, cl.brown, cl.cyan,
    cl.cyan, cl.cyan, cl.cyan, cl.cyan, cl.lime, cl.lime, cl.lime,
    cl.lime, cl.lime, cl.lime, cl.lime, cl.lime, cl.lime, cl.lime],
    levelName: "A Lonely Tree",
    difficulty: "Hard",
    difficultyColor: cl.red,
    palette: {
        cyan: 31,
        green: 7,
        brown: 1,
        lime: 10,
    }
}
var presetAbode = {
    template: 
    [cl.cyan, cl.crimson, cl.cyan, cl.cyan, cl.cyan, cl.cyan, cl.cyan,
    cl.cyan, cl.brown, cl.red, cl.red, cl.red, cl.cyan, cl.cyan,
    cl.cyan, cl.red, cl.red, cl.red, cl.red, cl.red, cl.cyan,
    cl.red, cl.red, cl.orange, cl.orange, cl.orange, cl.red, cl.red,
    cl.cyan, cl.orange, cl.gray, cl.orange, cl.brown, cl.orange, cl.cyan,
    cl.cyan, cl.orange, cl.orange, cl.orange, cl.brown, cl.orange, cl.cyan,
    cl.green, cl.green, cl.green, cl.green, cl.green, cl.green, cl.green],
    levelName: "Abode",
    difficulty: "Insane",
    difficultyColor: cl.purple,
    palette: {
        cyan: 15,
        orange: 10,
        red: 12,
        green: 7,
        brown: 3,
        gray: 1,
        crimson: 1,
    }
} 
var presetHappy = {
    template: 
    [cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.yellow, cl.white, cl.yellow, cl.white, cl.white,
    cl.white, cl.white, cl.yellow, cl.white, cl.yellow, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.yellow, cl.white, cl.white, cl.white, cl.yellow, cl.white,
    cl.white, cl.white, cl.yellow, cl.yellow, cl.yellow, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white],
    levelName: "Happy",
    difficulty: "Easy",
    difficultyColor: cl.lime,
    palette: {
        yellow: 9,
        white: 40,
    }
}
var presetAsphalt = {
    template: 
    [cl.black, cl.white, cl.black, cl.black, cl.black, cl.white, cl.black,
    cl.black, cl.white, cl.black, cl.yellow, cl.black, cl.white, cl.black,
    cl.black, cl.white, cl.black, cl.yellow, cl.black, cl.white, cl.black,
    cl.black, cl.white, cl.black, cl.black, cl.black, cl.white, cl.black,
    cl.black, cl.white, cl.black, cl.yellow, cl.black, cl.white, cl.black,
    cl.black, cl.white, cl.black, cl.yellow, cl.black, cl.white, cl.black,
    cl.black, cl.white, cl.black, cl.black, cl.black, cl.white, cl.black],
    levelName: "Asphalt",
    difficulty: "Easy",
    difficultyColor: cl.lime,
    palette: {
        white: 14,
        yellow: 4,
        black: 31,
    }
}
var presetLuxury = {
    template: 
    [cl.black, cl.white, cl.red, cl.gray, cl.red, cl.white, cl.black,
    cl.black, cl.white, cl.gray, cl.red, cl.red, cl.white, cl.black,
    cl.black, cl.white, cl.red, cl.red, cl.crimson, cl.white, cl.black,
    cl.black, cl.white, cl.red, cl.crimson, cl.crimson, cl.white, cl.black,
    cl.black, cl.black, cl.white, cl.white, cl.white, cl.black, cl.black,
    cl.black, cl.black, cl.black, cl.white, cl.black, cl.black, cl.black,
    cl.black, cl.white, cl.white, cl.white, cl.white, cl.white, cl.black],
    levelName: "Luxury",
    difficulty: "Hard",
    difficultyColor: cl.red,
    palette: {
        black: 20,
        white: 17,
        red: 7,
        gray: 2,
        crimson: 3
    }
}
var presetSimpleMagic = {
    template: 
    [cl.white, cl.pink, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.pink, cl.purple, cl.pink, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.pink, cl.white, cl.white, cl.white, cl.pink, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.pink, cl.purple, cl.pink,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.pink, cl.white,
    cl.pink, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.purple, cl.pink, cl.white, cl.white, cl.white, cl.white, cl.white],
    levelName: "Simple Magic",
    difficulty: "Easy",
    difficultyColor: cl.lime,
    palette: {
        white: 36,
        pink: 10,
        purple: 3,
    }
}
var presetLove = {
    template: 
    [cl.pink, cl.red, cl.red, cl.pink, cl.red, cl.red, cl.pink,
    cl.red, cl.yellow, cl.orange, cl.red, cl.red, cl.red, cl.red,
    cl.red, cl.orange, cl.red, cl.red, cl.red, cl.red, cl.red,
    cl.red, cl.red, cl.red, cl.red, cl.red, cl.orange, cl.red,
    cl.pink, cl.red, cl.red, cl.red, cl.orange, cl.red, cl.pink,
    cl.pink, cl.pink, cl.red, cl.red, cl.red, cl.pink, cl.pink,
    cl.pink, cl.pink, cl.pink, cl.red, cl.pink, cl.pink, cl.pink],
    levelName: "Love",
    difficulty: "Hard",
    difficultyColor: cl.red,
    palette: {
        pink: 15,
        orange: 4, 
        yellow: 1,
        red: 30,
    }
}
var presetCheckmate = {
    template: 
    [cl.black, cl.white, cl.black, cl.white, cl.black, cl.white, cl.black,
    cl.white, cl.black, cl.white, cl.black, cl.white, cl.black, cl.white,
    cl.black, cl.white, cl.black, cl.white, cl.black, cl.white, cl.black,
    cl.white, cl.black, cl.white, cl.black, cl.white, cl.black, cl.white,
    cl.black, cl.white, cl.black, cl.white, cl.black, cl.white, cl.black,
    cl.white, cl.black, cl.white, cl.black, cl.white, cl.black, cl.white,
    cl.black, cl.white, cl.black, cl.white, cl.black, cl.white, cl.black],
    levelName: "Checkmate",
    difficulty: "Easy",
    difficultyColor: cl.lime,
    palette: {
        black: 25,
        white: 24,
    }
}
var presetMoney = {
    template: 
    [cl.white, cl.white, cl.white, cl.white, cl.lime, cl.lime, cl.gray,
    cl.gray, cl.lime, cl.lime, cl.yellow, cl.yellow, cl.lime, cl.lime,
    cl.lime, cl.lime, cl.yellow, cl.yellow, cl.lime, cl.lime, cl.lime,
    cl.lime, cl.lime, cl.lime, cl.yellow, cl.yellow, cl.lime, cl.gray,
    cl.gray, cl.lime, cl.yellow, cl.yellow, cl.green, cl.green, cl.green,
    cl.green, cl.green, cl.green, cl.green, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white],
    levelName: "Cash Money",
    difficulty: "Hard",
    difficultyColor: cl.red,
    palette: {
        white: 14,
        gray: 4,
        yellow: 8,
        lime: 16,
        green: 7,
    }
}
var presetCrown = {
    template: 
    [cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.yellow, cl.white, cl.yellow, cl.white, cl.yellow, cl.white, cl.yellow,
    cl.yellow, cl.yellow, cl.yellow, cl.red, cl.yellow, cl.yellow, cl.yellow,
    cl.orange, cl.orange, cl.orange, cl.orange, cl.orange, cl.orange, cl.orange,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white],
    levelName: "Crown",
    difficulty: "Easy",
    difficultyColor: cl.lime,
    palette: {
        white: 31,
        yellow: 10,
        orange: 7,
        red: 1,
    }
}
var presetUmbrella = {
    template: 
    [cl.white, cl.white, cl.white, cl.purple, cl.white, cl.white, cl.white,
    cl.white, cl.purple, cl.purple, cl.pink, cl.purple, cl.purple, cl.white,
    cl.purple, cl.pink, cl.pink, cl.black, cl.pink, cl.pink, cl.purple,
    cl.white, cl.white, cl.white, cl.black, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.black, cl.white, cl.white, cl.white,
    cl.white, cl.black, cl.white, cl.black, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.black, cl.black, cl.white, cl.white, cl.white],
    levelName: "Umbrella",
    difficulty: "Easy",
    difficultyColor: cl.lime,
    palette: {
        white: 30,
        purple: 7,
        pink: 5,
        black: 7,
    }
}
var presetGhost = {
    template: 
    [cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.gray, cl.gray, cl.gray, cl.white, cl.white,
    cl.white, cl.gray, cl.gray, cl.gray, cl.gray, cl.gray, cl.white,
    cl.white, cl.gray, cl.white, cl.gray, cl.white, cl.gray, cl.white,
    cl.white, cl.gray, cl.gray, cl.gray, cl.gray, cl.gray, cl.white,
    cl.white, cl.gray, cl.white, cl.gray, cl.white, cl.gray, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white],
    levelName: "Ghost",
    difficulty: "Easy",
    difficultyColor: cl.lime,
    palette: {
        white: 30,
        gray: 19,
    }
}
var presetColorsOfMusic = {
    template: 
    [cl.red, cl.red, cl.orange, cl.orange, cl.yellow, cl.black, cl.black,
    cl.red, cl.orange, cl.yellow, cl.black, cl.black, cl.lime, cl.black,
    cl.orange, cl.black, cl.black, cl.lime, cl.lime, cl.green, cl.black,
    cl.yellow, cl.black, cl.lime, cl.green, cl.cyan, cl.cyan, cl.black,
    cl.lime, cl.black, cl.green, cl.cyan, cl.blue, cl.black, cl.black,
    cl.black, cl.black, cl.cyan, cl.blue, cl.pink, cl.black, cl.black,
    cl.black, cl.black, cl.pink, cl.pink, cl.purple, cl.purple, cl.brown],
    levelName: "Colors of Music",
    difficulty: "Insane",
    difficultyColor: cl.purple,
    palette: {
        black: 19,
        red: 3,
        orange: 4,
        yellow: 3,
        lime: 4,
        green: 3,
        cyan: 4,
        blue: 2,
        pink: 3,
        purple: 2,
        brown: 1,
    }
}
var presetFirstAid = {
    template: 
    [cl.black, cl.black, cl.red, cl.red, cl.red, cl.black, cl.black,
    cl.black, cl.red, cl.black, cl.black, cl.black, cl.red, cl.black,
    cl.red, cl.red, cl.red, cl.red, cl.red, cl.red, cl.red,
    cl.red, cl.red, cl.red, cl.white, cl.red, cl.red, cl.red,
    cl.red, cl.red, cl.white, cl.white, cl.white, cl.red, cl.red,
    cl.red, cl.red, cl.red, cl.white, cl.red, cl.red, cl.red,
    cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson],
    levelName: "First Aid",
    difficulty: "Medium",
    difficultyColor: cl.yellow,
    palette: {
        white: 5,
        crimson: 7,
        black: 9,
        red: 28,
    }
}
var presetRobot = {
    template: 
    [cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.cyan, cl.cyan, cl.cyan, cl.cyan, cl.cyan, cl.white,
    cl.red, cl.cyan, cl.black, cl.cyan, cl.black, cl.cyan, cl.red,
    cl.red, cl.cyan, cl.cyan, cl.cyan, cl.cyan, cl.cyan, cl.red,
    cl.red, cl.cyan, cl.black, cl.black, cl.black, cl.cyan, cl.red,
    cl.white, cl.cyan, cl.cyan, cl.cyan, cl.cyan, cl.cyan, cl.white,
    cl.white, cl.white, cl.gray, cl.gray, cl.gray, cl.white, cl.white],
    levelName: "Robot",
    difficulty: "Easy",
    difficultyColor: cl.lime,
    palette: {
        cyan: 20,
        red: 6,
        black: 5,
        gray: 3,
        white: 15,
    }
}
//
var presetPi = {
    template: 
    [cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.black, cl.black, cl.black, cl.black, cl.black, cl.black,
    cl.black, cl.white, cl.black, cl.white, cl.black, cl.white, cl.white,
    cl.white, cl.white, cl.black, cl.white, cl.black, cl.white, cl.white,
    cl.white, cl.white, cl.black, cl.white, cl.black, cl.white, cl.white,
    cl.white, cl.white, cl.black, cl.white, cl.white, cl.black, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white],
    levelName: "Pi",
    difficulty: "Easy",
    difficultyColor: cl.lime,
    palette: {
        white: 34,
        black: 15,
    }
}
var presetMagmaCube = {
    template: 
    [cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson, 
    cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson, 
    cl.crimson, cl.red, cl.red, cl.crimson, cl.red, cl.red, cl.crimson, 
    cl.crimson, cl.red, cl.yellow, cl.crimson, cl.yellow, cl.red, cl.crimson, 
    cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson, 
    cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson, 
    cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson, cl.crimson],
    levelName: "Magma Cube",
    difficulty: "Easy",
    difficultyColor: cl.lime,
    palette: {
        crimson: 41,
        red: 6,
        yellow: 2,
    }
}
var presetEqualizer = {
    template: ['#EF56FF', '#4dE6f7', '#EF56FF', '#4dE6f7', '#EF56FF', '#4dE6f7', '#EF56FF', '#EF56FF', '#F1F1F1', '#EF56FF', '#4dE6f7', '#F1F1F1', '#4dE6f7', '#EF56FF', '#EF56FF', '#F1F1F1', '#F1F1F1', '#4dE6f7', '#F1F1F1', '#F1F1F1', '#EF56FF', '#EF56FF', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#4dE6f7', '#F1F1F1', '#F1F1F1', '#EF56FF', '#F1F1F1', '#F1F1F1', '#EF56FF', '#4dE6f7', '#F1F1F1', '#4dE6f7', '#EF56FF', '#F1F1F1', '#4dE6f7', '#EF56FF', '#4dE6f7', '#EF56FF', '#4dE6f7', '#EF56FF', '#4dE6f7'],
    levelName: "Equalizer",
    difficulty: "Insane",
    difficultyColor: cl.purple,
    palette: {
        pink: 16,
        cyan: 13,
        white: 20,
    }
}
var presetTheWorld = {
    template: ['#222222', '#222222', '#1005E6', '#1005E6', '#1005E6', '#222222', '#222222', '#222222', '#73f57A', '#1005E6', '#1005E6', '#73f57A', '#1005E6', '#222222', '#1005E6', '#73f57A', '#73f57A', '#73f57A', '#1005E6', '#1005E6', '#1005E6', '#1005E6', '#FFE135', '#73f57A', '#038253', '#1005E6', '#1005E6', '#1005E6', '#1005E6', '#1005E6', '#1005E6', '#038253', '#1005E6', '#1005E6', '#1005E6', '#222222', '#1005E6', '#1005E6', '#1005E6', '#73f57A', '#038253', '#222222', '#222222', '#222222', '#1005E6', '#1005E6', '#FFE135', '#222222', '#222222'],
    levelName: "The World",
    difficulty: "Insane",
    difficultyColor: cl.purple,
    palette: {
        black: 12,
        blue: 25,
        yellow: 2,
        lime: 7,
        green: 3,
    }
}
var presetTarget = {
    template: ['#E50000', '#E50000', '#E50000', '#E50000', '#E50000', '#E50000', '#E50000', '#E50000', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#E50000', '#E50000', '#F1F1F1', '#E50000', '#E50000', '#E50000', '#F1F1F1', '#E50000', '#E50000', '#F1F1F1', '#E50000', '#F1F1F1', '#E50000', '#F1F1F1', '#E50000', '#E50000', '#F1F1F1', '#E50000', '#E50000', '#E50000', '#F1F1F1', '#E50000', '#E50000', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#E50000', '#E50000', '#E50000', '#E50000', '#E50000', '#E50000', '#E50000', '#E50000'],
    levelName: "Target",
    difficulty: "Easy",
    difficultyColor: cl.lime,
    palette: {
        white: 17,
        red: 32,
    }
}
var presetLucky = {
    template: ['#F1F1F1', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#038253', '#038253', '#F1F1F1', '#038253', '#038253', '#F1F1F1', '#F1F1F1', '#038253', '#038253', '#038253', '#038253', '#038253', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#038253', '#038253', '#038253', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#038253', '#038253', '#038253', '#038253', '#038253', '#F1F1F1', '#F1F1F1', '#038253', '#038253', '#73f57A', '#038253', '#038253', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#73f57A', '#F1F1F1', '#F1F1F1', '#F1F1F1'],
    levelName: "Lucky",
    difficulty: "Medium",
    difficultyColor: cl.yellow,
    palette: {
        green: 21,
        lime: 2,
        white: 26,
    }
}
var presetDucky = {
    template: ['#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#FFE135', '#FFE135', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#FFE135', '#FFA600', '#FFA600', '#4dE6f7', '#4dE6f7', '#FFE135', '#FFE135', '#FFE135', '#FFE135', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#FFE135', '#FFE135', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7', '#4dE6f7'],
    levelName: "Ducky",
    difficulty: "Medium",
    difficultyColor: cl.yellow,
    palette: {
        yellow: 9,
        orange: 2,
        cyan: 38,
    }
}

var presetBlank = {
    template: 
    [cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white],
    levelName: "Blank",
    difficulty: "Easy",
    difficultyColor: cl.lime,
    palette: {
        white: 49,
    }
}
let current = [cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
    cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white]


// END OF PRESETS !!!

// Timer functionality
let timerPaused = true
let [milliseconds,seconds,minutes] = [0,0,0]
function timer(){
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds += 1;
        if(seconds == 60){
            seconds = 0;
            minutes += 1;
        }
    }

 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 document.getElementById("timer").innerHTML = `${m}:${s}:${ms}`;
}

let presets = [presetAbode,presetAsphalt,presetCheckmate,presetCrown,presetHappy,presetLonelyTree,presetLove,presetLuxury,presetMoney,presetSimpleMagic,presetUmbrella,presetRobot,presetFirstAid,presetGhost,presetColorsOfMusic,presetPi,presetMagmaCube]
let expected = presetBlank.template
function choosePreset() {
    // Chooses a random preset from the array of presets above
    var rand = Math.random();
    rand *= 17 // number of presets
    rand = Math.floor(rand);
    temp = presets[rand];

    // Updates expected, shows levelName and difficulty
    expected = temp.template;
    levelName = temp.levelName 
    document.getElementById("levelName").innerHTML = temp.levelName;
    document.getElementById("difficulty").innerHTML = temp.difficulty;
    document.getElementById("difficulty").style.color = temp.difficultyColor;

    // Updates palette
    if (temp.palette.white) {
        document.getElementById("s1").innerHTML = temp.palette.white
    } else {
        document.getElementById("s1").innerHTML = ""
    }
    if (temp.palette.gray) {
        document.getElementById("s2").innerHTML = temp.palette.gray
    } else {
        document.getElementById("s2").innerHTML = ""
    }
    if (temp.palette.black) {
        document.getElementById("s3").innerHTML = temp.palette.black
    } else {
        document.getElementById("s3").innerHTML = ""
    }
    if (temp.palette.crimson) {
        document.getElementById("s4").innerHTML = temp.palette.crimson
    } else {
        document.getElementById("s4").innerHTML = ""
    }
    if (temp.palette.red) {
        document.getElementById("s5").innerHTML = temp.palette.red
    } else {
        document.getElementById("s5").innerHTML = ""
    }
    if (temp.palette.orange) {
        document.getElementById("s6").innerHTML = temp.palette.orange
    } else {
        document.getElementById("s6").innerHTML = ""
    }
    if (temp.palette.yellow) {
        document.getElementById("s7").innerHTML = temp.palette.yellow
    } else {
        document.getElementById("s7").innerHTML = ""
    }
    if (temp.palette.lime) {
        document.getElementById("s8").innerHTML = temp.palette.lime
    } else {
        document.getElementById("s8").innerHTML = ""
    }
    if (temp.palette.green) {
        document.getElementById("s9").innerHTML = temp.palette.green
    } else {
        document.getElementById("s9").innerHTML = ""
    }
    if (temp.palette.cyan) {
        document.getElementById("s10").innerHTML = temp.palette.cyan
    } else {
        document.getElementById("s10").innerHTML = ""
    }
    if (temp.palette.blue) {
        document.getElementById("s11").innerHTML = temp.palette.blue
    } else {
        document.getElementById("s11").innerHTML = ""
    }
    if (temp.palette.pink) {
        document.getElementById("s12").innerHTML = temp.palette.pink
    } else {
        document.getElementById("s12").innerHTML = ""
    }
    if (temp.palette.purple) {
        document.getElementById("s13").innerHTML = temp.palette.purple
    } else {
        document.getElementById("s13").innerHTML = ""
    }
    if (temp.palette.brown) {
        document.getElementById("s14").innerHTML = temp.palette.brown
    } else {
        document.getElementById("s14").innerHTML = ""
    }
}

// Changes selected color when one of the color selectors (circles near bottom) is clicked
let selectedColor = cl.white
function selector(color) {
    selectedColor = color;
}
// Changes backgroundColor of given button to selected color, changes color in current at given button's index, updates accuracy
function changeColor(bn) {
    document.getElementById(bn).style.backgroundColor=selectedColor;

    let index = parseInt(bn.substring(1))
    current[index-1] = selectedColor

    updateAcc()
}

// Calculates accuracy
// The amount of non-white colors at the correct location,
// divided by the amount of expected white tiles that are also white in reality.
// So, lets say the drawing has 20 colored pixels out of 49 possible, that means there are
// 29 white squares. If you placed 16 colored pixels in the correct position, and also 3 
// more on tiles that should have been white, accuracy = 16 / (49 - (29 - 3)) = 0.69
let accuracy = 0
let counter = 0
function updateAcc() {
    counter = 0
    whiteCounter = 0
    for (i = 0; i < 49; i++) {
        if (expected[i] == current[i] && expected[i] != cl.white) {
            counter += 1 
        } else if (expected[i] != current[i]) {
            counter = counter
        } else if (expected[i] == cl.white) {
            whiteCounter += 1
        }
    }
    accuracy = Math.round((counter/(49-whiteCounter))*100)
}


// submit drawing (this is the checkmark, not firebase)
let finalTime = 0
let alreadySubmitted = false
function submit() {
    // if already submitted, the rest doesnt run
    if (alreadySubmitted == true) {return}
    clearInterval(start)
    updateAcc()

    document.getElementById("rightSide").style.color = "white";

    timerPaused = true;

    //stops timer
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    finalTime = `${m}:${s}:${ms}` 

    //displays final acc and time
    document.getElementById("accuracy").innerHTML = accuracy
    document.getElementById("finalTime").innerHTML = finalTime
    alreadySubmitted = true
}

// changes color of all cells to white
function allToWhite() {
    for (i = 1; i < 50; i++) {
        cell = "b" + i
        document.getElementById(cell).style.backgroundColor=cl.white;
    }
} 
// changes value of all cells to white
function allToWhite2() {
    current = [cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
        cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
        cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
        cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
        cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
        cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,
        cl.white, cl.white, cl.white, cl.white, cl.white, cl.white, cl.white,];
}

// Reset button
let inCountdown = false;
function start() {
    alreadySubmitted = false

    document.getElementById("rightSide").style.color = "#0d1529";
    // RESETS TIMER
    timerPaused = true
    milliseconds = 0
    seconds = 0
    minutes = 0
    document.getElementById("finalTime").innerHTML = ""

    // SETS EVERYTHING TO WHITE
    allToWhite()
    allToWhite2()
    selectedColor = cl.white

    // SETS ACC TO 0 AND CHOOSES NEW PRESET
    updateAcc()
    document.getElementById("accuracy").innerHTML = "0"
    choosePreset()

    // PREVIEW SEQUENCE
    for (i = 1; i < 50; i++) {
        cell = "b" + i
        document.getElementById(cell).style.backgroundColor=expected[i-1];
    }

    // COUNTDOWN
    setTimeout(function(){
        inCountdown = true
        document.getElementById("timer").innerHTML = "10"
        t1 = setTimeout(function() {document.getElementById("timer").innerHTML = "9"}, 1000);
        t2 = setTimeout(function() {document.getElementById("timer").innerHTML = "8"}, 2000);
        t3 = setTimeout(function() {document.getElementById("timer").innerHTML = "7"}, 3000);
        t4 = setTimeout(function() {document.getElementById("timer").innerHTML = "6"}, 4000);
        t5 = setTimeout(function() {document.getElementById("timer").innerHTML = "5"}, 5000);
        t6 = setTimeout(function() {document.getElementById("timer").innerHTML = "4"}, 6000);
        t7 = setTimeout(function() {document.getElementById("timer").innerHTML = "3"}, 7000);
        t8 = setTimeout(function() {document.getElementById("timer").innerHTML = "2"}, 8000);
        t9 = setTimeout(function() {document.getElementById("timer").innerHTML = "1"}, 9000);
    
        t10 = setTimeout(allToWhite, 10000)
        t11 = setTimeout(allToWhite2, 10000)
        t12 = setTimeout(function() {
            milliseconds = 0
            seconds = 0
            minutes = 0
            timerPaused = false
        }, 10000);
        t13 = setTimeout(function() {
            inCountdown = false;
        }, 10000)
    }, 10); 

    // RESETS OLD COUNTDOWN IF ITS RUNNING
    if (inCountdown == true) {
        clearTimeout(t1);clearTimeout(t2);clearTimeout(t3);clearTimeout(t4);clearTimeout(t5);clearTimeout(t6);clearTimeout(t7);clearTimeout(t8);clearTimeout(t9);clearTimeout(t10);clearTimeout(t11);clearTimeout(t12);clearTimeout(t13);
    }
}

// increment timer
setInterval(function() {
    if (timerPaused == false) {
        timer()
    } 
}, 10)





