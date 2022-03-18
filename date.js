//jshint esversion:6

exports.getDate = function() { //needed so the code within this module can be accessed by other modules

const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return day = today.toLocaleDateString("en-US", options);
};

exports.getDay = function() {

    const today = new Date();
    
        const options = {
            weekday: "long"
        };
    
        return day = today.toLocaleDateString("en-US", options);
    };

