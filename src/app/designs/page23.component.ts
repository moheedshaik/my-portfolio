import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 23 — Risograph: two-ink overprint, offset duplicate type, paper grain. */
@Component({
  selector: 'app-page23',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <div class="grain" aria-hidden="true"></div>
      <div class="ink i1" aria-hidden="true"></div>
      <div class="ink i2" aria-hidden="true"></div>
      <header><span class="logo">SHAIK MOHEED</span><nav><a>WORK</a><a>ABOUT</a><a>CONTACT</a></nav></header>
      <main>
        <h1 data-text="ENGINEER">ENGINEER</h1>
        <div class="cols">
          <p>Consent and e-signature platforms, built with Angular and Java. Printed here in two inks, like it's 1974.</p>
          <ul><li>ATLAS — 2026</li><li>CONSENT MANAGER — 2025</li><li>NOTICE REGISTRY — 2025</li><li>DESIGN SYSTEM — 2024</li></ul>
        </div>
      </main>
      <footer><span>BENGALURU, IN</span><span>ANGULAR · JAVA · POSTGRESQL</span><span>© 2026</span></footer>
    </div>
    <app-design-nav [num]="23" designName="Risograph" />
  `,
  styles: [`
    :host { --blue:#2b4bff; --red:#ff3b3b;
            display:block; background:#f4f1e4; color:#1a1a1a; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:22px 30px 104px; overflow:hidden; isolation:isolate; }
    /* Paper tooth, faked with a tiny repeating radial dot. */
    .grain { position:absolute; inset:0; z-index:-1; opacity:.5; pointer-events:none;
             background-image:radial-gradient(rgba(26,26,26,.16) .5px, transparent .5px); background-size:3px 3px; }
    .ink { position:absolute; border-radius:50%; mix-blend-mode:multiply; filter:blur(1px); z-index:-1; }
    .i1 { width:360px; height:360px; top:12%; right:4%; background:var(--blue); opacity:.5; }
    .i2 { width:300px; height:300px; top:28%; right:16%; background:var(--red); opacity:.45; }
    header { display:flex; justify-content:space-between; align-items:center; padding-bottom:12px; border-bottom:2px solid #1a1a1a; }
    .logo { font-size:13px; font-weight:700; letter-spacing:2px; }
    nav { display:flex; gap:20px; }
    nav a { font-size:11.5px; font-weight:600; letter-spacing:1.8px; cursor:pointer; }
    nav a:hover { color:var(--red); }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; padding:44px 0; }
    h1 { position:relative; margin:0 0 36px; font-size:clamp(50px,12vw,168px); line-height:0.84;
         letter-spacing:-7px; font-weight:700; color:var(--blue); }
    /* Mis-registered second ink pass. */
    h1::after { content:attr(data-text); position:absolute; left:7px; top:6px; color:var(--red);
                mix-blend-mode:multiply; opacity:.78; }
    .cols { display:grid; grid-template-columns:1fr 1fr; gap:40px; }
    .cols p { margin:0; font-size:16px; line-height:1.65; max-width:36ch; }
    .cols ul { list-style:none; margin:0; padding:0; }
    .cols li { padding:10px 0; border-top:1.5px solid #1a1a1a; font-size:13.5px; font-weight:600; letter-spacing:1.2px; cursor:pointer; }
    .cols li:last-child { border-bottom:1.5px solid #1a1a1a; }
    .cols li:hover { color:var(--blue); }
    footer { display:flex; justify-content:space-between; gap:16px; flex-wrap:wrap; padding-top:12px;
             border-top:2px solid #1a1a1a; font-size:11px; font-weight:600; letter-spacing:1.6px; }
    @media (max-width:900px){ .wrap{padding:20px 16px 104px} .cols{grid-template-columns:1fr; gap:26px} .i1,.i2{display:none} }
  `],
})
export class Page23Component {}
