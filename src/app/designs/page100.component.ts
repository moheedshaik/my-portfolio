import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignNavComponent } from './design-nav.component';
import { DESIGNS } from './designs.catalog';

/**
 * 100 — Index: the contact sheet for the whole set. Every design is one
 * swatch, linked, so the collection can be scanned and picked from here
 * rather than clicked through one page at a time.
 */
@Component({
  selector: 'app-page100',
  standalone: true,
  imports: [RouterLink, DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header>
        <div>
          <p class="kick">One hundred designs · one portfolio</p>
          <h1>The index</h1>
        </div>
        <p class="note">Every page, as a swatch. Click any number to open it.</p>
      </header>

      <main>
        @for (d of designs; track d.n) {
          <a class="cell" [routerLink]="'/page' + d.n" [style.--a]="d.a" [style.--b]="d.b">
            <span class="sw" aria-hidden="true"></span>
            <span class="meta"><b>{{ d.n < 10 ? '0' + d.n : d.n }}</b><em>{{ d.name }}</em></span>
          </a>
        }
      </main>

      <footer>
        <span>Shaik Moheed · Software Engineer · Certinal</span>
        <span>100 / 100</span>
      </footer>
    </div>
    <app-design-nav [num]="100" designName="The index" />
  `,
  styles: [`
    :host { display:block; background:#0e0e12; color:#f0eff4; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:28px 30px 110px; }
    header { display:flex; justify-content:space-between; align-items:flex-end; gap:22px; flex-wrap:wrap;
             padding-bottom:20px; border-bottom:1px solid #26262e; }
    .kick { margin:0 0 8px; font-size:11px; font-weight:600; letter-spacing:2.6px; text-transform:uppercase; color:#7dd3fc; }
    h1 { margin:0; font-size:clamp(32px,5vw,58px); line-height:1; letter-spacing:-2.4px; font-weight:700; }
    .note { margin:0; font-size:13px; color:#8a8a99; }
    main { flex:1; display:grid; grid-template-columns:repeat(10,1fr); gap:10px; padding:26px 0; align-content:start; }
    .cell { display:grid; gap:6px; text-decoration:none; color:inherit; }
    .sw { display:block; aspect-ratio:1; border-radius:7px;
          background:linear-gradient(145deg, var(--a), var(--b));
          box-shadow:inset 0 0 0 1px rgba(255,255,255,.1); transition:transform .18s ease; }
    .meta { display:grid; gap:1px; }
    .meta b { font-size:10.5px; font-weight:700; letter-spacing:.6px; }
    .meta em { font-style:normal; font-size:8.5px; line-height:1.25; color:#8a8a99;
               overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .cell:hover .sw { transform:translateY(-4px) scale(1.04); }
    .cell:hover .meta em { color:#f0eff4; }
    footer { display:flex; justify-content:space-between; gap:16px; flex-wrap:wrap; padding-top:18px;
             border-top:1px solid #26262e; font-size:12px; color:#8a8a99; }
    @media (max-width:1100px){ main{grid-template-columns:repeat(6,1fr)} }
    @media (max-width:700px){ .wrap{padding:22px 16px 110px} main{grid-template-columns:repeat(4,1fr)}
      .meta em{display:none} }
  `],
})
export class Page100Component {
  /** Shared with the jump menu, so the two can never disagree. */
  readonly designs = DESIGNS;
}
