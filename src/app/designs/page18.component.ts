import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 18 — Lavender soft-UI: extruded panels pressed out of a lavender surface. */
@Component({
  selector: 'app-page18',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo soft">SM.</span><nav><a class="soft">Work</a><a class="soft">About</a><a class="soft on">Contact</a></nav></header>
      <main>
        <section class="soft hero">
          <p class="kick">Software Engineer · Certinal</p>
          <h1>Shaik Moheed</h1>
          <p class="bio">Consent and e-signature platforms. Angular on the front end, Java and PostgreSQL underneath.</p>
          <div class="row"><a class="soft btn on">View work</a><a class="soft btn">Download CV</a></div>
        </section>
        <aside class="col">
          <div class="soft stat"><b>3+</b><span>Years</span></div>
          <div class="soft stat"><b>BE</b><span>ECE</span></div>
          <div class="soft stat"><b>4</b><span>Projects</span></div>
          <div class="soft stat"><b>6</b><span>Tools</span></div>
        </aside>
      </main>
      <footer class="soft">Angular · TypeScript · RxJS · Java · Spring Boot · PostgreSQL · Node.js</footer>
    </div>
    <app-design-nav [num]="18" designName="Lavender soft-UI" />
  `,
  styles: [`
    :host { --bg:#e8e4f8; --ink:#342a52; --accent:#6c4df6;
            display:block; background:var(--bg); color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; gap:18px; padding:26px 32px 104px; max-width:1180px; margin:0 auto; }
    /* Extruded surface: light from top-left, shadow bottom-right. */
    .soft { background:var(--bg); border-radius:20px; box-shadow:-7px -7px 16px rgba(255,255,255,.9), 7px 7px 18px rgba(52,42,82,.18); }
    header { display:flex; justify-content:space-between; align-items:center; gap:16px; }
    .logo { padding:12px 20px; font-size:21px; font-weight:700; letter-spacing:-1px; }
    nav { display:flex; gap:12px; }
    nav a { padding:12px 20px; font-size:14px; cursor:pointer; }
    nav a:hover, .btn:hover { box-shadow:inset -4px -4px 10px rgba(255,255,255,.9), inset 4px 4px 10px rgba(52,42,82,.2); }
    .on { background:var(--accent); color:#fff; box-shadow:-6px -6px 14px rgba(255,255,255,.75), 6px 6px 16px rgba(108,77,246,.42); }
    main { flex:1; display:grid; grid-template-columns:1.6fr 1fr; gap:18px; }
    .hero { padding:44px 46px; display:flex; flex-direction:column; justify-content:center; }
    .kick { margin:0 0 16px; font-size:12px; font-weight:600; letter-spacing:2.2px; text-transform:uppercase; color:var(--accent); }
    h1 { margin:0 0 18px; font-size:clamp(36px,5.2vw,64px); line-height:1; letter-spacing:-2.6px; font-weight:700; }
    .bio { margin:0 0 30px; max-width:40ch; font-size:16.5px; line-height:1.6; opacity:.74; }
    .row { display:flex; gap:14px; flex-wrap:wrap; }
    .btn { padding:14px 26px; border-radius:999px; font-size:14.5px; font-weight:500; cursor:pointer; }
    .col { display:grid; grid-template-rows:repeat(4,1fr); gap:18px; }
    .stat { display:flex; align-items:center; gap:16px; padding:0 26px; }
    .stat b { font-size:34px; font-weight:700; letter-spacing:-1.6px; color:var(--accent); }
    .stat span { font-size:12px; letter-spacing:1.6px; text-transform:uppercase; opacity:.6; }
    footer { padding:18px 26px; font-size:13.5px; text-align:center; opacity:.72; }
    @media (max-width:900px){ .wrap{padding:22px 16px 104px} main{grid-template-columns:1fr} .hero{padding:30px 24px}
      .col{grid-template-columns:repeat(2,1fr); grid-template-rows:auto} .stat{padding:20px} }
  `],
})
export class Page18Component {}
