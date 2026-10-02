import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 28 — Bauhaus: primary geometry, strict modular grid, no decoration. */
@Component({
  selector: 'app-page28',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM</span><nav><a>Work</a><a>About</a><a>Contact</a></nav></header>
      <main>
        <div class="cell name">
          <h1>Shaik<br />Moheed</h1>
          <p>Software Engineer</p>
        </div>
        <div class="cell red"><span class="circle"></span></div>
        <div class="cell blue"><span class="tri"></span></div>
        <div class="cell bio">
          <p>Consent and e-signature platforms, built with Angular and Java. Form follows function — the function is shipping.</p>
        </div>
        <div class="cell yellow"><span class="square"></span></div>
        <div class="cell list">
          <a>Atlas</a><a>Consent Manager</a><a>Notice Registry</a><a>Design System</a>
        </div>
        <div class="cell dark"><a class="cta">View work →</a></div>
      </main>
    </div>
    <app-design-nav [num]="28" designName="Bauhaus" />
  `,
  styles: [`
    :host { --r:#e63329; --b:#1b55c4; --y:#f5c518;
            display:block; background:#f2efe6; color:#121212; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:22px 26px 104px; }
    header { display:flex; justify-content:space-between; align-items:center; padding-bottom:14px; border-bottom:3px solid #121212; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    nav { display:flex; gap:24px; }
    nav a { font-size:14px; cursor:pointer; }
    nav a:hover { color:var(--r); }
    main { flex:1; display:grid; grid-template-columns:repeat(4,1fr); grid-auto-rows:minmax(130px,1fr);
           gap:3px; background:#121212; border:3px solid #121212; margin-top:22px; }
    .cell { background:#f2efe6; display:flex; align-items:center; justify-content:center; padding:22px; }
    .name { grid-column:span 2; grid-row:span 2; flex-direction:column; align-items:flex-start; justify-content:center; }
    h1 { margin:0 0 10px; font-size:clamp(34px,4.8vw,62px); line-height:0.94; letter-spacing:-2.6px; font-weight:700; }
    .name p { margin:0; font-size:13px; letter-spacing:2.2px; text-transform:uppercase; color:var(--r); }
    .red { background:var(--r); } .blue { background:var(--b); } .yellow { background:var(--y); }
    .circle { width:76px; height:76px; border-radius:50%; background:#f2efe6; }
    .tri { width:0; height:0; border-left:44px solid transparent; border-right:44px solid transparent; border-bottom:76px solid var(--y); }
    .square { width:72px; height:72px; background:var(--b); }
    .bio { grid-column:span 2; }
    .bio p { margin:0; font-size:15.5px; line-height:1.6; }
    .list { grid-column:span 2; flex-direction:column; align-items:stretch; justify-content:center; gap:2px; padding:16px 22px; }
    .list a { padding:8px 0; border-bottom:1.5px solid rgba(18,18,18,.18); font-size:15px; cursor:pointer; }
    .list a:hover { color:var(--b); padding-left:8px; }
    .dark { background:#121212; }
    .cta { color:#f2efe6; font-size:16px; font-weight:600; cursor:pointer; }
    .cta:hover { color:var(--y); }
    @media (max-width:900px){
      .wrap{padding:20px 16px 104px} main{grid-template-columns:repeat(2,1fr)}
      .name,.bio,.list{grid-column:span 2} .name{grid-row:auto}
    }
  `],
})
export class Page28Component {}
