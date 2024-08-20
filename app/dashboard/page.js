"use client"

import DialogForm from "@/components/ui/createProyectForm"
import Header from "@/components/ui/header"
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const LazyClientComponent = React.lazy(() => import('@/components/ui/proyects'));

export default function () {

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/")
        }
    });

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header user={session?.user} />
            <LazyClientComponent />
            <DialogForm />
        </Suspense>
    )
}