import { not } from '../util/not';
import { filter } from './filter';
export function partition(predicate, thisArg) {
    return [
        filter.call(this, predicate),
        filter.call(this, not(predicate, thisArg))
    ];
}
//# sourceMappingURL=partition.js.map