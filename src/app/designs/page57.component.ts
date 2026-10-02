import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 57 — Origami: folded paper planes, creased panels, angular shadows. */
@Component({
  selector: 'app-page57',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <div class="folds" aria-hidden="true">
        <span class="p p1"></span><span class="p p2"></span><span class="p p3"></span>
        <span class="p p4"></span><span class="p p5"></span>
      </div>

      <header><span class="logo">SM<b>▲</b></span><nav><a>Work</a><a>About</a><a class="pill">Contact</a></nav></header>

      <main>
        <div class="sheet">
          <p class="kick">Software Engineer · Certinal</p>
          <h1>Folded into<br /><em>something useful</em></h1>
          <p class="bio">I'm Shaik Moheed. I take requirements and fold them into consent and e-signature platforms — Angular front ends over Java services.</p>
          <div class="row"><a class="btn">View work</a><a class="btn out">Download CV</a></div>
        </div>
      </main>

      <footer>
        <div class="card c1"><b>Atlas</b><span>Live country data</span></div>
        <div class="card c2"><b>Consent Manager</b><span>Purposes &amp; audits</span></div>
        <div class="card c3"><b>Notice Registry</b><span>Editor &amp; preview</span></div>
      </footer>
    </div>
    <app-design-nav [num]="57" designName="Origami" />
  `,
  styles: [`
    :host { --ink:#1e2440;
            display:block; background:#eef1f8; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:26px 34px 104px; overflow:hidden; }
    .folds { position:absolute; inset:0; pointer-events:none; }
    /* Paper planes: two triangles each, one shaded like a fold. */
    .p { position:absolute; width:0; height:0; }
    .p1 { border-left:120px solid transparent; border-right:0 solid transparent; border-bottom:200px solid #ffd166;
          top:6%; right:8%; transform:rotate(16deg); opacity:.9; }
    .p2 { border-left:0 solid transparent; border-right:86px solid transparent; border-bottom:200px solid #f6b73c;
          top:6%; right:8%; transform:rotate(16deg); }
    .p3 { border-left:70px solid transparent; border-right:0 solid transparent; border-bottom:118px solid #7aa2ff;
          bottom:16%; right:24%; transform:rotate(-22deg); }
    .p4 { border-left:0 solid transparent; border-right:52px solid transparent; border-bottom:118px solid #5b86f0;
          bottom:16%; right:24%; transform:rotate(-22deg); }
    .p5 { border-left:46px solid transparent; border-right:46px solid transparent; border-bottom:78px solid #ff8fa3;
          top:18%; left:6%; transform:rotate(-12deg); opacity:.85; }
    header { position:relative; display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:#f6b73c; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.72; }
    nav .pill { padding:10px 22px; background:var(--ink); color:#fff; opacity:1; font-weight:600;
                clip-path:polygon(0 0,100% 0,92% 100%,0 100%); }
    main { position:relative; flex:1; display:flex; align-items:center; padding:40px 0; }
    .sheet { background:#fff; padding:42px 46px; max-width:620px;
             clip-path:polygon(0 0, 100% 0, 100% 86%, 92% 100%, 0 100%);
             box-shadow:0 26px 54px -26px rgba(30,36,64,.5); }
    .kick { margin:0 0 16px; font-size:11.5px; font-weight:600; letter-spacing:2.4px; text-transform:uppercase; color:#8a90ab; }
    h1 { margin:0 0 18px; font-size:clamp(34px,5.2vw,62px); line-height:1.04; letter-spacing:-2.4px; font-weight:700; }
    h1 em { font-style:normal; color:#5b86f0; }
    .bio { margin:0 0 28px; max-width:40ch; font-size:16.5px; line-height:1.62; color:#5a607c; }
    .row { display:flex; gap:12px; flex-wrap:wrap; }
    .btn { padding:14px 28px; background:var(--ink); color:#fff; font-size:15px; font-weight:600; cursor:pointer;
           clip-path:polygon(0 0,100% 0,94% 100%,0 100%); }
    .btn.out { background:#eef1f8; color:var(--ink); }
    footer { position:relative; display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
    .card { padding:18px 20px; background:#fff; cursor:pointer;
            clip-path:polygon(0 0,100% 0,100% 72%,94% 100%,0 100%);
            box-shadow:0 14px 28px -16px rgba(30,36,64,.45); }
    .card b { display:block; font-size:16px; margin-bottom:3px; }
    .card span { font-size:12.5px; color:#8a90ab; }
    .c1{border-top:4px solid #ffd166} .c2{border-top:4px solid #7aa2ff} .c3{border-top:4px solid #ff8fa3}
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none}
      .sheet{padding:28px 22px} footer{grid-template-columns:1fr} .p1,.p2{right:-6%} }
  `],
})
export class Page57Component {}
