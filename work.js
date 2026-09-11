<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>⚛️ ZaM · GATE · OFFER · PACT · iki1uc</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  :root{
    --bg1:#0a0616; --bg2:#2a0f4a;
    --violet:#b388ff; --violet2:#7a3fe0; --violet3:#4a1a8a;
    --gold:#f5c860; --gold2:#ffe9a0;
    --pink:#ff77bb; --rose:#ffb0d8;
    --cyan:#6cf;
    --line:rgba(179,136,255,0.18);
    --serif:'Yu Mincho','Hiragino Mincho ProN','MS Mincho','Times New Roman',serif;
  }
  html,body{height:100%;}
  body{
    background:radial-gradient(ellipse at 50% 45%, #1a0838 0%, #0a0616 55%, #050308 100%);
    color:#d8c8f0;
    font-family:'Consolas','Courier New',monospace;
    height:100vh; overflow:hidden;
    display:flex; flex-direction:column;
  }

  /* ── HEADER ─────────────────────────────────── */
  header{
    display:flex; justify-content:space-between; align-items:center;
    padding:8px 16px;
    border-bottom:1px solid var(--line);
    background:rgba(10,6,22,0.85);
    backdrop-filter:blur(12px);
    flex-wrap:wrap; gap:10px; z-index:10;
  }
  header h1{
    font-size:15px; font-weight:400; letter-spacing:3px;
    background:linear-gradient(135deg,#ffe9a0,#b388ff,#ffb0d8);
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    font-family:var(--serif);
  }
  header h1 small{
    font-size:9px; color:#6a5a8a;
    -webkit-text-fill-color:#6a5a8a;
    letter-spacing:2px; margin-left:8px;
    font-family:'Consolas',monospace;
  }
  header h1 .tag{
    font-size:8px; letter-spacing:2px;
    -webkit-text-fill-color:#f5c860;
    border:1px solid rgba(245,200,96,0.5);
    border-radius:4px; padding:1px 6px; margin-left:8px;
    font-family:'Consolas',monospace;
  }
  .stats{
    display:flex; gap:14px; font-size:9.5px;
    color:#7a6a9a; align-items:center; flex-wrap:wrap;
  }
  .stats b{font-weight:bold;}
  .stats .v-violet{color:#b388ff;}
  .stats .v-gold{color:#f5c860;}
  .stats .v-pink{color:#ff77bb;}
  .stats .v-green{color:#8cf0d0;}
  .stats .v-rose{color:#ffb0d8;}

  /* ── STAGE ──────────────────────────────────── */
  #stage{
    flex:1; position:relative; overflow:hidden;
    display:flex; align-items:center; justify-content:center;
  }
  #gateCanvas{
    display:block; width:100%; height:100%;
    cursor:crosshair;
  }

  /* ── OFFER CONTRACT (rosa/gold) ─────────────── */
  #offerOverlay{
    position:absolute;
    top:50%; left:50%;
    transform:translate(-50%,-50%) scale(0.7) rotate(-4deg);
    min-width:340px;
    max-width:520px;
    padding:26px 34px 24px;
    background:linear-gradient(135deg,#1a0830 0%,#2a0f4a 100%);
    border:2px solid var(--gold);
    border-radius:4px;
    box-shadow:
      0 0 0 1px rgba(255,180,216,0.4),
      0 0 40px rgba(179,136,255,0.5),
      0 0 80px rgba(255,119,187,0.3),
      inset 0 0 30px rgba(179,136,255,0.15);
    opacity:0;
    pointer-events:none;
    transition:opacity .3s, transform .5s cubic-bezier(.2,1.6,.4,1);
    z-index:20;
    text-align:center;
  }
  #offerOverlay.show{
    opacity:1;
    transform:translate(-50%,-50%) scale(1) rotate(0deg);
    pointer-events:auto;
  }
  #offerOverlay::before,
  #offerOverlay::after{
    content:'';
    position:absolute; left:14px; right:14px;
    height:1px;
    background:linear-gradient(90deg,transparent,var(--gold),transparent);
  }
  #offerOverlay::before{ top:12px; }
  #offerOverlay::after{ bottom:12px; }

  #offerOverlay .kanji{
    font-family:var(--serif);
    font-size:52px;
    font-weight:900;
    color:var(--gold2);
    letter-spacing:6px;
    text-shadow:
      0 0 20px rgba(245,200,96,0.8),
      0 0 40px rgba(179,136,255,0.5);
    line-height:1.1;
    margin-bottom:6px;
  }
  #offerOverlay .seal{
    font-family:var(--serif);
    font-size:10px;
    letter-spacing:6px;
    color:var(--rose);
    margin-bottom:12px;
    text-transform:uppercase;
  }
  #offerOverlay .title{
    font-family:var(--serif);
    font-size:16px;
    letter-spacing:2px;
    color:var(--gold2);
    margin-bottom:14px;
  }
  #offerOverlay .body{
    font-family:var(--serif);
    font-size:13px;
    line-height:1.7;
    color:#e8d8ff;
    font-style:italic;
    padding:0 8px;
  }
  #offerOverlay .body .hl{ color:var(--gold2); font-style:normal; font-weight:bold; }
  #offerOverlay .body .hl-p{ color:var(--rose); font-style:normal; font-weight:bold; }
  #offerOverlay .stamp{
    margin-top:16px;
    font-size:9px;
    color:#8a6aaa;
    letter-spacing:3px;
    font-family:'Consolas',monospace;
  }
  #offerOverlay .accept-bar{
    position:absolute; bottom:14px; left:16px; right:16px;
    height:2px;
    background:rgba(179,136,255,0.2);
    border-radius:1px;
    overflow:hidden;
  }
  #offerOverlay .accept-bar .fill{
    height:100%;
    width:0%;
    background:linear-gradient(90deg,var(--gold),var(--rose));
    transition:width .1s linear;
  }

  /* ── CONTROLS ───────────────────────────────── */
  #controls{
    display:flex; gap:6px; align-items:center;
    padding:9px 16px;
    border-top:1px solid var(--line);
    background:rgba(10,6,22,0.9);
    backdrop-filter:blur(12px);
    flex-wrap:wrap;
    font-size:10px; z-index:10;
  }
  #controls button{
    background:rgba(26,8,48,0.8);
    border:1px solid rgba(179,136,255,0.35);
    color:var(--violet);
    padding:6px 14px;
    border-radius:6px;
    font-family:inherit; font-size:10px;
    letter-spacing:1.5px;
    cursor:pointer; transition:.18s;
    text-transform:uppercase;
  }
  #controls button:hover{
    background:rgba(179,136,255,0.15);
    border-color:var(--violet);
    color:#fff;
    box-shadow:0 0 14px rgba(179,136,255,0.5);
  }
  #controls button.active{
    background:rgba(179,136,255,0.25);
    color:#fff;
    border-color:var(--violet);
    box-shadow:0 0 18px rgba(179,136,255,0.6);
  }
  #controls button.gold{
    border-color:rgba(245,200,96,0.4);
    color:var(--gold);
  }
  #controls button.gold:hover,
  #controls button.gold.active{
    background:rgba(245,200,96,0.15);
    border-color:var(--gold);
    color:#fff;
    box-shadow:0 0 14px rgba(245,200,96,0.6);
  }
  #controls button.pink{
    border-color:rgba(255,119,187,0.4);
    color:var(--pink);
  }
  #controls button.pink:hover,
  #controls button.pink.active{
    background:rgba(255,119,187,0.15);
    border-color:var(--pink);
    color:#fff;
    box-shadow:0 0 14px rgba(255,119,187,0.6);
  }
  #controls .sep{
    width:1px; height:20px;
    background:var(--line);
    margin:0 4px;
  }
  #controls .lbl{
    color:#6a5a8a; font-size:9px; letter-spacing:2px;
  }
  #controls input[type=range]{
    -webkit-appearance:none; appearance:none;
    width:80px; height:3px;
    background:linear-gradient(90deg,var(--violet),var(--gold));
    border-radius:2px; outline:none;
  }
  #controls input[type=range]::-webkit-slider-thumb{
    -webkit-appearance:none;
    width:14px; height:14px; border-radius:50%;
    background:#fff;
    border:2px solid var(--violet);
    box-shadow:0 0 10px var(--violet);
    cursor:pointer;
  }

  /* ── FABLE LOG ──────────────────────────────── */
  #logBox{
    position:absolute; bottom:14px; left:14px;
    max-width:340px; max-height:120px;
    padding:8px 14px;
    background:rgba(10,6,22,0.75);
    border:1px solid var(--line);
    border-left:2px solid var(--gold);
    border-radius:6px;
    font-family:var(--serif);
    font-size:11px;
    line-height:1.55;
    color:#e0d0f0;
    overflow-y:auto;
    font-style:italic;
    z-index:8;
    pointer-events:none;
  }
  #logBox .time{
    color:#5a4a7a;
    font-family:'Consolas',monospace;
    font-style:normal;
    font-size:8.5px;
    margin-right:6px;
  }
  #logBox .fable{ color:#ffb0d8; }
  #logBox .pact{ color:#f5c860; }
  #logBox .djinn{ color:#b388ff; }
  #logBox .transform{ color:#8cf0d0; }

  /* ── DJINN SIGHTING ─────────────────────────── */
  #djinnMarker{
    position:absolute;
    top:18px; right:18px;
    padding:8px 14px;
    background:rgba(10,6,22,0.75);
    border:1px solid rgba(179,136,255,0.35);
    border-radius:8px;
    font-family:var(--serif);
    font-size:11px;
    color:#b388ff;
    letter-spacing:3px;
    opacity:0;
    transition:opacity .6s;
    z-index:9;
    pointer-events:none;
    text-shadow:0 0 12px rgba(179,136,255,0.8);
  }
  #djinnMarker.show{ opacity:1; }

  /* ── SEAL BADGE (oben links) ────────────────── */
  #sealBadge{
    position:absolute;
    top:18px; left:18px;
    font-family:var(--serif);
    font-size:11px;
    letter-spacing:6px;
    color:rgba(245,200,96,0.55);
    text-transform:uppercase;
    z-index:8;
    pointer-events:none;
    text-align:center;
  }
  #sealBadge .kanji{ font-size:32px; display:block; line-height:1; }
  #sealBadge .sub{ font-size:8px; letter-spacing:4px; margin-top:4px; font-family:'Consolas',monospace; }

  @media(max-width:720px){
    header h1{font-size:12px;}
    #controls{padding:6px 10px; gap:4px;}
    #controls button{padding:5px 9px; font-size:9px; letter-spacing:1px;}
    #logBox{max-width:220px; font-size:10px;}
    #offerOverlay{min-width:280px; padding:20px 22px;}
    #offerOverlay .kanji{font-size:40px;}
    #offerOverlay .title{font-size:13px;}
    #offerOverlay .body{font-size:11.5px;}
    #sealBadge{font-size:9px;}
    #sealBadge .kanji{font-size:24px;}
  }
