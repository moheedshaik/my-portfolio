import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 65 — Vending machine: skills behind glass, keypad, coin slot. */
@Component({
  selector: 'app-page65',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <article class="machine">
        <section class="glass">
          <p class="brand">MOHEED <b>CO.</b></p>
          @for (s of slots; track s.code) {
            <div class="slot">
              <span class="item" [style.background]="s.colour">{{ s.label }}</span>
              <span class="coil" aria-hidden="true"></span>
              <span class="code">{{ s.code }}</span>
            </div>
          }
          <p class="led">SELECT AN ITEM — ALL FREE</p>
        </section>

        <section class="panel">
          <h1>Shaik<br />Moheed</h1>
          <p class="role">SOFTWARE ENGINEER</p>
          <p class="bio">Consent and e-signature platforms at Certinal. Angular front ends over Java services — dispensed reliably.</p>

          <div class="keys">
            @for (k of keys; track k) { <span>{{ k }}</span> }
          </div>

          <div class="slotline"><span class="coin"></span><em>INSERT CURIOSITY</em></div>
          <a class="btn">DISPENSE CV</a>
        </section>
      </article>
    </div>
    <app-design-nav [num]="65" designName="Vending machine" />
  `,
  styles: [`
    :host { --body:#d7263d; --dark:#1a1013;
            display:block; background:#2b1d20; color:#fff; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 22px 104px; }
    .machine { margin:auto; width:min(940px,100%); display:grid; grid-template-columns:1.25fr 1fr;
               background:var(--body); border-radius:18px; padding:16px; gap:16px;
               box-shadow:0 30px 70px -26px rgba(0,0,0,.85), inset 0 0 0 3px rgba(255,255,255,.14); }
    .glass { position:relative; background:linear-gradient(160deg,#10222b,#0a161c); border-radius:12px; padding:18px 18px 46px;
             display:grid; grid-template-columns:repeat(3,1fr); gap:12px; align-content:start;
             box-shadow:inset 0 0 40px rgba(0,0,0,.7); overflow:hidden; }
    /* Reflection across the glass. */
    .glass::after { content:""; position:absolute; inset:0; pointer-events:none;
                    background:linear-gradient(118deg, rgba(255,255,255,.14) 0 22%, transparent 22% 46%, rgba(255,255,255,.07) 46% 56%, transparent 56%); }
    .brand { grid-column:1/-1; margin:0 0 6px; font-size:13px; font-weight:700; letter-spacing:3px; color:#ffd166; }
    .brand b { color:#fff; }
    .slot { position:relative; display:grid; gap:5px; justify-items:center; }
    .item { display:grid; place-items:center; width:100%; height:62px; border-radius:5px; color:#10222b;
            font-size:11px; font-weight:700; letter-spacing:.6px; text-align:center; padding:0 4px; cursor:pointer; }
    .item:hover { transform:translateY(-3px); }
    .coil { display:block; width:100%; height:7px;
            background:repeating-linear-gradient(90deg,#6b7b85 0 3px,transparent 3px 7px); border-radius:2px; }
    .code { font-family:"JetBrains Mono",monospace; font-size:10px; color:#89a0ad; }
    .led { position:absolute; left:18px; right:18px; bottom:14px; margin:0; padding:7px 10px; border-radius:4px;
           background:#04131a; color:#4ade80; font-family:"JetBrains Mono",monospace; font-size:10.5px;
           letter-spacing:1.6px; text-align:center; }
    .panel { padding:20px 22px; display:flex; flex-direction:column; }
    h1 { margin:0 0 6px; font-size:clamp(32px,4.6vw,52px); line-height:0.94; letter-spacing:-2.2px; font-weight:700; }
    .role { margin:0 0 14px; font-size:10.5px; font-weight:700; letter-spacing:2.6px; color:#ffd166; }
    .bio { margin:0 0 22px; font-size:14px; line-height:1.6; opacity:.86; }
    .keys { display:grid; grid-template-columns:repeat(4,1fr); gap:7px; margin-bottom:20px; }
    .keys span { display:grid; place-items:center; padding:11px 0; border-radius:6px; background:var(--dark);
                 font-family:"JetBrains Mono",monospace; font-size:13px; cursor:pointer;
                 box-shadow:0 3px 0 rgba(0,0,0,.5); }
    .keys span:hover { background:#ffd166; color:var(--dark); }
    .slotline { display:flex; align-items:center; gap:12px; margin-bottom:16px; }
    .coin { width:54px; height:10px; border-radius:6px; background:var(--dark); box-shadow:inset 0 2px 5px rgba(0,0,0,.8); }
    .slotline em { font-style:normal; font-size:10px; letter-spacing:2px; opacity:.72; }
    .btn { margin-top:auto; padding:14px; border-radius:8px; background:#ffd166; color:var(--dark);
           text-align:center; font-size:13.5px; font-weight:700; letter-spacing:1.6px; cursor:pointer;
           box-shadow:0 4px 0 #c9a23f; }
    .btn:hover { transform:translateY(2px); box-shadow:0 2px 0 #c9a23f; }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} .machine{grid-template-columns:1fr}
      .glass{grid-template-columns:repeat(3,1fr)} }
  `],
})
export class Page65Component {
  readonly slots = [
    { code: 'A1', label: 'Angular', colour: '#dd0031' },
    { code: 'A2', label: 'TypeScript', colour: '#3178c6' },
    { code: 'A3', label: 'RxJS', colour: '#e535ab' },
    { code: 'B1', label: 'Java', colour: '#f89820' },
    { code: 'B2', label: 'Spring', colour: '#6db33f' },
    { code: 'B3', label: 'Postgres', colour: '#5496c9' },
    { code: 'C1', label: 'Node.js', colour: '#8cc84b' },
    { code: 'C2', label: 'Flyway', colour: '#cc0000' },
    { code: 'C3', label: 'Storybook', colour: '#ff4785' },
  ];

  readonly keys = ['1', '2', '3', 'A', '4', '5', '6', 'B', '7', '8', '9', 'C'];
}
