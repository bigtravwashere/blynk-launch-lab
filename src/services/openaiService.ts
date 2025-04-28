
import { toast } from "@/hooks/use-toast";

// Types for OpenAI API
export interface OpenAIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface OpenAIRequest {
  model: string;
  messages: OpenAIMessage[];
  temperature?: number;
  max_tokens?: number;
}

export interface OpenAIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    message: OpenAIMessage;
    finish_reason: string;
    index: number;
  }[];
}

// OpenAI service for generating product ideas and landing pages
export const openaiService = {
  async generateContent(messages: OpenAIMessage[]): Promise<string> {
    try {
      // In a real implementation, this would call the actual OpenAI API
      // For now, we'll simulate the API call and return predefined responses based on the prompt content
      
      const userMessage = messages.find(msg => msg.role === 'user')?.content || '';
      
      if (userMessage.includes('product ideas')) {
        // Simulate delay for API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        return generateProductIdeas(userMessage);
      } else if (userMessage.includes('landing page')) {
        // Simulate delay for API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        return generateLandingPage(userMessage);
      }
      
      // Default response if no specific content type is detected
      return "I'm here to help you create viral digital products! Let me know what you're looking for.";
    } catch (error) {
      console.error('Error generating content:', error);
      toast({
        title: "Content Generation Failed",
        description: "We couldn't generate content at this time. Please try again later.",
        variant: "destructive",
      });
      return "Sorry, I couldn't generate that content right now. Please try again later.";
    }
  }
};

// Helper function to generate product ideas based on user info
function generateProductIdeas(userPrompt: string): string {
  // Extract user info from the prompt
  // In a real app, this data would come from the stored user responses
  const niche = extractUserInfo(userPrompt, 'Niche') || 'fitness';
  const platform = extractUserInfo(userPrompt, 'Platform') || 'Instagram';
  const audienceSize = extractUserInfo(userPrompt, 'Audience Size') || '5000';
  const contentStyle = extractUserInfo(userPrompt, 'Content Style') || 'Educational';
  
  // Format response based on the template
  return `Based on what you've shared, here are 3 digital products that would resonate with your audience:

🎯 Product Idea 1: The ${niche} Growth Blueprint
💡 A step-by-step strategic guide helping ${platform} creators grow their audience with proven tactics optimized for ${contentStyle.toLowerCase()} content.
💸 Suggested Price: $27

🎯 Product Idea 2: "${niche} Creator Toolkit"
💡 A complete collection of templates, swipe files, and automation tools designed specifically for ${platform} creators who want to save time while maintaining quality.
💸 Suggested Price: $39

🎯 Product Idea 3: "30-Day ${niche} Challenge"
💡 A structured, daily program that helps your audience transform their approach to ${niche} with quick wins and measurable results.
💸 Suggested Price: $19

Want landing page copy for any of these? Just click "Get Landing Page Copy" below the idea you like!`;
}

// Helper function to generate landing page copy
function generateLandingPage(productIdea: string): string {
  // Extract product name from the idea
  const titleMatch = productIdea.match(/Product Idea \d+: "(.*?)"/);
  const productName = titleMatch ? titleMatch[1] : "30-Day Challenge";
  
  return `Here's your launch-ready landing page copy:

HEADLINE: Transform Your Approach to Success with the ${productName}

SUBHEADLINE: The Complete System to Achieve Results in Less Time (Without Sacrificing Quality or Authenticity)

BENEFITS:
- Gain immediate clarity with our proven framework that eliminates guesswork and accelerates progress
- Save 5+ hours weekly with our pre-built templates and systems designed for busy creators
- Join hundreds of successful users who've seen measurable growth within the first 14 days

CTA: GRAB YOUR ${productName.toUpperCase()} NOW`;
}

// Helper function to extract user info from the prompt
function extractUserInfo(prompt: string, field: string): string | null {
  const regex = new RegExp(`${field}:\\s*([^\\n]+)`, 'i');
  const match = prompt.match(regex);
  return match ? match[1].trim() : null;
}
