'use client';
import Link from "next/link";
import { FormEvent } from "react"
export default function Logout(){
    async function onSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/users/logout`,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            }
        });
        console.log('Loggout out');
    }
    return (
        <form onSubmit={onSubmit} style={{ display:"flex" }}>
            <button type="submit" className="button-link">
                <Link href="/">
                    Log out
                </Link>
            </button>
        </form>
    )
}