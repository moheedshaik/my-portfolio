import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 62 — Polaroid wall: instant photos taped to a corkboard. */
@Component({
  selector: 'app-page62',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM.</span><nav><a>Work</a><a>About</a><a>Contact</a></nav></header>

      <main>
        <div class="board">
          <figure class="pol p1">
            <div class="img i1"></div>
            <figcaption>Shaik Moheed ✎</figcaption>
          </figure>
          <figure class="pol p2">
            <div class="img i2"></div>
            <figcaption>Atlas — 2026</figcaption>
          </figure>
          <figure class="pol p3">
            <div class="img i3"></div>
            <figcaption>Consent Manager</figcaption>
          </figure>
          <figure class="pol p4">
            <div class="img i4"></div>
            <figcaption>Notice Registry</figcaption>
          </figure>

          <aside class="note">
            <p>Software engineer at Certinal — consent and e-signature platforms, Angular over Java.</p>
            <p class="sig">— Moheed</p>
          </aside>
        </div>
      </main>

      <footer><span>Angular</span><span>TypeScript</span><span>Java</span><span>Spring Boot</span><span>PostgreSQL</span></footer>
    </div>
    <app-design-nav [num]="62" designName="Polaroid wall" />
  `,
  styles: [`
    :host { display:block; background:#c8a06a; color:#2b2016; font-family:"Space Grotesk",-apple-system,sans-serif;
            background-image:radial-gradient(rgba(90,62,32,.16) 1.2px, transparent 1.2px); background-size:7px 7px; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 32px 104px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    nav { display:flex; gap:24px; }
    nav a { font-size:14.5px; cursor:pointer; }
    nav a:hover { text-decoration:underline; }
    main { flex:1; display:grid; place-items:center; padding:30px 0; }
    .board { position:relative; width:min(1000px,100%); height:min(470px,62vh); }
    .pol { position:absolute; margin:0; width:210px; padding:12px 12px 0; background:#fffdf7;
           box-shadow:0 16px 30px -14px rgba(0,0,0,.6); cursor:pointer; transition:transform .22s ease; }
    .pol::before { content:""; position:absolute; top:-12px; left:50%; width:84px; height:26px;
                   transform:translateX(-50%) rotate(-3deg); background:rgba(255,255,255,.48);
                   border-left:1px dashed rgba(43,32,22,.2); border-right:1px dashed rgba(43,32,22,.2); }
    .img { aspect-ratio:1; }
    .i1 { background:linear-gradient(150deg,#ff9f1c,#ffbf69); }
    .i2 { background:linear-gradient(150deg,#2ec4b6,#90e0ef); }
    .i3 { background:linear-gradient(150deg,#e71d36,#ff9aa2); }
    .i4 { background:linear-gradient(150deg,#5f0f40,#9a6fb0); }
    figcaption { padding:12px 2px 14px; font-family:Georgia,serif; font-style:italic; font-size:14px; text-align:center; }
    .p1 { top:6%; left:2%; transform:rotate(-5deg); }
    .p2 { top:2%; left:27%; transform:rotate(3deg); }
    .p3 { bottom:4%; left:16%; transform:rotate(2deg); }
    .p4 { top:14%; right:4%; transform:rotate(-3deg); }
    .pol:hover { transform:rotate(0deg) scale(1.04); z-index:4; }
    .note { position:absolute; right:16%; bottom:6%; width:250px; padding:20px 22px; background:#fff59d;
            transform:rotate(2.5deg); box-shadow:0 14px 26px -12px rgba(0,0,0,.5); }
    .note p { margin:0; font-size:14.5px; line-height:1.55; }
    .sig { margin-top:10px !important; font-family:Georgia,serif; font-style:italic; text-align:right; }
    footer { display:flex; flex-wrap:wrap; gap:9px; }
    footer span { padding:7px 15px; border-radius:999px; background:rgba(255,253,247,.82); font-size:13px; }
    @media (max-width:900px){
      .wrap{padding:22px 16px 104px} .board{height:auto; display:grid; grid-template-columns:1fr 1fr; gap:16px; place-items:center}
      .pol{position:static; transform:none; width:100%; max-width:200px} .note{position:static; transform:none; width:100%; grid-column:span 2}
    }
  `],
})
export class Page62Component {}
