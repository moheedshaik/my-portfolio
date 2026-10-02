import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 22 — Arctic: icy blue field, navy type, frosted glass column. */
@Component({
  selector: 'app-page22',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <div class="shards" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
      <header><span class="logo">SM<b>△</b></span><nav><a>Work</a><a>About</a><a>Resume</a><a class="pill">Contact</a></nav></header>
      <main>
        <section class="copy">
          <span class="tag">Software Engineer · Certinal</span>
          <h1>Clear code,<br /><em>cold precision</em></h1>
          <p>I'm Shaik Moheed. I build consent and e-signature platforms — Angular on the front, Java and PostgreSQL behind it.</p>
          <div class="row"><a class="btn">View work</a><a class="btn out">Download CV</a></div>
        </section>
        <aside class="glass">
          <p class="lab">Index</p>
          <a class="row2"><b>Atlas</b><span>2026</span></a>
          <a class="row2"><b>Consent Manager</b><span>2025</span></a>
          <a class="row2"><b>Notice Registry</b><span>2025</span></a>
          <a class="row2"><b>Design System</b><span>2024</span></a>
          <p class="lab mt">Stack</p>
          <p class="stack">Angular · TypeScript · RxJS · Java · Spring Boot · PostgreSQL</p>
        </aside>
      </main>
    </div>
    <app-design-nav [num]="22" designName="Arctic" />
  `,
  styles: [`
    :host { display:block; background:#cfeaff; color:#0b2545; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:26px 32px 104px; overflow:hidden; }
    .shards { position:absolute; inset:0; pointer-events:none; }
    .shards i { position:absolute; background:rgba(255,255,255,.55); }
    .shards i:nth-child(1){ width:300px;height:300px; top:-80px; left:-60px; clip-path:polygon(0 0,100% 20%,60% 100%); }
    .shards i:nth-child(2){ width:220px;height:220px; bottom:-40px; right:14%; clip-path:polygon(50% 0,100% 80%,0 100%); }
    .shards i:nth-child(3){ width:160px;height:160px; top:28%; right:-40px; clip-path:polygon(0 30%,100% 0,80% 100%); }
    .shards i:nth-child(4){ width:120px;height:120px; bottom:22%; left:8%; clip-path:polygon(0 0,100% 40%,30% 100%); }
    header { position:relative; display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:23px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:#2d9cdb; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.76; }
    nav .pill { padding:10px 20px; border-radius:999px; background:#0b2545; color:#cfeaff; opacity:1; font-weight:500; }
    main { position:relative; flex:1; display:grid; grid-template-columns:1.25fr 1fr; gap:34px; align-items:center; padding:46px 0; }
    .tag { display:inline-block; padding:7px 15px; border-radius:999px; background:#fff; font-size:12.5px; font-weight:600; }
    h1 { margin:20px 0 18px; font-size:clamp(38px,5.8vw,74px); line-height:1.02; letter-spacing:-2.8px; font-weight:700; }
    h1 em { font-style:normal; color:#2d9cdb; }
    .copy p { margin:0 0 30px; max-width:40ch; font-size:17px; line-height:1.6; opacity:.76; }
    .row { display:flex; gap:12px; flex-wrap:wrap; }
    .btn { padding:14px 28px; border-radius:999px; background:#0b2545; color:#fff; font-size:15px; font-weight:600; cursor:pointer; }
    .btn.out { background:rgba(255,255,255,.72); color:#0b2545; }
    .glass { background:rgba(255,255,255,.52); backdrop-filter:blur(16px); border:1px solid rgba(255,255,255,.9);
             border-radius:24px; padding:28px 30px; box-shadow:0 22px 50px -24px rgba(11,37,69,.45); }
    .lab { margin:0 0 14px; font-size:11.5px; font-weight:600; letter-spacing:2.2px; text-transform:uppercase; opacity:.5; }
    .lab.mt { margin-top:26px; }
    .row2 { display:flex; justify-content:space-between; align-items:baseline; padding:12px 0;
            border-top:1px solid rgba(11,37,69,.14); cursor:pointer; }
    .row2:last-of-type { border-bottom:1px solid rgba(11,37,69,.14); }
    .row2 b { font-size:16.5px; font-weight:600; }
    .row2 span { font-size:12.5px; opacity:.55; }
    .row2:hover b { color:#2d9cdb; }
    .stack { margin:0; font-size:14.5px; line-height:1.7; opacity:.72; }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none} main{grid-template-columns:1fr; gap:24px} }
  `],
})
export class Page22Component {}
