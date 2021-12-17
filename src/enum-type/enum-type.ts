enum Colors {
    RED = 10,
    BLUE = 100,
    YELLOW = 200,
}

enum Colors {
    PURPLE = "PURPLE",
    GREEN = 201,
    PINK,
}

function chooseColor(color: Colors) {
    console.log(Colors[color]);
}

chooseColor(Colors.PURPLE);
