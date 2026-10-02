import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 58 — Stained glass: leaded colour panes with a dark cathedral ground. */
@Component({
  selector: 'app-page58',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM</span><nav><a>Work</a><a>About</a><a>Contact</a></nav></header>

      <main>
        <section class="window" aria-hidden="true">
          <span class="pane p1"></span><span class="pane p2"></span><span class="pane p3"></span>
          <span class="pane p4"></span><span class="pane p5"></span><span class="pane p6"></span>
          <span class="pane p7"></span><span class="pane p8"></span><span class="pane p9"></span>
        </section>

        <section class="copy">
          <p class="kick">Software Engineer · Certinal</p>
          <h1>Shaik<br />Moheed</h1>
          <p class="bio">Consent and e-signature platforms, assembled pane by pane — Angular front ends, Java services, each piece leaded in place.</p>
          <div class="row"><a class="btn">View work</a><a class="btn out">Download CV</a></div>
        </section>
      </main>

      <footer><span>Angular</span><span>TypeScript</span><span>Java</span><span>Spring Boot</span><span>PostgreSQL</span></footer>
    </div>
    <app-design-nav [num]="58" designName="Stained glass" />
  `,
  styles: [`
    :host { --lead:#15131c;
            display:block; background:#120f1a; color:#f4efe4; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 34px 104px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:23px; font-weight:700; letter-spacing:2px; color:#f0c040; }
    nav { display:flex; gap:26px; }
    nav a { font-size:14px; cursor:pointer; opacity:.78; }
    nav a:hover { color:#f0c040; opacity:1; }
    main { flex:1; display:grid; grid-template-columns:auto 1fr; gap:46px; align-items:center; padding:40px 0; }
    /* Leaded window: a grid with thick dark gaps acting as the came. */
    .window { display:grid; grid-template-columns:repeat(3,96px); grid-auto-rows:120px; gap:7px;
              padding:7px; background:var(--lead); border:7px solid var(--lead); border-radius:140px 140px 10px 10px;
              box-shadow:0 0 70px rgba(240,192,64,.22); }
    .pane { display:block; }
    .p1 { background:#e0483c; border-radius:96px 0 0 0; }
    .p2 { background:#f0c040; }
    .p3 { background:#3f7fd8; border-radius:0 96px 0 0; }
    .p4 { background:#2f9e6b; } .p5 { background:#f4efe4; } .p6 { background:#b8453f; }
    .p7 { background:#3f7fd8; } .p8 { background:#f0c040; } .p9 { background:#2f9e6b; }
    .pane:hover { filter:brightness(1.3); }
    .kick { margin:0 0 16px; font-size:11.5px; font-weight:600; letter-spacing:2.6px; text-transform:uppercase; color:#f0c040; }
    h1 { margin:0 0 20px; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(44px,7vw,92px); line-height:0.94; letter-spacing:-2px; }
    .bio { margin:0 0 32px; max-width:38ch; font-size:16.5px; line-height:1.68; opacity:.78; }
    .row { display:flex; gap:12px; flex-wrap:wrap; }
    .btn { padding:14px 30px; border-radius:999px; background:#f0c040; color:#1a1408; font-size:15px; font-weight:600; cursor:pointer; }
    .btn.out { background:transparent; color:#f4efe4; border:1.5px solid rgba(244,239,228,.4); }
    footer { display:flex; flex-wrap:wrap; gap:10px; padding-top:22px; border-top:1px solid #2a2436; }
    footer span { padding:7px 15px; border:1px solid #2a2436; border-radius:999px; font-size:13px; opacity:.76; }
    @media (max-width:900px){
      .wrap{padding:22px 18px 104px} main{grid-template-columns:1fr; gap:28px; justify-items:center}
      .window{grid-template-columns:repeat(3,64px); grid-auto-rows:82px} .copy{text-align:center}
      .bio{margin-inline:auto} .row{justify-content:center}
    }
  `],
})
export class Page58Component {}
