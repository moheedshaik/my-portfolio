import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 36 — Kinetic stack: the name repeated in alternating fills, floor to ceiling. */
@Component({
  selector: 'app-page36',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM.</span><nav><a>Work</a><a>About</a><a class="pill">Contact</a></nav></header>
      <main>
        <div class="stack" aria-hidden="true">
          <span class="l solid">MOHEED</span>
          <span class="l out">MOHEED</span>
          <span class="l solid">MOHEED</span>
          <span class="l out">MOHEED</span>
          <span class="l solid">MOHEED</span>
        </div>
        <h1 class="sr">Shaik Moheed</h1>
        <aside class="card">
          <p class="kick">Software Engineer · Certinal</p>
          <p>Consent and e-signature platforms — Angular front ends over Java services, built to be read again later.</p>
          <a class="btn">View work →</a>
        </aside>
      </main>
      <footer><span>Angular</span><span>TypeScript</span><span>Java</span><span>Spring Boot</span><span>PostgreSQL</span><span>Node.js</span></footer>
    </div>
    <app-design-nav [num]="36" designName="Kinetic stack" />
  `,
  styles: [`
    :host { display:block; background:#111; color:#fff; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:24px 30px 104px; overflow:hidden; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.78; }
    nav .pill { padding:10px 22px; border-radius:999px; background:#d4ff00; color:#111; font-weight:700; opacity:1; }
    main { position:relative; flex:1; display:flex; align-items:center; padding:30px 0; }
    .stack { display:flex; flex-direction:column; width:100%; }
    .l { font-size:clamp(40px,10.4vw,142px); line-height:0.86; letter-spacing:-5px; font-weight:700; white-space:nowrap; }
    .solid { color:#d4ff00; }
    .out { -webkit-text-stroke:2px #d4ff00; color:transparent; }
    .sr { position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0 0 0 0); }
    .card { position:absolute; right:0; bottom:8%; width:min(340px,80%); background:#fff; color:#111;
            padding:26px 28px; border-radius:4px; box-shadow:-12px 12px 0 #d4ff00; }
    .kick { margin:0 0 12px; font-size:11.5px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:#777; }
    .card p:not(.kick) { margin:0 0 20px; font-size:14.5px; line-height:1.6; }
    .btn { font-size:14.5px; font-weight:700; cursor:pointer; border-bottom:2px solid #111; padding-bottom:3px; }
    footer { display:flex; flex-wrap:wrap; gap:9px; padding-top:22px; border-top:1px solid #2a2a2a; }
    footer span { padding:6px 14px; border:1px solid #2a2a2a; border-radius:999px; font-size:12.5px; color:#999; }
    @media (max-width:900px){
      .wrap{padding:20px 16px 104px} nav a:not(.pill){display:none}
      .card{position:static; width:auto; margin-top:24px; box-shadow:-8px 8px 0 #d4ff00}
      main{flex-direction:column; align-items:stretch}
    }
  `],
})
export class Page36Component {}
