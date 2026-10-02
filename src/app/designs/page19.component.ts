import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 19 — Emerald marquee: emerald field split by scrolling ticker bands. */
@Component({
  selector: 'app-page19',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM<b>●</b></span><nav><a>Work</a><a>About</a><a class="pill">Contact</a></nav></header>

      <div class="band b1"><div>ANGULAR ✦ TYPESCRIPT ✦ RXJS ✦ JAVA ✦ SPRING BOOT ✦ POSTGRESQL ✦ NODE.JS ✦ ANGULAR ✦ TYPESCRIPT ✦ RXJS ✦ JAVA ✦ SPRING BOOT ✦ POSTGRESQL ✦ NODE.JS ✦</div></div>

      <main>
        <h1>Shaik<br />Moheed</h1>
        <div class="side">
          <p>Software engineer at Certinal. I build consent and e-signature platforms — reactive Angular front ends over layered Java services.</p>
          <a class="btn">See the work →</a>
        </div>
      </main>

      <div class="band b2 rev"><div>ATLAS ✦ CONSENT MANAGER ✦ NOTICE REGISTRY ✦ DESIGN SYSTEM ✦ ATLAS ✦ CONSENT MANAGER ✦ NOTICE REGISTRY ✦ DESIGN SYSTEM ✦</div></div>

      <footer><span>Open to new work</span><span>Bengaluru, IN</span><span>© 2026</span></footer>
    </div>
    <app-design-nav [num]="19" designName="Emerald marquee" />
  `,
  styles: [`
    :host { display:block; background:#00a86b; color:#f3fff9; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 0 104px; }
    header { display:flex; justify-content:space-between; align-items:center; padding:0 30px; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:#ffe347; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.9; }
    nav .pill { padding:10px 20px; border-radius:999px; background:#ffe347; color:#063d28; font-weight:600; opacity:1; }
    .band { overflow:hidden; padding:11px 0; margin:28px 0; }
    .b1 { background:#ffe347; color:#063d28; }
    .b2 { background:#063d28; color:#ffe347; }
    .band div { display:inline-block; white-space:nowrap; font-size:14px; font-weight:700; letter-spacing:2.4px;
                animation:slide 26s linear infinite; }
    .rev div { animation-direction:reverse; }
    @keyframes slide { to { transform:translateX(-50%); } }
    main { flex:1; display:grid; grid-template-columns:1.2fr 1fr; gap:40px; align-items:center; padding:12px 30px; }
    h1 { margin:0; font-size:clamp(50px,9.4vw,128px); line-height:0.86; letter-spacing:-5px; font-weight:700; }
    .side p { margin:0 0 28px; font-size:17px; line-height:1.6; opacity:.9; }
    .btn { display:inline-block; padding:15px 30px; border-radius:999px; background:#f3fff9; color:#063d28;
           font-size:15px; font-weight:600; cursor:pointer; }
    .btn:hover { transform:translateY(-2px); }
    footer { display:flex; justify-content:space-between; gap:16px; flex-wrap:wrap; padding:0 30px; font-size:13px; opacity:.86; }
    @media (prefers-reduced-motion:reduce){ .band div{animation:none} }
    @media (max-width:900px){ header,main,footer{padding-left:18px;padding-right:18px} nav a:not(.pill){display:none} main{grid-template-columns:1fr; gap:24px} }
  `],
})
export class Page19Component {}
