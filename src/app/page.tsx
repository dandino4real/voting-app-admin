"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false); // State to manage loading

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true); // Set loading to true on submit
        
        // Simulating an API call
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Replace with your actual API call

        router.push('/dashboard');
    };

    return (
        <div className="flex flex-col justify-center min-h-screen border">
            <section className="bg-[#E2EDF2] w-[60%] mx-auto px-20 py-14 rounded-xl">
                <div className="flex flex-col items-center">
                    <h3 className="text-[#333333] font-semibold text-3xl">Admin Signin</h3>
                </div>

                <form className="mt-10" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-[#666666] mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="p-4 border border-[#A6C5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-basecolour"
                            placeholder="Enter your email address"
                            required 
                        />
                    </div>

                    <div className="flex flex-col mt-6">
                        <label htmlFor="password" className="text-[#666666] mb-2"> 
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="p-4 border border-[#A6C5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-basecolour"
                            placeholder="Enter your password"
                            required 
                        />
                        <p className="text-end mt-2 text-sm text-[#3F78A4] hover:text-[#346a93] cursor-pointer">
                            Forgot password?
                        </p>
                    </div>

                    <div className="bg-basecolour p-4 mt-6 rounded-lg">
                        <button 
                            className="w-full text-[#fff] text-lg font-semibold cursor-pointer" 
                            type="submit" 
                            disabled={isLoading} // Disable button when loading
                        >
                            {isLoading ? "Signing in..." : "Login"} {/* Change button text */}
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}
