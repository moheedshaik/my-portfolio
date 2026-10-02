import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 33 — Blob portrait: morphing gradient blob standing in for a photo. */
@Component({
  selector: 'app-page33',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM.</span><nav><a>Work</a><a>About</a><a>Resume</a><a class="pill">Contact</a></nav></header>
      <main>
        <div class="portrait" aria-hidden="true"><span class="blob"></span><span class="initials">SM</span></div>
        <div class="copy">
          <span class="tag">● Available for new work</span>
          <h1>Shaik Moheed</h1>
          <p class="role">Software Engineer · Certinal</p>
          <p class="bio">I build consent and e-signature platforms — Angular front ends over layered Java services, finished with tests that earn their keep.</p>
          <div class="row"><a class="btn">View work</a><a class="btn out">Download CV</a></div>
          <div class="chips"><span>Angular</span><span>TypeScript</span><span>Java</span><span>Spring Boot</span><span>PostgreSQL</span></div>
        </div>
      </main>
    </div>
    <app-design-nav [num]="33" designName="Blob portrait" />
  `,
  styles: [`
    :host { display:block; background:#fef7ff; color:#1d1033; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:28px 36px 104px; max-width:1200px; margin:0 auto; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; color:#6c5f85; cursor:pointer; }
    nav a:hover { color:#1d1033; }
    nav .pill { padding:10px 22px; border-radius:999px; background:#1d1033; color:#fff; }
    main { flex:1; display:grid; grid-template-columns:0.9fr 1.1fr; gap:48px; align-items:center; padding:40px 0; }
    .portrait { position:relative; justify-self:center; display:grid; place-items:center; width:360px; height:360px; }
    .blob { position:absolute; inset:0;
            background:linear-gradient(135deg,#f72585,#b5179e 32%,#7209b7 58%,#4361ee 82%,#4cc9f0);
            border-radius:58% 42% 44% 56% / 48% 54% 46% 52%;
            animation:morph 12s ease-in-out infinite; box-shadow:0 30px 70px -26px rgba(114,9,183,.6); }
    @keyframes morph {
      33% { border-radius:44% 56% 60% 40% / 56% 44% 56% 44%; transform:rotate(8deg) scale(1.03); }
      66% { border-radius:62% 38% 38% 62% / 42% 62% 38% 58%; transform:rotate(-6deg) scale(.98); }
    }
    .initials { position:relative; font-size:72px; font-weight:700; letter-spacing:-3px; color:#fff;
                text-shadow:0 4px 20px rgba(0,0,0,.3); }
    .tag { display:inline-block; padding:7px 15px; border-radius:999px; background:#f3e8ff; color:#7209b7;
           font-size:12.5px; font-weight:600; }
    h1 { margin:18px 0 8px; font-size:clamp(38px,5.6vw,70px); line-height:1; letter-spacing:-2.8px; font-weight:700; }
    .role { margin:0 0 20px; font-size:14px; letter-spacing:2.2px; text-transform:uppercase; color:#9d4edd; }
    .bio { margin:0 0 30px; max-width:46ch; font-size:17px; line-height:1.62; color:#5c5070; }
    .row { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:28px; }
    .btn { padding:14px 28px; border-radius:999px; font-size:15px; font-weight:600; cursor:pointer;
           background:linear-gradient(100deg,#7209b7,#4361ee); color:#fff;
           box-shadow:0 14px 30px -14px rgba(114,9,183,.9); }
    .btn.out { background:#fff; color:#1d1033; border:1.5px solid #e6d9f5; box-shadow:none; }
    .chips { display:flex; flex-wrap:wrap; gap:8px; }
    .chips span { padding:6px 14px; border-radius:999px; background:#fff; border:1px solid #ecdff8;
                  font-size:13px; color:#6c5f85; }
    @media (prefers-reduced-motion:reduce){ .blob{animation:none} }
    @media (max-width:900px){
      .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none}
      main{grid-template-columns:1fr; gap:28px} .portrait{width:230px;height:230px} .initials{font-size:50px}
    }
  `],
})
export class Page33Component {}
