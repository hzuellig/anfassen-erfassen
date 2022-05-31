let test_data;

let select = "Anna";

var grid_unit = 50;

let col = 14
let row = 14
let cell_size = 0;

let counter = 0;

let patterns = new Array();

// This function loads resources that will be used later.
function preload() {
    let url_test = "/assets/json/tracking.json";
    loadJSON(url_test, loaded);

    //png1 = loadImage('/assets/img/patterns/4Zeichenfläche 1.png');


    patterns[0] = loadImage('/assets/img/patterns/patterns-01.png');
    patterns[1] = loadImage('/assets/img/patterns/patterns-02.png');
    patterns[2] = loadImage('/assets/img/patterns/patterns-03.png');
    patterns[3] = loadImage('/assets/img/patterns/patterns-04.png');
    patterns[4] = loadImage('/assets/img/patterns/patterns-05.png');
    patterns[5] = loadImage('/assets/img/patterns/patterns-06.png');
    patterns[6] = loadImage('/assets/img/patterns/patterns-07.png');
    patterns[7] = loadImage('/assets/img/patterns/patterns-08.png');
    patterns[8] = loadImage('/assets/img/patterns/patterns-09.png');
    patterns[9] = loadImage('/assets/img/patterns/patterns-10.png');
    patterns[10] = loadImage('/assets/img/patterns/patterns-11.png');
    patterns[11] = loadImage('/assets/img/patterns/patterns-12.png');
    patterns[12] = loadImage('/assets/img/patterns/patterns-13.png');
    patterns[13] = loadImage('/assets/img/patterns/patterns-14.png');
    patterns[14] = loadImage('/assets/img/patterns/patterns-15.png');
    patterns[15] = loadImage('/assets/img/patterns/patterns-16.png');
    patterns[16] = loadImage('/assets/img/patterns/patterns-17.png');
    patterns[17] = loadImage('/assets/img/patterns/patterns-18.png');
    patterns[18] = loadImage('/assets/img/patterns/patterns-19.png');
    patterns[19] = loadImage('/assets/img/patterns/patterns-20.png');
    patterns[20] = loadImage('/assets/img/patterns/patterns-21.png');
    patterns[21] = loadImage('/assets/img/patterns/patterns-22.png');
    patterns[22] = loadImage('/assets/img/patterns/patterns-23.png');
    patterns[23] = loadImage('/assets/img/patterns/patterns-24.png');
    patterns[24] = loadImage('/assets/img/patterns/patterns-25.png');
    patterns[25] = loadImage('/assets/img/patterns/patterns-26.png');
    patterns[26] = loadImage('/assets/img/patterns/patterns-27.png');
    patterns[27] = loadImage('/assets/img/patterns/patterns-28.png');
    patterns[28] = loadImage('/assets/img/patterns/patterns-29.png');
    patterns[29] = loadImage('/assets/img/patterns/patterns-30.png');
    patterns[30] = loadImage('/assets/img/patterns/patterns-31.png');
    patterns[31] = loadImage('/assets/img/patterns/patterns-32.png');
    patterns[32] = loadImage('/assets/img/patterns/patterns-33.png');
    patterns[33] = loadImage('/assets/img/patterns/patterns-34.png');
    patterns[34] = loadImage('/assets/img/patterns/patterns-35.png');
    patterns[35] = loadImage('/assets/img/patterns/patterns-36.png');
    patterns[36] = loadImage('/assets/img/patterns/patterns-37.png');
    patterns[37] = loadImage('/assets/img/patterns/patterns-38.png');
    patterns[38] = loadImage('/assets/img/patterns/patterns-39.png');
    patterns[39] = loadImage('/assets/img/patterns/patterns-40.png');
    patterns[40] = loadImage('/assets/img/patterns/patterns-41.png');
    patterns[41] = loadImage('/assets/img/patterns/patterns-42.png');
    patterns[42] = loadImage('/assets/img/patterns/patterns-43.png');
    patterns[43] = loadImage('/assets/img/patterns/patterns-44.png');
}





