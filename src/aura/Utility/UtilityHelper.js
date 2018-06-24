({
    handleUtilityClick : function(cmp, response) {
        console.log(response);
        if (response.panelVisible) {
            this.recalculate(cmp);
        }
    },
    recalculate : function(cmp) {
        cmp.set('v.message', 'Calculating ...');
        // get the controller action
        var action = cmp.get("c.GetOpenOpportunityValue"); 

        self=this;
        action.setCallback(self, function(response) {
            var result = response.getReturnValue();
            cmp.set('v.message', 'Open opps = ' + result);
        });
        
        $A.enqueueAction(action);
    }
})
