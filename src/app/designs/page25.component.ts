import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 25 — Grain mesh: saturated pink/violet mesh under a film-grain layer. */
@Component({
  selector: 'app-page25',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <div class="grain" aria-hidden="true"></div>
      <header><span class="logo">SM<b>*</b></span><nav><a>Work</a><a>About</a><a class="pill">Contact</a></nav></header>
      <main>
        <span class="tag">Software Engineer · Certinal</span>
        <h1>Shaik<br />Moheed</h1>
        <p>Consent and e-signature platforms — reactive Angular front ends over layered Java services.</p>
        <div class="row"><a class="btn">View work</a><a class="btn out">Download CV</a></div>
      </main>
      <footer>
        <div><b>Atlas</b><span>Country data · globe</span></div>
        <div><b>Consent Manager</b><span>Purposes · audits</span></div>
        <div><b>Notice Registry</b><span>Editor · preview</span></div>
        <div><b>Design System</b><span>Tokens · Storybook</span></div>
      </footer>
    </div>
    <app-design-nav [num]="25" designName="Grain mesh" />
  `,
  styles: [`
    :host { display:block; color:#fff; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap {
      position:relative; min-height:100vh; display:flex; flex-direction:column; padding:26px 32px 104px; isolation:isolate;
      background:
        radial-gradient(52vw 46vw at 12% 12%, #ff2d95 0%, transparent 62%),
        radial-gradient(48vw 44vw at 86% 6%, #7c3aed 0%, transparent 62%),
        radial-gradient(54vw 48vw at 70% 84%, #ff8a3c 0%, transparent 62%),
        radial-gradient(44vw 40vw at 18% 88%, #3b82f6 0%, transparent 60%),
        #1a0726;
    }
    /* Film grain over the whole mesh. */
    .grain { position:absolute; inset:0; z-index:-1; opacity:.28; pointer-events:none;
             background-image:radial-gradient(rgba(255,255,255,.5) .5px, transparent .5px),
                              radial-gradient(rgba(0,0,0,.5) .5px, transparent .5px);
             background-size:3px 3px, 4px 4px; background-position:0 0, 1px 2px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:#ffe066; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.88; }
    nav .pill { padding:10px 20px; border-radius:999px; background:rgba(255,255,255,.2);
                border:1px solid rgba(255,255,255,.4); opacity:1; }
    nav .pill:hover { background:#fff; color:#1a0726; }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; padding:44px 0; }
    .tag { align-self:flex-start; padding:7px 15px; border-radius:999px; background:rgba(255,255,255,.18);
           border:1px solid rgba(255,255,255,.34); font-size:12.5px; }
    h1 { margin:22px 0 18px; font-size:clamp(50px,10vw,136px); line-height:0.86; letter-spacing:-5.4px; font-weight:700; }
    main p { margin:0 0 32px; max-width:44ch; font-size:18px; line-height:1.55; opacity:.9; }
    .row { display:flex; gap:12px; flex-wrap:wrap; }
    .btn { padding:15px 30px; border-radius:999px; background:#fff; color:#1a0726; font-size:15px; font-weight:600; cursor:pointer; }
    .btn.out { background:rgba(255,255,255,.14); color:#fff; border:1px solid rgba(255,255,255,.4); }
    footer { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; padding-top:24px;
             border-top:1px solid rgba(255,255,255,.26); }
    footer b { display:block; font-size:15.5px; margin-bottom:3px; }
    footer span { font-size:12.5px; opacity:.72; }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none} footer{grid-template-columns:repeat(2,1fr)} }
  `],
})
export class Page25Component {}
