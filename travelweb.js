//Functions for the header section
//Cookies for login
function openLoginForm(){
    closeSignupForm();
    document.getElementById("loginForm").style.display = "block";
}

function closeLoginForm(){
    document.getElementById("loginForm").style.display = "none";
}

function login(){
    var elements = document.getElementById("loginForm");
    var username = elements[0].value;
    var password = elements[1].value;
    var cookie_username = getCookie("username");
    var cookie_password = getCookie("password");
    if (cookie_username == username && cookie_password == password) {
        document.getElementById("notLogged").style.display = "none";
        document.getElementById("notLogged2").style.display = "none";
        document.getElementById("profileimageimg").style.display="block";
        document.getElementById("requireLoginSection").style.display = "block";
        document.getElementById("usernamespace").style.color="indianred";
        document.getElementById("profileimageimg").src = getCookie("photito")
        document.getElementById("usernamespace").innerHTML = getCookie("username");
        closeLoginForm()
        console.log("hola")
    }else{
        alert("Wrong username or pass");
    }
}

function getCookie(nameCookie){
    var nameCookieComp= nameCookie + "=";
    var ca = document.cookie.split(';');
    for (var i=0; i<ca.length; i++){
        var cook = ca[i];
        while (cook.charAt(0) == ' '){
            cook = cook.substring(1);
        }
        if (cook.indexOf(nameCookieComp) == 0){
            return cook.substring(nameCookieComp.length, cook.length);
        }
    }
}

function openMyExperiences(){
    document.getElementById("myExperiences").style.display="block";
}

function closeMyExperiences(){
    document.getElementById("myExperiences").style.display="none";
}

function openMyProfile(){
    document.getElementById("myProfile").style.display="block";
    document.getElementById("usernameprof").innerHTML = getCookie("username");
    document.getElementById("passwordprof").innerHTML = getCookie("password");
    document.getElementById("nameprof").innerHTML = getCookie("name");
    document.getElementById("surnameprof").innerHTML = getCookie("surname");
    document.getElementById("usernameprof").innerHTML = getCookie("username");
    document.getElementById("emailprof").innerHTML = getCookie("email");
    document.getElementById("birthprof").innerHTML = getCookie("date");
    document.getElementById("interestprof").innerHTML = getCookie("interests");
    document.getElementById("profilephotoprof").src = getCookie("photito");
}

function openChangeUsername(){
    document.getElementById("changeUsername").style.display="block";
}
function closeChangeUsername(){
    document.getElementById("changeUsername").style.display="none";
}
function changeUsername(){
    var elements = document.getElementById("userchange");
    cookie = elements[1].name + "=" + elements[1].value;
    document.cookie = cookie;
    document.getElementById("usernameprof").innerHTML = getCookie("username");
    document.getElementById("usernamespace").innerHTML = getCookie("username");
    closeChangeUsername();
}

function openChangeInterest(){
    document.getElementById("changeInterest").style.display = "block";
}
function closeChangeInterest(){
    document.getElementById("changeInterest").style.display = "none";
}
function changeInterest(){
    var elements = document.getElementById("intchange");
    cookie = elements[1].name + "=" + elements[1].value;
    document.cookie = cookie;
    document.getElementById("interestprof").innerHTML = getCookie("interests");
    closeChangeInterest();
}

function openChangeProfileImage(){
    document.getElementById("changeProfileImage").style.display = "block";
}
function closeChangeProfileImage(){
    document.getElementById("changeProfileImage").style.display = "none";
}
function changeProfileImage(){
    var elements = document.getElementById("imageprofchange");
    console.log(elements);
    cookie = elements[1].name + "=" + elements[1].value;
    document.cookie = cookie;
    document.getElementById("profilephotoprof").src = getCookie("photito");
    document.getElementById("profileimageimg").src = getCookie("photito");
    closeChangeProfileImage();
}

function closeMyProfile(){
    document.getElementById("myProfile").style.display="none";
}

function showNewyork(){
    closeMonaco();
    closeDubai();
    document.getElementById("newyork").style.display = "block";
}

function showMonaco(){
    closeNewyork();
    closeDubai();
    document.getElementById("monaco").style.display = "block";
}

function showDubai(){
    closeNewyork();
    closeMonaco();
    document.getElementById("dubai").style.display = "block";
}
function closeNewyork(){
    document.getElementById("newyork").style.display = "none";
}

function closeMonaco(){
    document.getElementById("monaco").style.display = "none";
}

function closeDubai(){
    document.getElementById("dubai").style.display = "none";
}

//Cookies for the signup
function openSignupForm(){
    closeLoginForm();
    document.getElementById("signupForm").style.display = "block";
}

function closeSignupForm(){
    document.getElementById("signupForm").style.display = "none";
}

