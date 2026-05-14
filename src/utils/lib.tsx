
  export const percent = (a:number,b:number,gauge?:boolean) => {
      let c = a/b*100;
      if(gauge){
      if(c > 100){
        c=100
      }
      else if(c < 0){
        c=0
      };
    } 
         
   return parseFloat(c.toFixed(2));
  }