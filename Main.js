object = [];
status = "";
video = "";


function draw() {
    image(video,0,0,480,380);
    if(status !="")
    {
        objectDetector.detect(video, gotResult);
        for (i = 0; i <objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects are :"+ objects.length;

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(object[i].label + "" + percent + "%",objects[i].x + 15, object[i].y + 15)
            noFill();
            storke("#FF0000");
            rect(object[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function gotResult(error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}