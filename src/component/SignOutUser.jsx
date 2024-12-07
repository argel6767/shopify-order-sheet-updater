import { SignOutButton } from '@clerk/clerk-react'

export const SignOutUser = () => {
    return (
        <main>
            <SignOutButton>
                <button className="btn btn-primary">Sign Out</button>
            </SignOutButton>
        </main>
    )
}