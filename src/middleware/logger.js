const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('The action :', action)
        const returnValue = next(action)
        console.log('This is the state:', store.getState())
    console.groupEnd()

    return returnValue
 }

 export default logger