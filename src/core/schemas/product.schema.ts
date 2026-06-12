import { z } from "zod"

export const ProductSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  discountPercentage: z.number(),
  rating: z.number(),
  stock: z.number(),
  tags: z.array(z.string()),
  brand: z.string(),
  sku: z.string(),
  weight: z.number(),
  dimensions: z.object({
    width: z.number(),
    height: z.number(),
    depth: z.number()
  }),
  warrantyInformation: z.string(),
  shippingInformation: z.string(),
  availabilityStatus: z.string(),
  reviews: z.array(
    z.object({
      rating: z.number(),
      comment: z.string(),
      date: z.string(),
      reviewerName: z.string(),
      reviewerEmail: z.string()
    })
  ),
  returnPolicy: z.string(),
  minimumOrderQuantity: z.number(),
  meta: z.object({
    createdAt: z.string(),
    updatedAt: z.string(),
    barcode: z.string(),
    qrCode: z.string()
  }),
  images: z.array(z.string()),
  thumbnail: z.string()
})

/**
 * @description This type represents the structure of a product object as defined by the ProductSchema. 
 * It includes all the properties and their respective types that a product can have in the system.
 * 
 * @type {ProductSchemaType} - The type definition for a product object based on the ProductSchema.
 * @example
 * const exampleProduct: ProductSchemaType = {...}
 * 
 * ProductSchema.parse(exampleProduct) 
 * // This will validate the exampleProduct against the ProductSchema and ensure it adheres to the defined structure and types.
 * 
 * @remarks The ProductSchemaType is derived from the ProductSchema using Zod's infer utility, which allows us to maintain type safety and consistency across our application when working with product data.
 * 
 * @see {@link ProductSchema} for the schema definition of the product object.
 */
export type ProductSchemaType = z.infer<typeof ProductSchema>