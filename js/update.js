setTimeout(function() {
if (UI.version != "2.0.17-alpha.7") {
document.getElementById("update").innerHTML = '<div class="alert alert-danger" role="alert">New Update Available: <a href="https://gdi.js.org">Update Now</a></div>';
}
}, 5000);
