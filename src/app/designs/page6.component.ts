import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 06 — Magenta blocks: hot magenta field, stacked white cards. */
@Component({
  selector: 'app-page6',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM<b>/</b></span><nav><a>Work</a><a>About</a><a class="pill">Let's talk</a></nav></header>
      <main>
        <div class="big">
          <h1>Shaik Moheed</h1>
          <p>Software engineer building consent &amp; e-signature platforms.</p>
        </div>
        <div class="tiles">
          <article class="t white"><span>01</span><h3>Atlas</h3><p>Live country data, WebGL globe.</p></article>
          <article class="t yellow"><span>02</span><h3>Consent Manager</h3><p>Purposes, audits, tenants.</p></article>
          <article class="t cyan"><span>03</span><h3>Notice Registry</h3><p>Editor and live preview.</p></article>
          <article class="t dark"><span>04</span><h3>Design System</h3><p>Tokens and Storybook.</p></article>
        </div>
      </main>
      <footer><span>Angular · TypeScript · Java · Spring Boot · PostgreSQL · Node.js</span><span>© 2026</span></footer>
    </div>
    <app-design-nav [num]="6" designName="Magenta blocks" />
  `,
  styles: [`
    :host { display:block; background:#e6197d; color:#fff; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 30px 104px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:#ffe066; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.9; }
    nav .pill { padding:10px 20px; border-radius:6px; background:#fff; color:#e6197d; font-weight:600; opacity:1; }
    main { flex:1; display:grid; grid-template-columns:1fr 1.1fr; gap:44px; align-items:center; padding:46px 0; }
    h1 { margin:0 0 18px; font-size:clamp(42px,6.6vw,88px); line-height:0.94; letter-spacing:-3.6px; font-weight:700; }
    .big p { margin:0; max-width:26ch; font-size:18px; line-height:1.5; opacity:.92; }
    .tiles { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
    .t { padding:22px; border-radius:14px; min-height:150px; display:flex; flex-direction:column; cursor:pointer; }
    .t span { font-size:12px; font-weight:700; letter-spacing:1.4px; opacity:.6; }
    .t h3 { margin:12px 0 8px; font-size:19px; letter-spacing:-0.5px; }
    .t p { margin:auto 0 0; font-size:13.5px; line-height:1.5; opacity:.76; }
    .t:hover { transform:translateY(-4px); }
    .white { background:#fff; color:#1a0411; }
    .yellow { background:#ffe066; color:#1a0411; }
    .cyan { background:#5de4ff; color:#06202a; }
    .dark { background:#1a0411; color:#fff; }
    footer { display:flex; justify-content:space-between; gap:20px; flex-wrap:wrap; padding-top:22px;
             border-top:1.5px solid rgba(255,255,255,.3); font-size:13px; opacity:.85; }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none} main{grid-template-columns:1fr; gap:28px} }
  `],
})
export class Page6Component {}
