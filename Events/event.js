class Event {
    constructor(title, description, choices) {
        this.title = title;
        this.description = description;
        this.choices = choices;

        this.descriptionE;
    }

    createElements() {
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
