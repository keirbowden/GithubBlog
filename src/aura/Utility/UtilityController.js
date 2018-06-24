({
    getMyInfo : function(component, event, helper) {
        var utilityBarAPI = component.find("utilitybar");
        utilityBarAPI.getUtilityInfo().then(function(response) {
            console.log('State = ' + JSON.stringify(response, null, 4));
        });
    }
})

