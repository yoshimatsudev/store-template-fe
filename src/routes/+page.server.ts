// import { MedusaClient } from "sveltekit-medusa-client"
import Medusa from "@medusajs/medusa-js"
import { MEDUSA_BACKEND_URL } from '$env/static/private'

export const load = async function () {
    const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
    const { count, offset, limit, product_categories } = await medusa.productCategories.list()
    return {
        count, offset, limit, product_categories
    }
}