</style>
</head>
<body>

<header>
  <h1>⚛️ ZaM · GATE
    <small>iki1uc · 門 · 契約 · 転生</small>
    <span class="tag">PACT</span>
  </h1>
  <div class="stats">
    <span>KlicK <b class="v-gold" id="sKlick">0</b></span>
    <span>ZacK <b class="v-gold" id="sZack">0</b></span>
    <span>Score <b class="v-violet" id="sScore">0</b></span>
    <span>Offers <b class="v-pink" id="sOffers">0</b></span>
    <span>Gates <b class="v-rose" id="sGates">0</b></span>
    <span>Pacts <b class="v-rose" id="sPacts">0</b></span>
    <span id="sClock" style="color:#4a3a6a;">⏱️ --:--</span>
  </div>
</header>

<div id="stage">
  <canvas id="gateCanvas"></canvas>

  <!-- ZaM-Siegel -->
  <div id="sealBadge">
    <span class="kanji">門</span>
    <span class="sub">ZaM · GATE</span>
  </div>

  <!-- Djinn-Anzeige -->
  <div id="djinnMarker">幻 · DJINN</div>

  <!-- Offer-Contract -->
  <div id="offerOverlay">
    <div class="kanji" id="ofKanji">門</div>
    <div class="seal" id="ofSeal">— PACT OFFER —</div>
    <div class="title" id="ofTitle">ZaM bietet dir ein Angebot</div>
    <div class="body" id="ofBody">
      Werde <span class="hl">Würfel</span> · <span class="hl">Pyramide</span> · <span class="hl-p">Gate</span><br>
      und dein Nano wird Teil der Ordnung.
    </div>
    <div class="stamp" id="ofStamp">автоматически akzeptiert · in 3 … 2 … 1</div>
    <div class="accept-bar"><div class="fill" id="ofAcceptBar"></div></div>
  </div>

  <!-- Fabel-Log -->
  <div id="logBox">
    <div><span class="time">[init]</span><span class="pact">⚛️ ZaM · GATE geladen — das Tor wartet.</span></div>
  </div>
</div>

<div id="controls">
  <button id="btnOffer" class="gold">⚛️ Offer</button>
  <button id="btnAuto" class="active">⏸ AUTO</button>
  <button id="btnDjinn">幻 DJINN</button>
  <button id="btnBurst" class="pink">💥 BURST</button>
  <span class="sep"></span>
  <span class="lbl">RATE</span>
  <input type="range" id="rate" min="1" max="10" value="5">
  <span class="sep"></span>
  <button id="btnReset">⟲ Reset</button>
