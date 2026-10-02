import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 52 — Vinyl sleeve: square cover, spinning record, tracklist as projects. */
@Component({
  selector: 'app-page52',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <main>
        <section class="sleeve">
          <span class="cat">SM–001</span>
          <h1>SHAIK<br />MOHEED</h1>
          <p class="sub">SOFTWARE ENGINEER · LP · 2026</p>
          <div class="bars" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
        </section>

        <section class="record" aria-hidden="true">
          <span class="disc"><span class="label"><b>SM</b><span>33⅓</span></span></span>
        </section>

        <section class="back">
          <p class="head">SIDE A — PROJECTS</p>
          <a class="tr"><span>A1</span><b>Atlas</b><em>4:17</em></a>
          <a class="tr"><span>A2</span><b>Consent Manager</b><em>3:52</em></a>
          <a class="tr"><span>A3</span><b>Notice Registry</b><em>5:08</em></a>
          <a class="tr"><span>A4</span><b>Design System</b><em>2:44</em></a>
          <p class="head mt">SIDE B — STACK</p>
          <p class="notes">Angular · TypeScript · RxJS · Java · Spring Boot · PostgreSQL · Node.js</p>
          <p class="credit">Recorded at Certinal, Bengaluru. All parts written and performed by S. Moheed.</p>
        </section>
      </main>
    </div>
    <app-design-nav [num]="52" designName="Vinyl sleeve" />
  `,
  styles: [`
    :host { --orange:#ff7a1a; --cream:#f3e9d2;
            display:block; background:#1b1a18; color:var(--cream); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:28px 28px 104px; }
    main { margin:auto; display:grid; grid-template-columns:auto auto 1fr; gap:26px; align-items:center;
            width:min(1120px,100%); }
    .sleeve { position:relative; width:330px; aspect-ratio:1; background:var(--orange); color:#1b1a18;
              padding:26px; display:flex; flex-direction:column; justify-content:space-between;
              box-shadow:0 26px 60px -22px rgba(0,0,0,.8); }
    .cat { font-size:11px; font-weight:700; letter-spacing:2.4px; }
    h1 { margin:0; font-size:clamp(34px,4.2vw,52px); line-height:0.92; letter-spacing:-2.4px; font-weight:700; }
    .sub { margin:8px 0 0; font-size:10.5px; font-weight:600; letter-spacing:2.4px; }
    .bars { display:flex; gap:5px; align-items:flex-end; height:52px; }
    .bars i { flex:1; background:#1b1a18; }
    .bars i:nth-child(1){height:40%} .bars i:nth-child(2){height:78%} .bars i:nth-child(3){height:55%}
    .bars i:nth-child(4){height:100%} .bars i:nth-child(5){height:62%} .bars i:nth-child(6){height:86%}
    .bars i:nth-child(7){height:34%}
    /* The record peeking out of the sleeve. */
    .record { margin-left:-120px; }
    .disc { display:grid; place-items:center; width:300px; height:300px; border-radius:50%;
            background:repeating-radial-gradient(circle,#2a2825 0 2px,#111 2px 4px);
            box-shadow:0 20px 50px -18px rgba(0,0,0,.9); animation:spin 7s linear infinite; }
    .label { display:grid; place-items:center; gap:2px; width:106px; height:106px; border-radius:50%;
             background:var(--cream); color:#1b1a18; }
    .label b { font-size:24px; font-weight:700; letter-spacing:-1px; }
    .label span { font-size:9.5px; letter-spacing:1.4px; }
    @keyframes spin { to { transform:rotate(1turn); } }
    @media (prefers-reduced-motion:reduce){ .disc{animation:none} }
    .head { margin:0 0 12px; font-size:10.5px; font-weight:700; letter-spacing:2.4px; color:var(--orange); }
    .head.mt { margin-top:24px; }
    .tr { display:grid; grid-template-columns:34px 1fr auto; gap:12px; align-items:baseline;
          padding:9px 0; border-bottom:1px solid #332f2a; cursor:pointer; }
    .tr span { font-size:11.5px; color:#7d7569; }
    .tr b { font-size:16px; font-weight:500; }
    .tr em { font-style:normal; font-size:12px; color:#7d7569; }
    .tr:hover b { color:var(--orange); }
    .notes { margin:0; font-size:13.5px; line-height:1.8; color:#b5ac9b; }
    .credit { margin:22px 0 0; font-size:11.5px; line-height:1.6; color:#7d7569; max-width:38ch; }
    @media (max-width:900px){
      .wrap{padding:22px 16px 104px} main{grid-template-columns:1fr; gap:20px}
      .sleeve{width:min(300px,86vw)} .record{display:none}
    }
  `],
})
export class Page52Component {}
