import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { IStatDTO } from 'src/app/models/interfaces/pokemon-response.interface';

Chart.register(...registerables);

@Component({
  selector: 'app-stats-chart',
  templateUrl: './stats-chart.component.html',
  styleUrls: ['./stats-chart.component.scss']
})
export class StatsChartComponent implements AfterViewInit {

  @ViewChild('statschart') statschart!: ElementRef;
  @Input() stats!:IStatDTO[];

  chart!: Chart;

  ngAfterViewInit() {

    this.chart = new Chart(this.statschart.nativeElement, {
      type: 'bar',
      data: {
        labels: this.stats.map(stat => stat.stat.name),
        datasets: [{
          label: 'Stats',
          data: this.stats.map(stat => stat.base_stat),
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