</div>

<script>
"use strict";
// ═══════════════════════════════════════════════════════════════════
// ⚛️ ZaM · GATE · OFFER · PACT
// Das 2.-schönste Atmosphäre-System nach KlicK.
// Jedes Nano-Atom bekommt ein Angebot, das es nicht ablehnen kann:
// Werde Würfel, Pyramide oder Gate → ZaM-Ausschüttung als Fabel.
// ═══════════════════════════════════════════════════════════════════

// ─── KOMPAT-LAYER (identisch zu KLICK / MAINBOARD) ─────────────
const MASTER_KEY='iki1uc-master-respo';
const BC_NAME='iki1uc-orbit';
let masterChannel=null, isMasterConnected=false;

const localMaster={
  stations:{}, klick:0, zack:0, zam:'idle',
  zoll:'offen',
  me2:{allow:true,boost:false,slow:false,override:false},
  score:0, lastUpdate:Date.now()
};
try{
  const s=localStorage.getItem(MASTER_KEY);
  if(s) Object.assign(localMaster,JSON.parse(s));
}catch(_){}
try{
  masterChannel=new BroadcastChannel(BC_NAME);
  masterChannel.onmessage=(ev)=>{
    const d=ev.data; if(!d||!d.type) return;
    if(d.type==='master:state'&&d.payload){Object.assign(localMaster,d.payload);isMasterConnected=true;updateStats();}
    if(d.type==='me2:rule'&&d.payload){Object.assign(localMaster.me2,d.payload);updateStats();}
    if(d.type==='klick:step'&&d.payload){
      localMaster.klick=d.payload.klick??localMaster.klick;
      // Ein KlicK-Teilchen aus dem Hauptsystem einfliegen lassen
      spawnForeignParticle(d.payload.klick);
      updateStats();
    }
    if(d.type==='klick:zack'&&d.payload){
      localMaster.zack=d.payload.zack??localMaster.zack;
      updateStats();
    }
    if(d.type==='mainboard:done'&&d.payload){
      log(`📊 MAINBOARD meldet: Kompat ${d.payload.compat?.toFixed(0)??'?'}% · das Tor versteht.`,'pact');
    }
  };
}catch(_){}
function persistMaster(){try{localStorage.setItem(MASTER_KEY,JSON.stringify(localMaster));}catch(_){}}
function sendToMaster(type,payload){
  localMaster.lastUpdate=Date.now(); persistMaster();
  if(masterChannel){try{masterChannel.postMessage({type,from:'ZAM-GATE',payload,ts:Date.now()});}catch(_){}}
}

// ─── KANJI & FABELN ────────────────────────────────────────────
const OFFER_KANJI=['門','方','山','円','角','卦'];
const DJINN_KANJI=['幻','霊','夢','影'];

const OFFER_FABELN=[
  'Es war einmal ein Nano, das nicht wusste, wohin. Da kam das Tor und sagte: „Werde.“',
  'Ein Tropfen fiel in die Tiefe der Pyramide — und fand den Würfel darin.',
  'Niemand sah den Pakt. Aber als der Morgen kam, war das Nano ein Gate geworden.',
  'In der Nacht der sieben Ringe sprach ZaM: „Vertrau mir, kleiner Funke.“',
  'Das Nano zögerte. Dann drehte es sich — und wurde zur heiligen Zahl.',
  'So spricht das Tor: „Ich gebe dir eine Form, und du gibst mir deinen Weg.“',
  'Ein Auge sah zu. Eine Hand schrieb. Das Nano wurde still — und dann Form.',
];

const PAYOUT_FABELN=[
  'Und so ward ZacK geboren — aus dem Atem eines Pakts.',
  'Das Tor schloss sich. Zurück blieb Gold auf dem Boden der Nacht.',
  'Sie sagen, in dieser Stunde wurde ein Stern neu gezählt.',
  'Der Pakt wurde erfüllt. Die Form sank — und hinterließ Spuren aus Licht.',
  'Als das Auge sich schloss, war das Nano nicht mehr Nano. Es war Zeichen.',
  'Und so steht es geschrieben: Wer durch das Tor geht, wird nicht mehr, wer er war.',
];

function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

// ─── STATE ─────────────────────────────────────────────────────
const CFG={
  maxParticles:80,
  spiralSpeed:0.006,
  offerDuration:2200,
  transformDuration:1800,
  payoutValue:{ CUBE:3, PYRAMID:5, GATE:8 },
  payoutScore:{ CUBE:81, PYRAMID:145, GATE:243 },
  djinnChance:0.12,
};

const S={
  klick:localMaster.klick||0,
  zack:localMaster.zack||0,
  score:localMaster.score||0,
  offers:0,
  gates:0,
  pacts:0,
  auto:true,
  rate:5,
  djinnOn:true,
  djinnPresent:false,
  djinnTimer:0,
  tick:0,
  // Visuals
  particles:[],        // Nano-Atome fliegen ein
  transforms:[],       // Cube/Pyramid/Gate schweben auf
  sparks:[],           // Gold-Bursts
  runes:[],            // Die 3 Rune-Ringe
  offerActive:false,
  offerData:null,
  offerProgress:0,
  screenFlash:0,
  screenShake:0,
  nebula:[],
};

// ─── CANVAS ────────────────────────────────────────────────────
const cv=document.getElementById('gateCanvas');
const ctx=cv.getContext('2d');
let W,H,CX,CY,R,DPR;

function resize(){
  const r=cv.parentElement.getBoundingClientRect();
  DPR=window.devicePixelRatio||1;
  W=r.width; H=r.height;
  cv.width=W*DPR; cv.height=H*DPR;
  cv.style.width=W+'px'; cv.style.height=H+'px';
  ctx.setTransform(DPR,0,0,DPR,0,0);
  CX=W/2; CY=H/2;
  R=Math.min(W,H)*0.22;
}
window.addEventListener('resize',resize);
if(window.ResizeObserver) new ResizeObserver(resize).observe(cv.parentElement);

// ─── 1. STERNE + NEBULA ───────────────────────────────────────
function initCosmos(){
  S.nebula=[];
  for(let i=0;i<6;i++){
    S.nebula.push({
      x:Math.random()*W, y:Math.random()*H,
      r:150+Math.random()*300,
      hue:270+Math.random()*40,
      alpha:0.04+Math.random()*0.05,
      drift:(Math.random()-0.5)*0.15,
      phase:Math.random()*Math.PI*2,
    });
  }
}
const STARS=[];
function initStars(){
  STARS.length=0;
  const n=Math.floor((W*H)/6000);
  for(let i=0;i<n;i++){
    STARS.push({
      x:Math.random()*W, y:Math.random()*H,
      size:0.4+Math.random()*1.4,
      twinkle:Math.random()*Math.PI*2,
      speed:0.01+Math.random()*0.03,
      hue:220+Math.random()*100,
    });
  }
}

