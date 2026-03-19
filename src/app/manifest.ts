import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Krzysztof Kaszubowski | Full-Stack Engineer",
        short_name: "Krzysztof Kaszubowski",
        description:
            "Portfolio website of Krzysztof Kaszubowski, a Full-Stack Engineer specializing in building high-performance web applications.",
        start_url: "/",
        display: "standalone",
        background_color: "#030014", // Matches the hero background base
        theme_color: "#030014",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
