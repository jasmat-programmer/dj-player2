music1 = "";
music2 = "";
leftWrist_x = 0;
leftWrist_y = 0;
rightWrist_x = 0;
rightWrist_y = 0;
scoreLeftWrist = 0;
 music_2 = "";
scoreRightWrist = 0;
music_1 = "";
 function preload(){
    music1 = loadSound("believer.mp3");
    music2 = loadSound("bones.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw(){
image(video, 0, 0, 600, 500);
 
music_2 = music2.isPlaying()
console.log(music_2)
fill(red);
stroke(red);
if (scoreLeftWrist > 0.2){
circle(leftWrist_x,leftWrist_y,15);
music1.stop()
if(music_2 == false){
music2.play()
document.getElementById("name").innerHTML = "song name - bones by imagine dragons"
}
}
if(scoreRightWrist > 0.2){
    circle(rightWrist_x,rightWrist_y,15)
    music2.stop()
    if(music_1 == false){
music1.play()
document.getElementById("name").innerHTML = "song name - beleiver by imagine dragons"
    }
}
}
function modelLoaded(){
    console.log("modelLoaded")
}
function gotPoses(results){
    if (results.lenght > 0){
        console.log(results)

        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreLeftWrist)

        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log(scoreRightWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}