// ─── 2. DIE 3 RUNEN-RINGE ─────────────────────────────────────
const RUNE_SETS={
  CUBE:    ['▢','◇','□','⬚'],
  PYRAMID: ['△','▲','△','◮'],
  GATE:    ['◯','◎','◉','○'],
};
function initRunes(){
  S.runes=[
    {name:'CUBE',    radius:1.6, speed: 0.003, count:8,  rot:0, color:'#b388ff', glyphs:RUNE_SETS.CUBE},
    {name:'PYRAMID', radius:1.9, speed:-0.004, count:10, rot:0, color:'#ff77bb', glyphs:RUNE_SETS.PYRAMID},
    {name:'GATE',    radius:2.25,speed: 0.002, count:12, rot:0, color:'#f5c860', glyphs:RUNE_SETS.GATE},
  ];
}

// ─── 3. NANO-PARTIKEL ─────────────────────────────────────────
function spawnNano(){
  if(S.particles.length>=CFG.maxParticles) return;
  const a=Math.random()*Math.PI*2;
  const dist=Math.max(W,H)*0.75+Math.random()*200;
  S.particles.push({
    x:CX+Math.cos(a)*dist,
    y:CY+Math.sin(a)*dist,
    a,               // spiral angle
    r:dist,          // spiral radius
    va:(Math.random()<0.5?-1:1)*(0.006+Math.random()*0.008),
    vr:-1.6-Math.random()*1.4,  // speed inward
    hue:260+Math.random()*40,
    size:1.6+Math.random()*2.2,
    life:0,
    trail:[],
    kind: Math.random()<0.15 ? 'foreign' : 'native',
    // welches Angebot?
    offer: ['CUBE','PYRAMID','GATE'][Math.floor(Math.random()*3)],
  });
}

function spawnForeignParticle(klickVal){
  // Ein KlicK aus dem Hauptsystem kommt einfliegen
  const a=Math.random()*Math.PI*2;
  const dist=Math.max(W,H)*0.85;
  S.particles.push({
    x:CX+Math.cos(a)*dist,
    y:CY+Math.sin(a)*dist,
    a, r:dist,
    va:(Math.random()<0.5?-1:1)*(0.010),
    vr:-2.4-Math.random(),
    hue:40+Math.random()*20,  // gold
    size:2.6,
    life:0,
    trail:[],
    kind:'foreign',
    offer:['CUBE','PYRAMID','GATE'][Math.floor(Math.random()*3)],
  });
}

// ─── 4. OFFER ────────────────────────────────────────────────
let offerTimer=null, offerAcceptTimer=null;
function triggerOffer(nano){
  if(S.offerActive) return;
  S.offerActive=true;
  S.offerData={
    shape:nano.offer,
    kanji: OFFER_KANJI[Math.floor(Math.random()*OFFER_KANJI.length)],
    fabel: pick(OFFER_FABELN),
    djinnInfluenced: S.djinnPresent,
    sourceKind: nano.kind,
  };
  S.offers++;
  S.offerProgress=0;

  // Overlay füllen
  const overlay=document.getElementById('offerOverlay');
  document.getElementById('ofKanji').textContent=S.offerData.kanji;
  document.getElementById('ofSeal').textContent=S.offerData.djinnInfluenced
    ? '— DJINN PACT OFFER —'
    : '— ZaM OFFER —';
  document.getElementById('ofTitle').textContent=
    S.offerData.shape==='CUBE'    ? 'Werde Würfel' :
    S.offerData.shape==='PYRAMID' ? 'Werde Pyramide' :
                                    'Werde Gate';
  document.getElementById('ofBody').innerHTML=
    `${S.offerData.fabel.replace(/</g,'&lt;')}<br><br>` +
    `Wähle: <span class="hl">${S.offerData.shape}</span> · ` +
    `<span class="hl-p">ZacK +${CFG.payoutValue[S.offerData.shape]}</span>`;
  document.getElementById('ofStamp').textContent=
    'автоматически akzeptiert · in 3 … 2 … 1';

  overlay.classList.add('show');
  log(`⚛️ ZaM Offer → ${S.offerData.shape}`,'pact');

  // Accept-Bar füllen
  const fill=document.getElementById('ofAcceptBar');
  fill.style.width='0%';
  const t0=performance.now();
  const dur=CFG.offerDuration;
  function tickOffer(now){
    const t=(now-t0)/dur;
    S.offerProgress=Math.min(1,t);
    fill.style.width=(t*100)+'%';
    if(t<1 && S.offerActive){
      offerTimer=requestAnimationFrame(tickOffer);
    }
  }
  offerTimer=requestAnimationFrame(tickOffer);

  offerAcceptTimer=setTimeout(()=>{
    acceptOffer();
  }, dur);
}

function acceptOffer(){
  if(!S.offerActive||!S.offerData) return;
  const data=S.offerData;
  S.offerActive=false;
  document.getElementById('offerOverlay').classList.remove('show');

  // Pakt schließen
  S.pacts++;
  S.gates++;
  const shape=data.shape;
  const zac = CFG.payoutValue[shape] * (data.djinnInfluenced?2:1);
  const sc  = CFG.payoutScore[shape] * (data.djinnInfluenced?1.5:1);
  S.zack += zac;
  S.score += sc;

  // Transform-Objekt spawnen
  S.transforms.push({
    shape,
    x:CX+(Math.random()-0.5)*R*0.5,
    y:CY+(Math.random()-0.5)*R*0.5,
    rot:0,
    scale:0.2,
    alpha:1,
    life:0,
    maxLife:CFG.transformDuration,
    color: shape==='CUBE'?    '#b388ff' :
           shape==='PYRAMID'? '#ff77bb' : '#f5c860',
    riseY:0,
    kanji: data.kanji,
  });

  // Gold-Burst
  const burstCount= shape==='CUBE'? 30 : shape==='PYRAMID'? 50 : 80;
  for(let i=0;i<burstCount;i++) spawnSpark(
    CX+(Math.random()-0.5)*R,
    CY+(Math.random()-0.5)*R,
    shape==='GATE'?'#f5c860':'#ffb0d8'
  );

  S.screenFlash=0.7;
  S.screenShake=shape==='GATE'?10:5;

  log(`✨ Pakt: ${shape} · ZacK +${zac} · Score +${Math.round(sc)}`,'fable');
  log(`   „${pick(PAYOUT_FABELN)}“`,'fable');

  // An Master melden
  sendToMaster('klick:zack',{zack:S.zack,fromShape:shape,pact:true});
  sendToMaster('zam:pact',{shape,zac,score:Math.round(sc),ts:Date.now()});

  localMaster.zack=S.zack;
  localMaster.score=S.score;
  localMaster.klick=S.klick;
  persistMaster();
  updateStats();
}

