import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 77 — Circuit board: copper traces, solder pads, silkscreen labels. */
@Component({
  selector: 'app-page77',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <svg class="traces" viewBox="0 0 800 500" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 90 H180 L220 130 H420 L470 80 H800" />
        <path d="M0 200 H120 L170 250 H380 L430 200 H800" />
        <path d="M0 330 H260 L300 290 H520 L560 330 H800" />
        <path d="M0 430 H200 L250 390 H640 L690 430 H800" />
        <g class="pads">
          <circle cx="220" cy="130" r="6" /><circle cx="470" cy="80" r="6" />
          <circle cx="170" cy="250" r="6" /><circle cx="430" cy="200" r="6" />
          <circle cx="300" cy="290" r="6" /><circle cx="560" cy="330" r="6" />
          <circle cx="250" cy="390" r="6" /><circle cx="690" cy="430" r="6" />
        </g>
      </svg>

      <header>
        <span class="logo">SM-01</span>
        <span class="rev">REV. C · 2026</span>
        <nav><a>Work</a><a>About</a><a>Contact</a></nav>
      </header>

      <main>
        <section class="silk">
          <p class="kick">// board: shaik_moheed</p>
          <h1>Shaik<br />Moheed</h1>
          <p class="bio">Software engineer at Certinal. Consent and e-signature platforms — every trace routed, every pad soldered.</p>
        </section>

        <section class="chips">
          @for (c of chips; track c.ref) {
            <article class="chip">
              <span class="pins l" aria-hidden="true"></span>
              <div class="die"><b>{{ c.ref }}</b><span>{{ c.part }}</span></div>
              <span class="pins r" aria-hidden="true"></span>
            </article>
          }
        </section>
      </main>

      <footer><span>ATLAS</span><span>CONSENT MANAGER</span><span>NOTICE REGISTRY</span><span>DESIGN SYSTEM</span></footer>
    </div>
    <app-design-nav [num]="77" designName="Circuit board" />
  `,
  styles: [`
    :host { --board:#0b3d2e; --copper:#c88a3a; --silk:#e9f3ee; --green:#4fe08a;
            display:block; background:var(--board); color:var(--silk);
            font-family:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:24px 32px 104px; isolation:isolate; }
    .traces { position:absolute; inset:0; z-index:-1; width:100%; height:100%;
              fill:none; stroke:var(--copper); stroke-width:3; opacity:.5; }
    .traces .pads { fill:var(--copper); stroke:none; opacity:.9; }
    header { display:grid; grid-template-columns:1fr auto 1fr; align-items:center;
             padding-bottom:12px; border-bottom:1.5px solid rgba(233,243,238,.3); }
    .logo { font-family:"Space Grotesk",sans-serif; font-size:18px; font-weight:700; letter-spacing:2px; }
    .rev { font-size:10.5px; letter-spacing:1.8px; opacity:.7; }
    nav { display:flex; gap:22px; justify-content:flex-end; }
    nav a { font-size:12.5px; cursor:pointer; opacity:.76; }
    nav a:hover { color:var(--green); opacity:1; }
    main { flex:1; display:grid; grid-template-columns:1.1fr 1fr; gap:44px; align-items:center; padding:40px 0; }
    .kick { margin:0 0 14px; font-size:11.5px; color:var(--green); }
    h1 { margin:0 0 18px; font-family:"Space Grotesk",sans-serif; font-size:clamp(40px,6.4vw,82px);
         line-height:0.94; letter-spacing:-3px; font-weight:700; }
    .bio { margin:0; max-width:40ch; font-size:12.5px; line-height:1.85; opacity:.76; }
    .chips { display:grid; gap:16px; }
    .chip { display:grid; grid-template-columns:auto 1fr auto; align-items:center; }
    .pins { display:block; width:13px; height:54px;
            background:repeating-linear-gradient(180deg, #cfd6d2 0 5px, transparent 5px 12px); }
    .die { background:#14181a; border:1px solid #2b3330; padding:13px 16px; cursor:pointer; }
    .die b { display:block; font-size:14px; letter-spacing:1.4px; color:var(--green); }
    .die span { font-size:11px; opacity:.72; }
    .die:hover { border-color:var(--green); }
    footer { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; }
    footer span { padding:10px 6px; text-align:center; border:1px solid var(--copper); color:var(--copper);
                  font-size:10px; letter-spacing:1.6px; cursor:pointer; }
    footer span:hover { background:var(--copper); color:var(--board); }
    @media (max-width:900px){ .wrap{padding:20px 16px 104px} header{grid-template-columns:1fr auto}
      .rev{display:none} main{grid-template-columns:1fr; gap:26px} footer{grid-template-columns:1fr 1fr} }
  `],
})
export class Page77Component {
  readonly chips = [
    { ref: 'U1', part: 'Angular · TypeScript · RxJS' },
    { ref: 'U2', part: 'Java · Spring Boot' },
    { ref: 'U3', part: 'PostgreSQL · Flyway' },
    { ref: 'U4', part: 'Node.js · REST' },
  ];
}
