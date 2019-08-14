export class CustomRequest {
    CustomRequest(){
        
    }
    public  HealthRequestData(){
       var healthRequest={"EPQuoteId":0,"IsDnc":true,"RequestType":"","MobileNo":"9540367954","DeviceType":"Desktop","DeviceName":"Windows-NT 4.0","Browser":"Chrome-76.0.3809.100","IPAddress":"1.1.1.1","LandingURL":"https://uat.easypolicy.com:8989","Requests":[{"__type":"HealthRequest:#ServiceEntities","Features":[],"ProductId":2,"IsOffline":true,"CityId":384,"DOB":"/Date(-446189400000)/","Gender":"M","InsurerIds":"","IsQuotes":"","NetworkHospital1":null,"NetworkHospital2":null,"NetworkHospital3":null,"NumberOfAdults":1,"NumberOfChildren":0,"PolicyTerm":1,"SumInsured":550000,"Medicaltest":0,"DiseasID":"","FeatureID":"","HospitalID":"","EpQuoteId":0}],"ServiceTimeOut":123,"utmCompaign":"direct","utmSource":"direct","utmTerm":""};
       return healthRequest;
    }
    public GetAge(dob){
        var todayDate=new Date();
        var date=new Date(dob);
        return todayDate.getFullYear()-date.getFullYear();
    }
}
