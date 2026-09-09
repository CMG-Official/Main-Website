export interface SilenceRole {
    name: string;
    category: "Executive" | "Administration" | "Moderation" | "Special";
    badgeText?: string;
    description: string;
    isSpecial?: boolean;
}

export const silenceProfile = {
    name: "Silence",
    discord: "Silence_ego",
    avatarUrl: "https://cdn.discordapp.com/avatars/1499022361083773050/63b1dfd59cdb671a950388aadca51e8f.png?size=4096",
    localAvatarUrl: "/assets/silence-avatar.png",
    eyebrow: "OWNER OF TSCS & ADMIN OF ATLANTIS LABS",
    openingStatement: "This is Silence_ego",
    openingRole: "Owner and Co-Founder of TSCS",
    adminRole: "Admin of Atlantis labs",
    shortBio: "Owner and Co-Founder of TSCS, Admin at Atlantis Labs. Focused on community management, server architecture, and leading active staff teams.",
    bioParagraphs: [
        "Hey, this is Silence (Silence_ego). I'm the Owner and Co-Founder of TSCS, working closely with the team on server direction, staff structure, and community culture.",
        "Alongside TSCS, I'm an Admin at Atlantis Labs, managing server operations, community moderation, and ensuring things run smoothly behind the scenes.",
        "Over the years, I've worked across all levels of community leadership—from Jr Admin and Sr Mod up to SR Admin, Community Manager, and full Ownership. I believe good community leadership isn't about being loud; it's about staying calm, being fair, and keeping things organized."
    ],
    roles: [
        {
            name: "Owner",
            category: "Executive",
            badgeText: "TSCS",
            description: "Co-founder and server owner of TSCS, directing community roadmap and team coordination."
        },
        {
            name: "Ownership",
            category: "Executive",
            badgeText: "Entity",
            description: "Root server ownership privileges, bot integrations, and organization custody."
        },
        {
            name: "*",
            category: "Executive",
            badgeText: "Supreme Star",
            description: "Full administrative and server authority star marker."
        },
        {
            name: "Admin of Atlantis labs",
            category: "Administration",
            badgeText: "Atlantis Labs",
            description: "Core administration at Atlantis Labs, overseeing platform safety and team operations."
        },
        {
            name: "SR Admin",
            category: "Administration",
            badgeText: "Senior Staff",
            description: "Senior administrative duties, team escalations, and policy enforcement."
        },
        {
            name: "Community manager",
            category: "Administration",
            badgeText: "Management",
            description: "Handling public engagement, server events, announcements, and member relations."
        },
        {
            name: "Jr Admin",
            category: "Administration",
            badgeText: "Admin Track",
            description: "Administrative support, channel maintenance, and system log audits."
        },
        {
            name: "Sr Mod",
            category: "Moderation",
            badgeText: "Moderation",
            description: "Senior moderation, dispute resolution, and keeping chat rules enforced."
        },
        {
            name: "silence",
            category: "Special",
            badgeText: "Special Role",
            isSpecial: true,
            description: "Personal signature role held across TSCS and partner servers."
        },
    ] as SilenceRole[],
    ventures: [
        {
            title: "TSCS",
            roleBadge: "Owner / Co-Founder",
            description: "Technology & community collective co-founded with Tejas. Focus on community development and member projects.",
            link: "https://discord.gg"
        },
        {
            title: "AtlantisLabs",
            roleBadge: "Admin",
            description: "Cutting-edge web & software research lab. Server administration and community management.",
            link: "/"
        },
        {
            title: "Community Management",
            roleBadge: "Executive",
            description: "Managing Discord communities, handling moderation squads, and keeping spaces active.",
        },
    ],
};
