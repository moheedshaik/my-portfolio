import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 10 — Colour bands: five vivid vertical bands, white cards floating over. */
@Component({
  selector: 'app-page10',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <div class="bands" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      <header><span class="logo">SM.</span><nav><a>Work</a><a>About</a><a class="pill">Contact</a></nav></header>
      <main>
        <div class="panel">
          <p class="kick">Software Engineer · Certinal</p>
          <h1>Shaik Moheed</h1>
          <p class="bio">I build consent and e-signature platforms — Angular front ends over Java services, shipped with tests that run.</p>
          <div class="row"><a class="btn">View work</a><a class="btn out">Download CV</a></div>
        </div>
        <div class="mini">
          <article><b>Atlas</b><span>Live country data · WebGL globe</span></article>
          <article><b>Consent Manager</b><span>Purposes · audits · tenants</span></article>
          <article><b>Notice Registry</b><span>Editor · live preview</span></article>
        </div>
      </main>
    </div>
    <app-design-nav [num]="10" designName="Colour bands" />
  `,
  styles: [`
    :host { display:block; background:#fff; color:#141414; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:26px 30px 104px; isolation:isolate; }
    .bands { position:fixed; inset:0; z-index:-1; display:grid; grid-template-columns:repeat(5,1fr); }
    .bands i:nth-child(1){ background:#ff3b5c; } .bands i:nth-child(2){ background:#ff9f1c; }
    .bands i:nth-child(3){ background:#2ec4b6; } .bands i:nth-child(4){ background:#3a86ff; }
    .bands i:nth-child(5){ background:#9b5de5; }
    header { display:flex; justify-content:space-between; align-items:center; color:#fff; }
    .logo { font-size:23px; font-weight:700; letter-spacing:-1px; }
    nav { display:flex; gap:22px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; }
    nav .pill { padding:10px 20px; border-radius:999px; background:#fff; color:#141414; font-weight:600; }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; align-items:center; gap:18px; padding:40px 0; }
    .panel { width:min(760px,100%); background:#fff; border-radius:26px; padding:44px 46px;
             box-shadow:0 30px 70px -26px rgba(0,0,0,.5); text-align:center; }
    .kick { margin:0 0 16px; font-size:12px; font-weight:600; letter-spacing:2.4px; text-transform:uppercase; color:#8a8a8a; }
    h1 { margin:0 0 18px; font-size:clamp(38px,5.6vw,66px); line-height:1; letter-spacing:-2.6px; font-weight:700; }
    .bio { margin:0 auto 30px; max-width:46ch; font-size:16.5px; line-height:1.6; color:#5a5a5a; }
    .row { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
    .btn { padding:14px 28px; border-radius:999px; background:#141414; color:#fff; font-size:15px; font-weight:500; cursor:pointer; }
    .btn.out { background:#f0f0f0; color:#141414; }
    .mini { width:min(760px,100%); display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
    .mini article { background:rgba(255,255,255,.94); border-radius:16px; padding:18px; cursor:pointer;
                    box-shadow:0 14px 34px -18px rgba(0,0,0,.55); }
    .mini b { display:block; font-size:15.5px; margin-bottom:4px; }
    .mini span { font-size:12.5px; color:#6a6a6a; }
    .mini article:hover { transform:translateY(-3px); }
    @media (max-width:900px){
      .wrap{padding:22px 16px 104px} nav a:not(.pill){display:none}
      .panel{padding:30px 22px} .mini{grid-template-columns:1fr} .bands{grid-template-columns:repeat(3,1fr)}
      .bands i:nth-child(4),.bands i:nth-child(5){display:none}
    }
  `],
})
export class Page10Component {}
