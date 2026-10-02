import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 59 — Forecast: a weather app, with the career as the week ahead. */
@Component({
  selector: 'app-page59',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="loc">◎ Bengaluru, IN</span><nav><a>Work</a><a>About</a><a>Contact</a></nav></header>

      <main>
        <section class="now">
          <span class="sun" aria-hidden="true"></span>
          <p class="cond">Clear · shipping steadily</p>
          <h1>Shaik Moheed</h1>
          <p class="temp">3<sup>+</sup><span>yrs</span></p>
          <p class="role">Software Engineer · Angular &amp; Java</p>
        </section>

        <section class="week">
          <article><b>BE</b><span class="ic">◐</span><span>ECE</span></article>
          <article><b>FE</b><span class="ic">☀</span><span>Angular</span></article>
          <article><b>BE2</b><span class="ic">☁</span><span>Java</span></article>
          <article><b>DB</b><span class="ic">☂</span><span>Postgres</span></article>
          <article class="on"><b>NOW</b><span class="ic">★</span><span>Certinal</span></article>
        </section>

        <section class="detail">
          <div><b>Consent</b><span>Purposes, audits, tenants</span></div>
          <div><b>E-signature</b><span>Envelopes, workflows</span></div>
          <div><b>Atlas</b><span>217 countries, live data</span></div>
          <div><b>Status</b><span class="ok">● Available</span></div>
        </section>
      </main>
    </div>
    <app-design-nav [num]="59" designName="Forecast" />
  `,
  styles: [`
    :host { display:block; color:#06283d; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 30px 104px;
            background:linear-gradient(180deg,#7fd4ff 0%,#aee6ff 42%,#ffe9b8 100%); }
    header { display:flex; justify-content:space-between; align-items:center; }
    .loc { font-size:14px; font-weight:600; }
    nav { display:flex; gap:24px; }
    nav a { font-size:14px; cursor:pointer; opacity:.74; }
    nav a:hover { opacity:1; }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; gap:26px; padding:34px 0; max-width:980px;
           width:100%; margin:0 auto; }
    .now { position:relative; text-align:center; padding:26px 0 10px; }
    .sun { position:absolute; left:50%; top:-26px; transform:translateX(-50%); width:120px; height:120px;
           border-radius:50%; background:radial-gradient(circle at 40% 36%, #fff6c9, #ffd84d 56%, #ffb703);
           box-shadow:0 0 70px rgba(255,183,3,.7); }
    .cond { position:relative; margin:106px 0 10px; font-size:14px; letter-spacing:.4px; opacity:.74; }
    h1 { margin:0 0 6px; font-size:clamp(34px,5.4vw,58px); line-height:1; letter-spacing:-2.2px; font-weight:700; }
    .temp { margin:4px 0 6px; font-size:clamp(62px,12vw,132px); line-height:1; letter-spacing:-6px; font-weight:700; }
    .temp sup { font-size:.42em; vertical-align:super; letter-spacing:0; }
    .temp span { font-size:.2em; letter-spacing:2px; margin-left:8px; opacity:.6; }
    .role { margin:0; font-size:13px; letter-spacing:2.2px; text-transform:uppercase; opacity:.66; }
    .week { display:grid; grid-template-columns:repeat(5,1fr); gap:12px; }
    .week article { display:grid; gap:7px; justify-items:center; padding:18px 10px; border-radius:20px;
                    background:rgba(255,255,255,.52); backdrop-filter:blur(10px); cursor:pointer; }
    .week b { font-size:11.5px; letter-spacing:1.6px; opacity:.6; }
    .ic { font-size:26px; }
    .week span:last-child { font-size:12.5px; font-weight:500; }
    .week .on { background:#06283d; color:#fff; }
    .week .on b { opacity:.72; }
    .detail { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; }
    .detail div { padding:16px 18px; border-radius:18px; background:rgba(255,255,255,.52); backdrop-filter:blur(10px); }
    .detail b { display:block; font-size:12px; letter-spacing:1.4px; text-transform:uppercase; opacity:.56; margin-bottom:5px; }
    .detail span { font-size:14px; font-weight:500; }
    .ok { color:#0a7a3f; }
    @media (max-width:900px){
      .wrap{padding:22px 16px 104px} .week{grid-template-columns:repeat(3,1fr)}
      .detail{grid-template-columns:1fr 1fr} nav a:nth-child(n+3){display:none}
    }
  `],
})
export class Page59Component {}
