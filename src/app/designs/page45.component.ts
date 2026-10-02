import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 45 — Boarding pass: perforated ticket with a tear-off stub. */
@Component({
  selector: 'app-page45',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <main>
        <article class="ticket">
          <section class="main">
            <header><span class="brand">SM AIRWAYS</span><span class="cls">ENGINEERING CLASS</span></header>
            <h1>SHAIK<br />MOHEED</h1>
            <div class="legs">
              <div><b>FROM</b><span>BE — ECE</span></div>
              <div class="arrow">✈</div>
              <div><b>TO</b><span>SOFTWARE ENGINEER</span></div>
            </div>
            <div class="rows">
              <div><b>CARRIER</b><span>Certinal</span></div>
              <div><b>STACK</b><span>Angular · Java</span></div>
              <div><b>GATE</b><span>Bengaluru, IN</span></div>
              <div><b>STATUS</b><span class="ok">● Available</span></div>
            </div>
          </section>
          <section class="stub">
            <span class="code">SM<br />2026</span>
            <div class="bars" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
            <span class="seat">SEAT 01A</span>
          </section>
        </article>
        <nav class="links"><a>Atlas</a><a>Consent Manager</a><a>Notice Registry</a><a>Design System</a></nav>
      </main>
    </div>
    <app-design-nav [num]="45" designName="Boarding pass" />
  `,
  styles: [`
    :host { --orange:#ff6a1f; --ink:#141414;
            display:block; background:#ffeede; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 26px 104px; }
    main { margin:auto; width:min(980px,100%); }
    .ticket { display:grid; grid-template-columns:1fr 210px; background:#fff; border-radius:18px; overflow:hidden;
              box-shadow:0 30px 60px -28px rgba(20,20,20,.5); }
    .main { padding:34px 38px; }
    header { display:flex; justify-content:space-between; align-items:baseline; padding-bottom:18px;
             border-bottom:2px dashed #e4d9cc; }
    .brand { font-size:15px; font-weight:700; letter-spacing:2px; color:var(--orange); }
    .cls { font-size:11px; letter-spacing:2px; color:#9a8f84; }
    h1 { margin:26px 0 28px; font-size:clamp(38px,6vw,76px); line-height:0.9; letter-spacing:-3px; font-weight:700; }
    .legs { display:flex; align-items:center; gap:22px; padding-bottom:24px; border-bottom:2px dashed #e4d9cc; }
    .legs b { display:block; font-size:10.5px; letter-spacing:2px; color:#9a8f84; margin-bottom:5px; }
    .legs span { font-size:15px; font-weight:600; }
    .arrow { font-size:22px; color:var(--orange); }
    .rows { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; padding-top:22px; }
    .rows b { display:block; font-size:10.5px; letter-spacing:2px; color:#9a8f84; margin-bottom:5px; }
    .rows span { font-size:14px; font-weight:500; }
    .ok { color:#1a9c52; }
    .stub { position:relative; background:var(--orange); color:#fff; padding:34px 20px;
            display:flex; flex-direction:column; align-items:center; justify-content:space-between; }
    /* Perforation. */
    .stub::before { content:""; position:absolute; left:0; top:0; bottom:0; width:2px;
                    background:repeating-linear-gradient(180deg,#fff 0 7px,transparent 7px 14px); }
    .code { font-size:24px; font-weight:700; letter-spacing:1px; text-align:center; line-height:1.1; }
    .bars { display:flex; gap:3px; align-items:flex-end; height:76px; }
    .bars i { width:3px; height:100%; background:#fff; }
    .bars i:nth-child(3n){ width:6px; } .bars i:nth-child(4n){ height:70%; } .bars i:nth-child(5n){ width:2px; }
    .seat { font-size:11px; letter-spacing:2.4px; }
    .links { display:flex; flex-wrap:wrap; gap:26px; justify-content:center; margin-top:28px; }
    .links a { font-size:14.5px; cursor:pointer; border-bottom:1.5px solid var(--orange); padding-bottom:3px; }
    .links a:hover { color:var(--orange); }
    @media (max-width:900px){
      .wrap{padding:20px 16px 104px} .ticket{grid-template-columns:1fr} .main{padding:26px 22px}
      .stub{flex-direction:row; padding:20px} .stub::before{left:0;right:0;top:0;bottom:auto;width:auto;height:2px;
        background:repeating-linear-gradient(90deg,#fff 0 7px,transparent 7px 14px)}
      .bars{height:46px} .rows{grid-template-columns:1fr 1fr}
    }
  `],
})
export class Page45Component {}
