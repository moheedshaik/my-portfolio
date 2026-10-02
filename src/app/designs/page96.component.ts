import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 96 — Scratchcard: foil panels that rub away to reveal the stack. */
@Component({
  selector: 'app-page96',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <article class="card">
        <header>
          <p class="game">LUCKY HIRE</p>
          <h1>Shaik Moheed</h1>
          <p class="sub">MATCH 3 TO WIN A SOFTWARE ENGINEER</p>
        </header>

        <section class="panels">
          @for (p of panels; track p.label) {
            <button type="button" class="panel" [class.revealed]="p.revealed" (click)="reveal(p)">
              <span class="prize"><b>{{ p.label }}</b><em>{{ p.sub }}</em></span>
              <span class="foil" aria-hidden="true">SCRATCH</span>
            </button>
          }
        </section>

        <footer>
          <p class="odds">Odds of winning: 1 in 1. Prize: Angular, Java and PostgreSQL, at Certinal.</p>
          <p class="serial">№ 0 0 0 1 · 2026 · BENGALURU</p>
        </footer>
      </article>
    </div>
    <app-design-nav [num]="96" designName="Scratchcard" />
  `,
  styles: [`
    :host { --card:#1c2e5c; --gold:#f0c040; --pink:#ff3d8b;
            display:block; background:#0d1733; color:#f2f4ff; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 20px 104px; }
    .card { margin:auto; width:min(700px,100%); background:linear-gradient(165deg,#24407c,var(--card));
            border:4px solid var(--gold); border-radius:14px; padding:28px 30px 22px;
            box-shadow:0 30px 64px -24px rgba(0,0,0,.9); }
    header { text-align:center; padding-bottom:22px; }
    .game { margin:0 0 10px; font-size:11px; font-weight:700; letter-spacing:4px; color:var(--pink); }
    h1 { margin:0 0 8px; font-size:clamp(30px,5.2vw,52px); line-height:1; letter-spacing:-2px; font-weight:700;
         color:var(--gold); text-shadow:0 2px 0 rgba(0,0,0,.35); }
    .sub { margin:0; font-size:9.5px; font-weight:600; letter-spacing:2.4px; opacity:.76; }
    .panels { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
    .panel { position:relative; aspect-ratio:1; border:0; padding:0; border-radius:9px; overflow:hidden;
             cursor:pointer; background:#0f1b3d; }
    .prize { position:absolute; inset:0; display:grid; place-content:center; gap:4px; text-align:center; padding:8px; }
    .prize b { font-size:clamp(13px,1.9vw,18px); font-weight:700; letter-spacing:-0.4px; color:var(--gold); }
    .prize em { font-style:normal; font-size:9.5px; letter-spacing:1px; color:#9fb0e0; }
    /* The foil sits on top until the panel is revealed. */
    .foil { position:absolute; inset:0; display:grid; place-items:center;
            background:linear-gradient(116deg,#c9ccd6 0 18%, #f2f4fa 24%, #a9aebd 32% 48%,
                       #e6e9f2 54%, #9ba1b2 62% 78%, #dfe3ee 84%, #b2b7c6 92%);
            background-size:220% 100%; color:#5a6075; font-size:11px; font-weight:700; letter-spacing:3px;
            transition:opacity .35s ease, transform .35s ease; }
    .panel.revealed .foil { opacity:0; transform:scale(1.12); pointer-events:none; }
    .panel:hover .foil { background-position:100% 0; }
    footer { padding-top:20px; text-align:center; }
    .odds { margin:0 0 8px; font-size:11.5px; line-height:1.6; opacity:.78; }
    .serial { margin:0; font-family:"JetBrains Mono",monospace; font-size:10px; letter-spacing:2.6px; color:#8fa0d0; }
    @media (prefers-reduced-motion:reduce){ .foil{transition:none} }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} .card{padding:22px 18px 18px} }
  `],
})
export class Page96Component {
  readonly panels = [
    { label: 'Angular', sub: 'front end', revealed: false },
    { label: 'Java', sub: 'services', revealed: false },
    { label: 'Postgres', sub: 'data', revealed: false },
    { label: 'TypeScript', sub: 'typed', revealed: false },
    { label: 'Spring', sub: 'boot', revealed: false },
    { label: 'Tests', sub: 'always green', revealed: false },
  ];

  reveal(panel: { revealed: boolean }): void {
    panel.revealed = true;
  }
}