//Alles was nur einmal, beim ersten Laden der Seite ausgeführt werden soll
function setup() {
    //Canvas erstellen und einmitten abhängig von der window-Grösse; müsste noch automatischen Refresh bei canvasResized programmieren
    var coordinate_canvas = createCanvas(700, 700);
    coordinate_canvas.position(windowWidth / 2 - 350, windowHeight / 1.7 - 350);

    cell_size = width / col

    //save-button erstellen
    let save_button = createButton("Speichern");
    save_button.position(40, 990);
    save_button.mousePressed(saveSketch);

    angleMode(DEGREES);

    frameRate(10);
    //noLoop();

}

function loaded(data) {
    test_data = data;

    // let hand = get_hand(test_data[4])
    // console.log(hand)
}

function get_positions_face(face_data) {
    // console.log(face_data["face"])
    let result = []
    let face = face_data["face"]
    let values = face.split(", ")
        // console.log(values)
    for (let i = 0; i < values.length; i++) {
        let value = values[i]
        let x = parseInt(value.split("/")[0])
        let y = parseInt(value.split("/")[1])
        let obj = { x, y }
        result.push(obj)
    }
    return result
}

function get_hand(hand_data) {

    let hand = hand_data["hand"]
        /* if (typeof hand != String) {
             return hand
         }*/
    return hand.split(", ")
}

//Wird kontinuierlich ausgeführt
function draw() {

    //grid()
    //for (let i = 0; i < counter; i++) {
    if (test_data[counter].name == select) {
        show_gesture(counter)
    }

    //}

    if (counter < test_data.length) {
        counter++;
    } else {
        noLoop();
    }
    stroke(255, 0, 0);


}


//Koordinatensystem-Grid zur ersten Orientierung
function grid(value) {
    // background(50, 50, 50);

    //stroke(0, 0, 255);
    //noStroke();

    // console.log(face_positions)
    for (let x = 0; x <= col; x += 1) {
        for (let y = 0; y <= row; y += 1) {
            // fill('#060C3C');
            // fill('#000000');
            fill('#000220');

            square(x * cell_size, y * cell_size, cell_size)

        }
    }
}



function show_gesture(value) {
    let face_positions = get_positions_face(test_data[value])
    let hand = get_hand(test_data[value])
        //console.log(hand);
    for (let x = 0; x <= col; x += 1) {
        for (let y = 0; y <= row; y += 1) {
            // check the position of the face
            // aginst the grid
            for (let i = 0; i < face_positions.length; i++) {
                const element = face_positions[i];
                let pos_x = element.x
                let pos_y = element.y
                if (x == pos_x && y == pos_y) {
                    let bildnummer;
                    let bild;
                    let welcheHand;
                    for (let h = 0; h < hand.length; h++) {
                        console.log(hand[h]);
                        const hands = hand[h].split(",")
                        for (const el of hands) {
                            const parts = el.split("")
                            welcheHand = parts[0]
                            bildnummer = parts[1]

                            if (bildnummer == undefined) {
                                continue
                            }
                            bild = patterns[bildnummer - 1];



                            if (welcheHand == "R") {
                                push();
                                translate(x * cell_size + cell_size / 2, y * cell_size + cell_size / 2);
                                rotate(0);
                                image(bild, -cell_size / 2, -cell_size / 2, cell_size, cell_size);
                                pop();

                                // blendMode(OVERLAY);
                                tint(255, 250); //deckkraft

                                //filter(BLUR, 3);




                            } else {
                                push();
                                translate(x * cell_size + cell_size / 2, y * cell_size + cell_size / 2);
                                rotate(90);
                                image(bild, -cell_size / 2, -cell_size / 2, cell_size, cell_size);
                                pop();



                                tint(255, 250); //deckkraft
                            }
                        }

                        //console.log(bild);
                    }



                    // image(bild, x * cell_size + cell_size / 2, y * cell_size + cell_size / 2, cell_size, cell_size);

                    //fill(255, 100, 255, 70)
                    //square(x * cell_size, y * cell_size, cell_size)
                }
            }



        }
    }
}


//Funktion für save-button erstellen
function saveSketch() {
    save("Entwurf.png");
}