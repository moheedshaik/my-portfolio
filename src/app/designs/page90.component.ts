import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 90 — Star chart: a named constellation plotted with magnitudes. */
@Component({
  selector: 'app-page90',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header>
        <span class="logo">SM</span>
        <span class="ra">RA 18h 24m · DEC +38° 47′</span>
        <nav><a>Work</a><a>About</a><a>Contact</a></nav>
      </header>

      <main>
        <section class="sky">
          <svg viewBox="0 0 420 420" aria-label="Constellation Ingeniarius">
            <circle class="edge" cx="210" cy="210" r="202" />
            <circle class="edge faint" cx="210" cy="210" r="136" />
            <circle class="edge faint" cx="210" cy="210" r="70" />

            <path class="link" d="M118 300 L168 214 L232 180 L300 112 M232 180 L276 268 M168 214 L128 150" />

            @for (s of stars; track s.name) {
              <g class="star">
                <circle [attr.cx]="s.x" [attr.cy]="s.y" [attr.r]="s.r" />
                <text [attr.x]="s.x + s.r + 7" [attr.y]="s.y + 4">{{ s.name }}</text>
              </g>
            }
          </svg>
        </section>

        <section class="copy">
          <p class="kick">Constellation</p>
          <h1>Ingeniarius</h1>
          <p class="latin">“The Engineer” · first catalogued 2023</p>
          <p class="bio">Shaik Moheed — software engineer at Certinal. Consent and e-signature platforms, charted above by magnitude.</p>

          <div class="mag">
            <div><b>α</b><span>Angular — mag 1.2</span></div>
            <div><b>β</b><span>Java — mag 1.8</span></div>
            <div><b>γ</b><span>PostgreSQL — mag 2.4</span></div>
            <div><b>δ</b><span>TypeScript — mag 2.6</span></div>
          </div>
        </section>
      </main>
    </div>
    <app-design-nav [num]="90" designName="Star chart" />
  `,
  styles: [`
    :host { --gold:#e8c86a; --star:#f4f1e4;
            display:block; background:#070b18; color:#dfe3f0; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:24px 34px 104px;
            background:radial-gradient(70vw 60vw at 70% 20%, rgba(80,110,200,.16), transparent 70%), #070b18; }
    header { display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:14px;
             padding-bottom:12px; border-bottom:1px solid rgba(223,227,240,.16); }
    .logo { font-size:22px; font-weight:700; letter-spacing:3px; color:var(--gold); }
    .ra { font-family:"JetBrains Mono",monospace; font-size:10.5px; letter-spacing:1.4px; color:#7f87a3; }
    nav { display:flex; gap:22px; justify-content:flex-end; }
    nav a { font-size:13.5px; cursor:pointer; color:#9aa2bb; }
    nav a:hover { color:var(--gold); }
    main { flex:1; display:grid; grid-template-columns:auto 1fr; gap:48px; align-items:center; padding:36px 0; }
    .sky svg { width:min(420px,78vw); height:auto; }
    .edge { fill:none; stroke:rgba(223,227,240,.22); stroke-width:1; }
    .edge.faint { stroke:rgba(223,227,240,.1); stroke-dasharray:3 5; }
    .link { fill:none; stroke:var(--gold); stroke-width:1.1; opacity:.55; }
    .star circle { fill:var(--star); }
    .star text { fill:#aab2cc; font-size:9.5px; letter-spacing:1px; font-family:"JetBrains Mono",monospace; }
    .star:hover circle { fill:var(--gold); }
    .star:hover text { fill:var(--gold); }
    .kick { margin:0 0 12px; font-size:10.5px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:var(--gold); }
    h1 { margin:0 0 8px; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(36px,5.4vw,66px); letter-spacing:-1.4px; }
    .latin { margin:0 0 20px; font-family:Georgia,serif; font-style:italic; font-size:13.5px; color:#7f87a3; }
    .bio { margin:0 0 26px; max-width:36ch; font-size:15.5px; line-height:1.68; color:#9aa2bb; }
    .mag div { display:grid; grid-template-columns:26px 1fr; gap:12px; padding:9px 0;
               border-bottom:1px solid rgba(223,227,240,.12); }
    .mag b { font-family:Georgia,serif; font-size:16px; color:var(--gold); }
    .mag span { font-size:13.5px; }
    @media (max-width:900px){ .wrap{padding:20px 16px 104px} header{grid-template-columns:1fr auto}
      .ra{display:none} main{grid-template-columns:1fr; gap:28px; justify-items:center} .copy{width:100%} }
  `],
})
export class Page90Component {
  readonly stars = [
    { name: 'ANGULAR', x: 168, y: 214, r: 6.5 },
    { name: 'JAVA', x: 232, y: 180, r: 5.5 },
    { name: 'POSTGRES', x: 300, y: 112, r: 4.5 },
    { name: 'TYPESCRIPT', x: 118, y: 300, r: 4 },
    { name: 'SPRING', x: 276, y: 268, r: 3.5 },
    { name: 'RXJS', x: 128, y: 150, r: 3 },
  ];
}
