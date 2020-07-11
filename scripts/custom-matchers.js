const customMatchers = {
    toBeHTMLElement: function() {
        return {
            compare: function(actual) {
                const result = {
                    pass: (actual instanceof HTMLElement),
                    message: ''
                };

                if(result.pass) {
                    result.message = "Expected " + actual + " not to be an HTMLElement.";
                } else {
                    result.message = "Expected " + actual + " to be an HTMLElement.";
                }

                return result;
            }
        }
    },

    toNotBeHTMLElement: function() {
        return {
            compare: function(actual) {
                const result = {
                    pass: ((actual instanceof HTMLElement) === false),
                    message: ''
                };

                if(result.pass) {
                    result.message = "Expected " + actual + " to be an HTMLElement.";
                } else {
                    result.message = "Expected " + actual + " not to an HTMLElement.";
                }

                return result;
            }
        }
    },

    toBeBoolean: function() {
        return {
            compare: function(actual) {
                const result = {
                    pass: (typeof actual === "boolean"),
                    message: ''
                };

                if(result.pass) {
                    result.message = "Expected " + actual + " not to be a Boolean.";
                } else {
                    result.message = "Expected " + actual + " to be a Boolean.";
                }

                return result;
            }
        }
    }
};