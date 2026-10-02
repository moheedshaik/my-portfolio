import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 44 — Isometric: CSS-built 3D blocks stacked beside the copy. */
@Component({
  selector: 'app-page44',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM.</span><nav><a>Work</a><a>About</a><a class="pill">Contact</a></nav></header>
      <main>
        <div class="copy">
          <span class="tag">Software Engineer · Certinal</span>
          <h1>Built in<br />layers</h1>
          <p>Angular on top, Spring Boot in the middle, PostgreSQL underneath. I'm Shaik Moheed — I work on all three.</p>
          <a class="btn">See the stack →</a>
        </div>
        <div class="iso" aria-hidden="true">
          <div class="cube c1"><i class="t"></i><i class="l"></i><i class="r"></i><em>Angular</em></div>
          <div class="cube c2"><i class="t"></i><i class="l"></i><i class="r"></i><em>Spring Boot</em></div>
          <div class="cube c3"><i class="t"></i><i class="l"></i><i class="r"></i><em>PostgreSQL</em></div>
        </div>
      </main>
      <footer><span>TypeScript</span><span>RxJS</span><span>Node.js</span><span>Flyway</span><span>Storybook</span></footer>
    </div>
    <app-design-nav [num]="44" designName="Isometric" />
  `,
  styles: [`
    :host { --a:#ff6b6b; --b:#4ecdc4; --c:#ffd93d;
            display:block; background:#f4f1ff; color:#1b1535; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 32px 104px; overflow:hidden; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.7; }
    nav .pill { padding:10px 22px; border-radius:999px; background:#1b1535; color:#fff; opacity:1; font-weight:600; }
    main { flex:1; display:grid; grid-template-columns:1fr 1fr; gap:36px; align-items:center; padding:40px 0; }
    .tag { display:inline-block; padding:7px 15px; border-radius:999px; background:#fff; font-size:12.5px; font-weight:600; }
    h1 { margin:20px 0 18px; font-size:clamp(42px,6.6vw,84px); line-height:0.94; letter-spacing:-3.2px; font-weight:700; }
    .copy p { margin:0 0 30px; max-width:36ch; font-size:17px; line-height:1.6; opacity:.72; }
    .btn { display:inline-block; padding:15px 30px; border-radius:999px; background:#1b1535; color:#fff;
           font-size:15px; font-weight:600; cursor:pointer; }
    .iso { position:relative; height:400px; }
    /* Each cube is three parallelograms sharing a corner. */
    .cube { position:absolute; left:50%; width:200px; height:116px; transform:translateX(-50%); }
    .cube i { position:absolute; left:0; width:200px; height:116px; }
    .cube .t { top:0; background:currentColor; clip-path:polygon(50% 0,100% 28%,50% 56%,0 28%); filter:brightness(1.18); }
    .cube .l { top:28px; background:currentColor; clip-path:polygon(0 0,50% 28%,50% 84%,0 56%); filter:brightness(.78); }
    .cube .r { top:28px; background:currentColor; clip-path:polygon(50% 28%,100% 0,100% 56%,50% 84%); filter:brightness(.95); }
    .cube em { position:absolute; left:50%; top:46px; transform:translateX(-50%); font-style:normal;
               font-size:12.5px; font-weight:700; color:#fff; letter-spacing:.6px; z-index:2; }
    .c1 { color:var(--a); top:20px; } .c2 { color:var(--b); top:112px; } .c3 { color:var(--c); top:204px; }
    footer { display:flex; flex-wrap:wrap; gap:10px; padding-top:22px; border-top:1.5px solid #ddd6f5; }
    footer span { padding:7px 15px; border-radius:999px; background:#fff; font-size:13px; }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none}
      main{grid-template-columns:1fr} .iso{height:300px} .cube{width:160px} .cube i{width:160px} }
  `],
})
export class Page44Component {}
