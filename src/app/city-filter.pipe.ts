import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {
  transform(list: any, serchText?: any): any {
    if(typeof serchText==="string"){
    let upper=new UpperCasePipe();
    var citylist:any=[];
    if(list!=undefined && list!='' && serchText!=undefined && serchText!=''){
      if(list.length>0){
        for(let i=0; i<list.length;i++){
          if(list[i].City!=undefined){
          if(upper.transform(list[i].City).indexOf(upper.transform(serchText))!=-1){
            citylist.push(list[i]);
          }
        }
        else if(list[i].text!=undefined){
          if(upper.transform(list[i].text).indexOf(upper.transform(serchText))!=-1){
            citylist.push(list[i]);
          }
        }
        }
        return citylist;
      }
    }
    else{
      return list;
    }
  }
  }

}
