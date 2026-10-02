import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 78 — Tarot: an ornate arcana card with gilt borders and roman numerals. */
@Component({
  selector: 'app-page78',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <main>
        <article class="card">
          <span class="frame" aria-hidden="true"></span>
          <p class="numeral">XI</p>

          <div class="scene" aria-hidden="true">
            <span class="halo"></span>
            <span class="figure">SM</span>
            <span class="star s1">✦</span><span class="star s2">✦</span><span class="star s3">✦</span>
          </div>

          <p class="title">THE ENGINEER</p>
          <p class="legend">Builds consent and e-signature platforms. Angular above, Java below. Reversed: shipping on a Friday.</p>
        </article>

        <aside class="reading">
          <p class="head">THE SPREAD</p>
          <div class="pos"><b>Past</b><span>BE — Electronics &amp; Communication</span></div>
          <div class="pos"><b>Present</b><span>Software Engineer at Certinal</span></div>
          <div class="pos"><b>Future</b><span>Open to the next role</span></div>
          <p class="head mt">SUITS</p>
          <p class="suits">✦ Angular ✦ TypeScript ✦ RxJS ✦ Java ✦ Spring Boot ✦ PostgreSQL ✦</p>
        </aside>
      </main>
    </div>
    <app-design-nav [num]="78" designName="Tarot" />
  `,
  styles: [`
    :host { --gold:#d4af5f; --deep:#1b1330; --cream:#f3ead6;
            display:block; background:#0f0a1d; color:var(--cream); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 22px 104px; }
    main { margin:auto; width:min(900px,100%); display:grid; grid-template-columns:auto 1fr; gap:44px; align-items:center; }
    .card { position:relative; width:min(310px,80vw); aspect-ratio:2/3.3; padding:22px 18px;
            background:linear-gradient(170deg,#2a1b4a,#160f2b); border:3px solid var(--gold);
            display:flex; flex-direction:column; align-items:center;
            box-shadow:0 30px 64px -24px rgba(0,0,0,.9), inset 0 0 50px rgba(212,175,95,.12); }
    .frame { position:absolute; inset:9px; border:1px solid rgba(212,175,95,.55); pointer-events:none; }
    .numeral { margin:0 0 10px; font-family:Georgia,serif; font-size:17px; letter-spacing:4px; color:var(--gold); }
    .scene { position:relative; flex:1; width:100%; display:grid; place-items:center; }
    .halo { position:absolute; width:124px; height:124px; border-radius:50%;
            background:radial-gradient(circle, rgba(212,175,95,.45), transparent 68%);
            box-shadow:0 0 0 1px rgba(212,175,95,.5), 0 0 0 11px rgba(212,175,95,.12); }
    .figure { position:relative; font-family:Georgia,serif; font-size:52px; color:var(--gold); letter-spacing:-1px; }
    .star { position:absolute; color:var(--gold); font-size:13px; opacity:.85; }
    .s1 { top:14%; left:16%; } .s2 { top:26%; right:14%; } .s3 { bottom:18%; left:26%; }
    .title { margin:12px 0 8px; font-family:Georgia,serif; font-size:19px; letter-spacing:3.4px; color:var(--gold); }
    .legend { margin:0; font-size:10.5px; line-height:1.6; text-align:center; opacity:.68; }
    .head { margin:0 0 14px; font-size:10.5px; letter-spacing:3px; color:var(--gold); }
    .head.mt { margin-top:28px; }
    .pos { display:grid; gap:2px; padding:12px 0; border-bottom:1px solid rgba(212,175,95,.2); }
    .pos b { font-family:Georgia,serif; font-size:15px; color:var(--gold); }
    .pos span { font-size:13.5px; opacity:.8; }
    .suits { margin:0; font-size:13px; line-height:1.9; opacity:.72; }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} main{grid-template-columns:1fr; gap:26px; justify-items:center}
      .reading{width:100%} }
  `],
})
export class Page78Component {}
