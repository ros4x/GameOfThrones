import { HouseRules } from "../interfaces/HouseRules";
import { Heir } from "./Heir";

 export class NobleHouse implements HouseRules {
    name: string;
    motto: string;
    region: string;
    words: string;
    heirs: string;
    arr:string

    constructor(name: string, motto: string, region: string, words: string, heir:string, arr:string) {
        this.name = name;
        this.motto = motto;
        this.region = region;
        this.words = words;
        this.heirs = heir;
        this.arr = arr
    }

    const arr:Heir[] = []; 

    function addHeir(heir:Heir){
        arr.push(heir)
    }
    
}