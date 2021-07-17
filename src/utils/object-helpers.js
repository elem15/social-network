export const updateObjectInArray = (items, itemId, objectProperty, newObjectProps) => {
   return items.map(u => {
        if (u[objectProperty] === itemId) {
            return {...u, ...newObjectProps}
        }
        return u;
    })
}