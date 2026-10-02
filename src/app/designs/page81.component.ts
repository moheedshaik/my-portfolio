import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 81 — Bricks: studded plastic blocks, the stack built up piece by piece. */
@Component({
  selector: 'app-page81',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM</span><nav><a>Work</a><a>About</a><a>Contact</a></nav></header>

      <main>
        <section class="copy">
          <p class="kick">Software Engineer · Certinal</p>
          <h1>Shaik<br />Moheed</h1>
          <p class="bio">Consent and e-signature platforms, built brick by brick — Angular on top, Java underneath, nothing wobbling.</p>
        </section>

        <section class="stack">
          @for (b of bricks; track b.label) {
            <article class="brick" [style.--c]="b.colour" [style.--w]="b.studs">
              <span class="studs" aria-hidden="true">
                @for (s of [].constructor(b.studs); track $index) { <i></i> }
              </span>
              <b>{{ b.label }}</b>
            </article>
          }
          <span class="base" aria-hidden="true"></span>
        </section>
      </main>
    </div>
    <app-design-nav [num]="81" designName="Bricks" />
  `,
  styles: [`
    :host { display:block; background:#f0f2f5; color:#1c2026; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 34px 104px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:23px; font-weight:700; letter-spacing:2px; }
    nav { display:flex; gap:24px; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.72; }
    nav a:hover { opacity:1; }
    main { flex:1; display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; padding:40px 0; }
    .kick { margin:0 0 14px; font-size:11.5px; font-weight:600; letter-spacing:2.4px; text-transform:uppercase; color:#d42e2e; }
    h1 { margin:0 0 18px; font-size:clamp(42px,6.4vw,84px); line-height:0.92; letter-spacing:-3.4px; font-weight:700; }
    .bio { margin:0; max-width:36ch; font-size:16.5px; line-height:1.64; color:#5c646f; }
    .stack { position:relative; display:flex; flex-direction:column; align-items:center; gap:7px; padding-bottom:22px; }
    /* Brick body with a lit top edge and a shaded bottom. */
    .brick { position:relative; display:grid; place-items:center; width:calc(var(--w) * 56px); height:54px;
             border-radius:5px; background:var(--c); color:#fff; cursor:pointer;
             box-shadow:inset 0 3px 0 rgba(255,255,255,.3), inset 0 -5px 0 rgba(0,0,0,.2),
                        0 7px 12px -7px rgba(28,32,38,.6); }
    .studs { position:absolute; top:-9px; left:0; right:0; display:flex; justify-content:space-evenly; }
    .studs i { width:22px; height:11px; border-radius:11px 11px 3px 3px; background:var(--c);
               box-shadow:inset 0 2px 0 rgba(255,255,255,.35); }
    .brick b { font-size:13.5px; font-weight:700; letter-spacing:.4px; }
    .brick:hover { transform:translateY(-4px); }
    .base { width:100%; max-width:420px; height:16px; border-radius:4px; background:#9aa3ae;
            box-shadow:inset 0 3px 0 rgba(255,255,255,.25); }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} main{grid-template-columns:1fr; gap:28px}
      .brick{width:calc(var(--w) * 44px); height:46px} .studs i{width:17px} }
  `],
})
export class Page81Component {
  readonly bricks = [
    { label: 'Angular', studs: 4, colour: '#d42e2e' },
    { label: 'TypeScript', studs: 3, colour: '#2f6fd0' },
    { label: 'RxJS', studs: 2, colour: '#8e44c9' },
    { label: 'Java', studs: 4, colour: '#e08b1f' },
    { label: 'Spring Boot', studs: 3, colour: '#3a9a46' },
    { label: 'PostgreSQL', studs: 5, colour: '#41708f' },
  ];
}
