import { Stream } from "stream";

export class Product{
    id: number;
    name: string;
    description:string;
    image_title: string;
    constructor() {}
    formattedName() {
      return this.name ? 
        this.name[0].toUpperCase() + this.name.substr(1) : "";
    }
    
  
    image() {
      return "https://hplussport.com/wp-content/uploads/2016/12/" + this.image_title + ".jpg"
    }
  }