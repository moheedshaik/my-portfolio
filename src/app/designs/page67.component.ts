import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 67 — Trading card: holo-foil character card with stats and abilities. */
@Component({
  selector: 'app-page67',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <article class="card">
        <div class="foil" aria-hidden="true"></div>

        <header>
          <span class="name">Shaik Moheed</span>
          <span class="hp">HP <b>120</b></span>
        </header>

        <div class="art">
          <span class="mono">SM</span>
          <span class="rarity">★★★</span>
        </div>

        <p class="type">Software Engineer — Stage 2 · Evolves from BE (ECE)</p>

        <div class="abilities">
          <div class="ab">
            <span class="cost c1"></span>
            <div><b>Reactive Front End</b><p>Builds Angular interfaces with typed forms and OnPush. Damage scales with test coverage.</p></div>
            <span class="dmg">60</span>
          </div>
          <div class="ab">
            <span class="cost c2"></span>
            <div><b>Layered Service</b><p>Java and Spring Boot behind a clean contract. Migrations never surprise the opponent.</p></div>
            <span class="dmg">80</span>
          </div>
        </div>

        <footer>
          <span>Weakness: scope creep ×2</span>
          <span>Resistance: hype −30</span>
          <span class="no">001 / 100</span>
        </footer>
      </article>
    </div>
    <app-design-nav [num]="67" designName="Trading card" />
  `,
  styles: [`
    :host { display:block; background:#13131f; color:#1a1a1a; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 20px 104px; }
    .card { position:relative; margin:auto; width:min(420px,100%); padding:14px 16px 12px; border-radius:16px;
            background:linear-gradient(160deg,#ffd76a,#f2a03d 52%,#e07b2c);
            box-shadow:0 0 0 7px #1a1a1a, 0 30px 60px -22px rgba(0,0,0,.9); overflow:hidden; }
    /* Holographic sheen. */
    .foil { position:absolute; inset:0; pointer-events:none; opacity:.45;
            background:linear-gradient(116deg, transparent 0 18%, rgba(255,255,255,.75) 24%, transparent 30% 48%,
                       rgba(120,255,235,.55) 54%, transparent 60% 78%, rgba(255,160,255,.5) 84%, transparent 90%);
            background-size:260% 100%; animation:shine 7s ease-in-out infinite alternate; }
    @keyframes shine { to { background-position:100% 0; } }
    @media (prefers-reduced-motion:reduce){ .foil{animation:none} }
    header { position:relative; display:flex; justify-content:space-between; align-items:baseline; padding:2px 2px 8px; }
    .name { font-size:20px; font-weight:700; letter-spacing:-0.6px; }
    .hp { font-size:11px; font-weight:600; }
    .hp b { font-size:18px; color:#c2261f; }
    .art { position:relative; display:grid; place-items:center; aspect-ratio:4/2.9; border:5px solid #d8a33c;
           background:linear-gradient(150deg,#1f6feb,#7c3aed 56%,#ec4899); }
    .mono { font-size:62px; font-weight:700; letter-spacing:-3px; color:#fff; text-shadow:0 5px 18px rgba(0,0,0,.5); }
    .rarity { position:absolute; right:8px; bottom:6px; font-size:12px; color:#ffd76a; letter-spacing:2px; }
    .type { position:relative; margin:9px 0; padding:5px 9px; background:rgba(255,255,255,.55); border-radius:4px;
            font-size:11px; font-style:italic; }
    .abilities { position:relative; background:rgba(255,255,255,.62); border-radius:6px; padding:4px 10px; }
    .ab { display:grid; grid-template-columns:auto 1fr auto; gap:11px; align-items:center;
          padding:11px 0; border-bottom:1px solid rgba(26,26,26,.16); }
    .ab:last-child { border-bottom:0; }
    .cost { width:19px; height:19px; border-radius:50%; box-shadow:inset 0 -2px 4px rgba(0,0,0,.3); }
    .c1 { background:#dd0031; } .c2 { background:#f89820; }
    .ab b { display:block; font-size:14px; margin-bottom:2px; }
    .ab p { margin:0; font-size:10.5px; line-height:1.45; opacity:.74; }
    .dmg { font-size:21px; font-weight:700; letter-spacing:-1px; }
    footer { position:relative; display:flex; justify-content:space-between; gap:10px; flex-wrap:wrap;
             padding-top:9px; font-size:9px; letter-spacing:.4px; opacity:.72; }
    .no { font-weight:700; }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} }
  `],
})
export class Page67Component {}