// ─── 5. TRANSFORM (Cube / Pyramid / Gate) ────────────────────
function drawTransform(t){
  const lifeRatio=t.life/t.maxLife;
  const alpha = 1 - Math.pow(lifeRatio,2);
  const scale = t.scale + lifeRatio*0.8;
  const y = t.y - t.riseY;
  const s = R*0.35*scale;

  ctx.save();
  ctx.globalAlpha=alpha;
  ctx.strokeStyle=t.color;
  ctx.lineWidth=2;
  ctx.shadowColor=t.color;
  ctx.shadowBlur=18;

  if(t.shape==='CUBE'){
    drawCube(y,s,t.rot,t.color);
  } else if(t.shape==='PYRAMID'){
    drawPyramid(y,s,t.rot,t.color);
  } else {
    drawGate(y,s,t.rot,t.color);
  }

  ctx.shadowBlur=0;
  ctx.restore();
}

function drawCube(cy, s, rot, color){
  // Würfel – 8 Punkte Projektion, 12 Kanten
  const R3=s*0.7;
  const pts3D=[
    [-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],
    [-1,-1, 1],[1,-1, 1],[1,1, 1],[-1,1, 1],
  ];
  const cos=Math.cos(rot), sin=Math.sin(rot);
  const pts=pts3D.map(([x,y,z])=>{
    const x2=x*cos-z*sin;
    const z2=x*sin+z*cos;
    // einfache Perspektive
    const p=3/(3+z2);
    return [CX+x2*R3*p, cy+y*R3*p];
  });
  const edges=[
    [0,1],[1,2],[2,3],[3,0],
    [4,5],[5,6],[6,7],[7,4],
    [0,4],[1,5],[2,6],[3,7],
  ];
  ctx.strokeStyle=color;
  edges.forEach(([a,b])=>{
    ctx.beginPath();
    ctx.moveTo(pts[a][0],pts[a][1]);
    ctx.lineTo(pts[b][0],pts[b][1]);
    ctx.stroke();
  });
  // Punkte
  ctx.fillStyle=color;
  pts.forEach(([x,y])=>{
    ctx.beginPath(); ctx.arc(x,y,2,0,Math.PI*2); ctx.fill();
  });
}

function drawPyramid(cy, s, rot, color){
  // Pyramide – 5 Punkte, 8 Kanten
  const R3=s;
  const apex=[0,-1.15,0];
  const base=[
    [-1,0.5,-1],[1,0.5,-1],[1,0.5,1],[-1,0.5,1],
  ];
  const cos=Math.cos(rot), sin=Math.sin(rot);
  function project([x,y,z]){
    const x2=x*cos-z*sin;
    const z2=x*sin+z*cos;
    const p=3/(3+z2);
    return [CX+x2*R3*p, cy+y*R3*p];
  }
  const pa=project(apex);
  const pb=base.map(project);
  const edges=[
    [pa,pb[0]],[pa,pb[1]],[pa,pb[2]],[pa,pb[3]],
    [pb[0],pb[1]],[pb[1],pb[2]],[pb[2],pb[3]],[pb[3],pb[0]],
  ];
  ctx.strokeStyle=color;
  edges.forEach(([a,b])=>{
    ctx.beginPath();
    ctx.moveTo(a[0],a[1]); ctx.lineTo(b[0],b[1]);
    ctx.stroke();
  });
  ctx.fillStyle=color;
  [pa,...pb].forEach(([x,y])=>{
    ctx.beginPath(); ctx.arc(x,y,2,0,Math.PI*2); ctx.fill();
  });
}

function drawGate(cy, s, rot, color){
  // Tor – Ellipse (Perspektive als Ring)
  ctx.save();
  ctx.translate(CX, cy);
  ctx.rotate(rot*0.3);
  for(let i=0;i<3;i++){
    ctx.beginPath();
    ctx.ellipse(0,0, s*(1-i*0.15), s*(0.55-i*0.08), 0, 0, Math.PI*2);
    ctx.strokeStyle=color;
    ctx.lineWidth=2-i*0.4;
    ctx.stroke();
  }
  // Innerer Lichtkern
  const g=ctx.createRadialGradient(0,0,0,0,0,s*0.6);
  g.addColorStop(0, color+'cc');
  g.addColorStop(1, color+'00');
  ctx.fillStyle=g;
  ctx.beginPath(); ctx.arc(0,0,s*0.5,0,Math.PI*2); ctx.fill();
  ctx.restore();
}

// ─── 6. SPARK (Gold-Burst) ───────────────────────────────────
function spawnSpark(x,y,color){
  const a=Math.random()*Math.PI*2;
  const sp=1+Math.random()*4;
  S.sparks.push({
    x,y,
    vx:Math.cos(a)*sp, vy:Math.sin(a)*sp,
    life:0, maxLife:30+Math.random()*40,
    color: color || '#f5c860',
    size:0.8+Math.random()*1.6,
  });
}

// ─── 7. DJINN (tmp-rär) ──────────────────────────────────────
const djinn={
  x:0, y:0, targetX:0, targetY:0,
  alpha:0, targetAlpha:0,
  eyes:[{x:-8,y:-4},{x:8,y:-4}],
  phase:0,
  kanji:pick(DJINN_KANJI),
  nextMove:0,
};

function updateDjinn(dt){
  if(!S.djinnOn){
    djinn.targetAlpha=0;
  } else {
    S.djinnTimer += dt;
    // erscheint etwa alle 6-12 Sek
    if(S.djinnTimer > 6000+Math.random()*6000){
      if(!S.djinnPresent && Math.random()<CFG.djinnChance*4){
        S.djinnPresent=true;
        djinn.targetAlpha=0.5+Math.random()*0.3;
        djinn.targetX=W*0.15+Math.random()*W*0.7;
        djinn.targetY=H*0.2+Math.random()*H*0.6;
        djinn.kanji=pick(DJINN_KANJI);
        showDjinnMarker(true);
        log(`👁️ Ein Djinn zieht vorbei — ${djinn.kanji}`,'djinn');
      }
      S.djinnTimer=0;
    }
    // Bleibt 3-5 Sek sichtbar, dann weg
    if(S.djinnPresent && Math.random()<0.001){
      S.djinnPresent=false;
      djinn.targetAlpha=0;
      showDjinnMarker(false);
    }
  }
  // Smooth movement
  djinn.x += (djinn.targetX-djinn.x)*0.02;
  djinn.y += (djinn.targetY-djinn.y)*0.02;
  djinn.alpha += (djinn.targetAlpha-djinn.alpha)*0.05;
  djinn.phase += 0.02;

  // Zufällige Alpha-Schwankung (wie ein Traum)
  if(djinn.alpha>0.05){
    djinn.alpha += Math.sin(djinn.phase*3)*0.008;
  }
}

