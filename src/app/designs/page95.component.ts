import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 95 — VHS: a rental tape in its sleeve, with a BE KIND REWIND sticker. */
@Component({
  selector: 'app-page95',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <main>
        <article class="tape">
          <span class="spool l" aria-hidden="true"></span>
          <span class="spool r" aria-hidden="true"></span>
          <span class="window" aria-hidden="true"></span>

          <section class="sticker">
            <p class="store">MOHEED VIDEO</p>
            <h1>SHAIK MOHEED</h1>
            <p class="genre">SOFTWARE ENGINEER · DRAMA / TECH</p>
            <p class="run">RUNTIME: 3+ YRS · COLOUR · NOT RATED</p>
          </section>

          <span class="rewind">BE KIND<br />REWIND</span>
        </article>

        <aside class="sleeve">
          <p class="head">★★★★☆ — NEW RELEASE</p>
          <p class="blurb">
            An Angular front end meets a layered Java service. Together they must ship a
            consent platform before the sprint ends. Critics call it “surprisingly well tested”.
          </p>

          <div class="rows">
            <div><b>Starring</b><span>Angular · TypeScript · RxJS</span></div>
            <div><b>Featuring</b><span>Java · Spring Boot · PostgreSQL</span></div>
            <div><b>Also on tape</b><span>Atlas · Consent Manager · Notice Registry</span></div>
            <div><b>Filmed at</b><span>Certinal, Bengaluru</span></div>
          </div>

          <p class="due">DUE BACK: whenever you're hiring</p>
        </aside>
      </main>
    </div>
    <app-design-nav [num]="95" designName="VHS rental" />
  `,
  styles: [`
    :host { --shell:#1c1c1f; --sticker:#f0e9d8; --red:#c4342b;
            display:block; background:#241f1a; color:#efe9dc; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 22px 104px; }
    main { margin:auto; width:min(950px,100%); display:grid; grid-template-columns:auto 1fr; gap:46px; align-items:center; }
    .tape { position:relative; width:min(330px,80vw); aspect-ratio:1.78/1; background:var(--shell);
            border-radius:7px; padding:14px; box-shadow:0 26px 54px -22px rgba(0,0,0,.95),
            inset 0 0 0 2px rgba(255,255,255,.07); }
    .window { position:absolute; left:18%; right:18%; top:16px; height:38%; border-radius:4px;
              background:linear-gradient(#0c0c0e,#2a2a2f); box-shadow:inset 0 0 0 2px #3a3a40; }
    .spool { position:absolute; top:22%; width:62px; height:62px; border-radius:50%;
             background:radial-gradient(circle,#4a4a52 0 18%, #1a1a1d 19%); box-shadow:inset 0 0 0 2px #3a3a40; }
    .spool.l { left:23%; } .spool.r { right:23%; }
    .sticker { position:absolute; left:14px; right:14px; bottom:14px; background:var(--sticker); color:#241f1a;
               padding:11px 13px; border-radius:3px; }
    .store { margin:0 0 5px; font-size:7.5px; font-weight:700; letter-spacing:2.4px; color:var(--red); }
    h1 { margin:0 0 5px; font-size:clamp(16px,2.4vw,21px); letter-spacing:-0.5px; font-weight:700; }
    .genre { margin:0 0 4px; font-size:8px; font-weight:600; letter-spacing:1.6px; }
    .run { margin:0; font-size:7px; letter-spacing:1.2px; color:#7d7566; }
    .rewind { position:absolute; top:-12px; right:-12px; width:72px; height:72px; border-radius:50%;
              background:var(--red); color:#fff; display:grid; place-items:center; text-align:center;
              font-size:9px; font-weight:700; letter-spacing:1px; line-height:1.3; transform:rotate(-12deg); }
    .head { margin:0 0 16px; font-size:11px; font-weight:700; letter-spacing:2.4px; color:#e8b64c; }
    .blurb { margin:0 0 26px; max-width:42ch; font-size:16px; line-height:1.72; opacity:.84; }
    .rows div { display:grid; grid-template-columns:100px 1fr; gap:14px; padding:9px 0;
                border-bottom:1px solid rgba(239,233,220,.14); }
    .rows b { font-size:10.5px; letter-spacing:1.6px; text-transform:uppercase; color:#e8b64c; }
    .rows span { font-size:13.5px; }
    .due { margin:22px 0 0; font-size:10.5px; letter-spacing:1.8px; color:var(--red); }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} main{grid-template-columns:1fr; gap:26px; justify-items:center}
      .sleeve{width:100%} }
  `],
})
export class Page95Component {}
