import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 02 — Coral pop: hot coral field, cream type, circular motifs. */
@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <div class="rings" aria-hidden="true"><i></i><i></i><i></i></div>
      <header><span class="logo">sm<b>.</b></span><nav><a>Work</a><a>About</a><a>Journal</a><a class="pill">Hire me</a></nav></header>
      <main>
        <h1>Hello,<br />I'm <em>Moheed</em></h1>
        <p>A software engineer who builds consent and e-signature platforms — Angular front ends over Java services.</p>
        <div class="row"><a class="btn">View projects</a><a class="btn out">Download CV</a></div>
      </main>
      <footer>
        <div><b>3+</b><span>Years</span></div>
        <div><b>BE</b><span>ECE</span></div>
        <div><b>4</b><span>Projects</span></div>
        <div><b>6</b><span>Tools</span></div>
      </footer>
    </div>
    <app-design-nav [num]="2" designName="Coral pop" />
  `,
  styles: [`
    :host { display:block; background:#ff5a4d; color:#fff6ef; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:26px 30px 104px; overflow:hidden; }
    .rings { position:absolute; inset:0; pointer-events:none; }
    .rings i { position:absolute; border:2px solid rgba(255,246,239,.28); border-radius:50%; }
    .rings i:nth-child(1){ width:620px;height:620px; top:-190px; right:-150px; }
    .rings i:nth-child(2){ width:420px;height:420px; top:-90px; right:-50px; }
    .rings i:nth-child(3){ width:300px;height:300px; bottom:-120px; left:-80px; }
    header { position:relative; display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:#ffe066; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.88; }
    nav a:hover { opacity:1; }
    nav .pill { padding:10px 20px; border-radius:999px; background:#fff6ef; color:#ff5a4d; font-weight:600; opacity:1; }
    main { position:relative; flex:1; display:flex; flex-direction:column; justify-content:center; padding:46px 0; }
    h1 { margin:0 0 22px; font-size:clamp(46px,8.6vw,112px); line-height:0.94; letter-spacing:-4px; font-weight:700; }
    h1 em { font-style:normal; color:#ffe066; }
    main p { margin:0 0 34px; max-width:44ch; font-size:18px; line-height:1.56; opacity:.92; }
    .row { display:flex; gap:14px; flex-wrap:wrap; }
    .btn { padding:15px 30px; border-radius:999px; background:#2b1410; color:#fff6ef; font-size:15px; font-weight:500; cursor:pointer; }
    .btn.out { background:transparent; border:2px solid rgba(255,246,239,.5); }
    .btn:hover { transform:translateY(-2px); }
    footer { position:relative; display:grid; grid-template-columns:repeat(4,1fr); gap:20px; padding-top:28px; border-top:1.5px solid rgba(255,246,239,.3); }
    footer b { display:block; font-size:34px; font-weight:700; letter-spacing:-1.6px; color:#ffe066; }
    footer span { font-size:12px; letter-spacing:1.4px; text-transform:uppercase; opacity:.8; }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none} footer{grid-template-columns:repeat(2,1fr)} }
  `],
})
export class Page2Component {}
