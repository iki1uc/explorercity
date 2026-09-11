<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>◈ KlicK · NANO · MANGA-ATOM · iki1uc</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  :root{
    --bg:#05070e; --fg:#c0d0d0;
    --gold:#f5c860; --gold2:#ffe9a0;
    --purple:#b388ff; --cyan:#6cf;
    --green:#8cf0d0; --red:#ff5577;
    --line:rgba(245,200,96,0.15);
  }
  html,body{height:100%;}
  body{
    background:radial-gradient(ellipse at center,#0a0e1a 0%,#030408 100%);
    color:var(--fg);
    font-family:'Consolas','Courier New',monospace;
    height:100vh; overflow:hidden;
    display:flex; flex-direction:column;
  }

  header{
    display:flex; justify-content:space-between; align-items:center;
    padding:8px 14px;
    border-bottom:1px solid var(--line);
    background:rgba(8,10,18,0.9);
    backdrop-filter:blur(10px);
    flex-wrap:wrap; gap:8px; z-index:5;
  }
  header h1{
    font-size:15px; font-weight:400; letter-spacing:2px;
    background:linear-gradient(135deg,#ffe9a0,#f5c860,#b388ff);
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
  }
  header h1 small{
    font-size:9px; color:#5a7a8a;
    -webkit-text-fill-color:#5a7a8a;
    letter-spacing:1px; margin-left:6px;
  }
  header h1 .tag{
    font-size:8px; letter-spacing:2px;
    -webkit-text-fill-color:#f5c860;
    border:1px solid rgba(245,200,96,0.5);
    border-radius:4px; padding:1px 5px; margin-left:6px;
  }
  .stats{
    display:flex; gap:12px; font-size:9.5px;
    color:#6a8a7a; align-items:center; flex-wrap:wrap;
  }
  .stats b{ font-weight:bold; }
  .stats .v-gold{color:#f5c860;}
  .stats .v-purple{color:#b388ff;}
  .stats .v-green{color:#8cf0d0;}
  .stats .v-red{color:#ff5577;}

  #stage{
    flex:1; position:relative;
    display:flex; align-items:center; justify-content:center;
    overflow:hidden;
  }
  #atomCanvas{
    display:block; width:100%; height:100%;
    cursor:crosshair;
  }

  /* Manga overlay — action speech bubble */
  #actionBubble{
    position:absolute;
    top:14%; left:50%;
    transform:translateX(-50%) scale(0.6);
    padding:10px 22px;
    background:#f5c860;
    color:#0a0e1a;
    font-family:'Yu Mincho','Hiragino Mincho ProN','MS Mincho',serif;
    font-weight:900;
    font-size:22px;
    letter-spacing:3px;
    border:3px solid #0a0e1a;
    border-radius:6px;
    box-shadow:0 0 0 3px #f5c860, 0 0 40px rgba(245,200,96,0.6);
    opacity:0;
    pointer-events:none;
    transition:opacity .15s, transform .25s cubic-bezier(.2,1.6,.4,1);
    z-index:10;
    white-space:nowrap;
  }
  #actionBubble.show{
    opacity:1;
    transform:translateX(-50%) scale(1);
  }
  #actionBubble.purple{
    background:#b388ff; color:#0a0e1a;
    box-shadow:0 0 0 3px #b388ff, 0 0 40px rgba(179,136,255,0.7);
  }
  #actionBubble.red{
    background:#ff5577; color:#fff;
    box-shadow:0 0 0 3px #ff5577, 0 0 40px rgba(255,85,119,0.7);
  }

  /* Controls */
  #controls{
    display:flex; gap:6px; align-items:center;
    padding:8px 14px;
    border-top:1px solid var(--line);
    background:rgba(8,10,18,0.9);
    backdrop-filter:blur(10px);
    flex-wrap:wrap;
    font-size:10px;
  }
  #controls button{
    background:rgba(20,20,30,0.7);
    border:1px solid rgba(245,200,96,0.3);
    color:#f5c860;
    padding:5px 12px;
    border-radius:6px;
    font-family:inherit; font-size:10px;
    letter-spacing:1px;
    cursor:pointer; transition:.15s;
  }
  #controls button:hover{
    background:rgba(245,200,96,0.15);
    border-color:#f5c860;
    color:#fff;
  }
  #controls button.active{
    background:rgba(245,200,96,0.25);
    color:#fff;
    border-color:#f5c860;
    box-shadow:0 0 12px rgba(245,200,96,0.4);
  }
  #controls button.purple{
    border-color:rgba(179,136,255,0.3); color:#b388ff;
  }
  #controls button.purple.active{
    background:rgba(179,136,255,0.2); color:#fff; border-color:#b388ff;
  }
  #controls button.green{
    border-color:rgba(120,220,150,0.3); color:#8cf0d0;
  }
  #controls .sep{
    width:1px; height:18px; background:var(--line); margin:0 4px;
  }
  #controls .lbl{
    color:#6a8a7a; font-size:9px; letter-spacing:1px;
  }
  #speed{
    -webkit-appearance:none; appearance:none;
    width:70px; height:4px;
    background:linear-gradient(90deg,#f5c860,#b388ff);
    border-radius:2px; outline:none;
  }
  #speed::-webkit-slider-thumb{
    -webkit-appearance:none;
    width:14px; height:14px; border-radius:50%;
    background:#fff; border:2px solid #f5c860;
    cursor:pointer;
    box-shadow:0 0 8px rgba(245,200,96,0.8);
  }

  /* Log mini */
  #logBox{
    position:absolute; bottom:8px; right:8px;
    max-width:280px; max-height:100px;
    padding:6px 10px;
    background:rgba(3,4,8,0.75);
    border:1px solid var(--line);
    border-radius:6px;
    font-size:8.5px; line-height:1.45;
    color:#8ab0c0;
    overflow-y:auto;
    pointer-events:none;
    z-index:4;
  }
  #logBox .time{color:#3a4a5a;margin-right:4px;}
  #logBox .gold{color:#f5c860;}
  #logBox .purple{color:#b388ff;}
  #logBox .red{color:#ff5577;}
  #logBox .green{color:#8cf0d0;}

  /* Nano scale bar */
  #scaleBar{
    position:absolute; bottom:14px; left:14px;
    font-size:9px; color:#5a7a8a;
    letter-spacing:1.5px;
    z-index:4;
  }
  #scaleBar .bar{
    display:inline-block; width:60px; height:5px;
    border-left:1px solid var(--gold); border-right:1px solid var(--gold);
    border-bottom:1px solid var(--gold);
    margin-right:6px;
    vertical-align:middle;
  }
  #scaleBar .val{color:#f5c860;font-weight:bold;}

  @media(max-width:700px){
    header h1{font-size:12px;}
    #controls{padding:6px 8px;}
    #controls button{padding:4px 8px;font-size:9px;}
    #logBox{max-width:180px;font-size:8px;}
  }
