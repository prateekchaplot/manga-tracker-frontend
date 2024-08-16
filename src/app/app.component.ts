import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { Ga4Service } from './core/services/ga4.service';
import { MangaItemService } from './core/services/manga-item.service';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, FeaturesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private ga4Service: Ga4Service, private mangaItemService: MangaItemService, private dataService: DataService) { }

  ngOnInit(): void {
    this.ga4Service.initializeGoogleAnalytics();
    this.fetchData();
  }

  fetchData() {
    this.mangaItemService.fetchItems().subscribe(response => {
      this.dataService.upsertItems(response);
    });
  }

}
