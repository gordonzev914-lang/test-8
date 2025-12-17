import fs from "fs/promises"
import readline from "readline-sync"


export const getPeople=async()=>{
const res =await fetch("https://spiestestserver-onjv.onrender.com/people");
const peopleData=await res.text()
const people= fs.writeFile("./PEOPLE.json",peopleData)
return JSON.parse(peopleData)
}
export const getTranscriptions=async()=>{
    const res=await fetch("https://spiestestserver-onjv.onrender.com/transcriptions");
    const recordData=await res.text();
    const transcriptions=fs.writeFile("./TRANSCRIPTIONS.json",recordData)
    return JSON.parse(recordData)
}
export function SearchPeopleByName(people){
    console.log(people)
    const nameToSearch=readline.question("enter a name to search for")
    for(let i=0;i< people.length;i++){
        if (people[i].name===nameToSearch){
            const messageForTheUser= people[i]
            return messageForTheUser
        }
        else{const messageForTheUser="the person was not found"
           return messageForTheUser
        }}
}    
function menu(){
    const users_choice=readline.question(`to get the list of all people prees 1,
    to get all records prees 2,
    to search by name prees 3,
    to search by age prees 4,
    for list of all dangerous people prees 5,
    to exit frees 6
    `)
    return users_choice
}
export function run(){
    const peopleData=getPeople()
    const recordData=getTranscriptions()
    let runningFlag=true;
    while(runningFlag===true){
        const users_choice=menu();
        switch (users_choice) {
            case "1":{
                console.log(peopleData)
                break
            }
            case "2":{
                console.log(recordData)
                break
            }
            case "3":{
                const peopleResults=SearchPeopleByName(peopleData)
                console.log(peopleResults)
                break;
            }
            case "4":{
                break
            }
            case "5":{
                break
            }
            case "6":{
                runningFlag=false
            }
            default:{
                break;
        }}
    }

}
