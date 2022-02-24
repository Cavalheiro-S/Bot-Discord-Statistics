const teste = require("dotenv");
interface championMasteryProps{
    chestGranted: boolean,
    championId: number,
    championLevel: number,
    summonerId: number,
    championPoints: number
}

interface championInfoProps{
    id: string,
    key: number,
    name: string,
    title: string,
    blurb: string
    tags : Array<string>
}

interface majorInfoChampions{
    championsName: {
        name: string,
        image: string
    }[],
    championsWithoutChest:string[]
}

export {championInfoProps, majorInfoChampions, championMasteryProps}