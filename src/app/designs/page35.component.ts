import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 35 — Blueprint: cyan technical drawing on navy, dimensioned callouts. */
@Component({
  selector: 'app-page35',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header>
        <span class="logo">DWG — SHAIK_MOHEED</span>
        <span>SHEET 01/01</span><span>SCALE 1:1</span><span class="rev">REV. 2026</span>
      </header>
      <main>
        <div class="draw">
          <span class="dim top"></span>
          <h1>SOFTWARE<br />ENGINEER</h1>
          <span class="dim left"></span>
          <span class="note n1">— Angular front ends</span>
          <span class="note n2">— Java / Spring Boot services</span>
          <span class="note n3">— PostgreSQL + Flyway</span>
        </div>
        <aside>
          <p class="lab">SPECIFICATION</p>
          <p>Consent management and e-signature platforms. Reactive Angular front ends over layered Java services, with migrations that behave under load.</p>
          <p class="lab mt">COMPONENTS</p>
          <ul><li>ATLAS</li><li>CONSENT MANAGER</li><li>NOTICE REGISTRY</li><li>DESIGN SYSTEM</li></ul>
        </aside>
      </main>
      <footer><span>DRAWN BY S. MOHEED</span><span>BENGALURU, IN</span><span>APPROVED ✓</span></footer>
    </div>
    <app-design-nav [num]="35" designName="Blueprint" />
  `,
  styles: [`
    :host { --line:#5bd1ff;
            display:block; background:#07234a; color:#cfe9ff;
            font-family:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:20px 28px 104px;
            background-image:linear-gradient(rgba(91,209,255,.09) 1px,transparent 1px),
                             linear-gradient(90deg,rgba(91,209,255,.09) 1px,transparent 1px);
            background-size:34px 34px; }
    header { display:flex; justify-content:space-between; gap:14px; flex-wrap:wrap; padding-bottom:10px;
             border-bottom:1.5px solid var(--line); font-size:11px; letter-spacing:1.4px; }
    .logo { font-weight:500; color:#fff; }
    .rev { color:var(--line); }
    main { flex:1; display:grid; grid-template-columns:1.4fr 1fr; gap:40px; align-items:center; padding:44px 0; }
    .draw { position:relative; border:1.5px dashed var(--line); padding:50px 40px; }
    h1 { margin:0; font-family:"Space Grotesk",sans-serif; font-size:clamp(34px,6.2vw,76px);
         line-height:0.92; letter-spacing:-2.6px; font-weight:700; color:#fff; }
    .dim { position:absolute; background:var(--line); }
    .dim.top { height:1px; left:10%; right:10%; top:18px; }
    .dim.top::before, .dim.top::after { content:""; position:absolute; top:-4px; width:1px; height:9px; background:var(--line); }
    .dim.top::before { left:0; } .dim.top::after { right:0; }
    .dim.left { width:1px; top:16%; bottom:16%; left:18px; }
    .note { position:absolute; right:-6px; font-size:11px; color:var(--line); white-space:nowrap; }
    .n1 { bottom:-26px; left:40px; } .n2 { bottom:-44px; left:40px; } .n3 { bottom:-62px; left:40px; }
    .lab { margin:0 0 12px; font-size:10.5px; letter-spacing:2px; color:var(--line); }
    .lab.mt { margin-top:26px; }
    aside p:not(.lab) { margin:0; font-size:12.5px; line-height:1.8; opacity:.86; }
    aside ul { list-style:none; margin:0; padding:0; }
    aside li { padding:8px 0; border-bottom:1px dashed rgba(91,209,255,.3); font-size:12px; letter-spacing:1.2px; cursor:pointer; }
    aside li:hover { color:#fff; padding-left:8px; }
    footer { display:flex; justify-content:space-between; gap:14px; flex-wrap:wrap; padding-top:10px;
             border-top:1.5px solid var(--line); font-size:10.5px; letter-spacing:1.4px; }
    @media (max-width:900px){ .wrap{padding:18px 16px 104px} main{grid-template-columns:1fr; gap:56px}
      header span:nth-child(3){display:none} .note{position:static;display:block;margin-top:6px} }
  `],
})
export class Page35Component {}
