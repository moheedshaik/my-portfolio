import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 37 — Pastel dream: airy multi-stop pastel wash, very light and rounded. */
@Component({
  selector: 'app-page37',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">sm<b>.</b></span><nav><a>Work</a><a>About</a><a>Resume</a><a class="pill">Contact</a></nav></header>
      <main>
        <span class="tag">✦ Software Engineer at Certinal</span>
        <h1>Soft on the eyes,<br /><em>strict in the code</em></h1>
        <p>I'm Shaik Moheed. I build consent and e-signature platforms — Angular front ends over Java services.</p>
        <div class="row"><a class="btn">View work</a><a class="btn out">Download CV</a></div>
      </main>
      <section class="tiles">
        <article class="a"><b>Atlas</b><span>Country data · globe</span></article>
        <article class="b"><b>Consent Manager</b><span>Purposes · audits</span></article>
        <article class="c"><b>Notice Registry</b><span>Editor · preview</span></article>
        <article class="d"><b>Design System</b><span>Tokens · Storybook</span></article>
      </section>
    </div>
    <app-design-nav [num]="37" designName="Pastel dream" />
  `,
  styles: [`
    :host { display:block; color:#3b3357; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:28px 36px 104px;
            background:linear-gradient(150deg,#ffe3f1 0%,#e8e4ff 26%,#dff3ff 52%,#e2fff1 76%,#fff6e0 100%); }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:#ff8fc5; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.68; }
    nav a:hover { opacity:1; }
    nav .pill { padding:10px 22px; border-radius:999px; background:#fff; opacity:1; font-weight:600;
                box-shadow:0 8px 20px -10px rgba(59,51,87,.5); }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding:52px 0; }
    .tag { padding:8px 17px; border-radius:999px; background:rgba(255,255,255,.76); font-size:13px; font-weight:500; }
    h1 { margin:24px 0 18px; font-size:clamp(36px,6.2vw,80px); line-height:1.04; letter-spacing:-2.8px; font-weight:700; }
    h1 em { font-style:normal; background:linear-gradient(100deg,#ff8fc5,#a98bff 50%,#6ad6ff);
            -webkit-background-clip:text; background-clip:text; color:transparent; }
    main p { margin:0 0 32px; max-width:50ch; font-size:17px; line-height:1.62; opacity:.68; }
    .row { display:flex; gap:12px; flex-wrap:wrap; justify-content:center; }
    .btn { padding:15px 30px; border-radius:999px; background:#3b3357; color:#fff; font-size:15px; font-weight:500; cursor:pointer;
           box-shadow:0 16px 32px -16px rgba(59,51,87,.8); }
    .btn.out { background:rgba(255,255,255,.82); color:#3b3357; box-shadow:0 10px 24px -14px rgba(59,51,87,.6); }
    .tiles { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
    .tiles article { border-radius:24px; padding:22px; cursor:pointer; box-shadow:0 14px 30px -18px rgba(59,51,87,.6); }
    .tiles b { display:block; font-size:16.5px; margin-bottom:5px; }
    .tiles span { font-size:12.5px; opacity:.6; }
    .a{background:#ffd9ec} .b{background:#ddd6ff} .c{background:#d2efff} .d{background:#fff0cc}
    .tiles article:hover { transform:translateY(-4px); }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none} .tiles{grid-template-columns:1fr 1fr} }
  `],
})
export class Page37Component {}
