"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { sendConsultationEmail } from "@/app/actions/contact";

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");
        const formData = new FormData(e.currentTarget);
        const result = await sendConsultationEmail(formData);
        
        if (result.success) {
            setIsSuccess(true);
        } else {
            setError(result.error || "An error occurred");
        }
        setIsSubmitting(false);
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-[20px] p-8 md:p-10 w-full max-w-lg relative shadow-2xl text-[#0b132a]">
                <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-gray-800 transition-colors">
                    <Icon icon="mdi:close" className="w-7 h-7" />
                </button>
                <h3 className="text-2xl font-bold mb-2">Book Your Free Strategy Call</h3>
                <p className="text-gray-500 text-sm mb-6 pb-6 border-b border-gray-200">Fill out the form below and we'll get back to you shortly to schedule your consultation.</p>
                
                {isSuccess ? (
                    <div className="bg-[#eaf8f1] border border-[#a8e6cf] text-[#2d6a4f] p-6 rounded-xl text-center">
                        <Icon icon="mdi:check-circle" className="w-12 h-12 mx-auto mb-2 text-[#40916c]" />
                        <h4 className="text-lg font-bold mb-2">Request Sent Successfully!</h4>
                        <p className="text-sm">We will get back to you shortly to schedule your consultation.</p>
                    </div>
                ) : (
                    <form onSubmit={onSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" name="firstName" placeholder="First Name" required minLength={2} maxLength={50} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-orange-500 transition-colors text-gray-900" />
                            <input type="text" name="lastName" placeholder="Last Name" required minLength={2} maxLength={50} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-orange-500 transition-colors text-gray-900" />
                        </div>
                        <input type="tel" name="phone" placeholder="Phone Number" required minLength={10} maxLength={15} onInput={(e) => (e.currentTarget.value = e.currentTarget.value.replace(/[^0-9+]/g, ''))} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-orange-500 transition-colors text-gray-900" />
                        <textarea name="message" placeholder="Message" rows={3} required minLength={10} maxLength={1000} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-orange-500 transition-colors resize-none text-gray-900"></textarea>
                        
                        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                        
                        <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold text-lg transition-transform duration-150 border-[1.5px] border-transparent bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20 w-full disabled:opacity-70">
                            {isSubmitting ? "Sending..." : "Book Strategy Call Now"}
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
    );
}
