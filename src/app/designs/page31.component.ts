import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 31 — Gradient outline: clean white page, rainbow-bordered cards. */
@Component({
  selector: 'app-page31',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM<b>.</b></span><nav><a>Work</a><a>About</a><a>Resume</a><a class="pill">Contact</a></nav></header>
      <main>
        <h1>Shaik <span class="grad">Moheed</span></h1>
        <p>Software engineer building consent and e-signature platforms — Angular front ends over Java services.</p>
        <div class="row"><a class="btn">View work</a><a class="btn out">Download CV</a></div>
      </main>
      <section class="cards">
        <article class="g"><div><b>Atlas</b><p>217 countries, live World Bank data, WebGL globe.</p></div></article>
        <article class="g"><div><b>Consent Manager</b><p>Versioned purposes, audit trails, tenants.</p></div></article>
        <article class="g"><div><b>Notice Registry</b><p>Editor, live preview, embeddable snippets.</p></div></article>
        <article class="g"><div><b>Design System</b><p>Tokens, theming, Storybook docs.</p></div></article>
      </section>
    </div>
    <app-design-nav [num]="31" designName="Gradient outline" />
  `,
  styles: [`
    :host { --g1:#ff3d81; --g2:#ff9a3c; --g3:#3ddc97; --g4:#3b82f6; --g5:#a855f7;
            display:block; background:#fff; color:#0f0f14; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:28px 36px 104px; max-width:1200px; margin:0 auto; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    .logo b { background:linear-gradient(100deg,var(--g1),var(--g5)); -webkit-background-clip:text; background-clip:text; color:transparent; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; color:#6a6a76; cursor:pointer; }
    nav a:hover { color:#0f0f14; }
    nav .pill { padding:10px 22px; border-radius:999px; color:#fff;
                background:linear-gradient(100deg,var(--g1),var(--g5)); }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; text-align:center; padding:54px 0 44px; }
    h1 { margin:0 0 20px; font-size:clamp(42px,7vw,92px); line-height:1; letter-spacing:-3.6px; font-weight:700; }
    .grad { background:linear-gradient(100deg,var(--g1),var(--g2) 28%,var(--g3) 54%,var(--g4) 78%,var(--g5));
            -webkit-background-clip:text; background-clip:text; color:transparent; }
    main p { margin:0 auto 32px; max-width:52ch; font-size:17.5px; line-height:1.6; color:#5e5e6b; }
    .row { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
    .btn { padding:15px 30px; border-radius:999px; background:#0f0f14; color:#fff; font-size:15px; font-weight:500; cursor:pointer; }
    .btn.out { background:#f3f3f6; color:#0f0f14; }
    .cards { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
    /* Gradient border via a padded background with an inset white fill. */
    .g { border-radius:20px; padding:2px; background:linear-gradient(140deg,var(--g1),var(--g2),var(--g3),var(--g4),var(--g5)); cursor:pointer; }
    .g > div { height:100%; border-radius:18px; background:#fff; padding:22px; }
    .g b { display:block; font-size:17px; margin-bottom:7px; }
    .g p { margin:0; font-size:13.5px; line-height:1.55; color:#6a6a76; }
    .g:hover { transform:translateY(-4px); }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none} .cards{grid-template-columns:1fr 1fr} }
  `],
})
export class Page31Component {}