</style>
</head>
<body>

<header>
  <h1>◈ KlicK · NANO · MANGA-ATOM
    <small>iki1uc · 起承転結 · 3-9-81</small>
    <span class="tag">reFINAL</span>
  </h1>
  <div class="stats">
    <span>KlicK <b class="v-gold" id="sKlick">0</b></span>
    <span>ZacK <b class="v-gold" id="sZack">0</b></span>
    <span>Serum <b class="v-red" id="sSerum">—</b></span>
    <span>ZaM <b class="v-purple" id="sZam">idle</b></span>
    <span>Score <b class="v-purple" id="sScore">0</b></span>
    <span>Emotion <b class="v-green" id="sEmotion">FOKUS</b></span>
    <span id="sClock" style="color:#4a5a5a;">⏱️ --:--</span>
  </div>
</header>

<div id="stage">
  <canvas id="atomCanvas"></canvas>
  <div id="actionBubble"></div>
  <div id="scaleBar">
    <span class="bar"></span>
    <span class="val">10<sup>-9</sup> m</span> · nano · atom · KlicK
  </div>
  <div id="logBox">
    <div><span class="time">[init]</span><span class="gold">◈ NANO·MANGA·ATOM geladen</span></div>
  </div>
</div>

<div id="controls">
  <button id="btnKlick">◈ KlicK</button>
  <button id="btnAuto" class="active">⏸ AUTO</button>
  <button id="btnReset">⟲</button>
  <span class="sep"></span>
  <span class="lbl">GESCHW.</span>
  <input type="range" id="speed" min="1" max="10" value="4">
  <span class="sep"></span>
  <button id="btnZam" class="purple">⚡ ZaM</button>
  <button id="btnSerum">🩸 SERUM</button>
  <button id="btnDjinn" class="purple active">🧞 DJINN</button>
  <button id="btnBurst" class="green">💥 BURST</button>
</div>

<script>
"use strict";
// ═══════════════════════════════════════════════════════════════════
// ◈ KlicK · NANO · MANGA-ATOM
// Währung mit Seele: Nano-Partikel, Manga-Linien, Anime-Bursts
// Kompatibel: KLICK · ZaM · 2me · iki1uc-orbit
// ═══════════════════════════════════════════════════════════════════

// ─── KOMPAT-LAYER (identisch zu KLICK / respo-master) ────────────
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
  };
}catch(_){}
function persistMaster(){try{localStorage.setItem(MASTER_KEY,JSON.stringify(localMaster));}catch(_){}}
function sendToMaster(type,payload){
  localMaster.lastUpdate=Date.now(); persistMaster();
  if(masterChannel){try{masterChannel.postMessage({type,from:'NANO-ATOM',payload,ts:Date.now()});}catch(_){}}
}

// ─── KANJI / MANGA-BEATS ────────────────────────────────────────
const KANJI_BURST=['ドン','キラ','ドドド','ゴゴゴ','バァン','ズシャ','ヌル','ビシ'];
const KANJI_START=['起','承','転','結'];
const KANJI_HIT=['◈','✧','✦','★','☆'];

// ─── KLICK-GLYPHEN (jedes KlicK-Teilchen hat ein Symbol) ───────
const KLICK_GLYPHS=['3','9','81','27','◎','◉','◆','△','▣','↺','→','↗','↘','◈','✧'];

// ─── KONFIG ─────────────────────────────────────────────────────
const CFG={
  nanoScale:1e-9,
  orbitalShells:[0.42,0.68,0.94,1.20],
  klickTarget:100,
  serumStop:98,
  maxKlickParticles:120,
  maxKira:200,
  maxBurstRings:20,
};

