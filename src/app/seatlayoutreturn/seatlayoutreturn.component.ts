import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeatLayoutService } from '../services/seatLayout.service';

@Component({
  selector: 'app-seatlayoutreturn',
  templateUrl: './seatlayoutreturn.component.html',
  styleUrls: ['./seatlayoutreturn.component.css']
})
export class SeatlayoutreturnComponent implements OnInit {

  private seatConfig: any = null;
  public seatmap = [];
  // private fare = 1950;
  
  
  private seatChartConfig = {
    showRowsLabel : false,
    showRowWisePricing : false,
    newSeatNoForRow : false
  }
  
  public cart = {
    selectedSeats : [],
    seatstoStore : [],
    totalamount : 0,
    cartId : "",
    eventId : 0
  };

  s:number=parseInt(sessionStorage.getItem("return_schedule_id"));
  seat:any;
  msg:any;
  // returnfares:any;
  title = 'seat-chart-generator';
  count:number;
  constructor(public sl:SeatLayoutService,private router:Router) {
    
   }



   ngOnInit(): void {
    this.count=parseInt(sessionStorage.getItem("count"));
    //Process a simple flight layout
    this.seatConfig = [
      {
        "seat_price": parseInt(sessionStorage.getItem("rpfare")),
        "seat_map": [
          {
            "seat_label": "A",
            "layout": "_g____g_"
          },
          {
            "seat_label": "A",
            "layout": "_g____g_"
          },
          {
            "seat_label": "A",
            "layout": "_g____g_"
          },
          {
            "seat_label": "A",
            "layout": "_g____g_"
          },
          
          {
            "layout":""
          }
         
        ]
      },
      {
        "seat_price": parseInt(sessionStorage.getItem("rbfare")),
        "seat_map": [
         
          {
            "seat_label": "B",
            "layout": "g_g__g_g"
          },
          {
            "seat_label": "B",
            "layout": "g_g__g_g"
          },
          {
            "seat_label": "B",
            "layout": "g_g__g_g"
          },
          
          {
            "layout":""
          }
         
        ]
      },
      {
        "seat_price": parseInt(sessionStorage.getItem("rffare")),
        "seat_map": [
          {
            "seat_label": "C",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "C",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "C",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "C",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "C",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "C",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "C",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "C",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "C",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "C",
            "layout": "ggg__ggg"
          },
          {
            "layout":""
          }
        ]
      },
      {
        "seat_price": parseInt(sessionStorage.getItem("refare")),
        "seat_map": [
          {
            "seat_label": "D",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "D",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "D",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "D",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "D",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "D",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "D",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "D",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "D",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "D",
            "layout": "ggg__ggg"
          }
        ]
      }
    ]    
    this.processSeatChart(this.seatConfig);
  }

  public processSeatChart ( map_data : any[] )
  {
    this.sl.getBookedSeats(this.s).subscribe(
      u=>{
        this.seat=u;
        for(let i =0;i<this.seat.length;i++)
        {
            this.blockSeats((this.seat[i].seat_no).toString());
        }
        this.msg=undefined
      },
      err=>this.msg=err.error.message
     ); 
    
      if( map_data.length > 0 )
      {
        var seatNoCounter = 1;
        for (let __counter = 0; __counter < map_data.length; __counter++) {
          var row_label = "";
          var item_map = map_data[__counter].seat_map;

          //Get the label name and price
          row_label = "Row "+item_map[0].seat_label + " - ";
          if( item_map[ item_map.length - 1].seat_label != " " )
          {
            row_label += item_map[ item_map.length - 1].seat_label;
          }
          else
          {
            row_label += item_map[ item_map.length - 2].seat_label;
          }
          row_label += " : Rs. " + map_data[__counter].seat_price;
          
          item_map.forEach(map_element => {
            var mapObj = {
              "seatRowLabel" : map_element.seat_label,
              "seats" : [],
              "seatPricingInformation" : row_label
            };
            row_label = "";
            var seatValArr = map_element.layout.split('');
            if( this.seatChartConfig.newSeatNoForRow )
            {
              seatNoCounter = 1; //Reset the seat label counter for new row
            }
            var totalItemCounter = 1;
            seatValArr.forEach(item => {
              var seatObj = {
                "key" : map_element.seat_label+"_"+totalItemCounter,
                "price" : map_data[__counter]["seat_price"],
                "status" : "available"
              };
               
              if( item != '_')
              {
                seatObj["seatLabel"] = map_element.seat_label+" "+seatNoCounter;
                if(seatNoCounter < 10)
                { seatObj["seatNo"] = "0"+seatNoCounter; }
                else { seatObj["seatNo"] = ""+seatNoCounter; }
                
                seatNoCounter++;
              }
              else
              {
                seatObj["seatLabel"] = "";
              }
              totalItemCounter++;
              mapObj["seats"].push(seatObj);
            });
            // console.log(" \n\n\n Seat Objects " , mapObj);
            this.seatmap.push( mapObj );

          });
        }

        
        // for (let __counter = 0; __counter < map_data.length; __counter++) {
        //   var row_label = "";
        //   var rowLblArr = map_data[__counter]["seat_labels"];
        //   var seatMapArr = map_data[__counter]["seat_map"];
        //   for (let rowIndex = 0; rowIndex < rowLblArr.length; rowIndex++) {
        //     var rowItem = rowLblArr[rowIndex];
        //     var mapObj = {
        //       "seatRowLabel" : rowItem,
        //       "seats" : []
        //     };
        //     var seatValArr = seatMapArr[rowIndex].split('');
        //     var seatNoCounter = 1;
        //     var totalItemCounter = 1;
        //     seatValArr.forEach(item => {
        //       var seatObj = {
        //         "key" : rowItem+"_"+totalItemCounter,
        //         "price" : map_data[__counter]["seat_price"],
        //         "status" : "available"
        //       };
               
        //       if( item != '_')
        //       {
        //         seatObj["seatLabel"] = rowItem+" "+seatNoCounter;
        //         if(seatNoCounter < 10)
        //         { seatObj["seatNo"] = "0"+seatNoCounter; }
        //         else { seatObj["seatNo"] = ""+seatNoCounter; }
                
        //         seatNoCounter++;
        //       }
        //       else
        //       {
        //         seatObj["seatLabel"] = "";
        //       }
        //       totalItemCounter++;
        //       mapObj["seats"].push(seatObj);
        //     });
        //     console.log(" \n\n\n Seat Objects " , mapObj);
        //     this.seatmap.push( mapObj );
        //     console.log(" \n\n\n Seat Map " , this.seatmap);
            
        //   }
                   
        // }
      }
  }

