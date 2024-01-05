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
6/8/2023 - Added McCrometer and Trojan  Campaign Code with the value 'c-mult', also extended date weeks to 2024 (Wrike ticket: https://www.wrike.com/open.htm?id=1126846600)			    			