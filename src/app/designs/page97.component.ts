import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 97 — Manual: a 1980s computer handbook page with an ASCII block diagram. */
@Component({
  selector: 'app-page97',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <article class="page">
        <header>
          <span>MOHEED SYSTEMS</span>
          <span>OWNER'S HANDBOOK</span>
          <span>PAGE 1-1</span>
        </header>

        <h1>CHAPTER 1<br />GETTING STARTED</h1>

        <p class="para">
          Congratulations on your new <b>SHAIK MOHEED</b> unit. Before first use,
          read this chapter carefully. The unit is factory-configured for consent
          and e-signature platforms and requires no soldering.
        </p>

        <pre class="fig">
   +-------------------------------------------+
   |            FIGURE 1-1 : SYSTEM            |
   +-------------------------------------------+
            +------------------+
            |  ANGULAR  (UI)   |
            |  typed forms     |
            +--------+---------+
                     | HTTP
            +--------v---------+
            | SPRING BOOT (API)|
            |  layered svc     |
            +--------+---------+
                     | JDBC
            +--------v---------+
            |  POSTGRESQL (DB) |
            |  flyway  migrat. |
            +------------------+
        </pre>

        <div class="cols">
          <section>
            <p class="h">1.1 SPECIFICATIONS</p>
            <p class="ln">ROLE .......... Software Engineer</p>
            <p class="ln">SITE .......... Certinal, Bengaluru</p>
            <p class="ln">SINCE ......... 2023</p>
            <p class="ln">TRAINING ...... BE, Electronics &amp; Comm.</p>
          </section>
          <section>
            <p class="h">1.2 SUPPLIED PROGRAMS</p>
            <p class="ln">ATLAS.EXE ..... country data, globe</p>
            <p class="ln">CONSENT.EXE ... purposes, audits</p>
            <p class="ln">NOTICE.EXE .... editor, preview</p>
            <p class="ln">SYSTEM.LIB .... tokens, storybook</p>
          </section>
        </div>

        <footer>
          <span>NOTE: Unit ships with tests enabled. Do not disable.</span>
          <span>P/N 2026-SM-001</span>
        </footer>
      </article>
    </div>
    <app-design-nav [num]="97" designName="Computer manual" />
  `,
  styles: [`
    :host { --paper:#eae6da; --ink:#2b2b2b;
            display:block; background:#9c9684; color:var(--ink);
            font-family:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace; }
    .wrap { min-height:100vh; display:flex; padding:26px 20px 104px; }
    .page { margin:auto; width:min(820px,100%); background:var(--paper); padding:34px 40px 26px;
            box-shadow:0 26px 54px -22px rgba(0,0,0,.7); }
    header { display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; padding-bottom:10px;
             border-bottom:2px solid var(--ink); font-size:10px; letter-spacing:1.6px; }
    h1 { margin:22px 0 18px; font-family:"Space Grotesk",sans-serif; font-size:clamp(22px,3.6vw,34px);
         line-height:1.1; letter-spacing:1px; font-weight:700; }
    .para { margin:0 0 20px; font-size:12.5px; line-height:1.9; max-width:68ch; }
    .para b { background:var(--ink); color:var(--paper); padding:0 4px; }
    /* ASCII block diagram, kept monospaced and scrollable on small screens. */
    .fig { margin:0 0 22px; padding:14px 16px; background:#f4f1e8; border:1px solid #c9c4b4;
           font-size:11px; line-height:1.35; overflow-x:auto; }
    .cols { display:grid; grid-template-columns:1fr 1fr; gap:30px; padding-bottom:20px; }
    .h { margin:0 0 10px; font-size:11px; font-weight:700; letter-spacing:1.4px;
         border-bottom:1px solid var(--ink); padding-bottom:5px; }
    .ln { margin:0 0 6px; font-size:11.5px; letter-spacing:.3px; }
    footer { display:flex; justify-content:space-between; gap:14px; flex-wrap:wrap; padding-top:10px;
             border-top:2px solid var(--ink); font-size:9.5px; letter-spacing:1.2px; }
    @media (max-width:900px){ .wrap{padding:20px 12px 104px} .page{padding:24px 18px 20px}
      .cols{grid-template-columns:1fr; gap:22px} .fig{font-size:9px} }
  `],
})
export class Page97Component {}
