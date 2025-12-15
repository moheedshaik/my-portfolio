import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

   startWave = false;

   menuOpen = false;


   words: string[] = [
    'Software Developer',
    'Angular Developer',
    'UI Engineer',
    'Tech Enthusiast',
    'Problem Solver',
  ];

  displayText: string = '';
  wordIndex = 0;
  charIndex = 0;
  isDeleting = false;

  typingSpeed = 120;
  deletingSpeed = 80;
  pauseAfterTyping = 2000;

  ngOnInit(): void {
    this.typeEffect();

  this.startWave = true;  // Start waving immediately
  setInterval(() => {
    this.startWave = !this.startWave;  // Toggle wave every 2 seconds
  }, 2000); // Trigger every 2 seconds
  
  }

  typeEffect(): void {
    const currentWord = this.words[this.wordIndex];

    if (!this.isDeleting) {
      // Typing
      this.displayText = currentWord.substring(0, this.charIndex + 1);
      this.charIndex++;

      if (this.charIndex === currentWord.length) {
        setTimeout(() => this.isDeleting = true, this.pauseAfterTyping);
      }
    } else {
      // Deleting
      this.displayText = currentWord.substring(0, this.charIndex - 1);
      this.charIndex--;

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
      }
    }

    setTimeout(
      () => this.typeEffect(),
      this.isDeleting ? this.deletingSpeed : this.typingSpeed
    );
  }
}