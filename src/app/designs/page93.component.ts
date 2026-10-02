import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 93 — Wine label: estate bottling with vintage, varietal and tasting note. */
@Component({
  selector: 'app-page93',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <main>
        <article class="bottle">
          <span class="neck" aria-hidden="true"></span>
          <section class="label">
            <p class="estate">ESTATE BOTTLED</p>
            <div class="crest" aria-hidden="true"><span>SM</span></div>
            <h1>Shaik Moheed</h1>
            <p class="varietal">SOFTWARE ENGINEER</p>
            <div class="rule" aria-hidden="true"></div>
            <p class="vintage">VINTAGE 2023</p>
            <p class="region">CERTINAL · BENGALURU</p>
          </section>
          <span class="base" aria-hidden="true"></span>
        </article>

        <aside class="notes">
          <p class="head">TASTING NOTE</p>
          <p class="body">
            Opens with bright Angular — typed forms, lazy routes, a clean OnPush finish.
            A structured Java mid-palate gives weight without heaviness. Long PostgreSQL
            finish; migrations well integrated. Drinking well now, will keep.
          </p>

          <div class="facts">
            <div><b>Blend</b><span>Angular · TypeScript · RxJS</span></div>
            <div><b>Oak</b><span>Java · Spring Boot</span></div>
            <div><b>Cellar</b><span>PostgreSQL · Flyway</span></div>
            <div><b>Cases</b><span>Atlas · Consent · Notice · System</span></div>
          </div>

          <p class="score">94 <em>pts</em></p>
        </aside>
      </main>
    </div>
    <app-design-nav [num]="93" designName="Wine label" />
  `,
  styles: [`
    :host { --wine:#5c1f2e; --cream:#f3ead6; --gold:#b89550;
            display:block; background:#1b1114; color:var(--cream); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 22px 104px; }
    main { margin:auto; width:min(920px,100%); display:grid; grid-template-columns:auto 1fr; gap:48px; align-items:center; }
    .bottle { width:min(250px,70vw); display:grid; }
    .neck { height:70px; width:58px; justify-self:center; background:linear-gradient(90deg,#2d1a20,#4a2d36 40%,#2d1a20);
            border-radius:5px 5px 0 0; }
    .label { background:var(--cream); color:#2a1c20; padding:26px 22px; text-align:center;
             border-top:3px solid var(--gold); border-bottom:3px solid var(--gold);
             box-shadow:0 24px 50px -22px rgba(0,0,0,.9); }
    .estate { margin:0 0 14px; font-size:8px; font-weight:700; letter-spacing:3px; color:#8a7558; }
    .crest { display:grid; place-items:center; width:56px; height:56px; margin:0 auto 14px;
             border:2px solid var(--wine); border-radius:50%; }
    .crest span { font-family:Georgia,serif; font-size:21px; color:var(--wine); }
    h1 { margin:0 0 7px; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(20px,2.8vw,27px); letter-spacing:-0.4px; }
    .varietal { margin:0 0 12px; font-size:8.5px; font-weight:700; letter-spacing:2.6px; color:var(--wine); }
    .rule { height:1px; margin:0 auto 12px; width:56px; background:var(--gold); }
    .vintage { margin:0 0 5px; font-family:Georgia,serif; font-size:15px; letter-spacing:2px; }
    .region { margin:0; font-size:7.5px; letter-spacing:2px; color:#8a7558; }
    .base { height:46px; background:linear-gradient(90deg,#2d1a20,#4a2d36 40%,#2d1a20); border-radius:0 0 7px 7px; }
    .head { margin:0 0 14px; font-size:10px; font-weight:700; letter-spacing:3px; color:var(--gold); }
    .body { margin:0 0 26px; max-width:44ch; font-family:Georgia,serif; font-size:16px; line-height:1.78; opacity:.84; }
    .facts div { display:grid; grid-template-columns:70px 1fr; gap:14px; padding:9px 0;
                 border-bottom:1px solid rgba(243,234,214,.14); }
    .facts b { font-size:10.5px; letter-spacing:1.6px; text-transform:uppercase; color:var(--gold); }
    .facts span { font-size:13.5px; }
    .score { margin:22px 0 0; font-family:Georgia,serif; font-size:34px; color:var(--gold); }
    .score em { font-style:normal; font-size:12px; letter-spacing:2px; opacity:.7; }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} main{grid-template-columns:1fr; gap:26px; justify-items:center}
      .notes{width:100%} }
  `],
})
export class Page93Component {}
