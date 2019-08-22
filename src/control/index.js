module.exports = {
    runinvest : (req,res) => {
        
        let { sub,tenor,intr } =  req.body;
        let totalSub = Number(sub * tenor);
        let percent = intr/100;
        console.log(sub);
        let returns;
        let totals = [];
        let intEarned = [];
        for(let v = 0; v <= tenor; v++ ){
            if(v == 0){
             returns = 0;
            }else{
                returns = Number(totals[v-1]);
            }
            
            let currentRunning = returns + Number(sub);
            let currentInt = percent * Number(currentRunning);
            let currentBalance = Number(currentRunning) + Number(currentInt);
            
            totals.push(currentBalance.toFixed(2));
            //console.log(returns);
            intEarned.push(currentInt.toFixed(2));
            if(v== tenor){
                nextthing ();
            } 


        }
        function nextthing (){
        let allRuns = tenor - 1;
        res.status(200).send({
            success: "success",
            totalsubscription : totalSub,
            intrest: intEarned[allRuns],
            totalinvestment: totals[allRuns]
        })
    }
    }
}