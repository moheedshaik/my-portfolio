import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 71 — Mixtape: cassette shell with turning reels and a hand-written label. */
@Component({
  selector: 'app-page71',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <main>
        <article class="tape">
          <div class="label">
            <p class="brand">SM — 90 MIN · TYPE II</p>
            <h1>Shaik Moheed</h1>
            <p class="hand">software engineer · angular &amp; java</p>
          </div>

          <div class="window" aria-hidden="true">
            <span class="reel"><i></i></span>
            <span class="tapebed"></span>
            <span class="reel"><i></i></span>
          </div>

          <div class="holes" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
        </article>

        <section class="sleeve">
          <p class="side">SIDE A</p>
          <a class="tr"><span>1</span>Atlas<em>2026</em></a>
          <a class="tr"><span>2</span>Consent Manager<em>2025</em></a>
          <a class="tr"><span>3</span>Notice Registry<em>2025</em></a>
          <a class="tr"><span>4</span>Design System<em>2024</em></a>
          <p class="side mt">SIDE B</p>
          <p class="notes">Angular · TypeScript · RxJS · Java · Spring Boot · PostgreSQL · Node.js</p>
        </section>
      </main>
    </div>
    <app-design-nav [num]="71" designName="Mixtape" />
  `,
  styles: [`
    :host { --shell:#f4a259; --ink:#201a16;
            display:block; background:#2b2420; color:#f2ece2; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 22px 104px; }
    main { margin:auto; width:min(980px,100%); display:grid; grid-template-columns:1.2fr 1fr; gap:34px; align-items:center; }
    .tape { position:relative; background:var(--shell); border-radius:9px; padding:16px; color:var(--ink);
            box-shadow:0 26px 56px -22px rgba(0,0,0,.85), inset 0 0 0 3px rgba(0,0,0,.14); }
    .label { background:#fdf6e8; border-radius:4px; padding:14px 16px 12px; margin-bottom:14px;
             border:1px solid rgba(32,26,22,.18); }
    .brand { margin:0 0 8px; font-size:9.5px; font-weight:700; letter-spacing:2.4px; color:#9a6b3a; }
    h1 { margin:0 0 4px; font-family:Georgia,serif; font-size:clamp(24px,3.4vw,38px); letter-spacing:-1px; font-weight:400; }
    .hand { margin:0; font-family:Georgia,serif; font-style:italic; font-size:13.5px; color:#6f635a; }
    .window { display:grid; grid-template-columns:auto 1fr auto; align-items:center; gap:10px;
              background:#1d1915; border-radius:6px; padding:14px 18px; }
    .reel { display:grid; place-items:center; width:72px; height:72px; border-radius:50%; background:#efe6d6; }
    .reel i { display:block; width:30px; height:30px; border-radius:50%; background:#1d1915;
              box-shadow:0 0 0 7px #efe6d6, 0 0 0 9px #cbbfa9; animation:spin 4s linear infinite; }
    @keyframes spin { to { transform:rotate(1turn); } }
    @media (prefers-reduced-motion:reduce){ .reel i{animation:none} }
    .tapebed { height:34px; background:linear-gradient(#4a3a2c,#2e241b); border-radius:2px; }
    .holes { display:flex; justify-content:space-around; padding-top:14px; }
    .holes span { width:16px; height:16px; border-radius:50%; background:rgba(32,26,22,.3); }
    .side { margin:0 0 12px; font-size:10.5px; font-weight:700; letter-spacing:2.8px; color:var(--shell); }
    .side.mt { margin-top:24px; }
    .tr { display:grid; grid-template-columns:22px 1fr auto; gap:12px; align-items:baseline;
          padding:10px 0; border-bottom:1px solid #3e352e; font-size:16px; cursor:pointer; }
    .tr span { font-size:11.5px; color:#8c8075; }
    .tr em { font-style:normal; font-size:12px; color:#8c8075; }
    .tr:hover { color:var(--shell); }
    .notes { margin:0; font-size:13.5px; line-height:1.8; color:#b6aa9c; }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} main{grid-template-columns:1fr; gap:22px}
      .reel{width:54px;height:54px} }
  `],
})
export class Page71Component {}
