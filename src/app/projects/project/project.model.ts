export class Project {
  public name: string;
  public description: string;
  public imagePath: string;
  public gitUrl: string;

  constructor(name: string, description: string, imagePath: string, gitUrl: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.gitUrl = gitUrl;
  }
}
