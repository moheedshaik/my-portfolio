import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 04 — Sunset gradient: animated orange→pink→violet wash, white type. */
@Component({
  selector: 'app-page4',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM<b>.</b></span><nav><a>Work</a><a>About</a><a>Resume</a><a class="pill">Contact</a></nav></header>
      <main>
        <span class="tag">● Available for new work</span>
        <h1>Software engineer<br />with a bias for <em>clarity</em>.</h1>
        <p>I'm Shaik Moheed. I build consent and e-signature platforms — reactive Angular front ends over layered Java services.</p>
        <div class="row"><a class="btn">Explore work</a><a class="btn out">Download CV</a></div>
      </main>
      <div class="cards">
        <article><h3>Atlas</h3><p>217 countries, live World Bank data, WebGL globe.</p></article>
        <article><h3>Consent Manager</h3><p>Versioned purposes, audit trails, multi-tenant reports.</p></article>
        <article><h3>Notice Registry</h3><p>Editor, live preview, embeddable snippets.</p></article>
      </div>
    </div>
    <app-design-nav [num]="4" designName="Sunset gradient" />
  `,
  styles: [`
    :host { display:block; color:#fff; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap {
      min-height:100vh; padding:26px 30px 104px; display:flex; flex-direction:column;
      background:linear-gradient(125deg,#ff8a00,#ff2e63 34%,#8b2fe0 68%,#2b1fd6);
      background-size:260% 260%; animation:wash 18s ease-in-out infinite alternate;
    }
    @keyframes wash { to { background-position:100% 100%; } }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:#ffe066; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.9; }
    nav .pill { padding:10px 20px; border-radius:999px; background:rgba(255,255,255,.18); border:1px solid rgba(255,255,255,.4); opacity:1; }
    nav .pill:hover { background:#fff; color:#8b2fe0; }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; padding:48px 0 40px; }
    .tag { align-self:flex-start; padding:7px 15px; border-radius:999px; background:rgba(255,255,255,.18);
           border:1px solid rgba(255,255,255,.34); font-size:13px; }
    h1 { margin:22px 0 18px; font-size:clamp(38px,6.6vw,86px); line-height:1.02; letter-spacing:-3.2px; font-weight:700; }
    h1 em { font-style:normal; color:#ffe066; }
    main p { margin:0 0 32px; max-width:50ch; font-size:18px; line-height:1.58; opacity:.92; }
    .row { display:flex; gap:14px; flex-wrap:wrap; }
    .btn { padding:15px 30px; border-radius:999px; background:#fff; color:#8b2fe0; font-size:15px; font-weight:600; cursor:pointer; }
    .btn.out { background:rgba(255,255,255,.16); color:#fff; border:1px solid rgba(255,255,255,.44); }
    .cards { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
    .cards article { padding:22px; border-radius:20px; background:rgba(255,255,255,.14);
                     border:1px solid rgba(255,255,255,.26); backdrop-filter:blur(12px); cursor:pointer; }
    .cards article:hover { background:rgba(255,255,255,.24); }
    .cards h3 { margin:0 0 8px; font-size:19px; letter-spacing:-0.5px; }
    .cards p { margin:0; font-size:14px; line-height:1.55; opacity:.86; }
    @media (prefers-reduced-motion:reduce){ .wrap{animation:none} }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none} .cards{grid-template-columns:1fr} }
  `],
})
export class Page4Component {}
