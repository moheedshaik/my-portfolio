import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 05 — Mint grid: mint field, heavy black type, visible column rules. */
@Component({
  selector: 'app-page5',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <div class="cols" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      <header>
        <span class="logo">SHAIK MOHEED</span>
        <span class="loc">BENGALURU · IN</span>
        <nav><a>WORK</a><a>ABOUT</a><a>CONTACT</a></nav>
      </header>
      <main>
        <h1>BUILDING<br />FOR THE<br /><em>WEB</em></h1>
        <aside>
          <p>Software engineer at Certinal. I build consent and e-signature platforms with Angular and Java.</p>
          <ul><li>Angular</li><li>TypeScript</li><li>Java</li><li>Spring Boot</li><li>PostgreSQL</li><li>Node.js</li></ul>
        </aside>
      </main>
      <footer>
        <span>© 2026</span><span>Open to work</span><span>BE — ECE</span><span class="dot">●</span>
      </footer>
    </div>
    <app-design-nav [num]="5" designName="Mint grid" />
  `,
  styles: [`
    :host { display:block; background:#9cf5c8; color:#06130c; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:22px 28px 104px; }
    .cols { position:absolute; inset:0; display:grid; grid-template-columns:repeat(5,1fr); pointer-events:none; }
    .cols i { border-left:1px solid rgba(6,19,12,.13); }
    .cols i:first-child { border-left:0; }
    header { position:relative; display:grid; grid-template-columns:1.4fr 1fr 1fr; align-items:baseline;
             padding-bottom:14px; border-bottom:2.5px solid #06130c; }
    .logo { font-size:14px; font-weight:700; letter-spacing:1.6px; }
    .loc { font-size:11.5px; letter-spacing:1.6px; opacity:.7; }
    nav { display:flex; gap:20px; justify-content:flex-end; }
    nav a { font-size:11.5px; font-weight:600; letter-spacing:1.6px; cursor:pointer; }
    nav a:hover { background:#06130c; color:#9cf5c8; }
    main { position:relative; flex:1; display:grid; grid-template-columns:1.6fr 1fr; gap:40px; align-items:end; padding:48px 0 30px; }
    h1 { margin:0; font-size:clamp(50px,11vw,150px); line-height:0.8; letter-spacing:-6px; font-weight:700; }
    h1 em { font-style:normal; -webkit-text-stroke:3px #06130c; color:transparent; }
    aside p { margin:0 0 24px; font-size:16px; line-height:1.55; font-weight:500; }
    aside ul { list-style:none; margin:0; padding:0; display:flex; flex-wrap:wrap; gap:7px; }
    aside li { padding:6px 13px; border:2px solid #06130c; font-size:12.5px; font-weight:600; letter-spacing:.4px; }
    footer { position:relative; display:flex; justify-content:space-between; align-items:center;
             padding-top:14px; border-top:2.5px solid #06130c; font-size:11.5px; font-weight:600; letter-spacing:1.4px; }
    .dot { color:#06130c; }
    @media (max-width:900px){
      .wrap{padding:20px 16px 104px} header{grid-template-columns:1fr 1fr} nav{grid-column:span 2;justify-content:flex-start;margin-top:8px}
      main{grid-template-columns:1fr; align-items:start} .cols{grid-template-columns:repeat(2,1fr)}
    }
  `],
})
export class Page5Component {}
