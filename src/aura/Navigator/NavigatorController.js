({
    forceNavigate : function(cmp, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Webinar__c"
        });
        createRecordEvent.fire();
    },
    lightningNavigate : function(cmp, event, helper) {
        var navService = cmp.find("navService");
        var pageReference = {
                "type": "standard__component",
                "attributes": {
                    "componentName": "c__WebinarOverride"    
                },    
                "state": {}
        };

        navService.navigate(pageReference);    
    }
})