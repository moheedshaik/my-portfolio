import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 49 — Receipt: the CV printed as a till roll, torn edges and all. */
@Component({
  selector: 'app-page49',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <main>
        <article class="receipt">
          <h1>SHAIK MOHEED</h1>
          <p class="sub">SOFTWARE ENGINEER</p>
          <p class="sub">CERTINAL · BENGALURU, IN</p>
          <div class="sep"></div>

          <div class="line"><span>Angular</span><b>EXPERT</b></div>
          <div class="line"><span>TypeScript</span><b>EXPERT</b></div>
          <div class="line"><span>RxJS</span><b>STRONG</b></div>
          <div class="line"><span>Java / Spring Boot</span><b>STRONG</b></div>
          <div class="line"><span>PostgreSQL</span><b>GOOD</b></div>
          <div class="line"><span>Node.js</span><b>GOOD</b></div>
          <div class="sep"></div>

          <div class="line"><span>Atlas</span><b>2026</b></div>
          <div class="line"><span>Consent Manager</span><b>2025</b></div>
          <div class="line"><span>Notice Registry</span><b>2025</b></div>
          <div class="line"><span>Design System</span><b>2024</b></div>
          <div class="sep"></div>

          <div class="line total"><span>EXPERIENCE</span><b>3+ YEARS</b></div>
          <div class="line total"><span>DEGREE</span><b>BE — ECE</b></div>
          <div class="sep"></div>

          <p class="thanks">*** AVAILABLE FOR WORK ***</p>
          <div class="barcode" aria-hidden="true"></div>
          <p class="sub sm">GITHUB · LINKEDIN · EMAIL</p>
        </article>
      </main>
    </div>
    <app-design-nav [num]="49" designName="Receipt" />
  `,
  styles: [`
    :host { --red:#e8392b;
            display:block; background:var(--red); color:#1a1a1a;
            font-family:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace; }
    .wrap { min-height:100vh; display:flex; padding:30px 20px 110px; }
    main { margin:auto; width:min(420px,100%); }
    .receipt { position:relative; background:#fffdf7; padding:34px 30px 30px; box-shadow:0 24px 50px -20px rgba(0,0,0,.55); }
    /* Torn top and bottom edges. */
    .receipt::before, .receipt::after {
      content:""; position:absolute; left:0; right:0; height:10px;
      background:repeating-linear-gradient(135deg,#fffdf7 0 8px,transparent 8px 16px);
    }
    .receipt::before { top:-9px; transform:scaleY(-1); }
    .receipt::after { bottom:-9px; }
    h1 { margin:0 0 8px; font-family:"Space Grotesk",sans-serif; font-size:24px; font-weight:700;
         letter-spacing:1px; text-align:center; }
    .sub { margin:0 0 3px; font-size:10.5px; letter-spacing:1.6px; text-align:center; color:#6a6a6a; }
    .sub.sm { margin-top:12px; font-size:9.5px; }
    .sep { height:1px; margin:16px 0; background:repeating-linear-gradient(90deg,#1a1a1a 0 5px,transparent 5px 10px); }
    .line { display:flex; justify-content:space-between; align-items:baseline; gap:12px; padding:4px 0; font-size:12px; }
    .line span { position:relative; flex:1; overflow:hidden; white-space:nowrap; }
    /* Dot leaders between the label and the value. */
    .line span::after { content:" ......................................................"; color:#c4c0b4; }
    .line b { font-weight:500; color:var(--red); }
    .line.total { font-size:13px; font-weight:700; }
    .line.total b { color:#1a1a1a; }
    .thanks { margin:14px 0 16px; font-size:11px; letter-spacing:1.4px; text-align:center; color:var(--red); }
    .barcode { height:54px; background:repeating-linear-gradient(90deg,
                 #1a1a1a 0 2px, transparent 2px 4px, #1a1a1a 4px 7px, transparent 7px 9px,
                 #1a1a1a 9px 10px, transparent 10px 14px); }
    @media (max-width:900px){ .receipt{padding:28px 20px 24px} }
  `],
})
export class Page49Component {}
