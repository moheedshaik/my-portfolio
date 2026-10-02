import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 86 — Lobby directory: brushed-brass floor board beside a lift panel. */
@Component({
  selector: 'app-page86',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <main>
        <section class="directory">
          <header>
            <p class="bldg">MOHEED HOUSE</p>
            <p class="sub">BUILDING DIRECTORY</p>
          </header>

          @for (f of floors; track f.no) {
            <a class="row" [class.here]="f.here">
              <span class="no">{{ f.no }}</span>
              <span class="nm">{{ f.name }}</span>
              <span class="dt">{{ f.detail }}</span>
            </a>
          }

          <footer><span>CONCIERGE</span><span>OPEN FOR WORK · 2026</span></footer>
        </section>

        <section class="lift">
          <p class="read">{{ current }}</p>
          <div class="pad">
            @for (b of buttons; track b) {
              <span class="btn" [class.lit]="b === current">{{ b }}</span>
            }
          </div>
          <div class="arrows"><span class="up">▲</span><span>▼</span></div>
          <p class="cap">SHAIK MOHEED<br /><em>SOFTWARE ENGINEER</em></p>
        </section>
      </main>
    </div>
    <app-design-nav [num]="86" designName="Lobby directory" />
  `,
  styles: [`
    :host { --brass:#c9a227; --panel:#2b2b2e; --ink:#17171a;
            display:block; background:#1d1d20; color:#efe9d8; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 22px 104px; }
    main { margin:auto; width:min(960px,100%); display:grid; grid-template-columns:1.6fr auto; gap:34px; align-items:stretch; }
    .directory { background:linear-gradient(170deg,#3a3a3e,#232326); border:3px solid var(--brass);
                 padding:24px 28px; box-shadow:0 26px 54px -22px rgba(0,0,0,.9); }
    .directory header { text-align:center; padding-bottom:16px; border-bottom:1px solid rgba(201,162,39,.4); }
    .bldg { margin:0 0 5px; font-size:clamp(20px,3vw,28px); font-weight:700; letter-spacing:5px; color:var(--brass); }
    .sub { margin:0; font-size:9.5px; letter-spacing:3.4px; color:#9a9486; }
    .row { display:grid; grid-template-columns:52px 1fr auto; gap:16px; align-items:baseline;
           padding:13px 0; border-bottom:1px solid rgba(239,233,216,.1); cursor:pointer; }
    .no { font-size:15px; font-weight:700; letter-spacing:1px; color:var(--brass); }
    .nm { font-size:15.5px; letter-spacing:1.4px; }
    .dt { font-size:11.5px; color:#9a9486; }
    .row:hover .nm { color:var(--brass); }
    .row.here .nm { color:var(--brass); font-weight:700; }
    .directory footer { display:flex; justify-content:space-between; gap:14px; padding-top:16px;
                        font-size:9.5px; letter-spacing:2.4px; color:#9a9486; }
    .lift { width:190px; background:var(--panel); border-radius:12px; padding:20px 16px;
            display:flex; flex-direction:column; align-items:center; gap:16px;
            box-shadow:0 26px 54px -22px rgba(0,0,0,.9), inset 0 0 0 2px rgba(255,255,255,.06); }
    .read { margin:0; width:100%; padding:11px 0; text-align:center; border-radius:5px; background:#0d0d0f;
            font-family:"JetBrains Mono",monospace; font-size:22px; color:#ff8c2b;
            text-shadow:0 0 14px rgba(255,140,43,.7); }
    .pad { display:grid; grid-template-columns:1fr 1fr; gap:10px; width:100%; }
    .btn { display:grid; place-items:center; aspect-ratio:1; border-radius:50%; background:#3a3a3f;
           font-size:13px; cursor:pointer; box-shadow:inset 0 -2px 4px rgba(0,0,0,.5); }
    .btn:hover { background:#4a4a50; }
    .btn.lit { background:var(--brass); color:var(--ink); box-shadow:0 0 16px rgba(201,162,39,.7); }
    .arrows { display:flex; gap:18px; font-size:13px; color:#6f6f78; }
    .arrows .up { color:var(--brass); }
    .cap { margin:auto 0 0; text-align:center; font-size:10.5px; letter-spacing:2px; line-height:1.7; }
    .cap em { font-style:normal; color:#9a9486; }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} main{grid-template-columns:1fr; gap:22px}
      .lift{width:100%} .pad{grid-template-columns:repeat(4,1fr)} .directory{padding:20px 18px} }
  `],
})
export class Page86Component {
  readonly current = '04';

  readonly floors = [
    { no: '04', name: 'ENGINEERING', detail: 'Certinal · present', here: true },
    { no: '03', name: 'PLATFORMS', detail: 'Consent & e-signature', here: false },
    { no: '02', name: 'SERVICES', detail: 'Java · Spring Boot', here: false },
    { no: '01', name: 'INTERFACES', detail: 'Angular · TypeScript', here: false },
    { no: 'G', name: 'FOUNDATIONS', detail: 'BE — Electronics & Comm.', here: false },
    { no: 'B1', name: 'DATA', detail: 'PostgreSQL · Flyway', here: false },
  ];

  readonly buttons = ['04', '03', '02', '01', 'G', 'B1'];
}
