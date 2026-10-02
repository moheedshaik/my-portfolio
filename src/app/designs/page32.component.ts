import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 32 — Memphis: 80s confetti shapes, squiggles, playful clash. */
@Component({
  selector: 'app-page32',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <div class="confetti" aria-hidden="true">
        <span class="c1"></span><span class="c2"></span><span class="c3"></span>
        <span class="c4"></span><span class="c5"></span><span class="c6"></span>
        <svg class="sq" viewBox="0 0 200 60"><path d="M4 30 Q 29 2 54 30 T 104 30 T 154 30 T 196 30" fill="none" stroke="#00c2ff" stroke-width="7" stroke-linecap="round"/></svg>
      </div>
      <header><span class="logo">SM<b>!</b></span><nav><a>Work</a><a>About</a><a class="pill">Contact</a></nav></header>
      <main>
        <h1>Shaik<br />Moheed</h1>
        <p>Software engineer. Consent and e-signature platforms, built with Angular and Java — and a little more colour than strictly necessary.</p>
        <a class="btn">See the work →</a>
      </main>
      <footer>
        <span class="t t1">Angular</span><span class="t t2">TypeScript</span><span class="t t3">Java</span>
        <span class="t t4">Spring Boot</span><span class="t t5">PostgreSQL</span><span class="t t1">Node.js</span>
      </footer>
    </div>
    <app-design-nav [num]="32" designName="Memphis 80s" />
  `,
  styles: [`
    :host { --pink:#ff5ea8; --cyan:#00c2ff; --yellow:#ffd93d; --mint:#6bf0c0; --violet:#8b5cf6;
            display:block; background:#fdf9f0; color:#15151f; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:26px 32px 104px; overflow:hidden; }
    .confetti { position:absolute; inset:0; pointer-events:none; }
    .confetti span { position:absolute; }
    .c1 { width:120px; height:120px; background:var(--yellow); border-radius:50%; top:8%; right:10%; }
    .c2 { width:90px; height:90px; background:var(--pink); top:24%; right:4%; transform:rotate(18deg); }
    .c3 { width:0; height:0; border-left:46px solid transparent; border-right:46px solid transparent;
          border-bottom:80px solid var(--mint); bottom:22%; right:16%; }
    .c4 { width:64px; height:64px; background:var(--violet); border-radius:50% 50% 50% 4%; top:58%; left:6%; }
    .c5 { width:46px; height:46px; background:var(--cyan); border-radius:50%; top:14%; left:22%; }
    .c6 { width:150px; height:18px; background:repeating-linear-gradient(90deg,var(--pink) 0 12px,transparent 12px 24px);
          bottom:30%; left:14%; transform:rotate(-12deg); }
    .sq { position:absolute; width:210px; top:40%; right:30%; }
    header { position:relative; display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:25px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:var(--pink); }
    nav { display:flex; gap:24px; align-items:center; }
    nav a { font-size:14.5px; cursor:pointer; }
    nav .pill { padding:10px 22px; border-radius:999px; background:var(--violet); color:#fff; font-weight:600;
                box-shadow:3px 4px 0 #15151f; }
    main { position:relative; flex:1; display:flex; flex-direction:column; justify-content:center; padding:44px 0; }
    h1 { margin:0 0 20px; font-size:clamp(48px,8.6vw,112px); line-height:0.88; letter-spacing:-4.4px; font-weight:700; }
    main p { margin:0 0 30px; max-width:40ch; font-size:17px; line-height:1.56; font-weight:500; }
    .btn { align-self:flex-start; padding:15px 32px; border-radius:999px; background:var(--yellow); color:#15151f;
           font-size:15px; font-weight:700; cursor:pointer; box-shadow:4px 5px 0 #15151f; }
    .btn:hover { transform:translate(2px,2px); box-shadow:2px 3px 0 #15151f; }
    footer { position:relative; display:flex; flex-wrap:wrap; gap:10px; }
    .t { padding:8px 16px; border-radius:999px; font-size:13px; font-weight:600; box-shadow:2px 3px 0 #15151f; }
    .t1{background:var(--pink);color:#fff} .t2{background:var(--cyan)} .t3{background:var(--yellow)}
    .t4{background:var(--mint)} .t5{background:var(--violet);color:#fff}
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} nav a:not(.pill){display:none} .sq,.c6{display:none} .c1{width:80px;height:80px} }
  `],
})
export class Page32Component {}
