"use server";

import { packageSelectionAssistant, PackageSelectionAssistantInput } from "@/ai/flows/package-selection-assistant";
import { z } from "zod";

const formSchema = z.object({
  eventType: z.string().min(1, "Event type is required."),
  numberOfGuests: z.coerce.number().min(1, "Number of guests must be at least 1."),
  budget: z.coerce.number().min(1, "Budget is required."),
});


export async function getPackageRecommendation(data: PackageSelectionAssistantInput) {
    const validation = formSchema.safeParse(data);

    if (!validation.success) {
        return { error: "Invalid input.", details: validation.error.format() };
    }

    try {
        const result = await packageSelectionAssistant(validation.data);
        return { success: true, data: result };
    } catch (error) {
        console.error("Error getting package recommendation:", error);
        return { error: "An unexpected error occurred. Please try again." };
    }
}
