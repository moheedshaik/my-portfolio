import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 07 — Tangerine editorial: cream page, huge serif, tangerine accent. */
@Component({
  selector: 'app-page7',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">Moheed</span><nav><a>Work</a><a>About</a><a>Journal</a><a>Contact</a></nav></header>
      <main>
        <p class="kick">Software Engineer · Certinal</p>
        <h1>I build the <em>quiet</em> parts of the web that have to work.</h1>
        <div class="meta">
          <p>Consent management and e-signature platforms — Angular front ends over Java services, with tests that actually run.</p>
          <a class="cta">Selected work →</a>
        </div>
      </main>
      <section class="strip">
        <div><b>Atlas</b><span>2026</span></div>
        <div><b>Consent Manager</b><span>2025</span></div>
        <div><b>Notice Registry</b><span>2025</span></div>
        <div><b>Design System</b><span>2024</span></div>
      </section>
    </div>
    <app-design-nav [num]="7" designName="Tangerine editorial" />
  `,
  styles: [`
    :host { display:block; background:#fff4e8; color:#231a12; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 40px 104px; max-width:1240px; margin:0 auto; }
    header { display:flex; justify-content:space-between; align-items:center; padding-bottom:18px; border-bottom:1.5px solid #e2d3c2; }
    .logo { font-family:Georgia,"Times New Roman",serif; font-size:24px; font-style:italic; }
    nav { display:flex; gap:26px; }
    nav a { font-size:14px; cursor:pointer; color:#6b5a48; }
    nav a:hover { color:#ff6a00; }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; padding:56px 0; }
    .kick { margin:0 0 24px; font-size:12px; font-weight:600; letter-spacing:2.4px; text-transform:uppercase; color:#ff6a00; }
    h1 { margin:0 0 40px; max-width:17ch; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(38px,6.6vw,88px); line-height:1.03; letter-spacing:-2.4px; }
    h1 em { font-style:italic; color:#ff6a00; }
    .meta { display:flex; justify-content:space-between; align-items:flex-end; gap:40px; flex-wrap:wrap; }
    .meta p { margin:0; max-width:42ch; font-size:16.5px; line-height:1.62; color:#6b5a48; }
    .cta { font-size:16px; color:#231a12; cursor:pointer; border-bottom:1.5px solid #ff6a00; padding-bottom:4px; white-space:nowrap; }
    .cta:hover { color:#ff6a00; }
    .strip { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:#e2d3c2; border:1px solid #e2d3c2; }
    .strip div { background:#fff4e8; padding:20px 18px; cursor:pointer; }
    .strip b { display:block; font-size:16px; font-weight:600; letter-spacing:-0.4px; margin-bottom:4px; }
    .strip span { font-size:12.5px; color:#8a7865; }
    .strip div:hover { background:#ff6a00; color:#fff; }
    .strip div:hover span { color:rgba(255,255,255,.8); }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav{gap:16px} .strip{grid-template-columns:repeat(2,1fr)} }
  `],
})
export class Page7Component {}
