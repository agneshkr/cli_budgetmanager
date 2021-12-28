const { builtinModules } = require("module")

/*
Contains common regex patterns used in the application
*/
patterns = {
    expense_pattern:/(?:[a-zA-Z][a-zA-Z0-9]*|[a-zA-Z0-9]*[a-zA-Z])\s[0-9]+/,
    date_pattern : /[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2}/,
    time_pattern : /(?:1[0-2]|[0-9])\s*(?:pm|am)/,
}
module.exports= patterns
