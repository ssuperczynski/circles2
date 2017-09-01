import {Component, Input} from '@angular/core';
import {species, parties, places} from 'fantastical';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: [
    './area.component.css',
  ],
})

export class AreaComponent {

  // @Input() amount;

  constructor() {
    this.fillArray(15);
  }

  graphData = {
    nodes: [],
    edges: []
  };

  generate(amount) {
    this.clearArray();
    this.fillArray(amount);
  }

  clearArray() {
    this.graphData = {
      nodes: [],
      edges: []
    };
  }

  fillArray(amount) {
    const names: string[] = [];
    Array.apply(null, Array(amount)).map(() => {
      const name = species.gnome();
      console.log(name);
      names.push(name);
      this.graphData.nodes.push({
        data: {
          id: name,
          name: name,
          faveColor: '#D6DBDF',
          faveShape: 'circle'
        },
      });
    });
    names.map((name, i) => {
      this.graphData.edges.push({
        data: {
          source: name,
          target: name,
          faveColor: '#EAECEE'
        }
      });
    });
  }
}
