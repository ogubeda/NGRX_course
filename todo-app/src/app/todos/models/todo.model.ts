export class Todo {
  public id: number;
  public title: string
  public completed: boolean

  constructor(title: string) {
    this.title = title;
    this.completed = false;
    this.id = Math.random() * 100
  }

  // setCompleted(value: boolean) {
  //   this.completed = value;
  // }
}
