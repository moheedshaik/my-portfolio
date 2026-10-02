import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 69 — Periodic table: the stack as elements, colour-grouped by layer. */
@Component({
  selector: 'app-page69',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM</span><nav><a>Work</a><a>About</a><a>Contact</a></nav></header>

      <main>
        <section class="intro">
          <p class="kick">Elements of · Shaik Moheed</p>
          <h1>The stack,<br />tabulated</h1>
          <p class="bio">Software engineer at Certinal building consent and e-signature platforms. Everything below is in daily use.</p>
          <div class="key">
            <span><i class="k1"></i>Front end</span>
            <span><i class="k2"></i>Back end</span>
            <span><i class="k3"></i>Data</span>
            <span><i class="k4"></i>Craft</span>
          </div>
        </section>

        <section class="table">
          @for (e of elements; track e.sym) {
            <article class="el" [class]="e.group">
              <span class="no">{{ e.no }}</span>
              <span class="sym">{{ e.sym }}</span>
              <span class="nm">{{ e.name }}</span>
              <span class="wt">{{ e.wt }}</span>
            </article>
          }
        </section>
      </main>
    </div>
    <app-design-nav [num]="69" designName="Periodic table" />
  `,
  styles: [`
    :host { display:block; background:#10131c; color:#e8ecf7; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 32px 104px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:23px; font-weight:700; letter-spacing:2px; }
    nav { display:flex; gap:24px; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.74; }
    nav a:hover { opacity:1; }
    main { flex:1; display:grid; grid-template-columns:1fr 1.25fr; gap:46px; align-items:center; padding:40px 0; }
    .kick { margin:0 0 14px; font-size:11px; font-weight:600; letter-spacing:2.6px; text-transform:uppercase; color:#6ee7d0; }
    h1 { margin:0 0 18px; font-size:clamp(36px,5.4vw,66px); line-height:1.02; letter-spacing:-2.6px; font-weight:700; }
    .bio { margin:0 0 26px; max-width:38ch; font-size:16px; line-height:1.64; opacity:.7; }
    .key { display:grid; gap:9px; }
    .key span { display:flex; align-items:center; gap:10px; font-size:12.5px; opacity:.76; }
    .key i { width:14px; height:14px; border-radius:3px; }
    .k1{background:#dd4b6a} .k2{background:#f0a23c} .k3{background:#4da3e0} .k4{background:#6ee7d0}
    .table { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; }
    .el { position:relative; display:grid; gap:1px; padding:13px 12px 11px; border-radius:7px; aspect-ratio:1;
          align-content:center; cursor:pointer; border:1px solid rgba(255,255,255,.1); }
    .no { position:absolute; top:7px; left:10px; font-size:9.5px; opacity:.7; }
    .sym { font-size:clamp(20px,2.6vw,30px); font-weight:700; letter-spacing:-1px; }
    .nm { font-size:11px; opacity:.86; }
    .wt { font-size:9.5px; opacity:.6; }
    .fe { background:rgba(221,75,106,.2); border-color:rgba(221,75,106,.5); }
    .be { background:rgba(240,162,60,.2); border-color:rgba(240,162,60,.5); }
    .da { background:rgba(77,163,224,.2); border-color:rgba(77,163,224,.5); }
    .cr { background:rgba(110,231,208,.2); border-color:rgba(110,231,208,.5); }
    .el:hover { transform:translateY(-4px); filter:brightness(1.35); }
    @media (max-width:900px){
      .wrap{padding:22px 18px 104px} main{grid-template-columns:1fr; gap:28px}
      .table{grid-template-columns:repeat(3,1fr)} .key{grid-template-columns:1fr 1fr}
    }
  `],
})
export class Page69Component {
  readonly elements = [
    { no: 1, sym: 'Ng', name: 'Angular', wt: '19.2', group: 'fe' },
    { no: 2, sym: 'Ts', name: 'TypeScript', wt: '5.4', group: 'fe' },
    { no: 3, sym: 'Rx', name: 'RxJS', wt: '7.8', group: 'fe' },
    { no: 4, sym: 'Cs', name: 'CSS', wt: '3.0', group: 'fe' },
    { no: 5, sym: 'Ja', name: 'Java', wt: '21.0', group: 'be' },
    { no: 6, sym: 'Sb', name: 'Spring Boot', wt: '3.2', group: 'be' },
    { no: 7, sym: 'Nd', name: 'Node.js', wt: '20.0', group: 'be' },
    { no: 8, sym: 'Re', name: 'REST', wt: '1.1', group: 'be' },
    { no: 9, sym: 'Pg', name: 'PostgreSQL', wt: '16.0', group: 'da' },
    { no: 10, sym: 'Fw', name: 'Flyway', wt: '9.2', group: 'da' },
    { no: 11, sym: 'Sq', name: 'SQL', wt: '92.1', group: 'da' },
    { no: 12, sym: 'Rd', name: 'Redis', wt: '7.2', group: 'da' },
    { no: 13, sym: 'Ts', name: 'Testing', wt: '∞', group: 'cr' },
    { no: 14, sym: 'A11', name: 'Access.', wt: '2.2', group: 'cr' },
    { no: 15, sym: 'Sk', name: 'Storybook', wt: '8.1', group: 'cr' },
    { no: 16, sym: 'Gi', name: 'Git', wt: '2.4', group: 'cr' },
  ];
}