// ─── STATE ──────────────────────────────────────────────────────
const S={
  klick:localMaster.klick||0,
  zack:localMaster.zack||0,
  score:localMaster.score||0,
  emotion:'FOKUS',
  serumStopped:false,
  zam:'idle',
  auto:true,
  speed:4,
  tick:0,
  running:true,
  djinnOn:true,
  // Visuell
  klicks:[],          // aktive KlicK-Teilchen
  kira:[],            // Kira-Sparkles
  rings:[],           // Burst-Ringe
  concentration:0,    // 0..1 – 集中線-Intensität
  screenShake:0,      // Erschütterung bei ZaM
  flashAlpha:0,       // Bildschirm-Blitz bei ZacK
  pageFlash:0,        // Manga-Panel-Flash
  lastSpawnTick:0,
};

// ─── CANVAS ─────────────────────────────────────────────────────
const cv=document.getElementById('atomCanvas');
const ctx=cv.getContext('2d');
let W=0,H=0,CX=0,CY=0,R=0,DPR=1;

function resize(){
  const r=cv.parentElement.getBoundingClientRect();
  DPR=window.devicePixelRatio||1;
  W=r.width; H=r.height;
  cv.width=W*DPR; cv.height=H*DPR;
  cv.style.width=W+'px'; cv.style.height=H+'px';
  ctx.setTransform(DPR,0,0,DPR,0,0);
  CX=W/2; CY=H/2;
  R=Math.min(W,H)*0.30;
}
window.addEventListener('resize',resize);
if(window.ResizeObserver) new ResizeObserver(resize).observe(cv.parentElement);

// ─── KLICK-TEILCHEN ────────────────────────────────────────────
let glyphIdx=0;
function spawnKlick(){
  if(S.klicks.length>=CFG.maxKlickParticles) return;
  // Startet außen auf einer zufälligen Schale
  const shell=CFG.orbitalShells[Math.floor(Math.random()*CFG.orbitalShells.length)];
  const a=Math.random()*Math.PI*2;
  S.klicks.push({
    a,
    r:shell*(1+Math.random()*0.15),
    va:(Math.random()<0.5?-1:1)*(0.004+Math.random()*0.008),
    vr:-0.0008-Math.random()*0.0018,   // spiralt einwärts
    life:0, maxLife:200+Math.random()*200,
    glyph:KLICK_GLYPHS[glyphIdx++%KLICK_GLYPHS.length],
    shell:CFG.orbitalShells.indexOf(shell),
    trail:[],
    hue:38+Math.random()*12, // gold-Bereich
    size:2.6+Math.random()*1.6,
    born:performance.now(),
    entering:true,
  });
}
function spawnKira(x,y,count,color){
  for(let i=0;i<count;i++){
    if(S.kira.length>=CFG.maxKira) break;
    const a=Math.random()*Math.PI*2;
    const sp=0.6+Math.random()*3.2;
    S.kira.push({
      x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,
      life:0,maxLife:20+Math.random()*40,
      color:color||'#f5c860',
      size:1+Math.random()*2.2,
      star:Math.random()<0.3,
    });
  }
}
function spawnRing(x,y,color,maxR,dur){
  S.rings.push({x,y,r:0,maxR:maxR||R*0.9,life:0,maxLife:dur||50,color:color||'#f5c860'});
}

// ─── KLICK-EINGABE ─────────────────────────────────────────────
function addKlick(n=1, fromDjinn=false){
  if(!localMaster.me2.allow){
    log('⛔ KlicK blockiert – Zoll geschlossen','Zoll','red');
    return;
  }
  if(S.serumStopped && !fromDjinn){
    log('🩸 Serum aktiv · bei 98 · bewusst 99 + 100','Serum','red');
    triggerBubble('結 · STILL', 'red');
    return;
  }
  const mult = localMaster.me2.boost?2:(localMaster.me2.slow?0.5:1);
  const before = S.klick;
  S.klick += n*mult;

  // Teilchen spawnen
  for(let i=0;i<Math.ceil(n*mult);i++) spawnKlick();

  // Serum-Stop
  if(!fromDjinn && before<CFG.serumStop && S.klick>=CFG.serumStop && S.klick<CFG.klickTarget){
    S.klick=CFG.serumStop;
    S.serumStopped=true;
    triggerBubble('起 · SERUM', 'red');
    log('🩸 SERUM · KlicK bei 98 gestoppt — bewusst 99 + 100','Serum','red');
    // alle Klick-Teilchen kurz einfrieren mit rotem Puls
    S.klicks.forEach(k=>{k.frozen=true;});
    setTimeout(()=>S.klicks.forEach(k=>k.frozen=false), 800);
    updateStats();
    return;
  }

  // 100 → ZacK
  if(S.klick>=CFG.klickTarget){
    const gained=Math.floor(S.klick/100);
    S.klick=S.klick%100;
    S.zack+=gained;
    S.serumStopped=false;
    S.flashAlpha=0.9;
    S.screenShake=12;
    S.concentration=1;

    // BURST
    const kanji=KANJI_BURST[Math.floor(Math.random()*KANJI_BURST.length)];
    triggerBubble(kanji, '');
    spawnRing(CX,CY,'#f5c860',R*1.4,60);
    spawnRing(CX,CY,'#ffe9a0',R*1.0,80);
    spawnRing(CX,CY,'#b388ff',R*1.8,100);
    // Kira-Explosion
    for(let i=0;i<40;i++){
      const a=Math.random()*Math.PI*2;
      spawnKira(CX+Math.cos(a)*R*0.3, CY+Math.sin(a)*R*0.3, 6, Math.random()<0.5?'#f5c860':'#ffe9a0');
    }
    // alle Teilchen explodieren mit
    S.klicks.forEach(k=>{
      const x=CX+Math.cos(k.a)*k.r*R;
      const y=CY+Math.sin(k.a)*k.r*R;
      spawnKira(x,y,4,'#f5c860');
    });
    S.klicks=[]; // Kern verschlingt sie

    // Score + Emotion wechseln
    S.score += 81;
    cycleEmotion();

    log(`💥 100 KlicK → ZacK ${S.zack} · Anime-Burst`,'ZaM','gold');
    sendToMaster('klick:zack',{zack:S.zack,fromKlick:100});
    // ZaM automatisch
    if(S.zam==='idle') triggerZam(true);
  }

  localMaster.klick=S.klick;
  localMaster.zack=S.zack;
  localMaster.score=S.score;
  persistMaster();
  updateStats();
  sendToMaster('klick:step',{klick:S.klick,zack:S.zack});
}

