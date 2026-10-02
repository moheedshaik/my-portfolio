import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 20 — Candy stripe: diagonal pink/cream stripes behind a clean white slab. */
@Component({
  selector: 'app-page20',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM.</span><nav><a>Work</a><a>About</a><a class="pill">Contact</a></nav></header>
      <main>
        <section class="slab">
          <span class="tag">Software Engineer · Certinal</span>
          <h1>Shaik Moheed</h1>
          <p>I build consent and e-signature platforms — Angular front ends over Java services, finished and tested.</p>
          <div class="row"><a class="btn">View work</a><a class="btn out">Download CV</a></div>
          <div class="chips">
            <span>Angular</span><span>TypeScript</span><span>Java</span>
            <span>Spring Boot</span><span>PostgreSQL</span><span>Node.js</span>
          </div>
        </section>
      </main>
    </div>
    <app-design-nav [num]="20" designName="Candy stripe" />
  `,
  styles: [`
    :host { display:block; color:#2b0b1e; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap {
      min-height:100vh; display:flex; flex-direction:column; padding:26px 30px 104px;
      background:repeating-linear-gradient(135deg,#ff4d9d 0 46px,#ffd3e4 46px 92px);
    }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; color:#fff; text-shadow:0 2px 6px rgba(43,11,30,.35); }
    nav { display:flex; gap:22px; align-items:center; }
    nav a { font-size:14.5px; color:#fff; cursor:pointer; text-shadow:0 2px 6px rgba(43,11,30,.35); }
    nav .pill { padding:10px 20px; border-radius:999px; background:#fff; color:#2b0b1e; font-weight:600; text-shadow:none; }
    main { flex:1; display:grid; place-items:center; padding:40px 0; }
    .slab { width:min(780px,100%); background:#fff; border-radius:28px; padding:48px 52px; text-align:center;
            box-shadow:0 34px 70px -28px rgba(43,11,30,.6); }
    .tag { display:inline-block; padding:7px 16px; border-radius:999px; background:#ffe3ef; color:#c2185b;
           font-size:12.5px; font-weight:600; }
    h1 { margin:20px 0 16px; font-size:clamp(40px,6vw,72px); line-height:1; letter-spacing:-3px; font-weight:700; }
    .slab p { margin:0 auto 30px; max-width:46ch; font-size:16.5px; line-height:1.6; color:#6b5460; }
    .row { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin-bottom:30px; }
    .btn { padding:14px 28px; border-radius:999px; background:#ff4d9d; color:#fff; font-size:15px; font-weight:600; cursor:pointer; }
    .btn.out { background:#fff; color:#2b0b1e; border:2px solid #ffd3e4; }
    .btn:hover { transform:translateY(-2px); }
    .chips { display:flex; flex-wrap:wrap; gap:8px; justify-content:center; padding-top:24px; border-top:1.5px solid #f4e6ec; }
    .chips span { padding:6px 14px; border-radius:999px; background:#fdf2f6; font-size:13px; color:#6b5460; }
    @media (max-width:900px){ .wrap{padding:22px 16px 104px} nav a:not(.pill){display:none} .slab{padding:32px 22px} }
  `],
})
export class Page20Component {}
