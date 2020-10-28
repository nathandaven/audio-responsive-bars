//scripts for AFRAME project
//Nathan Davenport
//https://medium.com/scratch-pad-3201-3202/note-building-interactivity-in-a-frame-825c719d39cc

alert("Refresh until the music loads, sometimes it take several refreshes as the song takes awhile to cache and the JS to run.");

AFRAME.registerComponent('change-color-on-hover', {
    schema: {
        color: { default: 'red' }
    },

    init: function() {
        var data = this.data;
        var el = this.el; // <a-box>
        var defaultColor = el.getAttribute('material').color;

        el.addEventListener('mouseenter', function() {
            el.setAttribute('color', data.color);
        });

        el.addEventListener('mouseleave', function() {
            el.setAttribute('color', defaultColor);
        });
    }
});

var myLink = document.getElementById('button1');

myLink.onclick = function() {

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "song1.js";
    document.getElementsByTagName("head")[0].appendChild(script);
    return false;

}