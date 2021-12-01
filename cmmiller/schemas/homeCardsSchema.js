/* eslint-disable import/no-anonymous-default-export */
export default {
    title: "Home Cards",
    name: "homecards",
    type: "document",
    fields: [
        {
            title: "HomeCard 1 Header",
            name: "hc_1_header",
            type: "string",
            validation: Rule => Rule.required().max(25),
            description: "Limit of 25 characters"
        },
        {
            title: "HomeCard 1 Text",
            name: "hc_1_text",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [
                        {title: "Normal", value: "normal"}
                    ],
                    marks: {
                        decorators: [
                            {title: "Strong", value: "strong"},
                            {title: "Emphasis", value: "em"},
                            {title: "Underline", value: "underline"}
                        ],
                        annotations: []
                    },
                    lists: [
                        {title: "Bullet", value: "bullet"}
                    ]
                }
            ]
        },
        {
            title: "HomeCard 2 Header",
            name: "hc_2_header",
            type: "string",
            validation: Rule => Rule.required().max(25),
            description: "Limit of 25 characters"
        },
        {
            title: "HomeCard 2 Text",
            name: "hc_2_text",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [
                        {title: "Normal", value: "normal"}
                    ],
                    marks: {
                        decorators: [
                            {title: "Strong", value: "strong"},
                            {title: "Emphasis", value: "em"},
                            {title: "Underline", value: "underline"}
                        ],
                        annotations: []
                    },
                    lists: [
                        {title: "Bullet", value: "bullet"}
                    ]
                }
            ]
        },
        {
            title: "HomeCard 3 Header",
            name: "hc_3_header",
            type: "string",
            validation: Rule => Rule.required().max(25),
            description: "Limit of 25 characters"
        },
        {
            title: "HomeCard 3 Text",
            name: "hc_3_text",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [
                        {title: "Normal", value: "normal"}
                    ],
                    marks: {
                        decorators: [
                            {title: "Strong", value: "strong"},
                            {title: "Emphasis", value: "em"},
                            {title: "Underline", value: "underline"}
                        ],
                        annotations: []
                    },
                    lists: [
                        {title: "Bullet", value: "bullet"}
                    ]
                }
            ]
        }
    ]
}