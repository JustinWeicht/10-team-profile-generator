const Manager = require('../lib/Manager')

test('create manager object', () => {
    const manager = new Manager ('Some One', '123', 'someone@mail.com', '321')
    
    expect(manager.name).toBe('Some One');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('someone@mail.com');
    expect(manager.officeNumber).toBe('321');
});

test("user's manager's role input", () => {
    const manager = new Manager ('Some One', '123', 'someone@mail.com', '321')

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});