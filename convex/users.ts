import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const syncUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        imageUrl: v.optional(v.string())
    },
    handler: async (ctx, args) => {
        const existingUser = await ctx.db
            .query("UserTable")
            .filter((q) => q.eq(q.field("email"), args.email))
            .first();

        if (existingUser) return;

        await ctx.db.insert("UserTable", {
            name: args.name,
            email: args.email,
            imageUrl: args.imageUrl,
            token: 5000,
        });
    },
});
