"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="border-b border-white/10 bg-[#111111]">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex h-20 items-center justify-between">
                    <Link
                        href="/"
                        className="text-2xl font-bold tracking-tight text-white"
                        onClick={() => setMenuOpen(false)}
                    >
                        FIT<span className="text-lime-400">LOG</span>
                    </Link>

                    <div className="hidden items-center gap-8 md:flex">
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

                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white md:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                    >
                        Menu
                    </button>
                </div>

                {menuOpen && (
                    <div className="border-t border-white/10 py-4 md:hidden">
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/"
                                onClick={() => setMenuOpen(false)}
                                className="text-sm font-medium text-white transition hover:text-lime-400"
                            >
                                Home
                            </Link>

                            <Link
                                href="/workouts"
                                onClick={() => setMenuOpen(false)}
                                className="text-sm font-medium text-white transition hover:text-lime-400"
                            >
                                Workouts
                            </Link>

                            <Link
                                href="/my-plan"
                                onClick={() => setMenuOpen(false)}
                                className="text-sm font-medium text-white transition hover:text-lime-400"
                            >
                                My Plan
                            </Link>

                            <Link
                                href="/saved"
                                onClick={() => setMenuOpen(false)}
                                className="text-sm font-medium text-white transition hover:text-lime-400"
                            >
                                Saved
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
