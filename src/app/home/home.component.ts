import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { DevIllustrationComponent } from '../illustrations/dev-illustration.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, DevIllustrationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  startWave = false;


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

  /** `icon` values are devicon classes (see index.html). */
  readonly skills = [
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
  ];

  readonly tools = [
    { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    { name: 'IntelliJ', icon: 'devicon-intellij-plain colored' },
    { name: 'Postman', icon: 'devicon-postman-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
  ];
}