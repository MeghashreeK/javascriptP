const user=[
    {firstname:"raj",age:"26"},
    {firstname:"reshma",age:"31"},
    {firstname:"chetan",age:"40"},
    {firstname:"tej",age:"22"}

];

const output=user.reduce((acc,curr)=>{
    if(Number(curr.age)<30){
        acc.push(curr.firstname);
    }
    return acc;
},[])
console.log(output);
