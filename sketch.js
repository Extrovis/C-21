var r1, r2, r3, r4;

var edges;

function setup() {
    createCanvas(600, 600);

    edges = createEdgeSprites();

    r1 = createSprite(100, height / 2, 80, 60);
    r2 = createSprite(200, height / 2, 70, 50);
    //r3 = createSprite(300, height / 2, 80, 60);
    //r4 = createSprite(400, height / 2, 70, 50);

    r1.shapeColor = "green";
    r2.shapeColor = "purple";
    //r3.shapeColor = "yellow";
    //r4.shapeColor = "blue";

    r2.velocityX = -5;
}

function draw() {
    background("black");

    r1.x = mouseX;
    r1.y = mouseY;

    /*if (isTouching(r1, r2)) {
        r1.shapeColor = "red";
        r2.shapeColor = "red";

        fill("Yellow");
        textAlign(CENTER);
        textSize(20);
        text("r1 is touching r2", width / 2, height - 500);
        noFill();
    } else {
        r1.shapeColor = "green";
        r2.shapeColor = "purple";
    }*/

    r2.bounceOff(edges);

    bounceOff(r2, r1);

    drawSprites();
}