function showDjinnMarker(on){
  document.getElementById('djinnMarker').classList.toggle('show',on);
}

function drawDjinn(){
  if(djinn.alpha<0.02) return;
  const a=djinn.alpha;
  ctx.save();
  ctx.globalAlpha=a;

  // Wisp / Smoke
  const g=ctx.createRadialGradient(djinn.x,djinn.y,0,djinn.x,djinn.y,60);
  g.addColorStop(0,'rgba(179,136,255,0.55)');
  g.addColorStop(0.4,'rgba(122,63,224,0.25)');
  g.addColorStop(1,'rgba(122,63,224,0)');
  ctx.fillStyle=g;
  ctx.beginPath(); ctx.arc(djinn.x,djinn.y,60,0,Math.PI*2); ctx.fill();

  // Wirbel
  for(let i=0;i<4;i++){
    ctx.beginPath();
    const r=22+i*6;
    const off=Math.sin(djinn.phase+i)*4;
    ctx.arc(djinn.x+off, djinn.y+off*0.5, r, 0, Math.PI*1.6);
    ctx.strokeStyle=`rgba(179,136,255,${0.18-i*0.03})`;
    ctx.lineWidth=1;
    ctx.stroke();
  }

  // Augen
  djinn.eyes.forEach(e=>{
    ctx.beginPath();
    ctx.arc(djinn.x+e.x, djinn.y+e.y, 2.2, 0, Math.PI*2);
    ctx.fillStyle='#f5c860';
    ctx.shadowColor='#f5c860';
    ctx.shadowBlur=8;
    ctx.fill();
    ctx.shadowBlur=0;
  });

  // Kanji
  ctx.font='bold 16px "Yu Mincho","Hiragino Mincho ProN",serif';
  ctx.fillStyle='rgba(245,200,96,0.55)';
  ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillText(djinn.kanji, djinn.x, djinn.y-32);

  ctx.restore();
}

// ─── 8. ZEICHNEN ─────────────────────────────────────────────
function draw(){
  // Screen-Shake
  const sx=(Math.random()-0.5)*S.screenShake;
  const sy=(Math.random()-0.5)*S.screenShake;
  ctx.save();
  ctx.translate(sx,sy);

  // Hintergrund
  const bg=ctx.createRadialGradient(CX,CY*0.85,0,CX,CY,Math.max(W,H)*0.9);
  bg.addColorStop(0,'#1a0838');
  bg.addColorStop(0.5,'#0a0616');
  bg.addColorStop(1,'#050308');
  ctx.fillStyle=bg;
  ctx.fillRect(-20,-20,W+40,H+40);

  // Nebula
  S.nebula.forEach(n=>{
    const x=n.x + Math.sin(S.tick*0.002+n.phase)*30;
    const y=n.y + Math.cos(S.tick*0.0015+n.phase)*20;
    const g=ctx.createRadialGradient(x,y,0,x,y,n.r);
    g.addColorStop(0,`hsla(${n.hue},70%,50%,${n.alpha})`);
    g.addColorStop(1,`hsla(${n.hue},70%,50%,0)`);
    ctx.fillStyle=g;
    ctx.beginPath(); ctx.arc(x,y,n.r,0,Math.PI*2); ctx.fill();
  });

  // Sterne
  STARS.forEach(s=>{
    const tw=0.5+0.5*Math.sin(S.tick*s.speed+s.twinkle);
    ctx.fillStyle=`hsla(${s.hue},60%,90%,${0.35+tw*0.55})`;
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.size*tw,0,Math.PI*2);
    ctx.fill();
  });

  // ── GATE ──
  drawGateCore();

  // ── RUNEN-RINGE ──
  S.runes.forEach(ring=>{
    drawRuneRing(ring);
  });

  // ── NANO-PARTIKEL ──
  S.particles.forEach(p=>{
    drawNanoParticle(p);
  });

  // ── TRANSFORMS ──
  S.transforms.forEach(t=>drawTransform(t));

  // ── SPARKS ──
  S.sparks.forEach(s=>{
    const a=1-s.life/s.maxLife;
    ctx.fillStyle=s.color;
    ctx.globalAlpha=a;
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.size*(0.5+a*0.5),0,Math.PI*2);
    ctx.fill();
    ctx.globalAlpha=1;
  });

  // ── DJINN ──
  drawDjinn();

  ctx.restore();

  // Flash
  if(S.screenFlash>0.01){
    ctx.fillStyle=`rgba(245,200,96,${S.screenFlash*0.35})`;
    ctx.fillRect(0,0,W,H);
  }
}

function drawGateCore(){
  const pulse=1+0.08*Math.sin(S.tick*0.05);
  const gr=R*pulse;

  // Äußerer Glow
  const g=ctx.createRadialGradient(CX,CY,0,CX,CY,gr*2.2);
  g.addColorStop(0,'rgba(179,136,255,0.55)');
  g.addColorStop(0.4,'rgba(122,63,224,0.25)');
  g.addColorStop(1,'rgba(122,63,224,0)');
  ctx.fillStyle=g;
  ctx.beginPath(); ctx.arc(CX,CY,gr*2.2,0,Math.PI*2); ctx.fill();

  // Heilige Geometrie: rotierender Diamant/Rhombus (4 Linien)
  const rot=S.tick*0.008;
  ctx.save();
  ctx.translate(CX,CY);
  ctx.rotate(rot);
  ctx.strokeStyle='rgba(245,200,96,0.85)';
  ctx.lineWidth=2;
  ctx.shadowColor='#f5c860';
  ctx.shadowBlur=20;
  const dr=gr*1.4;
  ctx.beginPath();
  ctx.moveTo(0,-dr);
  ctx.lineTo(dr*0.7,0);
  ctx.lineTo(0,dr);
  ctx.lineTo(-dr*0.7,0);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();

  // Zweiter Diamant gegenläufig
  ctx.save();
  ctx.translate(CX,CY);
  ctx.rotate(-rot*1.4);
  ctx.strokeStyle='rgba(255,119,187,0.7)';
  ctx.lineWidth=1.4;
  ctx.shadowColor='#ff77bb';
  ctx.shadowBlur=14;
  const dr2=gr*0.85;
  ctx.beginPath();
  ctx.moveTo(0,-dr2);
  ctx.lineTo(dr2*0.7,0);
  ctx.lineTo(0,dr2);
  ctx.lineTo(-dr2*0.7,0);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();

  // Innerer Lichtkern
  const core=ctx.createRadialGradient(CX,CY,0,CX,CY,gr*0.6);
  core.addColorStop(0,'rgba(255,233,160,0.9)');
  core.addColorStop(0.4,'rgba(179,136,255,0.55)');
  core.addColorStop(1,'rgba(122,63,224,0)');
  ctx.fillStyle=core;
  ctx.beginPath(); ctx.arc(CX,CY,gr*0.6,0,Math.PI*2); ctx.fill();

  // Zentralkanji
  const idx=Math.floor(S.tick/120)%OFFER_KANJI.length;
  ctx.save();
  ctx.fillStyle='rgba(10,6,22,0.85)';
  ctx.font=`bold ${gr*0.9}px "Yu Mincho","Hiragino Mincho ProN",serif`;
  ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillText(OFFER_KANJI[idx],CX,CY);
  ctx.restore();
}

