import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 12 — Acid poster: black field, acid-green slab type, print-poster layout. */
@Component({
  selector: 'app-page12',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span>SHAIK MOHEED</span><span>PORTFOLIO</span><span>2026</span><span class="g">● OPEN</span></header>
      <main>
        <h1>SOFT<br />WARE<br /><em>ENGR</em></h1>
        <div class="side">
          <p class="n">01 / BIO</p>
          <p>Consent and e-signature platforms. Angular front ends over layered Java services. BE in Electronics &amp; Communication.</p>
          <p class="n">02 / STACK</p>
          <p class="g">ANGULAR — TYPESCRIPT — RXJS — JAVA — SPRING BOOT — POSTGRESQL — NODE.JS</p>
          <p class="n">03 / WORK</p>
          <ul><li>ATLAS</li><li>CONSENT MANAGER</li><li>NOTICE REGISTRY</li><li>DESIGN SYSTEM</li></ul>
        </div>
      </main>
      <footer><span>BENGALURU · IN</span><span class="g">GITHUB — LINKEDIN — EMAIL</span></footer>
    </div>
    <app-design-nav [num]="12" designName="Acid poster" />
  `,
  styles: [`
    :host { display:block; background:#0a0a0a; color:#f2f2f2; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:20px 26px 104px; }
    header { display:flex; justify-content:space-between; gap:16px; padding-bottom:12px; border-bottom:2px solid #c8ff00;
             font-size:11.5px; font-weight:600; letter-spacing:1.8px; flex-wrap:wrap; }
    .g { color:#c8ff00; }
    main { flex:1; display:grid; grid-template-columns:1.25fr 1fr; gap:46px; align-items:center; padding:40px 0; }
    h1 { margin:0; font-size:clamp(62px,13vw,178px); line-height:0.78; letter-spacing:-8px; font-weight:700; color:#c8ff00; }
    h1 em { font-style:normal; -webkit-text-stroke:3px #c8ff00; color:transparent; }
    .n { margin:0 0 8px; font-size:11px; font-weight:600; letter-spacing:2.2px; color:#6e6e6e; }
    .side p:not(.n) { margin:0 0 26px; font-size:14.5px; line-height:1.72; }
    .side ul { list-style:none; margin:0; padding:0; }
    .side li { padding:9px 0; border-top:1px solid #262626; font-size:14px; letter-spacing:1.2px; cursor:pointer; }
    .side li:last-child { border-bottom:1px solid #262626; }
    .side li:hover { color:#c8ff00; padding-left:10px; }
    footer { display:flex; justify-content:space-between; gap:16px; flex-wrap:wrap; padding-top:12px;
             border-top:2px solid #c8ff00; font-size:11.5px; font-weight:600; letter-spacing:1.8px; }
    @media (max-width:900px){ .wrap{padding:18px 16px 104px} main{grid-template-columns:1fr; gap:30px} header span:nth-child(2){display:none} }
  `],
})
export class Page12Component {}
