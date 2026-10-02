import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 47 — Type takeover: one enormous word, details tucked into the margins. */
@Component({
  selector: 'app-page47',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <span class="c tl">SHAIK MOHEED</span>
      <span class="c tr">PORTFOLIO — 2026</span>
      <span class="c bl">BENGALURU, IN</span>
      <span class="c br">● AVAILABLE</span>

      <main>
        <h1>BUILD<span class="dot">.</span></h1>
        <p class="sub">Software engineer · consent &amp; e-signature platforms · Angular + Java</p>
      </main>

      <nav class="edge">
        <a>Work</a><a>About</a><a>Resume</a><a>Contact</a>
      </nav>
    </div>
    <app-design-nav [num]="47" designName="Type takeover" />
  `,
  styles: [`
    :host { display:block; background:#1f6fff; color:#fff; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:22px 28px 104px; overflow:hidden; }
    .c { position:absolute; font-size:11px; font-weight:600; letter-spacing:2.2px; opacity:.86; }
    .tl { top:22px; left:28px; } .tr { top:22px; right:28px; }
    .bl { bottom:104px; left:28px; } .br { bottom:104px; right:28px; color:#d4ff00; opacity:1; }
    main { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; }
    h1 { margin:0; font-size:clamp(96px,27vw,420px); line-height:0.74; letter-spacing:-18px; font-weight:700;
         transition:color .25s ease; cursor:default; }
    h1:hover { color:#d4ff00; }
    .dot { color:#d4ff00; }
    h1:hover .dot { color:#fff; }
    .sub { margin:26px 0 0; font-size:13px; letter-spacing:2.6px; text-transform:uppercase; opacity:.84; text-align:center; }
    .edge { position:absolute; right:28px; top:50%; transform:translateY(-50%);
            display:flex; flex-direction:column; gap:14px; align-items:flex-end; }
    .edge a { font-size:13px; letter-spacing:1.4px; cursor:pointer; opacity:.78;
              writing-mode:vertical-rl; }
    .edge a:hover { color:#d4ff00; opacity:1; }
    @media (max-width:900px){
      .wrap{padding:20px 16px 104px} .c{font-size:9.5px; letter-spacing:1.4px}
      .tl,.bl{left:16px} .tr,.br{right:16px} h1{letter-spacing:-9px} .edge{display:none}
    }
  `],
})
export class Page47Component {}
