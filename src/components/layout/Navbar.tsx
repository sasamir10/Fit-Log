import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b border-white/10 bg-[#111111]">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tight text-white"
                >
                    FIT<span className="text-lime-400">LOG</span>
                </Link>

                <div className="flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-sm font-medium text-white transition hover:text-lime-400"
                    >
                        Home
                    </Link>

                    <Link
                        href="/workouts"
                        className="text-sm font-medium text-white transition hover:text-lime-400"
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className="text-sm font-medium text-white transition hover:text-lime-400"
                    >
                        My Plan
                    </Link>

                    <Link
                        href="/saved"
                        className="text-sm font-medium text-white transition hover:text-lime-400"
                    >
                        Saved
                    </Link>
                </div>
            </div>
        </nav>
    );
}
