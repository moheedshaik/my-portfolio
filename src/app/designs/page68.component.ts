import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 68 — Topographic: contour lines, map legend, waypoints as projects. */
@Component({
  selector: 'app-page68',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <svg class="contours" viewBox="0 0 800 500" preserveAspectRatio="none" aria-hidden="true">
        @for (c of rings; track c) {
          <ellipse [attr.cx]="560" [attr.cy]="250" [attr.rx]="c * 1.5" [attr.ry]="c" />
        }
        @for (c of rings; track 'b' + c) {
          <ellipse [attr.cx]="150" [attr.cy]="430" [attr.rx]="c * 1.3" [attr.ry]="c * 0.8" />
        }
      </svg>

      <header>
        <span class="logo">SM</span>
        <span class="grid-ref">12°58′N 77°35′E · ELEV. 920 m</span>
        <nav><a>Work</a><a>About</a><a>Contact</a></nav>
      </header>

      <main>
        <p class="kick">Survey sheet 01 · Software</p>
        <h1>Shaik<br />Moheed</h1>
        <p class="bio">Software engineer at Certinal. Consent and e-signature platforms — Angular front ends over Java services, mapped and marked.</p>

        <div class="legend">
          <div><span class="pin p1"></span><b>Atlas</b><em>Summit · 2026</em></div>
          <div><span class="pin p2"></span><b>Consent Manager</b><em>Ridge · 2025</em></div>
          <div><span class="pin p3"></span><b>Notice Registry</b><em>Pass · 2025</em></div>
          <div><span class="pin p4"></span><b>Design System</b><em>Base camp · 2024</em></div>
        </div>
      </main>

      <footer><span>SCALE 1:1</span><span>ANGULAR · JAVA · POSTGRESQL</span><span>CONTOUR INTERVAL 20 m</span></footer>
    </div>
    <app-design-nav [num]="68" designName="Topographic" />
  `,
  styles: [`
    :host { --line:#9c7f5a; --ink:#30291f;
            display:block; background:#f1e7d3; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:24px 36px 104px;
            overflow:hidden; isolation:isolate; }
    .contours { position:absolute; inset:0; z-index:-1; width:100%; height:100%;
                fill:none; stroke:var(--line); stroke-width:1.1; opacity:.5; }
    header { display:grid; grid-template-columns:1fr auto 1fr; align-items:center;
             padding-bottom:14px; border-bottom:1.5px solid var(--ink); }
    .logo { font-size:22px; font-weight:700; letter-spacing:2px; }
    .grid-ref { font-family:"JetBrains Mono",monospace; font-size:10.5px; letter-spacing:1px; color:#7a6a52; }
    nav { display:flex; gap:24px; justify-content:flex-end; }
    nav a { font-size:13.5px; cursor:pointer; }
    nav a:hover { color:#b5431f; }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; padding:48px 0; }
    .kick { margin:0 0 16px; font-size:10.5px; font-weight:700; letter-spacing:2.8px; text-transform:uppercase; color:#b5431f; }
    h1 { margin:0 0 22px; font-size:clamp(42px,7.2vw,96px); line-height:0.94; letter-spacing:-3.4px; font-weight:700; }
    .bio { margin:0 0 38px; max-width:44ch; font-size:16px; line-height:1.66; color:#5c5141; }
    .legend { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; max-width:860px; }
    .legend div { display:grid; grid-template-columns:auto 1fr; gap:10px; align-items:center;
                  padding:12px 14px; background:rgba(255,252,244,.78); border:1px solid #ddcdb0; cursor:pointer; }
    .pin { grid-row:span 2; width:13px; height:13px; border-radius:50%; border:3px solid; }
    .p1{border-color:#b5431f} .p2{border-color:#2f6b4f} .p3{border-color:#2a4f7c} .p4{border-color:#7a5a12}
    .legend b { font-size:14px; font-weight:600; }
    .legend em { font-style:normal; font-size:11.5px; color:#7a6a52; }
    .legend div:hover { background:#fff; }
    footer { display:flex; justify-content:space-between; gap:16px; flex-wrap:wrap; padding-top:12px;
             border-top:1.5px solid var(--ink); font-family:"JetBrains Mono",monospace; font-size:10px; letter-spacing:1.2px; }
    @media (max-width:900px){
      .wrap{padding:20px 18px 104px} header{grid-template-columns:1fr auto} .grid-ref{display:none}
      .legend{grid-template-columns:1fr 1fr; gap:12px}
    }
  `],
})
export class Page68Component {
  /** Contour radii, inner to outer. */
  readonly rings = [40, 80, 120, 160, 200, 240, 280, 320];
}
