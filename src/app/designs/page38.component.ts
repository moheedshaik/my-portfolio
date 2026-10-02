import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 38 — Horizon: yellow sky over a black ground, name straddling the seam. */
@Component({
  selector: 'app-page38',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <section class="sky">
        <header><span class="logo">SM.</span><nav><a>Work</a><a>About</a><a>Contact</a></nav></header>
        <p class="kick">Software Engineer · Certinal</p>
      </section>

      <h1 class="seam">MOHEED</h1>

      <section class="ground">
        <div class="cols">
          <p class="bio">Consent and e-signature platforms, built with Angular and Java. I care about the bit after "it works on my machine".</p>
          <div class="list">
            <a><b>Atlas</b><span>2026</span></a>
            <a><b>Consent Manager</b><span>2025</span></a>
            <a><b>Notice Registry</b><span>2025</span></a>
            <a><b>Design System</b><span>2024</span></a>
          </div>
          <div class="meta">
            <p><b>Stack</b>Angular · TypeScript · RxJS · Java · Spring Boot · PostgreSQL</p>
            <p><b>Elsewhere</b>GitHub · LinkedIn · Email</p>
          </div>
        </div>
      </section>
    </div>
    <app-design-nav [num]="38" designName="Horizon" />
  `,
  styles: [`
    :host { display:block; background:#0d0d0d; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; }
    .sky { background:#ffd400; color:#0d0d0d; padding:24px 32px 72px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    nav { display:flex; gap:24px; }
    nav a { font-size:14.5px; cursor:pointer; border-bottom:2px solid transparent; padding-bottom:2px; }
    nav a:hover { border-color:#0d0d0d; }
    .kick { margin:48px 0 0; font-size:12.5px; font-weight:700; letter-spacing:3px; text-transform:uppercase; }
    /* The headline sits on the colour boundary and is split by it. */
    .seam { margin:0; padding:0 32px; font-size:clamp(54px,14vw,200px); line-height:0.8; letter-spacing:-9px;
            font-weight:700; color:#ffd400; background:#0d0d0d; margin-top:-0.34em; }
    .ground { flex:1; background:#0d0d0d; color:#f2f2f2; padding:46px 32px 104px; }
    .cols { display:grid; grid-template-columns:1fr 1fr 1fr; gap:40px; }
    .bio { margin:0; font-size:16px; line-height:1.64; opacity:.82; max-width:34ch; }
    .list a { display:flex; justify-content:space-between; align-items:baseline; padding:11px 0;
              border-top:1px solid #272727; cursor:pointer; }
    .list a:last-child { border-bottom:1px solid #272727; }
    .list b { font-size:16px; font-weight:600; }
    .list span { font-size:12.5px; color:#777; }
    .list a:hover b { color:#ffd400; }
    .meta p { margin:0 0 20px; font-size:13.5px; line-height:1.66; color:#9a9a9a; }
    .meta b { display:block; margin-bottom:5px; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#ffd400; }
    @media (max-width:900px){
      .sky{padding:20px 18px 54px} .seam{padding:0 18px; letter-spacing:-5px} .ground{padding:34px 18px 104px}
      .cols{grid-template-columns:1fr; gap:26px}
    }
  `],
})
export class Page38Component {}
