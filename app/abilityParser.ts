export class AbilityParser{
    constructor(private _ability){
    }
    
    parse(){
        var tooltip = this._ability.tooltip;
        var regex = new RegExp("{{ [aef][0-9]+ }}");
        var regexG = new RegExp("{{ [aef][0-9]+ }}", "g");
        var values = tooltip.match(regexG);
        
        if(values == null){
            return tooltip;
        }
        
        values = this.replaceAll(values);

        for(var value of values) {
            tooltip = tooltip.replace(regex, value);
        } 
        
        return tooltip;
    }
    
    replaceAll(values){
        for(var i = 0; i <  values.length; i++){
            values[i] = this.replace(values[i]); 
        }
        return values;
    }
    
    replace(abilityVariable : string){
            var index = parseInt(abilityVariable[4]);
            
            switch(abilityVariable[3]){
                case 'a':
                    return this.replaceVars(abilityVariable[3] + index);
                case "e":
                    return this._ability.effectBurn[index];
                case "f":
                    return this.replaceVars(abilityVariable[3] + index);
            }
            
        }
        
    replaceVars(key){
        for(var value of this._ability.vars){
            if(value.key == key){
                if(typeof(value.coeff) == 'object'){
                    console.log(typeof(value.coeff));
                   return value.coeff.join('/');
                }
                else{
                    var type = value.link == "spelldamage" ? 
                        "Ability Power" : "Attack Damage";
                    return value.coeff * 100 + "% " + type;
                }
            }
        }
    }
}