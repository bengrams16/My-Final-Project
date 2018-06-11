document.getElementById('gram').style.display="none"
document.getElementById('fb').style.display="none"
document.getElementById('Tweet').style.display="none"
document.getElementById('cvu').style.display="none"
document.getElementById('b4').style.display="none"
document.getElementById('b5').style.display="none"
document.getElementById('b6').style.display="none"
document.getElementById('b7').style.display="none"
var db = firebase.database();


var listSite =[document.getElementById('b8'),document.getElementById('b9'),document.getElementById('b10'),document.getElementById('b11')];




// creating account
document.getElementById('b1').addEventListener('click', function(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('pass').value;
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  console.log(error.message)});
document.getElementById('userState').style.display="none"
document.getElementById('p1').style.display="none"
document.getElementById('d1').style.display="none"
document.getElementById('gram').style.display="block"
document.getElementById('listSite').style.display="block"
document.getElementById('b4').style.display="none"
});


 // logging in
document.getElementById('b2').addEventListener('click', function(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('pass').value;

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    console.log(error.message);
  });
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById('userState').style.display="none"
      document.getElementById('p1').style.display="none"
      document.getElementById('d1').style.display="none"
      document.getElementById('gram').style.display="block"
document.getElementById('b4').style.display="block"


}
});
});


// logging out
document.getElementById('b3').addEventListener('click',function(){

  firebase.auth().signOut().then(function() {
  console.log('Signed Out');
  }, function(error) {
  console.error('Sign Out Error', error);
  });
  document.getElementById('userState').style.display="block"
  document.getElementById('p1').style.display="block"
  document.getElementById('d1').style.display="block"
  document.getElementById('gram').style.display="none"
  document.getElementById('fb').style.display="none"
  document.getElementById('Tweet').style.display="none"
  document.getElementById('cvu').style.display="none"

});





firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user.email);
    document.getElementById('userState').innerHTML=("<p>Signed in as: " +user.email +"</p>");
  } else {
    console.log('No user logged in');
    document.getElementById('userState').innerHTML=("<p>Not signed in</p>");
  }
});




// brings you to each page when you click the buttons.

listSite[0].addEventListener('click',function(){

    document.getElementById('gram').style.display="block"
    document.getElementById('b4').style.display="block"
});

listSite[2].addEventListener("click",function(){

document.getElementById("fb").style.display="block"
document.getElementById('b5').style.display="block"

});
listSite[1].addEventListener('click',function(){

  document.getElementById('Tweet').style.display="block"
document.getElementById('b6').style.display="block"
});

listSite[3].addEventListener('click',function(){
  document.getElementById('cvu').style.display="block"
document.getElementById('b7').style.display="block"
});


// making it so when each confirm data button is clicked, the data will save to Firebase.

document.getElementById("b4").addEventListener('click',function(){


var inu =  document.getElementById('instaName').value


var user = firebase.auth().currentUser;

console.log(user)

 db.ref('users/' + user.uid + '/Instagram/Username').set("inu");

  var inp = document.getElementById('instaPass').value

  db.ref('users/' + user.uid + '/Instagram/Password').set("inp");

});

document.getElementById("b5").addEventListener('click',function(){

var user = firebase.auth().currentUser;

  var twu=document.getElementById('twName').value
   db.ref('users/' + user.uid + '/Twitter/Username').set("twu");

   var twp= document.getElementById('twPass').value
   db.ref('users/' + user.uid + '/Twitter/Password').set("twp");

});

document.getElementById("b6").addEventListener('click',function(){

var user = firebase.auth().currentUser;

  var fbu= document.getElementById('fbName').value
   db.ref('users/' + user.uid + '/Facebook/Username').set("fbu");

  var fbp= document.getElementById('fbPass').value
   db.ref('users/' + user.uid + '/Facebook/Password').set("fbp");

});

document.getElementById("b7").addEventListener('click',function(){

var user = firebase.auth().currentUser;

  var cvuu= document.getElementById('cvuName').value
   db.ref('users/' + user.uid + '/CVU Login/Username').set("cvuu");

   var cvup=document.getElementById('cvuPass').value
   db.ref('users/' + user.uid + '/CVU Login/Password').set(cvup);

});
