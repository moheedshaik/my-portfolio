import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 42 — Lookbook: fuchsia spine down the left, fashion-editorial serif. */
@Component({
  selector: 'app-page42',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <aside class="spine">
        <span class="logo">SM</span>
        <span class="vert">SOFTWARE ENGINEER — PORTFOLIO 2026</span>
        <span class="no">01</span>
      </aside>
      <section class="page">
        <header><nav><a>Work</a><a>About</a><a>Journal</a><a>Contact</a></nav></header>
        <main>
          <p class="kick">Certinal · Bengaluru</p>
          <h1>Shaik<br /><em>Moheed</em></h1>
          <p class="bio">Consent management and e-signature platforms — Angular front ends over Java services, cut and finished with care.</p>
          <div class="grid">
            <div><b>01</b><span>Atlas</span></div>
            <div><b>02</b><span>Consent Manager</span></div>
            <div><b>03</b><span>Notice Registry</span></div>
            <div><b>04</b><span>Design System</span></div>
          </div>
        </main>
        <footer><span>Angular · TypeScript · Java · Spring Boot · PostgreSQL</span><span>→ Available</span></footer>
      </section>
    </div>
    <app-design-nav [num]="42" designName="Lookbook" />
  `,
  styles: [`
    :host { --fuchsia:#e4007c;
            display:block; background:#faf7f4; color:#1a1416; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:grid; grid-template-columns:96px 1fr; }
    .spine { background:var(--fuchsia); color:#fff; display:flex; flex-direction:column; align-items:center;
             justify-content:space-between; padding:24px 0 104px; }
    .logo { font-size:20px; font-weight:700; letter-spacing:-0.6px; }
    .vert { writing-mode:vertical-rl; font-size:11.5px; letter-spacing:4px; }
    .no { font-family:Georgia,serif; font-size:26px; font-style:italic; }
    .page { display:flex; flex-direction:column; padding:24px 44px 104px; }
    header { display:flex; justify-content:flex-end; }
    nav { display:flex; gap:28px; }
    nav a { font-size:13.5px; cursor:pointer; color:#6b6065; }
    nav a:hover { color:var(--fuchsia); }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; padding:48px 0; }
    .kick { margin:0 0 20px; font-size:11px; font-weight:600; letter-spacing:3px; text-transform:uppercase; color:var(--fuchsia); }
    h1 { margin:0 0 30px; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(44px,8vw,104px); line-height:0.94; letter-spacing:-2.4px; }
    h1 em { font-style:italic; color:var(--fuchsia); }
    .bio { margin:0 0 44px; max-width:40ch; font-size:16.5px; line-height:1.68; color:#55494e; }
    .grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:#e2d9d4; border-top:1px solid #e2d9d4; border-bottom:1px solid #e2d9d4; }
    .grid div { background:#faf7f4; padding:18px 4px 18px 0; cursor:pointer; }
    .grid b { display:block; font-family:Georgia,serif; font-style:italic; font-size:14px; color:var(--fuchsia); margin-bottom:5px; }
    .grid span { font-size:15px; font-weight:500; }
    .grid div:hover span { color:var(--fuchsia); }
    footer { display:flex; justify-content:space-between; gap:18px; flex-wrap:wrap; font-size:12.5px; color:#6b6065; }
    @media (max-width:900px){
      .wrap{grid-template-columns:56px 1fr} .page{padding:20px 18px 104px}
      .grid{grid-template-columns:1fr 1fr} nav{gap:14px} nav a:nth-child(n+3){display:none}
    }
  `],
})
export class Page42Component {}
