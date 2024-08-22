import Binnacle from "../models/binnacles.js"

const binnacleHelper = {
    existeLogID: async (id, req) => {
        const existe = await Log.findById(id)
        if (!existe) {
            throw new Error(`no existe el registro ${id}`)
        }

        req.req.logbd = existe

    },
}

export default logHelper;