function cycleEmotion(){
  const emos=['FREUDE','FOKUS','MUT','RUHE','STAUNEN','WILLE'];
  S.emotion=emos[Math.floor(Math.random()*emos.length)];
}

// ─── BUBBLE (Manga-Sprechblase) ────────────────────────────────
let bubbleTimer=null;
function triggerBubble(text, variant){
  const b=document.getElementById('actionBubble');
  b.textContent=text;
  b.className='show'+(variant?' '+variant:'');
  if(bubbleTimer) clearTimeout(bubbleTimer);
  bubbleTimer=setTimeout(()=>{b.classList.remove('show');}, 650);
}

// ─── ZAM ────────────────────────────────────────────────────────
function triggerZam(silent){
  if(S.zam==='run') return;
  S.zam='run';
  updateStats();
  if(!silent) log('⚡ ZaM-Sequenz gestartet','ZaM','purple');
  const steps=['LOAD','ARBEIT_RUN','MAINBOARD','DONE'];
  let i=0;
  const next=()=>{
    if(i>=steps.length){
      S.zam='done';
      updateStats();
      triggerBubble('承 · ZAM', 'purple');
      log(`✅ ZaM fertig (${steps.length} Schritte)`,'ZaM','purple');
      setTimeout(()=>{ S.zam='idle'; updateStats(); }, 1500);
      return;
    }
    const step=steps[i++];
    log(`  ↳ ${step}`,'ZaM','purple');
    // Kern-Impuls
    spawnRing(CX,CY,'#b388ff',R*(0.7+i*0.2),40);
    addKlick(2,true);
    if(step==='MAINBOARD'){
      S.score+=145;
      updateStats();
    }
    setTimeout(next, 320);
  };
  next();
}

// ─── DJINN ─────────────────────────────────────────────────────
let djinnTimer=null;
function startDjinn(){
  if(djinnTimer) clearInterval(djinnTimer);
  djinnTimer=setInterval(()=>{
    if(!S.djinnOn) return;
    const r=Math.random();
    if(r<0.45){ addKlick(1,true); }
    else if(r<0.62){ spawnKira(CX+(Math.random()-0.5)*R*2, CY+(Math.random()-0.5)*R*2, 8, '#b388ff'); }
    else if(r<0.75){ cycleEmotion(); updateStats(); }
    else if(r<0.85){ spawnRing(CX,CY,'#6cf',R*(0.6+Math.random()*0.5),60); log('✨ ZAHRAND · Pattern neu','DJINN','gold'); }
    else if(r<0.95){ S.score+=10; updateStats(); log(`💰 +10 SCORE`,'EARN','gold'); }
    else { triggerBubble('ドキ', 'purple'); }
  }, 2200);
}

// ─── LOOP ──────────────────────────────────────────────────────
let lastT=0;
function loop(now){
  const dt=Math.min(48, now-lastT||16);
  lastT=now;
  S.tick++;

  // Auto-Spawn
  if(S.auto && localMaster.me2.allow && !S.serumStopped){
    const base=600;
    const interval=Math.max(60, base - S.speed*50);
    if(now - S.lastSpawnTick > interval){
      S.lastSpawnTick=now;
      addKlick(1,true); // auto-KlicK ohne Serum-Trigger
    }
  }

  updateParticles(dt);
  updateFlashes();
  draw();
  requestAnimationFrame(loop);
}

