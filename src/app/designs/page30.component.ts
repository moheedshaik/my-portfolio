import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 30 — Spotlight: electric blue stage, monogram disc, centred billing. */
@Component({
  selector: 'app-page30',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <div class="beam" aria-hidden="true"></div>
      <header><span class="logo">SM.</span><nav><a>Work</a><a>About</a><a>Resume</a><a class="pill">Contact</a></nav></header>
      <main>
        <div class="disc"><span>SM</span></div>
        <h1>Shaik Moheed</h1>
        <p class="role">Software Engineer · Angular &amp; Java</p>
        <p class="bio">Consent and e-signature platforms, built end to end — reactive front ends, layered services, migrations that behave.</p>
        <div class="row"><a class="btn">View work</a><a class="btn out">Download CV</a></div>
      </main>
      <footer>
        <a>Atlas</a><span>·</span><a>Consent Manager</a><span>·</span><a>Notice Registry</a><span>·</span><a>Design System</a>
      </footer>
    </div>
    <app-design-nav [num]="30" designName="Spotlight" />
  `,
  styles: [`
    :host { display:block; background:#0b32e8; color:#fff; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:26px 32px 104px; overflow:hidden; isolation:isolate; }
    .beam { position:absolute; inset:0; z-index:-1;
            background:radial-gradient(52vw 46vw at 50% 34%, rgba(255,255,255,.3), transparent 62%); }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.88; }
    nav .pill { padding:10px 20px; border-radius:999px; background:#d8ff3e; color:#06185c; opacity:1; font-weight:600; }
    main { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:36px 0; }
    .disc { width:112px; height:112px; border-radius:50%; background:#d8ff3e; color:#06185c;
            display:grid; place-items:center; font-size:34px; font-weight:700; letter-spacing:-1.5px;
            box-shadow:0 0 0 14px rgba(216,255,62,.16), 0 24px 50px -20px rgba(0,0,0,.6); }
    h1 { margin:28px 0 12px; font-size:clamp(38px,7vw,88px); line-height:1; letter-spacing:-3.4px; font-weight:700; }
    .role { margin:0 0 20px; font-size:14px; letter-spacing:2.4px; text-transform:uppercase; color:#d8ff3e; }
    .bio { margin:0 0 32px; max-width:50ch; font-size:17px; line-height:1.6; opacity:.86; }
    .row { display:flex; gap:12px; flex-wrap:wrap; justify-content:center; }
    .btn { padding:15px 30px; border-radius:999px; background:#fff; color:#0b32e8; font-size:15px; font-weight:600; cursor:pointer; }
    .btn.out { background:transparent; color:#fff; border:1.5px solid rgba(255,255,255,.5); }
    .btn:hover { transform:translateY(-2px); }
    footer { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; align-items:center;
             padding-top:22px; border-top:1px solid rgba(255,255,255,.26); font-size:14px; }
    footer a { cursor:pointer; opacity:.9; }
    footer a:hover { color:#d8ff3e; }
    footer span { opacity:.45; }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none} .disc{width:88px;height:88px;font-size:26px} }
  `],
})
export class Page30Component {}
