import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 08 — Ultraviolet glow: deep violet field, luminous spotlight behind the name. */
@Component({
  selector: 'app-page8',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <div class="glow" aria-hidden="true"></div>
      <header><span class="logo">SM<b>·</b></span><nav><a>Work</a><a>About</a><a>Resume</a><a class="pill">Contact</a></nav></header>
      <main>
        <h1>SHAIK MOHEED</h1>
        <p class="role">Software Engineer — Angular &amp; Java</p>
        <p class="bio">I build consent and e-signature platforms: reactive front ends, layered services, and migrations that don't surprise anyone.</p>
        <div class="row"><a class="btn">View work</a><a class="btn out">Download CV</a></div>
      </main>
      <footer>
        <div><b>3+</b><span>Years</span></div><div><b>BE</b><span>ECE</span></div>
        <div><b>4</b><span>Projects</span></div><div><b>6</b><span>Core tools</span></div>
      </footer>
    </div>
    <app-design-nav [num]="8" designName="Ultraviolet glow" />
  `,
  styles: [`
    :host { display:block; background:#1a0b3d; color:#f2ecff; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:26px 30px 104px; overflow:hidden; isolation:isolate; }
    .glow { position:absolute; inset:0; z-index:-1;
      background:radial-gradient(60vw 48vw at 50% 34%, rgba(168,85,247,.68), transparent 64%),
                 radial-gradient(44vw 40vw at 14% 86%, rgba(34,211,238,.4), transparent 66%),
                 radial-gradient(40vw 36vw at 88% 78%, rgba(244,114,182,.38), transparent 66%); }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:#67e8f9; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.86; }
    nav .pill { padding:10px 20px; border-radius:999px; background:rgba(255,255,255,.14);
                border:1px solid rgba(255,255,255,.3); opacity:1; }
    nav .pill:hover { background:#f2ecff; color:#1a0b3d; }
    main { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:48px 0; }
    h1 { margin:0 0 16px; font-size:clamp(40px,8.4vw,110px); line-height:0.94; letter-spacing:-4px; font-weight:700;
         text-shadow:0 0 44px rgba(168,85,247,.85), 0 0 110px rgba(168,85,247,.5); }
    .role { margin:0 0 20px; font-size:15px; letter-spacing:2.2px; text-transform:uppercase; color:#67e8f9; }
    .bio { margin:0 0 34px; max-width:52ch; font-size:17px; line-height:1.64; opacity:.82; }
    .row { display:flex; gap:14px; flex-wrap:wrap; justify-content:center; }
    .btn { padding:15px 30px; border-radius:999px; background:#f2ecff; color:#1a0b3d; font-size:15px; font-weight:600; cursor:pointer;
           box-shadow:0 0 40px rgba(242,236,255,.32); }
    .btn.out { background:rgba(255,255,255,.1); color:#f2ecff; border:1px solid rgba(255,255,255,.36); box-shadow:none; }
    footer { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; text-align:center; padding-top:26px;
             border-top:1px solid rgba(255,255,255,.18); }
    footer b { display:block; font-size:32px; font-weight:700; letter-spacing:-1.4px; color:#67e8f9; }
    footer span { font-size:11.5px; letter-spacing:1.4px; text-transform:uppercase; opacity:.7; }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none} footer{grid-template-columns:repeat(2,1fr)} }
  `],
})
export class Page8Component {}
