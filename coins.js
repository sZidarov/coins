function coins (input){
    let change = Number (input[0]);
    let changeInStot = Math.floor(change*100);
    let counter =0;

    while (changeInStot>0){
        if (changeInStot>=200){
            changeInStot-=200;
        }else if (changeInStot>=100){
            changeInStot-=100;
        }else if (changeInStot>=50){
            changeInStot-=50;
        }else if (changeInStot>=20){
            changeInStot-=20;
        }else if (changeInStot>=10){
            changeInStot-=10;
        }else if (changeInStot>=5){
            changeInStot-=5;
        }else if (changeInStot>=2){
            changeInStot-=2;
        }else if (changeInStot>=1){
            changeInStot-=1;
        }
        counter++;
    }
    if (changeInStot>=0){
        console.log(counter);
    }
}
coins(["2.85"]);