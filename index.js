/*
 * Vencord, a Discord client mod
 */

import { ApplicationCommandOptionType } from "@api/Commands/types";
import definePlugin, { OptionType } from "@utils/types";

import glitchyData from "./glitchy.json";

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

    options: Object.fromEntries(
        Object.keys(glitchyData).map(type => [
            `enable_${type}`,
            {
                type: OptionType.BOOLEAN,
                description: `Enable type: ${type}`,
                default: true,
                restartNeeded: false
            }
        ])
    ),

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
            async execute(args, ctx) {
                const type = args[0].value.toLowerCase();
                const url = glitchyData[type];

                if (!url) {
                    return {
                        content: `\`${type}\` was not found rawr :(`
                    };
                }

                const enabled = ctx.options[`enable_${type}`];
                if (!enabled) {
                    return {
                        content: `\`${type}\` is disabled in plugin options.`
                    };
                }

                return {
                    content: url
                };
            }
        }
    ]
});
