type logData = { shipId: number, author: string, summary: string, tag: string, starDate: string }

export class Log {
  id: number;
  shipId: number;
  author: string;
  summary: string;
  tag: string;
  starDate: string;

  constructor(logData: logData) {
    this.id = ~~(Math.random() * 10000);
    this.shipId = logData.shipId;
    this.starDate = logData.starDate;
    this.author = logData.author;
    this.summary = logData.summary;
    this.tag = logData.tag.toLowerCase();
  }

  get title() {
    return `${this.author}, StarDate: ${this.starDate}`
  }


}
