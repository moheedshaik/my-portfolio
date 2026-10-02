import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 76 — Neon sign: a lit shopfront on a brick wall at night. */
@Component({
  selector: 'app-page76',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM</span><nav><a>Work</a><a>About</a><a>Contact</a></nav></header>

      <main>
        <section class="sign">
          <p class="open">◦ OPEN ◦</p>
          <h1 class="neon">Shaik<br />Moheed</h1>
          <p class="trade neon pink">Software Engineer</p>
          <span class="tube" aria-hidden="true"></span>
        </section>

        <section class="board">
          <p class="head">NOW SERVING</p>
          <a class="row"><b>Angular front ends</b><em>typed forms · OnPush</em></a>
          <a class="row"><b>Java services</b><em>Spring Boot · layered</em></a>
          <a class="row"><b>PostgreSQL</b><em>migrations that behave</em></a>
          <a class="row"><b>Consent platforms</b><em>purposes · audits</em></a>
          <p class="hours">OPEN FOR WORK · BENGALURU · 2026</p>
        </section>
      </main>
    </div>
    <app-design-nav [num]="76" designName="Neon sign" />
  `,
  styles: [`
    :host { --cyan:#4ff0ff; --pink:#ff4fd8; --amber:#ffd36e;
            display:block; background:#140f1c; color:#f0eaf7; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 32px 104px;
            /* Brick courses. */
            background-image:
              linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
            background-size:100% 42px, 92px 42px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:23px; font-weight:700; letter-spacing:2px; color:var(--cyan);
            text-shadow:0 0 12px var(--cyan); }
    nav { display:flex; gap:24px; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.7; }
    nav a:hover { color:var(--cyan); opacity:1; text-shadow:0 0 10px var(--cyan); }
    main { flex:1; display:grid; grid-template-columns:1.3fr 1fr; gap:48px; align-items:center; padding:40px 0; }
    .sign { position:relative; text-align:center; padding:40px 26px; border-radius:14px;
            border:2px solid rgba(79,240,255,.25); background:rgba(255,255,255,.02);
            box-shadow:0 0 80px rgba(79,240,255,.12) inset; }
    .open { margin:0 0 18px; font-size:11px; letter-spacing:5px; color:var(--amber);
            text-shadow:0 0 12px var(--amber); animation:flicker 4s infinite; }
    @keyframes flicker { 0%,96%,100%{opacity:1} 97%{opacity:.35} 98%{opacity:.9} 99%{opacity:.4} }
    .neon { color:#fff; }
    h1 { margin:0 0 16px; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(44px,7.6vw,96px); line-height:0.98; letter-spacing:-1px;
         text-shadow:0 0 7px #fff, 0 0 18px var(--cyan), 0 0 40px var(--cyan), 0 0 80px rgba(79,240,255,.6); }
    .trade { margin:0; font-size:clamp(15px,2vw,22px); letter-spacing:4px;
             text-shadow:0 0 6px #fff, 0 0 16px var(--pink), 0 0 36px var(--pink); }
    .tube { position:absolute; left:26px; right:26px; bottom:22px; height:2px; border-radius:2px;
            background:var(--amber); box-shadow:0 0 10px var(--amber), 0 0 24px var(--amber); }
    .head { margin:0 0 16px; font-size:10.5px; letter-spacing:3px; color:var(--amber); }
    .row { display:flex; justify-content:space-between; align-items:baseline; gap:14px;
           padding:13px 0; border-bottom:1px solid rgba(240,234,247,.12); cursor:pointer; }
    .row b { font-size:16px; font-weight:500; }
    .row em { font-style:normal; font-size:12px; opacity:.56; }
    .row:hover b { color:var(--cyan); text-shadow:0 0 12px var(--cyan); }
    .hours { margin:24px 0 0; font-size:10px; letter-spacing:2.4px; opacity:.5; }
    @media (prefers-reduced-motion:reduce){ .open{animation:none} }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} main{grid-template-columns:1fr; gap:28px}
      .sign{padding:30px 18px} }
  `],
})
export class Page76Component {}
