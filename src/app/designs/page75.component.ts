import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 75 — Comic strip: sequential panels with gutters and caption boxes. */
@Component({
  selector: 'app-page75',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header>
        <span class="logo">THE DEV</span>
        <span class="issue">ISSUE #01 · 2026</span>
        <nav><a>Work</a><a>About</a><a>Contact</a></nav>
      </header>

      <main class="strip">
        <article class="panel p1">
          <p class="cap">Bengaluru. A Monday.</p>
          <div class="art a1"><span class="big">SM</span></div>
          <p class="say">“Right — consent platform. Let's start with the data model.”</p>
        </article>

        <article class="panel p2">
          <p class="cap">Meanwhile, in the front end…</p>
          <div class="art a2"><span class="burst">TYPED!</span></div>
          <p class="say">Reactive forms. OnPush. Lazy routes. No loose ends.</p>
        </article>

        <article class="panel p3">
          <div class="art a3"><span class="burst green">GREEN!</span></div>
          <p class="say">“Suite's passing. Migration's idempotent.”</p>
        </article>

        <article class="panel p4 wide">
          <p class="cap">And so…</p>
          <div class="art a4">
            <span class="title">SHAIK MOHEED</span>
            <span class="sub">SOFTWARE ENGINEER · ANGULAR &amp; JAVA</span>
          </div>
          <p class="say">To be continued — in your codebase.</p>
        </article>
      </main>

      <footer><span>ATLAS</span><span>CONSENT MANAGER</span><span>NOTICE REGISTRY</span><span>DESIGN SYSTEM</span></footer>
    </div>
    <app-design-nav [num]="75" designName="Comic strip" />
  `,
  styles: [`
    :host { --ink:#111;
            display:block; background:#f5e9c8; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:22px 28px 104px; }
    header { display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:14px;
             padding-bottom:12px; border-bottom:4px solid var(--ink); }
    .logo { font-size:22px; font-weight:700; letter-spacing:2px; }
    .issue { font-size:10.5px; font-weight:700; letter-spacing:2px; }
    nav { display:flex; gap:20px; justify-content:flex-end; }
    nav a { font-size:12.5px; font-weight:600; cursor:pointer; }
    nav a:hover { color:#d62828; }
    .strip { flex:1; display:grid; grid-template-columns:repeat(3,1fr); gap:14px; padding:20px 0; align-content:center; }
    .panel { display:flex; flex-direction:column; gap:8px; background:#fffdf4;
             border:4px solid var(--ink); padding:12px; box-shadow:5px 6px 0 var(--ink); }
    .panel.wide { grid-column:span 3; }
    .cap { margin:0; align-self:flex-start; padding:4px 9px; background:#ffe066; border:2px solid var(--ink);
           font-size:11px; font-weight:700; }
    .art { position:relative; flex:1; min-height:120px; display:grid; place-items:center; border:3px solid var(--ink); }
    .a1 { background:radial-gradient(circle at 50% 40%, #ffd166, #ef8354); }
    .a2 { background:repeating-linear-gradient(45deg,#8ecae6 0 12px,#219ebc 12px 24px); }
    .a3 { background:radial-gradient(circle at 50% 50%, #b7e4c7, #2d6a4f); }
    .a4 { background:linear-gradient(100deg,#d62828,#f77f00 52%,#fcbf49); min-height:140px; gap:7px; }
    .big { font-size:54px; font-weight:700; letter-spacing:-3px; color:#fffdf4;
           -webkit-text-stroke:3px var(--ink); }
    .burst { padding:9px 18px; background:#fff; border:3px solid var(--ink); font-size:20px; font-weight:700;
             letter-spacing:1px; transform:rotate(-7deg); box-shadow:4px 4px 0 var(--ink); }
    .burst.green { color:#2d6a4f; }
    .title { font-size:clamp(24px,4.4vw,46px); font-weight:700; letter-spacing:-1.6px; color:#fffdf4;
             -webkit-text-stroke:2px var(--ink); }
    .sub { font-size:10.5px; font-weight:700; letter-spacing:2.4px; color:#fffdf4; }
    .say { margin:0; padding:8px 10px; background:#fff; border:2px solid var(--ink); border-radius:12px;
           font-size:12.5px; line-height:1.45; }
    footer { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; }
    footer span { padding:10px 6px; text-align:center; background:#fffdf4; border:3px solid var(--ink);
                  font-size:11px; font-weight:700; letter-spacing:1.2px; cursor:pointer; box-shadow:3px 4px 0 var(--ink); }
    footer span:hover { background:#ffe066; }
    @media (max-width:900px){
      .wrap{padding:18px 14px 104px} header{grid-template-columns:1fr auto} nav{display:none}
      .strip{grid-template-columns:1fr} .panel.wide{grid-column:auto} footer{grid-template-columns:1fr 1fr}
    }
  `],
})
export class Page75Component {}