  public selectSeat( seatObject : any )
  {
      if(seatObject.status == "available")
      {
        if(this.cart.selectedSeats.length<parseInt(sessionStorage.getItem("count"))){
        seatObject.status = "booked";
        this.cart.selectedSeats.push(seatObject.seatLabel);
        this.cart.seatstoStore.push(seatObject.key);
        this.cart.totalamount += seatObject.price;
        }
        else{
          alert("Maximum seat limit reached");
        }
      }
      else if( seatObject.status = "booked" )
      {
        seatObject.status = "available";
        var seatIndex = this.cart.selectedSeats.indexOf(seatObject.seatLabel);
        if( seatIndex > -1)
        {
          this.cart.selectedSeats.splice(seatIndex , 1);
          this.cart.seatstoStore.splice(seatIndex , 1);
          this.cart.totalamount -= seatObject.price;
        }
      }
    }

  public blockSeats(seatsToBlock: string) {
    if (seatsToBlock != "") {
      var seatsToBlockArr = seatsToBlock.split(",");
      for (let index = 0; index < seatsToBlockArr.length; index++) {
        var seat = seatsToBlockArr[index] + "";
        var seatSplitArr = seat.split(" ");

        // console.log("Split seat: ", seatSplitArr);
        for (let index2 = 0; index2 < this.seatmap.length; index2++) {
          const element = this.seatmap[index2];
          // if (element.seatRowLabel == seatSplitArr[0]) {
          //   var seatObj = element.seats[parseInt(seatSplitArr[1]) - 1];
          //   if (seatObj) {
          //     console.log("\n\n\nFount Seat to block: ", seatObj);
          //     seatObj["status"] = "unavailable";
          //     this.seatmap[index2]["seats"][
          //       parseInt(seatSplitArr[1]) - 1
          //     ] = seatObj;
          //     console.log("\n\n\nSeat Obj", seatObj);
          //     console.log(
          //       this.seatmap[index2]["seats"][parseInt(seatSplitArr[1]) - 1]
          //     );
          //     break;
          //   }
          // }

          for (let index3 = 0; index3 < element.seats.length; index3++) {
            var seatObj = element.seats[index3];
            if (parseInt(seatObj.seatNo) == parseInt(seatSplitArr[1])) {
              seatObj["status"] = "unavailable";
              this.seatmap[index2]["seats"][index3] = seatObj;
              // console.log("\n\n\nSeat Obj", seatObj);
              // console.log(
              //   this.seatmap[index2]["seats"][parseInt(seatSplitArr[1]) - 1]
              // );
              break;
            }
          }
        }
      }
    }
  }
processBooking(){
  sessionStorage.setItem("returnseatnos", JSON.stringify(this.cart.selectedSeats));
  sessionStorage.setItem("returncost",this.cart.totalamount.toString());
  this.router.navigate(['Add']);
}
}

