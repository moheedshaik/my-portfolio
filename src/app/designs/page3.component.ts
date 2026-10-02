import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 03 — Cobalt split: hard vertical colour split, index list on the right. */
@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <section class="left">
        <span class="logo">SM.</span>
        <div>
          <p class="kick">Software Engineer</p>
          <h1>Shaik<br />Moheed</h1>
          <p class="bio">Consent and e-signature platforms. Angular, Java, PostgreSQL — built to be read six months later.</p>
        </div>
        <div class="socials"><a>GitHub</a><a>LinkedIn</a><a>Email</a></div>
      </section>

      <section class="right">
        <p class="label">Selected work</p>
        <a class="item"><span class="n">01</span><b>Atlas</b><em>Country data explorer</em></a>
        <a class="item"><span class="n">02</span><b>Consent Manager</b><em>DPDP platform</em></a>
        <a class="item"><span class="n">03</span><b>Notice Registry</b><em>Privacy notices</em></a>
        <a class="item"><span class="n">04</span><b>Design System</b><em>Tokens &amp; Storybook</em></a>
        <p class="label mt">Stack</p>
        <p class="stack">Angular · TypeScript · RxJS · Java · Spring Boot · PostgreSQL · Node.js</p>
      </section>
    </div>
    <app-design-nav [num]="3" designName="Cobalt split" />
  `,
  styles: [`
    :host { display:block; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:grid; grid-template-columns:1.05fr 1fr; }
    .left { background:#1540ff; color:#fff; padding:30px 42px 104px; display:flex; flex-direction:column; justify-content:space-between; }
    .logo { font-size:22px; font-weight:700; letter-spacing:-1px; }
    .kick { margin:0 0 14px; font-size:12.5px; font-weight:600; letter-spacing:2.6px; text-transform:uppercase; color:#b9ff3e; }
    h1 { margin:0 0 22px; font-size:clamp(44px,6.2vw,84px); line-height:0.92; letter-spacing:-3.4px; font-weight:700; }
    .bio { margin:0; max-width:34ch; font-size:16.5px; line-height:1.6; opacity:.86; }
    .socials { display:flex; gap:22px; }
    .socials a { font-size:14px; cursor:pointer; border-bottom:1.5px solid rgba(255,255,255,.4); padding-bottom:2px; }
    .socials a:hover { border-color:#b9ff3e; color:#b9ff3e; }

    .right { background:#fffdf5; color:#0d0d0d; padding:30px 42px 104px; display:flex; flex-direction:column; justify-content:center; }
    .label { margin:0 0 16px; font-size:12px; font-weight:600; letter-spacing:2.2px; text-transform:uppercase; color:#8a8a8a; }
    .label.mt { margin-top:40px; }
    .item { display:grid; grid-template-columns:42px 1fr; row-gap:2px; padding:16px 0; border-top:1.5px solid #e6e2d4; cursor:pointer; }
    .item:last-of-type { border-bottom:1.5px solid #e6e2d4; }
    .n { grid-row:span 2; font-size:12.5px; color:#1540ff; font-weight:600; padding-top:4px; }
    .item b { font-size:21px; font-weight:600; letter-spacing:-0.7px; }
    .item em { font-style:normal; font-size:13.5px; color:#7a7a7a; }
    .item:hover { background:#1540ff; color:#fff; padding-left:14px; }
    .item:hover .n, .item:hover em { color:#b9ff3e; }
    .stack { margin:0; font-size:15px; line-height:1.8; color:#4a4a4a; }

    @media (max-width:900px){ .wrap{grid-template-columns:1fr} .left,.right{padding:26px 20px} .right{padding-bottom:104px} .left{min-height:62vh} }
  `],
})
export class Page3Component {}
