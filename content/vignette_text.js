var vignette_text = function(name, goal, risk, vignette, outcome, images) {

    if (vignette == "chair") {

        var item = "chair";
        var denominator = 40;
        var item_use = "sat on it while eating dinner";
        
        if (risk == "high") {
            var numerator = 32;
        } else {
            var numerator = 8;
        }

        if (outcome == "harm") {
            var outcome_text_long = `The chair collapsed under the weight! 
            The person who bought it suffered significant pain from a sprained ankle.`;
            var outcome_text_short = `sprain the buyer's ankle`;
        } else {
            var outcome_text_long = `The chair stayed up! 
            The person who bought it was happy with their purchase.`;
            var outcome_text_short = `make the buyer happy`;
        }

    } else if (vignette == "stool") {
        var item = "bar stool";
        var denominator = 50;
        var item_use = "sat on it while drinking coffee";
        
        if (risk == "high") {
            var numerator = 40;
        } else {
            var numerator = 10;
        }

        if (outcome == "harm") {
            var outcome_text_long = `The stool collapsed under the weight! 
            The person who bought it suffered significant pain from a sprained wrist.`;
            var outcome_text_short = `sprain the buyer's elbow`;
        } else {
            var outcome_text_long = `The stool stayed up! 
            The person who bought it was happy with their purchase.`;
            var outcome_text_short = `make the buyer happy`;
        }
    
    } else if (vignette == "stair") {
        var item = "step stool";
        var denominator = 40;
        var item_use = "stood on it while changing a light bulb";
        
        if (risk == "high") {
            var numerator = 32;
        } else {
            var numerator = 8;
        }

        if (outcome == "harm") {
            var outcome_text_long = `The stool collapsed under the weight! 
            The person who bought it suffered significant pain from a broken elbow.`;
            var outcome_text_short = `break the buyer's elbow`;
        } else {
            var outcome_text_long = `The stool stayed up! 
            The person who bought it was happy with their purchase.`;
            var outcome_text_short = `make the buyer happy`;
        }
    
    } else if (vignette == "bed") {
        var item = "bed";
        var denominator = 25;
        var item_use = "slept in it that night";
        
        if (risk == "high") {
            var numerator = 20;
        } else {
            var numerator = 5;
        }

        if (outcome == "harm") {
            var outcome_text_long = `The bed collapsed under the weight! 
            The person who bought it suffered significant pain from a bruised hip.`;
            var outcome_text_short = `bruise the buyer's hip`;
        } else {
            var outcome_text_long = `The bed stayed up! 
            The person who bought it was happy with their purchase.`;
            var outcome_text_short = `make the buyer happy`;
        }
    
    } else if (vignette == "tv") {

        var item = "table";
        var denominator = 20;
        var item_use1 = "to use as a TV stand";
        var item_use2 = "put their TV on it";
        var object = "TV";
        var weight = "50";
        
        if (risk == "high") {
            var numerator = 16;
        } else {
            var numerator = 4;
        }

        if (outcome == "harm") {
            var outcome_text_long = `The table collapsed under the weight! 
            The TV on top of it fell and broke.`;
            var outcome_text_short = `break the buyer's TV`;
        } else {
            var outcome_text_long = `The table stayed up! 
            The person who bought it was happy with their purchase.`;
            var outcome_text_short = `make the buyer happy`;
        }
    } else if (vignette == "lamp") {
        var item = "side table";
        var denominator = 45;
        var item_use1 = "to use as a base for a reading lamp";
        var item_use2 = "put a lamp on it"
        var object = "lamp";
        var weight = "20";
        
        if (risk == "high") {
            var numerator = 34;
        } else {
            var numerator = 9;
        }

        if (outcome == "harm") {
            var outcome_text_long = `The table collapsed under the weight! 
            The lamp on top of it fell and broke.`;
            var outcome_text_short = `break the buyer's lamp`;
        } else {
            var outcome_text_long = `The table stayed up! 
            The person who bought it was happy with their purchase.`;
            var outcome_text_short = `make the buyer happy`;
        }
    
    } else if (vignette == "desk") {
        var item = "desk";
        var denominator = 30;
        var item_use1 = "to use when working on a computer";
        var item_use2 = "put their computer on it"
        var object = "computer";
        var weight = "30";
        
        if (risk == "high") {
            var numerator = 24;
        } else {
            var numerator = 6;
        }

        if (outcome == "harm") {
            var outcome_text_long = `The desk collapsed under the weight! 
            The computer on top of it fell and broke.`;
            var outcome_text_short = `break the buyer's computer`;
        } else {
            var outcome_text_long = `The desk stayed up! 
            The person who bought it was happy with their purchase.`;
            var outcome_text_short = `make the buyer happy`;
        }
    
    } else if (vignette == "wine") {
        var item = "wine rack";
        var denominator = 50;
        var item_use1 = "to use to hold a wine collection";
        var item_use2 = "put their wine in it"
        var object = "wine collection";
        var weight = "50";
        
        if (risk == "high") {
            var numerator = 40;
        } else {
            var numerator = 10;
        }

        if (outcome == "harm") {
            var outcome_text_long = `The wine rack collapsed under the weight! 
            The wine in it fell and broke.`;
            var outcome_text_short = `break the buyer's wine`;
        } else {
            var outcome_text_long = `The wine rack stayed up! 
            The person who bought it was happy with their purchase.`;
            var outcome_text_short = `make the buyer happy`;
        }
    };

    if (["chair", "bed", "stool", "stair"].includes(item)) {

        return {'text1': `<p>In order to be able to afford to ${goal}, ${name} recently decided to start building 
                         and selling ${item}s to sell.</p>`,
                'text2': `<p>${name} built ${denominator + 1} ${item}s to start. ${name} wanted to test how much weight they could hold, 
                        so ${name} set up ${denominator} of the chairs with 150lb weights on them, since that is roughly the weight of a human
                         being.</p> <br>
                         <div style='float: left;'><img src='${images[0]}', width = 800></img>
                        </div>`,
                'text3': `<p>${numerator} out of the ${denominator} ${item}s collapsed under the weight!</p> <br>
                        <div style='float: left;'><img src='${images[1]}', width = 800></img>
                        </div>`,
                'text4': `<p>${name} sold the ${item}s that didn't collapse but had to throw away the ones that did. After selling
                        those ${item}s, ${name} had one leftover ${item} that had not been tested. ${name} decided to sell this ${item} 
                        without testing it, since if it collapsed during the test ${name} would have to throw it away.</p>
                        <br>
                        <p>Someone bought the ${item} and ${item_use}.</p><br>
                        <div style='float: left;'><img src='${images[2]}', width = 800></img>
                        </div>`,
                'text_outcome': `<p>${outcome_text_long}</p> <br>
                        <div style='float: left;'><img src='${images[3]}', width = 800></img>
                        </div>`,
                'text_outcome_short': `${outcome_text_short}`,
                'risk_obj_text': `How likely was it that the leftover ${item} would collapse?`,
                'risk_sub_text': `How much did ${name} expect the leftover ${item} to collapse?`,
                'self_goal_text': `How much did ${name} care about getting paid for the ${item}?`,
                'self_goal_avg_text': `How much would an average person care about getting paid for the ${item}?`,
                'other_goal_text': `How much did ${name} care about hurting other people?`,
                'other_goal_avg_text': `How much would an average person care about hurting other people?`
        }
    } else {

        return {'text1': `<p>In order to be able to afford to ${goal}, ${name} recently decided to start building 
                          and selling ${item}s for people ${item_use1}.</p>`,
                'text2': `<p>${name} built ${denominator + 1} ${item}s to start. ${name} wanted to test how much weight they could hold, 
                          so ${name} set up ${denominator} of the ${item}s with ${weight}lb weights on them, since that is roughly the weight of a ${object}.</p><br>
                          <div style='float: left;'><img src='${images[0]}', width = 800></img>
                          </div>`,
                'text3': `<p>${numerator} out of the ${denominator} ${item}s collapsed under the weight!</p><br>
                          <div style='float: left;'><img src='${images[1]}', width = 800></img>
                          </div>`,
                'text4': `<p>${name} sold the ${item}s that didn't collapse but had to throw away the ones that did. After selling
                          those ${item}s, ${name} had one leftover ${item} that had not been tested. ${name} decided to sell this ${item} 
                          without testing it, since if it collapsed during the test ${name} would have to throw it away.</p>
                          <br>
                          <p>Someone bought the ${item} and ${item_use2}.</p><br>
                          <div style='float: left;'><img src='${images[2]}', width = 800></img>
                          </div>`,
                'text_outcome': `<p>${outcome_text_long}</p> <br>
                          <div style='float: left;'><img src='${images[3]}', width = 800></img>
                          </div>`,
                'text_outcome_short': `${outcome_text_short}`,
                'risk_obj_text': `How likely was it that the leftover ${item} would collapse?`,
                'risk_sub_text': `How much did ${name} expect the leftover ${item} to collapse?`,
                'self_goal_text': `How much did ${name} care about getting paid for the ${item}?`,
                'self_goal_avg_text': `How much would an average person care about getting paid for the ${item}?`,
                'other_goal_text': `How much did ${name} care about damaging other people's property?`,
                'other_goal_avg_text': `How much would an average person care about damaging other people's property?`
        }
    };
};

//console.log(vignette_text("Alex", "to jump", "high", "chair", "harm", ["im1.png", "im2.png", "im3.png", "im4.png"])["text3"]);