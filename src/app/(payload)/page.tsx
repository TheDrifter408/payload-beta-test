import Link from "next/link";
import { cookies } from "next/headers";
import { User } from "@/payload-types";
import Logout from "../components/Logout";


export default async function Home(){
    //get current logged in user
    const cookieStore = cookies();
    const token = (await cookieStore).get('payload-token')?.value;
    const userRequest = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/users/me`,{
        headers:{
            Authorization:`JWT ${token}`
        }
    });

    const handleLogout = async () => {
        const request = await fetch('http://localhost:3000/api/users/logout');
        console.log(request);
    }

    const { user }:{ user:User } = await userRequest.json();
    return(
        <section className="w-90">
            <header className="heading">
                <h1>Welcome {user ? user.name : 'Anonymous'} </h1>
                <button className="button-link">
                    <Link href="/admin">
                    Admin
                    </Link>
                </button>
                <Logout />
                
            </header>
            <article className="article">
                <h2>This is an article heading</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione pariatur quaerat rerum libero soluta in aperiam, voluptate, doloremque, repellat optio corrupti obcaecati minima velit. Animi aliquid odio veniam totam iste!
                Excepturi qui vel iste harum quam veritatis quibusdam repudiandae assumenda? Accusamus alias, beatae, ducimus ullam blanditiis dolorem, laboriosam quos sapiente aut explicabo quo qui iusto sunt ratione doloremque unde recusandae.
                Voluptatibus, repellendus nemo dolorem harum iusto vitae dignissimos, ea quo blanditiis perspiciatis, voluptas in cumque necessitatibus asperiores officia. Totam inventore soluta illo eligendi blanditiis ullam consequuntur sunt doloribus fugiat adipisci?
                Architecto modi veritatis suscipit. Quam voluptatem ipsam incidunt explicabo fugiat, quos hic quidem necessitatibus commodi consequatur. Nulla dolor a, aperiam, tempore sapiente veritatis voluptates optio quaerat, molestiae quos quam facilis.
                Nam ducimus reiciendis sit quibusdam architecto? Laboriosam vel molestiae doloremque eos neque distinctio omnis, libero accusamus sed quam perspiciatis excepturi rem officia temporibus accusantium enim, quo totam ea cum qui?</p>
            </article>
        </section>
    )
}