function drawRuneRing(ring){
  ring.rot += ring.speed;
  const rad=R*ring.radius;
  // Ring selbst
  ctx.beginPath();
  ctx.arc(CX,CY,rad,0,Math.PI*2);
  ctx.strokeStyle=`${ring.color}22`;
  ctx.lineWidth=1;
  ctx.stroke();

  // Runen
  for(let i=0;i<ring.count;i++){
    const a=(i/ring.count)*Math.PI*2 + ring.rot;
    const x=CX+Math.cos(a)*rad;
    const y=CY+Math.sin(a)*rad;
    const glyph=ring.glyphs[i%ring.glyphs.length];
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(a+Math.PI/2);
    ctx.fillStyle=ring.color;
    ctx.globalAlpha=0.65;
    ctx.font=`${10+Math.random()*0.5}px Consolas`;
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.shadowColor=ring.color;
    ctx.shadowBlur=8;
    ctx.fillText(glyph,0,0);
    ctx.restore();
  }
}

function drawNanoParticle(p){
  const x=p.x, y=p.y;

  // Trail
  p.trail.forEach((t,i)=>{
    const a=(i/p.trail.length)*0.4;
    ctx.fillStyle=`hsla(${p.hue},80%,70%,${a})`;
    ctx.beginPath();
    ctx.arc(t.x,t.y,p.size*(i/p.trail.length)*0.7,0,Math.PI*2);
    ctx.fill();
  });

  // Glow
  const g=ctx.createRadialGradient(x,y,0,x,y,p.size*5);
  g.addColorStop(0,`hsla(${p.hue},90%,80%,0.9)`);
  g.addColorStop(0.5,`hsla(${p.hue},90%,60%,0.35)`);
  g.addColorStop(1,`hsla(${p.hue},90%,60%,0)`);
  ctx.fillStyle=g;
  ctx.beginPath(); ctx.arc(x,y,p.size*5,0,Math.PI*2); ctx.fill();

  // Körper
  ctx.beginPath();
  ctx.arc(x,y,p.size,0,Math.PI*2);
  ctx.fillStyle=`hsl(${p.hue},90%,80%)`;
  ctx.shadowColor=`hsl(${p.hue},90%,60%)`;
  ctx.shadowBlur=10;
  ctx.fill();
  ctx.shadowBlur=0;

  // Fremd-Partikel (KlicK) bekommen ein Gold-Kreuz
  if(p.kind==='foreign'){
    ctx.strokeStyle='#f5c860';
    ctx.lineWidth=1.2;
    ctx.beginPath();
    ctx.moveTo(x-4,y); ctx.lineTo(x+4,y);
    ctx.moveTo(x,y-4); ctx.lineTo(x,y+4);
    ctx.stroke();
  }
}

// ─── UPDATE ────────────────────────────────────────────────────
function updateParticles(dt){
  for(let i=S.particles.length-1;i>=0;i--){
    const p=S.particles[i];
    // spiralförmig zum Gate
    p.a += p.va*(dt/16);
    p.r += p.vr*(dt/16);
    p.x=CX+Math.cos(p.a)*p.r;
    p.y=CY+Math.sin(p.a)*p.r;
    p.life++;

    // Trail
    p.trail.push({x:p.x,y:p.y});
    if(p.trail.length>8) p.trail.shift();

    // Am Gate angekommen → Offer
    if(p.r < R*0.9){
      // Partikel entfernen
      S.particles.splice(i,1);
      // Offer triggern (nur wenn keiner läuft)
      if(!S.offerActive){
        triggerOffer(p);
      } else {
        // kleiner Burst ohne Offer
        for(let k=0;k<6;k++) spawnSpark(p.x,p.y,'#ffb0d8');
      }
    }
    if(p.life>600) S.particles.splice(i,1);
  }
}

function updateTransforms(dt){
  for(let i=S.transforms.length-1;i>=0;i--){
    const t=S.transforms[i];
    t.rot += 0.02;
    t.life += dt;
    t.scale += 0.001*(dt/16);
    t.riseY += 0.35*(dt/16);
    if(t.life>t.maxLife) S.transforms.splice(i,1);
  }
}

function updateSparks(dt){
  for(let i=S.sparks.length-1;i>=0;i--){
    const s=S.sparks[i];
    s.x += s.vx*(dt/16);
    s.y += s.vy*(dt/16);
    s.vx *= 0.96;
    s.vy *= 0.96;
    s.vy += 0.03*(dt/16);
    s.life++;
    if(s.life>s.maxLife) S.sparks.splice(i,1);
  }
}

function updateFlashes(dt){
  S.screenFlash *= 0.9;
  if(S.screenFlash<0.02) S.screenFlash=0;
  S.screenShake *= 0.88;
  if(S.screenShake<0.3) S.screenShake=0;
}

// ─── LOOP ─────────────────────────────────────────────────────
let lastT=0;
function loop(now){
  const dt=Math.min(48, now-lastT||16);
  lastT=now;
  S.tick++;

  // Auto-Spawn (Nano-Partikel einfliegen lassen)
  if(S.auto){
    const base=700;
    const interval=Math.max(80, base - S.rate*60);
    if(now - (S._lastSpawn||0) > interval){
      S._lastSpawn=now;
      spawnNano();
    }
  }

  updateParticles(dt);
  updateTransforms(dt);
  updateSparks(dt);
  updateFlashes(dt);
  updateDjinn(dt);

  draw();
  requestAnimationFrame(loop);
}

// ─── STATS ────────────────────────────────────────────────────
function updateStats(){
  document.getElementById('sKlick').textContent=S.klick;
  document.getElementById('sZack').textContent=S.zack;
  document.getElementById('sScore').textContent=S.score;
  document.getElementById('sOffers').textContent=S.offers;
  document.getElementById('sGates').textContent=S.gates;
  document.getElementById('sPacts').textContent=S.pacts;
  localMaster.klick=S.klick;
  localMaster.zack=S.zack;
  localMaster.score=S.score;
}

// ─── LOG (Fabel) ─────────────────────────────────────────────
function log(msg,cls){
  const box=document.getElementById('logBox');
  const entry=document.createElement('div');
  const t=new Date().toLocaleTimeString('de-DE');
  entry.innerHTML=`<span class="time">[${t}]</span><span class="${cls||''}">${msg}</span>`;
  box.appendChild(entry);
  box.scrollTop=box.scrollHeight;
  while(box.children.length>30) box.removeChild(box.firstChild);
}

