const urlList = {};

function encodeURL() {
  let longURL = document.getElementById("url").value;
  if (!longURL) {
    alert("please enter URL");
	return;
  }  
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const codeLength = 4; 
  let shortCode = '';
  for (let i = 0; i < codeLength; i++) {
	const randomIndex = Math.floor(Math.random() * characters.length);
	shortCode += characters[randomIndex];
  }  
  urlList[shortCode] = longURL;  
  document.getElementById("urldata").innerText = shortCode;
}

function decodeURL() {
  let shortURL = document.getElementById("urldata").innerText;
  const shortCode = shortURL.substring(shortURL.lastIndexOf('/') + 1);
  const longURL = urlList[shortCode];
  if (!longURL) {
    alert('Short URL not found');
  }
  document.getElementById("urldata").innerText = longURL;
}