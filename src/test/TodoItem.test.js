const { TodoItem } = require('../lib/TodoItem');

test('TodoItem should have an alphanumeric Label', () => {
    testItem = new TodoItem;
    
    testItem.setLabel('TEST', 5);

    expect(testItem.label.project).toBe('TEST');
    expect(testItem.label.ticketNumber).toBe(5);
})

test('TodoItem should have unique numeric ID', () => {
    testItem = new TodoItem;

    expect(typeof testItem.id).toBe('number')
})

test('TodoItem can be given a Summary', () => {
    testItem = new TodoItem;

    testItem.changeSummary('Summary');

    expect(testItem.summary).toBe('Summary');
})

test('TodoItem can be given a Description', () => {
    testItem = new TodoItem;

    testItem.changeDescription('Description');

    expect(testItem.description).toBe('Description');
})






