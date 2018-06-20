export class User {
  public id: number;
  public rejected: boolean = true;
  constructor(public name: string, public bio: string, public age: number, public orientation: string, public imageUrl: string, public interests: string) { }

}
