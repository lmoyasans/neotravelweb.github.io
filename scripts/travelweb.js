let loggedUser = null;

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
    var form = document.getElementById("loginForm");
    const data = new FormData(form);

    const savedUser = localStorage.getItem("user-" + data.get("username"));

    if (!savedUser) {
        alert("No account exists with this username")
    } else{
        const savedData = JSON.parse(savedUser);
        if (savedData.password !== data.get("password")) 
        {
            alert("Wrong password")
        } else {
            console.log(savedData)
            loggedUser = savedData
            document.getElementById("notLogged").style.display = "none";
            document.getElementById("notLogged2").style.display = "none";
            document.getElementById("menuLogged").style.display = "block";
            document.getElementById("profileimageimg").style.display="block";
            document.getElementById("requireLoginSection").style.display = "block";
            document.getElementById("usernamespace").style.color="aqua";
            document.getElementById("profileimageimg").src = savedData.photito
            document.getElementById("usernamespace").innerHTML = savedData.username
            var fav = document.getElementsByClassName("favourites");
            for(i=0; i<fav.length; i++) {
              fav[i].style.display = "block";
            }
            closeLoginForm()
        }
    }
}


function openMyCollection(){
    document.getElementById("myCollection").style.display="block";
}

function closeMyCollection(){
    document.getElementById("myCollection").style.display="none";
}

function openMyExperiences(){
    document.getElementById("myExperiences").style.display="block";
}

function closeMyExperiences(){
    document.getElementById("myExperiences").style.display="none";
}

function openMyProfile(){
    document.getElementById("myProfile").style.display="block";
    document.getElementById("usernameprof").innerHTML = loggedUser.username;
    document.getElementById("passwordprof").innerHTML = loggedUser.password;
    document.getElementById("nameprof").innerHTML = loggedUser.name;
    document.getElementById("surnameprof").innerHTML = loggedUser.surname;
    document.getElementById("usernameprof").innerHTML = loggedUser.username;
    document.getElementById("emailprof").innerHTML = loggedUser.email;
    document.getElementById("birthprof").innerHTML = loggedUser.date;
    document.getElementById("interestprof").innerHTML = loggedUser.interests;
    document.getElementById("profilephotoprof").src = loggedUser.photito;
}

function openChangeUsername(){
    document.getElementById("changeUsername").style.display="block";
}
function closeChangeUsername(){
    document.getElementById("changeUsername").style.display="none";
}


function openChangeInterest(){
    document.getElementById("changeInterest").style.display = "block";
}
function closeChangeInterest(){
    document.getElementById("changeInterest").style.display = "none";
}
function changeInterest(){
    var elements = document.getElementById("intchange");
    const newUser = {...loggedUser, interests: elements[1].value};

    localStorage.setItem("user-" + loggedUser.username, JSON.stringify(newUser));
    loggedUser = newUser;

    document.getElementById("interestprof").innerHTML = loggedUser.interests;
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
    const newUser = {...loggedUser, photito: elements[1].value};

    localStorage.setItem("user-" + loggedUser.username, JSON.stringify(newUser));
    loggedUser = newUser;
    document.getElementById("profilephotoprof").src = loggedUser.photito;
    document.getElementById("profileimageimg").src = loggedUser.photito;
    closeChangeProfileImage();
}

function closeMyProfile(){
    document.getElementById("myProfile").style.display="none";
}

function showNewyork(){
    closeMonaco();
    closeDubai();
    closeTokyo();
    closeMadrid();
    closeSydney();
    closeMoscow();
    document.getElementById("newyork").style.display = "block";
}

function showMonaco(){
    closeNewyork();
    closeDubai();
    closeTokyo();
    closeMadrid();
    closeSydney();
    closeMoscow();
    document.getElementById("monaco").style.display = "block";
}

function showDubai(){
    closeNewyork();
    closeMonaco();
    closeTokyo();
    closeMadrid();
    closeSydney();
    closeMoscow();
    document.getElementById("dubai").style.display = "block";
}

function showTokyo(){
    closeNewyork();
    closeMonaco();
    closeDubai();
    closeMadrid();
    closeSydney();
    closeMoscow();
    closeSanFrancisco();
    closeParis();
    document.getElementById("tokyo").style.display = "block";
}

function showMadrid(){
    closeNewyork();
    closeMonaco();
    closeDubai();
    closeTokyo();
    closeSydney();
    closeMoscow();
    closeSanFrancisco();
    closeParis();
    document.getElementById("madrid").style.display = "block";
}

function showSydney(){
    closeNewyork();
    closeMonaco();
    closeDubai();
    closeTokyo();
    closeMadrid();
    closeMoscow();
    closeSanFrancisco();
    closeParis();
    document.getElementById("sydney").style.display = "block";
}

