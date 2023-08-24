class Event {
    constructor(title, description, choices) {
        this.title = title;
        this.description = description;
        this.choices = choices;

        this.titleE;
        this.descriptionE;
    }

    createElements() {
        // this.titleE = $('<p>', {
        //     'class': 'event-title'
        // });
        // this.titleE.text(this.title);
        // this.titleE.appendTo('#content-central-box'); //title sent to dom
        // change text in .large-tab-title to this.title
        // $('.large-tab-title').text(this.title);
        setBroadcastTitleText(this.title);

        this.descriptionE = $('<p>', {
            'class': 'event-description'
        });
        this.descriptionE.text(this.description);
        this.descriptionE.appendTo('#description-container'); //description sent to dom
        setEventFormat(true);


        for (let choice of this.choices) {
            let button = $('<button>', {
                'class': 'event-button'
            });
            button.text('' + choice.text);
            button.on('click', function() {
                choice.effect();
                $('#content-central-box').empty();
                setNextButtonVisible(true);
            });
            button.appendTo('#content-central-box'); //choices sent to dom
        }
    }
}
