import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 80 — Stamp sheet: perforated philatelic block with a postmark. */
@Component({
  selector: 'app-page80',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <main>
        <section class="sheet">
          <header>
            <span class="issue">COMMEMORATIVE ISSUE</span>
            <span class="issue">SHEET OF 6 · 2026</span>
          </header>

          <div class="block">
            @for (s of stamps; track s.name) {
              <article class="stamp" [style.--c]="s.colour">
                <span class="val">{{ s.val }}</span>
                <div class="vig"><span>{{ s.mark }}</span></div>
                <p class="nm">{{ s.name }}</p>
                <p class="country">MOHEED</p>
              </article>
            }
            <span class="post" aria-hidden="true">
              <i>BENGALURU</i><b>2026</b><i>CERTINAL</i>
            </span>
          </div>
        </section>

        <aside class="desc">
          <p class="kick">Philatelic note</p>
          <h1>Shaik<br />Moheed</h1>
          <p class="bio">Software engineer at Certinal. Consent and e-signature platforms — Angular front ends over Java services, issued in a limited run.</p>
          <p class="meta">Perf. 11½ · gummed · printed in four colours</p>
        </aside>
      </main>
    </div>
    <app-design-nav [num]="80" designName="Stamp sheet" />
  `,
  styles: [`
    :host { --ink:#241f1a;
            display:block; background:#cfc6b4; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 22px 104px; }
    main { margin:auto; width:min(1020px,100%); display:grid; grid-template-columns:1.25fr 1fr; gap:44px; align-items:center; }
    .sheet { background:#f7f2e4; padding:20px; box-shadow:0 26px 54px -22px rgba(36,31,26,.7); }
    header { display:flex; justify-content:space-between; gap:12px; padding-bottom:14px; }
    .issue { font-size:9.5px; font-weight:700; letter-spacing:2px; color:#8a7f6c; }
    .block { position:relative; display:grid; grid-template-columns:repeat(3,1fr); gap:0; }
    /* Perforations: a dotted edge on every stamp. */
    .stamp { position:relative; padding:12px 10px 10px; background:#fffdf4; text-align:center; cursor:pointer;
             border:3px dotted #cfc6b4; margin:-1.5px; }
    .val { position:absolute; top:7px; left:9px; font-size:10px; font-weight:700; color:var(--c); }
    .vig { display:grid; place-items:center; aspect-ratio:1/0.82; margin:14px 2px 8px;
           background:var(--c); color:#fffdf4; }
    .vig span { font-size:26px; font-weight:700; letter-spacing:-1px; }
    .nm { margin:0 0 2px; font-size:10.5px; font-weight:700; letter-spacing:.4px; }
    .country { margin:0; font-size:8.5px; letter-spacing:2.4px; color:#8a7f6c; }
    .stamp:hover { background:#fff; }
    /* Circular cancellation across the middle. */
    .post { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%) rotate(-9deg);
            width:150px; height:150px; border-radius:50%; border:2.5px double #3a4a6b; color:#3a4a6b;
            display:grid; place-content:center; gap:3px; text-align:center; opacity:.55; pointer-events:none; }
    .post i { font-style:normal; font-size:9px; letter-spacing:2px; }
    .post b { font-size:17px; letter-spacing:1.4px; }
    .kick { margin:0 0 14px; font-size:10.5px; font-weight:700; letter-spacing:2.6px; text-transform:uppercase; color:#8a5a2b; }
    h1 { margin:0 0 18px; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(38px,6vw,76px); line-height:0.96; letter-spacing:-2px; }
    .bio { margin:0 0 18px; max-width:36ch; font-size:15.5px; line-height:1.68; color:#4e463b; }
    .meta { margin:0; font-size:11.5px; letter-spacing:.6px; color:#8a7f6c; }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} main{grid-template-columns:1fr; gap:26px}
      .post{width:110px;height:110px} }
  `],
})
export class Page80Component {
  readonly stamps = [
    { name: 'ANGULAR', mark: 'Ng', val: '19', colour: '#c0392b' },
    { name: 'TYPESCRIPT', mark: 'Ts', val: '5', colour: '#2c6fb5' },
    { name: 'RXJS', mark: 'Rx', val: '7', colour: '#8e44ad' },
    { name: 'JAVA', mark: 'Ja', val: '21', colour: '#c87f0a' },
    { name: 'SPRING', mark: 'Sb', val: '3', colour: '#2e7d32' },
    { name: 'POSTGRES', mark: 'Pg', val: '16', colour: '#37607d' },
  ];
}
