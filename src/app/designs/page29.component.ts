import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 29 — Magazine cover: coral field, masthead type, cover lines down the side. */
@Component({
  selector: 'app-page29',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header>
        <span class="issue">ISSUE 01 · 2026</span>
        <span class="price">PORTFOLIO</span>
      </header>
      <h1 class="masthead">MOHEED</h1>
      <main>
        <aside class="lines">
          <p class="l"><b>01</b> Atlas — 217 countries, live World Bank data and a WebGL globe</p>
          <p class="l"><b>02</b> Consent Manager — versioned purposes and audit trails</p>
          <p class="l"><b>03</b> Notice Registry — editor, live preview, embeds</p>
          <p class="l"><b>04</b> Design System — tokens and Storybook</p>
        </aside>
        <section class="feature">
          <p class="kick">THE INTERVIEW</p>
          <h2>“I build the parts that have to work.”</h2>
          <p class="body">
            Shaik Moheed, software engineer at Certinal, on consent platforms,
            Angular front ends over Java services, and why tests earn their keep.
          </p>
          <a class="btn">Read on →</a>
        </section>
      </main>
      <footer><span>ANGULAR</span><span>TYPESCRIPT</span><span>JAVA</span><span>SPRING BOOT</span><span>POSTGRESQL</span><span>NODE.JS</span></footer>
    </div>
    <app-design-nav [num]="29" designName="Magazine cover" />
  `,
  styles: [`
    :host { display:block; background:#ff5c39; color:#1b1008; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:20px 30px 104px; }
    header { display:flex; justify-content:space-between; padding-bottom:10px; border-bottom:2px solid #1b1008;
             font-size:11.5px; font-weight:700; letter-spacing:2.2px; }
    .masthead { margin:14px 0 6px; font-size:clamp(62px,15.5vw,230px); line-height:0.78; letter-spacing:-10px;
                font-weight:700; color:#fff8f0; text-align:center; }
    main { flex:1; display:grid; grid-template-columns:1fr 1.25fr; gap:38px; align-items:center; padding:24px 0; }
    .lines .l { margin:0 0 16px; padding-left:34px; position:relative; font-size:14.5px; line-height:1.5; font-weight:500; }
    .lines b { position:absolute; left:0; top:0; font-size:12px; letter-spacing:1.4px; color:#fff8f0; }
    .lines .l:hover { color:#fff8f0; cursor:pointer; }
    .feature { background:#fff8f0; padding:32px 34px; }
    .kick { margin:0 0 12px; font-size:11.5px; font-weight:700; letter-spacing:2.4px; color:#ff5c39; }
    h2 { margin:0 0 16px; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(26px,3.4vw,42px); line-height:1.12; letter-spacing:-1.2px; }
    .body { margin:0 0 24px; font-size:15.5px; line-height:1.62; color:#5c4a3c; }
    .btn { font-size:15px; font-weight:600; cursor:pointer; border-bottom:2px solid #ff5c39; padding-bottom:3px; }
    footer { display:flex; flex-wrap:wrap; gap:16px; justify-content:center; padding-top:12px;
             border-top:2px solid #1b1008; font-size:11px; font-weight:700; letter-spacing:2px; }
    @media (max-width:900px){
      .wrap{padding:18px 16px 104px} main{grid-template-columns:1fr; gap:24px} .feature{padding:24px 20px}
      .masthead{letter-spacing:-5px}
    }
  `],
})
export class Page29Component {}
