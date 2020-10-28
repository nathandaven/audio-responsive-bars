//scripts for AFRAME project
//Nathan Davenport
//https://medium.com/scratch-pad-3201-3202/note-building-interactivity-in-a-frame-825c719d39cc


AFRAME.registerComponent('audiodata', {

    init: function() {

        var sceneEl = document.querySelector('a-scene');
        var arr = new Array(1024);

        let source = '../audio/currentjoys-diffage.mp3';
        let masterGain;
        var audioContext = new(window.AudioContext || window.webkitAudioContext);
        masterGain = audioContext.createGain();
        masterGain.connect(audioContext.destination);
        let song = new Audio(source);
        song.crossOrigin = 'anonymous';
        songSource = audioContext.createMediaElementSource(song);
        songSource.connect(masterGain);
        song.play();
        const analyser = audioContext.createAnalyser();
        masterGain.connect(analyser);

        var zOriginal = new Array(34);
        for (var i = 0; i < 34; i++) {
            //zOriginal[i] = document.querySelector('#box' + i).getAttribute('scale.z');
            zOriginal[i] = document.querySelector('#box' + i).object3D.scale.z;
        }

        function updateWaveform() {
            requestAnimationFrame(updateWaveform);
            var dataArray = new Float32Array(analyser.frequencyBinCount); // Float32Array needs to be the same length as the fftSize
            analyser.getFloatTimeDomainData(dataArray);

            for (var i = 0; i < 34; i++) {
                var box = '#box' + i;

                var newHeight = 1.5 + 10 * dataArray[i];

                document.querySelector(box).object3D.scale.z = zOriginal[i] + newHeight;
            }
            console.log(dataArray);
        };
        updateWaveform();
    },

    update: function() {

    },

    tick: function() {


    },
});