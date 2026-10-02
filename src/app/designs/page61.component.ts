import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 61 — Passport: data page plus inked entry stamps for each project. */
@Component({
  selector: 'app-page61',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <article class="book">
        <section class="data">
          <header><span>PASSPORT</span><span>REPUBLIC OF SOFTWARE</span><span>TYPE P</span></header>
          <div class="body">
            <div class="photo" aria-hidden="true"><span>SM</span></div>
            <dl>
              <div><dt>Surname</dt><dd>SHAIK</dd></div>
              <div><dt>Given name</dt><dd>MOHEED</dd></div>
              <div><dt>Occupation</dt><dd>SOFTWARE ENGINEER</dd></div>
              <div><dt>Authority</dt><dd>CERTINAL</dd></div>
              <div><dt>Place of issue</dt><dd>BENGALURU, IN</dd></div>
              <div><dt>Valid from</dt><dd>2023 — PRESENT</dd></div>
            </dl>
          </div>
          <p class="mrz">P&lt;INDSHAIK&lt;&lt;MOHEED&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br />ANGULAR&lt;JAVA&lt;POSTGRESQL&lt;&lt;&lt;&lt;&lt;&lt;&lt;2026&lt;&lt;&lt;&lt;&lt;&lt;</p>
        </section>

        <section class="visas">
          <p class="head">ENTRIES</p>
          <span class="stamp s1"><b>ATLAS</b><em>2026</em></span>
          <span class="stamp s2"><b>CONSENT</b><em>2025</em></span>
          <span class="stamp s3"><b>NOTICE</b><em>2025</em></span>
          <span class="stamp s4"><b>SYSTEM</b><em>2024</em></span>
        </section>
      </article>
    </div>
    <app-design-nav [num]="61" designName="Passport" />
  `,
  styles: [`
    :host { --navy:#17305c; --gold:#c9a227;
            display:block; background:var(--navy); color:#1c1c1c; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; padding:26px 24px 104px; }
    .book { margin:auto; width:min(1000px,100%); display:grid; grid-template-columns:1fr 1fr;
            box-shadow:0 30px 70px -26px rgba(0,0,0,.8); }
    .data { background:#f3eee1; padding:26px 28px; }
    header { display:flex; justify-content:space-between; gap:10px; flex-wrap:wrap; padding-bottom:12px;
             border-bottom:2px solid var(--navy); font-size:9.5px; font-weight:700; letter-spacing:1.8px; color:var(--navy); }
    .body { display:grid; grid-template-columns:110px 1fr; gap:22px; padding:20px 0; }
    .photo { aspect-ratio:3/4; background:linear-gradient(160deg,#d9d2bf,#b9b099); display:grid; place-items:center;
             border:1px solid #b2a98f; }
    .photo span { font-size:34px; font-weight:700; letter-spacing:-1.5px; color:#6d6450; }
    dl { margin:0; display:grid; gap:10px; align-content:start; }
    dt { font-size:8.5px; letter-spacing:1.6px; text-transform:uppercase; color:#8a8370; }
    dd { margin:1px 0 0; font-size:13.5px; font-weight:600; letter-spacing:.6px; }
    /* Machine-readable zone. */
    .mrz { margin:0; padding-top:14px; border-top:1px dashed #b2a98f;
           font-family:"JetBrains Mono",ui-monospace,monospace; font-size:11px; line-height:1.7; letter-spacing:1px; color:#4a4538; }
    .visas { position:relative; background:#ece6d6; padding:26px 28px;
             background-image:linear-gradient(rgba(23,48,92,.05) 1px,transparent 1px); background-size:100% 26px; }
    .head { margin:0 0 20px; font-size:9.5px; font-weight:700; letter-spacing:2.4px; color:var(--navy); }
    .stamp { position:absolute; display:grid; place-items:center; gap:1px; width:112px; height:112px;
             border-radius:50%; border:3px double; font-weight:700; opacity:.82; cursor:pointer; }
    .stamp b { font-size:13px; letter-spacing:1px; }
    .stamp em { font-style:normal; font-size:10px; letter-spacing:1.4px; }
    .s1 { top:70px; left:36px; color:#1f6f4a; border-color:#1f6f4a; transform:rotate(-14deg); }
    .s2 { top:120px; right:40px; color:#8c2b2b; border-color:#8c2b2b; transform:rotate(9deg); }
    .s3 { bottom:96px; left:72px; color:#17305c; border-color:#17305c; transform:rotate(6deg); }
    .s4 { bottom:40px; right:62px; color:#7a5a12; border-color:#7a5a12; transform:rotate(-7deg); }
    .stamp:hover { opacity:1; transform:rotate(0deg) scale(1.05); }
    @media (max-width:900px){ .wrap{padding:20px 14px 104px} .book{grid-template-columns:1fr}
      .visas{min-height:330px} .data{padding:20px} }
  `],
})
export class Page61Component {}
