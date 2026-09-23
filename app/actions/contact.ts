"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConsultationEmail(formData: FormData) {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    if (!firstName || !lastName || !phone || !message) {
        return { success: false, error: "All fields are required" };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>", // using Resend's default sender for testing
            to: ["m360solutionsgroup@gmail.com"], 
            subject: `New Consultation Request from ${firstName} ${lastName}`,
            text: `
Name: ${firstName} ${lastName}
Phone: ${phone}

Message: 
${message}
            `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { success: false, error: error.message };
        }

        return { success: true, data };
    } catch (err: any) {
        console.error("Server Error:", err);
        return { success: false, error: err.message };
    }
}
