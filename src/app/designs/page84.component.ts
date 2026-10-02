import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 84 — Contact sheet: a roll of negatives with grease-pencil marks. */
@Component({
  selector: 'app-page84',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header>
        <span class="logo">ROLL 01 · SM</span>
        <span class="film">ISO 400 · 35 mm</span>
        <nav><a>Work</a><a>About</a><a>Contact</a></nav>
      </header>

      <main>
        <section class="sheet">
          @for (f of frames; track f.n) {
            <figure class="frame" [class.pick]="f.pick">
              <span class="n">{{ f.n }}</span>
              <div class="neg" [style.background]="f.tone"></div>
              <figcaption>{{ f.cap }}</figcaption>
            </figure>
          }
        </section>

        <aside class="notes">
          <p class="kick">Grease pencil</p>
          <h1>Shaik<br />Moheed</h1>
          <p class="bio">Software engineer at Certinal. Consent and e-signature platforms — printed from the frames that worked.</p>
          <p class="meta">Selects ringed in red · 4 of 12</p>
        </aside>
      </main>
    </div>
    <app-design-nav [num]="84" designName="Contact sheet" />
  `,
  styles: [`
    :host { --red:#e03b3b;
            display:block; background:#15161a; color:#e9e6df; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:24px 32px 104px; }
    header { display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:14px;
             padding-bottom:12px; border-bottom:1px solid #2b2d33; }
    .logo { font-size:13px; font-weight:700; letter-spacing:2.4px; }
    .film { font-size:10.5px; letter-spacing:2px; color:#7c8089; }
    nav { display:flex; gap:22px; justify-content:flex-end; }
    nav a { font-size:13px; cursor:pointer; color:#9aa0a8; }
    nav a:hover { color:#e9e6df; }
    main { flex:1; display:grid; grid-template-columns:1.6fr 1fr; gap:44px; align-items:center; padding:38px 0; }
    .sheet { display:grid; grid-template-columns:repeat(4,1fr); gap:9px; padding:14px;
             background:#0d0e11; border:1px solid #2b2d33; }
    .frame { position:relative; margin:0; }
    .n { position:absolute; top:3px; left:5px; z-index:2; font-family:"JetBrains Mono",monospace;
         font-size:9px; color:#d9a441; }
    .neg { aspect-ratio:3/2; filter:saturate(.8) contrast(1.05); }
    figcaption { padding-top:5px; font-size:9.5px; letter-spacing:.6px; color:#7c8089; }
    /* Grease-pencil ring on the selects. */
    .pick::after { content:""; position:absolute; inset:-5px -5px 16px; border:2.5px solid var(--red);
                   border-radius:48% 52% 47% 53% / 52% 48% 52% 48%; pointer-events:none; opacity:.9; }
    .pick figcaption { color:var(--red); }
    .kick { margin:0 0 14px; font-size:10.5px; font-weight:700; letter-spacing:2.6px; text-transform:uppercase; color:var(--red); }
    h1 { margin:0 0 18px; font-size:clamp(38px,5.8vw,74px); line-height:0.94; letter-spacing:-3px; font-weight:700; }
    .bio { margin:0 0 16px; max-width:34ch; font-size:16px; line-height:1.64; color:#9aa0a8; }
    .meta { margin:0; font-size:11.5px; letter-spacing:1.4px; color:#7c8089; }
    @media (max-width:900px){ .wrap{padding:20px 16px 104px} header{grid-template-columns:1fr auto}
      .film{display:none} main{grid-template-columns:1fr; gap:26px} .sheet{grid-template-columns:repeat(3,1fr)} }
  `],
})
export class Page84Component {
  readonly frames = [
    { n: '1A', cap: 'first commit', tone: 'linear-gradient(150deg,#3a4a5a,#8fa3b5)', pick: false },
    { n: '2A', cap: 'atlas', tone: 'linear-gradient(150deg,#1f4f8b,#7fb3e8)', pick: true },
    { n: '3A', cap: 'blurred', tone: 'linear-gradient(150deg,#4a4a4a,#7a7a7a)', pick: false },
    { n: '4A', cap: 'consent mgr', tone: 'linear-gradient(150deg,#8b3a1f,#e8a97f)', pick: true },
    { n: '5A', cap: 'test run', tone: 'linear-gradient(150deg,#2f5a3a,#8fc9a0)', pick: false },
    { n: '6A', cap: 'notice reg', tone: 'linear-gradient(150deg,#5a2f6b,#b58fd0)', pick: true },
    { n: '7A', cap: 'overexposed', tone: 'linear-gradient(150deg,#b9b9b9,#f0f0f0)', pick: false },
    { n: '8A', cap: 'migration', tone: 'linear-gradient(150deg,#6b5a1f,#d4bf7f)', pick: false },
    { n: '9A', cap: 'design sys', tone: 'linear-gradient(150deg,#1f6b6b,#7fcaca)', pick: true },
    { n: '10A', cap: 'review', tone: 'linear-gradient(150deg,#4a2f2f,#a07f7f)', pick: false },
    { n: '11A', cap: 'ship it', tone: 'linear-gradient(150deg,#2f3a6b,#8f9ad0)', pick: false },
    { n: '12A', cap: 'end of roll', tone: 'linear-gradient(150deg,#1a1a1a,#3a3a3a)', pick: false },
  ];
}
