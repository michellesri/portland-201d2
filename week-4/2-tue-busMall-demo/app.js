/////// DOM stuff & localStorage related to DOM state ///////
function gebi(id) { return document.getElementById(id); }

function setBtnViz(a, b, c) {
  btnShow.style.visibility = viz[a];
  btnMore.style.visibility = viz[b];
  btnNew.style.visibility  = viz[c];
  localStorage.btnShow = a;
  localStorage.btnMore = b;
  localStorage.btnNew  = c;
}

var viz = ['hidden', 'visible'];
var domIm = [gebi('im1'), gebi('im2'), gebi('im3')];
var btnShow = gebi('show');
var btnMore = gebi('more');
var btnNew  = gebi('new');
var chart   = gebi('chart');

im1.addEventListener('click', vote);
im2.addEventListener('click', vote);
im3.addEventListener('click', vote);
btnShow.addEventListener('click', show);
btnMore.addEventListener('click', more);
btnNew.addEventListener('click', hnew);

/////// Data, mostly ///////
var voteThresh1 =  4;
var voteThresh2 =  3 + voteThresh1;
var names   = ['Holm',     'Tate',     'Rousey',  'Jones',
               'McGregor', 'Rockhold', 'Winslow', 'McCarthy'];
var nameMap  = [], fighters = [];
var roundClicks, totalClicks, blockVote;

function fighter() {
  this.nDisp = 0;
  this.nSel  = 0;
}

function makeFighters() {
  for (var ii=0; ii < names.length; ii++) {
    fighters.push(new fighter());
    nameMap.push([ii, names[ii]]);
  }
}

function randIdx(scale) { return Math.floor(Math.random() * scale); }

function loadImg(pool, ide) { // "ide" = image DOM element
  var pIdx = randIdx(pool.length);
  ide.setAttribute('src', 'img/' + pool[pIdx][1] + '.jpg');
  var idx = pool[pIdx][0];
  ide.idx = idx;
  fighters[idx].nDisp++;
  pool.splice(pIdx, 1);
}

function loadImages() { // ide = image DOM element
  nameMap_copy = nameMap.slice(); // Reduce copy as imgs are shown (+1 EC, end of Wed)
  for (var ii=0; ii < domIm.length; ii++) { loadImg(nameMap_copy, domIm[ii]); }
  localStorage.idx1 = im1.idx;
  localStorage.idx2 = im2.idx;
  localStorage.idx3 = im3.idx;
}

function setBlockVote(b) {
  blockVote = b;
  localStorage.blockVote = blockVote;
}

function vote(ev) {
  if (blockVote) return;

  roundClicks++;  localStorage.roundClicks = roundClicks;
  totalClicks++;  localStorage.totalClicks = totalClicks;

  fighters[ev.target.idx].nSel++;
  if (roundClicks == voteThresh1) {
    setBlockVote(true);
    setBtnViz(1, 1, 0);
  }
  else if (roundClicks == voteThresh2) {
// TODO: If "new button" was clicked, don't progress

    setBlockVote(true);
    show();
  }
  else loadImages();
}

function dump() { // Print vote stats
  localStorage.chart = true;
  chart.innerHTML = '';
  var nSel_dump = [];
  var nDisp_dump = [];

  for (var ii=0; ii < fighters.length; ii++) {
    var votes = fighters[ii].nSel;
    var shows = fighters[ii].nDisp;
    nSel_dump.push(votes);
    nDisp_dump.push(shows);
    var p = 0;
    if (votes)  p = Math.round(100 * votes / fighters[ii].nDisp, 1);
    chart.innerHTML += names[ii] + ': ' + votes + ' votes, ' + shows + ' shows (' + p + '%)<br>';
  }
  localStorage.nSel  = nSel_dump;
  localStorage.nDisp = nDisp_dump;
}

// Button click handlers
function show() {
  dump();
  setBtnViz(0, 0, 1);
  roundClicks = 0;
  localStorage.roundClicks = roundClicks;
}

function more() {
  setBtnViz(0, 0, 0);
  setBlockVote(false);
  loadImages();
}

function hnew() {
  setBtnViz(0, 0, 0);
  chart.innerHTML = '';
  localStorage.chart = false;
  loadImages();
  setBlockVote(false);
}

(function() { // This is an IIFE
  makeFighters();
  if (typeof localStorage.totalClicks != 'undefined') {
    setBtnViz(localStorage.btnShow, localStorage.btnMore, localStorage.btnNew);
    blockVote   = JSON.parse(localStorage.blockVote);
    roundClicks = localStorage.roundClicks;
    totalClicks = localStorage.totalClicks;
    im1.idx = localStorage.idx1;
    im2.idx = localStorage.idx2;
    im3.idx = localStorage.idx3;
    im1.setAttribute('src', 'img/' + nameMap[im1.idx][1] + '.jpg');
    im2.setAttribute('src', 'img/' + nameMap[im2.idx][1] + '.jpg');
    im3.setAttribute('src', 'img/' + nameMap[im3.idx][1] + '.jpg');

    if (typeof localStorage.nSel_dump != null) {
      var nSel_dump  = JSON.parse('['+localStorage.nSel +']');
      var nDisp_dump = JSON.parse('['+localStorage.nDisp+']');
      for (var ii=0; ii < fighters.length; ii++) {
         fighters[ii].nSel  = nSel_dump[ii];
         fighters[ii].nDisp = nDisp_dump[ii];
      }
    }
    if (localStorage.chart != "false") { show(); }
  }

  else {
    setBlockVote(false);
    roundClicks =  0;
    totalClicks =  0;
    loadImages();
  }
})();
