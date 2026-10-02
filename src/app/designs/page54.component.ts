import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 54 — Transit: metro signage, roundel, career plotted as a route line. */
@Component({
  selector: 'app-page54',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header>
        <span class="roundel"><i></i><b>SM</b></span>
        <nav><a>Work</a><a>About</a><a>Contact</a></nav>
      </header>

      <main>
        <h1>Shaik Moheed</h1>
        <p class="sub">SOFTWARE ENGINEER — LINE 1 — CERTINAL</p>

        <div class="line">
          <span class="track" aria-hidden="true"></span>
          <div class="stop"><i class="dot"></i><b>BE — ECE</b><span>Origin</span></div>
          <div class="stop"><i class="dot"></i><b>Front End</b><span>Angular · TypeScript · RxJS</span></div>
          <div class="stop"><i class="dot"></i><b>Back End</b><span>Java · Spring Boot · PostgreSQL</span></div>
          <div class="stop"><i class="dot term"></i><b>Certinal</b><span>Consent &amp; e-signature platforms</span></div>
        </div>
      </main>

      <footer>
        <span class="chip a">Atlas</span><span class="chip b">Consent Manager</span>
        <span class="chip c">Notice Registry</span><span class="chip d">Design System</span>
      </footer>
    </div>
    <app-design-nav [num]="54" designName="Transit signage" />
  `,
  styles: [`
    :host { --red:#e32017; --blue:#0019a8; --green:#00782a; --yellow:#ffd300;
            display:block; background:#fff; color:#0019a8; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 36px 104px; max-width:1100px; margin:0 auto; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .roundel { position:relative; display:grid; place-items:center; width:66px; height:66px; }
    .roundel i { position:absolute; inset:0; border-radius:50%; border:11px solid var(--red); }
    .roundel b { position:relative; z-index:1; width:100%; padding:4px 0; background:var(--blue); color:#fff;
                 text-align:center; font-size:15px; font-weight:700; letter-spacing:1px; }
    nav { display:flex; gap:26px; }
    nav a { font-size:14.5px; cursor:pointer; }
    nav a:hover { color:var(--red); }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; padding:44px 0; }
    h1 { margin:0 0 10px; font-size:clamp(38px,6.4vw,78px); line-height:1; letter-spacing:-2.8px; font-weight:700; }
    .sub { margin:0 0 46px; font-size:12px; font-weight:700; letter-spacing:2.6px; color:var(--red); }
    .line { position:relative; display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
    .track { position:absolute; left:8px; right:8px; top:9px; height:7px; background:var(--blue); border-radius:4px; }
    .stop { position:relative; padding-top:34px; }
    .dot { position:absolute; top:0; left:0; width:25px; height:25px; border-radius:50%;
           background:#fff; border:7px solid var(--blue); }
    .dot.term { border-color:var(--red); }
    .stop b { display:block; font-size:16.5px; font-weight:700; letter-spacing:-0.4px; margin-bottom:4px; }
    .stop span { font-size:12.5px; color:#4a5580; }
    footer { display:flex; flex-wrap:wrap; gap:10px; }
    .chip { padding:9px 18px; border-radius:4px; color:#fff; font-size:13px; font-weight:700; cursor:pointer; }
    .a{background:var(--red)} .b{background:var(--blue)} .c{background:var(--green)}
    .d{background:var(--yellow); color:#0019a8}
    @media (max-width:900px){
      .wrap{padding:22px 18px 104px}
      .line{grid-template-columns:1fr; gap:26px} .track{left:9px; right:auto; top:9px; bottom:9px; width:7px; height:auto}
      .stop{padding-top:0; padding-left:48px} .dot{top:-2px}
    }
  `],
})
export class Page54Component {}
