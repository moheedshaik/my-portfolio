import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 40 — Light dashboard: white product UI with lime widgets and a sidebar. */
@Component({
  selector: 'app-page40',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <aside class="side">
        <span class="logo">SM<b>.</b></span>
        <nav><a class="on">Overview</a><a>Projects</a><a>Stack</a><a>Resume</a><a>Contact</a></nav>
        <span class="status">● Available</span>
      </aside>

      <main>
        <header><h1>Overview</h1><a class="btn">Download CV</a></header>

        <section class="kpis">
          <div class="k lime"><span>Experience</span><b>3+ yrs</b></div>
          <div class="k"><span>Projects shipped</span><b>4</b></div>
          <div class="k"><span>Core tools</span><b>6</b></div>
          <div class="k"><span>Degree</span><b>BE ECE</b></div>
        </section>

        <section class="grid">
          <article class="panel wide">
            <p class="lab">Profile</p>
            <h2>Shaik Moheed — Software Engineer</h2>
            <p class="body">I build consent and e-signature platforms at Certinal: reactive Angular front ends over layered Java services, with migrations that behave.</p>
            <div class="bars">
              <div><span>Angular</span><i style="width:92%"></i></div>
              <div><span>TypeScript</span><i style="width:88%"></i></div>
              <div><span>Java / Spring</span><i style="width:78%"></i></div>
            </div>
          </article>
          <article class="panel">
            <p class="lab">Recent work</p>
            <a class="row"><b>Atlas</b><span>2026</span></a>
            <a class="row"><b>Consent Manager</b><span>2025</span></a>
            <a class="row"><b>Notice Registry</b><span>2025</span></a>
            <a class="row"><b>Design System</b><span>2024</span></a>
          </article>
        </section>
      </main>
    </div>
    <app-design-nav [num]="40" designName="Light dashboard" />
  `,
  styles: [`
    :host { --lime:#c8f03c; --ink:#14160f; --muted:#767a6b; --line:#e8eade;
            display:block; background:#f6f7f2; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:grid; grid-template-columns:230px 1fr; }
    .side { background:#fff; border-right:1px solid var(--line); padding:26px 22px 104px;
            display:flex; flex-direction:column; gap:30px; }
    .logo { font-size:23px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:#8db600; }
    .side nav { display:flex; flex-direction:column; gap:4px; }
    .side nav a { padding:10px 14px; border-radius:10px; font-size:14.5px; color:var(--muted); cursor:pointer; }
    .side nav a:hover { background:#f3f5ec; color:var(--ink); }
    .side nav .on { background:var(--lime); color:var(--ink); font-weight:600; }
    .status { margin-top:auto; font-size:12.5px; color:#5d8a00; }
    main { padding:26px 32px 104px; }
    main header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; }
    h1 { margin:0; font-size:28px; letter-spacing:-1.2px; font-weight:700; }
    .btn { padding:11px 22px; border-radius:10px; background:var(--ink); color:#fff; font-size:14px; cursor:pointer; }
    .kpis { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-bottom:14px; }
    .k { background:#fff; border:1px solid var(--line); border-radius:16px; padding:18px 20px; }
    .k.lime { background:var(--lime); border-color:#b9e22f; }
    .k span { display:block; font-size:11.5px; letter-spacing:1.2px; text-transform:uppercase; color:var(--muted); margin-bottom:6px; }
    .k.lime span { color:#4f5a2a; }
    .k b { font-size:26px; font-weight:700; letter-spacing:-1px; }
    .grid { display:grid; grid-template-columns:1.5fr 1fr; gap:14px; }
    .panel { background:#fff; border:1px solid var(--line); border-radius:16px; padding:24px 26px; }
    .lab { margin:0 0 12px; font-size:11.5px; letter-spacing:1.4px; text-transform:uppercase; color:var(--muted); }
    h2 { margin:0 0 10px; font-size:19px; letter-spacing:-0.6px; }
    .body { margin:0 0 22px; font-size:14.5px; line-height:1.62; color:var(--muted); }
    .bars div { margin-bottom:12px; }
    .bars span { display:block; font-size:12.5px; margin-bottom:5px; color:var(--muted); }
    .bars i { display:block; height:8px; border-radius:999px; background:var(--lime); }
    .row { display:flex; justify-content:space-between; align-items:baseline; padding:11px 0;
           border-top:1px solid var(--line); cursor:pointer; }
    .row:last-child { border-bottom:1px solid var(--line); }
    .row b { font-size:15px; font-weight:600; }
    .row span { font-size:12.5px; color:var(--muted); }
    .row:hover { background:#f9fbef; padding-left:8px; }
    @media (max-width:900px){
      .wrap{grid-template-columns:1fr} .side{flex-direction:row; align-items:center; padding:16px 18px; gap:16px; border-right:0; border-bottom:1px solid var(--line)}
      .side nav{flex-direction:row; margin-left:auto} .side nav a:nth-child(n+3){display:none} .status{display:none}
      main{padding:22px 18px 104px} .kpis{grid-template-columns:repeat(2,1fr)} .grid{grid-template-columns:1fr}
    }
  `],
})
export class Page40Component {}
