import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 92 — Pinball: a lit playfield with bumpers, lanes and a score readout. */
@Component({
  selector: 'app-page92',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <article class="cab">
        <section class="backglass">
          <p class="title">SHAIK <span>MOHEED</span></p>
          <p class="sub">SOFTWARE ENGINEER · 1 PLAYER</p>
          <div class="score"><span>SCORE</span><b>3,000,000+</b></div>
        </section>

        <section class="field">
          <span class="arc a1" aria-hidden="true"></span>
          <span class="arc a2" aria-hidden="true"></span>

          <div class="bumpers">
            <span class="bump b1">Angular</span>
            <span class="bump b2">Java</span>
            <span class="bump b3">Postgres</span>
          </div>

          <div class="targets">
            @for (t of targets; track t.name) {
              <span class="tg" [class.lit]="t.lit">{{ t.name }}</span>
            }
          </div>

          <div class="flippers" aria-hidden="true"><span class="fl l"></span><span class="fl r"></span></div>
        </section>

        <footer><span>TILT</span><span>BALL 1 OF 3</span><span>FREE PLAY</span></footer>
      </article>
    </div>
    <app-design-nav [num]="92" designName="Pinball" />
  `,
  styles: [`
    :host { --neon:#ff2e88; --cyan:#2ee6ff; --amber:#ffc83d;
            display:block; background:#0b0714; color:#f2ecff; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 20px 104px; }
    .cab { margin:auto; width:min(560px,100%); border-radius:14px; overflow:hidden; border:4px solid #241a38;
           box-shadow:0 30px 70px -24px rgba(0,0,0,.95); }
    .backglass { background:linear-gradient(170deg,#3b1d5e,#1b0f2e); padding:22px 20px; text-align:center;
                 border-bottom:4px solid #241a38; }
    .title { margin:0 0 6px; font-size:clamp(26px,5vw,42px); font-weight:700; letter-spacing:-1.4px; color:var(--cyan);
             text-shadow:0 0 18px rgba(46,230,255,.6); }
    .title span { color:var(--neon); text-shadow:0 0 18px rgba(255,46,136,.6); }
    .sub { margin:0 0 14px; font-size:9.5px; letter-spacing:3px; opacity:.7; }
    .score { display:inline-grid; gap:3px; padding:8px 20px; border-radius:5px; background:#0a0713;
             border:1px solid #3b2a5e; }
    .score span { font-size:8.5px; letter-spacing:2.4px; opacity:.6; }
    .score b { font-family:"JetBrains Mono",monospace; font-size:21px; color:var(--amber);
               text-shadow:0 0 14px rgba(255,200,61,.6); }
    .field { position:relative; height:390px; background:radial-gradient(90% 70% at 50% 0%, #2a1748, #130b22);
             padding:18px; }
    .arc { position:absolute; border:2px solid rgba(242,236,255,.18); border-radius:50%; }
    .a1 { inset:-40% 10% 60% 10%; } .a2 { inset:-26% 22% 72% 22%; }
    .bumpers { position:relative; display:flex; justify-content:space-around; padding-top:44px; }
    .bump { display:grid; place-items:center; width:84px; height:84px; border-radius:50%; font-size:10.5px;
            font-weight:700; letter-spacing:.4px; cursor:pointer; text-align:center; }
    .b1 { background:radial-gradient(circle at 36% 32%, #ff79b4, var(--neon)); color:#2a0718;
          box-shadow:0 0 26px rgba(255,46,136,.6); }
    .b2 { background:radial-gradient(circle at 36% 32%, #7df0ff, var(--cyan)); color:#04222a;
          box-shadow:0 0 26px rgba(46,230,255,.55); }
    .b3 { background:radial-gradient(circle at 36% 32%, #ffe08a, var(--amber)); color:#2a1f04;
          box-shadow:0 0 26px rgba(255,200,61,.55); }
    .bump:hover { transform:scale(1.06); }
    .targets { position:absolute; left:18px; right:18px; bottom:96px; display:flex; gap:7px; justify-content:center; flex-wrap:wrap; }
    .tg { padding:5px 11px; border-radius:3px; border:1px solid rgba(242,236,255,.26); font-size:9.5px;
          letter-spacing:1.4px; opacity:.5; cursor:pointer; }
    .tg.lit { opacity:1; border-color:var(--amber); color:var(--amber); box-shadow:0 0 14px rgba(255,200,61,.5); }
    .flippers { position:absolute; left:0; right:0; bottom:22px; display:flex; justify-content:center; gap:58px; }
    .fl { width:76px; height:17px; border-radius:9px; background:linear-gradient(#f2ecff,#b9aed6); }
    .fl.l { transform:rotate(22deg); } .fl.r { transform:rotate(-22deg); }
    footer { display:flex; justify-content:space-between; gap:12px; padding:11px 18px; background:#0a0713;
             border-top:4px solid #241a38; font-size:9px; letter-spacing:2.4px; opacity:.6; }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} .field{height:340px}
      .bump{width:66px;height:66px;font-size:9px} }
  `],
})
export class Page92Component {
  readonly targets = [
    { name: 'TYPESCRIPT', lit: true },
    { name: 'RXJS', lit: true },
    { name: 'SPRING', lit: false },
    { name: 'FLYWAY', lit: true },
    { name: 'NODE', lit: false },
  ];
}
