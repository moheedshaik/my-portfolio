import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 83 — Seed packet: illustrated front, sowing instructions on the back. */
@Component({
  selector: 'app-page83',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <main>
        <article class="packet">
          <span class="flap" aria-hidden="true"></span>
          <p class="house">MOHEED &amp; CO · SEEDSMEN</p>

          <div class="plate" aria-hidden="true">
            <span class="sun"></span>
            <span class="stem"></span>
            <span class="leaf l1"></span><span class="leaf l2"></span>
            <span class="bloom"></span>
          </div>

          <h1>Shaik Moheed</h1>
          <p class="latin">Ingeniarius programmaticus</p>
          <p class="net">NET 3+ YEARS · PACKED FOR 2026</p>
        </article>

        <aside class="back">
          <p class="head">SOWING INSTRUCTIONS</p>
          <div class="row"><b>Position</b><span>Certinal, Bengaluru — full sun</span></div>
          <div class="row"><b>Soil</b><span>Angular · TypeScript · RxJS</span></div>
          <div class="row"><b>Feeds on</b><span>Java · Spring Boot · PostgreSQL</span></div>
          <div class="row"><b>Flowers</b><span>Consent &amp; e-signature platforms</span></div>
          <div class="row"><b>Hardiness</b><span>Survives scope changes</span></div>
          <p class="head mt">VARIETIES GROWN</p>
          <p class="vars">Atlas · Consent Manager · Notice Registry · Design System</p>
        </aside>
      </main>
    </div>
    <app-design-nav [num]="83" designName="Seed packet" />
  `,
  styles: [`
    :host { --kraft:#e8d9b5; --ink:#3a2f1e; --green:#4a7c3f; --bloom:#e07a3f;
            display:block; background:#cbbd9a; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 22px 104px; }
    main { margin:auto; width:min(940px,100%); display:grid; grid-template-columns:auto 1fr; gap:42px; align-items:center; }
    .packet { position:relative; width:min(310px,80vw); aspect-ratio:3/4.2; background:var(--kraft);
              padding:28px 22px 20px; text-align:center; display:flex; flex-direction:column;
              box-shadow:0 26px 54px -22px rgba(58,47,30,.8); }
    .flap { position:absolute; top:0; left:0; right:0; height:34px; background:rgba(58,47,30,.08);
            border-bottom:1px dashed rgba(58,47,30,.4); }
    .house { position:relative; margin:0 0 16px; font-size:9px; font-weight:700; letter-spacing:2.4px; color:#7a6a4a; }
    .plate { position:relative; flex:1; margin-bottom:14px; border:2px solid var(--ink); background:#f5ecd4; overflow:hidden; }
    .sun { position:absolute; top:14px; right:16px; width:42px; height:42px; border-radius:50%; background:#edc14b; }
    .stem { position:absolute; left:50%; bottom:0; width:5px; height:56%; background:var(--green); transform:translateX(-50%); }
    .leaf { position:absolute; width:46px; height:26px; background:var(--green); border-radius:50% 0 50% 0; }
    .l1 { left:28%; bottom:28%; } .l2 { right:28%; bottom:38%; transform:scaleX(-1); }
    .bloom { position:absolute; left:50%; bottom:52%; width:60px; height:60px; transform:translateX(-50%);
             border-radius:50%; background:radial-gradient(circle,#f6d365 30%, var(--bloom) 31%);
             box-shadow:0 0 0 7px rgba(224,122,63,.3); }
    h1 { margin:0 0 4px; font-family:Georgia,"Times New Roman",serif; font-size:clamp(22px,3vw,30px);
         letter-spacing:-0.8px; font-weight:400; }
    .latin { margin:0 0 12px; font-family:Georgia,serif; font-style:italic; font-size:12.5px; color:#7a6a4a; }
    .net { margin:0; padding-top:10px; border-top:1px solid rgba(58,47,30,.3);
           font-size:9px; font-weight:700; letter-spacing:2px; color:#7a6a4a; }
    .head { margin:0 0 14px; font-size:10.5px; font-weight:700; letter-spacing:2.6px; color:var(--green); }
    .head.mt { margin-top:26px; }
    .row { display:grid; grid-template-columns:96px 1fr; gap:14px; padding:10px 0;
           border-bottom:1px dashed rgba(58,47,30,.3); }
    .row b { font-size:11.5px; letter-spacing:1px; }
    .row span { font-size:14px; }
    .vars { margin:0; font-size:14px; line-height:1.8; }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} main{grid-template-columns:1fr; gap:26px; justify-items:center}
      .back{width:100%} }
  `],
})
export class Page83Component {}
