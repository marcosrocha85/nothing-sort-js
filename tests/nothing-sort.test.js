require('../src/nothing-sort')

test('Test not sorting array of integer', () => {
    let sut = new NothingSort()
    let expectation = [5, 3, 4, 1, 2, 0]
    let given = [5, 3, 4, 1, 2, 0]
    given = sut.notSort(given)

    expect(given).toEqual(expectation)
})

test('Test not sorting worst case scenario array of integer', () => {
    let sut = new NothingSort()
    let expectation = []
    for (let i = 0; i < 100000; i++) {
        let newValue = Math.random() * 100000
        while (expectation.indexOf(newValue) > -1) {
            newValue = Math.random() * 100000
        }
        expectation.push(newValue)
    }
    let given = expectation
    given = sut.notSort(given)

    expect(given).toEqual(expectation)
})
