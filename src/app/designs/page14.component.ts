import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 14 — Red signal: bright red field, white Helvetica, strict swiss grid. */
@Component({
  selector: 'app-page14',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header>
        <span class="logo">Shaik Moheed</span>
        <span>Software Engineer</span>
        <span>Bengaluru, IN</span>
        <span>2026</span>
      </header>
      <main>
        <h1>Design.<br />Build.<br />Ship.</h1>
        <div class="col">
          <p class="lab">Profile</p>
          <p>Software engineer at Certinal building consent management and e-signature platforms with Angular and Java.</p>
        </div>
        <div class="col">
          <p class="lab">Index</p>
          <a class="row"><span>01</span>Atlas</a>
          <a class="row"><span>02</span>Consent Manager</a>
          <a class="row"><span>03</span>Notice Registry</a>
          <a class="row"><span>04</span>Design System</a>
        </div>
      </main>
      <footer>
        <span>Angular · TypeScript · RxJS · Java · Spring Boot · PostgreSQL · Node.js</span>
        <span>GitHub / LinkedIn / Email</span>
      </footer>
    </div>
    <app-design-nav [num]="14" designName="Red signal" />
  `,
  styles: [`
    :host { display:block; background:#ff2d20; color:#fff; font-family:"Helvetica Neue",Helvetica,Arial,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:20px 28px 104px; }
    header { display:grid; grid-template-columns:2fr 1fr 1fr 0.5fr; gap:16px; align-items:baseline;
             padding-bottom:12px; border-bottom:1.5px solid #fff; font-size:12px; letter-spacing:.4px; }
    .logo { font-size:15px; font-weight:700; }
    main { flex:1; display:grid; grid-template-columns:1.5fr 1fr 1fr; gap:38px; align-items:end; padding:52px 0 36px; }
    h1 { margin:0; font-size:clamp(54px,10vw,142px); line-height:0.84; letter-spacing:-6px; font-weight:700; }
    .lab { margin:0 0 14px; font-size:11px; letter-spacing:1.8px; text-transform:uppercase; opacity:.7; }
    .col p:not(.lab) { margin:0; font-size:15px; line-height:1.55; }
    .row { display:grid; grid-template-columns:34px 1fr; padding:11px 0; border-top:1px solid rgba(255,255,255,.4);
           font-size:15px; cursor:pointer; }
    .row:last-child { border-bottom:1px solid rgba(255,255,255,.4); }
    .row span { opacity:.65; }
    .row:hover { background:#fff; color:#ff2d20; padding-left:10px; }
    footer { display:flex; justify-content:space-between; gap:20px; flex-wrap:wrap; padding-top:12px;
             border-top:1.5px solid #fff; font-size:12px; letter-spacing:.3px; }
    @media (max-width:900px){
      .wrap{padding:18px 16px 104px} header{grid-template-columns:1fr 1fr} header span:nth-child(4){display:none}
      main{grid-template-columns:1fr; align-items:start; gap:28px}
    }
  `],
})
export class Page14Component {}
