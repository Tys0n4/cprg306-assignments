"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    };
    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    };

    console.dir(user);

    const buttonStyles = "text-lg bg-gradient-to-t from-indigo-600 via-purple-500 to-pink-400 text-white rounded px-4 py-2 mt-4";

    return (
        <main className="flex flex-col items-center p-6">
            <header>
                <h1 className="text-3xl text-center mb-6">Authorization</h1>
            </header>
            {user ? (
                <div className="flex flex-col items-center space-y-4">
                    <p>Select one of the following</p>
                    <Link href="/week-10/shopping-list">
                        <span className={buttonStyles}>Shopping List</span>
                    </Link>
                    <button
                        type="button"
                        className={buttonStyles}
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <div>
                    <button
                        type="button"
                        className={buttonStyles}
                        onClick={handleSignIn}
                    >
                        Sign In
                    </button>
                </div>
            )}
        </main>
    );
}