// ─── UPDATE PARTICLES ─────────────────────────────────────────
function updateParticles(dt){
  const slowFactor=S.serumStopped?0.15:1;

  // Klicks
  for(let i=S.klicks.length-1;i>=0;i--){
    const k=S.klicks[i];
    const f = k.frozen ? 0.05 : slowFactor;
    k.a += k.va * (dt/16) * f;
    // einwärts spiralen
    if(k.entering) k.r += k.vr * (dt/16) * f;
    k.life++;
    // Trail
    k.trail.push({a:k.a, r:k.r});
    if(k.trail.length>6) k.trail.shift();

    // Am Kern angekommen → Kira + weg
    if(k.r <= 0.15){
      const x=CX+Math.cos(k.a)*0.15*R;
      const y=CY+Math.sin(k.a)*0.15*R;
      spawnKira(x,y,5,'#f5c860');
      // kleiner Ring
      spawnRing(x,y,'#ffe9a0',20,25);
      S.klicks.splice(i,1);
      continue;
    }
    if(k.life>k.maxLife){ S.klicks.splice(i,1); continue; }
  }

  // Kira
  for(let i=S.kira.length-1;i>=0;i--){
    const p=S.kira[i];
    p.x+=p.vx*(dt/16);
    p.y+=p.vy*(dt/16);
    p.vx*=0.96; p.vy*=0.96;
    p.vy+=0.02*(dt/16);
    p.life++;
    if(p.life>p.maxLife) S.kira.splice(i,1);
  }

  // Rings
  for(let i=S.rings.length-1;i>=0;i--){
    const r=S.rings[i];
    r.life++;
    const t=r.life/r.maxLife;
    r.r=r.maxR*t;
    if(t>=1) S.rings.splice(i,1);
  }

  // Concentration decay
  S.concentration *= 0.96;
  if(S.concentration < 0.02) S.concentration=0;
}
function updateFlashes(){
  S.flashAlpha *= 0.88;
  if(S.flashAlpha<0.02) S.flashAlpha=0;
  S.screenShake *= 0.88;
  if(S.screenShake<0.3) S.screenShake=0;
}

// ─── DRAW ──────────────────────────────────────────────────────
function draw(){
  // Bildschirm-Erschütterung
  const sx=(Math.random()-0.5)*S.screenShake;
  const sy=(Math.random()-0.5)*S.screenShake;
  ctx.save();
  ctx.translate(sx,sy);

  ctx.clearRect(-20,-20,W+40,H+40);

  // ── 1. Hintergrund: Halbton-Screentone
  drawScreentone();

  // ── 2. 集中線 (Konzentrationslinien) wenn Concentration > 0
  if(S.concentration > 0.05) drawConcentrationLines();

  // ── 3. Orbital-Schalen
  drawShells();

  // ── 4. Kern-Aura (pulsierend)
  drawCoreAura();

  // ── 5. KlicK-Teilchen (mit Trails)
  drawKlicks();

  // ── 6. Kira-Sparkles
  drawKira();

  // ── 7. Ringe
  drawRings();

  // ── 8. Kern
  drawCore();

  // ── 9. Manga-Panel-Rahmen
  drawPanelFrame();

  ctx.restore();

  // ── 10. Flash-Overlay
  if(S.flashAlpha>0.01){
    ctx.fillStyle=`rgba(255,240,200,${S.flashAlpha*0.5})`;
    ctx.fillRect(0,0,W,H);
  }
}

function drawScreentone(){
  // feiner Halbton – statisch, subtil
  const step=8;
  ctx.save();
  ctx.globalAlpha=0.06;
  for(let y=0;y<H;y+=step){
    for(let x=0;x<W;x+=step){
      const d=Math.hypot(x-CX,y-CY);
      const rad=R*1.3;
      const alpha=d<rad ? (1-d/rad)*0.5 : 0;
      if(alpha>0.05){
        ctx.fillStyle=`rgba(200,220,240,${alpha})`;
        ctx.beginPath(); ctx.arc(x,y,1,0,Math.PI*2); ctx.fill();
      }
    }
  }
  ctx.restore();
}

