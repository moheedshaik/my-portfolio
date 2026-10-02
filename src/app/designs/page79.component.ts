import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 79 — Shelf edge: supermarket price labels, shelf rails, a promo flash. */
@Component({
  selector: 'app-page79',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM<b>MART</b></span><nav><a>Aisles</a><a>About</a><a>Checkout</a></nav></header>

      <main>
        <section class="hero">
          <span class="flash">NEW<br />IN</span>
          <h1>Shaik Moheed</h1>
          <p class="sub">SOFTWARE ENGINEER · AISLE 7 · CERTINAL</p>
        </section>

        <section class="shelf">
          @for (p of products; track p.name) {
            <article class="label">
              <p class="name">{{ p.name }}</p>
              <p class="desc">{{ p.desc }}</p>
              <div class="foot">
                <span class="price"><sup>lvl</sup>{{ p.level }}</span>
                <span class="unit">{{ p.unit }}</span>
              </div>
              <span class="barcode" aria-hidden="true"></span>
            </article>
          }
          <span class="rail" aria-hidden="true"></span>
        </section>
      </main>

      <footer><span>OPEN FOR WORK</span><span>BENGALURU</span><span>EST. 2023</span></footer>
    </div>
    <app-design-nav [num]="79" designName="Shelf edge" />
  `,
  styles: [`
    :host { --red:#e4002b; --yellow:#ffe600; --ink:#17171a;
            display:block; background:#f2f2ef; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:24px 32px 104px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    .logo b { color:var(--red); }
    nav { display:flex; gap:24px; }
    nav a { font-size:14.5px; cursor:pointer; }
    nav a:hover { color:var(--red); }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; gap:40px; padding:40px 0; }
    .hero { position:relative; text-align:center; }
    .flash { position:absolute; left:4%; top:-18px; display:grid; place-items:center; width:92px; height:92px;
             border-radius:50%; background:var(--red); color:#fff; font-size:15px; font-weight:700;
             line-height:1.05; letter-spacing:1px; transform:rotate(-12deg); }
    h1 { margin:0 0 10px; font-size:clamp(40px,7vw,88px); line-height:1; letter-spacing:-3.4px; font-weight:700; }
    .sub { margin:0; font-size:11.5px; font-weight:700; letter-spacing:3px; color:#6f6f78; }
    .shelf { position:relative; display:grid; grid-template-columns:repeat(4,1fr); gap:16px; padding-bottom:16px; }
    .rail { position:absolute; left:-12px; right:-12px; bottom:0; height:12px; border-radius:3px;
            background:linear-gradient(#d6d6d0,#a9a9a3); }
    .label { position:relative; background:#fff; border:1px solid #d9d9d4; padding:14px 14px 12px; cursor:pointer;
             box-shadow:0 7px 14px -8px rgba(23,23,26,.4); }
    .label::before { content:""; position:absolute; left:0; right:0; top:0; height:5px; background:var(--yellow); }
    .name { margin:7px 0 4px; font-size:16px; font-weight:700; letter-spacing:-0.4px; }
    .desc { margin:0 0 14px; font-size:11.5px; line-height:1.45; color:#6f6f78; min-height:34px; }
    .foot { display:flex; align-items:baseline; justify-content:space-between; gap:8px;
            padding-top:10px; border-top:1px dashed #d9d9d4; }
    .price { font-size:30px; font-weight:700; letter-spacing:-1.6px; color:var(--red); }
    .price sup { font-size:11px; font-weight:600; letter-spacing:0; margin-right:3px; vertical-align:super; }
    .unit { font-size:10.5px; color:#6f6f78; }
    .barcode { display:block; height:22px; margin-top:10px;
               background:repeating-linear-gradient(90deg,var(--ink) 0 2px, transparent 2px 4px,
                          var(--ink) 4px 5px, transparent 5px 9px); }
    .label:hover { transform:translateY(-4px); }
    footer { display:flex; justify-content:center; gap:26px; flex-wrap:wrap; font-size:10.5px;
             font-weight:700; letter-spacing:2.4px; color:#6f6f78; }
    @media (max-width:900px){ .wrap{padding:20px 16px 104px} .shelf{grid-template-columns:1fr 1fr}
      .flash{width:68px;height:68px;font-size:12px;left:0} }
  `],
})
export class Page79Component {
  readonly products = [
    { name: 'Angular', desc: 'Typed forms, OnPush, lazy routes.', level: '9.2', unit: 'per sprint' },
    { name: 'Java · Spring', desc: 'Layered services, clean contracts.', level: '7.8', unit: 'per service' },
    { name: 'PostgreSQL', desc: 'Migrations that behave under load.', level: '7.2', unit: 'per schema' },
    { name: 'Testing', desc: 'Green before it ships. Always.', level: '9.6', unit: 'per release' },
  ];
}
