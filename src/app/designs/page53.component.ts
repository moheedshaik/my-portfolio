import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 53 — Gallery: white walls, hung frames, museum wall labels. */
@Component({
  selector: 'app-page53',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header>
        <span class="logo">MOHEED</span>
        <span class="room">GALLERY 01 · SOFTWARE</span>
        <nav><a>Works</a><a>About</a><a>Visit</a></nav>
      </header>

      <main>
        <section class="plaque">
          <p class="t">Shaik Moheed</p>
          <p class="d"><em>Software Engineer</em>, 2026</p>
          <p class="m">Angular, TypeScript, Java, PostgreSQL</p>
          <p class="b">Consent and e-signature platforms, built at Certinal. The artist works primarily in reactive front ends over layered services, and is interested in what happens after the demo.</p>
        </section>

        <section class="wall">
          <figure class="f f1"><div class="art a1"></div><figcaption><b>Atlas</b><span>Live data · 2026</span></figcaption></figure>
          <figure class="f f2"><div class="art a2"></div><figcaption><b>Consent Manager</b><span>Platform · 2025</span></figcaption></figure>
          <figure class="f f3"><div class="art a3"></div><figcaption><b>Notice Registry</b><span>Tooling · 2025</span></figcaption></figure>
          <figure class="f f4"><div class="art a4"></div><figcaption><b>Design System</b><span>Library · 2024</span></figcaption></figure>
        </section>
      </main>

      <footer><span>OPEN FOR COMMISSIONS</span><span>BENGALURU, IN</span></footer>
    </div>
    <app-design-nav [num]="53" designName="Gallery" />
  `,
  styles: [`
    :host { display:block; background:#f0efec; color:#1c1c1a; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:24px 40px 104px; max-width:1240px; margin:0 auto; }
    header { display:grid; grid-template-columns:1fr auto 1fr; align-items:center; padding-bottom:16px;
             border-bottom:1px solid #d8d6d1; }
    .logo { font-size:15px; font-weight:700; letter-spacing:3.4px; }
    .room { font-size:10.5px; letter-spacing:2.4px; color:#8a8781; }
    nav { display:flex; gap:24px; justify-content:flex-end; }
    nav a { font-size:13px; cursor:pointer; color:#6d6a64; }
    nav a:hover { color:#1c1c1a; }
    main { flex:1; display:grid; grid-template-columns:270px 1fr; gap:48px; align-items:center; padding:46px 0; }
    /* Museum wall label. */
    .plaque { background:#fff; padding:22px 24px; border:1px solid #e2e0db; }
    .t { margin:0 0 4px; font-size:17px; font-weight:600; }
    .d { margin:0 0 10px; font-size:14px; color:#4a4843; }
    .d em { font-style:italic; }
    .m { margin:0 0 16px; font-size:12px; letter-spacing:.4px; color:#8a8781; }
    .b { margin:0; font-size:13px; line-height:1.68; color:#5a5853; }
    .wall { display:grid; grid-template-columns:repeat(4,1fr); gap:26px; align-items:end; }
    .f { margin:0; }
    .art { border:14px solid #fff; outline:1px solid #ddd; box-shadow:0 18px 36px -18px rgba(0,0,0,.4); }
    .a1 { aspect-ratio:3/4; background:linear-gradient(160deg,#2f6fed,#6fb1ff); }
    .a2 { aspect-ratio:1; background:linear-gradient(160deg,#e8552f,#ffab6b); }
    .a3 { aspect-ratio:4/5; background:linear-gradient(160deg,#1f9d6b,#8be0b4); }
    .a4 { aspect-ratio:1/1.2; background:linear-gradient(160deg,#6b3fc4,#c4a0ff); }
    figcaption { padding-top:10px; }
    figcaption b { display:block; font-size:13.5px; font-weight:600; }
    figcaption span { font-size:11.5px; color:#8a8781; }
    .f:hover .art { transform:translateY(-5px); }
    footer { display:flex; justify-content:space-between; gap:16px; padding-top:16px; border-top:1px solid #d8d6d1;
             font-size:10.5px; letter-spacing:2.2px; color:#8a8781; }
    @media (max-width:900px){
      .wrap{padding:20px 18px 104px} header{grid-template-columns:1fr auto} .room{display:none}
      main{grid-template-columns:1fr; gap:28px} .wall{grid-template-columns:1fr 1fr; gap:18px}
    }
  `],
})
export class Page53Component {}
