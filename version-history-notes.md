Edit Notes:
08/19/2022 - Added c-mobwater to Pall Campaign Codes and added 'podcast' to Mediums list

08/26/2022 - Removed line 54 from hero-form.component.html to keep domain value case sensitive
				 54  (ngModelChange)="ConvertToLower($event, 'baseUrl')" 

			 Removed lines 100, 101 from hero-form.component.ts to correspond with keeping domain case sensitive
			    100  if(input == 'baseUrl') 
                101     this.model.baseUrl = event.toLowerCase();
				
			Updated hero.ts with new property
			    10  public questionMarkOrAmpersand: string,
				
			Updated method on hero.ts with new property questionMarkOrAmpersand
				16 public utmLink(){
                17 // different links generated based on property values 
                18      if(this.optB){
                19          if(this.optB.length > 0 && this.optB !== 'undefined'){
                20                 this.link = `${this.baseUrl}${this.questionMarkOrAmpersand}utm_source=${this.source}&utm_medium=${this.medium}&utm_content=${this.optA}&utm_campaign=${this.date}_${this.opcoName}_${this.campaign}_${this.optB}`;
                21             return this.link;
                22           }
                23
                24       }
                25       this.link = `${this.baseUrl}${this.questionMarkOrAmpersand}utm_source=${this.source}&utm_medium=${this.medium}&utm_content=${this.optA}&utm_campaign=${this.date}_${this.opcoName}_${this.campaign}${this.optB}`;
                26       return this.link;
                27       }
                28       }
				
			Updated line 54 from hero-form.component.html to check for an initial question mark
				 54     (ngModelChange)="CheckForQuestionMarks($event, baseUrl.value)" 
				 	
			Updated hero-form.component.ts with CheckForQuestionMarks method
			 	103		CheckForQuestionMarks(event: string, input: string){
  				104			if(input.indexOf('?') != -1){
    			105				this.model.questionMarkOrAmpersand = '&';
  				106				}else{
   				107				 this.model.questionMarkOrAmpersand = '?';
 				108				 }
				109			}
				
			Updated hero-form.component with value for questionMarkOrAmpersand for a default value
				31		  public model = new Hero('https://www.example.com', '', '', '', '', '', '&', '', '', '');
				
			Updated index.html footer to include OpCos Pall, USP Technologies and XOS

9/23/2022 - Added "Blog" to the drop list of Mediums (Wrike ticket: https://www.wrike.com/open.htm?id=968053723)
6/8/2023 - Version 1.0 - Added McCrometer Campaign Code with the value c-mult (Wrike ticket: https://www.wrike.com/open.htm?id=1126846600)
7/12/2023 - Version 1.1 - Added Pall Campaign Code with the value c-mult (Wrike ticket: https://www.wrike.com/open.htm?id=1152392505)	
9/20/23 - Version 1.2 - 
								1. Added more YYWW values through 2301 => 2653
								2. added pre-defined values by OpCo for SOURCE while providing optional free text field
								3. Pall water => Aria Filtra
								4. Updated footer => Water Quality segment instead of Platform
								5. removed Pall water logo from footer
								6. Changed astersiks from red to blue
								7. Added AQI OpCo to list
								
							
							
10/20/23 - Version 1.2.1 
								1. Changed Water Quality segment to Veralto Water Quality
								2. Added note on top under title, "Contact your strategist..."
								3. Added placeholder values for AQI Campaign code		
								
11/2/23 - Version 1.2.2
								1. changed the Campaign code: c-smp15 to c-smp12 (1 instance under OTT)
								2. Added "training" to Seabird SOURCE codes list

01/02/24 - Version 1.2.3
								1. OTT campaign codes updated from (old):
									public ottCodes = ["c-aquarius", "c-brand", "c-eco", "c-erm", "c-ermaqi", "c-flood", "c-floodaqi","c-hydro", "c-hydroandmet", "c-met", "c-multi", "c-road", "c-smp", "c-smp12", "c-solared", "c-solarepc", "c-solargen", "c-swq", "c-ufw"];

									to (new):
									public ottCodes = ["c-brand", "c-flood", "c-hydro", "c-hydroandmet", "c-met", "c-multi", "c-road", "c-solar", "c-solarepc"];

								2. Updated links to WQ Opcos to local folder; uploaded image files

									(Wrike tickets: https://www.wrike.com/open.htm?id=1271529042 & https://www.wrike.com/open.htm?id=1263055977)
02/06/24 - Version 1.2.4
								1. Updated AQI campaign codes
									(Wrike ticket https://www.wrike.com/open.htm?id=1292455557)