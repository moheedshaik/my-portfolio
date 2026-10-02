import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 94 — Bistro menu: courses, dot leaders and prices as years. */
@Component({
  selector: 'app-page94',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <article class="menu">
        <header>
          <p class="est">ESTABLISHED 2023</p>
          <h1>Chez Moheed</h1>
          <p class="sub">CUISINE LOGICIELLE · BENGALURU</p>
        </header>

        <section class="courses">
          @for (c of courses; track c.name) {
            <div class="course">
              <p class="ct">{{ c.name }}</p>
              @for (d of c.dishes; track d.dish) {
                <div class="dish">
                  <span class="d">{{ d.dish }}</span>
                  <span class="dots" aria-hidden="true"></span>
                  <span class="p">{{ d.year }}</span>
                  <p class="desc">{{ d.desc }}</p>
                </div>
              }
            </div>
          }
        </section>

        <footer>
          <p>Chef: Shaik Moheed · Software Engineer</p>
          <p class="small">All dishes prepared with Angular and Java. Tests included. Service not charged.</p>
        </footer>
      </article>
    </div>
    <app-design-nav [num]="94" designName="Bistro menu" />
  `,
  styles: [`
    :host { --ink:#2b2621; --accent:#8a3324;
            display:block; background:#3d352c; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 20px 104px; }
    .menu { margin:auto; width:min(760px,100%); background:#f7f1e3; padding:38px 44px 30px;
            border:1px solid #ddd2bc; box-shadow:0 30px 60px -24px rgba(0,0,0,.8); }
    header { text-align:center; padding-bottom:20px; border-bottom:2px solid var(--ink); }
    .est { margin:0 0 10px; font-size:8.5px; font-weight:700; letter-spacing:3.4px; color:#8d8370; }
    h1 { margin:0 0 8px; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(32px,5.4vw,56px); letter-spacing:-1.2px; }
    .sub { margin:0; font-size:9.5px; font-weight:700; letter-spacing:3px; color:var(--accent); }
    .courses { padding:24px 0 20px; }
    .ct { margin:0 0 14px; font-family:Georgia,serif; font-style:italic; font-size:19px; color:var(--accent); }
    .course { margin-bottom:24px; }
    .dish { display:grid; grid-template-columns:auto 1fr auto; gap:9px; align-items:baseline; margin-bottom:12px; }
    .d { font-size:16px; font-weight:500; }
    /* Dot leaders between dish and price. */
    .dots { border-bottom:1.5px dotted #b8ad95; transform:translateY(-4px); }
    .p { font-family:Georgia,serif; font-size:15px; color:var(--accent); }
    .desc { grid-column:1 / -1; margin:2px 0 0; font-size:12.5px; line-height:1.55; color:#7d7360; }
    footer { padding-top:18px; border-top:2px solid var(--ink); text-align:center; }
    footer p { margin:0 0 5px; font-size:12.5px; }
    .small { font-size:10.5px; color:#8d8370; font-style:italic; }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} .menu{padding:28px 22px 24px} }
  `],
})
export class Page94Component {
  readonly courses = [
    {
      name: 'Entrées',
      dishes: [
        { dish: 'Atlas', year: '2026', desc: '217 countries, live World Bank data, served with a WebGL globe.' },
        { dish: 'Consent Manager', year: '2025', desc: 'Versioned purposes on a bed of audit trails, multi-tenant.' },
      ],
    },
    {
      name: 'Plats principaux',
      dishes: [
        { dish: 'Notice Registry', year: '2025', desc: 'Rich-text editor, live preview, embeddable snippet reduction.' },
        { dish: 'Design System', year: '2024', desc: 'Tokens and theming, documented in Storybook.' },
      ],
    },
    {
      name: 'Accompagnements',
      dishes: [
        { dish: 'Angular · TypeScript · RxJS', year: 'daily', desc: 'Typed forms, OnPush, lazy routes.' },
        { dish: 'Java · Spring Boot · PostgreSQL', year: 'daily', desc: 'Layered services and migrations that behave.' },
      ],
    },
  ];
}
