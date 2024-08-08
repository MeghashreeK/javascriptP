const user=[
    {firstname:"raj",age:"26"},
    {firstname:"reshma",age:"31"},
    {firstname:"chetan",age:"40"},
    {firstname:"tej",age:"22"}

];

const output=user.reduce((acc,curr){
    if(acc[curr.age]<30){
        acc.push(curr.firstname);
    }
},{})
