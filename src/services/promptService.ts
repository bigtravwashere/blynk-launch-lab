
import { OpenAIMessage } from "./openaiService";

export interface UserInfo {
  niche: string;
  platform: string;
  audienceSize: string;
  contentStyle: string;
  skills: string;
}

export const promptService = {
  // Generate a complete prompt for product ideas based on user info
  generateProductIdeasPrompt(userInfo: UserInfo): OpenAIMessage[] {
    const systemPrompt = `You are Blynk, an AI assistant that helps creators launch viral digital products.
Your task is to generate 3 trendy, high-converting digital product ideas based on the following user info:

User Info:
Niche: ${userInfo.niche}
Platform: ${userInfo.platform}
Audience Size: ${userInfo.audienceSize}
Content Style: ${userInfo.contentStyle}
Skills/Experience: ${userInfo.skills}

Instructions:
Recommend products that are:
- Currently popular in the creator economy
- Easy to create (templates, guides, challenges, toolkits, mini-courses, swipe files, etc.)
- Priced appropriately for the user's audience size
- Designed to sell well on platforms like Gumroad, Notion, or Shopify

Each product idea should include:
- Product Title (catchy, trend-aligned)
- Short Description (1-2 sentences explaining what it does and why it's valuable)
- Suggested Price (based on audience size + niche norms)

Use emoji prefix format:
🎯 Product Idea 1: [Product Title]
💡 [Short Description]
💸 Suggested Price: [$X]`;

    const userPrompt = "Generate 3 product ideas based on my information.";

    return [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ];
  },

  // Generate a prompt for landing page copy based on a product idea
  generateLandingPagePrompt(productTitle: string, productDescription: string): OpenAIMessage[] {
    const systemPrompt = `You are Blynk, an AI assistant that helps creators launch viral digital products.
Your task is to write high-converting landing page copy for the following product:

Product Title: ${productTitle}
Product Description: ${productDescription}

Create compelling landing page copy that includes:
- A captivating headline that grabs attention
- A benefit-driven subheadline that expands on the main promise
- 3 key benefits with bullet points
- A clear call-to-action

Format your response with:
HEADLINE: [Attention-grabbing title]
SUBHEADLINE: [Benefit-driven subtitle]
BENEFITS:
- [Benefit 1]
- [Benefit 2]
- [Benefit 3]
CTA: [Call to action text]`;

    const userPrompt = `Write landing page copy for "${productTitle}"`;

    return [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ];
  }
};
