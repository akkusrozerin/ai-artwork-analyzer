import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { MatFormFieldModule } from '@angular/material/form-field'; // Make sure this line is included

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  selectedFile: File | null = null;
  selectedImagePreview: string | ArrayBuffer | null = null;


  constructor(private apiService: ApiService) { }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFile = input.files[0];

      // Read the selected image for preview
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  uploadImage(): void {
    // if (this.selectedFile) {
    //   const formData = new FormData();
    //   formData.append('image', this.selectedFile);

    //   this.apiService.uploadImage(formData).subscribe(
    //     response => {
    //       console.log('Image uploaded successfully!', response);
    //       // Handle any further actions here
    //     },
    //     error => {
    //       console.error('Error uploading image:', error);
    //       // Handle error scenario
    //     }
    //   );
    // }
    console.log("uploadimage");
  }

  clear(){
    this.selectedFile = null, 
    this.selectedImagePreview = null;
  }
}
