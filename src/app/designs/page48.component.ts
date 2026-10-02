import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 48 — Orbit: skills circling a central hub, radial composition. */
@Component({
  selector: 'app-page48',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM<b>◉</b></span><nav><a>Work</a><a>About</a><a class="pill">Contact</a></nav></header>
      <main>
        <div class="system">
          <span class="orbit o1" aria-hidden="true"></span>
          <span class="orbit o2" aria-hidden="true"></span>
          <div class="hub"><b>Shaik<br />Moheed</b><span>Software Engineer</span></div>
          <span class="chip c1">Angular</span>
          <span class="chip c2">TypeScript</span>
          <span class="chip c3">RxJS</span>
          <span class="chip c4">Java</span>
          <span class="chip c5">Spring Boot</span>
          <span class="chip c6">PostgreSQL</span>
        </div>
        <p class="bio">Consent and e-signature platforms at Certinal — everything orbits a reactive Angular front end over layered Java services.</p>
        <div class="row"><a class="btn">View work</a><a class="btn out">Download CV</a></div>
      </main>
    </div>
    <app-design-nav [num]="48" designName="Orbit" />
  `,
  styles: [`
    :host { --bg:#14123a; --accent:#ffb020; --cyan:#3ddbd9;
            display:block; background:var(--bg); color:#eceaff; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 32px 104px;
            background:radial-gradient(60vw 54vw at 50% 42%, rgba(61,219,217,.16), transparent 66%), var(--bg); }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:var(--accent); }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.8; }
    nav .pill { padding:10px 22px; border-radius:999px; background:var(--accent); color:#14123a; font-weight:700; opacity:1; }
    main { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:26px 0; }
    .system { position:relative; width:min(460px,86vw); aspect-ratio:1; display:grid; place-items:center; margin-bottom:30px; }
    .orbit { position:absolute; border-radius:50%; border:1px dashed rgba(236,234,255,.26); }
    .o1 { inset:14%; animation:spin 36s linear infinite; }
    .o2 { inset:0; animation:spin 52s linear infinite reverse; }
    @keyframes spin { to { transform:rotate(1turn); } }
    .hub { width:44%; aspect-ratio:1; border-radius:50%; display:grid; place-content:center; gap:5px;
           background:linear-gradient(140deg,var(--accent),#ff6b6b); color:#2a1400;
           box-shadow:0 0 0 12px rgba(255,176,32,.14), 0 20px 50px -18px rgba(255,176,32,.7); }
    .hub b { font-size:clamp(17px,2.4vw,24px); line-height:1.08; letter-spacing:-0.8px; }
    .hub span { font-size:10.5px; letter-spacing:1.4px; text-transform:uppercase; opacity:.72; }
    .chip { position:absolute; padding:7px 14px; border-radius:999px; background:rgba(236,234,255,.1);
            border:1px solid rgba(236,234,255,.28); font-size:12.5px; backdrop-filter:blur(6px); white-space:nowrap; }
    .c1 { top:-2%; left:50%; transform:translateX(-50%); }
    .c2 { top:20%; right:-6%; } .c3 { bottom:20%; right:-6%; }
    .c4 { bottom:-2%; left:50%; transform:translateX(-50%); }
    .c5 { bottom:20%; left:-8%; } .c6 { top:20%; left:-8%; }
    .bio { margin:0 0 26px; max-width:52ch; font-size:16.5px; line-height:1.62; opacity:.78; }
    .row { display:flex; gap:12px; flex-wrap:wrap; justify-content:center; }
    .btn { padding:14px 28px; border-radius:999px; background:var(--cyan); color:#06302f; font-size:15px; font-weight:700; cursor:pointer; }
    .btn.out { background:transparent; color:#eceaff; border:1.5px solid rgba(236,234,255,.4); }
    @media (prefers-reduced-motion:reduce){ .orbit{animation:none} }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none} .chip{font-size:11px; padding:5px 11px} }
  `],
})
export class Page48Component {}
