import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 89 — Textile: a woven plaid built from overlapping warp and weft bands. */
@Component({
  selector: 'app-page89',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM<b>⊞</b></span><nav><a>Work</a><a>About</a><a>Contact</a></nav></header>

      <main>
        <section class="swatch" aria-hidden="true"><span class="fray"></span></section>

        <section class="copy">
          <p class="kick">Woven in Bengaluru</p>
          <h1>Shaik<br />Moheed</h1>
          <p class="bio">Software engineer at Certinal. Consent and e-signature platforms — warp and weft, front end and back, holding together under tension.</p>

          <div class="threads">
            <div><i style="background:#1f5f4f"></i><b>Warp</b><span>Angular · TypeScript · RxJS</span></div>
            <div><i style="background:#c0472b"></i><b>Weft</b><span>Java · Spring Boot</span></div>
            <div><i style="background:#d9a441"></i><b>Selvedge</b><span>PostgreSQL · Flyway</span></div>
            <div><i style="background:#2d4a7c"></i><b>Finish</b><span>Tests · reviews · migrations</span></div>
          </div>
        </section>
      </main>

      <footer><span>ATLAS</span><span>CONSENT MANAGER</span><span>NOTICE REGISTRY</span><span>DESIGN SYSTEM</span></footer>
    </div>
    <app-design-nav [num]="89" designName="Textile" />
  `,
  styles: [`
    :host { --ink:#241d16;
            display:block; background:#f2ece0; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 34px 104px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:#c0472b; }
    nav { display:flex; gap:24px; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.72; }
    nav a:hover { opacity:1; }
    main { flex:1; display:grid; grid-template-columns:1fr 1.1fr; gap:46px; align-items:center; padding:40px 0; }
    /* Plaid: two striped gradients crossed, each semi-transparent so they blend at the intersections. */
    .swatch { position:relative; aspect-ratio:1/1.08; border:1px solid rgba(36,29,22,.3);
              box-shadow:0 22px 44px -20px rgba(36,29,22,.6);
              background-color:#1f5f4f;
              background-image:
                repeating-linear-gradient(90deg,
                  rgba(192,71,43,.85) 0 26px, transparent 26px 64px,
                  rgba(217,164,65,.8) 64px 74px, transparent 74px 120px,
                  rgba(45,74,124,.75) 120px 140px, transparent 140px 190px),
                repeating-linear-gradient(0deg,
                  rgba(192,71,43,.85) 0 26px, transparent 26px 64px,
                  rgba(217,164,65,.8) 64px 74px, transparent 74px 120px,
                  rgba(45,74,124,.75) 120px 140px, transparent 140px 190px); }
    /* Frayed bottom edge. */
    .fray { position:absolute; left:0; right:0; bottom:-9px; height:10px;
            background:repeating-linear-gradient(90deg,#1f5f4f 0 3px, transparent 3px 7px); }
    .kick { margin:0 0 14px; font-size:10.5px; font-weight:700; letter-spacing:2.8px; text-transform:uppercase; color:#c0472b; }
    h1 { margin:0 0 18px; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(42px,6.6vw,86px); line-height:0.94; letter-spacing:-2px; }
    .bio { margin:0 0 28px; max-width:38ch; font-size:16px; line-height:1.68; color:#5a5046; }
    .threads div { display:grid; grid-template-columns:auto 86px 1fr; gap:14px; align-items:center;
                   padding:10px 0; border-bottom:1px solid #ded5c5; }
    .threads i { width:22px; height:8px; border-radius:2px; }
    .threads b { font-size:11.5px; letter-spacing:1.6px; text-transform:uppercase; }
    .threads span { font-size:14px; color:#5a5046; }
    footer { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; }
    footer span { padding:11px 6px; text-align:center; border:1px solid #ded5c5; background:#f8f4ea;
                  font-size:10.5px; font-weight:700; letter-spacing:1.4px; cursor:pointer; }
    footer span:hover { background:#1f5f4f; color:#f8f4ea; border-color:#1f5f4f; }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} main{grid-template-columns:1fr; gap:28px}
      footer{grid-template-columns:1fr 1fr} }
  `],
})
export class Page89Component {}
