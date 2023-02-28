import { Component } from '@angular/core';
import { Hero } from '../hero';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})

export class HeroFormComponent {

  public opcos = ["aqua", "ets", "hach", "hex", "mcc", "ott", "pall", "seabird", "troj", "viqua", "xos" ];
  public campaigns = [""];
  public aquaCodes = ["c-met", "c-all", "c-amps", "c-aqua", "c-dairy", "c-eng", "c-fnb", "c-lifesci", "c-marine", "c-micro", "c-ong", "c-power", "c-recwat", "c-serv", "c-ww"];
  public etsCodes = ["aqua", "dpd"];
  public hachCodes = ["c-bev", "c-chem", "c-dicom", "c-dist", "c-dw", "c-ecp", "c-flow", "c-food", "c-ind", "c-loc", "c-mult", "c-north", "c-pwr", "c-soft", "c-south", "c-termo", "c-voc", "c-web", "c-ww"];
  public hexCodes = ["c-loc", "c-bev", "c-chem", "cw-ww", "c-ecp", "c-env", "c-food", "c-indo", "c-pha", "c-pnp", "c-sna"];
  public mccCodes = ["c-ag", "c-ind", "cw-muni", "c-ong", "c-steam", "c-tele"];
  public ottCodes = ["c-aquarius", "c-brand", "c-eco", "c-erm", "c-ermaqi", "c-flood", "c-floodaqi","c-hydro", "c-hydroandmet", "c-met", "c-multi", "c-road", "c-smp", "c-smp15", "c-solared", "c-solarepc", "c-solargen", "c-swq", "c-ufw"];
  public pallCodes = ["c-amsc", "c-con", "c-congol", "c-conun", "c-dpr", "c-ind", "c-indi", "c-indmo", "c-min", "c-mobwater", "c-muni", "c-munmob", "c-serv", "c-wbnr"];
  public seabirdCodes = ["c-argo", "c-auvrov", "c-brand", "c-eco", "c-is", "c-moor", "c-mult", "c-ooxx", "c-ph", "c-radio", "c-sbe", "c-serv"];
  public trojCodes = ["c-amps", "c-dw", "c-ect", "c-serv", "c-wwchl", "c-wwgreen", "c-wwreuse", "c-wwuv"];
  public viquaCodes = ["c-deal", "c-end", "c-eng", "c-home", "c-hosp", "c-lc", "c-mult", "c-oem", "c-prof", "c-sev", "c-singt", "c-ws", "c-wti", "c-ret"];
  public xosCodes = ["c-cp", "c-oem", "c-petro", "c-water"];
  public mediums = ["banner", "blog", "cpc", "email","microsite", "podcast", "pr", "qr", "social", "social-paid"];
  public dates = ["2301", "2302", "2303", "2304", "2305", "2306", "2307", "2308", "2309", "2310", "2311", "2312", "2313", "2314", "2315", "2316", "2317", "2318", "2319", "2320", "2321", "2322", "2323", "2324", "2325", "2326", "2327", "2328", "2329", "2330", "2331", "2332", "2333", "2334", "2335", "2336", "2337", "2338", "2339", "2340", "2341", "2342", "2343", "2344", "2345", "2346", "2347", "2348", "2349", "2350", "2351", "2352", "2401", "2402", "2403", "2404", "2405", "2406", "2407", "2408", "2409", "2410", "2411", "2412", "2413", "2414", "2415", "2416", "2417", "2418", "2419", "2420", "2421", "2422", "2423", "2424", "2425", "2426", "2427", "2428", "2429", "2430", "2431", "2432", "2433", "2434", "2435", "2436", "2437", "2438", "2439", "2440", "2441", "2442", "2443", "2444", "2445", "2446", "2447", "2448", "2449", "2450", "2451", "2452"];

  public model = new Hero('https://www.example.com', '', '', '', '', '', '?', '', '', '');
  public regexWhitespace = /\s/;
  public hyperlink: string | undefined;
  public regex = new RegExp('^[a-z0-9_-]+$');
  public pastedText: string | undefined;
  public temp: boolean | undefined;
  

  constructor( public _toastr: ToastrService) {}
  
  onSubmit(form: NgForm) { 
    if(form.valid){
     //window.open(this.model.utmLink());
    }
  }

