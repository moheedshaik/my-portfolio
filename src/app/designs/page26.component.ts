import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 26 — Paper collage: cut-paper shapes in primaries on a warm ground. */
@Component({
  selector: 'app-page26',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <div class="cut" aria-hidden="true">
        <span class="s s1"></span><span class="s s2"></span><span class="s s3"></span>
        <span class="s s4"></span><span class="s s5"></span>
      </div>
      <header><span class="logo">SM.</span><nav><a>Work</a><a>About</a><a>Contact</a></nav></header>
      <main>
        <h1><span>Shaik</span><span>Moheed</span></h1>
        <p>Software engineer. I build consent and e-signature platforms with Angular and Java — cut, arranged, and glued down properly.</p>
        <a class="btn">See the work</a>
      </main>
      <footer>
        <span class="chip y">Angular</span><span class="chip b">TypeScript</span><span class="chip r">Java</span>
        <span class="chip g">Spring Boot</span><span class="chip y">PostgreSQL</span><span class="chip b">Node.js</span>
      </footer>
    </div>
    <app-design-nav [num]="26" designName="Paper collage" />
  `,
  styles: [`
    :host { --r:#ff4136; --b:#0074d9; --y:#ffdc00; --g:#2ecc40;
            display:block; background:#fdf6e8; color:#141414; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:26px 32px 104px; overflow:hidden; }
    .cut { position:absolute; inset:0; pointer-events:none; }
    .s { position:absolute; filter:drop-shadow(3px 4px 0 rgba(20,20,20,.16)); }
    .s1 { width:330px; height:330px; background:var(--y); top:-70px; right:6%; border-radius:50%; }
    .s2 { width:240px; height:240px; background:var(--b); top:120px; right:0; clip-path:polygon(0 0,100% 28%,72% 100%,0 76%); }
    .s3 { width:180px; height:180px; background:var(--r); bottom:16%; left:-40px; clip-path:polygon(50% 0,100% 100%,0 100%); }
    .s4 { width:140px; height:140px; background:var(--g); bottom:28%; right:22%; border-radius:50% 50% 50% 8%; }
    .s5 { width:110px; height:110px; background:var(--r); top:26%; left:16%; border-radius:50%; opacity:.9; }
    header { position:relative; display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    nav { display:flex; gap:24px; }
    nav a { font-size:14.5px; cursor:pointer; border-bottom:2.5px solid transparent; padding-bottom:2px; }
    nav a:hover { border-color:var(--r); }
    main { position:relative; flex:1; display:flex; flex-direction:column; justify-content:center; padding:44px 0; }
    h1 { margin:0 0 22px; display:flex; flex-direction:column; align-items:flex-start; gap:6px;
         font-size:clamp(44px,8vw,104px); line-height:0.9; letter-spacing:-4px; font-weight:700; }
    h1 span { background:#141414; color:#fdf6e8; padding:4px 18px; }
    h1 span:nth-child(2) { background:var(--r); color:#fff; margin-left:40px; }
    main p { margin:0 0 30px; max-width:42ch; font-size:17px; line-height:1.56; font-weight:500; }
    .btn { align-self:flex-start; padding:15px 32px; background:var(--b); color:#fff; font-size:15px; font-weight:600;
           cursor:pointer; box-shadow:4px 5px 0 #141414; }
    .btn:hover { transform:translate(2px,2px); box-shadow:2px 3px 0 #141414; }
    footer { position:relative; display:flex; flex-wrap:wrap; gap:10px; padding-top:22px; border-top:3px solid #141414; }
    .chip { padding:7px 16px; font-size:13px; font-weight:600; box-shadow:2px 3px 0 #141414; }
    .chip.y{background:var(--y)} .chip.b{background:var(--b);color:#fff} .chip.r{background:var(--r);color:#fff} .chip.g{background:var(--g)}
    @media (max-width:900px){ .wrap{padding:22px 18px 104px} .s1{width:200px;height:200px} .s2{display:none} h1 span:nth-child(2){margin-left:16px} }
  `],
})
export class Page26Component {}
