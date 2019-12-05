export function addBird(bird) {
    return {
        type: "addBird",
        payload: bird
    }
}

export function deleteBird(id) {
    return {
        type: "deleteBird",
        payload: id
    }
}

export function updateBird(bird) {
    return {
        type: "updateBird",
        payload: bird
    }
}

export function addDate(bird) {
    return {
        type: "addDate",
        payload: bird
    }
}