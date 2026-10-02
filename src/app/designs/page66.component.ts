import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 66 — Cinema: film strip with sprocket holes, title card, end credits. */
@Component({
  selector: 'app-page66',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM<b>▶</b></span><nav><a>Reel</a><a>About</a><a>Contact</a></nav></header>

      <main>
        <section class="card">
          <p class="present">CERTINAL PRESENTS</p>
          <h1>SHAIK<br />MOHEED</h1>
          <p class="billing">A SOFTWARE ENGINEER · ANGULAR &amp; JAVA · 2026</p>
        </section>

        <section class="credits">
          <div><b>DIRECTED BY</b><span>Shaik Moheed</span></div>
          <div><b>FRONT END</b><span>Angular · TypeScript · RxJS</span></div>
          <div><b>BACK END</b><span>Java · Spring Boot</span></div>
          <div><b>DATA</b><span>PostgreSQL · Flyway</span></div>
          <div><b>FILMED IN</b><span>Bengaluru, India</span></div>
          <div><b>STATUS</b><span class="ok">● Now casting</span></div>
        </section>
      </main>

      <section class="strip" aria-label="Featured work">
        <span class="perf" aria-hidden="true"></span>
        <div class="frames">
          <a class="frame f1"><b>ATLAS</b><em>2026</em></a>
          <a class="frame f2"><b>CONSENT</b><em>2025</em></a>
          <a class="frame f3"><b>NOTICE</b><em>2025</em></a>
          <a class="frame f4"><b>SYSTEM</b><em>2024</em></a>
        </div>
        <span class="perf" aria-hidden="true"></span>
      </section>
    </div>
    <app-design-nav [num]="66" designName="Cinema reel" />
  `,
  styles: [`
    :host { display:block; background:#0c0c0e; color:#f2ede1; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:24px 32px 104px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:#e0b84c; }
    nav { display:flex; gap:24px; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.76; }
    nav a:hover { color:#e0b84c; opacity:1; }
    main { flex:1; display:grid; grid-template-columns:1.3fr 1fr; gap:48px; align-items:center; padding:40px 0; }
    .card { text-align:center; }
    .present { margin:0 0 16px; font-size:11px; letter-spacing:5px; color:#9b9382; }
    h1 { margin:0 0 16px; font-size:clamp(42px,8vw,104px); line-height:0.9; letter-spacing:-3.6px; font-weight:700;
         text-shadow:0 0 36px rgba(224,184,76,.3); }
    .billing { margin:0; font-size:10.5px; letter-spacing:3.4px; color:#9b9382; }
    .credits div { display:grid; grid-template-columns:118px 1fr; gap:14px; align-items:baseline;
                   padding:10px 0; border-bottom:1px solid #22222a; }
    .credits b { font-size:9.5px; letter-spacing:2px; color:#e0b84c; text-align:right; }
    .credits span { font-size:14px; }
    .ok { color:#5ddc8a; }
    /* 35 mm strip: perforation rails above and below the frames. */
    .strip { background:#17171c; padding:6px 0; }
    .perf { display:block; height:16px;
            background:repeating-linear-gradient(90deg, transparent 0 14px, #0c0c0e 14px 26px); }
    .frames { display:grid; grid-template-columns:repeat(4,1fr); gap:4px; padding:4px 0; }
    .frame { position:relative; display:grid; place-content:center; gap:4px; justify-items:center;
             aspect-ratio:4/2.6; cursor:pointer; }
    .frame b { font-size:14px; font-weight:700; letter-spacing:1.6px; }
    .frame em { font-style:normal; font-size:10.5px; opacity:.7; }
    .f1 { background:linear-gradient(150deg,#1f6feb,#4aa3ff); }
    .f2 { background:linear-gradient(150deg,#c2410c,#f59e0b); }
    .f3 { background:linear-gradient(150deg,#15803d,#4ade80); }
    .f4 { background:linear-gradient(150deg,#6d28d9,#a78bfa); }
    .frame:hover { filter:brightness(1.2); }
    @media (max-width:900px){
      .wrap{padding:20px 16px 104px} main{grid-template-columns:1fr; gap:26px}
      .credits b{text-align:left} .credits div{grid-template-columns:1fr; gap:2px}
      .frames{grid-template-columns:1fr 1fr}
    }
  `],
})
export class Page66Component {}
