var dropCookie = false;                  // False disables Cookie for testing
var cookieDuration = 14;                // Number of days before cookie expires
var cookieName = 'ssAcceptedCookies';
var cookieValue = 'on';
 
function createDiv(){
    var bodytag = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.setAttribute('id','cookie-banner');
    // Change href below if your cookie policy page link is not /cookies/
    div.innerHTML = '<p>We use cookies to give you the best experience on our website. By continuing, you agree to our <a href="/cookies/" rel="nofollow" title="Cookie Policy">Cookie Policy</a>. <a class="close-cookie-banner" href="javascript:void(0);" onclick="removeMe();"><span>X</span></a></p>';    
    bodytag.insertBefore(div,bodytag.firstChild); // Add the banner just after the opening <body> tag
    document.getElementsByTagName('body')[0].className+=' cookiebanner'; // Adds a class to the <body> tag when the banner is visible
    createCookie(window.cookieName,window.cookieValue, window.cookieDuration); // Create the cookie
}  
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000)); 
        var expires = "; expires="+date.toGMTString(); 
    }
    else var expires = "";
    if(window.dropCookie) { 
        document.cookie = name+"="+value+expires+"; path=/"; 
    }
} 
function checkCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
} 
function eraseCookie(name) {
    createCookie(name,"",-1);
} 
window.onload = function(){
    if(checkCookie(window.cookieName) != window.cookieValue){
        createDiv(); 
    }
}
function removeMe(){
    var element = document.getElementById('cookie-banner');
    element.parentNode.removeChild(element);
}