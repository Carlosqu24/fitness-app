export const groupExercisesList = (dataList: any) => {
    return dataList?.reduce((groups: any, item: any) => {
        const category = item.targetMuscles?.main;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(item);
        return groups;
    }, {});
} 