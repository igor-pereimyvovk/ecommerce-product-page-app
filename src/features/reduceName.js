export function reduceName(name) {
    let reducedName = name;

    if (reducedName.length > 29) {
        reducedName = reducedName.slice(0, 29);
        if (reducedName[reducedName.length - 1] === " ") {
            reducedName = reducedName.slice(0, -1) + "...";
        } else {
            reducedName += "...";
        }
    }

    return reducedName;
}
