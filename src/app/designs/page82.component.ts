import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 82 — Sewing pattern: tissue-paper pieces, notches, cutting lines. */
@Component({
  selector: 'app-page82',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header>
        <span class="logo">PATTERN № 01</span>
        <span class="size">SIZE: ONE ENGINEER</span>
        <nav><a>Work</a><a>About</a><a>Contact</a></nav>
      </header>

      <main>
        <section class="pieces" aria-hidden="true">
          <span class="pc p1"><em>FRONT · cut 1</em></span>
          <span class="pc p2"><em>BACK · cut 1</em></span>
          <span class="pc p3"><em>SLEEVE · cut 2</em></span>
        </section>

        <section class="copy">
          <p class="kick">Cut on the fold</p>
          <h1>Shaik<br />Moheed</h1>
          <p class="bio">Software engineer at Certinal. Consent and e-signature platforms — measured twice, cut once, finished properly.</p>

          <div class="notions">
            <div><b>Fabric</b><span>Angular · TypeScript · RxJS</span></div>
            <div><b>Lining</b><span>Java · Spring Boot</span></div>
            <div><b>Notions</b><span>PostgreSQL · Flyway · Git</span></div>
            <div><b>Finish</b><span>Tests, before it ships</span></div>
          </div>
        </section>
      </main>

      <footer><span>SEAM ALLOWANCE 1.5 cm</span><span>ATLAS · CONSENT · NOTICE · SYSTEM</span><span>© 2026</span></footer>
    </div>
    <app-design-nav [num]="82" designName="Sewing pattern" />
  `,
  styles: [`
    :host { --line:#2f4858; --tissue:#f7f3ea;
            display:block; background:var(--tissue); color:var(--line); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:24px 34px 104px;
            background-image:linear-gradient(rgba(47,72,88,.055) 1px,transparent 1px),
                             linear-gradient(90deg,rgba(47,72,88,.055) 1px,transparent 1px);
            background-size:26px 26px; }
    header { display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:14px;
             padding-bottom:12px; border-bottom:1.5px solid var(--line); }
    .logo { font-size:13px; font-weight:700; letter-spacing:2.4px; }
    .size { font-size:10.5px; letter-spacing:2px; opacity:.6; }
    nav { display:flex; gap:22px; justify-content:flex-end; }
    nav a { font-size:13px; cursor:pointer; opacity:.72; }
    nav a:hover { opacity:1; }
    main { flex:1; display:grid; grid-template-columns:1fr 1fr; gap:44px; align-items:center; padding:38px 0; }
    .pieces { position:relative; height:400px; }
    /* Tissue pieces: dashed cutting line, notches along the edge. */
    .pc { position:absolute; display:grid; place-items:center; background:rgba(255,255,255,.72);
          border:2px dashed var(--line); }
    .pc em { font-style:normal; font-size:10.5px; letter-spacing:1.8px; opacity:.72; }
    .pc::before, .pc::after { content:""; position:absolute; width:0; height:0;
                              border-left:7px solid transparent; border-right:7px solid transparent;
                              border-top:11px solid var(--tissue); filter:drop-shadow(0 -1px 0 var(--line)); }
    .pc::before { top:0; left:28%; } .pc::after { top:0; right:28%; }
    .p1 { width:46%; height:72%; top:4%; left:2%; clip-path:polygon(0 0,100% 0,88% 100%,0 100%); }
    .p2 { width:40%; height:58%; top:12%; right:4%; clip-path:polygon(0 0,100% 0,100% 100%,14% 100%); }
    .p3 { width:34%; height:30%; bottom:2%; left:30%; border-radius:50% 50% 8% 8%; }
    .kick { margin:0 0 14px; font-size:10.5px; font-weight:700; letter-spacing:2.8px; text-transform:uppercase; color:#c0564a; }
    h1 { margin:0 0 18px; font-size:clamp(40px,6.2vw,80px); line-height:0.94; letter-spacing:-3px; font-weight:700; }
    .bio { margin:0 0 30px; max-width:36ch; font-size:16px; line-height:1.64; opacity:.76; }
    .notions div { display:grid; grid-template-columns:86px 1fr; gap:14px; padding:10px 0;
                   border-bottom:1px dashed rgba(47,72,88,.3); }
    .notions b { font-size:11px; letter-spacing:1.6px; text-transform:uppercase; color:#c0564a; }
    .notions span { font-size:14px; }
    footer { display:flex; justify-content:space-between; gap:16px; flex-wrap:wrap; padding-top:12px;
             border-top:1.5px solid var(--line); font-size:10px; letter-spacing:1.8px; opacity:.66; }
    @media (max-width:900px){ .wrap{padding:20px 16px 104px} header{grid-template-columns:1fr auto}
      .size{display:none} main{grid-template-columns:1fr; gap:26px} .pieces{height:250px} }
  `],
})
export class Page82Component {}
