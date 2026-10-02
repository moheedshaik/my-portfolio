import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 99 — Score: a manuscript stave with the career written as notes. */
@Component({
  selector: 'app-page99',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <article class="score">
        <header>
          <p class="opus">OPUS 1 · 2026</p>
          <h1>Shaik Moheed</h1>
          <p class="tempo">Allegro, ma non troppo — “for Angular and Java”</p>
        </header>

        @for (s of staves; track s.label) {
          <section class="system">
            <p class="part">{{ s.label }}</p>
            <div class="stave">
              <span class="lines" aria-hidden="true"></span>
              <span class="clef" aria-hidden="true">{{ s.clef }}</span>
              <span class="sig" aria-hidden="true">4<br />4</span>
              @for (n of s.notes; track $index) {
                <span class="note" [style.--p]="n.p" [title]="n.t">
                  <i class="head" aria-hidden="true"></i>
                  <i class="stem" aria-hidden="true"></i>
                  <em>{{ n.t }}</em>
                </span>
              }
              <span class="bar" aria-hidden="true"></span>
            </div>
          </section>
        }

        <footer>
          <p>Performed at Certinal, Bengaluru · consent &amp; e-signature platforms</p>
          <p class="fine">Fine.</p>
        </footer>
      </article>
    </div>
    <app-design-nav [num]="99" designName="Manuscript" />
  `,
  styles: [`
    :host { --ink:#1f1b16; --paper:#faf6ea; --accent:#9c2a2a;
            display:block; background:#d8cfb8; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 20px 104px; }
    .score { margin:auto; width:min(900px,100%); background:var(--paper); padding:34px 40px 26px;
             box-shadow:0 26px 54px -22px rgba(0,0,0,.6); }
    header { text-align:center; padding-bottom:26px; }
    .opus { margin:0 0 8px; font-size:9.5px; font-weight:700; letter-spacing:3px; color:#8a7f68; }
    h1 { margin:0 0 6px; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(30px,4.8vw,50px); letter-spacing:-1px; }
    .tempo { margin:0; font-family:Georgia,serif; font-style:italic; font-size:14px; color:#6f6553; }
    .system { margin-bottom:26px; }
    .part { margin:0 0 6px; font-family:Georgia,serif; font-style:italic; font-size:13px; color:var(--accent); }
    .stave { position:relative; height:86px; padding-left:66px; }
    /* Five-line stave. */
    .lines { position:absolute; inset:18px 0 18px 0;
             background:repeating-linear-gradient(180deg, var(--ink) 0 1.3px, transparent 1.3px 12.5px); }
    .clef { position:absolute; left:8px; top:2px; font-size:52px; line-height:1; color:var(--ink); }
    .sig { position:absolute; left:46px; top:22px; font-family:Georgia,serif; font-size:15px;
           line-height:.95; text-align:center; }
    /* Each note sits on a scale degree via --p (0 = top line). */
    .note { position:absolute; top:calc(18px + var(--p) * 6.25px); }
    .note:nth-of-type(1){ left:16%; } .note:nth-of-type(2){ left:30%; }
    .note:nth-of-type(3){ left:44%; } .note:nth-of-type(4){ left:58%; }
    .note:nth-of-type(5){ left:72%; }
    .note .head { display:block; width:13px; height:10px; border-radius:50%; background:var(--ink);
                  transform:rotate(-20deg); }
    .note .stem { position:absolute; right:0; bottom:8px; width:1.6px; height:30px; background:var(--ink); }
    .note em { position:absolute; top:16px; left:-6px; font-style:normal; font-size:9.5px;
               letter-spacing:.4px; color:var(--accent); white-space:nowrap; }
    .bar { position:absolute; right:0; top:18px; bottom:18px; width:2.5px; background:var(--ink); }
    footer { padding-top:18px; border-top:1px solid #ddd3bc; text-align:center; }
    footer p { margin:0 0 5px; font-size:12px; color:#6f6553; }
    .fine { font-family:Georgia,serif; font-style:italic; font-size:15px; color:var(--ink); }
    @media (max-width:900px){ .wrap{padding:20px 12px 104px} .score{padding:24px 16px 20px}
      .note em{font-size:8px} .stave{padding-left:54px} }
  `],
})
export class Page99Component {
  readonly staves = [
    {
      label: 'Front end',
      clef: '𝄞',
      notes: [
        { p: 5, t: 'Angular' }, { p: 3, t: 'TypeScript' }, { p: 4, t: 'RxJS' },
        { p: 2, t: 'Forms' }, { p: 1, t: 'OnPush' },
      ],
    },
    {
      label: 'Back end',
      clef: '𝄢',
      notes: [
        { p: 6, t: 'Java' }, { p: 5, t: 'Spring' }, { p: 7, t: 'REST' },
        { p: 4, t: 'Postgres' }, { p: 6, t: 'Flyway' },
      ],
    },
  ];
}
