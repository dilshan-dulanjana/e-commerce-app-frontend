
import { AfterViewInit, Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-home-video',
  imports: [],
  templateUrl: './home-video.component.html',
  styleUrl: './home-video.component.css'
})
export class HomeVideoComponent implements AfterViewInit {

  @ViewChild('videoPlayer') videoPlayer: any;

  ngAfterViewInit(): void {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;

    const playVideo = () => {
      video.muted = true; // Ensure it's muted for autoplay
      video.play().catch((error) => {
        console.error('Autoplay failed:', error);
      });
    };

    // Play video when it's in the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          playVideo();
        }
      });
    });

    observer.observe(video);
  }
}
