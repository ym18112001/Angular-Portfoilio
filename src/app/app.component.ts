import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroComponent} from './hero/hero.component'
import {AboutmeComponent} from './aboutme/aboutme.component'
import {SkillsComponent} from './skills/skills.component'
import {PortfolioComponent} from './portfolio/portfolio.component'
import {ContactmeComponent} from './contactme/contactme.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,HeroComponent,AboutmeComponent,SkillsComponent,PortfolioComponent,ContactmeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angApp1';
}