function signup(){
    document.cookie=""
    if (document.getElementById("terms").checked){
        var elements = document.getElementById("signup");
        var cookie = "";
        var email = elements[5].value;
        if (document.cookie.includes("email=" + email)){
            alert("Account already created");
        }else{
            for(var i=1; i<elements.length;i++){
                cookie = elements[i].name + "=" + elements[i].value;
                document.cookie = cookie;
            }
            alert("Account created");
            document.getElementById("notLogged").style.display = "none";
            document.getElementById("notLogged2").style.display = "none";
            document.getElementById("requireLoginSection").style.display = "block";
            document.getElementById("profileimageimg").src = elements[9].value;
            document.getElementById("usernamespace").innerHTML = elements[1].value;
            document.getElementById("profileimageimg").style.display="block";
            closeSignupForm();
        }
    }else{
        alert("Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy")
    }
}

function deleteFormInfo(){
    var input = document.getElementsById("signup");
    for(var i=0;i<input;i++){
      input[i].value="";
    }
}

//logout
function openLogout(){
    document.getElementById("logoutPopup").style.display = "block";
}

function closeLogout(){
    document.getElementById("logoutPopup").style.display = "none";
}

function logout(){
    document.getElementById("notLogged").style.display = "block";
    document.getElementById("notLogged2").style.display = "block";
    document.getElementById("menuLogged").style.display = "none";
    document.getElementById("logoutPopup").style.display = "none";
    document.getElementById("usernamespace").style.color="black";
    document.getElementById("profileimageimg").style.display="none";
}

//Functions for the search bar
function searchBar(){
    let input=document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('experiencecell');
    var found=false;
    for (i = 0; i < x.length;i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display="none";
        }else{
            x[i].style.display="block";
            found=true;
        };
    };
    if (found == false){
        alert("No experiences found for this")
    }
}

//functions for filters 
function filters(){
    if(document.getElementById("filters").style.display == "block"){
        document.getElementById("filters").style.display = "none";
    }else{
        document.getElementById("filters").style.display = "block";
    }
}

function apply(){
    document.getElementById("filters").style.display = "none";
    document.getElementById('settings').style.display = "none";

    let i = document.getElementById('int_options').value;
    let b = parseInt(document.getElementById('budget').value);
    let d = parseInt(document.getElementById('distance').value);
    let c = document.getElementById('french_cities').value;
    let x = document.getElementsByClassName('experiencecell');

    if (c=='lyon'){ //Because we don't have data base, we choose to simulate distance filter only for Lyon
        if (b>=540 && d>=5006 && (i=='leisure' || i=='')) {  //criterias for Dubaï (settings & filters)
            x[2].style.display="block";
        }else{
            x[2].style.display="none";
        }
        if (b>=352 && d>=304 && (i=='leisure' || i=='')) {  //criterias for Monaco (settings & filters)
            x[3].style.display="block";
        }else{
            x[3].style.display="none";
        }
        if (b>=1005 && d>=6110 && (i=='leisure' || i=='food'  || i=='')) {  //criterias for New York (settings & filters)
            x[4].style.display="block";
        }else{
            x[4].style.display="none";
        }
        if (b>=350 && d>=2528 && (i=='capital' || i=='leisure'  || i=='')) {  //criterias for Moscou (settings & filters)
            x[5].style.display="block";
        }else{
            x[5].style.display="none";
        }
        if (b>=200 && d>=392 && (i=='capital' || i=='art'  || i=='')) {  //criterias for Paris (settings & filters)
            x[6].style.display="block";
        }else{
            x[6].style.display="none";
        }
        if (b>=955 && d>=9337 && (i=='art' || i=='history'  || i=='')) {  //criterias for San Francisco (settings & filters)
            x[7].style.display="block";
        }else{
            x[7].style.display="none";
        }
        if (b>=1220 && d>=9891 && (i=='food' || i=='art'  || i=='')) {  //criterias for Tokyo (settings & filters)
            x[8].style.display="block";
        }else{
            x[8].style.display="none";
        }
        if (b>=120 && d>=1227 && (i=='capital' || i=='leisure'  || i=='')) {  //criterias for Madrid (settings & filters)
            x[9].style.display="block";
        }else{
            x[9].style.display="none";
        }
        if (b>=1056 && d>=16884 && (i=='leisure'  || i=='')){ //criterias for Sydney (settings & filters)
            x[10].style.display="block";
        }else{
            x[10].style.display="none";
        }
    }else if(c=="" && document.getElementById('country').value==""){ //no filters, only settings (interests)
        if (i=='leisure' || i=='') {  //criterias for Dubaï
            x[2].style.display="block";
        }else{
            x[2].style.display="none";
        }
        if (i=='leisure'  || i=='') {  //criterias for Monaco
            x[3].style.display="block";
        }else{
            x[3].style.display="none";
        }
        if (i=='leisure' || i=='food'  || i=='') {  //criterias for New York
            x[4].style.display="block";
        }else{
            x[4].style.display="none";
        }
        if (i=='capital' || i=='leisure'  || i=='') {  //criterias for Moscou
            x[5].style.display="block";
        }else{
            x[5].style.display="none";
        }
        if (i=='capital' || i=='art'  || i=='') {  //criterias for Paris
            x[6].style.display="block";
        }else{
            x[6].style.display="none";
        }
        if (i=='art' || i=='history'  || i=='') {  //criterias for San Francisco
            x[7].style.display="block";
        }else{
            x[7].style.display="none";
        }
        if (i=='food' || i=='art'  || i=='') {  //criterias for Tokyo
            x[8].style.display="block";
        }else{
            x[8].style.display="none";
        }
        if (i=='capital' || i=='leisure'  || i=='') {  //criterias for Madrid
            x[9].style.display="block";
        }else{
            x[9].style.display="none";
        }
        if (i=='leisure'  || i=='') { //criterias for Sydney
            x[10].style.display="block";
        }else{
            x[10].style.display="none";
        }
    }else{ // distance filter from another place than Lyon
        alert("Sorry we haven't already implement distance filters for this home city, please choose an other")
    }
}

