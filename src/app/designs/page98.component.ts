import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 98 — Confectionery: a foil-wrapped bar with nutrition panel and ingredients. */
@Component({
  selector: 'app-page98',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <main>
        <article class="bar">
          <span class="crimp l" aria-hidden="true"></span>
          <span class="crimp r" aria-hidden="true"></span>

          <div class="face">
            <p class="maker">MOHEED CONFECTIONERY</p>
            <h1>SHAIK<br />MOHEED</h1>
            <p class="flavour">SOFTWARE ENGINEER · ORIGINAL</p>
            <span class="burst">NOW<br />WITH<br />TESTS</span>
            <p class="weight">NET 3+ YRS ℮</p>
          </div>
        </article>

        <aside class="panel">
          <p class="head">NUTRITION</p>
          <div class="nt big"><b>Serving</b><span>1 engineer</span></div>
          @for (n of nutrition; track n.k) {
            <div class="nt"><b>{{ n.k }}</b><span>{{ n.v }}</span></div>
          }

          <p class="head mt">INGREDIENTS</p>
          <p class="ing">
            ANGULAR, TYPESCRIPT, RXJS, JAVA, SPRING BOOT, POSTGRESQL, NODE.JS,
            FLYWAY, GIT, STORYBOOK. MAY CONTAIN TRACES OF CSS.
          </p>
          <p class="allergen">Contains: strong opinions about migrations.</p>
        </aside>
      </main>
    </div>
    <app-design-nav [num]="98" designName="Confectionery" />
  `,
  styles: [`
    :host { --wrap:#c2185b; --gold:#ffd04d; --cream:#fff6e6;
            display:block; background:#2e0f1e; color:var(--cream); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 22px 104px; }
    main { margin:auto; width:min(940px,100%); display:grid; grid-template-columns:auto 1fr; gap:46px; align-items:center; }
    .bar { position:relative; width:min(330px,80vw); }
    /* Crimped foil ends. */
    .crimp { position:absolute; top:12%; bottom:12%; width:26px;
             background:repeating-linear-gradient(90deg,#d94a84 0 4px,#a3104a 4px 8px); }
    .crimp.l { left:-22px; border-radius:7px 0 0 7px; }
    .crimp.r { right:-22px; border-radius:0 7px 7px 0; }
    .face { position:relative; background:linear-gradient(165deg,#e0376f,var(--wrap)); padding:30px 26px 22px;
            border-radius:5px; text-align:center; box-shadow:0 26px 54px -22px rgba(0,0,0,.9),
            inset 0 0 0 3px rgba(255,255,255,.12); overflow:hidden; }
    .maker { margin:0 0 16px; font-size:8px; font-weight:700; letter-spacing:2.6px; color:var(--gold); }
    h1 { margin:0 0 10px; font-size:clamp(28px,4.4vw,42px); line-height:0.92; letter-spacing:-1.8px; font-weight:700;
         text-shadow:0 3px 0 rgba(0,0,0,.22); }
    .flavour { margin:0 0 20px; font-size:9px; font-weight:700; letter-spacing:2.4px; }
    .burst { display:inline-grid; place-items:center; width:84px; height:84px; border-radius:50%;
             background:var(--gold); color:#6b2a10; font-size:10px; font-weight:700; line-height:1.25;
             letter-spacing:.6px; transform:rotate(-10deg); }
    .weight { margin:18px 0 0; font-size:8px; letter-spacing:1.8px; opacity:.8; }
    .head { margin:0 0 12px; font-size:10px; font-weight:700; letter-spacing:2.6px; color:var(--gold);
            padding-bottom:7px; border-bottom:3px solid var(--gold); }
    .head.mt { margin-top:24px; }
    .nt { display:flex; justify-content:space-between; gap:14px; padding:7px 0;
          border-bottom:1px solid rgba(255,246,230,.16); font-size:13.5px; }
    .nt.big { font-weight:700; font-size:15px; }
    .nt b { font-weight:500; }
    .ing { margin:0 0 10px; font-size:11.5px; line-height:1.85; letter-spacing:.4px; opacity:.84; }
    .allergen { margin:0; font-size:11.5px; font-style:italic; color:var(--gold); }
    @media (max-width:900px){ .wrap{padding:20px 20px 104px} main{grid-template-columns:1fr; gap:30px; justify-items:center}
      .panel{width:100%} }
  `],
})
export class Page98Component {
  readonly nutrition = [
    { k: 'Angular', v: '92 %' },
    { k: 'TypeScript', v: '88 %' },
    { k: 'Java · Spring', v: '78 %' },
    { k: 'PostgreSQL', v: '72 %' },
    { k: 'Of which tested', v: '100 %' },
  ];
}