function showMoscow(){
    closeNewyork();
    closeMonaco();
    closeDubai();
    closeTokyo();
    closeMadrid();
    closeSydney();
    closeSanFrancisco();
    closeParis();
    document.getElementById("moscow").style.display = "block";
}

function showSanFrancisco(){
    closeNewyork();
    closeMonaco();
    closeDubai();
    closeTokyo();
    closeMadrid();
    closeSydney();
    closeMoscow();
    closeParis();
    document.getElementById("sanfrancisco").style.display = "block";
}

function showParis(){
    closeNewyork();
    closeMonaco();
    closeDubai();
    closeTokyo();
    closeMadrid();
    closeSydney();
    closeSanFrancisco();
    closeMoscow();
    document.getElementById("paris").style.display = "block";
}


function closeSydney(){
    document.getElementById("sydney").style.display = "none";
}

function closeParis(){
    document.getElementById("paris").style.display = "none";
}

function closeSanFrancisco(){
    document.getElementById("sanfrancisco").style.display = "none";
}


function closeMoscow(){
    document.getElementById("moscow").style.display = "none";
}

function closeNewyork(){
    document.getElementById("newyork").style.display = "none";
}

function closeTokyo(){
    document.getElementById("tokyo").style.display = "none";
}

function closeMadrid(){
    document.getElementById("madrid").style.display = "none";
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
    if (document.getElementById("terms").checked){
        var form = document.getElementById("signup");

        const data = new FormData(form);
        console.log(data)


        if (localStorage.getItem("user-" + data.get("username"))) {
            alert("Account already created");
        } else{
            const user = {};

            for(const key of data.keys()) {
                user[key] = data.get(key);     
            }

            console.log(user);

            localStorage.setItem("user-" + data.get("username"), JSON.stringify(user));
            alert("Account created");
            document.getElementById("notLogged").style.display = "none";
            document.getElementById("notLogged2").style.display = "none";
            document.getElementById("menuLogged").style.display = "block";
            document.getElementById("requireLoginSection").style.display = "block";
            document.getElementById("profileimageimg").src = data.get("photito")
            document.getElementById("usernamespace").innerHTML = data.get("username");
            document.getElementById("profileimageimg").style.display="block";
            closeSignupForm();
            loggedUser = user;
            var fav = document.getElementsByClassName("favourites");
            for(i=0; i<fav.length; i++) {
              fav[i].style.display = "block";
            }
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
    loggedUser = null;
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


function favourite(f){
    var element = f;
    var exp = f.parentNode.id;
    alert(document.getElementById(exp).innerHTML);
    if ((f.src).substring(f.src.length - 15, f.src.length) == "images/favs.png"){
        f.src = "images/faved.png";
        var z = document.getElementById(exp).getElementsByTagName('img');
        document.getElementById("myCollectionContent").innerHTML += '<div class="experiencecell" id="c'+ exp + '><img src="'+z[0].src+'">' + document.getElementById(exp).innerHTML + '</div>';
        //document.getElementById(exp).innerHTML += '<img src="images/faved.png" style="width: 13%; display: none;" title="Delete from favourites">';
    }else{
        f.src = "images/favs.png";
        var collections = document.getElementById("myCollectionContent").getElementsByClassName("experiencecell");
        
        for (var l = 0; l < collections.length;l++){
            alert((collections[l].id).substring(1, 10));
            alert(exp);
            if ((collections[l].id).substring(1, 10) == exp){
                collections[l].remove();

            }
        }
    }
    
}

function like(el) {
    if(el.parentElement.parentElement.style.backgroundColor =="darkslategray"){
        el.parentElement.parentElement.style.backgroundColor = "black"
    }else{
        el.parentElement.parentElement.style.backgroundColor = "darkslategray"
    }
    
}

function likeComment(el){
    if(el.parentElement.style.backgroundColor =="darkslategray"){
        el.parentElement.style.backgroundColor = "black"
    }else{
        el.parentElement.style.backgroundColor = "darkslategray"
    }
}

function popup(parent) {
    var popup = document.getElementById("myPopupShare")
    popup.style.display = "block"
    var title = parent.children[1].innerText
    popup.children[0].children[1].innerHTML = "Would you like to share " + title + "?"
}
function closePopup() {
    var popup = document.getElementById("myPopupShare")
    popup.style.display = "none"
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
    if (x){
        el.parentNode.parentNode.style.display = 'none';
    }
}

function deleteComment(el) {
    var x = confirm("Are you sure you want to delete?");
    if (x){
        el.parentNode.style.display = 'none';
    }
}

function addComment(){
    const commentText = document.getElementById("newComment").value
    const commentsContainer = document.getElementById("allComments")

    var html= 
    "<div class = 'comment'> "
    + "<h1 class='description'>" + commentText + "</h1><button type='button' onclick=deleteComment(this)>Delete</button><button type='button' onclick=likeComment(this)>Like</button>"
    $(html).insertAfter('#allComments');
}