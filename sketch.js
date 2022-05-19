camera = document.getElementById("camera");
      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });
function attachCam() {
  Webcam.attach( camera );
}
function takeImage() {
  
 Webcam.snap(function(data_uri) {
document.getElementById("snappedImage").innerHTML = '<img id = "capturge" src = "' + data_uri + '"/>';
    }); 
}
console.log('ML5.JS VERSION : ' + ml5.version);
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CnXy8ct57/',modelLoaded);
  function modelLoaded() {
    console.log('MODEL LOADED!');
  }
function check() {
  img = document.getElementById("captured_image");
  classifier.classify(img, gotResult);
}
function gotResult(error, results) {

  if (results[0].label == "NormalBackground") {
    document.getElementById("message").innerHTML = "There is not any items found";
  }
  if (results[0].label == "Paper") {
   document.getElementById("message").innerHTML = "Well done! We found a paper in your background!<br>Here is a HRscript fact : HRscript is made with PHP and JS<br>Also dont forget that once you find this and you are HRscript developer, you can get a HRscript event T-shirt."; 
  }
   if (results[0].label == "Limited paper") {
   document.getElementById("message").innerHTML = "Very good! We found a paper that has only one of itself!<br> Here is a fact about HRscript : We actually started in the late 2020. We started by developing our plan. Luckily the lead developer of HRscript has programming classes so they were still able to make HRscript.<br>Also dont forget that once you find this and you are HRscript developer, you can get a HRscript event T-shirt."; 
  }
}
