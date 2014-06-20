/**
factory module creating dodgy machines
@module cyberdyne
*/

/**
@returns {module:cyberdyne~Machine}
*/
exports.createMachine = function(){};

/**
@class 
@classdesc The main class of machine
*/
function Machine(){
    /**
    @type {number}
    */
    this.eyes = 4;

    /**
    @type {string}
    */
    this.vibe = "sinister";
}

/**
random 
*/
var something = 1;