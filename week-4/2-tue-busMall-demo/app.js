//===== DOM & localStorage related to DOM state =====
function gebi(id) { return document.getElementById(id); }

function setBtnViz(a, b, c) {
  btnShow.style.visibility = viz[a];
  btnMore.style.visibility = viz[b];
  btnNew.style.visibility = viz[c];
  localStorage.btnShow = a;
  localStorage.btnMore = b;
  localStorage.btnNew = c;
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
btnMore.addEventListener('click', function() { // Extend vote
  setBtnViz(0, 0, 0);
  setBlockVote(false);
  loadImages();
});

btnNew.addEventListener('click', function() { // New voting round
  setBtnViz(0, 0, 0);
  chart.innerHTML = ''; // Clear chart
  localStorage.chart = false;
  loadImages();
  setBlockVote(false);
});

function show() { // Show vote results
  dump();
  setBtnViz(0, 0, 1);
  roundClicks = 0;
  localStorage.roundClicks = roundClicks;
}

//===== Data, mostly =====
var voteThresh1 = 16;
var voteThresh2 =  8 + voteThresh1;
var names = ['Holm', 'Tate', 'Rousey', 'Jones',
             'McGregor', 'Rockhold', 'Winslow', 'McCarthy'];
var nameMap  = [], fighters = [];
var roundClicks, blockVote;

function fighter() {
  this.nDisp = 0;
  this.nSel = 0;
}

function makeFighters() {
  for (var ii = 0; ii < names.length; ii++) {
    fighters.push(new fighter());
    nameMap.push([ii, names[ii]]);
  }
}

//===== View logic ======
function loadImg(pool, ide) { // "ide" = image DOM element
  var pIdx = Math.floor(Math.random() * pool.length);
  ide.setAttribute('src', 'img/' + pool[pIdx][1] + '.jpg');
  var idx = pool[pIdx][0];
  ide.idx = idx;
  fighters[idx].nDisp++;
  localStorage.stats = JSON.stringify(fighters);
  pool.splice(pIdx, 1);
}

function loadImages() { // ide = image DOM element
  nmTmp = nameMap.slice(); // Wed's "+1 EC": spice as imgs are shown
  for (var ii = 0; ii < domIm.length; ii++) loadImg(nmTmp, domIm[ii]);
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

  roundClicks++; localStorage.roundClicks = roundClicks;
  fighters[ev.target.idx].nSel++;
  localStorage.stats = JSON.stringify(fighters);

  if (roundClicks == voteThresh1) {
    setBlockVote(true);
    setBtnViz(1, 1, 0);
  }
  else if (roundClicks == voteThresh2) {
    setBlockVote(true);
    show();
  }
  else loadImages();
}

function dump() { // Print vote stats
  chart.innerHTML = '';
  for (var ii = 0; ii < fighters.length; ii++) {
    var v = fighters[ii].nSel; // votes
    var s = fighters[ii].nDisp; // shown
    var p = 0; // percent
    if (v) p = Math.round(100 * v/s, 1);
    chart.innerHTML += names[ii] + ': ' + v + ' votes, ' + s + ' shows (' + p + '%)<br>';
  }
  localStorage.chart = true;
}

//===== Init. Load from localStorage if available
function initIde(ide, lsIdx) {
  ide.idx = lsIdx;
  ide.setAttribute('src', 'img/' + nameMap[ide.idx][1] + '.jpg');
}

(function() { // This is an IIFE
  makeFighters();
  if (typeof localStorage.btnShow != 'undefined') {
    setBtnViz(localStorage.btnShow, localStorage.btnMore, localStorage.btnNew);
    blockVote = JSON.parse(localStorage.blockVote);
    roundClicks = localStorage.roundClicks;

    initIde(im1, localStorage.idx1);
    initIde(im2, localStorage.idx2);
    initIde(im3, localStorage.idx3);

    if (typeof localStorage.stats != 'undefined')
      fighters = JSON.parse(localStorage.stats);

    if (localStorage.chart != 'false') { show(); }
  }
  else {
    setBtnViz(0,0,0);
    setBlockVote(false);
    localStorage.chart = false;
    roundClicks = 0; localStorage.roundClicks = roundClicks;
    loadImages();
  }
})();