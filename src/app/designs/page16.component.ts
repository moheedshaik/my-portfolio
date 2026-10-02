import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 16 — Sticky notes: bright yellow desk, tilted paper notes, taped headline. */
@Component({
  selector: 'app-page16',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM.</span><nav><a>Work</a><a>About</a><a>Contact</a></nav></header>
      <main>
        <div class="head">
          <span class="tape"></span>
          <h1>Shaik Moheed</h1>
          <p>Software engineer · Angular &amp; Java</p>
        </div>
        <div class="notes">
          <article class="n n1"><b>Atlas</b><p>217 countries, live World Bank data, WebGL globe.</p></article>
          <article class="n n2"><b>Consent Manager</b><p>Versioned purposes, audit trails, tenants.</p></article>
          <article class="n n3"><b>Notice Registry</b><p>Rich editor with live preview.</p></article>
          <article class="n n4"><b>Stack</b><p>Angular · TS · RxJS · Java · Spring · Postgres</p></article>
        </div>
      </main>
      <footer><span>Open to new work</span><span>Bengaluru, IN</span><span>© 2026</span></footer>
    </div>
    <app-design-nav [num]="16" designName="Sticky notes" />
  `,
  styles: [`
    :host { display:block; background:#ffd60a; color:#1a1500; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:24px 30px 104px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:23px; font-weight:700; letter-spacing:-1px; }
    nav { display:flex; gap:24px; }
    nav a { font-size:14.5px; cursor:pointer; border-bottom:2px solid transparent; }
    nav a:hover { border-color:#1a1500; }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; gap:40px; padding:36px 0; }
    .head { position:relative; align-self:center; background:#fff; padding:30px 48px; text-align:center;
            transform:rotate(-1.5deg); box-shadow:0 16px 34px -14px rgba(26,21,0,.45); }
    .tape { position:absolute; top:-14px; left:50%; width:110px; height:28px; transform:translateX(-50%) rotate(-3deg);
            background:rgba(255,255,255,.55); border-left:1px dashed rgba(26,21,0,.2); border-right:1px dashed rgba(26,21,0,.2); }
    h1 { margin:0 0 8px; font-size:clamp(34px,5.4vw,62px); line-height:1; letter-spacing:-2.4px; font-weight:700; }
    .head p { margin:0; font-size:15px; color:#6b6240; letter-spacing:.4px; }
    .notes { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
    .n { padding:22px; min-height:170px; box-shadow:0 14px 28px -12px rgba(26,21,0,.4); cursor:pointer; }
    .n b { display:block; font-size:17px; margin-bottom:8px; }
    .n p { margin:0; font-size:13.5px; line-height:1.55; opacity:.75; }
    .n1 { background:#ff8fab; transform:rotate(-2deg); }
    .n2 { background:#9bf6ff; transform:rotate(1.6deg); }
    .n3 { background:#caffbf; transform:rotate(-1deg); }
    .n4 { background:#fff; transform:rotate(2.2deg); }
    .n:hover { transform:rotate(0deg) translateY(-6px); }
    footer { display:flex; justify-content:space-between; gap:16px; flex-wrap:wrap; padding-top:18px;
             border-top:2.5px solid #1a1500; font-size:13px; font-weight:500; }
    @media (max-width:900px){ .wrap{padding:20px 16px 104px} .notes{grid-template-columns:repeat(2,1fr)} .head{padding:24px 26px} }
  `],
})
export class Page16Component {}
