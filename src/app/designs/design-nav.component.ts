import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DESIGNS } from './designs.catalog';

/**
 * Shared chrome for the design prototypes: which one you are looking at,
 * prev/next, and a searchable jump menu so any page can be reached from any
 * other without stepping through the set. Styled neutrally on purpose — it
 * must not colour the judgement of the design behind it.
 */
@Component({
  selector: 'app-design-nav',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="dn">
      <a class="dn-btn" [routerLink]="'/page' + prev" title="Previous design">←</a>

      <button type="button" class="dn-label" (click)="toggle($event)" [attr.aria-expanded]="open()">
        <b>{{ num < 10 ? '0' + num : num }}</b>/100 · {{ designName }}
        <i class="caret" aria-hidden="true">▾</i>
      </button>

      <a class="dn-btn" [routerLink]="'/page' + next" title="Next design">→</a>

      @if (open()) {
        <div class="dn-menu" (click)="$event.stopPropagation()">
          <input
            #box
            class="dn-search"
            type="search"
            placeholder="Search by number or name…"
            autocomplete="off"
            [value]="query()"
            (input)="query.set(box.value)"
            (keydown.enter)="goFirst()"
            (keydown.escape)="close()" />

          <p class="dn-count">{{ results().length }} of {{ total }}</p>

          <ul class="dn-list">
            @for (d of results(); track d.n) {
              <li>
                <a
                  [routerLink]="'/page' + d.n"
                  [class.on]="d.n === num"
                  (click)="close()">
                  <i class="sw" [style.background]="'linear-gradient(135deg,' + d.a + ',' + d.b + ')'"></i>
                  <b>{{ d.n < 10 ? '0' + d.n : d.n }}</b>
                  <span>{{ d.name }}</span>
                </a>
              </li>
            } @empty {
              <li class="dn-empty">Nothing matches “{{ query() }}”.</li>
            }
          </ul>
        </div>
      }
    </nav>
  `,
  styles: [
    `
      .dn {
        position: fixed;
        left: 50%;
        bottom: 18px;
        transform: translateX(-50%);
        z-index: 999;
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 6px;
        border-radius: 999px;
        background: rgba(17, 17, 20, 0.92);
        backdrop-filter: blur(10px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 12px;
        color: #fff;
      }
      .dn-label {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 5px 12px;
        border: 0;
        border-radius: 999px;
        background: none;
        color: inherit;
        font: inherit;
        white-space: nowrap;
        letter-spacing: 0.4px;
        cursor: pointer;
      }
      .dn-label:hover {
        background: rgba(255, 255, 255, 0.1);
      }
      .dn-label b {
        color: #7dd3fc;
      }
      .caret {
        font-style: normal;
        font-size: 9px;
        opacity: 0.6;
      }
      .dn-btn {
        display: grid;
        place-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.12);
        color: #fff;
        text-decoration: none;
        font-size: 14px;
      }
      .dn-btn:hover {
        background: rgba(255, 255, 255, 0.24);
      }

      /* Menu opens upward — the bar is pinned to the bottom of the viewport. */
      .dn-menu {
        position: absolute;
        left: 50%;
        bottom: calc(100% + 10px);
        transform: translateX(-50%);
        width: min(340px, 92vw);
        max-height: min(420px, 60vh);
        display: flex;
        flex-direction: column;
        padding: 10px;
        border-radius: 14px;
        background: rgba(17, 17, 20, 0.97);
        backdrop-filter: blur(14px);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
      }
      .dn-search {
        width: 100%;
        box-sizing: border-box;
        padding: 9px 12px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 9px;
        background: rgba(255, 255, 255, 0.07);
        color: #fff;
        font: inherit;
        font-size: 12.5px;
      }
      .dn-search::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
      .dn-search:focus {
        outline: none;
        border-color: #7dd3fc;
      }
      .dn-count {
        margin: 9px 2px 6px;
        font-size: 10px;
        letter-spacing: 1px;
        color: rgba(255, 255, 255, 0.4);
      }
      .dn-list {
        flex: 1;
        margin: 0;
        padding: 0;
        list-style: none;
        overflow-y: auto;
      }
      .dn-list a {
        display: grid;
        grid-template-columns: 16px 22px 1fr;
        gap: 9px;
        align-items: center;
        padding: 7px 8px;
        border-radius: 8px;
        color: rgba(255, 255, 255, 0.82);
        text-decoration: none;
      }
      .dn-list a:hover {
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
      }
      .dn-list a.on {
        background: rgba(125, 211, 252, 0.16);
        color: #7dd3fc;
      }
      .sw {
        width: 16px;
        height: 16px;
        border-radius: 4px;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18);
      }
      .dn-list b {
        font-size: 11px;
        color: #7dd3fc;
      }
      .dn-list span {
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .dn-empty {
        padding: 14px 8px;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.45);
      }
    `,
  ],
})
export class DesignNavComponent {
  @Input({ required: true }) num!: number;
  @Input({ required: true }) designName!: string;

  private readonly router = inject(Router);

  readonly total = DESIGNS.length;
  readonly open = signal(false);
  readonly query = signal('');

  /** Matches on page number or name, so "89" and "textile" both work. */
  readonly results = computed(() => {
    const q = this.query().trim().toLowerCase();
    if (!q) {
      return DESIGNS;
    }
    return DESIGNS.filter(
      (d) => String(d.n).includes(q) || d.name.toLowerCase().includes(q),
    );
  });

  get prev(): number {
    return this.num === 1 ? this.total : this.num - 1;
  }

  get next(): number {
    return this.num === this.total ? 1 : this.num + 1;
  }

  toggle(event: Event): void {
    event.stopPropagation();
    this.open.update((v) => !v);
    this.query.set('');
  }

  close(): void {
    this.open.set(false);
  }

  /** Enter jumps straight to the top match, so you can type "89 ⏎". */
  goFirst(): void {
    const first = this.results()[0];
    if (first) {
      this.close();
      this.router.navigate(['/page' + first.n]);
    }
  }

  /** Clicking anywhere else, or pressing Escape, dismisses the menu. */
  @HostListener('document:click')
  onDocumentClick(): void {
    this.close();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }
}
