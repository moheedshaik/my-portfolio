import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 51 — Broadsheet: newspaper front page, rules, columns, drop cap. */
@Component({
  selector: 'app-page51',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header class="masthead">
        <span class="edition">VOL. I — NO. 1</span>
        <h2>THE MOHEED TIMES</h2>
        <span class="edition">BENGALURU · 2026</span>
      </header>
      <div class="rule double"></div>
      <p class="strap">SOFTWARE ENGINEERING · CONSENT PLATFORMS · ANGULAR &amp; JAVA</p>
      <div class="rule"></div>

      <main>
        <article class="lead">
          <h1>Engineer ships consent platform, declines to make a fuss</h1>
          <p class="byline">By a staff reporter · Certinal desk</p>
          <p class="drop">Shaik Moheed builds consent management and e-signature platforms — Angular front ends over layered Java services. Colleagues report the migrations run cleanly and the tests are, remarkably, still green.</p>
          <p>Educated in Electronics &amp; Communication, he moved to the web and stayed. Current interests include reactive forms, bundle budgets and not shipping on a Friday.</p>
        </article>

        <aside class="side">
          <p class="head">IN THIS ISSUE</p>
          <a class="item"><b>Atlas</b><span>217 countries, live World Bank data, WebGL globe</span></a>
          <a class="item"><b>Consent Manager</b><span>Versioned purposes and audit trails</span></a>
          <a class="item"><b>Notice Registry</b><span>Editor with live preview</span></a>
          <a class="item"><b>Design System</b><span>Tokens and Storybook</span></a>
          <p class="head mt">THE STACK</p>
          <p class="stack">Angular · TypeScript · RxJS · Java · Spring Boot · PostgreSQL · Node.js</p>
        </aside>
      </main>

      <div class="rule"></div>
      <footer><span>AVAILABLE FOR WORK</span><span>GITHUB · LINKEDIN · EMAIL</span><span>PRICE: FREE</span></footer>
    </div>
    <app-design-nav [num]="51" designName="Broadsheet" />
  `,
  styles: [`
    :host { display:block; background:#f7f4ec; color:#15130f;
            font-family:Georgia,"Times New Roman",serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:22px 34px 104px; max-width:1180px; margin:0 auto; }
    .masthead { display:flex; justify-content:space-between; align-items:baseline; }
    .edition { font-family:"Space Grotesk",sans-serif; font-size:10.5px; letter-spacing:2px; }
    h2 { margin:0; font-size:clamp(26px,4.4vw,52px); letter-spacing:-1px; font-weight:400; }
    .rule { height:1px; background:#15130f; margin:10px 0; }
    .rule.double { height:4px; border-top:1px solid #15130f; border-bottom:1px solid #15130f; background:none; margin:12px 0 8px; }
    .strap { margin:0; text-align:center; font-family:"Space Grotesk",sans-serif;
             font-size:10.5px; letter-spacing:3px; }
    main { flex:1; display:grid; grid-template-columns:1.7fr 1fr; gap:34px; padding:26px 0; }
    .lead { border-right:1px solid #d6cfc0; padding-right:34px; }
    h1 { margin:0 0 10px; font-size:clamp(30px,4.4vw,54px); line-height:1.06; letter-spacing:-1.4px; font-weight:400; }
    .byline { margin:0 0 20px; font-family:"Space Grotesk",sans-serif; font-size:11.5px;
              letter-spacing:1.4px; text-transform:uppercase; color:#7a7164; }
    .lead p:not(.byline) { margin:0 0 14px; font-size:16px; line-height:1.62; text-align:justify; }
    /* Printer's drop cap. */
    .drop::first-letter { float:left; font-size:62px; line-height:.82; padding:4px 10px 0 0; font-weight:700; }
    .head { margin:0 0 12px; font-family:"Space Grotesk",sans-serif; font-size:10.5px;
            letter-spacing:2.4px; padding-bottom:6px; border-bottom:2px solid #15130f; }
    .head.mt { margin-top:26px; }
    .item { display:block; padding:11px 0; border-bottom:1px solid #d6cfc0; cursor:pointer; }
    .item b { display:block; font-size:16px; margin-bottom:2px; }
    .item span { font-family:"Space Grotesk",sans-serif; font-size:12px; color:#7a7164; }
    .item:hover b { font-style:italic; }
    .stack { margin:0; font-family:"Space Grotesk",sans-serif; font-size:12.5px; line-height:1.8; }
    footer { display:flex; justify-content:space-between; gap:16px; flex-wrap:wrap;
             font-family:"Space Grotesk",sans-serif; font-size:10.5px; letter-spacing:1.8px; }
    @media (max-width:900px){
      .wrap{padding:18px 16px 104px} main{grid-template-columns:1fr; gap:24px}
      .lead{border-right:0; padding-right:0} .masthead{flex-direction:column; align-items:center; gap:4px}
    }
  `],
})
export class Page51Component {}
