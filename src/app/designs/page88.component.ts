import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 88 — Card catalogue: a typed library index card in an oak drawer. */
@Component({
  selector: 'app-page88',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <main>
        <section class="drawer">
          <span class="pull" aria-hidden="true"></span>
          <p class="plate">SH — MO</p>
        </section>

        <article class="card">
          <span class="punch" aria-hidden="true"></span>
          <p class="call">005.1<br />SHA</p>

          <h1>Shaik, Moheed.</h1>
          <p class="statement">Software engineer / by S. Moheed. — Bengaluru : Certinal, 2023– . — 1 career ; ongoing.</p>

          <div class="fields">
            <div><b>Subjects</b><span>Consent management. E-signature platforms. Web applications.</span></div>
            <div><b>Languages</b><span>Angular, TypeScript, RxJS, Java, Spring Boot, PostgreSQL, Node.js.</span></div>
            <div><b>Education</b><span>BE — Electronics &amp; Communication.</span></div>
            <div><b>Holdings</b><span>Atlas (2026). Consent Manager (2025). Notice Registry (2025). Design System (2024).</span></div>
          </div>

          <p class="foot">Status: on the shelf · available for loan</p>
        </article>
      </main>
    </div>
    <app-design-nav [num]="88" designName="Card catalogue" />
  `,
  styles: [`
    :host { --oak:#6b4a2b; --card:#f6efdc; --ink:#2e2a22; --red:#a8453a;
            display:block; background:#3f2d1b; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 22px 104px; }
    main { margin:auto; width:min(900px,100%); display:grid; gap:0; justify-items:center; }
    .drawer { position:relative; width:min(640px,100%); background:linear-gradient(180deg,#7d5833,#5c3f24);
              border-radius:7px 7px 0 0; padding:20px 0 26px; text-align:center;
              box-shadow:inset 0 2px 0 rgba(255,255,255,.18); }
    .pull { position:absolute; left:50%; bottom:9px; width:72px; height:11px; transform:translateX(-50%);
            border-radius:6px; background:#d9b370; box-shadow:0 2px 4px rgba(0,0,0,.5); }
    .plate { margin:0; display:inline-block; padding:6px 20px; background:#efe3c6; color:#5c3f24;
             font-family:"JetBrains Mono",monospace; font-size:12px; letter-spacing:3px;
             border:2px solid #d9b370; }
    /* The card, pulled up out of the drawer. */
    .card { position:relative; width:min(600px,96%); margin-top:-14px; background:var(--card); padding:30px 34px 26px;
            box-shadow:0 26px 54px -22px rgba(0,0,0,.85);
            background-image:linear-gradient(rgba(46,42,34,.07) 1px, transparent 1px);
            background-size:100% 26px; background-position:0 72px; }
    .punch { position:absolute; left:50%; bottom:10px; width:17px; height:17px; transform:translateX(-50%);
             border-radius:50%; background:#3f2d1b; box-shadow:inset 0 2px 4px rgba(0,0,0,.6); }
    .call { position:absolute; top:28px; right:32px; margin:0; font-family:"JetBrains Mono",monospace;
            font-size:12px; line-height:1.5; letter-spacing:1px; color:var(--red); text-align:center; }
    h1 { margin:0 0 10px; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(24px,3.6vw,34px); letter-spacing:-0.6px; }
    .statement { margin:0 0 22px; font-family:"JetBrains Mono",monospace; font-size:11.5px; line-height:1.85; color:#5a5346; }
    .fields div { display:grid; grid-template-columns:86px 1fr; gap:14px; padding:8px 0; }
    .fields b { font-size:10px; letter-spacing:1.6px; text-transform:uppercase; color:var(--red); }
    .fields span { font-family:"JetBrains Mono",monospace; font-size:11.5px; line-height:1.7; }
    .foot { margin:20px 0 0; padding-top:12px; border-top:1px solid rgba(46,42,34,.2);
            font-size:10.5px; letter-spacing:1.4px; color:#7a7263; }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} .card{padding:24px 20px 24px}
      .call{position:static; text-align:left; margin-bottom:10px} }
  `],
})
export class Page88Component {}
