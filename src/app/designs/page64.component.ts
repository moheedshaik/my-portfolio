import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignNavComponent } from './design-nav.component';

/** 64 — Chessboard: real 8×8 board with pieces, career as notation. */
@Component({
  selector: 'app-page64',
  standalone: true,
  imports: [DesignNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrap">
      <header><span class="logo">SM</span><nav><a>Work</a><a>About</a><a>Contact</a></nav></header>

      <main>
        <section class="board" aria-hidden="true">
          @for (sq of squares; track $index) {
            <span class="sq" [class.dark]="sq.dark">{{ sq.piece }}</span>
          }
        </section>

        <section class="sheet">
          <p class="kick">Opening · Software Engineer</p>
          <h1>Shaik<br />Moheed</h1>
          <p class="bio">Consent and e-signature platforms at Certinal. Angular front ends over Java services — positional play, not tricks.</p>

          <div class="moves">
            <div><span>1.</span><b>BE — ECE</b><em>development</em></div>
            <div><span>2.</span><b>Angular · TypeScript</b><em>centre control</em></div>
            <div><span>3.</span><b>Java · Spring Boot</b><em>castling</em></div>
            <div><span>4.</span><b>PostgreSQL</b><em>endgame</em></div>
          </div>

          <a class="btn">Review the game →</a>
        </section>
      </main>
    </div>
    <app-design-nav [num]="64" designName="Chessboard" />
  `,
  styles: [`
    :host { --light:#eeded0; --dark:#9c6b48; --ink:#1d1713;
            display:block; background:#f4ece4; color:var(--ink); font-family:"Space Grotesk",-apple-system,sans-serif; }
    .wrap { min-height:100vh; display:flex; flex-direction:column; padding:26px 34px 104px; max-width:1180px; margin:0 auto; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .logo { font-size:23px; font-weight:700; letter-spacing:2px; }
    nav { display:flex; gap:24px; }
    nav a { font-size:14.5px; cursor:pointer; opacity:.72; }
    nav a:hover { opacity:1; }
    main { flex:1; display:grid; grid-template-columns:auto 1fr; gap:48px; align-items:center; padding:38px 0; }
    .board { display:grid; grid-template-columns:repeat(8,clamp(34px,4.4vw,56px)); grid-auto-rows:clamp(34px,4.4vw,56px);
             border:10px solid var(--ink); box-shadow:0 26px 54px -24px rgba(29,23,19,.6); }
    .sq { display:grid; place-items:center; background:var(--light); font-size:clamp(22px,3vw,36px); line-height:1; }
    .sq.dark { background:var(--dark); }
    .kick { margin:0 0 14px; font-size:11.5px; font-weight:600; letter-spacing:2.4px; text-transform:uppercase; color:#9c6b48; }
    h1 { margin:0 0 18px; font-family:Georgia,"Times New Roman",serif; font-weight:400;
         font-size:clamp(40px,6.4vw,82px); line-height:0.96; letter-spacing:-2px; }
    .bio { margin:0 0 28px; max-width:38ch; font-size:16px; line-height:1.64; color:#5e544c; }
    .moves { margin-bottom:28px; }
    .moves div { display:grid; grid-template-columns:28px 1fr auto; gap:12px; align-items:baseline;
                 padding:10px 0; border-bottom:1px solid #e0d4c6; }
    .moves span { font-family:"JetBrains Mono",monospace; font-size:12.5px; color:#9c6b48; }
    .moves b { font-size:15.5px; font-weight:600; }
    .moves em { font-style:italic; font-size:12.5px; color:#8c8077; }
    .btn { display:inline-block; padding:14px 30px; background:var(--ink); color:#f4ece4; font-size:15px;
           font-weight:600; cursor:pointer; }
    .btn:hover { background:var(--dark); }
    @media (max-width:900px){
      .wrap{padding:22px 18px 104px} main{grid-template-columns:1fr; gap:28px; justify-items:center}
      .board{grid-template-columns:repeat(8,34px); grid-auto-rows:34px; border-width:7px}
    }
  `],
})
export class Page64Component {
  /** Standard opening position; `dark` alternates per file and rank. */
  readonly squares = (() => {
    const black = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];
    const white = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'];
    const rank = (r: number, f: number) =>
      r === 0 ? black[f] : r === 1 ? '♟' : r === 6 ? '♙' : r === 7 ? white[f] : '';

    return Array.from({ length: 64 }, (_, i) => {
      const r = Math.floor(i / 8);
      const f = i % 8;
      return { dark: (r + f) % 2 === 1, piece: rank(r, f) };
    });
  })();
}
