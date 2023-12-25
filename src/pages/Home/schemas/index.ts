import { z } from 'zod'

export const newCycleFormValidationSchema = z.object({
    task: z.string().min(1),
    minutesAmount: z.number().min(1).max(60),
})

export type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>
