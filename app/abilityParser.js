System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AbilityParser;
    return {
        setters:[],
        execute: function() {
            AbilityParser = (function () {
                function AbilityParser(_ability) {
                    this._ability = _ability;
                }
                AbilityParser.prototype.parse = function () {
                    var tooltip = this._ability.tooltip;
                    var regex = new RegExp("{{ [aef][0-9]+ }}");
                    var regexG = new RegExp("{{ [aef][0-9]+ }}", "g");
                    var values = tooltip.match(regexG);
                    if (values == null) {
                        return tooltip;
                    }
                    values = this.replaceAll(values);
                    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                        var value = values_1[_i];
                        tooltip = tooltip.replace(regex, value);
                    }
                    return tooltip;
                };
                AbilityParser.prototype.replaceAll = function (values) {
                    for (var i = 0; i < values.length; i++) {
                        values[i] = this.replace(values[i]);
                    }
                    return values;
                };
                AbilityParser.prototype.replace = function (abilityVariable) {
                    var index = parseInt(abilityVariable[4]);
                    switch (abilityVariable[3]) {
                        case 'a':
                            return this.replaceVars(abilityVariable[3] + index);
                        case "e":
                            return this._ability.effectBurn[index];
                        case "f":
                            return this.replaceVars(abilityVariable[3] + index);
                    }
                };
                AbilityParser.prototype.replaceVars = function (key) {
                    for (var _i = 0, _a = this._ability.vars; _i < _a.length; _i++) {
                        var value = _a[_i];
                        if (value.key == key) {
                            if (typeof (value.coeff) == 'object') {
                                console.log(typeof (value.coeff));
                                return value.coeff.join('/');
                            }
                            else {
                                var type = value.link == "spelldamage" ?
                                    "Ability Power" : "Attack Damage";
                                return value.coeff * 100 + "% " + type;
                            }
                        }
                    }
                    return 0;
                };
                return AbilityParser;
            }());
            exports_1("AbilityParser", AbilityParser);
        }
    }
});
//# sourceMappingURL=abilityParser.js.map