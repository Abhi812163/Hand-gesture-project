Webcam.set({
    width:360,
    height:300,
    image_format: 'png',
    png_quality:90,
});

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src="+data_uri+" id='result_2'>";
    });
}

console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Qu4UxEE7u/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model is loaded");
}