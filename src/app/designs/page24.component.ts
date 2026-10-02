import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 24 — Chartreuse ledger: data-table layout, everything as rows. */
@Component({
  selector: 'app-page24',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">shaik_moheed</span><span class="st">● open to work</span></header>
      <main>
        <h1>SOFTWARE ENGINEER</h1>
        <table>
          <tbody>
            <tr><th>NAME</th><td>Shaik Moheed</td></tr>
            <tr><th>ROLE</th><td>Software Engineer, Certinal</td></tr>
            <tr><th>BASED</th><td>Bengaluru, India</td></tr>
            <tr><th>DEGREE</th><td>BE — Electronics &amp; Communication</td></tr>
            <tr><th>FOCUS</th><td>Consent management &amp; e-signature platforms</td></tr>
            <tr><th>STACK</th><td>Angular · TypeScript · RxJS · Java · Spring Boot · PostgreSQL · Node.js</td></tr>
            <tr><th>WORK</th><td>Atlas · Consent Manager · Notice Registry · Design System</td></tr>
            <tr><th>CONTACT</th><td class="lk">github / linkedin / email</td></tr>
          </tbody>
        </table>
      </main>
      <footer><span>LAST UPDATED 2026</span><span>v1.0.0</span></footer>
    </div>
    <app-design-nav [num]="24" designName="Chartreuse ledger" />
  `,
  styles: [`
    :host { display:block; background:#e4ff1a; color:#101010;
            font-family:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:22px 30px 104px; max-width:1100px; margin:0 auto; }
    header { display:flex; justify-content:space-between; align-items:center; padding-bottom:12px; border-bottom:2px solid #101010; }
    .logo { font-size:14px; font-weight:500; letter-spacing:.6px; }
    .st { font-size:12px; }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; padding:40px 0; }
    h1 { margin:0 0 34px; font-size:clamp(28px,5.4vw,66px); line-height:1; letter-spacing:-2px; font-weight:500;
         font-family:"Space Grotesk",sans-serif; font-weight:700; }
    table { width:100%; border-collapse:collapse; }
    tr { border-top:1.5px solid rgba(16,16,16,.3); }
    tr:last-child { border-bottom:1.5px solid rgba(16,16,16,.3); }
    th { width:140px; padding:13px 0; text-align:left; font-size:11.5px; font-weight:500; letter-spacing:1.6px; opacity:.6; vertical-align:top; }
    td { padding:13px 0; font-size:14.5px; line-height:1.5; }
    tr:hover { background:#101010; color:#e4ff1a; }
    tr:hover th { opacity:.7; padding-left:10px; }
    .lk { text-decoration:underline; cursor:pointer; }
    footer { display:flex; justify-content:space-between; padding-top:12px; border-top:2px solid #101010; font-size:11.5px; }
    @media (max-width:900px){ .wrap{padding:20px 16px 104px} th{width:92px; font-size:10.5px} td{font-size:13px} }
  `],
})
export class Page24Component {}
