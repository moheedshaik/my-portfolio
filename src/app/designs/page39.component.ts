import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 39 — Pop art: ben-day halftone, speech bubble, heavy comic outlines. */
@Component({
  selector: 'app-page39',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <div class="dots" aria-hidden="true"></div>
      <header><span class="logo">SM!</span><nav><a>WORK</a><a>ABOUT</a><a class="pill">CONTACT</a></nav></header>
      <main>
        <div class="bubble">
          <p>“I build consent and e-signature platforms — Angular up front, Java underneath!”</p>
        </div>
        <h1>SHAIK<br />MOHEED</h1>
        <p class="role">SOFTWARE ENGINEER · CERTINAL</p>
        <a class="btn">SEE THE WORK!</a>
      </main>
      <footer>
        <span class="p1">ANGULAR</span><span class="p2">TYPESCRIPT</span><span class="p3">JAVA</span>
        <span class="p1">SPRING BOOT</span><span class="p2">POSTGRESQL</span>
      </footer>
    </div>
    <app-design-nav [num]="39" designName="Pop art" />
  `,
  styles: [`
    :host { --red:#ff2b2b; --blue:#1565ff; --yellow:#ffdd00;
            display:block; background:var(--yellow); color:#0d0d0d; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { position:relative; min-height:100vh; display:flex; flex-direction:column; padding:24px 30px 104px; overflow:hidden; isolation:isolate; }
    /* Ben-day dot screen. */
    .dots { position:absolute; inset:0; z-index:-1; pointer-events:none; opacity:.4;
            background-image:radial-gradient(var(--red) 2.4px, transparent 2.4px); background-size:14px 14px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:26px; font-weight:700; letter-spacing:-1px; -webkit-text-stroke:1px #0d0d0d; color:var(--red); }
    nav { display:flex; gap:20px; align-items:center; }
    nav a { font-size:12.5px; font-weight:700; letter-spacing:1.4px; cursor:pointer; }
    nav .pill { padding:9px 18px; background:var(--blue); color:#fff; border:3px solid #0d0d0d; box-shadow:4px 4px 0 #0d0d0d; }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; align-items:flex-start; padding:40px 0; }
    .bubble { position:relative; max-width:460px; background:#fff; border:4px solid #0d0d0d; border-radius:22px;
              padding:20px 24px; margin-bottom:34px; box-shadow:7px 8px 0 #0d0d0d; }
    .bubble p { margin:0; font-size:16.5px; line-height:1.45; font-weight:600; }
    .bubble::after { content:""; position:absolute; left:52px; bottom:-26px; width:0; height:0;
                     border-left:18px solid transparent; border-right:18px solid transparent; border-top:26px solid #0d0d0d; }
    h1 { margin:0 0 14px; font-size:clamp(50px,10vw,132px); line-height:0.84; letter-spacing:-5px; font-weight:700;
         color:var(--red); -webkit-text-stroke:3px #0d0d0d; text-shadow:7px 7px 0 var(--blue); }
    .role { margin:0 0 30px; font-size:13px; font-weight:700; letter-spacing:3px; }
    .btn { padding:16px 34px; background:var(--red); color:#fff; font-size:15px; font-weight:700; letter-spacing:1.4px;
           cursor:pointer; border:4px solid #0d0d0d; box-shadow:7px 8px 0 #0d0d0d; }
    .btn:hover { transform:translate(3px,3px); box-shadow:4px 5px 0 #0d0d0d; }
    footer { display:flex; flex-wrap:wrap; gap:10px; }
    footer span { padding:7px 15px; border:3px solid #0d0d0d; font-size:12px; font-weight:700; letter-spacing:1.2px;
                  box-shadow:3px 4px 0 #0d0d0d; }
    .p1{background:#fff} .p2{background:var(--blue);color:#fff} .p3{background:var(--red);color:#fff}
    @media (max-width:900px){ .wrap{padding:20px 16px 104px} nav a:not(.pill){display:none} h1{-webkit-text-stroke:2px #0d0d0d;text-shadow:4px 4px 0 var(--blue)} }
  `],
})
export class Page39Component {}
