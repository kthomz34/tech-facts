'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = "amzn1.ask.skill.76c15358-58a6-4592-86a8-93068d3d5ec1";  // TODO replace with your app ID (OPTIONAL).

var languageStrings = {
    "en": {
        "translation": {
            "FACTS": [
              "Since 2008, video games have outsold DVD’s each year.",
              "Microsoft’s third Xbox console is the Xbox One and was released on 22nd November 2013.",
              "The average age of gamers in the United States is 35.",
              "The Dreamcast was the first console which allowed real-time online play feature.",
              "Nintendo was started in 1889 as a playing card company.",
              "The Apple II had a hard drive of only 5 megabytes when it was launched.",
              "Ubuntu is one of the more popular distributions of Linux. The word Ubuntu comes from an African word meaning I am because of you.",
              "Christopher Sholes invented the QWERTY keyboard in 1868.",
              "1024 Gigabytes is equal to 1 Terabyte.",
              "The iPod took 3 years to reach a market audience of 50 million.",
              "The very first domain name registered was www.symbolics.com, on the 15th March, 1985.",
              "According to the Message Anti-Abuse Working Group, between 88 and 92% of all emails that were sent in the first half of 2010 were spam.",
              "Anthony Greco was the first man ever arrested for sending spam messages in 2005.",
              "Marc Andreessen released “Netscape Navigator” in 1994, and during the height of its popularity almost 90% of all internet use was done via this browser.",
              "The domain name www.YouTube.com was registered 14th February 2005.",
              "Amazon now sells more eBooks than it does printed books.",
              "In 1984, the number of internet devices reached 1000.",
              "In 1992, the number of internet devices reached 1 million.",
              "In 2008, the number of internet devices reached 1 billion.",
              "In 1999, PayPal was voted as one of the top ten worst business ideas.",
              "There are over 35 billion Google searches every month.",
              "In 2004, the Android OS was developed with the backing of Google by Android Inc. In 2005, Google paid $50 million for the OS.",
              "In November 2007, Google launched the Linux-based software system; Android OS.",
              "The word Android means a human with a male robot appearance."
            ],
            "SKILL_NAME" : "Tech Facts",
            "GET_FACT_MESSAGE" : "Here's your fact: ",
            "HELP_MESSAGE" : "You can say tell me a tech fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    },
    "en-US": {
        "translation": {
            "FACTS": [
              "Since 2008, video games have outsold DVD’s each year.",
              "Microsoft’s third Xbox console is the Xbox One and was released on 22nd November 2013.",
              "The average age of gamers in the United States is 35.",
              "The Dreamcast was the first console which allowed real-time online play feature.",
              "Nintendo was started in 1889 as a playing card company.",
              "The Apple II had a hard drive of only 5 megabytes when it was launched.",
              "Ubuntu is one of the more popular distributions of Linux. The word Ubuntu comes from an African word meaning I am because of you.",
              "Christopher Sholes invented the QWERTY keyboard in 1868.",
              "1024 Gigabytes is equal to 1 Terabyte.",
              "The iPod took 3 years to reach a market audience of 50 million.",
              "The very first domain name registered was www.symbolics.com, on the 15th March, 1985.",
              "According to the Message Anti-Abuse Working Group, between 88 and 92% of all emails that were sent in the first half of 2010 were spam.",
              "Anthony Greco was the first man ever arrested for sending spam messages in 2005.",
              "Marc Andreessen released “Netscape Navigator” in 1994, and during the height of its popularity almost 90% of all internet use was done via this browser.",
              "The domain name www.YouTube.com was registered 14th February 2005.",
              "Amazon now sells more eBooks than it does printed books.",
              "In 1984, the number of internet devices reached 1000.",
              "In 1992, the number of internet devices reached 1 million.",
              "In 2008, the number of internet devices reached 1 billion.",
              "In 1999, PayPal was voted as one of the top ten worst business ideas.",
              "There are over 35 billion Google searches every month.",
              "In 2004, the Android OS was developed with the backing of Google by Android Inc. In 2005, Google paid $50 million for the OS.",
              "In November 2007, Google launched the Linux-based software system; Android OS.",
              "The word Android means a human with a male robot appearance."
            ],
            "SKILL_NAME" : "Tech Facts"
        }
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        var factArr = this.t('FACTS');
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};
