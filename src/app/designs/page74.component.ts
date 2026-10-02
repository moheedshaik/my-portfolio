import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 74 — Luggage tags: punched baggage labels strung on a ring. */
@Component({
  selector: 'app-page74',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM</span><nav><a>Work</a><a>About</a><a>Contact</a></nav></header>

      <main>
        <section class="copy">
          <p class="kick">Baggage claim · Software</p>
          <h1>Shaik<br />Moheed</h1>
          <p class="bio">Software engineer at Certinal. Consent and e-signature platforms — everything checked in, nothing lost in transit.</p>
        </section>

        <section class="rail">
          <span class="bar" aria-hidden="true"></span>
          @for (t of tags; track t.code) {
            <article class="tag" [style.--c]="t.colour">
              <span class="hole" aria-hidden="true"></span>
              <p class="code">{{ t.code }}</p>
              <p class="name">{{ t.name }}</p>
              <p class="meta">{{ t.meta }}</p>
              <span class="bars" aria-hidden="true"></span>
            </article>
          }
        </section>
      </main>
    </div>
    <app-design-nav [num]="74" designName="Luggage tags" />
  `,
  styles: [`
    :host { --ink:#1e1b16;
            display:block; background:#ede8dd; color:var(--ink);
            font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 34px 104px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:23px; font-weight:700; letter-spacing:2px; }
    nav { display:flex; gap:24px; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.72; }
    nav a:hover { opacity:1; }
    main { flex:1; display:grid; grid-template-columns:1fr 1.15fr; gap:44px; align-items:center; padding:40px 0; }
    .kick { margin:0 0 14px; font-size:11px; font-weight:700; letter-spacing:2.6px; text-transform:uppercase; color:#a1552b; }
    h1 { margin:0 0 20px; font-size:clamp(42px,6.6vw,86px); line-height:0.92; letter-spacing:-3.4px; font-weight:700; }
    .bio { margin:0; max-width:36ch; font-size:16.5px; line-height:1.64; color:#5e574a; }
    .rail { position:relative; display:flex; gap:16px; flex-wrap:wrap; padding-top:34px; }
    .bar { position:absolute; top:16px; left:0; right:0; height:5px; border-radius:3px; background:#9a9183; }
    .tag { position:relative; width:150px; padding:26px 14px 14px; border-radius:7px; background:#fffdf6;
           border:1px solid rgba(30,27,22,.18); cursor:pointer;
           box-shadow:0 14px 26px -14px rgba(30,27,22,.6); transform:rotate(var(--r,-2deg)); }
    .tag:nth-child(odd) { --r:2deg; }
    .tag::before { content:""; position:absolute; top:-18px; left:50%; width:2px; height:20px;
                   background:#9a9183; transform:translateX(-50%); }
    .hole { position:absolute; top:10px; left:50%; width:13px; height:13px; transform:translateX(-50%);
            border-radius:50%; background:#ede8dd; box-shadow:inset 0 0 0 2px rgba(30,27,22,.3); }
    .code { margin:0 0 6px; padding:3px 0; border-radius:3px; background:var(--c); color:#fff;
            text-align:center; font-size:11px; font-weight:700; letter-spacing:2px; }
    .name { margin:0 0 3px; font-size:14px; font-weight:600; }
    .meta { margin:0 0 10px; font-size:11px; color:#8a8172; }
    .bars { display:block; height:26px;
            background:repeating-linear-gradient(90deg,var(--ink) 0 2px, transparent 2px 4px,
                       var(--ink) 4px 5px, transparent 5px 8px); }
    .tag:hover { transform:rotate(0deg) translateY(-5px); }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} main{grid-template-columns:1fr; gap:26px}
      .tag{width:calc(50% - 8px)} }
  `],
})
export class Page74Component {
  readonly tags = [
    { code: 'ATL', name: 'Atlas', meta: '2026 · World Bank', colour: '#1f6feb' },
    { code: 'CNS', name: 'Consent Manager', meta: '2025 · DPDP', colour: '#c2410c' },
    { code: 'NTC', name: 'Notice Registry', meta: '2025 · Editor', colour: '#15803d' },
    { code: 'DSY', name: 'Design System', meta: '2024 · Tokens', colour: '#6d28d9' },
  ];
}
