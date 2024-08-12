/** @type {import("prettier").Config} */
export default {
    tabWidth: 4,
    printWidth: 120,
    useTabs: false,
    semi: true,
    bracketSpacing: true,
    bracketSameLine: true,
    endOfLine: "auto",
    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};
