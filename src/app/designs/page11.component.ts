import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 11 — Sky & cloud: bright sky blue, soft cloud shapes, friendly type. */
@Component({
  selector: 'app-page11',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <div class="clouds" aria-hidden="true"><i></i><i></i><i></i></div>
      <header><span class="logo">SM<b>.</b></span><nav><a>Work</a><a>About</a><a class="pill">Say hi</a></nav></header>
      <main>
        <span class="tag">☀︎ Available for new work</span>
        <h1>Shaik Moheed</h1>
        <p>Software engineer building consent and e-signature platforms — Angular up front, Java underneath.</p>
        <div class="row"><a class="btn">View work</a><a class="btn out">Download CV</a></div>
      </main>
      <footer>
        <div class="card"><b>Atlas</b><span>Live country data · WebGL globe</span></div>
        <div class="card"><b>Consent Manager</b><span>Purposes · audits · tenants</span></div>
        <div class="card"><b>Notice Registry</b><span>Editor · live preview</span></div>
      </footer>
    </div>
    <app-design-nav [num]="11" designName="Sky & cloud" />
  `,
  styles: [`
    :host { display:block; background:#4cc3ff; color:#06314a; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:26px 30px 104px; overflow:hidden; }
    .clouds { position:absolute; inset:0; pointer-events:none; }
    .clouds i { position:absolute; background:rgba(255,255,255,.55); border-radius:999px; filter:blur(2px); }
    .clouds i:nth-child(1){ width:340px;height:110px; top:14%; left:-60px; }
    .clouds i:nth-child(2){ width:260px;height:88px; top:52%; right:-50px; }
    .clouds i:nth-child(3){ width:190px;height:66px; top:78%; left:22%; }
    header { position:relative; display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; color:#fff; }
    .logo b { color:#ffe066; }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; color:#fff; cursor:pointer; }
    nav .pill { padding:10px 20px; border-radius:999px; background:#fff; color:#06314a; font-weight:600; }
    main { position:relative; flex:1; display:flex; flex-direction:column; justify-content:center; padding:46px 0; }
    .tag { align-self:flex-start; padding:7px 15px; border-radius:999px; background:rgba(255,255,255,.75); font-size:13px; font-weight:500; }
    h1 { margin:22px 0 18px; font-size:clamp(46px,9vw,118px); line-height:0.92; letter-spacing:-4.4px; font-weight:700; color:#fff;
         text-shadow:0 6px 0 rgba(6,49,74,.18); }
    main p { margin:0 0 32px; max-width:44ch; font-size:18px; line-height:1.55; color:#063d5c; font-weight:500; }
    .row { display:flex; gap:12px; flex-wrap:wrap; }
    .btn { padding:15px 30px; border-radius:999px; background:#06314a; color:#fff; font-size:15px; font-weight:600; cursor:pointer; }
    .btn.out { background:#fff; color:#06314a; }
    .btn:hover { transform:translateY(-2px); }
    footer { position:relative; display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
    .card { background:#fff; border-radius:20px; padding:18px 20px; cursor:pointer; box-shadow:0 12px 0 rgba(6,49,74,.14); }
    .card b { display:block; font-size:16px; margin-bottom:4px; }
    .card span { font-size:12.5px; color:#5a7a8c; }
    .card:hover { transform:translateY(3px); box-shadow:0 9px 0 rgba(6,49,74,.14); }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none} footer{grid-template-columns:1fr} }
  `],
})
export class Page11Component {}
