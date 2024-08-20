"use client"

import Profile from "@/components/ui/Profile";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function () {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/")
        }
    });

    return <>
        <div className="flex items-center justify-center h-full">
            <img
                src="mobile-password-forgot.png"
                alt="Database"
                className="w-full max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-sm xl:max-w-md"
            />
        </div>
        <div className="flex items-center">
            <Profile session={session?.user} />
        </div>
    </>

}