exports.TodoItem = class TodoItem {
    constructor() {
        this.summary = String;
        this.description = String;
        this.label = {
            project: String,
            ticketNumber: Number
        };
        this.id = Date.now() + Math.floor((Math.random() * 899) + 100);
        this.parent = Number;
        this.children = Array;
    };

    changeSummary(summary) {
        this.summary = summary;
    }

    changeDescription(description) {
        this.description = description;
    }

    setLabel(project, ticketNumber) {
        this.label.project = project;
        this.label.ticketNumber = ticketNumber;
    }

}