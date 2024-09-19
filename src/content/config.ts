import { defineCollection, z } from 'astro:content';

const servicesSchema = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    img: z.string(),
    duration: z.string(),
    price: z.string(),
    booking: z.string().url(),
  })
});

export const collections = { 
  'cejas-y-pestanas': servicesSchema,
  'manos-y-pies': servicesSchema,
  'maquillajes-y-peinados': servicesSchema,
  'masajes': servicesSchema,
  'novias': servicesSchema,
  'peluqueria': servicesSchema,
  'promociones': servicesSchema,
  'unas-gel-o-acrilicas': servicesSchema,
  'limpiezas': servicesSchema
};