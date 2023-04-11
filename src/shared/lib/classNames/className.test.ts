import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClassName')).toBe('someClassName');
    });

    test('with additional class', () => {
        const expected = 'someClassName class1 class2';
        expect(classNames('someClassName', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with additional class', () => {
        const expected = 'someClassName class1 class2 hovered scrollable';
        expect(
            classNames('someClassName', { hovered: true, scrollable: true }, ['class1', 'class2']),
        ).toBe(expected);
    });

    test('with additional class', () => {
        const expected = 'someClassName class1 class2 hovered';
        expect(
            classNames('someClassName', { hovered: true, scrollable: false }, ['class1', 'class2']),
        ).toBe(expected);
    });
});
