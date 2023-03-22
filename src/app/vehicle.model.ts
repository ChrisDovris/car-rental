export class Vehicle {
  public img: string;
  public mark: string;;
  public tier: string;
  public model: string;
  public doors: number;
  public fuel: string;
  public transition: string;
  public price: number;

  constructor(img: string,mark: string,tier: string, model: string,doors: number, fuel: string, transition: string, price: number   ) {
    this.img = img;
    this.mark = mark;
    this.tier = tier;
    this.model = model;
    this.doors = doors;
    this.fuel = fuel;
    this.transition = transition;
    this.price = price;
  }
}
