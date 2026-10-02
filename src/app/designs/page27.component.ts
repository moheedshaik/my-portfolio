import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 27 — Synthwave: sunset gradient sky over a scrolling perspective grid. */
@Component({
  selector: 'app-page27',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <div class="sun" aria-hidden="true"></div>
      <div class="floor" aria-hidden="true"></div>
      <header><span class="logo">SM<b>//</b></span><nav><a>work</a><a>about</a><a class="pill">contact</a></nav></header>
      <main>
        <p class="kick">· SOFTWARE ENGINEER ·</p>
        <h1>SHAIK MOHEED</h1>
        <p class="bio">Consent and e-signature platforms. Angular front ends, Java services, shipped on time.</p>
        <div class="row"><a class="btn">ENTER</a><a class="btn out">DOWNLOAD CV</a></div>
      </main>
      <footer><span>ANGULAR</span><span>TYPESCRIPT</span><span>JAVA</span><span>SPRING BOOT</span><span>POSTGRESQL</span></footer>
    </div>
    <app-design-nav [num]="27" designName="Synthwave" />
  `,
  styles: [`
    :host { display:block; background:#1a0535; color:#fff; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:26px 32px 104px;
            overflow:hidden; isolation:isolate;
            background:linear-gradient(180deg,#2d0a5a 0%,#7c2d8f 38%,#ff6b9d 62%,#ffb86b 76%,#1a0535 76%); }
    .sun { position:absolute; z-index:-1; width:360px; height:360px; border-radius:50%; left:50%; top:20%;
           transform:translateX(-50%); background:linear-gradient(180deg,#ffe066,#ff3d7f);
           box-shadow:0 0 90px rgba(255,61,127,.6); }
    /* Perspective floor made from a tilted grid. */
    .floor { position:absolute; z-index:-1; left:-50%; right:-50%; bottom:0; height:30%;
             background-image:linear-gradient(rgba(255,61,127,.75) 2px, transparent 2px),
                              linear-gradient(90deg, rgba(255,61,127,.75) 2px, transparent 2px);
             background-size:70px 50px;
             transform:perspective(320px) rotateX(62deg); transform-origin:bottom center;
             animation:run 2.4s linear infinite; }
    @keyframes run { to { background-position:0 50px; } }
    @media (prefers-reduced-motion:reduce){ .floor{animation:none} }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:#5de4ff; }
    nav { display:flex; gap:22px; align-items:center; }
    nav a { font-size:13.5px; letter-spacing:1.2px; cursor:pointer; opacity:.9; }
    nav .pill { padding:9px 20px; border-radius:999px; border:1.5px solid #5de4ff; color:#5de4ff; opacity:1; }
    nav .pill:hover { background:#5de4ff; color:#1a0535; }
    main { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:40px 0; }
    .kick { margin:0 0 14px; font-size:12.5px; letter-spacing:4px; color:#5de4ff; }
    h1 { margin:0 0 18px; font-size:clamp(34px,7.4vw,96px); line-height:0.94; letter-spacing:-2px; font-weight:700;
         text-shadow:0 0 24px rgba(255,61,127,.8), 3px 3px 0 #5de4ff; }
    .bio { margin:0 0 30px; max-width:44ch; font-size:16px; line-height:1.6; opacity:.92; }
    .row { display:flex; gap:12px; flex-wrap:wrap; justify-content:center; }
    .btn { padding:14px 30px; border-radius:4px; background:#ff3d7f; color:#fff; font-size:14px;
           font-weight:700; letter-spacing:1.4px; cursor:pointer; box-shadow:0 0 26px rgba(255,61,127,.7); }
    .btn.out { background:transparent; border:1.5px solid rgba(255,255,255,.55); box-shadow:none; }
    footer { display:flex; flex-wrap:wrap; gap:10px; justify-content:center; }
    footer span { padding:6px 14px; border:1px solid rgba(93,228,255,.5); border-radius:4px;
                  font-size:11.5px; letter-spacing:1.6px; color:#5de4ff; }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none} .sun{width:230px;height:230px} }
  `],
})
export class Page27Component {}
