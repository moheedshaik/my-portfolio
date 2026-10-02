import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 41 — Checkerboard: hard black/white chequer with one hot accent. */
@Component({
  selector: 'app-page41',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM.</span><nav><a>Work</a><a>About</a><a class="pill">Contact</a></nav></header>
      <main>
        <div class="board" aria-hidden="true"></div>
        <div class="panel">
          <p class="kick">Software Engineer · Certinal</p>
          <h1>Shaik<br />Moheed</h1>
          <p class="bio">Consent and e-signature platforms, built with Angular and Java. Black, white, and one good colour.</p>
          <a class="btn">See the work →</a>
        </div>
      </main>
      <footer><span>Angular</span><span>TypeScript</span><span>Java</span><span>Spring Boot</span><span>PostgreSQL</span><span>Node.js</span></footer>
    </div>
    <app-design-nav [num]="41" designName="Checkerboard" />
  `,
  styles: [`
    :host { --hot:#ff3366;
            display:block; background:#fff; color:#0a0a0a; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:24px 30px 104px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; }
    nav .pill { padding:10px 22px; background:var(--hot); color:#fff; font-weight:600; }
    main { position:relative; flex:1; display:flex; align-items:center; padding:40px 0; }
    .board { position:absolute; inset:0;
             background-image:
               conic-gradient(#0a0a0a 90deg, transparent 90deg 180deg, #0a0a0a 180deg 270deg, transparent 270deg);
             background-size:76px 76px; opacity:.1; }
    .panel { position:relative; background:#0a0a0a; color:#fff; padding:44px 48px; max-width:620px;
             box-shadow:16px 16px 0 var(--hot); }
    .kick { margin:0 0 16px; font-size:11.5px; font-weight:700; letter-spacing:2.4px; text-transform:uppercase; color:var(--hot); }
    h1 { margin:0 0 20px; font-size:clamp(42px,6.4vw,82px); line-height:0.9; letter-spacing:-3.4px; font-weight:700; }
    .bio { margin:0 0 28px; font-size:16.5px; line-height:1.6; opacity:.8; max-width:38ch; }
    .btn { display:inline-block; padding:14px 28px; background:var(--hot); color:#fff; font-size:15px; font-weight:600; cursor:pointer; }
    .btn:hover { background:#fff; color:#0a0a0a; }
    footer { display:flex; flex-wrap:wrap; gap:0; border:2px solid #0a0a0a; }
    footer span { flex:1 1 140px; padding:12px 16px; font-size:12.5px; font-weight:600; text-align:center;
                  border-right:2px solid #0a0a0a; }
    footer span:last-child { border-right:0; }
    footer span:nth-child(even) { background:#0a0a0a; color:#fff; }
    @media (max-width:900px){ .wrap{padding:20px 16px 104px} nav a:not(.pill){display:none} .panel{padding:28px 24px; box-shadow:10px 10px 0 var(--hot)} }
  `],
})
export class Page41Component {}
