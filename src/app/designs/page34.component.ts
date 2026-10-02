import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 34 — Emerald & gold: deep green, serif display, thin gold rules. */
@Component({
  selector: 'app-page34',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header>
        <span class="logo">S<i>·</i>M</span>
        <nav><a>Work</a><a>About</a><a>Journal</a><a>Contact</a></nav>
      </header>
      <main>
        <p class="kick">Software Engineer — Certinal</p>
        <h1>Shaik<br /><em>Moheed</em></h1>
        <div class="rule"></div>
        <div class="two">
          <p>Consent management and e-signature platforms, built with Angular and Java. Careful work, finished properly.</p>
          <div class="facts">
            <div><b>Based</b><span>Bengaluru, India</span></div>
            <div><b>Degree</b><span>BE — Electronics &amp; Communication</span></div>
            <div><b>Focus</b><span>Angular · Java · PostgreSQL</span></div>
          </div>
        </div>
      </main>
      <footer>
        <a>Atlas</a><a>Consent Manager</a><a>Notice Registry</a><a>Design System</a>
      </footer>
    </div>
    <app-design-nav [num]="34" designName="Emerald & gold" />
  `,
  styles: [`
    :host { --gold:#d9b96a;
            display:block; background:#07321f; color:#f2efe3; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:28px 40px 104px; max-width:1180px; margin:0 auto; }
    header { display:flex; justify-content:space-between; align-items:center; padding-bottom:18px; border-bottom:1px solid rgba(217,185,106,.4); }
    .logo { font-family:Georgia,"Times New Roman",serif; font-size:24px; letter-spacing:2px; }
    .logo i { color:var(--gold); font-style:normal; }
    nav { display:flex; gap:28px; }
    nav a { font-size:13.5px; letter-spacing:.6px; cursor:pointer; opacity:.8; }
    nav a:hover { color:var(--gold); opacity:1; }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; padding:56px 0; }
    .kick { margin:0 0 20px; font-size:11.5px; font-weight:500; letter-spacing:3.2px; text-transform:uppercase; color:var(--gold); }
    h1 { margin:0 0 34px; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(46px,8vw,106px); line-height:0.96; letter-spacing:-2px; }
    h1 em { font-style:italic; color:var(--gold); }
    .rule { height:1px; background:linear-gradient(90deg,var(--gold),transparent); margin-bottom:34px; }
    .two { display:grid; grid-template-columns:1fr 1fr; gap:48px; }
    .two p { margin:0; font-size:16.5px; line-height:1.72; opacity:.82; max-width:38ch; }
    .facts div { display:flex; gap:16px; padding:11px 0; border-bottom:1px solid rgba(242,239,227,.14); }
    .facts b { min-width:86px; font-size:11.5px; font-weight:500; letter-spacing:1.6px; text-transform:uppercase; color:var(--gold); }
    .facts span { font-size:14.5px; opacity:.86; }
    footer { display:flex; flex-wrap:wrap; gap:34px; padding-top:20px; border-top:1px solid rgba(217,185,106,.4); }
    footer a { font-family:Georgia,"Times New Roman",serif; font-size:17px; cursor:pointer; opacity:.84; }
    footer a:hover { color:var(--gold); opacity:1; }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav{gap:16px} nav a:nth-child(n+3){display:none}
      .two{grid-template-columns:1fr; gap:28px} footer{gap:18px} }
  `],
})
export class Page34Component {}
