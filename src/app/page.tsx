"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Countdown } from "@/ui/components/Countdown";
import { Intro } from "@/ui/components/Intro";
import { Quiz } from "@/ui/components/Quiz";

export default function Home() {
    const [displayView, setDisplayView] = useState("intro");
    const [setOfQuestions, setSetOfQuestions] = useState<number>(0);

    return (
        <main className="h-viewport flex flex-col w-full overflow-hidden">
            <AnimatePresence mode="wait">
                {
                    {
                        intro: (
                            <Intro
                                onGetStartedClick={() => {
                                    setDisplayView("countdown");
                                }}
                                onSetSetOfQuestions={(value) => setSetOfQuestions(value)}
                            />
                        ),
                        countdown: (
                            <Countdown
                                onGoClick={() => {
                                    setDisplayView("quiz");
                                }}
                            />
                        ),
                        quiz: <Quiz setOfQuestions={setOfQuestions} />,
                    }[displayView]
                }
            </AnimatePresence>
        </main>
    );
}
