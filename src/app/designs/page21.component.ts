import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 21 — Orange crush: vivid orange, rotating circular badge. */
@Component({
  selector: 'app-page21',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM.</span><nav><a>Work</a><a>About</a><a class="pill">Contact</a></nav></header>
      <main>
        <div class="copy">
          <h1>Shaik<br />Moheed</h1>
          <p>Software engineer building consent and e-signature platforms — Angular front ends over Java services.</p>
          <a class="btn">See the work →</a>
        </div>
        <div class="badge" aria-hidden="true">
          <svg viewBox="0 0 200 200">
            <defs><path id="c21" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" /></defs>
            <text><textPath href="#c21">AVAILABLE FOR WORK · ANGULAR · JAVA · AVAILABLE FOR WORK · ANGULAR · JAVA · </textPath></text>
          </svg>
          <span class="dot">↓</span>
        </div>
      </main>
      <footer><span>Angular</span><span>TypeScript</span><span>Java</span><span>Spring Boot</span><span>PostgreSQL</span><span>Node.js</span></footer>
    </div>
    <app-design-nav [num]="21" designName="Orange crush" />
  `,
  styles: [`
    :host { display:block; background:#ff6b00; color:#2b0f00; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 32px 104px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; color:#fff; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; color:#fff; cursor:pointer; opacity:.9; }
    nav .pill { padding:10px 20px; border-radius:999px; background:#2b0f00; opacity:1; font-weight:600; }
    main { flex:1; display:grid; grid-template-columns:1.3fr 1fr; gap:40px; align-items:center; padding:44px 0; }
    h1 { margin:0 0 20px; font-size:clamp(52px,9vw,120px); line-height:0.86; letter-spacing:-5px; font-weight:700; color:#fff; }
    .copy p { margin:0 0 30px; max-width:36ch; font-size:17px; line-height:1.56; }
    .btn { display:inline-block; padding:15px 32px; border-radius:999px; background:#2b0f00; color:#fff;
           font-size:15px; font-weight:600; cursor:pointer; }
    .btn:hover { transform:translateY(-2px); }
    .badge { position:relative; justify-self:center; width:230px; height:230px; display:grid; place-items:center; }
    .badge svg { position:absolute; inset:0; width:100%; height:100%; animation:spin 18s linear infinite; }
    .badge text { font-size:13.5px; font-weight:700; letter-spacing:3.4px; fill:#2b0f00; }
    .dot { width:88px; height:88px; border-radius:50%; background:#2b0f00; color:#ff6b00;
           display:grid; place-items:center; font-size:30px; }
    @keyframes spin { to { transform:rotate(1turn); } }
    @media (prefers-reduced-motion:reduce){ .badge svg{animation:none} }
    footer { display:flex; flex-wrap:wrap; gap:10px; padding-top:24px; border-top:2px solid rgba(43,15,0,.3); }
    footer span { padding:7px 15px; border:2px solid #2b0f00; border-radius:999px; font-size:13px; font-weight:600; }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none} main{grid-template-columns:1fr} .badge{width:180px;height:180px} }
  `],
})
export class Page21Component {}
