import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 43 — Neon on white: bright white page, glowing outlined type and rings. */
@Component({
  selector: 'app-page43',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM<b>.</b></span><nav><a>Work</a><a>About</a><a class="pill">Contact</a></nav></header>
      <main>
        <h1 class="neon">MOHEED</h1>
        <p class="role">Software Engineer · Angular &amp; Java</p>
        <p class="bio">Consent and e-signature platforms, built end to end — reactive front ends, layered services, honest tests.</p>
        <div class="row"><a class="btn">View work</a><a class="btn out">Download CV</a></div>
      </main>
      <footer>
        <div class="ring r1"><b>3+</b><span>Years</span></div>
        <div class="ring r2"><b>4</b><span>Projects</span></div>
        <div class="ring r3"><b>6</b><span>Tools</span></div>
        <div class="ring r4"><b>BE</b><span>ECE</span></div>
      </footer>
    </div>
    <app-design-nav [num]="43" designName="Neon on white" />
  `,
  styles: [`
    :host { --pink:#ff2d9e; --cyan:#00d9ff; --lime:#9dff00;
            display:block; background:#fff; color:#111; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 32px 104px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:var(--pink); }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; color:#666; }
    nav a:hover { color:#111; }
    nav .pill { padding:10px 22px; border-radius:999px; background:var(--pink); color:#fff; font-weight:600;
                box-shadow:0 0 22px rgba(255,45,158,.55); }
    main { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:44px 0; }
    .neon {
      margin:0 0 18px; font-size:clamp(50px,11.5vw,164px); line-height:0.86; letter-spacing:-6px; font-weight:700;
      color:transparent; -webkit-text-stroke:3px var(--pink);
      filter:drop-shadow(0 0 10px rgba(255,45,158,.7)) drop-shadow(0 0 30px rgba(0,217,255,.4));
    }
    .role { margin:0 0 18px; font-size:13.5px; letter-spacing:3px; text-transform:uppercase; color:var(--cyan);
            text-shadow:0 0 14px rgba(0,217,255,.6); }
    .bio { margin:0 0 32px; max-width:50ch; font-size:17px; line-height:1.6; color:#555; }
    .row { display:flex; gap:12px; flex-wrap:wrap; justify-content:center; }
    .btn { padding:15px 30px; border-radius:999px; background:#111; color:#fff; font-size:15px; font-weight:600; cursor:pointer; }
    .btn.out { background:#fff; color:#111; border:2px solid var(--cyan); box-shadow:0 0 18px rgba(0,217,255,.45); }
    footer { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
    .ring { display:grid; place-items:center; aspect-ratio:3/1.1; border-radius:999px; border:2px solid; }
    .ring b { font-size:26px; font-weight:700; letter-spacing:-1px; }
    .ring span { font-size:11px; letter-spacing:1.6px; text-transform:uppercase; color:#777; }
    .r1 { border-color:var(--pink); box-shadow:0 0 18px rgba(255,45,158,.35) inset; }
    .r2 { border-color:var(--cyan); box-shadow:0 0 18px rgba(0,217,255,.35) inset; }
    .r3 { border-color:var(--lime); box-shadow:0 0 18px rgba(157,255,0,.35) inset; }
    .r4 { border-color:var(--pink); box-shadow:0 0 18px rgba(255,45,158,.35) inset; }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none}
      footer{grid-template-columns:repeat(2,1fr)} .neon{-webkit-text-stroke:2px var(--pink)} }
  `],
})
export class Page43Component {}
