import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';

const myEase = CustomEase.create("abouEase", "1.000, 0.005, 0.000, 0.995");

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  enter() {
    const TL = gsap.timeline();
    TL
      .to(".block", {
        width: '310px',
        height: '70px',
        top: 0,
        right:'-5px'
      })
      .to(".text", {
        color: '#FFFFFF',
      },"<")
      .to(".img", {
        right: '15px',
      },"<")
  }
  leave() {
    const TL = gsap.timeline();
    TL
      .to(".block", {
        width: '56px',
        height: '56px',
        top: '2px',
        right: '3px'
      })
      .to(".text", {
        color: '#000000',
      },"<")
      .to(".img", {
        right: '10px',
      },"<")
  }

  roundLeave() {
    const TL = gsap.timeline();
    TL
    .to(".round-2",{
      bottom: '60px',
    })
    .to(".moins",{
      display: 'none',
      duration: .1
    },"<")
    .to(".plus",{
      display: 'block'
    },"<.1")
  }

  roundEnter() {
    const TL = gsap.timeline();
    TL
    .fromTo(".round-2",{bottom: '-60px'},{
      bottom: '0px',
    })
    .to(".plus",{
      display: 'none',
      duration: .1
    },"<")
    .to(".moins",{
      display: 'block'
    },"<.1")
  }
}
