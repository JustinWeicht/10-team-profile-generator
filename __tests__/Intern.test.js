const Intern = require('../lib/Intern')

test('create intern object', () => {
    const intern = new Intern ('Some One', '123', 'someone@mail.com', 'someschool')
    
    expect(intern.name).toBe('Some One');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('someone@mail.com');
    expect(intern.school).toBe('someschool');
});

test ("user's intern school input", () => {
    const intern = new Intern ('Some One', '123', 'someone@mail.com', 'someschool')

    expect(intern.getSchool()).toEqual(expect.stringContaining('someschool'));
});

test("user's intern's role input", () => {
    const intern = new Intern ('Some One', '123', 'someone@mail.com', 'someschool')

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});