function filter1(){
    document.getElementById('exp_name').innerHTML="&#9899; experience's name";
}

function filter2(){
    document.getElementById('author').innerHTML="&#9899; author";
}

function filter3(){
    document.getElementById('interest').innerHTML="&#9899; interests";
    document.getElementById('int_options').style.display = "block";
}

//functions for settings
function settings(){
    if(document.getElementById('settings').style.display == "block"){
        document.getElementById('settings').style.display = "none";
    }else{
        document.getElementById('settings').style.display = "block"
    }
}

function budget_cursor(){
    var x = document.getElementById('budget').value;
    document.getElementById('budget-section').innerHTML="Budget per person : "+x+"€";
}

function distance_cursor(){
    var x = document.getElementById('distance').value;
    document.getElementById('distance-section').innerHTML="Distance : "+x+" km";
}

function applySettings(){
    document.getElementById('settings').style.display = "none";
    let b = parseInt(document.getElementById('budget').value);
    let d = parseInt(document.getElementById('distance').value);
    let c = document.getElementById('french_cities').value;
    let x = document.getElementsByClassName('experiencecell');
    if (c=='lyon'){ //Because we don't have data base, we choose to simulate distance filter only for Lyon
        if (b>=540 && d>=5006) {  //criterias for Dubaï
            x[2].style.display="block";
        }else{
            x[2].style.display="none";
        }
        if (b>=352 && d>=304) {  //criterias for Monaco
            x[3].style.display="block";
        }else{
            x[3].style.display="none";
        }
        if (b>=1005 && d>=6110) {  //criterias for New York
            x[4].style.display="block";
        }else{
            x[4].style.display="none";
        }
        if (b>=350 && d>=2528) {  //criterias for Moscou
            x[5].style.display="block";
        }else{
            x[5].style.display="none";
        }
        if (b>=200 && d>=392) {  //criterias for Paris
            x[6].style.display="block";
        }else{
            x[6].style.display="none";
        }
        if (b>=955 && d>=9337) {  //criterias for San Francisco
            x[7].style.display="block";
        }else{
            x[7].style.display="none";
        }
        if (b>=1220 && d>=9891) {  //criterias for Tokyo
            x[8].style.display="block";
        }else{
            x[8].style.display="none";
        }
        if (b>=120 && d>=1227) {  //criterias for Madrid
            x[9].style.display="block";
        }else{
            x[9].style.display="none";
        }
        if (b>=1056 && d>=16884) { //criterias for Sydney
            x[10].style.display="block";
        }else{
            x[10].style.display="none";
        }
    }else{
        alert("Sorry we haven't already implement distance filters for this home city, please choose an other")
    }
}

//Functions for myexperiences
function openAddExperience(){
    document.getElementById("popupAddExperience").style.display="block";
}
function closeAddExperience(){
    document.getElementById("popupAddExperience").style.display="none";   
}
function addExperience(){
    var title = document.getElementById("title").value;
    var desc = document.getElementById("description").value;
    var source = document.getElementById("photoexp").value;
    var elements = document.getElementById("addForm");
    var html= 
    "<ul class='row'> "
    + "<li class='experiencecell'>"
    + "<img src=" + source + ">"
    + "<h2>" + title + "</h2>"
    + "<p class='description'>" + desc + "</p><button type='button' onclick=deleteExperience(this)>Delete</button></li>"
    $(html).insertAfter('#addexpbut');
    closeAddExperience();
}
function deleteExperience(el) {
    var x = confirm("Are you sure you want to delete?");
    if (x)
        el.parentNode.parentNode.style.display = 'none';
}