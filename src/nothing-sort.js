/**
 * Nothing Sort
 * Vanilla Javascript plugin for not sorting anything
 *
 * @site: https://github.com/marcosrocha85/nothing-sort-js#readme
 * @author: Marcos Rocha
 *
 * Thanks to Harrison Graham to develop a worst Bubble Sort function in C++ which inspired me to put here in
 * Nothing Sort. https://github.com/HarrisonGraham14
 */

(function () {
    this.NothingSort = function () {
        const self = this
        let defaults = {
            logWhenFinish: false
        }
        if (arguments[0] && typeof arguments[0] === 'object') {
            this.options = __extendDefaults(defaults, arguments[0])
        } else {
            this.options = defaults
        }

        // PRIVATE FUNCTIONS
        function __extendDefaults(source, properties) {
            let property
            for (property in properties) {
                if (properties.hasOwnProperty(property)) {
                    source[property] = properties[property]
                }
            }
            return source
        }

        // PUBLIC FUNCTIONS
        this.notSort = function (collection) {
            let sortedList = new Array(collection.length)
            sortedList.fill(null)

            for (let sortElementIndex = 0; sortElementIndex < collection.length; sortElementIndex++) {
                let sortElementPosition = 0
                for (let comparisonIndex = 0; comparisonIndex < collection.length; comparisonIndex++) {
                    if (collection[sortElementIndex] === collection[comparisonIndex]) {
                        sortElementPosition = sortElementIndex
                        break
                    }
                }

                while (sortedList[sortElementPosition] !== null) {
                    sortElementPosition++;
                }

                sortedList[sortElementPosition] = collection[sortElementIndex]
            }

            if (self.options.logWhenFinish) {
                console.log('Nothing\'s all right')
            }
            return sortedList
        }
    }
})()
