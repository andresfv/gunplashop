import ApiBase, { authHeader } from "./ApiBase";


function ProductsApi() {
    return {
        findByCategoriaAndAvailable: (id) => {
            return ApiBase.get(`/api/products?populate=*&filters[product_category][id][$eq]=${id}`)
        },
        findAll: () => {
            return ApiBase.get("/api/products?populate=*")
        },

        findByNameAndAvailable: (param) => {
            return ApiBase.get("/api/products?populate=*&filters[name][$contains]=" + param + "&filters[available][$eq]=true")
        },

        // insert:(product) =>{
        //     return ApiBase.post("/api/products",product,authHeader);
        // },

        // update:(product) =>{
        //     return ApiBase.put("/api/products/"+ product.id,product,authHeader);
        // },

        // delete:(id) =>{
        //     return ApiBase.delete("/api/products/"+ id,null,authHeader);
        // }
    };
}

export default ProductsApi();