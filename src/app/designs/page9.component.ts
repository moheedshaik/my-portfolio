import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 09 — Teal duotone: deep teal and butter, large arc shapes. */
@Component({
  selector: 'app-page9',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">shaik<b>moheed</b></span><nav><a>Work</a><a>About</a><a>Contact</a></nav></header>
      <main>
        <div class="copy">
          <h1>Engineer.<br />Builder.<br /><em>Finisher.</em></h1>
          <p>Consent and e-signature platforms, built with Angular and Java. I like the part where it actually ships.</p>
          <a class="cta">See the work</a>
        </div>
        <div class="art" aria-hidden="true">
          <span class="arc a1"></span><span class="arc a2"></span><span class="arc a3"></span><span class="disc"></span>
        </div>
      </main>
      <footer><span>Angular</span><span>TypeScript</span><span>Java</span><span>Spring Boot</span><span>PostgreSQL</span><span>Node.js</span></footer>
    </div>
    <app-design-nav [num]="9" designName="Teal duotone" />
  `,
  styles: [`
    :host { display:block; background:#0f5c5c; color:#ffeec2; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 32px 104px; overflow:hidden; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:18px; font-weight:500; letter-spacing:-0.4px; }
    .logo b { font-weight:700; color:#ffc93c; }
    nav { display:flex; gap:24px; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.86; border-bottom:1.5px solid transparent; padding-bottom:2px; }
    nav a:hover { opacity:1; border-color:#ffc93c; }
    main { flex:1; display:grid; grid-template-columns:1.1fr 1fr; gap:40px; align-items:center; padding:40px 0; }
    h1 { margin:0 0 24px; font-size:clamp(44px,7.4vw,96px); line-height:0.92; letter-spacing:-3.6px; font-weight:700; }
    h1 em { font-style:normal; color:#ffc93c; }
    .copy p { margin:0 0 32px; max-width:38ch; font-size:17px; line-height:1.6; opacity:.88; }
    .cta { display:inline-block; padding:15px 32px; border-radius:999px; background:#ffc93c; color:#0a3b3b;
           font-size:15px; font-weight:600; cursor:pointer; }
    .cta:hover { transform:translateY(-2px); }
    .art { position:relative; height:400px; }
    .arc { position:absolute; border-radius:50%; border:26px solid #ffc93c; border-right-color:transparent; border-bottom-color:transparent; }
    .a1 { width:300px; height:300px; top:20px; left:10%; transform:rotate(-30deg); }
    .a2 { width:210px; height:210px; top:120px; left:42%; transform:rotate(60deg); border-color:#ff8f5c; border-right-color:transparent; border-bottom-color:transparent; }
    .a3 { width:150px; height:150px; top:12px; right:6%; transform:rotate(150deg); border-color:#ffeec2; border-right-color:transparent; border-bottom-color:transparent; }
    .disc { position:absolute; width:92px; height:92px; border-radius:50%; background:#ff8f5c; bottom:30px; left:22%; }
    footer { display:flex; flex-wrap:wrap; gap:10px; padding-top:24px; border-top:1.5px solid rgba(255,238,194,.3); }
    footer span { padding:7px 15px; border:1.5px solid rgba(255,238,194,.44); border-radius:999px; font-size:13px; }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} main{grid-template-columns:1fr} .art{height:230px} .a1{width:200px;height:200px} }
  `],
})
export class Page9Component {}
