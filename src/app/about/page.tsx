import { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about my background, experience and values as a Software Engineer.",
};

export default function AboutPage() {
    return <AboutClient />;
}
