//your JS code here. If required.
function updateSize() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    document.getElementById("size").innerHTML = "Width: " + width + "px, Height: " + height + "px";
  }

  // Call updateSize on initial page load
  updateSize();

  // Call updateSize on window resize
  window.onresize = updateSize;
