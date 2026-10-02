import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 85 — Scoreboard: stadium bulb display with period-by-period stats. */
@Component({
  selector: 'app-page85',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <article class="board">
        <header>
          <span class="arena">MOHEED ARENA</span>
          <span class="period">PERIOD 3 · FINAL</span>
        </header>

        <section class="score">
          <div class="team">
            <p class="nm">SHIPPED</p>
            <p class="pts">04</p>
          </div>
          <div class="mid">
            <p class="clk">00:00</p>
            <p class="lbl">SOFTWARE ENGINEER</p>
          </div>
          <div class="team">
            <p class="nm">BUGS</p>
            <p class="pts away">00</p>
          </div>
        </section>

        <section class="stats">
          @for (s of stats; track s.k) {
            <div class="stat"><b>{{ s.v }}</b><span>{{ s.k }}</span></div>
          }
        </section>

        <footer class="tick">
          <span>★ SHAIK MOHEED · ANGULAR &amp; JAVA · CONSENT &amp; E-SIGNATURE PLATFORMS · AVAILABLE FOR WORK ★ SHAIK MOHEED · ANGULAR &amp; JAVA · CONSENT &amp; E-SIGNATURE PLATFORMS · AVAILABLE FOR WORK ★</span>
        </footer>
      </article>
    </div>
    <app-design-nav [num]="85" designName="Scoreboard" />
  `,
  styles: [`
    :host { --amber:#ffb226; --red:#ff4d3d; --green:#4ade80;
            display:block; background:#0b0d10; color:var(--amber);
            font-family:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace; }
    .wrap { min-height:100vh; display:flex; padding:26px 20px 104px; }
    .board { margin:auto; width:min(980px,100%); background:#121519; border:5px solid #272c33; border-radius:12px;
             padding:20px 22px 0; box-shadow:0 30px 70px -24px rgba(0,0,0,.95); }
    header { display:flex; justify-content:space-between; gap:14px; flex-wrap:wrap;
             padding-bottom:14px; border-bottom:2px solid #272c33; }
    .arena { font-family:"Space Grotesk",sans-serif; font-size:17px; font-weight:700; letter-spacing:3px; color:#fff; }
    .period { font-size:11px; letter-spacing:2.4px; color:var(--red); }
    .score { display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:18px; padding:26px 0; }
    .team { text-align:center; }
    .nm { margin:0 0 8px; font-size:12px; letter-spacing:3px; color:#7f8793; }
    /* Bulb-matrix digits: dotted overlay on big numerals. */
    .pts { position:relative; margin:0; font-family:"Space Grotesk",sans-serif;
           font-size:clamp(54px,11vw,110px); line-height:1; font-weight:700; letter-spacing:4px; color:var(--green);
           text-shadow:0 0 22px rgba(74,222,128,.55); }
    .pts.away { color:var(--red); text-shadow:0 0 22px rgba(255,77,61,.5); }
    .mid { text-align:center; }
    .clk { margin:0 0 6px; font-size:clamp(22px,3.4vw,34px); color:var(--amber); text-shadow:0 0 16px rgba(255,178,38,.5); }
    .lbl { margin:0; font-size:9.5px; letter-spacing:2.6px; color:#7f8793; }
    .stats { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; padding-bottom:20px; }
    .stat { text-align:center; padding:14px 8px; border:1px solid #272c33; border-radius:6px; background:#0e1114; }
    .stat b { display:block; font-size:24px; color:#fff; margin-bottom:4px; }
    .stat span { font-size:9.5px; letter-spacing:1.6px; color:#7f8793; }
    .tick { margin:0 -22px; padding:10px 0; border-top:2px solid #272c33; background:#0a0c0f;
            overflow:hidden; border-radius:0 0 7px 7px; }
    .tick span { display:inline-block; white-space:nowrap; font-size:11px; letter-spacing:2.4px;
                 animation:run 28s linear infinite; }
    @keyframes run { to { transform:translateX(-50%); } }
    @media (prefers-reduced-motion:reduce){ .tick span{animation:none} }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} .board{padding:16px 14px 0} .tick{margin:0 -14px}
      .stats{grid-template-columns:1fr 1fr} }
  `],
})
export class Page85Component {
  readonly stats = [
    { k: 'YEARS', v: '3+' },
    { k: 'PROJECTS', v: '04' },
    { k: 'STACK', v: '07' },
    { k: 'DEGREE', v: 'BE' },
  ];
}
