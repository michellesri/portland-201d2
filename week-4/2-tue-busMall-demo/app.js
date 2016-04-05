//===== MODEL: the app's data =====
var voteThresh1 = 16;
var voteThresh2 =  8 + voteThresh1;
var names = ['Holm', 'Tate', 'Rousey', 'Jones',
             'McGregor', 'Rockhold', 'Winslow', 'McCarthy'];
var nameMap  = [], fighters = [];
var roundClicks, blockVote;

function fighter() { // Leave names in separate array (less mem)
  this.nDisp = 0;
  this.nSel = 0;
}

function makeFighters() {
  for (var ii = 0; ii < names.length; ii++) {
    fighters.push(new fighter());
    nameMap.push([ii, names[ii]]);
  }
}

function setBlockVote(b)   { blockVote   = b; localStorage.blockVote   = blockVote;   }
function setRoundClicks(n) { roundClicks = n; localStorage.roundClicks = roundClicks; }

//===== VIEW: DOM & localStorage related to DOM state =====
var viz = ['hidden', 'visible'];
var domIm = [gebi('im1'), gebi('im2'), gebi('im3')];
var btnShow = gebi('show');
var btnMore = gebi('more');
var btnNew  = gebi('new');
var chart   = gebi('chart');
var caps = [gebi('cap1'), gebi('cap2'), gebi('cap3')];

function gebi(id) { return document.getElementById(id); }

function setBtnViz(a, b, c) {
  btnShow.style.visibility = viz[a];
  btnMore.style.visibility = viz[b];
  btnNew.style.visibility = viz[c];
  localStorage.btnShow = a;
  localStorage.btnMore = b;
  localStorage.btnNew = c;
}

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

//===== CONTROLLER: Logic that updates/shows data in the view ======
function loadImg(pool, ide, cap) { // "ide" = image DOM element
  var pIdx = Math.floor(Math.random() * pool.length);
  var idx = pool[pIdx][0];
  initIde(ide, idx, cap);
  fighters[idx].nDisp++;
  localStorage.stats = JSON.stringify(fighters);
  pool.splice(pIdx, 1); // Wed's "+1 EC": splice as imgs are shown
}

function loadImages() {
  nmTmp = nameMap.slice();
  for (var ii = 0; ii < domIm.length; ii++)  loadImg(nmTmp, domIm[ii], caps[ii]);
  localStorage.idx1 = im1.idx;
  localStorage.idx2 = im2.idx;
  localStorage.idx3 = im3.idx;
}

function show() { // Show vote results
  dump();
  setBtnViz(0, 0, 1);
  setRoundClicks(0);
}

function vote(ev) {
  if (blockVote) return;

  setRoundClicks(roundClicks+1);
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
    var v = fighters[ii].nSel;  // Vote count
    var s = fighters[ii].nDisp; // Display count
    var p = 0; // Percent
    if (v)  p = Math.round(100 * v/s, 1); // p=0 if never displayed
    chart.innerHTML += names[ii] + ': ' + v + ' votes, ' + s + ' shows (' + p + '%)<br>';
  }
  localStorage.chart = true;
}

  // === Init. Load from localStorage if available
function initIde(ide, lsIdx, cap) {
  ide.idx = lsIdx;
  ide.setAttribute('src', 'img/' + nameMap[ide.idx][1] + '.jpg');
  cap.textContent = names[lsIdx];
}

(function() { // This is an IIFE!
  makeFighters();
  if (typeof localStorage.btnShow != 'undefined') {
    setBtnViz(localStorage.btnShow, localStorage.btnMore, localStorage.btnNew);
    blockVote = JSON.parse(localStorage.blockVote);
    roundClicks = JSON.parse(localStorage.roundClicks);

    initIde(im1, localStorage.idx1, cap1);
    initIde(im2, localStorage.idx2, cap2);
    initIde(im3, localStorage.idx3, cap3);

    if (typeof localStorage.stats != 'undefined')  fighters = JSON.parse(localStorage.stats);
    if (localStorage.chart != 'false')             show();
  }
  else {
    setBtnViz(0,0,0);
    setBlockVote(false);
    localStorage.chart = false;
    setRoundClicks(0);
    loadImages();
  }
})();