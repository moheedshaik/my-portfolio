import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 87 — Laboratory: graduated beakers filled to each skill's level. */
@Component({
  selector: 'app-page87',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header>
        <span class="logo">LAB · SM</span>
        <span class="batch">BATCH 2026-01</span>
        <nav><a>Work</a><a>About</a><a>Contact</a></nav>
      </header>

      <main>
        <section class="copy">
          <p class="kick">Specimen analysis</p>
          <h1>Shaik<br />Moheed</h1>
          <p class="bio">Software engineer at Certinal. Consent and e-signature platforms — measured, titrated, and documented.</p>
          <div class="findings">
            <div><b>Compound</b><span>Angular + Java</span></div>
            <div><b>Reaction</b><span>Stable under load</span></div>
            <div><b>Residue</b><span>None — tests pass clean</span></div>
          </div>
        </section>

        <section class="bench">
          @for (b of beakers; track b.name) {
            <figure class="beaker" [style.--c]="b.colour">
              <div class="glass">
                <span class="ticks" aria-hidden="true"></span>
                <span class="liquid" [style.height.%]="b.level"><i class="surface"></i></span>
              </div>
              <figcaption><b>{{ b.name }}</b><span>{{ b.level }} ml</span></figcaption>
            </figure>
          }
          <span class="top" aria-hidden="true"></span>
        </section>
      </main>
    </div>
    <app-design-nav [num]="87" designName="Laboratory" />
  `,
  styles: [`
    :host { --ink:#16222b;
            display:block; background:#eef4f6; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:24px 34px 104px; }
    header { display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:14px;
             padding-bottom:12px; border-bottom:1.5px solid var(--ink); }
    .logo { font-size:14px; font-weight:700; letter-spacing:2.8px; }
    .batch { font-family:"JetBrains Mono",monospace; font-size:10.5px; letter-spacing:1.4px; color:#64787f; }
    nav { display:flex; gap:22px; justify-content:flex-end; }
    nav a { font-size:13.5px; cursor:pointer; opacity:.74; }
    nav a:hover { opacity:1; }
    main { flex:1; display:grid; grid-template-columns:1fr 1.25fr; gap:46px; align-items:center; padding:38px 0; }
    .kick { margin:0 0 14px; font-size:10.5px; font-weight:700; letter-spacing:2.8px; text-transform:uppercase; color:#1d9a8a; }
    h1 { margin:0 0 18px; font-size:clamp(40px,6.2vw,80px); line-height:0.94; letter-spacing:-3px; font-weight:700; }
    .bio { margin:0 0 26px; max-width:34ch; font-size:16px; line-height:1.64; color:#5a6b73; }
    .findings div { display:grid; grid-template-columns:92px 1fr; gap:14px; padding:9px 0;
                    border-bottom:1px solid #d6e2e6; }
    .findings b { font-size:11px; letter-spacing:1.6px; text-transform:uppercase; color:#1d9a8a; }
    .findings span { font-size:14px; }
    .bench { position:relative; display:grid; grid-template-columns:repeat(6,1fr); gap:12px; align-items:end;
             padding-bottom:16px; }
    .top { position:absolute; left:-14px; right:-14px; bottom:0; height:11px; border-radius:3px;
           background:linear-gradient(#c3d2d7,#9db0b7); }
    .beaker { margin:0; display:grid; gap:9px; justify-items:center; }
    .glass { position:relative; width:100%; height:190px; border:2px solid rgba(22,34,43,.35);
             border-top:0; border-radius:3px 3px 9px 9px; background:rgba(255,255,255,.6); overflow:hidden; }
    /* Graduation marks up the side. */
    .ticks { position:absolute; left:0; top:0; bottom:0; width:11px;
             background:repeating-linear-gradient(180deg, rgba(22,34,43,.35) 0 1.5px, transparent 1.5px 19px); }
    .liquid { position:absolute; left:0; right:0; bottom:0; background:var(--c); opacity:.85; }
    .surface { position:absolute; left:0; right:0; top:-3px; height:6px; border-radius:50%;
               background:var(--c); filter:brightness(1.25); }
    figcaption { text-align:center; }
    figcaption b { display:block; font-size:12px; font-weight:600; }
    figcaption span { font-size:10.5px; color:#64787f; }
    .beaker:hover .liquid { opacity:1; }
    @media (max-width:900px){ .wrap{padding:20px 16px 104px} header{grid-template-columns:1fr auto}
      .batch{display:none} main{grid-template-columns:1fr; gap:28px}
      .bench{grid-template-columns:repeat(3,1fr)} .glass{height:140px} }
  `],
})
export class Page87Component {
  readonly beakers = [
    { name: 'Angular', level: 92, colour: '#dd3545' },
    { name: 'TypeScript', level: 88, colour: '#2f6fd0' },
    { name: 'RxJS', level: 80, colour: '#8e44c9' },
    { name: 'Java', level: 78, colour: '#e08b1f' },
    { name: 'Spring', level: 74, colour: '#3a9a46' },
    { name: 'Postgres', level: 72, colour: '#1d9a8a' },
  ];
}