function drawConcentrationLines(){
  const intensity=S.concentration;
  const lines=60;
  const rad=R*1.5;
  const innerR=R*0.45;
  ctx.save();
  ctx.strokeStyle=`rgba(245,200,96,${0.35*intensity})`;
  ctx.lineWidth=1.4;
  for(let i=0;i<lines;i++){
    const a=(i/lines)*Math.PI*2 + S.tick*0.002;
    const len = rad * (0.5+Math.random()*0.5*intensity);
    const x1=CX+Math.cos(a)*innerR;
    const y1=CY+Math.sin(a)*innerR;
    const x2=CX+Math.cos(a)*len;
    const y2=CY+Math.sin(a)*len;
    ctx.beginPath();
    ctx.moveTo(x1,y1); ctx.lineTo(x2,y2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawShells(){
  CFG.orbitalShells.forEach((sh,i)=>{
    const rad=sh*R;
    ctx.beginPath();
    ctx.arc(CX,CY,rad,0,Math.PI*2);
    ctx.strokeStyle=`rgba(108,204,255,${0.06+i*0.02})`;
    ctx.lineWidth=1;
    ctx.stroke();
    // gestrichelte Achse
    ctx.setLineDash([3,6]);
    ctx.strokeStyle=`rgba(245,200,96,${0.05+i*0.015})`;
    ctx.beginPath();
    ctx.arc(CX,CY,rad, -Math.PI/2, -Math.PI/2+Math.PI*2*(i+1)/4);
    ctx.stroke();
    ctx.setLineDash([]);
  });
}

function drawCoreAura(){
  const pulse=1+0.10*Math.sin(S.tick*0.05);
  const baseR=R*0.35*pulse;
  const g=ctx.createRadialGradient(CX,CY,0,CX,CY,baseR*1.8);
  if(S.serumStopped){
    g.addColorStop(0,'rgba(255,85,119,0.6)');
    g.addColorStop(0.5,'rgba(255,85,119,0.15)');
    g.addColorStop(1,'rgba(255,85,119,0)');
  } else if(S.concentration>0.3){
    g.addColorStop(0,'rgba(245,200,96,0.9)');
    g.addColorStop(0.4,'rgba(245,200,96,0.3)');
    g.addColorStop(1,'rgba(245,200,96,0)');
  } else {
    g.addColorStop(0,'rgba(179,136,255,0.7)');
    g.addColorStop(0.5,'rgba(108,204,255,0.2)');
    g.addColorStop(1,'rgba(108,204,255,0)');
  }
  ctx.fillStyle=g;
  ctx.beginPath(); ctx.arc(CX,CY,baseR*1.8,0,Math.PI*2); ctx.fill();
}

function drawCore(){
  const pulse=1+0.08*Math.sin(S.tick*0.06);
  const coreR=R*0.22*pulse;

  // Äußerer Ring
  ctx.beginPath();
  ctx.arc(CX,CY,coreR*1.35,0,Math.PI*2);
  ctx.strokeStyle='rgba(245,200,96,0.7)';
  ctx.lineWidth=2;
  ctx.stroke();

  // Mittlere Scheibe
  const g2=ctx.createRadialGradient(CX,CY,0,CX,CY,coreR);
  g2.addColorStop(0,'#fff8e0');
  g2.addColorStop(0.4,'#f5c860');
  g2.addColorStop(1,'#b388ff');
  ctx.fillStyle=g2;
  ctx.beginPath(); ctx.arc(CX,CY,coreR,0,Math.PI*2); ctx.fill();

  // Inneres Symbol (mangaglyph) – rotiert mit Kanji
  const idx=Math.floor(S.tick/60)%KANJI_START.length;
  const glyph=KANJI_START[idx];
  ctx.save();
  ctx.fillStyle='#0a0e1a';
  ctx.font=`bold ${coreR*1.1}px "Yu Mincho","Hiragino Mincho ProN","MS Mincho",serif`;
  ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillText(glyph,CX,CY);
  ctx.restore();

  // Kern-Ring pulsierend
  const ringA=0.4+0.4*Math.sin(S.tick*0.08);
  ctx.beginPath();
  ctx.arc(CX,CY,coreR*1.7+Math.sin(S.tick*0.1)*3,0,Math.PI*2);
  ctx.strokeStyle=`rgba(245,200,96,${ringA})`;
  ctx.lineWidth=1;
  ctx.stroke();

  // kleinen KlicK-Zählertext innen unten
  ctx.fillStyle='rgba(10,14,26,0.7)';
  ctx.font='bold 9px Consolas';
  ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillText(`${S.klick}/100`,CX,CY+coreR*1.9);
}

function drawKlicks(){
  S.klicks.forEach(k=>{
    const x=CX+Math.cos(k.a)*k.r*R;
    const y=CY+Math.sin(k.a)*k.r*R;

    // Trail
    k.trail.forEach((t,i)=>{
      const tx=CX+Math.cos(t.a)*t.r*R;
      const ty=CY+Math.sin(t.a)*t.r*R;
      const a=(i/k.trail.length)*0.35;
      ctx.beginPath();
      ctx.arc(tx,ty,k.size*(i/k.trail.length)*0.8,0,Math.PI*2);
      ctx.fillStyle=`hsla(${k.hue},95%,65%,${a})`;
      ctx.fill();
    });

    // Glow
    const g=ctx.createRadialGradient(x,y,0,x,y,k.size*5);
    g.addColorStop(0,`hsla(${k.hue},95%,80%,0.9)`);
    g.addColorStop(0.5,`hsla(${k.hue},95%,60%,0.3)`);
    g.addColorStop(1,`hsla(${k.hue},95%,60%,0)`);
    ctx.fillStyle=g;
    ctx.beginPath(); ctx.arc(x,y,k.size*5,0,Math.PI*2); ctx.fill();

    // Körper
    ctx.beginPath();
    ctx.arc(x,y,k.size,0,Math.PI*2);
    ctx.fillStyle=`hsl(${k.hue},95%,80%)`;
    ctx.shadowColor=`hsl(${k.hue},95%,60%)`;
    ctx.shadowBlur=10;
    ctx.fill();
    ctx.shadowBlur=0;

    // Glyph (winzig) – nur wenn groß genug
    if(k.size>3.2){
      ctx.fillStyle='rgba(10,14,26,0.85)';
      ctx.font=`bold ${k.size*1.2}px Consolas`;
      ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(k.glyph, x, y);
    }
  });
}

function drawKira(){
  S.kira.forEach(p=>{
    const t=p.life/p.maxLife;
    const alpha=1-t;
    if(p.star){
      // Stern-Zeichnung
      ctx.save();
      ctx.translate(p.x,p.y);
      ctx.rotate(p.life*0.15);
      ctx.fillStyle=p.color;
      ctx.globalAlpha=alpha;
      const s=p.size*1.8;
      ctx.beginPath();
      for(let i=0;i<5;i++){
        const a=(i/5)*Math.PI*2-Math.PI/2;
        const a2=a+Math.PI/5;
        ctx.lineTo(Math.cos(a)*s, Math.sin(a)*s);
        ctx.lineTo(Math.cos(a2)*s*0.4, Math.sin(a2)*s*0.4);
      }
      ctx.closePath(); ctx.fill();
      ctx.restore();
    } else {
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.size*alpha,0,Math.PI*2);
      ctx.fillStyle=p.color;
      ctx.globalAlpha=alpha;
      ctx.fill();
      ctx.globalAlpha=1;
    }
  });
}

function drawRings(){
  S.rings.forEach(r=>{
    const t=r.life/r.maxLife;
    const a=1-t;
    ctx.beginPath();
    ctx.arc(r.x,r.y,r.r,0,Math.PI*2);
    ctx.strokeStyle=r.color;
    ctx.globalAlpha=a*0.8;
    ctx.lineWidth=2+a*3;
    ctx.stroke();
    ctx.globalAlpha=1;
  });
}

function drawPanelFrame(){
  // Manga-Panel-Rahmen (innenliegender Doppelrand)
  const pad=8;
  ctx.strokeStyle='rgba(245,200,96,0.35)';
  ctx.lineWidth=1.5;
  ctx.strokeRect(pad,pad,W-pad*2,H-pad*2);
  ctx.strokeStyle='rgba(245,200,96,0.12)';
  ctx.lineWidth=1;
  ctx.strokeRect(pad+3,pad+3,W-pad*2-6,H-pad*2-6);

  // Ecken
  const cS=18;
  ctx.strokeStyle='rgba(245,200,96,0.6)';
  ctx.lineWidth=2;
  // 4 Ecken
  const corners=[[pad,pad,1,1],[W-pad,pad,-1,1],[pad,H-pad,1,-1],[W-pad,H-pad,-1,-1]];
  corners.forEach(([cx,cy,dx,dy])=>{
    ctx.beginPath();
    ctx.moveTo(cx+dx*cS,cy); ctx.lineTo(cx,cy); ctx.lineTo(cx,cy+dy*cS);
    ctx.stroke();
  });
}

// ─── STATS / UI ────────────────────────────────────────────────
function updateStats(){
  document.getElementById('sKlick').textContent=S.klick;
  document.getElementById('sZack').textContent=S.zack;
  document.getElementById('sScore').textContent=S.score;
  document.getElementById('sEmotion').textContent=S.emotion;
  document.getElementById('sZam').textContent=S.zam;
  document.getElementById('sSerum').textContent=S.serumStopped?'🩸 STOP':'—';
  // Zoll
  const z=document.getElementById('btnAuto');
  // serum glow am Klick-Button
  const bk=document.getElementById('btnKlick');
  if(S.serumStopped) bk.style.borderColor='#ff5577';
  else bk.style.borderColor='';
}

// ─── LOG ───────────────────────────────────────────────────────
function log(msg,tag='NANO',cls=''){
  const box=document.getElementById('logBox');
  const entry=document.createElement('div');
  const t=new Date().toLocaleTimeString('de-DE');
  entry.innerHTML=`<span class="time">[${t}]</span><span class="${cls}">${msg}</span>`;
  box.appendChild(entry);
  box.scrollTop=box.scrollHeight;
  while(box.children.length>40) box.removeChild(box.firstChild);
}

// ─── BUTTONS ───────────────────────────────────────────────────
document.getElementById('btnKlick').addEventListener('click',()=>addKlick(1));
document.getElementById('btnAuto').addEventListener('click',(e)=>{
  S.auto=!S.auto;
  e.currentTarget.classList.toggle('active',S.auto);
  e.currentTarget.textContent=(S.auto?'⏸ AUTO':'▶ AUTO');
  log(`AUTO ${S.auto?'an':'aus'}`,'Auto','gold');
});
document.getElementById('btnReset').addEventListener('click',()=>{
  S.klick=0; S.zack=0; S.score=0; S.serumStopped=false; S.klicks=[]; S.kira=[];
  localMaster.klick=0; localMaster.zack=0; localMaster.score=0;
  persistMaster(); updateStats();
  triggerBubble('⟲ RESET','red');
  log('⟲ Reset · KlicK/ZacK/Score','Reset','red');
});
document.getElementById('speed').addEventListener('input',(e)=>{
  S.speed=parseInt(e.target.value,10);
});
document.getElementById('btnZam').addEventListener('click',()=>triggerZam(false));
document.getElementById('btnSerum').addEventListener('click',()=>{
  S.serumStopped=!S.serumStopped;
  if(S.serumStopped){
    S.klick=CFG.serumStop;
    triggerBubble('起 · SERUM','red');
    log('🩸 Serum MANUELL aktiviert','Serum','red');
  } else {
    triggerBubble('転 · FREI','purple');
    log('🩸 Serum deaktiviert','Serum','purple');
  }
  updateStats();
});
document.getElementById('btnDjinn').addEventListener('click',(e)=>{
  S.djinnOn=!S.djinnOn;
  e.currentTarget.classList.toggle('active',S.djinnOn);
  log(`🧞 DJINN ${S.djinnOn?'an':'aus'}`,'DJINN','purple');
});
document.getElementById('btnBurst').addEventListener('click',()=>{
  S.flashAlpha=0.8;
  S.screenShake=10;
  S.concentration=1;
  spawnRing(CX,CY,'#f5c860',R*1.4,60);
  spawnRing(CX,CY,'#b388ff',R*1.8,80);
  for(let i=0;i<60;i++){
    const a=Math.random()*Math.PI*2;
    const r=R*(0.2+Math.random()*0.6);
    spawnKira(CX+Math.cos(a)*r, CY+Math.sin(a)*r, 3, Math.random()<0.5?'#f5c860':'#b388ff');
  }
  triggerBubble('ドドド','');
  log('💥 MANUAL BURST','Burst','gold');
});

// ─── CLICK ON CANVAS ──────────────────────────────────────────
cv.addEventListener('click',(e)=>{
  const r=cv.getBoundingClientRect();
  const x=e.clientX-r.left, y=e.clientY-r.top;
  spawnKira(x,y,8,'#f5c860');
  spawnRing(x,y,'#f5c860',40,30);
  addKlick(1);
});
cv.addEventListener('mousemove',(e)=>{
  // Magnetischer Effekt: Klick-Partikel werden leicht zum Cursor gezogen
  const r=cv.getBoundingClientRect();
  const mx=e.clientX-r.left, my=e.clientY-r.top;
  S.klicks.forEach(k=>{
    const x=CX+Math.cos(k.a)*k.r*R;
    const y=CY+Math.sin(k.a)*k.r*R;
    const dx=mx-x, dy=my-y;
    const d=Math.hypot(dx,dy)+1;
    if(d<160){
      const pull=0.00004;
      k.a += (dx/d)*pull;
      k.r += (dy/d)*pull;
    }
  });
});

// ─── KEYBOARD ─────────────────────────────────────────────────
document.addEventListener('keydown',(e)=>{
  if(e.target.tagName==='INPUT') return;
  if(e.key===' '){e.preventDefault(); addKlick(1);}
  if(e.key==='r'||e.key==='R') document.getElementById('btnReset').click();
  if(e.key==='z'||e.key==='Z') document.getElementById('btnZam').click();
  if(e.key==='d'||e.key==='D') document.getElementById('btnDjinn').click();
  if(e.key==='p'||e.key==='P') document.getElementById('btnAuto').click();
  if(e.key==='b'||e.key==='B') document.getElementById('btnBurst').click();
});

// ─── CLOCK ────────────────────────────────────────────────────
function clock(){
  document.getElementById('sClock').textContent='⏱️ '+new Date().toLocaleTimeString('de-DE');
}
setInterval(clock,1000); clock();

// ─── API (kompatibel zu KLICK) ────────────────────────────────
window.KLICK={
  klick:(n=1)=>addKlick(n),
  step:()=>addKlick(1,true),
  reset:()=>document.getElementById('btnReset').click(),
  mode:(m)=>log(`Modus: ${m}`,'API','gold'),
  play:()=>{S.auto=true;updateStats();},
  pause:()=>{S.auto=false;updateStats();},
  state:()=>({
    klick:S.klick, zack:S.zack, serum:S.serumStopped,
    zam:S.zam, score:S.score, emotion:S.emotion,
    particles:S.klicks.length, kira:S.kira.length,
  }),
  zam:{
    run:(seq)=>triggerZam(true),
    sequence:(steps)=>triggerZam(true),
  },
  me2:{
    setRule:(rule)=>{Object.assign(localMaster.me2,rule);updateStats();sendToMaster('me2:rule',rule);},
    allow:()=>{localMaster.me2.allow=true;updateStats();},
    block:()=>{localMaster.me2.allow=false;updateStats();},
    boost:()=>{localMaster.me2.boost=true;localMaster.me2.slow=false;updateStats();},
    slow:()=>{localMaster.me2.slow=true;localMaster.me2.boost=false;updateStats();},
    override:()=>{localMaster.me2.override=true;updateStats();},
  },
  zoll:{check:()=>localMaster.me2.allow?{passed:true,reason:'OK'}:{passed:false,reason:'Zoll geschlossen'}},
  master:{connected:()=>isMasterConnected,state:()=>({...localMaster})},
  visual:{
    burst:()=>document.getElementById('btnBurst').click(),
    bubble:(text,variant)=>triggerBubble(text,variant||''),
    emotion:()=>cycleEmotion(),
  },
};
// Legacy alias
window.NANO_ATOM=window.KLICK;

// ─── INIT ─────────────────────────────────────────────────────
resize();
updateStats();
startDjinn();

// Startklick-Partikel – schöner erster Anblick
for(let i=0;i<24;i++) spawnKlick();

log('◈ NANO·MANGA·ATOM bereit','init','gold');
log('Nano · 10⁻⁹ m · KlicK-Partikel auf Orbital-Schalen','init','gold');
log('💥 100 KlicK → ZacK-Burst · 🩸 Serum bei 98','init','red');
log('Space = KlicK · B = Burst · Z = ZaM · D = DJINN · P = Auto','init','purple');

console.log('%c◈ KlicK · NANO · MANGA-ATOM geladen','color:#f5c860;font-weight:bold;font-size:14px;');
console.log('→ window.KLICK.klick() · .visual.burst() · .visual.bubble("ドン") · .state()');

requestAnimationFrame(loop);
</script>
</body>
</html>