// ─── BUTTONS ──────────────────────────────────────────────────
document.getElementById('btnOffer').addEventListener('click',()=>{
  // Manuell ein Nano opfern für ein Angebot
  const fake={offer:['CUBE','PYRAMID','GATE'][Math.floor(Math.random()*3)],kind:'native'};
  triggerOffer(fake);
});

document.getElementById('btnAuto').addEventListener('click',(e)=>{
  S.auto=!S.auto;
  e.currentTarget.classList.toggle('active',S.auto);
  e.currentTarget.textContent=(S.auto?'⏸ AUTO':'▶ AUTO');
  log(`AUTO ${S.auto?'an':'aus'}`,'pact');
});

document.getElementById('btnDjinn').addEventListener('click',(e)=>{
  S.djinnOn=!S.djinnOn;
  e.currentTarget.classList.toggle('active',S.djinnOn);
  log(`👁️ DJINN ${S.djinnOn?'lauscht':'schweigt'}`,'djinn');
});

document.getElementById('btnBurst').addEventListener('click',()=>{
  S.screenFlash=1;
  S.screenShake=16;
  for(let i=0;i<100;i++) spawnSpark(
    CX+(Math.random()-0.5)*R*2.5,
    CY+(Math.random()-0.5)*R*2.5,
    Math.random()<0.5?'#f5c860':'#ffb0d8'
  );
  // 3 Objekte gleichzeitig spawnen
  ['CUBE','PYRAMID','GATE'].forEach((shape,i)=>{
    setTimeout(()=>{
      S.transforms.push({
        shape,
        x:CX, y:CY,
        rot:0, scale:0.2, alpha:1,
        life:0, maxLife:CFG.transformDuration,
        color: shape==='CUBE'?'#b388ff':shape==='PYRAMID'?'#ff77bb':'#f5c860',
        riseY:0,
        kanji:pick(OFFER_KANJI),
      });
    }, i*200);
  });
  log('💥 BURST · drei Formen steigen auf','fable');
});

document.getElementById('btnReset').addEventListener('click',()=>{
  S.klick=0; S.zack=0; S.score=0;
  S.offers=0; S.gates=0; S.pacts=0;
  S.particles=[];
  S.transforms=[];
  S.sparks=[];
  localMaster.klick=0; localMaster.zack=0; localMaster.score=0;
  persistMaster(); updateStats();
  log('⟲ Reset · Die Nacht beginnt neu.','pact');
});

document.getElementById('rate').addEventListener('input',(e)=>{
  S.rate=parseInt(e.target.value,10);
});

// ─── CLICK auf Canvas ─────────────────────────────────────────
cv.addEventListener('click',(e)=>{
  const r=cv.getBoundingClientRect();
  const x=e.clientX-r.left, y=e.clientY-r.top;
  for(let i=0;i<15;i++) spawnSpark(x,y,'#f5c860');
  S.screenFlash=Math.max(S.screenFlash,0.3);
});

// ─── KEYBOARD ─────────────────────────────────────────────────
document.addEventListener('keydown',(e)=>{
  if(e.target.tagName==='INPUT') return;
  if(e.key===' '){ e.preventDefault(); document.getElementById('btnOffer').click(); }
  if(e.key==='d'||e.key==='D') document.getElementById('btnDjinn').click();
  if(e.key==='b'||e.key==='B') document.getElementById('btnBurst').click();
  if(e.key==='a'||e.key==='A') document.getElementById('btnAuto').click();
  if(e.key==='r'||e.key==='R') document.getElementById('btnReset').click();
});

// ─── CLOCK ────────────────────────────────────────────────────
function clock(){
  document.getElementById('sClock').textContent='⏱️ '+new Date().toLocaleTimeString('de-DE');
}
setInterval(clock,1000); clock();

// ─── 9. API (ZaM-kompatibel mit iki1uc) ───────────────────────
window.ZaM={
  offer:(shape)=>triggerOffer({offer:shape||'GATE',kind:'native'}),
  burst:()=>document.getElementById('btnBurst').click(),
  djinn:{
    on:()=>{S.djinnOn=true;document.getElementById('btnDjinn').classList.add('active');},
    off:()=>{S.djinnOn=false;document.getElementById('btnDjinn').classList.remove('active');},
    summon:()=>{
      S.djinnPresent=true;
      djinn.targetAlpha=0.7;
      djinn.targetX=W*0.3+Math.random()*W*0.4;
      djinn.targetY=H*0.3+Math.random()*H*0.4;
      showDjinnMarker(true);
      log('👁️ Ein Djinn wird gerufen.','djinn');
    },
  },
  state:()=>({
    klick:S.klick, zack:S.zack, score:S.score,
    offers:S.offers, gates:S.gates, pacts:S.pacts,
    particles:S.particles.length,
    transforms:S.transforms.length,
    djinnPresent:S.djinnPresent,
    auto:S.auto, rate:S.rate,
  }),
  // ZaM-Kompatibilität zu KLICK / MAINBOARD
  zam:{
    run:(steps)=>{
      log(`⚡ ZaM-Sequenz: ${(steps||[]).join(' → ')}`,'pact');
      sendToMaster('zam:run',{sequence:steps,steps});
    },
  },
  // Me2-Kompat
  me2:{
    setRule:(rule)=>{Object.assign(localMaster.me2,rule);sendToMaster('me2:rule',rule);},
    allow:()=>{localMaster.me2.allow=true;updateStats();},
    block:()=>{localMaster.me2.allow=false;updateStats();},
  },
  zoll:{
    check:()=>localMaster.me2.allow?{passed:true,reason:'OK'}:{passed:false,reason:'Zoll geschlossen'},
  },
  master:{
    connected:()=>isMasterConnected,
    state:()=>({...localMaster}),
  },
};
window.GATE=window.ZaM; // Alias

// ─── INIT ─────────────────────────────────────────────────────
resize();
initCosmos();
initStars();
initRunes();
updateStats();

// Startpartikel
for(let i=0;i<12;i++){
  setTimeout(()=>spawnNano(), i*180);
}

log('⚛️ ZaM · GATE geöffnet. Das Tor wartet auf Nano-Atome.','pact');
log('„Jedes Nano bekommt ein Angebot, das es nicht ablehnen kann.“','fable');
log('Space = Offer · D = Djinn · B = Burst · A = Auto · R = Reset','pact');

console.log('%c⚛️ ZaM · GATE · OFFER · PACT geladen','color:#b388ff;font-weight:bold;font-size:14px;');
console.log('→ window.ZaM.offer("GATE") · .burst() · .djinn.summon() · .state()');

requestAnimationFrame(loop);
</script>
</body>
</html>
