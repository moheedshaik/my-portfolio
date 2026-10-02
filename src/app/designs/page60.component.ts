import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 60 — Travel poster: flat mid-century landscape, "VISIT" lockup. */
@Component({
  selector: 'app-page60',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <article class="poster">
        <div class="scene" aria-hidden="true">
          <span class="sun"></span>
          <span class="hill h1"></span><span class="hill h2"></span><span class="hill h3"></span>
          <span class="bird b1">✦</span><span class="bird b2">✦</span>
        </div>

        <div class="plate">
          <p class="visit">VISIT</p>
          <h1>MOHEED</h1>
          <p class="tag">SOFTWARE ENGINEERING · ANGULAR &amp; JAVA · EST. BENGALURU</p>
        </div>

        <footer>
          <span>ATLAS</span><span>CONSENT MANAGER</span><span>NOTICE REGISTRY</span><span>DESIGN SYSTEM</span>
        </footer>
      </article>
    </div>
    <app-design-nav [num]="60" designName="Travel poster" />
  `,
  styles: [`
    :host { --cream:#f6ead3; --ink:#2a1a12;
            display:block; background:#d9c7a8; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:24px 24px 104px; }
    .poster { margin:auto; width:min(760px,100%); background:var(--cream); border:10px solid var(--ink);
              display:flex; flex-direction:column; box-shadow:0 30px 60px -26px rgba(0,0,0,.6); overflow:hidden; }
    .scene { position:relative; height:clamp(230px,34vh,330px); overflow:hidden; background:#f2a65a; }
    .sun { position:absolute; left:50%; top:16%; transform:translateX(-50%); width:150px; height:150px;
           border-radius:50%; background:#ffd98c; }
    .hill { position:absolute; left:-20%; right:-20%; border-radius:50% 50% 0 0; }
    .h1 { height:62%; bottom:0; background:#e2683c; }
    .h2 { height:44%; bottom:0; left:-46%; right:36%; background:#b2402a; }
    .h3 { height:30%; bottom:0; left:34%; right:-40%; background:#7d2b22; }
    .bird { position:absolute; color:var(--cream); font-size:13px; }
    .b1 { top:18%; left:22%; } .b2 { top:26%; right:26%; }
    .plate { padding:26px 30px 22px; text-align:center; border-bottom:4px double var(--ink); }
    .visit { margin:0 0 4px; font-size:13px; font-weight:700; letter-spacing:7px; }
    h1 { margin:0 0 10px; font-size:clamp(42px,8.6vw,96px); line-height:0.9; letter-spacing:-3px; font-weight:700; }
    .tag { margin:0; font-size:10.5px; font-weight:600; letter-spacing:2.4px; color:#6b5142; }
    footer { display:grid; grid-template-columns:repeat(4,1fr); }
    footer span { padding:13px 6px; text-align:center; font-size:10px; font-weight:700; letter-spacing:1.4px;
                  border-right:1px solid rgba(42,26,18,.2); cursor:pointer; }
    footer span:last-child { border-right:0; }
    footer span:hover { background:var(--ink); color:var(--cream); }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} .poster{border-width:7px}
      .plate{padding:20px 16px} footer{grid-template-columns:1fr 1fr}
      footer span:nth-child(2){border-right:0} }
  `],
})
export class Page60Component {}
