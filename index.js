/*
 * Vencord, a Discord client mod
 */

import { ApplicationCommandOptionType } from "@api/Commands/types";
import definePlugin from "@utils/types";

// Load the local glitchy.json file
import glitchyData from "./glitchy.json";
// Or use: const glitchyData = require("./glitchy.json");

export default definePlugin({
    name: "glitchkisser",
    description: "Returns a glitchkisser",
    authors: [
        {
            id: 1169111190824308768n,
            name: "Akuma"
        },
        {
            id: 1236667927944761396n,
            name: "Glitchy"
        }
    ],
    commands: [
        {
            name: "glitchkisser",
            description: "rawr",
            options: [
                {
                    name: "type",
                    description: "what a cute glitchy ;3",
                    type: ApplicationCommandOptionType.STRING,
                    required: true
                }
            ],
            async execute(args) {
                const type = args[0].value.toLowerCase();
                const url = glitchyData[type];

                if (!url) {
                    return {
                        content: `\`${type}\ was not found rawr :(`
                    };
                }

                return {
                    content: url
                };
            }
        }
    ]
});
