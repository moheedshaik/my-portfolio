import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 13 — Peach & plum: warm peach field, plum type, soft rounded panels. */
@Component({
  selector: 'app-page13',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">moheed</span><nav><a>Work</a><a>About</a><a>Resume</a><a class="pill">Contact</a></nav></header>
      <main>
        <div class="hero">
          <h1>Making software<br />feel <em>effortless</em></h1>
          <p>I'm Shaik Moheed — a software engineer working on consent and e-signature platforms at Certinal.</p>
          <div class="row"><a class="btn">See projects</a><a class="link">Download CV ↓</a></div>
        </div>
        <aside class="panel">
          <p class="lab">Currently</p>
          <p class="now">Building Angular front ends over Java services, with a soft spot for clean migrations.</p>
          <div class="bars">
            <div><span>Angular</span><i style="width:92%"></i></div>
            <div><span>TypeScript</span><i style="width:88%"></i></div>
            <div><span>Java</span><i style="width:78%"></i></div>
            <div><span>PostgreSQL</span><i style="width:72%"></i></div>
          </div>
        </aside>
      </main>
    </div>
    <app-design-nav [num]="13" designName="Peach & plum" />
  `,
  styles: [`
    :host { display:block; background:#ffd9c0; color:#3d1a4a; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 34px 104px; max-width:1240px; margin:0 auto; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:23px; font-weight:700; letter-spacing:-0.8px; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.78; }
    nav a:hover { opacity:1; }
    nav .pill { padding:10px 20px; border-radius:999px; background:#3d1a4a; color:#ffd9c0; opacity:1; font-weight:500; }
    main { flex:1; display:grid; grid-template-columns:1.25fr 1fr; gap:38px; align-items:center; padding:48px 0; }
    h1 { margin:0 0 20px; font-size:clamp(38px,5.8vw,74px); line-height:1.04; letter-spacing:-2.8px; font-weight:700; }
    h1 em { font-style:normal; color:#e5484d; }
    .hero p { margin:0 0 32px; max-width:40ch; font-size:17px; line-height:1.6; opacity:.78; }
    .row { display:flex; gap:20px; align-items:center; flex-wrap:wrap; }
    .btn { padding:15px 30px; border-radius:999px; background:#e5484d; color:#fff; font-size:15px; font-weight:600; cursor:pointer; }
    .btn:hover { transform:translateY(-2px); }
    .link { font-size:15px; cursor:pointer; border-bottom:1.5px solid #3d1a4a; padding-bottom:3px; }
    .panel { background:#fff1e6; border-radius:28px; padding:30px; box-shadow:0 24px 50px -24px rgba(61,26,74,.4); }
    .lab { margin:0 0 10px; font-size:11.5px; font-weight:600; letter-spacing:2.2px; text-transform:uppercase; opacity:.5; }
    .now { margin:0 0 26px; font-size:15.5px; line-height:1.6; }
    .bars div { margin-bottom:14px; }
    .bars span { display:block; font-size:13px; margin-bottom:6px; }
    .bars i { display:block; height:8px; border-radius:999px; background:linear-gradient(90deg,#e5484d,#ff9a3c); }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none} main{grid-template-columns:1fr; gap:28px} }
  `],
})
export class Page13Component {}
