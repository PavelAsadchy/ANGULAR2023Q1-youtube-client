import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { YoutubeItemStatistics } from '../../../../models/youtube-item.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent {
  @Input()
    stats!: YoutubeItemStatistics;
}
