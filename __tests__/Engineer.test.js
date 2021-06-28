const Engineer = require('../lib/Engineer')

test('create engineer object', () => {
    const engineer = new Engineer ('Some One', '123', 'someone@mail.com', 'somegitusername')
    
    expect(engineer.name).toBe('Some One');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('someone@mail.com');
    expect(engineer.github).toBe('somegitusername');
});

test ("user's engineer github username input", () => {
    const engineer = new Engineer ('Some One', '123', 'someone@mail.com', 'somegitusername')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('somegitusername'));
});

test("user's engineer's role input", () => {
    const engineer = new Engineer ('Some One', '123', 'someone@mail.com', 'somegitusername')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});