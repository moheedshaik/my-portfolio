import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 15 — Turquoise deck: turquoise field, fanned-out rotated project cards. */
@Component({
  selector: 'app-page15',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM<b>◆</b></span><nav><a>Work</a><a>About</a><a class="pill">Hire me</a></nav></header>
      <main>
        <div class="copy">
          <span class="tag">Software Engineer</span>
          <h1>Shaik<br />Moheed</h1>
          <p>Consent and e-signature platforms, built with Angular and Java — and finished properly.</p>
          <a class="btn">Browse the deck →</a>
        </div>
        <div class="deck">
          <article class="c c1"><b>Atlas</b><span>Country data · WebGL globe</span></article>
          <article class="c c2"><b>Consent Manager</b><span>DPDP platform</span></article>
          <article class="c c3"><b>Notice Registry</b><span>Editor · live preview</span></article>
          <article class="c c4"><b>Design System</b><span>Tokens · Storybook</span></article>
        </div>
      </main>
    </div>
    <app-design-nav [num]="15" designName="Turquoise deck" />
  `,
  styles: [`
    :host { display:block; background:#12d7c0; color:#06332e; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 32px 104px; overflow:hidden; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:#fff; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.82; }
    nav .pill { padding:10px 20px; border-radius:10px; background:#06332e; color:#12d7c0; opacity:1; font-weight:600; }
    main { flex:1; display:grid; grid-template-columns:1fr 1fr; gap:36px; align-items:center; padding:40px 0; }
    .tag { display:inline-block; padding:6px 14px; border-radius:999px; background:#fff; font-size:12.5px; font-weight:600; }
    h1 { margin:20px 0 18px; font-size:clamp(46px,7.6vw,100px); line-height:0.9; letter-spacing:-4px; font-weight:700; }
    .copy p { margin:0 0 30px; max-width:34ch; font-size:17px; line-height:1.56; opacity:.8; }
    .btn { display:inline-block; padding:15px 30px; border-radius:10px; background:#06332e; color:#fff; font-size:15px; font-weight:600; cursor:pointer; }
    .btn:hover { transform:translateY(-2px); }
    .deck { position:relative; height:380px; }
    .c { position:absolute; width:260px; padding:22px; border-radius:18px; background:#fff;
         box-shadow:0 22px 44px -18px rgba(6,51,46,.55); cursor:pointer; transition:transform .25s ease; }
    .c b { display:block; font-size:19px; letter-spacing:-0.5px; margin-bottom:6px; }
    .c span { font-size:13px; color:#5c7a76; }
    .c1 { top:10px; left:4%; transform:rotate(-8deg); }
    .c2 { top:70px; left:24%; transform:rotate(-2deg); background:#fff6cc; }
    .c3 { top:140px; left:44%; transform:rotate(5deg); background:#ffd9e8; }
    .c4 { top:210px; left:20%; transform:rotate(-5deg); background:#06332e; color:#fff; }
    .c4 span { color:rgba(255,255,255,.7); }
    .c:hover { transform:rotate(0deg) translateY(-8px); z-index:5; }
    @media (max-width:900px){
      .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none}
      main{grid-template-columns:1fr; gap:20px} .deck{height:300px} .c{width:210px}
      .c1{left:0} .c2{left:16%} .c3{left:32%} .c4{left:12%}
    }
  `],
})
export class Page15Component {}
