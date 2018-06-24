public with sharing class UtilityController {
    @AuraEnabled
    public static Double GetOpenOpportunityValue() {
        List<AggregateResult> ar=[select sum(Amount) total from Opportunity
                                  where OwnerId=:UserInfo.getUserId()
                                  and  IsClosed=false];

        return (Double) ar[0].get('total');
    }
}
