import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 46 — Watercolour: bleeding colour washes on cold-pressed paper. */
@Component({
  selector: 'app-page46',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <div class="washes" aria-hidden="true"><i class="w1"></i><i class="w2"></i><i class="w3"></i><i class="w4"></i></div>
      <header><span class="logo">s<i>m</i></span><nav><a>Work</a><a>About</a><a>Journal</a><a>Contact</a></nav></header>
      <main>
        <p class="kick">Software Engineer · Certinal</p>
        <h1>Shaik Moheed</h1>
        <p class="bio">I build consent and e-signature platforms — Angular front ends over Java services. Quiet work, carefully layered.</p>
        <a class="btn">View the work</a>
      </main>
      <footer>
        <div><b>Atlas</b><span>Country data · globe</span></div>
        <div><b>Consent Manager</b><span>Purposes · audits</span></div>
        <div><b>Notice Registry</b><span>Editor · preview</span></div>
      </footer>
    </div>
    <app-design-nav [num]="46" designName="Watercolour" />
  `,
  styles: [`
    :host { display:block; background:#fbf9f4; color:#2f2a33; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:28px 40px 104px;
            max-width:1180px; margin:0 auto; overflow:hidden; isolation:isolate;
            /* Cold-pressed paper tooth. */
            background-image:radial-gradient(rgba(47,42,51,.055) .6px, transparent .6px); background-size:4px 4px; }
    .washes { position:absolute; inset:0; z-index:-1; pointer-events:none; }
    .washes i { position:absolute; border-radius:50%; filter:blur(44px); mix-blend-mode:multiply; }
    .w1 { width:46vw; height:40vw; top:-8vw; right:-6vw; background:#ffb3c6; opacity:.72; }
    .w2 { width:38vw; height:34vw; top:18vw; right:12vw; background:#a8d8ea; opacity:.66; }
    .w3 { width:34vw; height:30vw; bottom:-6vw; left:-4vw; background:#c7e9b0; opacity:.6; }
    .w4 { width:26vw; height:24vw; top:34vw; left:24vw; background:#ffe5a0; opacity:.58; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-family:Georgia,serif; font-size:28px; font-style:italic; }
    .logo i { color:#d96a8c; }
    nav { display:flex; gap:26px; }
    nav a { font-size:14px; cursor:pointer; color:#6a6270; }
    nav a:hover { color:#2f2a33; }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; padding:60px 0; }
    .kick { margin:0 0 18px; font-size:11.5px; font-weight:600; letter-spacing:2.6px; text-transform:uppercase; color:#d96a8c; }
    h1 { margin:0 0 22px; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(42px,7.4vw,96px); line-height:1; letter-spacing:-2.4px; }
    .bio { margin:0 0 34px; max-width:44ch; font-size:17px; line-height:1.72; color:#5c5463; }
    .btn { align-self:flex-start; padding:14px 30px; border-radius:999px; background:#2f2a33; color:#fbf9f4;
           font-size:15px; cursor:pointer; }
    .btn:hover { background:#d96a8c; }
    footer { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; padding-top:24px; border-top:1px solid rgba(47,42,51,.14); }
    footer b { display:block; font-family:Georgia,serif; font-size:17px; margin-bottom:4px; }
    footer span { font-size:13px; color:#6a6270; }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav{gap:14px} nav a:nth-child(n+3){display:none}
      footer{grid-template-columns:1fr; gap:14px} }
  `],
})
export class Page46Component {}
