import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 01 — Electric citrus: full-bleed lime, oversized black type. */
@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM</span><nav><a>Work</a><a>About</a><a>Contact</a></nav></header>
      <main>
        <p class="kick">Software Engineer — Certinal</p>
        <h1>SHAIK<br />MOHEED</h1>
        <div class="under">
          <p>I build consent and e-signature platforms. Angular on the front, Java underneath, tested the whole way down.</p>
          <a class="cta">See the work <i>↗</i></a>
        </div>
      </main>
      <footer>
        <span>Angular</span><span>TypeScript</span><span>Java</span>
        <span>Spring Boot</span><span>PostgreSQL</span><span>Node.js</span>
      </footer>
    </div>
    <app-design-nav [num]="1" designName="Electric citrus" />
  `,
  styles: [`
    :host { display:block; background:#d8ff3e; color:#0a0a0a; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:24px 30px 104px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:22px; font-weight:700; letter-spacing:-1px; }
    nav { display:flex; gap:26px; }
    nav a { font-size:14px; font-weight:500; cursor:pointer; border-bottom:2px solid transparent; }
    nav a:hover { border-color:#0a0a0a; }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; padding:40px 0; }
    .kick { margin:0 0 18px; font-size:13px; font-weight:600; letter-spacing:2.4px; text-transform:uppercase; }
    h1 { margin:0; font-size:clamp(58px,13.5vw,190px); line-height:0.82; letter-spacing:-7px; font-weight:700; }
    .under { display:flex; justify-content:space-between; align-items:flex-end; gap:36px; margin-top:34px; flex-wrap:wrap; }
    .under p { margin:0; max-width:40ch; font-size:17px; line-height:1.5; font-weight:500; }
    .cta { display:inline-flex; align-items:center; gap:10px; padding:16px 30px; border-radius:999px;
           background:#0a0a0a; color:#d8ff3e; font-size:15px; font-weight:600; cursor:pointer; white-space:nowrap; }
    .cta i { font-style:normal; transition:transform .2s ease; }
    .cta:hover i { transform:translate(3px,-3px); }
    footer { display:flex; flex-wrap:wrap; gap:10px; padding-top:28px; border-top:2.5px solid #0a0a0a; }
    footer span { padding:7px 15px; border:2px solid #0a0a0a; border-radius:999px; font-size:13px; font-weight:600; }
    @media (max-width:900px){ .wrap{padding:20px 18px 104px} nav{gap:16px} .under{flex-direction:column;align-items:flex-start} }
  `],
})
export class Page1Component {}
