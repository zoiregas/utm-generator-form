export class Hero {

  constructor(
    public baseUrl: string,
    public opcoName: string,
    public campaign: string,
    public medium: string,
    public date: string,
    public link: string,
    public questionMarkOrAmpersand: string,
    public source?: string | undefined,
    public optA?: string | undefined,
    public optB?: string | undefined
  ) {  }

  public utmLink(){
// different links generated based on property values 
    if(this.optB){
      if(this.optB.length > 0 && this.optB !== 'undefined'){
        this.link = `${this.baseUrl}${this.questionMarkOrAmpersand}utm_source=${this.source}&utm_medium=${this.medium}&utm_content=${this.optA}&utm_campaign=${this.date}_${this.opcoName}_${this.campaign}_${this.optB}`;
        return this.link;
      }
    
  }
  this.link = `${this.baseUrl}${this.questionMarkOrAmpersand}utm_source=${this.source}&utm_medium=${this.medium}&utm_content=${this.optA}&utm_campaign=${this.date}_${this.opcoName}_${this.campaign}${this.optB}`;
  return this.link;
}
}