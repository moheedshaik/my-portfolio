import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 73 — Planner: a week spread with the work blocked out in colour. */
@Component({
  selector: 'app-page73',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header>
        <div><p class="kick">Week 40 · 2026</p><h1>Shaik Moheed</h1></div>
        <p class="role">Software Engineer · Certinal</p>
      </header>

      <main>
        <div class="grid">
          <span class="corner"></span>
          @for (d of days; track d) { <span class="day">{{ d }}</span> }

          @for (h of hours; track h) {
            <span class="hour">{{ h }}</span>
            @for (d of days; track d) { <span class="cell"></span> }
          }

          <article class="ev e1"><b>Angular front end</b><span>Reactive forms · OnPush</span></article>
          <article class="ev e2"><b>Spring services</b><span>Controller → service → repo</span></article>
          <article class="ev e3"><b>Migrations</b><span>Flyway, idempotent</span></article>
          <article class="ev e4"><b>Code review</b><span>Before it ships</span></article>
          <article class="ev e5"><b>Atlas</b><span>World Bank data</span></article>
        </div>
      </main>

      <footer><span>Angular</span><span>TypeScript</span><span>Java</span><span>Spring Boot</span><span>PostgreSQL</span></footer>
    </div>
    <app-design-nav [num]="73" designName="Planner" />
  `,
  styles: [`
    :host { --line:#e3e0d8; --ink:#23211c;
            display:block; background:#faf8f3; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 34px 104px; max-width:1220px; margin:0 auto; }
    header { display:flex; justify-content:space-between; align-items:flex-end; gap:20px; flex-wrap:wrap;
             padding-bottom:18px; border-bottom:2px solid var(--ink); }
    .kick { margin:0 0 6px; font-size:11px; font-weight:600; letter-spacing:2.4px; text-transform:uppercase; color:#8f8a7e; }
    h1 { margin:0; font-size:clamp(28px,4.2vw,46px); line-height:1; letter-spacing:-2px; font-weight:700; }
    .role { margin:0; font-size:13px; color:#8f8a7e; }
    main { flex:1; display:grid; align-items:center; padding:26px 0; }
    .grid { position:relative; display:grid; grid-template-columns:54px repeat(5,1fr); gap:1px;
            background:var(--line); border:1px solid var(--line); }
    .corner, .day, .hour, .cell { background:#faf8f3; }
    .day { padding:11px 10px; font-size:12px; font-weight:700; letter-spacing:1.4px; text-transform:uppercase; }
    .hour { padding:10px 8px; font-size:10.5px; color:#9d978a; text-align:right; }
    .cell { min-height:52px; }
    /* Blocked time, positioned over the grid. */
    .ev { position:absolute; border-radius:7px; padding:9px 11px; cursor:pointer; overflow:hidden;
          box-shadow:0 5px 14px -6px rgba(35,33,28,.4); }
    .ev b { display:block; font-size:12.5px; margin-bottom:2px; }
    .ev span { font-size:10.5px; opacity:.72; }
    .e1 { left:calc(54px + 1px); width:calc((100% - 54px) / 5 - 6px); top:calc(42px + 53px); height:106px;
          background:#ffd6a5; }
    .e2 { left:calc(54px + (100% - 54px) / 5 + 3px); width:calc((100% - 54px) / 5 - 6px); top:calc(42px + 106px); height:106px;
          background:#bde0fe; }
    .e3 { left:calc(54px + 2 * (100% - 54px) / 5 + 3px); width:calc((100% - 54px) / 5 - 6px); top:calc(42px + 53px); height:53px;
          background:#caffbf; }
    .e4 { left:calc(54px + 3 * (100% - 54px) / 5 + 3px); width:calc((100% - 54px) / 5 - 6px); top:calc(42px + 159px); height:53px;
          background:#ffc6ff; }
    .e5 { left:calc(54px + 4 * (100% - 54px) / 5 + 3px); width:calc((100% - 54px) / 5 - 6px); top:calc(42px + 106px); height:106px;
          background:#fdffb6; }
    .ev:hover { transform:translateY(-2px); }
    footer { display:flex; flex-wrap:wrap; gap:9px; padding-top:18px; border-top:2px solid var(--ink); }
    footer span { padding:6px 14px; border-radius:999px; background:#efece4; font-size:12.5px; }
    @media (max-width:900px){ .wrap{padding:22px 16px 104px} .ev{display:none} .cell{min-height:40px} }
  `],
})
export class Page73Component {
  readonly days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  readonly hours = ['09', '10', '11', '12', '13'];
}
