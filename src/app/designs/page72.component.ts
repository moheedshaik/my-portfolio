import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

interface Keycap {
  cap: string;
  sub?: string;
  accent?: boolean;
  /** Relative width, for the wider modifier keys. */
  w?: number;
}

/** 72 — Keycaps: a mechanical keyboard whose keys are the stack. */
@Component({
  selector: 'app-page72',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM<b>⌨</b></span><nav><a>Work</a><a>About</a><a>Contact</a></nav></header>

      <main>
        <section class="copy">
          <p class="kick">Software Engineer · Certinal</p>
          <h1>Shaik<br />Moheed</h1>
          <p class="bio">Consent and e-signature platforms — Angular front ends over Java services. Typed out one key at a time.</p>
        </section>

        <section class="deck">
          @for (row of rows; track $index) {
            <div class="row">
              @for (k of row; track k.cap) {
                <span class="key" [class.accent]="k.accent" [style.flex-grow]="k.w ?? 1">
                  <b>{{ k.cap }}</b>
                  @if (k.sub) { <em>{{ k.sub }}</em> }
                </span>
              }
            </div>
          }
        </section>
      </main>
    </div>
    <app-design-nav [num]="72" designName="Keycaps" />
  `,
  styles: [`
    :host { --case:#2a2d34; --cap:#e8e6e1; --accent:#ff6b35;
            display:block; background:#1a1c21; color:#eceae5;
            font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 32px 104px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; color:#f2f0ec; }
    .logo b { color:var(--accent); }
    nav { display:flex; gap:24px; }
    nav a { font-size:14.5px; cursor:pointer; color:#9b9790; }
    nav a:hover { color:#f2f0ec; }
    main { flex:1; display:grid; grid-template-columns:1fr 1.35fr; gap:44px; align-items:center; padding:40px 0; }
    .kick { margin:0 0 14px; font-size:11.5px; font-weight:600; letter-spacing:2.4px; text-transform:uppercase; color:var(--accent); }
    h1 { margin:0 0 18px; font-size:clamp(40px,6vw,76px); line-height:0.94; letter-spacing:-3px; font-weight:700; color:#f4f2ee; }
    .bio { margin:0; max-width:36ch; font-size:16.5px; line-height:1.64; color:#9b9790; }
    .deck { background:var(--case); border-radius:14px; padding:16px; display:grid; gap:9px;
            box-shadow:0 26px 54px -22px rgba(0,0,0,.9), inset 0 2px 0 rgba(255,255,255,.07); }
    .row { display:flex; gap:9px; }
    /* Keycap: light top, darker skirt below. */
    .key { flex:1 1 0; display:grid; align-content:center; gap:1px; padding:13px 10px; border-radius:7px;
           background:var(--cap); color:#2a2d34; cursor:pointer;
           box-shadow:0 4px 0 #b8b5ae, 0 6px 10px rgba(0,0,0,.4); }
    .key b { font-size:13.5px; font-weight:700; letter-spacing:-.3px; }
    .key em { font-style:normal; font-size:9.5px; opacity:.55; }
    .key.accent { background:var(--accent); color:#fff; box-shadow:0 4px 0 #c24d22, 0 6px 10px rgba(0,0,0,.45); }
    .key:hover { transform:translateY(2px); box-shadow:0 2px 0 #b8b5ae, 0 3px 7px rgba(0,0,0,.4); }
    .key.accent:hover { box-shadow:0 2px 0 #c24d22, 0 3px 7px rgba(0,0,0,.45); }
    @media (max-width:900px){ .wrap{padding:22px 16px 104px} main{grid-template-columns:1fr; gap:26px}
      .key b{font-size:11.5px} .key{padding:11px 7px} }
  `],
})
export class Page72Component {
  readonly rows: Keycap[][] = [
    [
      { cap: 'Ng', sub: 'Angular', accent: true },
      { cap: 'Ts', sub: 'TypeScript' },
      { cap: 'Rx', sub: 'RxJS' },
      { cap: 'Ht', sub: 'HTML' },
      { cap: 'Cs', sub: 'CSS' },
    ],
    [
      { cap: 'Ja', sub: 'Java', accent: true },
      { cap: 'Sb', sub: 'Spring' },
      { cap: 'Nd', sub: 'Node' },
      { cap: 'Re', sub: 'REST' },
    ],
    [
      { cap: 'Pg', sub: 'Postgres', accent: true },
      { cap: 'Fw', sub: 'Flyway' },
      { cap: 'Gi', sub: 'Git' },
      { cap: 'Sk', sub: 'Storybook' },
    ],
    [
      { cap: 'Ship it', sub: '— every sprint', w: 3, accent: true },
      { cap: 'Test', sub: 'first' },
    ],
  ];
}
