var v = document.getElementById("v"); 
v.addEventListener("canplaythrough", function(e) {
  console.log(e.type, this.seekable.end(0));
});