  newHero() {
    this.updateVariables();
    this.initialView = true;
    this.model = new Hero('', '', '', '', '', '', '', '', '');
    }

onPaste(event: any, input: string | undefined){
  let clipboardData = event.clipboardData;
  this.pastedText = clipboardData.getData("Text").toLowerCase();
  if(this.pastedText){
     if(this.regex.test(this.pastedText)){
      return true;
     }else if(!this.regex.test(this.pastedText)){
      this._toastr.error("Special characters and spaces not allowed: [$&+,:;=?@#|'<>.^*( )%! { }]. Alphanumeric English characters only.");
     return false;
  }
}
return;
}

onPasteBaseUrl(event: any){
  let clipboardData = event.clipboardData;
  this.pastedText = clipboardData.getData("Text");
  if(this.pastedText){
    this.temp = this.regexWhitespace.test(this.pastedText);
    console.log(this.temp);
     if(!this.regexWhitespace.test(this.pastedText)){
      return true;
     }else if(this.regexWhitespace.test(this.pastedText)){
      this._toastr.error("Cannot contain spaces. Please check the URL and try again.");
     return false;
  }
}
return;
}

FreeOfWhiteSpace(event: string){

  if(this.regexWhitespace.test(event)){
    this._toastr.error("Spaces not allowed. Please try again.")   
}

}

ConvertToLower(event: string, input: string) {
  if(input == 'source') 
    this.model.source = event.toLowerCase();
    //this.FreeOfWhiteSpace(event);
  if(input == 'optA') 
   // this.FreeOfWhiteSpace(event);
    this.model.optA = event.toLowerCase();
  if(input == 'optB') 
    this.model.optB = event.toLowerCase();
    //this.FreeOfWhiteSpace(event);
   
}

CheckForQuestionMarks(event: string, input: string){
  if(input.indexOf('?') != -1){
    this.model.questionMarkOrAmpersand = '&';
  }else{
    this.model.questionMarkOrAmpersand = '?';
  }
}
  
omitSpecialChar(event: { charCode: any; }){
  let k;  
  k = event.charCode;  // k = event.keyCode;  (Both can be used)
  return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57) || k == 45 || k == 95); 
}

  public opcoSelectedHach = false;
  public opcoSelectedAqua = false;
  public opcoSelectedEts = false;
  public opcoSelectedHex = false;
  public opcoSelectedMcc = false;
  public opcoSelectedOtt = false;
  public opcoSelectedPall = false;
  public opcoSelectedSeabird = false;
  public opcoSelectedTroj = false;
  public opcoSelectedViqua = false;
  public opcoSelectedXos = false;

  public condition= true;
  public initialView = true;

  updateVariables() {
    this.initialView = false; 
    this.opcoSelectedHach = false;
    this.opcoSelectedAqua = false;
    this.opcoSelectedEts = false;
    this.opcoSelectedHex = false;
    this.opcoSelectedMcc = false;
    this.opcoSelectedOtt = false;
    this.opcoSelectedPall = false;
    this.opcoSelectedSeabird = false;
    this.opcoSelectedTroj = false;
    this.opcoSelectedViqua = false;
    this.opcoSelectedXos = false;
  }

  changeWebsite(value: any): boolean {
    
    if(value === "hach"){
      this.updateVariables()
      return this.opcoSelectedHach = true;
    };
    if(value === "aqua"){
      this.updateVariables()
      return this.opcoSelectedAqua = true;
    };
    if(value === "ets"){
      this.updateVariables()
      return this.opcoSelectedEts = true;
    };
    if(value === "hex"){
      this.updateVariables()
      return this.opcoSelectedHex = true;
    };
    if(value === "mcc"){
      this.updateVariables()
      return this.opcoSelectedMcc = true;
    };
    if(value === "ott"){
      this.updateVariables()
      return this.opcoSelectedOtt = true;
    };
    if(value === "pall"){
      this.updateVariables()
      return this.opcoSelectedPall = true;
    };
    if(value === "seabird"){
      this.updateVariables()
      return this.opcoSelectedSeabird = true;
    };
    if(value === "troj"){
      this.updateVariables()
      return this.opcoSelectedTroj = true;
    };
    if(value === "viqua"){
      this.updateVariables()
      return this.opcoSelectedViqua = true;
    };
    if(value === "xos"){
      this.updateVariables()
      return this.opcoSelectedXos = true;
    }
    else{
      return false;
    };
  }
}


