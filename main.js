prediction1 = 
prediction2 = 
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
}) 

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id ="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5version;', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LFDC5r4sh/model.json', modelLoaded);

function modelLoaded() {
    console.log("Model Loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "The fisrt prediction is" + prediction1;
    speak_data2 = "The secondd prediction is" + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);

}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_emotion_name"). innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        result1 = results[0].label
        result2 = results[1].label
        if(result1 == "Happy") {
            document.getElementById("updateemoji").innerHTML = "&#128522;";
        }
        if(result2 == "Happy") {
            document.getElementById("updateemoji2").innerHTML = "&#128522;"
        }
        if(result1 == "Angry") {
            document.getElementById("updateemoji").innerHTML = "&#128545;";
        }
        if(result2 == "Angry") {
            document.getElementById("updateemoji2").innerHTML = "&#128545;"
        }
        if(result1 == "Sad") {
            document.getElementById("updateemoji").innerHTML = "&#128546;";
        }
        if(result2 == "Sad") {
            document.getElementById("updateemoji2").innerHTML = "&#128546;"
        }
        
    }
}
