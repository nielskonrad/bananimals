var dropArea,
    playBox,
    loadBox,
    isSoundPlaying = false;

var fileData;

var newSetup;

var awake = function() {
  newSetup = new Setup();
}

var Setup = function() {
    // var cur = current == 'one' ? 0 : 1;

    loadBox = document.getElementById('upload-button');
    dropArea = document.getElementById('start');
    playBox = document.getElementById('start');

    loadBox.addEventListener('change', this.dropEvent, true);
    dropArea.addEventListener('drop', this.dropEvent, true);
    dropArea.addEventListener('dragover', this.dragOver, true);
    playBox.addEventListener('click', this.playSong.bind(this), false);

}

Setup.prototype.dragOver = function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    return false;
}

Setup.prototype.playSong = function(click) {

    var self = this,
        d = document,
        playToggle = click.target.id,
        theSpecElem = d.getElementsByClassName('buttonicon');

    // Get drop event target number
    var num = playToggle.substring(6, 9);
    // var cur = num == 'one' ? 0 : 1;

    // console.log(num);

    if (isSoundPlaying) {
        isSoundPlaying = false;
        self.pauseTrack;
        d.getElementById('start').classList.remove('on');
        theSpecElem.classList.remove('pause');
    } else {
        isSoundPlaying = true;
        self.initAudio(fileData);
        d.getElementById('start').classList.add('on');
        theSpecElem.classList.add('pause');
    }

}

Setup.prototype.initAudio = function(data) {

    var self = this;

    console.log(this);

    // if (context.decodeAudioData) {
    //     context.decodeAudioData(data, function(buffer) {
    //         source = context.createBufferSource();
    //         source.connect(self.sourceGain);
    //         source.buffer = buffer;
    //         self.startAudio(buffer);
    //     }, function(e) {
    //         // console.log(e);
    //     });
    // } else {
    //     source.buffer = context.createBuffer(data, false /* mixToMono */ );
    //     self.startAudio();
    // }   

}

Setup.prototype.startAudio = function(buffer, num) {
    // startTime[num] = context.currentTime;
    // source[num].loop = true;
    // // Start playback, but make sure we stay in bound of the buffer.
    // source[num].start(0, startOffset[num] % buffer.duration);
}

Setup.prototype.pauseTrack = function(song) {
    // // Measure how much time passed since the last pause.
    // startOffset[song] += context.currentTime - startTime[song];
    // source[song].stop(0);
}

Setup.prototype.dropEvent = function(evt) {

    // Get drop event target number
    var num = this.className.substring(11, 14);
    // var cur = num == 'one' ? 0 : 1;

    var droppedFiles = evt.dataTransfer.files;

    console.log(evt.dataTransfer.files);
    
    var reader = new FileReader();

    evt.stopPropagation();
    evt.preventDefault();
    
    reader.onload = function(fileEvent) {
        fileData = fileEvent.target.result;
        var str = droppedFiles[0].name; 
        document.querySelector('.artistinfo.' + num).innerHTML = "Song:<br />" + str;
        // document.querySelector('.button-reg.invisible.drop').style.border = 'none';
    }
    
    reader.readAsArrayBuffer(droppedFiles[0]);

    // document.getElementById('container').appendChild(droppedFiles[0]);
    // var z = document.createElement('div');
    // z.appendChild(droppedFiles);
    var s = Snap();
    Snap.load("assets/svg/lemur.svg", function (f) {
        s.append(f);
        alert('hey');
        // document.getElementById('container').appendChild(z);
    });

    playBox.classList.remove('invisible');
    playBox.classList.add('visible');
// 
    // var playButton = 'start-' + num;

    // document.getElementById(playButton).removeChild(document.getElementById('drag-instr'));
    document.getElementById('upload-button').style.zIndex = -10;
        
}

window.addEventListener("DOMContentLoaded", awake, true);