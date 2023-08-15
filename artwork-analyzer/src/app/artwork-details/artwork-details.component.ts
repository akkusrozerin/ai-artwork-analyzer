import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-artwork-details',
  templateUrl: './artwork-details.component.html',
  styleUrls: ['./artwork-details.component.css']
})
export class ArtworkDetailsComponent implements OnInit {
  artworkId: string | null = null;
  artwork: any | null = null;
  analysisResult: any | null = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.artworkId = params['id'];
      this.loadArtworkDetails();
      this.analyzeArtwork();
    });
  }

  loadArtworkDetails(): void {
    // Load artwork details using this.artworkId
  }

  analyzeArtwork(): void {
    if (this.artworkId) {
      this.apiService.analyzeArtwork(this.artworkId).subscribe(
        response => {
          this.analysisResult = response;
        },
        error => {
          console.error('Error analyzing artwork:', error);
        }
      );
    }
  }
}
