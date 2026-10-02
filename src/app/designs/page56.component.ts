import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 56 — Arcade: 8-bit pixel type, scanlines, stage-select tiles. */
@Component({
  selector: 'app-page56',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <div class="scan" aria-hidden="true"></div>
      <header><span class="logo">SM</span><span class="hud">1UP <b>003</b></span><span class="hud">HI <b>2026</b></span></header>

      <main>
        <p class="kick">★ PLAYER SELECT ★</p>
        <h1>SHAIK<br />MOHEED</h1>
        <p class="role">CLASS: SOFTWARE ENGINEER</p>

        <div class="stats">
          <div><span>ANGULAR</span><i><em style="width:92%"></em></i></div>
          <div><span>JAVA</span><i><em style="width:78%"></em></i></div>
          <div><span>SQL</span><i><em style="width:72%"></em></i></div>
          <div><span>SHIPPING</span><i><em style="width:96%"></em></i></div>
        </div>

        <a class="btn">PRESS START</a>
      </main>

      <footer>
        <span class="tile t1">ATLAS</span><span class="tile t2">CONSENT</span>
        <span class="tile t3">NOTICE</span><span class="tile t4">SYSTEM</span>
      </footer>
    </div>
    <app-design-nav [num]="56" designName="Arcade" />
  `,
  styles: [`
    :host { --g:#39ff6a; --p:#ff4ed8; --c:#4de2ff; --y:#ffe14d;
            display:block; background:#07060f; color:var(--g);
            font-family:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:24px 30px 104px; isolation:isolate; }
    /* CRT scanlines. */
    .scan { position:absolute; inset:0; z-index:-1; pointer-events:none; opacity:.5;
            background:repeating-linear-gradient(180deg, rgba(255,255,255,.055) 0 1px, transparent 1px 3px); }
    header { display:flex; justify-content:space-between; gap:16px; font-size:12px; letter-spacing:2px; }
    .logo { color:var(--y); font-weight:700; }
    .hud b { color:var(--c); }
    main { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:40px 0; }
    .kick { margin:0 0 20px; font-size:12px; letter-spacing:4px; color:var(--y); animation:blink 1.4s steps(2,start) infinite; }
    @keyframes blink { 50% { opacity:.25; } }
    h1 { margin:0 0 16px; font-family:"Space Grotesk",sans-serif; font-size:clamp(40px,8.4vw,108px);
         line-height:0.9; letter-spacing:-3px; font-weight:700; color:var(--g);
         text-shadow:4px 4px 0 var(--p), 8px 8px 0 rgba(77,226,255,.5); }
    .role { margin:0 0 34px; font-size:12.5px; letter-spacing:3px; color:var(--c); }
    .stats { width:min(440px,100%); display:grid; gap:12px; margin-bottom:34px; }
    .stats div { display:grid; grid-template-columns:96px 1fr; gap:12px; align-items:center; }
    .stats span { font-size:11px; letter-spacing:1.6px; text-align:left; color:var(--y); }
    .stats i { display:block; height:14px; border:2px solid var(--g); padding:2px; }
    .stats em { display:block; height:100%;
                background:repeating-linear-gradient(90deg,var(--g) 0 6px,transparent 6px 9px); }
    .btn { padding:14px 32px; border:3px solid var(--g); color:var(--g); font-size:13px; font-weight:700;
           letter-spacing:3px; cursor:pointer; }
    .btn:hover { background:var(--g); color:#07060f; }
    footer { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; }
    .tile { padding:14px 8px; text-align:center; font-size:11.5px; font-weight:700; letter-spacing:2px;
            border:2px solid; cursor:pointer; }
    .t1{color:var(--p);border-color:var(--p)} .t2{color:var(--c);border-color:var(--c)}
    .t3{color:var(--y);border-color:var(--y)} .t4{color:var(--g);border-color:var(--g)}
    .tile:hover { background:currentColor; color:#07060f; }
    @media (prefers-reduced-motion:reduce){ .kick{animation:none} }
    @media (max-width:900px){ .wrap{padding:20px 16px 104px} footer{grid-template-columns:1fr 1fr}
      h1{text-shadow:3px 3px 0 var(--p)} }
  `],
})
export class Page56Component {}
