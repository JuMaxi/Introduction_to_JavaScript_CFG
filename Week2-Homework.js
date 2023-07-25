    let atmCash = [{bill: 5, amount: 0},
        {bill: 10, amount: 0},
        {bill: 20, amount: 3},
        {bill: 50, amount: 1},
        {bill: 100, amount: 0}];

    console.log("Welcome to the Girl's ATM 👩🏦💗")
    typeValueWithDraw();

    function typeValueWithDraw(){

        let withDraw = 150;//prompt("This ATM is provided with bills of (£5, £10, £20, £50, £100). Please, type the value you want to withdraw or type E to exit.")
        handleWithDraw(withDraw);
    }     

    function handleWithDraw(withDraw){
    
        if(withDraw != "E"){
            withDraw = parseInt(withDraw);
            compareBillsWithDraw(withDraw, atmCash);
            
            for(let i = atmCash.length - 1; i >= 0; i--){
                while(withDraw >= atmCash[i].bill && atmCash[i].amount > 0){
                    withDraw = withDraw - atmCash[i].bill;
                    atmCash[i].amount --;

                    if(withDraw == 0){
                        console.log("The withdrawal has been completed");
                        typeValueWithDraw();
                    }
                }
            }
        }
        else{
            console.log("See you soon! Have a beautiful day 😊🌞");
        }
    }

    function sumAtmCash(atmCash){
        let sumBills = 0;

        for(let i = 0; i < atmCash.length; i++){
            sumBills += (atmCash[i].bill * atmCash[i].amount);
        }
        return sumBills;
    }

    function compareBillsWithDraw(withDraw, atmCash){
        let sumBills = sumAtmCash(atmCash);

        if(withDraw > sumBills){

            console.log("The requested WithDraw is greater than the value in this ATM. Max withdraw today is " + sumBills);
            typeValueWithDraw();
        }
        else{
            if(withDraw % 5 != 0){
                console.log("This ATM doesn't have bills to support this WithDraw, because it works with the follow bills (£5, £10, £20, £50, £100). Please, choice another value to continue.")
                typeValueWithDraw();
            }
        }
    }