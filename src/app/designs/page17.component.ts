import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 17 — Diagonal clash: blue and orange split on a hard diagonal. */
@Component({
  selector: 'app-page17',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM.</span><nav><a>Work</a><a>About</a><a>Resume</a><a>Contact</a></nav></header>
      <main>
        <h1><span class="a">SHAIK</span><span class="b">MOHEED</span></h1>
        <p class="bio">Software engineer building consent and e-signature platforms — Angular front ends over Java services.</p>
      </main>
      <footer>
        <div><b>3+</b><span>Years</span></div>
        <div><b>BE</b><span>ECE</span></div>
        <div><b>4</b><span>Projects</span></div>
        <a class="cta">View work →</a>
      </footer>
    </div>
    <app-design-nav [num]="17" designName="Diagonal clash" />
  `,
  styles: [`
    :host { display:block; color:#fff; font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap {
      position:relative; min-height:100vh; display:flex; flex-direction:column; padding:26px 32px 104px;
      background:linear-gradient(118deg,#1b4dff 0% 50%,#ff7a00 50% 100%);
    }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:24px; font-weight:700; letter-spacing:-1px; }
    nav { display:flex; gap:24px; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.9; border-bottom:2px solid transparent; padding-bottom:2px; }
    nav a:hover { border-color:#fff; }
    main { flex:1; display:flex; flex-direction:column; justify-content:center; padding:44px 0; }
    h1 { margin:0 0 26px; display:flex; flex-direction:column; font-size:clamp(50px,11vw,150px);
         line-height:0.82; letter-spacing:-7px; font-weight:700; }
    .a { align-self:flex-start; }
    .b { align-self:flex-end; -webkit-text-stroke:3px #fff; color:transparent; }
    .bio { margin:0; align-self:center; max-width:46ch; text-align:center; font-size:17px; line-height:1.56; opacity:.94; }
    footer { display:flex; justify-content:space-between; align-items:center; gap:24px; flex-wrap:wrap;
             padding-top:22px; border-top:2px solid rgba(255,255,255,.5); }
    footer div b { display:block; font-size:30px; font-weight:700; letter-spacing:-1.4px; }
    footer div span { font-size:11.5px; letter-spacing:1.6px; text-transform:uppercase; opacity:.8; }
    .cta { padding:14px 28px; border-radius:999px; background:#fff; color:#1b4dff; font-size:15px; font-weight:600; cursor:pointer; }
    @media (max-width:900px){
      .wrap{padding:22px 18px 104px; background:linear-gradient(140deg,#1b4dff 0% 50%,#ff7a00 50% 100%)}
      nav a:nth-child(n+3){display:none} h1{letter-spacing:-4px}
    }
  `],
})
export class Page17Component {}
