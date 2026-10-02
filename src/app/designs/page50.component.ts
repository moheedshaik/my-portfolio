import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 50 — Mosaic: a wall of colour tiles, the name knocked out of the middle. */
@Component({
  selector: 'app-page50',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <div class="mosaic" aria-hidden="true">
        @for (t of tiles; track $index) {
          <i [style.background]="t" [style.animation-delay]="($index % 17) * 0.12 + 's'"></i>
        }
      </div>

      <header><span class="logo">SM.</span><nav><a>Work</a><a>About</a><a class="pill">Contact</a></nav></header>

      <main>
        <div class="plate">
          <p class="kick">Software Engineer · Certinal</p>
          <h1>Shaik Moheed</h1>
          <p class="bio">Consent and e-signature platforms, built with Angular and Java — one small, well-placed piece at a time.</p>
          <div class="row"><a class="btn">View work</a><a class="btn out">Download CV</a></div>
        </div>
      </main>

      <footer><span>Atlas</span><span>Consent Manager</span><span>Notice Registry</span><span>Design System</span></footer>
    </div>
    <app-design-nav [num]="50" designName="Mosaic" />
  `,
  styles: [`
    :host { display:block; background:#0e0e12; color:#fff; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:26px 30px 104px; overflow:hidden; isolation:isolate; }
    .mosaic { position:absolute; inset:0; z-index:-1; display:grid;
              grid-template-columns:repeat(auto-fill,minmax(64px,1fr)); grid-auto-rows:64px; gap:3px; }
    .mosaic i { display:block; border-radius:3px; opacity:.9; animation:pulse 5s ease-in-out infinite; }
    @keyframes pulse { 50% { opacity:.42; } }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; text-shadow:0 2px 10px rgba(0,0,0,.6); }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; text-shadow:0 2px 10px rgba(0,0,0,.6); }
    nav .pill { padding:10px 22px; border-radius:999px; background:#fff; color:#0e0e12; font-weight:600; text-shadow:none; }
    main { flex:1; display:grid; place-items:center; padding:40px 0; }
    .plate { width:min(640px,100%); background:rgba(14,14,18,.86); backdrop-filter:blur(14px);
             border:1px solid rgba(255,255,255,.16); border-radius:24px; padding:42px 44px; text-align:center;
             box-shadow:0 30px 70px -26px rgba(0,0,0,.8); }
    .kick { margin:0 0 14px; font-size:11.5px; font-weight:600; letter-spacing:2.4px; text-transform:uppercase; opacity:.62; }
    h1 { margin:0 0 16px; font-size:clamp(36px,5.6vw,66px); line-height:1; letter-spacing:-2.6px; font-weight:700; }
    .bio { margin:0 auto 28px; max-width:44ch; font-size:16.5px; line-height:1.6; opacity:.76; }
    .row { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
    .btn { padding:14px 28px; border-radius:999px; background:#fff; color:#0e0e12; font-size:15px; font-weight:600; cursor:pointer; }
    .btn.out { background:rgba(255,255,255,.12); color:#fff; border:1px solid rgba(255,255,255,.34); }
    footer { display:flex; flex-wrap:wrap; gap:10px; justify-content:center; }
    footer span { padding:7px 16px; border-radius:999px; background:rgba(14,14,18,.8); border:1px solid rgba(255,255,255,.2);
                  font-size:13px; }
    @media (prefers-reduced-motion:reduce){ .mosaic i{animation:none} }
    @media (max-width:900px){ .wrap{padding:22px 16px 104px} nav a:not(.pill){display:none} .plate{padding:28px 20px}
      .mosaic{grid-template-columns:repeat(auto-fill,minmax(46px,1fr)); grid-auto-rows:46px} }
  `],
})
export class Page50Component {
  /** A fixed shuffle so the wall looks scattered but renders identically each load. */
  readonly tiles = Array.from({ length: 260 }, (_, i) => {
    const palette = [
      '#ff3366', '#ff8a00', '#ffd400', '#3ddc84',
      '#00c2ff', '#7c5cff', '#ff5ea8', '#1f6fff',
    ];
    return palette[(i * 7 + (i % 5) * 3) % palette.length];
  });
}
