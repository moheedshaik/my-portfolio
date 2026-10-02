import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 55 — Botanical: pressed-leaf line art on warm paper, herbarium labels. */
@Component({
  selector: 'app-page55',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <svg class="leaf l1" viewBox="0 0 120 220" aria-hidden="true">
        <path d="M60 10 C18 70 18 160 60 212 C102 160 102 70 60 10 Z" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M60 14 V208" stroke="currentColor" stroke-width="1.6"/>
        <g stroke="currentColor" stroke-width="1">
          <path d="M60 50 C44 56 36 70 32 86"/><path d="M60 50 C76 56 84 70 88 86"/>
          <path d="M60 92 C42 98 32 114 28 132"/><path d="M60 92 C78 98 88 114 92 132"/>
          <path d="M60 134 C46 140 38 154 34 170"/><path d="M60 134 C74 140 82 154 86 170"/>
        </g>
      </svg>
      <svg class="leaf l2" viewBox="0 0 120 220" aria-hidden="true">
        <path d="M60 10 C18 70 18 160 60 212 C102 160 102 70 60 10 Z" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M60 14 V208" stroke="currentColor" stroke-width="1.6"/>
      </svg>

      <header><span class="logo">Moheed <i>&amp;</i> Co.</span><nav><a>Work</a><a>About</a><a>Contact</a></nav></header>

      <main>
        <p class="kick">Herbarium of Software · Specimen No. 01</p>
        <h1>Shaik<br /><em>Moheed</em></h1>
        <p class="bio">Collected at Certinal, Bengaluru. Grows consent and e-signature platforms — Angular front ends over Java services. Prefers well-drained architecture and regular pruning.</p>
        <a class="btn">View the collection</a>
      </main>

      <footer>
        <div><b>Genus</b><span>Software Engineer</span></div>
        <div><b>Habitat</b><span>Angular · Java · PostgreSQL</span></div>
        <div><b>Flowering</b><span>Atlas · Consent Manager · Notice Registry</span></div>
      </footer>
    </div>
    <app-design-nav [num]="55" designName="Botanical" />
  `,
  styles: [`
    :host { --green:#3f6b4a; --ink:#2a2a24;
            display:block; background:#f6f2e7; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:26px 44px 104px;
            max-width:1180px; margin:0 auto; overflow:hidden; }
    .leaf { position:absolute; color:var(--green); opacity:.42; }
    .l1 { width:230px; top:6%; right:4%; transform:rotate(18deg); }
    .l2 { width:150px; bottom:12%; right:22%; transform:rotate(-26deg); opacity:.26; }
    header { position:relative; display:flex; justify-content:space-between; align-items:center;
             padding-bottom:16px; border-bottom:1px solid #ddd5c2; }
    .logo { font-family:Georgia,serif; font-size:22px; }
    .logo i { color:var(--green); }
    nav { display:flex; gap:26px; }
    nav a { font-size:13.5px; cursor:pointer; color:#6d685c; }
    nav a:hover { color:var(--green); }
    main { position:relative; flex:1; display:flex; flex-direction:column; justify-content:center; padding:54px 0; }
    .kick { margin:0 0 20px; font-size:11px; letter-spacing:2.6px; text-transform:uppercase; color:var(--green); }
    h1 { margin:0 0 26px; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(44px,7.6vw,100px); line-height:0.96; letter-spacing:-2px; }
    h1 em { font-style:italic; color:var(--green); }
    .bio { margin:0 0 34px; max-width:46ch; font-size:16px; line-height:1.74; color:#5a5549; }
    .btn { align-self:flex-start; padding:13px 30px; border:1.5px solid var(--green); border-radius:999px;
           color:var(--green); font-size:14.5px; cursor:pointer; }
    .btn:hover { background:var(--green); color:#f6f2e7; }
    footer { position:relative; display:grid; grid-template-columns:repeat(3,1fr); gap:24px;
             padding-top:20px; border-top:1px solid #ddd5c2; }
    footer b { display:block; font-family:Georgia,serif; font-style:italic; font-size:13px; color:var(--green); margin-bottom:4px; }
    footer span { font-size:13.5px; color:#5a5549; }
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} .l1{width:150px; opacity:.24} .l2{display:none}
      footer{grid-template-columns:1fr; gap:14px} }
  `],
})
export class Page55Component {}
