import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 70 — Departure board: split-flap station display, career as departures. */
@Component({
  selector: 'app-page70',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <article class="board">
        <header>
          <span class="st">MOHEED CENTRAL</span>
          <span class="cl">DEPARTURES</span>
          <span class="tm">{{ clock }}</span>
        </header>

        <div class="cols"><span>TIME</span><span>DESTINATION</span><span>PLATFORM</span><span>STATUS</span></div>

        <div class="rows">
          @for (r of departures; track r.dest) {
            <div class="row">
              <span class="flap t">{{ r.time }}</span>
              <span class="dest">
                @for (ch of r.dest.split(''); track $index) { <i class="flap">{{ ch }}</i> }
              </span>
              <span class="flap p">{{ r.plat }}</span>
              <span class="status" [class.go]="r.go">{{ r.status }}</span>
            </div>
          }
        </div>

        <footer>
          <p class="scroll"><span>SHAIK MOHEED — SOFTWARE ENGINEER — ANGULAR &amp; JAVA — CONSENT &amp; E-SIGNATURE PLATFORMS — AVAILABLE FOR WORK — SHAIK MOHEED — SOFTWARE ENGINEER — ANGULAR &amp; JAVA — CONSENT &amp; E-SIGNATURE PLATFORMS — AVAILABLE FOR WORK — </span></p>
        </footer>
      </article>
    </div>
    <app-design-nav [num]="70" designName="Departure board" />
  `,
  styles: [`
    :host { --amber:#ffb703; --go:#4ade80;
            display:block; background:#0a0a0c; color:var(--amber);
            font-family:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace; }
    .wrap { min-height:100vh; display:flex; padding:26px 20px 104px; }
    .board { margin:auto; width:min(1000px,100%); background:#121216; border-radius:10px; padding:20px 22px 0;
             border:3px solid #26262e; box-shadow:0 30px 70px -24px rgba(0,0,0,.9); }
    header { display:flex; justify-content:space-between; gap:14px; flex-wrap:wrap; align-items:baseline;
             padding-bottom:14px; border-bottom:2px solid #26262e; }
    .st { font-family:"Space Grotesk",sans-serif; font-size:19px; font-weight:700; letter-spacing:2px; color:#fff; }
    .cl { font-size:11px; letter-spacing:3.4px; }
    .tm { font-size:15px; color:#fff; }
    .cols { display:grid; grid-template-columns:80px 1fr 90px 130px; gap:14px; padding:12px 0 8px;
            font-size:9.5px; letter-spacing:1.8px; color:#6f6a5c; }
    .rows { display:grid; gap:7px; padding-bottom:16px; }
    .row { display:grid; grid-template-columns:80px 1fr 90px 130px; gap:14px; align-items:center; }
    /* Split-flap tile: dark card with a hairline across the middle. */
    .flap { display:inline-grid; place-items:center; min-width:21px; padding:7px 4px; border-radius:3px;
            background:#1d1d24; color:var(--amber); font-size:14px; line-height:1;
            box-shadow:inset 0 -1px 0 #0a0a0c, inset 0 1px 0 #2b2b34; }
    .dest { display:flex; gap:2px; flex-wrap:wrap; }
    .dest i { font-style:normal; }
    .status { font-size:12px; letter-spacing:1.4px; color:#6f6a5c; }
    .status.go { color:var(--go); }
    footer { margin:0 -22px; padding:10px 0; border-top:2px solid #26262e; background:#0d0d10; overflow:hidden;
             border-radius:0 0 7px 7px; }
    .scroll { margin:0; white-space:nowrap; }
    .scroll span { display:inline-block; font-size:11.5px; letter-spacing:2.4px; animation:run 30s linear infinite; }
    @keyframes run { to { transform:translateX(-50%); } }
    @media (prefers-reduced-motion:reduce){ .scroll span{animation:none} }
    @media (max-width:900px){
      .wrap{padding:20px 12px 104px} .board{padding:16px 14px 0} footer{margin:0 -14px}
      .cols,.row{grid-template-columns:60px 1fr 54px; gap:9px}
      .cols span:last-child,.status{display:none} .flap{font-size:12px; min-width:17px}
    }
  `],
})
export class Page70Component {
  readonly clock = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

  readonly departures = [
    { time: '08:15', dest: 'ATLAS', plat: '01', status: 'ON TIME', go: true },
    { time: '09:40', dest: 'CONSENT MANAGER', plat: '02', status: 'BOARDING', go: true },
    { time: '11:05', dest: 'NOTICE REGISTRY', plat: '03', status: 'ON TIME', go: true },
    { time: '13:30', dest: 'DESIGN SYSTEM', plat: '04', status: 'DEPARTED', go: false },
    { time: '16:00', dest: 'NEXT ROLE', plat: '--', status: 'AVAILABLE', go: true },
  ];
}
