import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 91 — Matchbook: a struck-cover matchbook with a row of matches inside. */
@Component({
  selector: 'app-page91',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <main>
        <article class="book">
          <section class="cover">
            <p class="close">CLOSE COVER BEFORE STRIKING</p>
            <h1>Shaik<br />Moheed</h1>
            <p class="trade">SOFTWARE ENGINEER</p>
            <p class="addr">CERTINAL · BENGALURU · EST. 2023</p>
            <span class="strike" aria-hidden="true"></span>
          </section>

          <section class="inside">
            <div class="matches" aria-hidden="true">
              @for (m of matches; track m) { <span class="match"><i></i></span> }
            </div>
            <p class="small">Angular · TypeScript · RxJS · Java · Spring Boot · PostgreSQL · Node.js</p>
          </section>
        </article>

        <aside class="list">
          <p class="head">ON THE MENU</p>
          <a class="row"><b>Atlas</b><em>2026</em></a>
          <a class="row"><b>Consent Manager</b><em>2025</em></a>
          <a class="row"><b>Notice Registry</b><em>2025</em></a>
          <a class="row"><b>Design System</b><em>2024</em></a>
          <p class="note">Open for work. Ask at the bar.</p>
        </aside>
      </main>
    </div>
    <app-design-nav [num]="91" designName="Matchbook" />
  `,
  styles: [`
    :host { --red:#b5342b; --cream:#f2e7cf; --ink:#20160f;
            display:block; background:#171009; color:var(--cream); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 22px 104px; }
    main { margin:auto; width:min(900px,100%); display:grid; grid-template-columns:auto 1fr; gap:46px; align-items:center; }
    .book { width:min(290px,80vw); box-shadow:0 26px 54px -22px rgba(0,0,0,.9); }
    .cover { position:relative; background:var(--red); color:var(--cream); padding:22px 20px 42px; text-align:center;
             border-radius:5px 5px 0 0; }
    .close { margin:0 0 20px; font-size:7.5px; letter-spacing:2px; opacity:.8; }
    h1 { margin:0 0 10px; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(28px,4vw,38px); line-height:1; letter-spacing:-1px; }
    .trade { margin:0 0 14px; font-size:9.5px; font-weight:700; letter-spacing:3px; }
    .addr { margin:0; font-size:7.5px; letter-spacing:1.6px; opacity:.75; }
    /* Striking surface along the bottom of the cover. */
    .strike { position:absolute; left:14px; right:14px; bottom:12px; height:20px; border-radius:2px;
              background:repeating-linear-gradient(45deg,#3a2a1c 0 2px,#2a1d13 2px 4px); }
    .inside { background:var(--cream); color:var(--ink); padding:16px 18px 18px; border-radius:0 0 5px 5px; }
    .matches { display:flex; gap:4px; justify-content:center; margin-bottom:14px; }
    .match { display:block; width:11px; height:66px; border-radius:2px 2px 0 0; background:#e4d7b8; position:relative; }
    .match i { position:absolute; top:0; left:0; right:0; height:16px; border-radius:50% 50% 36% 36%;
               background:#8c2f22; }
    .match:first-child i { background:#d9a441; }
    .small { margin:0; font-size:9px; line-height:1.7; text-align:center; color:#6b5c48; }
    .head { margin:0 0 16px; font-size:10.5px; font-weight:700; letter-spacing:2.8px; color:#d9a441; }
    .row { display:flex; justify-content:space-between; align-items:baseline; gap:14px;
           padding:12px 0; border-bottom:1px solid rgba(242,231,207,.16); cursor:pointer; }
    .row b { font-family:Georgia,serif; font-size:17px; font-weight:400; }
    .row em { font-style:normal; font-size:11.5px; opacity:.55; }
    .row:hover b { color:#d9a441; }
    .note { margin:22px 0 0; font-family:Georgia,serif; font-style:italic; font-size:13px; opacity:.6; }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} main{grid-template-columns:1fr; gap:26px; justify-items:center}
      .list{width:100%} }
  `],
})
export class Page91Component {
  readonly matches = Array.from({ length: 11 });
}
