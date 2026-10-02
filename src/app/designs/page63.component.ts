import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 63 — Recipe card: ingredients and method, kitchen-index styling. */
@Component({
  selector: 'app-page63',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <article class="card">
        <header>
          <p class="file">RECIPE № 01 · SOFTWARE</p>
          <h1>Shaik Moheed</h1>
          <p class="sub">A software engineer · serves one team · ready in 3+ years</p>
        </header>

        <div class="meta">
          <div><b>PREP</b><span>BE — ECE</span></div>
          <div><b>COOK</b><span>Certinal</span></div>
          <div><b>YIELD</b><span>4 projects</span></div>
          <div><b>HEAT</b><span>Medium, steady</span></div>
        </div>

        <main>
          <section>
            <p class="h">Ingredients</p>
            <ul>
              <li><i></i>2 cups Angular</li>
              <li><i></i>1 cup TypeScript, sifted</li>
              <li><i></i>3 tbsp RxJS</li>
              <li><i></i>1 cup Java, room temperature</li>
              <li><i></i>2 tsp Spring Boot</li>
              <li><i></i>A generous pour of PostgreSQL</li>
              <li><i></i>Tests, to taste</li>
            </ul>
          </section>
          <section>
            <p class="h">Method</p>
            <ol>
              <li>Gather requirements. Let rest; they will change.</li>
              <li>Fold reactive forms into the front end until smooth.</li>
              <li>Layer services carefully — controller, service, repository.</li>
              <li>Add migrations. Do not skip this step.</li>
              <li>Bake until the suite is green. Ship warm.</li>
            </ol>
          </section>
        </main>

        <footer><span>Atlas</span><span>Consent Manager</span><span>Notice Registry</span><span>Design System</span></footer>
      </article>
    </div>
    <app-design-nav [num]="63" designName="Recipe card" />
  `,
  styles: [`
    :host { --red:#c2362f; --ink:#2e2721;
            display:block; background:#e8ded0; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 22px 104px; }
    .card { margin:auto; width:min(860px,100%); background:#fffdf6; padding:34px 40px 30px;
            border:1px solid #ddd2c0; box-shadow:0 24px 50px -22px rgba(46,39,33,.45);
            /* Ruled index-card lines. */
            background-image:linear-gradient(rgba(46,39,33,.06) 1px, transparent 1px);
            background-size:100% 30px; background-position:0 92px; }
    header { text-align:center; padding-bottom:18px; border-bottom:2px solid var(--red); }
    .file { margin:0 0 10px; font-size:10px; font-weight:700; letter-spacing:3px; color:var(--red); }
    h1 { margin:0 0 8px; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(32px,5vw,56px); line-height:1; letter-spacing:-1.4px; }
    .sub { margin:0; font-size:13px; font-style:italic; color:#7d7366; }
    .meta { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; padding:18px 0;
            border-bottom:1px dashed #d4c8b4; }
    .meta b { display:block; font-size:9.5px; letter-spacing:2px; color:var(--red); margin-bottom:3px; }
    .meta span { font-size:13.5px; font-weight:500; }
    main { display:grid; grid-template-columns:0.9fr 1.1fr; gap:36px; padding:22px 0 24px; }
    .h { margin:0 0 14px; font-family:Georgia,serif; font-size:20px; font-style:italic; color:var(--red); }
    ul, ol { margin:0; padding:0 0 0 2px; list-style:none; counter-reset:step; }
    ul li { position:relative; padding:0 0 11px 24px; font-size:14.5px; line-height:1.5; }
    ul i { position:absolute; left:0; top:6px; width:11px; height:11px; border:1.5px solid var(--red); border-radius:2px; }
    ol li { position:relative; padding:0 0 12px 30px; font-size:14.5px; line-height:1.55; counter-increment:step; }
    ol li::before { content:counter(step); position:absolute; left:0; top:0; width:20px; height:20px;
                    border-radius:50%; background:var(--red); color:#fffdf6; font-size:11px;
                    display:grid; place-items:center; font-weight:700; }
    footer { display:flex; flex-wrap:wrap; gap:8px; justify-content:center; padding-top:16px; border-top:2px solid var(--red); }
    footer span { padding:6px 14px; border-radius:999px; background:#f4ece0; font-size:12.5px; cursor:pointer; }
    footer span:hover { background:var(--red); color:#fffdf6; }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} .card{padding:26px 20px}
      .meta{grid-template-columns:1fr 1fr} main{grid-template-columns:1fr; gap:24px} }
  `],
})
export class Page63Component {}
