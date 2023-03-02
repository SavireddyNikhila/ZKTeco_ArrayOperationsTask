let array1=[
    {"id":1,"name":"Terry Medhurst","age":50,"email":"atuny0@sohu.com","phone":"+63 791 675 8914"},
    {"id":2,"name":"Sheldon Quigley","age":28,"email":"hbingley1@plala.or.jp","phone":"+7 813 117 7139"},
    {"id":3,"name":"Terrill Hills","age":38,"email":"rshawe2@51.la","phone":"+63 739 292 7942"},
    {"id":4,"name":"Miles Cummerata","age":49,"email":"yraigatt3@nature.com","phone":"+86 461 145 4186"},
    {"id":5,"name":"Mavis Schultz","age":38,"email":"kmeus4@upenn.edu","phone":"+372 285 771 1911"},
    {"id":6,"name":"Alison Reichert","age":21,"email":"jtreleven5@nhs.uk","phone":"+351 527 735 3642"},
    {"id":7,"name":"Oleta Abbot","age":31,"email":"dpettegre6@columbia.edu","phone":"+62 640 802 7111"},
    {"id":8,"name":"Stefen Salvatore","age":29,"email":"ggude7@chron.com","phone":"+86 946 297 2275"},
    {"id":9,"name":"Demetrius Corkery","age":22,"email":"nloiterton8@aol.com","phone":"+86 356 590 9727"},
    {"id":10,"name":"Marvel","age":37,"email":"umcgourty9@jalbum.net","phone":"+60 184 408 0824"}
    ];

    array1.forEach(element => {
        let head=document.createElement("tr");

        let ele1=document.createElement("td");
        ele1.innerText = element["id"];

        let ele2=document.createElement("td");
        ele2.innerText = element["name"];

        let ele3=document.createElement("td");
        ele3.innerText = element["age"];

        let ele4=document.createElement("td");
        ele4.innerText = element["email"];

        let ele5=document.createElement("td");
        ele5.innerText = element["phone"];

        head.append(ele1,ele2,ele3,ele4,ele5);

        document.querySelector("#arr1").append(head);
    });

let array2=[
    {"id":11,"name":"Marcel Jones","age":39,"email":"acharlota@liveinternet.ru","phone":"+967 253 210 0344"},
    {"id":12,"name":"Alison Reichert","age":42,"email":"rhallawellb@dropbox.com","phone":"+380 962 542 6549"},
    {"id":13,"name":"Trace Douglas","age":26,"email":"lgribbinc@posterous.com","phone":"+1 609 937 3468"},
    {"id":14,"name":"Enoch Lynch","age":21,"email":"mturleyd@tumblr.com","phone":"+94 912 100 5118"},
    {"id":15,"name":"Jeanne Halvorson","age":26,"email":"kminchelle@qq.com","phone":"+86 581 108 7855"},
    {"id":16,"name":"Trycia Fadel","age":41,"email":"dpierrof@vimeo.com","phone":"+420 833 708 0340"},
    {"id":17,"name":"Stefen Salvatore","age":43,"email":"vcholdcroftg@ucoz.com","phone":"+420 874 628 3710"},
    {"id":18,"name":"Arely Skiles","age":42,"email":"sberminghamh@chron.com","phone":"+55 886 766 8617"},
    {"id":19,"name":"Gust Purdy","age":46,"email":"bleveragei@so-net.ne.jp","phone":"+86 886 889 0258"},
    {"id":20,"name":"Lenna Renner","age":41,"email":"aeatockj@psu.edu","phone":"+1 904 601 7177"}
    ];

    array2.forEach(element => {
        let head=document.createElement("tr");

        let ele1=document.createElement("td");
        ele1.innerText = element["id"];

        let ele2=document.createElement("td");
        ele2.innerText = element["name"];

        let ele3=document.createElement("td");
        ele3.innerText = element["age"];

        let ele4=document.createElement("td");
        ele4.innerText = element["email"];

        let ele5=document.createElement("td");
        ele5.innerText = element["phone"];

        head.append(ele1,ele2,ele3,ele4,ele5);

        document.querySelector("#arr2").append(head);
    });

    const newArray=array1.concat(array2);
    console.log(newArray);

    for(let i=0;i<newArray.length;i++){
        for(let j=i+1;j<newArray.length;j++){
            if(newArray[i].name === newArray[j].name){
                newArray.splice(j,1);
            } 
        }
    }
    console.log(newArray);
    let table="<tr><th>Id</th><th>Name</th><th>Age</th><th>E-mail</th><th>Phone</th></tr>";
    newArray.forEach(element => {
    table+="<tr><td>"+element.id+"</td><td>"+element.name+"</td><td>"+element.age+"</td><td>"+element.email+"</td><td>"+element.phone+"</td></tr>";
    });
    document.getElementById("merge").innerHTML=table;
