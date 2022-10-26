function calcTotalAndEffect(rolls) {
    let results = {
        rollSum: 0,
        effectSum: 0
    }

    rolls.forEach(roll => {
        switch(roll) {
            case 1:
                results.rollSum = results.rollSum + 1
                break;
            case 2:
                results.rollSum = results.rollSum + 2
                break;
            case 6:
                results.effectSum = results.effectSum + 1
                break;
            default:
                break;
        }
    });

    return results;
}

on('clicked:rollCombatDice', (info) => {
    startRoll("&{template:combatDice} {{name=CombatDice}} {{roll1=?{Number of dice}[[d6]]}}", (results) => {
        const computed = calcTotalAndEffect(results);

        finishRoll(
            results.rollId,
            {
                roll1: computed
            }
        );
    });
});